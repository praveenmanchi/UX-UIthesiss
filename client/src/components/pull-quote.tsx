import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface PullQuoteProps {
  quote: string;
  attribution?: string;
  className?: string;
}

export default function PullQuote({ quote, attribution, className = "" }: PullQuoteProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`my-12 px-8 py-6 border-l-4 border-accent bg-accent/5 rounded-r-lg ${className}`}
    >
      <div className="relative">
        <Quote className="absolute -top-2 -left-4 w-8 h-8 text-accent/30 rotate-180" />
        <blockquote className="relative">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-foreground/90 leading-relaxed italic">
            {quote}
          </p>
          {attribution && (
            <footer className="mt-4">
              <cite className="text-lg sm:text-xl text-foreground/70 not-italic font-medium">
                — {attribution}
              </cite>
            </footer>
          )}
        </blockquote>
        <Quote className="absolute -bottom-2 -right-4 w-8 h-8 text-accent/30" />
      </div>
    </motion.div>
  );
}