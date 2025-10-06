import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Pioneer {
  name: string;
  years: string;
  title: string;
  contribution: string;
  quote: string;
  legacy: string;
}

interface ExpandablePioneerCardProps {
  pioneer: Pioneer;
  imageUrl: string;
  index: number;
}

export default function ExpandablePioneerCard({ pioneer, imageUrl, index }: ExpandablePioneerCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card 
        className="glass-card cursor-pointer overflow-hidden"
        onClick={() => setIsExpanded(!isExpanded)}
        data-testid={`pioneer-${pioneer.name.replace(' ', '-').toLowerCase()}`}
      >
        <div className="p-6 md:p-8">
          <div className="grid md:grid-cols-4 gap-6">
            {/* Left: Image and Basic Info */}
            <div className="md:col-span-1">
              <motion.div 
                className="aspect-square rounded-lg overflow-hidden mb-4 border border-accent/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={imageUrl} 
                  alt={`${pioneer.name} - ${pioneer.title}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <h4 className="text-xl md:text-2xl font-semibold mb-1">{pioneer.name}</h4>
              <p className="text-sm text-muted-foreground mb-2">{pioneer.years}</p>
              <p className="text-accent font-medium text-sm">{pioneer.title}</p>
            </div>
            
            {/* Right: Content */}
            <div className="md:col-span-3 space-y-4">
              <p className="text-foreground/80">{pioneer.contribution}</p>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <blockquote className="border-l-4 border-accent/50 pl-4 italic text-foreground/70">
                      "{pioneer.quote}"
                    </blockquote>
                    
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent/50" />
                      <p className="text-sm font-medium text-accent/80">{pioneer.legacy}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Expand Button */}
              <button className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium mt-4">
                {isExpanded ? (
                  <>
                    <span>Show less</span>
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <span>Read more</span>
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
