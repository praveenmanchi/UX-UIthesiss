import { motion } from "framer-motion";
import { 
  Building2,
  Users,
  Smartphone,
  Layers,
  GitBranch,
  Sparkles,
  Briefcase,
  Globe,
  Target,
  TrendingUp
} from "lucide-react";
import { ReactNode } from "react";

interface MilestoneDataPoint {
  name: string;
  year: number;
  category: string;
  era: "Foundation Era" | "Digital Era" | "Modern Era";
  icon: ReactNode;
  detail: string;
}

export default function IndustryTimelineScatter() {
  const milestoneData: MilestoneDataPoint[] = [
    // Foundation Era (1990-2004) - Purple
    { 
      name: "First UX Title", 
      year: 1993, 
      category: "Role Creation", 
      era: "Foundation Era", 
      icon: <Building2 className="w-full h-full" />,
      detail: "Don Norman at Apple"
    },
    { 
      name: "Web Agencies", 
      year: 2000, 
      category: "Service Business", 
      era: "Foundation Era", 
      icon: <Globe className="w-full h-full" />,
      detail: "UX becomes service"
    },
    
    // Digital Era (2005-2014) - Blue
    { 
      name: "iPhone Era", 
      year: 2007, 
      category: "Platform Shift", 
      era: "Digital Era", 
      icon: <Smartphone className="w-full h-full" />,
      detail: "Mobile UX explosion"
    },
    { 
      name: "Design Systems", 
      year: 2014, 
      category: "Systematization", 
      era: "Digital Era", 
      icon: <Layers className="w-full h-full" />,
      detail: "Scalable design"
    },
    
    // Modern Era (2015-2025) - Green
    { 
      name: "DesignOps", 
      year: 2020, 
      category: "Operations", 
      era: "Modern Era", 
      icon: <GitBranch className="w-full h-full" />,
      detail: "Design operations"
    },
    { 
      name: "AI Integration", 
      year: 2025, 
      category: "AI Augmentation", 
      era: "Modern Era", 
      icon: <Sparkles className="w-full h-full" />,
      detail: "AI-assisted design"
    }
  ];

  const categories = [
    "AI Augmentation",
    "Operations",
    "Systematization",
    "Platform Shift",
    "Service Business",
    "Role Creation"
  ];

  const years = [1990, 1995, 2000, 2005, 2010, 2015, 2020, 2025];
  
  const getEraColor = (era: string) => {
    switch (era) {
      case "Foundation Era":
        return "hsl(217, 100%, 53%)"; // IBM Carbon Blue
      case "Digital Era":
        return "hsl(292, 48%, 55%)"; // Purple for categorical
      case "Modern Era":
        return "hsl(142, 63%, 39%)"; // Success green
      default:
        return "hsl(0, 0%, 63%)";
    }
  };

  const getYPosition = (category: string) => {
    const index = categories.indexOf(category);
    return (index / (categories.length - 1)) * 100;
  };

  const getXPosition = (year: number) => {
    return ((year - 1990) / (2025 - 1990)) * 100;
  };

  return (
    <div className="w-full bg-card dark:bg-card py-8 sm:py-10 md:py-12 px-4 sm:px-6 rounded-lg">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-center mb-2 text-foreground">
          Industry Timeline: The Evolution of Design as a Business Function (1993-2025)
        </h3>
        
        {/* Legend */}
        <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-8 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(217, 100%, 53%)" }} />
            <span className="text-xs sm:text-sm font-sans text-foreground">Foundation Era (1993-2004)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(292, 48%, 55%)" }} />
            <span className="text-xs sm:text-sm font-sans text-foreground">Digital Era (2005-2014)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(142, 63%, 39%)" }} />
            <span className="text-xs sm:text-sm font-sans text-foreground">Modern Era (2015-2025)</span>
          </div>
        </div>

        {/* Chart Container */}
        <div className="relative bg-background border border-primary/10 rounded-lg p-4 sm:p-6 md:p-8">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-4 sm:top-6 md:top-8 bottom-4 sm:bottom-6 md:bottom-8 w-24 sm:w-28 md:w-32 flex flex-col justify-between text-right pr-2 sm:pr-3 md:pr-4">
            {categories.map((cat, index) => (
              <div key={cat} className="text-[10px] sm:text-xs font-sans text-muted-foreground leading-tight" style={{ 
                transform: 'translateY(-50%)',
                position: 'absolute',
                top: `${(index / (categories.length - 1)) * 100}%`,
                right: '1rem'
              }}>
                {cat}
              </div>
            ))}
          </div>

          {/* Chart area */}
          <div className="ml-24 sm:ml-28 md:ml-32 relative h-64 sm:h-80 md:h-96">
            {/* Grid lines - vertical */}
            {years.map((year) => (
              <div
                key={`grid-v-${year}`}
                className="absolute top-0 bottom-0 border-l border-primary/5"
                style={{ left: `${getXPosition(year)}%` }}
              />
            ))}

            {/* Grid lines - horizontal */}
            {categories.map((cat, index) => (
              <div
                key={`grid-h-${cat}`}
                className="absolute left-0 right-0 border-t border-primary/5"
                style={{ top: `${(index / (categories.length - 1)) * 100}%` }}
              />
            ))}

            {/* Data points with icons */}
            {milestoneData.map((milestone, index) => (
              <motion.div
                key={`${milestone.name}-${index}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group"
                style={{
                  left: `${getXPosition(milestone.year)}%`,
                  top: `${getYPosition(milestone.category)}%`,
                }}
                data-testid={`icon-milestone-${milestone.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {/* Icon container with colored background */}
                <div 
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 rounded-lg flex items-center justify-center p-1 sm:p-1.5 md:p-2 shadow-md transition-all duration-200 group-hover:scale-125 group-hover:shadow-lg"
                  style={{
                    backgroundColor: getEraColor(milestone.era),
                    color: 'white'
                  }}
                >
                  {milestone.icon}
                </div>
                
                {/* Hover tooltip */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                  <div className="bg-card dark:bg-card text-foreground text-xs rounded-lg px-3 py-2 whitespace-nowrap shadow-xl border border-primary/20">
                    <div className="font-bold">{milestone.name}</div>
                    <div className="text-muted-foreground">{milestone.year} - {milestone.detail}</div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* X-axis labels */}
            <div className="absolute left-0 right-0 -bottom-6 flex justify-between">
              {years.map((year) => (
                <div
                  key={`x-label-${year}`}
                  className="text-[10px] sm:text-xs text-muted-foreground font-mono"
                  style={{ 
                    position: 'absolute',
                    left: `${getXPosition(year)}%`,
                    transform: 'translateX(-50%)'
                  }}
                >
                  {year}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
