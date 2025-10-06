import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface BarData {
  year: string;
  label: string;
  segments: {
    value: number;
    color: string;
    label: string;
  }[];
  total: number;
}

interface ProportionalBarGroupProps {
  data: BarData[];
  title: string;
  description?: string;
}

export default function ProportionalBarGroup({
  data,
  title,
  description,
}: ProportionalBarGroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      data-testid="proportional-bar-group"
    >
      <Card className="p-6 sm:p-8 chart-dark-container">
        <div className="mb-8">
          <h4 className="font-display text-2xl sm:text-3xl font-bold text-timeline-cream mb-2">
            {title}
          </h4>
          {description && (
            <p className="text-sm sm:text-base text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        <div className="space-y-6">
          {data.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className="space-y-2"
            >
              {/* Year and Label */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-lg font-bold text-timeline-cream" data-testid={`bar-year-${index}`}>
                    {item.year}
                  </span>
                  <span className="text-sm text-muted-foreground" data-testid={`bar-label-${index}`}>
                    {item.label}
                  </span>
                </div>
                <span className="text-xs text-timeline-sage font-semibold" data-testid={`bar-total-${index}`}>
                  Total: {item.total}M users
                </span>
              </div>

              {/* Proportional Bar */}
              <div className="relative h-10 sm:h-12 rounded-lg overflow-hidden bg-background/30 border border-timeline-sage/10">
                <div className="flex h-full">
                  {item.segments.map((segment, segmentIndex) => {
                    const percentage = (segment.value / item.total) * 100;
                    return (
                      <motion.div
                        key={segmentIndex}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.1 + segmentIndex * 0.05,
                          duration: 0.8,
                          ease: "easeOut",
                        }}
                        className="flex items-center justify-center text-xs font-semibold relative group"
                        style={{ backgroundColor: segment.color }}
                        data-testid={`bar-segment-${index}-${segmentIndex}`}
                      >
                        {percentage > 8 && (
                          <span className="text-background/90 px-2" data-testid={`segment-value-${index}-${segmentIndex}`}>
                            {segment.value}M
                          </span>
                        )}
                        
                        {/* Tooltip on hover */}
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                          <div className="bg-timeline-charcoal border border-timeline-sage/30 px-3 py-2 rounded shadow-lg whitespace-nowrap" data-testid={`segment-tooltip-${index}-${segmentIndex}`}>
                            <p className="text-xs text-timeline-cream font-semibold" data-testid={`tooltip-segment-label-${index}-${segmentIndex}`}>
                              {segment.label}
                            </p>
                            <p className="text-xs text-muted-foreground" data-testid={`tooltip-segment-value-${index}-${segmentIndex}`}>
                              {segment.value}M ({percentage.toFixed(1)}%)
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Segment Labels */}
              <div className="flex flex-wrap gap-4 mt-2">
                {item.segments.map((segment, segmentIndex) => (
                  <div key={segmentIndex} className="flex items-center gap-2" data-testid={`segment-label-${index}-${segmentIndex}`}>
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: segment.color }}
                    />
                    <span className="text-xs text-foreground/70" data-testid={`segment-text-${index}-${segmentIndex}`}>
                      {segment.label}: {segment.value}M
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-8 pt-6 border-t border-timeline-sage/20">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Each bar shows the proportional market share at a specific point in time, 
            illustrating the dramatic shift in the GUI operating system landscape.
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
