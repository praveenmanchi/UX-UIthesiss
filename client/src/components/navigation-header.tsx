import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShareButtons from "./share-buttons";
import { cn } from "@/lib/utils";
import logoSvg from "@assets/UXUI-logo.svg";

export default function NavigationHeader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const currentScrollY = window.scrollY;
      
      // Hide navigation header when scrolling past hero section
      setIsVisible(currentScrollY <= heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePdfDownload = () => {
    window.print();
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-accent transition-all duration-300",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}
      data-testid="navigation-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src={logoSvg} 
              alt="UX/UI Timeline" 
              className="h-7 w-auto brightness-0 dark:brightness-0 dark:invert"
              data-testid="logo-header"
            />
          </div>
          
          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="hover-lift border-accent hover:bg-accent/50"
              onClick={handlePdfDownload}
              data-testid="button-pdf-download"
            >
              <span className="flex items-center space-x-2">
                <span>PDF</span>
                <Download className="w-4 h-4" />
              </span>
            </Button>
            <ShareButtons />
          </div>
        </div>
      </div>
    </header>
  );
}
