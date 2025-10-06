import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimelineEvent {
  year: string;
  title: string;
  id?: string;
}

interface TimelineMinimapProps {
  events: TimelineEvent[];
  sectionId?: string;
}

export default function TimelineMinimap({ events, sectionId }: TimelineMinimapProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionId ? document.getElementById(sectionId) : null;
      if (!section) return;

      const sectionRect = section.getBoundingClientRect();
      const viewportMiddle = window.innerHeight / 2;

      // Find which event is closest to the viewport middle
      const eventElements = section.querySelectorAll('[data-year]');
      let closestIndex = 0;
      let closestDistance = Infinity;

      eventElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - viewportMiddle);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionId]);

  const handleEventClick = (event: TimelineEvent, index: number) => {
    const section = sectionId ? document.getElementById(sectionId) : null;
    if (!section) return;

    const eventElements = section.querySelectorAll('[data-year]');
    const targetElement = eventElements[index] as HTMLElement;

    if (targetElement) {
      const offset = 100; // Offset from top
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      className="sticky bottom-8 left-0 right-0 z-20 px-4 sm:px-6 lg:px-8 pointer-events-none"
      data-testid="timeline-minimap"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-background/80 backdrop-blur-lg border border-timeline-sage/30 rounded-full px-6 py-3 pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Minimap Title */}
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Timeline Overview
            </p>
            <p className="text-xs font-mono text-timeline-sage">
              {events[activeIndex]?.year}
            </p>
          </div>

          {/* Event Dots */}
          <div className="flex items-center gap-2 justify-between">
            {events.map((event, index) => (
              <button
                key={index}
                onClick={() => handleEventClick(event, index)}
                className="group relative flex flex-col items-center gap-1 transition-all"
                data-testid={`minimap-dot-${index}`}
                aria-label={`Jump to ${event.year}`}
              >
                {/* Dot */}
                <motion.div
                  className={`
                    rounded-full transition-all duration-300
                    ${activeIndex === index 
                      ? 'w-3 h-3 bg-timeline-terracotta shadow-lg shadow-timeline-terracotta/50' 
                      : 'w-2 h-2 bg-timeline-sage/40 group-hover:bg-timeline-sage/70'
                    }
                  `}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                />

                {/* Year label on hover */}
                <motion.div
                  className="absolute -top-8 whitespace-nowrap"
                  initial={{ opacity: 0, y: 5 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-background/90 border border-timeline-sage/30 rounded px-2 py-1 backdrop-blur-sm">
                    <p className="text-[10px] font-mono text-timeline-cream">
                      {event.year}
                    </p>
                  </div>
                </motion.div>

                {/* Active indicator line */}
                {activeIndex === index && (
                  <motion.div
                    className="absolute -top-1 w-px h-4 bg-timeline-terracotta"
                    initial={{ height: 0 }}
                    animate={{ height: 16 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-3 h-0.5 bg-timeline-sage/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-timeline-sage to-timeline-terracotta"
              initial={{ width: "0%" }}
              animate={{ 
                width: `${((activeIndex + 1) / events.length) * 100}%` 
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
