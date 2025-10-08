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
            className={`font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[0.9] tracking-tighter transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ 
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
              UX & UI
            </span>
            <span className="block">Reformation</span>
          </h1>
          
          <h2 
            className={`font-display text-xl sm:text-2xl lg:text-3xl text-muted-foreground leading-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ 
              transitionDelay: '300ms'
            }}
          >
            How User Experience and Interface Design Evolved from Academic Research to Global Industry
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
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm sm:text-base">
          <div>
            <p className="text-muted-foreground uppercase tracking-wider text-xs sm:text-sm mb-1">Written By</p>
            <p className="font-semibold text-sm sm:text-base">Praveen Manchi</p>
            <p className="text-muted-foreground text-xs sm:text-sm">UX/UI Designer</p>
          </div>
          <div>
            <p className="text-muted-foreground uppercase tracking-wider text-xs sm:text-sm mb-1">Published</p>
            <p className="font-semibold text-sm sm:text-base">January 2025</p>
          </div>
          <div>
            <p className="text-muted-foreground uppercase tracking-wider text-xs sm:text-sm mb-1">Length</p>
            <p className="font-semibold text-sm sm:text-base">30 Min</p>
            <p className="text-muted-foreground text-xs sm:text-sm">~7,500 Words</p>
          </div>
          <div className="flex items-end">
            <div className="flex flex-col items-start gap-2">
              <span className="text-xs sm:text-sm font-mono text-foreground uppercase tracking-wider flex items-center gap-2">
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
