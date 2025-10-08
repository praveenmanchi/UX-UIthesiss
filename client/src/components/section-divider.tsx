import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SectionDividerProps {
  number: string;
  label: string;
  className?: string;
}

export default function SectionDivider({ number, label, className }: SectionDividerProps) {
  const dividerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only animate once when first entering viewport
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% visible
        rootMargin: "0px 0px -50px 0px", // Slightly before element is fully in view
      }
    );

    if (dividerRef.current) {
      observer.observe(dividerRef.current);
    }

    return () => {
      if (dividerRef.current) {
        observer.unobserve(dividerRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      ref={dividerRef}
      className={cn(
        "relative w-full overflow-hidden py-16 md:py-20",
        className
      )}
      data-testid={`section-divider-${number}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center">
          {/* Large watermark number - positioned to the left */}
          <div
            className={cn(
              "absolute -left-4 md:-left-8 lg:-left-12",
              "transition-all duration-1000 ease-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
            style={{
              transitionDelay: "100ms",
            }}
          >
            <span
              className={cn(
                "font-display font-bold",
                "text-[80px] sm:text-[100px] md:text-[120px] lg:text-[140px]",
                "leading-none select-none",
                "text-primary",
                "opacity-[0.12]"
              )}
              aria-hidden="true"
            >
              {number}
            </span>
          </div>

          {/* Section content container */}
          <div className="relative z-10 flex-1 pl-20 sm:pl-32 md:pl-40 lg:pl-48">
            <div className="flex items-center gap-6">
              {/* Decorative line */}
              <div
                className={cn(
                  "h-[2px] bg-gradient-to-r from-primary/60 to-transparent",
                  "transition-all duration-1000 ease-out",
                  isVisible ? "opacity-100 w-24 sm:w-32 md:w-40" : "opacity-0 w-0"
                )}
                style={{
                  transitionDelay: "300ms",
                }}
              />

              {/* Section label */}
              <h2
                className={cn(
                  "font-display text-2xl sm:text-3xl md:text-4xl font-semibold",
                  "text-foreground tracking-tight",
                  "transition-all duration-1000 ease-out",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                )}
                style={{
                  transitionDelay: "400ms",
                }}
              >
                {label}
              </h2>

              {/* Additional decorative element - geometric shape */}
              <div
                className={cn(
                  "hidden md:block",
                  "transition-all duration-1000 ease-out",
                  isVisible ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-45 scale-0"
                )}
                style={{
                  transitionDelay: "500ms",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-primary/40"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    stroke="currentColor"
                    strokeWidth="2"
                    transform="rotate(45 12 12)"
                    style={{
                      transformOrigin: "center",
                      transform: "rotate(45deg)",
                    }}
                  />
                </svg>
              </div>
            </div>

            {/* Subtle underline */}
            <div
              className={cn(
                "mt-4 h-[1px] bg-gradient-to-r from-primary/30 via-primary/10 to-transparent",
                "transition-all duration-1200 ease-out",
                isVisible ? "opacity-100 w-full" : "opacity-0 w-0"
              )}
              style={{
                transitionDelay: "600ms",
              }}
            />
          </div>

          {/* Right decorative dots pattern */}
          <div
            className={cn(
              "absolute right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2",
              "grid grid-cols-3 gap-1.5",
              "transition-all duration-1000 ease-out",
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            )}
            style={{
              transitionDelay: "700ms",
            }}
            aria-hidden="true"
          >
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "w-1.5 h-1.5 rounded-full bg-primary/20",
                  "transition-all duration-300",
                  i === 4 && "bg-primary/40" // Center dot slightly brighter
                )}
                style={{
                  transitionDelay: `${700 + i * 50}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "scale(1)" : "scale(0)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}