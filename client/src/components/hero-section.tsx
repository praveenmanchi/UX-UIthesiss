import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Main Grid Layout - Side Alignment */}
      <div className="flex-1 grid lg:grid-cols-2 gap-12 items-center max-w-7xl w-full mx-auto py-20">
        {/* Left Column - Content */}
        <div className="space-y-8">
          <h1 
            className={`font-display font-bold leading-[0.9] tracking-tighter transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ 
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              transitionDelay: '100ms'
            }}
          >
            <span className="block">The</span>
            <span className="block text-accent inline-flex items-center gap-4">
              <svg className="inline-block" width="80" height="60" viewBox="0 0 80 60" fill="none">
                <rect width="80" height="60" fill="currentColor" fillOpacity="0.1" />
                <rect x="10" y="10" width="60" height="8" fill="currentColor" />
                <rect x="10" y="26" width="60" height="8" fill="currentColor" />
                <rect x="10" y="42" width="60" height="8" fill="currentColor" />
              </svg>
              Defense
            </span>
            <span className="block">Reformation</span>
          </h1>
          
          <h2 
            className={`font-display text-muted-foreground leading-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ 
              fontSize: 'clamp(1.25rem, 3vw, 2rem)',
              transitionDelay: '300ms'
            }}
          >
            How User Experience and Interface Design
            <br />
            Evolved from Academic Research to Global Industry
          </h2>
        </div>

        {/* Right Column - Decorative Element */}
        <div 
          className={`hidden lg:flex items-center justify-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <div className="relative w-full h-[500px]">
            {/* Animated geometric shapes */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="absolute w-64 h-64 rounded-2xl bg-accent/10 rotate-12"
                style={{ animation: 'float 6s ease-in-out infinite' }}
              />
              <div 
                className="absolute w-64 h-64 rounded-2xl bg-accent/5 rotate-6"
                style={{ animation: 'float 6s ease-in-out infinite 0.5s' }}
              />
              <div 
                className="absolute w-64 h-64 rounded-2xl border-2 border-accent/30"
                style={{ animation: 'pulse 3s ease-in-out infinite' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Metadata Strip */}
      <div 
        className={`border-t border-border py-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: '700ms' }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <p className="text-muted-foreground uppercase tracking-wider text-xs mb-1">Written By</p>
            <p className="font-semibold">UX/UI Research Team</p>
            <p className="text-muted-foreground">Historical Analysis</p>
          </div>
          <div>
            <p className="text-muted-foreground uppercase tracking-wider text-xs mb-1">Published</p>
            <p className="font-semibold">January 2025</p>
          </div>
          <div>
            <p className="text-muted-foreground uppercase tracking-wider text-xs mb-1">Length</p>
            <p className="font-semibold">30 Min</p>
            <p className="text-muted-foreground">~7,500 Words</p>
          </div>
          <div className="flex items-end">
            <div className="flex flex-col items-start gap-2">
              <span className="text-xs font-mono text-muted uppercase tracking-wider flex items-center gap-2">
                <ArrowDown className="w-3 h-3" />
                Scroll to read
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
