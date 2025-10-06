import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import BylineStrip from "./byline-strip";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Design Element - Geometric Shapes */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        style={{ transitionDelay: '800ms' }}
      >
        <div className="relative">
          {/* Main geometric shape - design tool inspired */}
          <div className="relative animate-float">
            <div 
              className="absolute w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-lg bg-accent/10 rotate-12"
              style={{ animation: 'float 6s ease-in-out infinite' }}
            />
            <div 
              className="absolute w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-lg bg-accent/5 rotate-6"
              style={{ animation: 'float 6s ease-in-out infinite 0.5s' }}
            />
            <div 
              className="absolute w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-lg border border-accent/20"
              style={{ animation: 'pulse 3s ease-in-out infinite' }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl w-full text-center space-y-16">
        {/* Title and Subtitle */}
        <div className="space-y-8">
          <h1 
            className={`font-display font-bold leading-[0.9] tracking-tighter transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              fontSize: 'clamp(3.5rem, 12vw, 9rem)',
              transitionDelay: '100ms'
            }}
          >
            <span className="block">The History of</span>
            <span className="block text-accent">UX/UI Design</span>
          </h1>
          
          <h2 
            className={`font-display text-muted-foreground leading-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              transitionDelay: '300ms'
            }}
          >
            A Comprehensive Analysis of
            <br />
            Professional Evolution & Claims
          </h2>
        </div>

        {/* Enhanced Byline Strip */}
        <div 
          className={`w-full max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <BylineStrip />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: '700ms' }}
        data-testid="text-scroll-indicator"
      >
        <span className="text-xs font-mono text-muted uppercase tracking-wider">Scroll to read</span>
        <ArrowDown 
          className="w-5 h-5 text-accent animate-bounce"
          style={{ animationDelay: '1s' }}
        />
      </div>

    </section>
  );
}