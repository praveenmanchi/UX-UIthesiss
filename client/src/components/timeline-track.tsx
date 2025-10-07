import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  details?: string;
  impact?: string;
}

interface TimelineTrackProps {
  events: TimelineEvent[];
  title?: string;
  description?: string;
}

interface Era {
  name: string;
  yearRange: string;
  startYear: number;
  endYear: number;
  color: string;
  gradient: string;
}

const ERAS: Era[] = [
  {
    name: "Early Computing",
    yearRange: "1960-1984",
    startYear: 1960,
    endYear: 1984,
    color: "hsl(88, 16%, 53%)",
    gradient: "linear-gradient(90deg, hsl(88, 16%, 53%, 0.08), hsl(88, 16%, 53%, 0.15), hsl(88, 16%, 53%, 0.08))"
  },
  {
    name: "GUI Revolution",
    yearRange: "1984-1995",
    startYear: 1984,
    endYear: 1995,
    color: "hsl(56, 24%, 82%)",
    gradient: "linear-gradient(90deg, hsl(56, 24%, 82%, 0.08), hsl(56, 24%, 82%, 0.15), hsl(56, 24%, 82%, 0.08))"
  },
  {
    name: "Web Era",
    yearRange: "1995-2010",
    startYear: 1995,
    endYear: 2010,
    color: "hsl(24, 30%, 58%)",
    gradient: "linear-gradient(90deg, hsl(24, 30%, 58%, 0.08), hsl(24, 30%, 58%, 0.15), hsl(24, 30%, 58%, 0.08))"
  },
  {
    name: "Modern Era",
    yearRange: "2010-2020",
    startYear: 2010,
    endYear: 2020,
    color: "hsl(48, 18%, 75%)",
    gradient: "linear-gradient(90deg, hsl(48, 18%, 75%, 0.08), hsl(48, 18%, 75%, 0.15), hsl(48, 18%, 75%, 0.08))"
  },
  {
    name: "AI Era",
    yearRange: "2020+",
    startYear: 2020,
    endYear: 2030,
    color: "hsl(120, 5%, 8%)",
    gradient: "linear-gradient(90deg, hsl(120, 5%, 8%, 0.08), hsl(120, 5%, 8%, 0.15), hsl(120, 5%, 8%, 0.08))"
  }
];

export default function TimelineTrack({ events, title, description }: TimelineTrackProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Calculate era backgrounds based on visible events
  const getEraBackgrounds = () => {
    if (events.length === 0) return [];

    const firstEventYear = parseInt(events[0].year);
    const lastEventYear = parseInt(events[events.length - 1].year);

    return ERAS.filter(era => 
      (era.startYear <= lastEventYear && era.endYear >= firstEventYear)
    ).map(era => {
      // Calculate the position percentage for each era
      const eraStart = Math.max(era.startYear, firstEventYear);
      const eraEnd = Math.min(era.endYear, lastEventYear);
      
      const totalRange = lastEventYear - firstEventYear;
      const startPercent = ((eraStart - firstEventYear) / totalRange) * 100;
      const widthPercent = ((eraEnd - eraStart) / totalRange) * 100;

      return {
        ...era,
        startPercent,
        widthPercent
      };
    });
  };

  const eraBackgrounds = getEraBackgrounds();

  return (
    <div className="w-full" data-testid="timeline-track">
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold mb-4">{title}</h3>
          {description && (
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">{description}</p>
          )}
        </motion.div>
      )}

      <div className="relative px-4 sm:px-6 md:px-8">
        {/* Era Background Shading */}
        {eraBackgrounds.map((era, index) => (
          <motion.div
            key={era.name}
            className="absolute top-0 bottom-0 pointer-events-none"
            style={{
              left: `${era.startPercent}%`,
              width: `${era.widthPercent}%`,
              background: era.gradient,
              zIndex: 0
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1 }}
            data-testid={`era-background-${era.name.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {/* Era Label */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <p className="text-[10px] sm:text-xs font-mono text-muted-foreground/60 whitespace-nowrap" data-testid={`era-label-${era.name.toLowerCase().replace(/\s+/g, '-')}`}>
                {era.name} <span className="text-[9px] sm:text-[10px]">({era.yearRange})</span>
              </p>
            </div>
          </motion.div>
        ))}

        {/* Timeline Line */}
        <div className="timeline-line" />

        {/* Timeline Events */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 relative z-10 py-12">
          {events.map((event, index) => (
            <div key={index} className="flex flex-col items-center" data-year={event.year}>
              {/* Timeline Dot */}
              <motion.div
                className="relative"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.1,
                }}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className={`timeline-dot ${activeIndex === index ? "active" : ""}`}
                  data-testid={`timeline-dot-${index}`}
                  aria-label={`View ${event.year} event`}
                />
                
                {/* Vertical Marker Line */}
                {activeIndex === index && (
                  <motion.div
                    className="timeline-marker"
                    initial={{ height: 0 }}
                    animate={{ height: 60 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>

              {/* Year Label */}
              <motion.div
                className="mt-4 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <p className="font-mono text-base sm:text-lg md:text-xl font-bold text-timeline-cream" data-testid={`timeline-year-${index}`}>
                  {event.year}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-2" data-testid={`timeline-title-${index}`}>
                  {event.title}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Detail Panel */}
        <AnimatePresence mode="wait">
          {activeIndex !== null && (
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="mt-8"
            >
              <Card className="p-4 sm:p-6 md:p-8 chart-dark-container border-timeline-sage/30" data-testid={`timeline-detail-${activeIndex}`}>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                    <h4 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-timeline-cream" data-testid={`timeline-detail-year-${activeIndex}`}>
                      {events[activeIndex].year}
                    </h4>
                    <span className="text-base sm:text-lg md:text-xl text-timeline-sage" data-testid={`timeline-detail-title-${activeIndex}`}>
                      {events[activeIndex].title}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed" data-testid={`timeline-detail-description-${activeIndex}`}>
                    {events[activeIndex].description}
                  </p>

                  {events[activeIndex].details && (
                    <div className="pt-4 border-t border-timeline-sage/20">
                      <p className="text-xs sm:text-sm text-muted-foreground" data-testid={`timeline-detail-details-${activeIndex}`}>
                        {events[activeIndex].details}
                      </p>
                    </div>
                  )}

                  {events[activeIndex].impact && (
                    <div className="mt-4 p-4 bg-timeline-sage/10 rounded-lg border border-timeline-sage/20">
                      <p className="text-xs sm:text-sm uppercase tracking-wider text-timeline-sage font-semibold mb-2">
                        Impact
                      </p>
                      <p className="text-xs sm:text-sm text-foreground/80" data-testid={`timeline-detail-impact-${activeIndex}`}>
                        {events[activeIndex].impact}
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
