import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollDistance = documentHeight - windowHeight;
      const progress = scrollDistance > 0 ? (scrollTop / scrollDistance) * 100 : 0;
      
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    // Initial check
    handleScroll();

    // Add event listener with throttling
    let ticking = false;
    const updateScrollProgress = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", updateScrollProgress);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Progress bar container - fixed at very top */}
      <div 
        className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-background/50"
        data-testid="scroll-progress-container"
        aria-hidden="true"
      >
        {/* Progress bar fill */}
        <div
          className={cn(
            "h-full transition-all duration-150 ease-out",
            "bg-[#8AA97A]",
            "shadow-[0_0_10px_rgba(138,153,122,0.5)]"
          )}
          style={{
            width: `${scrollProgress}%`,
            transformOrigin: "left",
          }}
          data-testid="scroll-progress-bar"
        />
        
        {/* Subtle glow effect at the end of the progress bar */}
        <div
          className={cn(
            "absolute top-0 h-full w-8 bg-gradient-to-r from-[#8AA97A] to-transparent opacity-60",
            "blur-sm transition-all duration-150"
          )}
          style={{
            left: `calc(${scrollProgress}% - 8px)`,
            opacity: scrollProgress > 0 && scrollProgress < 100 ? 0.6 : 0,
          }}
        />
      </div>

      {/* Optional percentage indicator (hidden by default, can be shown on hover/focus) */}
      <div
        className={cn(
          "fixed top-3 right-4 z-[60] text-xs font-mono text-accent opacity-0",
          "transition-opacity duration-300",
          "pointer-events-none select-none",
          // Uncomment to show on scroll
          // scrollProgress > 0 && scrollProgress < 100 && "opacity-50"
        )}
        data-testid="scroll-progress-percentage"
      >
        {Math.round(scrollProgress)}%
      </div>
    </>
  );
}