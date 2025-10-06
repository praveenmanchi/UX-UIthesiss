import { useState, useEffect, useRef } from "react";
import { Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShareButtons from "./share-buttons";
import BylineStrip from "./byline-strip";
import { cn } from "@/lib/utils";

export default function StickyNavigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  const sections = [
    { id: "origins", label: "Origins" },
    { id: "revolution", label: "Revolution" },
    { id: "formalization", label: "Formalization" },
    { id: "tools", label: "Tools" },
    { id: "economics", label: "Economics" },
    { id: "claims", label: "Claims" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // Show navigation after scrolling past hero section
      const shouldBeVisible = currentScrollY > heroHeight;
      setIsVisible(shouldBeVisible);
      
      // Detect scroll direction for show/hide behavior
      if (shouldBeVisible) {
        if (currentScrollY < lastScrollY.current) {
          setIsScrollingUp(true);
        } else if (currentScrollY > lastScrollY.current) {
          setIsScrollingUp(false);
        }
      }
      
      lastScrollY.current = currentScrollY;

      // Update active section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      })).filter(item => item.element);

      const currentSection = sectionElements.find(section => {
        const rect = section.element!.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    const throttledHandleScroll = () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(handleScroll, 10);
    };

    window.addEventListener("scroll", throttledHandleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  const handlePdfDownload = () => {
    window.print();
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of sticky nav
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Sticky Navigation Bar */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          "bg-background/90 backdrop-blur-md border-b border-accent/20",
          isVisible && isScrollingUp ? "translate-y-0" : "-translate-y-full",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        data-testid="sticky-navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Branding and Condensed Byline */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#8AA97A" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="#8AA97A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="#8AA97A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-display font-semibold text-sm sm:text-base">UX/UI Timeline</span>
              </div>
              {/* Condensed Byline - Hidden on mobile */}
              <div className="hidden md:block border-l border-accent/20 pl-4">
                <BylineStrip variant="condensed" showScrollProgress={true} />
              </div>
            </div>

            {/* Center: Section Navigation - Desktop */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-all duration-200",
                    "hover:text-accent",
                    activeSection === section.id
                      ? "text-accent border-b-2 border-accent"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  data-testid={`nav-anchor-${section.id}`}
                >
                  {section.label}
                </button>
              ))}
            </nav>

            {/* Right: Actions - Desktop */}
            <div className="hidden sm:flex items-center space-x-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="hover-lift border-accent/30 hover:border-accent hover:bg-accent/10 transition-all"
                onClick={handlePdfDownload}
                data-testid="button-sticky-pdf-download"
              >
                <span className="flex items-center space-x-2">
                  <span>PDF</span>
                  <Download className="w-4 h-4" />
                </span>
              </Button>
              <ShareButtons />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors"
              data-testid="button-mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "sm:hidden overflow-hidden transition-all duration-300",
            "bg-background/95 backdrop-blur-md border-t border-accent/20",
            isMobileMenuOpen ? "max-h-96" : "max-h-0"
          )}
        >
          <div className="px-4 py-4 space-y-3">
            {/* Mobile Navigation Links */}
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all",
                  "hover:bg-accent/10",
                  activeSection === section.id
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:text-foreground"
                )}
                data-testid={`nav-mobile-anchor-${section.id}`}
              >
                {section.label}
              </button>
            ))}
            
            {/* Mobile Actions */}
            <div className="flex gap-3 pt-3 border-t border-accent/20">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1 border-accent/30 hover:border-accent hover:bg-accent/10"
                onClick={handlePdfDownload}
                data-testid="button-mobile-pdf-download"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>PDF</span>
                  <Download className="w-4 h-4" />
                </span>
              </Button>
              <div className="flex-1">
                <ShareButtons />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content jump when nav becomes sticky */}
      {isVisible && <div className="h-16" />}
    </>
  );
}