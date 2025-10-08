import { useEffect, useState } from "react";
import { User, Calendar, Clock, FileText, BookOpen, TrendingUp, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface BylineStripProps {
  variant?: "full" | "condensed";
  showScrollProgress?: boolean;
}

export default function BylineStrip({ variant = "full", showScrollProgress = false }: BylineStripProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [viewCount] = useState(Math.floor(Math.random() * 10000) + 5000); // Simulated view count
  
  // Article metadata
  const author = "Research & Analysis Team";
  const articleType = "Investigative Analysis";
  const publicationDate = new Date(); // Current date
  const lastUpdatedDate = publicationDate; // Same as publication for now
  const wordCount = 6847; // Estimated based on content
  const readingTimeMinutes = Math.ceil(wordCount / 230); // Average reading speed
  
  useEffect(() => {
    if (!showScrollProgress) return;
    
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = Math.min((scrollTop / scrollableHeight) * 100, 100);
      setScrollProgress(Math.round(progress));
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showScrollProgress]);
  
  const isUpdated = lastUpdatedDate.getTime() !== publicationDate.getTime();
  
  if (variant === "condensed") {
    return (
      <div className="flex items-center gap-3 text-xs font-mono text-primary">
        <div className="flex items-center gap-1">
          <User className="w-3 h-3" />
          <span>{author.split(" ").map(w => w[0]).join("")}</span>
        </div>
        <span className="text-primary/50">•</span>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{readingTimeMinutes} min</span>
        </div>
        {showScrollProgress && (
          <>
            <span className="text-primary/50">•</span>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              <span>{scrollProgress}%</span>
            </div>
          </>
        )}
      </div>
    );
  }
  
  return (
    <div 
      className={cn(
        "w-full",
        "bg-background/50 backdrop-blur-sm",
        "border border-accent/20 rounded-lg",
        "p-4 sm:p-5",
        "transition-all duration-300"
      )}
      data-testid="byline-strip"
    >
      {/* Desktop Layout - Horizontal */}
      <div className="hidden md:flex items-center justify-center gap-6 font-mono text-sm">
        {/* Author */}
        <div className="flex items-center gap-2 text-foreground/90">
          <User className="w-4 h-4 text-accent" />
          <span data-testid="text-byline-author">{author}</span>
        </div>
        
        {/* Divider */}
        <div className="w-px h-4 bg-accent/20" />
        
        {/* Article Type */}
        <div className="flex items-center gap-2 text-foreground/90">
          <FileText className="w-4 h-4 text-accent" />
          <span data-testid="text-byline-type">{articleType}</span>
        </div>
        
        {/* Divider */}
        <div className="w-px h-4 bg-accent/20" />
        
        {/* Publication Date */}
        <div className="flex items-center gap-2 text-foreground/90">
          <Calendar className="w-4 h-4 text-accent" />
          <span data-testid="text-byline-date">
            {format(publicationDate, "MMMM d, yyyy")}
          </span>
        </div>
        
        {/* Divider */}
        <div className="w-px h-4 bg-accent/20" />
        
        {/* Reading Time */}
        <div className="flex items-center gap-2 text-foreground/90">
          <Clock className="w-4 h-4 text-accent" />
          <span data-testid="text-byline-reading-time">{readingTimeMinutes} min read</span>
        </div>
        
        {/* Divider */}
        <div className="w-px h-4 bg-accent/20" />
        
        {/* Word Count */}
        <div className="flex items-center gap-2 text-foreground/90">
          <BookOpen className="w-4 h-4 text-accent" />
          <span data-testid="text-byline-word-count">{wordCount.toLocaleString()} words</span>
        </div>
        
        {/* View Count */}
        <div className="hidden lg:flex items-center gap-2 text-foreground/90">
          <div className="w-px h-4 bg-accent/20" />
          <Eye className="w-4 h-4 text-accent" />
          <span data-testid="text-byline-views">{viewCount.toLocaleString()} views</span>
        </div>
        
        {/* Scroll Progress */}
        {showScrollProgress && (
          <>
            <div className="w-px h-4 bg-accent/20" />
            <div className="flex items-center gap-2 text-foreground/90">
              <TrendingUp className="w-4 h-4 text-accent" />
              <span data-testid="text-byline-progress">{scrollProgress}% complete</span>
            </div>
          </>
        )}
      </div>
      
      {/* Tablet Layout - 2 Columns */}
      <div className="hidden sm:flex md:hidden flex-col gap-3 font-mono text-sm">
        <div className="flex items-center justify-center gap-4">
          {/* Author */}
          <div className="flex items-center gap-2 text-foreground/90">
            <User className="w-4 h-4 text-accent" />
            <span>{author}</span>
          </div>
          
          <div className="w-px h-4 bg-accent/20" />
          
          {/* Article Type */}
          <div className="flex items-center gap-2 text-foreground/90">
            <FileText className="w-4 h-4 text-accent" />
            <span>{articleType}</span>
          </div>
          
          <div className="w-px h-4 bg-accent/20" />
          
          {/* Publication Date */}
          <div className="flex items-center gap-2 text-foreground/90">
            <Calendar className="w-4 h-4 text-accent" />
            <span>{format(publicationDate, "MMM d, yyyy")}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-4">
          {/* Reading Time */}
          <div className="flex items-center gap-2 text-foreground/90">
            <Clock className="w-4 h-4 text-accent" />
            <span>{readingTimeMinutes} min read</span>
          </div>
          
          <div className="w-px h-4 bg-accent/20" />
          
          {/* Word Count */}
          <div className="flex items-center gap-2 text-foreground/90">
            <BookOpen className="w-4 h-4 text-accent" />
            <span>{wordCount.toLocaleString()} words</span>
          </div>
          
          {showScrollProgress && (
            <>
              <div className="w-px h-4 bg-accent/20" />
              <div className="flex items-center gap-2 text-foreground/90">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span>{scrollProgress}%</span>
              </div>
            </>
          )}
        </div>
      </div>
      
      {/* Mobile Layout - Stacked */}
      <div className="flex sm:hidden flex-col items-center gap-3 font-mono text-xs">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          {/* Author */}
          <div className="flex items-center gap-1.5 text-foreground/90">
            <User className="w-3.5 h-3.5 text-accent" />
            <span>{author}</span>
          </div>
          
          {/* Article Type */}
          <div className="flex items-center gap-1.5 text-foreground/90">
            <FileText className="w-3.5 h-3.5 text-accent" />
            <span>{articleType}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          {/* Publication Date */}
          <div className="flex items-center gap-1.5 text-foreground/90">
            <Calendar className="w-3.5 h-3.5 text-accent" />
            <span>{format(publicationDate, "MMM d, yyyy")}</span>
          </div>
          
          {/* Reading Time */}
          <div className="flex items-center gap-1.5 text-foreground/90">
            <Clock className="w-3.5 h-3.5 text-accent" />
            <span>{readingTimeMinutes} min</span>
          </div>
          
          {/* Word Count */}
          <div className="flex items-center gap-1.5 text-foreground/90">
            <BookOpen className="w-3.5 h-3.5 text-accent" />
            <span>{wordCount.toLocaleString()} words</span>
          </div>
        </div>
        
        {showScrollProgress && (
          <div className="flex items-center gap-1.5 text-foreground/90">
            <TrendingUp className="w-3.5 h-3.5 text-accent" />
            <span>{scrollProgress}% complete</span>
          </div>
        )}
      </div>
      
      {/* Last Updated Notice (if different from publication) */}
      {isUpdated && (
        <div className="mt-3 pt-3 border-t border-accent/10 text-center">
          <span className="text-xs font-mono text-muted">
            Last updated: {format(lastUpdatedDate, "MMM d, yyyy 'at' h:mm a")}
          </span>
        </div>
      )}
    </div>
  );
}