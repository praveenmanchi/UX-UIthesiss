import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChevronRight, DollarSign } from "lucide-react";

interface TimelineEvent {
  year: string;
  company: string;
  product: string;
  price: string;
  adjustedPrice: string;
  description: string;
  impact: string;
  milestone: string;
}

interface InteractiveTimelineProps {
  events: TimelineEvent[];
  title: string;
}

export default function InteractiveTimeline({ events, title }: InteractiveTimelineProps) {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <h3 className="font-display text-3xl font-semibold">{title}</h3>
      
      {/* Desktop: Horizontal Timeline */}
      <div className="hidden lg:block">
        <div className="relative pb-12">
          {/* Timeline Line */}
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-accent/30" />
          
          {/* Timeline Points */}
          <div className="relative flex justify-between items-start">
            {events.map((event, index) => {
              const isSelected = selectedEvent === event.year;
              const isHovered = hoveredEvent === event.year;
              const isActive = isSelected || isHovered;
              
              return (
                <div key={event.year} className="flex flex-col items-center flex-1">
                  {/* Point */}
                  <motion.div
                    className={`cursor-pointer w-6 h-6 rounded-full relative z-10 flex items-center justify-center transition-all ${
                      isActive 
                        ? 'bg-accent scale-125 shadow-lg shadow-accent/50' 
                        : event.company === 'Apple' 
                          ? 'bg-accent/50' 
                          : 'bg-blue-500/50'
                    }`}
                    onHoverStart={() => setHoveredEvent(event.year)}
                    onHoverEnd={() => setHoveredEvent(null)}
                    onClick={() => setSelectedEvent(isSelected ? null : event.year)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="w-2 h-2 bg-background rounded-full" />
                  </motion.div>
                  
                  {/* Year Label */}
                  <div className="mt-4 text-center">
                    <p className={`font-mono font-bold text-sm transition-colors ${
                      isActive ? 'text-accent' : 'text-muted-foreground'
                    }`}>
                      {event.year}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{event.product}</p>
                  </div>
                  
                  {/* Company Badge */}
                  <div className={`mt-2 px-2 py-0.5 rounded-full text-xs font-semibold ${
                    event.company === 'Apple' 
                      ? 'bg-accent/20 text-accent' 
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {event.company}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Expanded Details */}
        <AnimatePresence mode="wait">
          {selectedEvent && (
            <motion.div
              key={selectedEvent}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {events.map((event) => {
                if (event.year !== selectedEvent) return null;
                
                return (
                  <Card 
                    key={event.year}
                    className={`p-6 glass-card ${
                      event.company === 'Apple' 
                        ? 'border-accent/30' 
                        : 'border-blue-500/30'
                    }`}
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-2xl font-bold mb-2">{event.product}</h4>
                        <div className="flex items-center gap-2 text-sm mb-4">
                          <DollarSign className="w-4 h-4" />
                          <span className="font-mono">{event.price}</span>
                          <span className="text-muted-foreground">({event.adjustedPrice})</span>
                        </div>
                        <p className="text-foreground/80">{event.description}</p>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs text-accent font-semibold mb-1">Market Impact</p>
                          <p className="text-sm">{event.impact}</p>
                        </div>
                        <div>
                          <p className="text-xs text-accent font-semibold mb-1">Historical Significance</p>
                          <p className="text-sm">{event.milestone}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile/Tablet: Vertical Timeline */}
      <div className="lg:hidden space-y-6">
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-accent/30" />
          
          {events.map((event) => (
            <motion.div
              key={event.year}
              className="relative pl-12 pb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Point */}
              <div className={`absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center ${
                event.company === 'Apple' 
                  ? 'bg-accent/50 border-2 border-accent' 
                  : 'bg-blue-500/50 border-2 border-blue-500'
              }`}>
                <span className="text-xs font-bold">{event.year.slice(-2)}</span>
              </div>
              
              {/* Content */}
              <Card className={`p-4 glass-card ${
                event.company === 'Apple' 
                  ? 'border-accent/30' 
                  : 'border-blue-500/30'
              }`}>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    event.company === 'Apple' 
                      ? 'bg-accent/20 text-accent' 
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {event.company}
                  </div>
                  <h4 className="font-bold text-lg">{event.product}</h4>
                </div>
                
                <div className="flex items-center gap-2 text-sm mb-2">
                  <DollarSign className="w-3 h-3" />
                  <span className="font-mono">{event.price}</span>
                </div>
                
                <p className="text-sm text-foreground/80 mb-3">{event.description}</p>
                
                <div className="text-xs space-y-1">
                  <p><span className="text-accent font-semibold">Impact:</span> {event.impact}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
