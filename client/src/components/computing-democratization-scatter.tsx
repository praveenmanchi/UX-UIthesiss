import { motion } from "framer-motion";
import { 
  SiAdobe,
  SiSketch,
  SiFigma,
} from "react-icons/si";
import { 
  Palette,
  FileText,
  Building2,
  Users,
  Code,
  Smartphone,
  Briefcase,
  Globe
} from "lucide-react";
import { ReactNode } from "react";

interface DataPoint {
  name: string;
  year: number;
  category: string;
  era: "Desktop Era" | "Mobile Era" | "Modern Era";
  icon: ReactNode;
  detail: string;
}

export default function ComputingDemocratizationScatter() {
  const data: DataPoint[] = [
    // Desktop Era (1983-2006) - Cyan #4fd1c5
    // Design Tools
    { name: "MacPaint", year: 1984, category: "Design Tools", era: "Desktop Era", icon: <Palette className="w-full h-full" />, detail: "First accessible design tool" },
    { name: "Illustrator", year: 1987, category: "Design Tools", era: "Desktop Era", icon: <SiAdobe className="w-full h-full" />, detail: "Vector graphics standard" },
    { name: "QuarkXPress", year: 1987, category: "Design Tools", era: "Desktop Era", icon: <FileText className="w-full h-full" />, detail: "Desktop publishing" },
    { name: "Photoshop", year: 1990, category: "Design Tools", era: "Desktop Era", icon: <SiAdobe className="w-full h-full" />, detail: "Raster graphics revolution" },
    { name: "Flash", year: 1996, category: "Design Tools", era: "Desktop Era", icon: <SiAdobe className="w-full h-full" />, detail: "Web animation standard" },
    { name: "Dreamweaver", year: 1997, category: "Design Tools", era: "Desktop Era", icon: <Code className="w-full h-full" />, detail: "WYSIWYG web design" },
    
    // UX Terminology
    { name: "User Experience", year: 1986, category: "UX Terminology", era: "Desktop Era", icon: <FileText className="w-full h-full" />, detail: "Brenda Laurel coins phrase" },
    { name: "UX Architect", year: 1993, category: "UX Terminology", era: "Desktop Era", icon: <Building2 className="w-full h-full" />, detail: "Don Norman's title" },
    { name: "UX Designer", year: 2000, category: "UX Terminology", era: "Desktop Era", icon: <Users className="w-full h-full" />, detail: "Standard job title" },
    
    // Tech Giants (USA)
    { name: "Apple HI Group", year: 1986, category: "Tech Giants (USA)", era: "Desktop Era", icon: <Building2 className="w-full h-full" />, detail: "Human Interface Group" },
    { name: "MS Usability Lab", year: 1990, category: "Tech Giants (USA)", era: "Desktop Era", icon: <Building2 className="w-full h-full" />, detail: "Microsoft UX research" },
    { name: "Apple UX Arch", year: 1993, category: "Tech Giants (USA)", era: "Desktop Era", icon: <Briefcase className="w-full h-full" />, detail: "Don Norman joins Apple" },
    
    // Mobile Era (2007-2015) - Orange #f59e0b
    // Design Tools
    { name: "Sketch", year: 2010, category: "Design Tools", era: "Mobile Era", icon: <SiSketch className="w-full h-full" />, detail: "UI design tool" },
    { name: "InVision", year: 2011, category: "Design Tools", era: "Mobile Era", icon: <Smartphone className="w-full h-full" />, detail: "Prototyping platform" },
    
    // Tech Giants (USA)
    { name: "Google UX", year: 2011, category: "Tech Giants (USA)", era: "Mobile Era", icon: <Globe className="w-full h-full" />, detail: "Google UX team formed" },
    { name: "Material Design", year: 2014, category: "Tech Giants (USA)", era: "Mobile Era", icon: <Palette className="w-full h-full" />, detail: "Google's design system" },
    
    // Indian Tech Industry
    { name: "TCS UX", year: 2010, category: "Indian Tech Industry", era: "Mobile Era", icon: <Building2 className="w-full h-full" />, detail: "TCS UX practice" },
    { name: "Flipkart Design", year: 2011, category: "Indian Tech Industry", era: "Mobile Era", icon: <Smartphone className="w-full h-full" />, detail: "E-commerce design" },
    { name: "Wipro Digital", year: 2014, category: "Indian Tech Industry", era: "Mobile Era", icon: <Code className="w-full h-full" />, detail: "Digital transformation" },
    { name: "Infosys Design", year: 2015, category: "Indian Tech Industry", era: "Mobile Era", icon: <Palette className="w-full h-full" />, detail: "Design practice" },
    
    // Modern Era (2016-2025) - Green #48bb78
    // UX Terminology
    { name: "Product Designer", year: 2015, category: "UX Terminology", era: "Modern Era", icon: <Briefcase className="w-full h-full" />, detail: "Holistic role emerges" },
    
    // Design Tools
    { name: "Figma", year: 2016, category: "Design Tools", era: "Modern Era", icon: <SiFigma className="w-full h-full" />, detail: "Collaborative design" },
    { name: "Adobe XD", year: 2016, category: "Design Tools", era: "Modern Era", icon: <SiAdobe className="w-full h-full" />, detail: "Adobe's UX tool" },
  ];

  const categories = [
    "Design Tools",
    "UX Terminology",
    "Tech Giants (USA)",
    "Indian Tech Industry"
  ];

  const years = [1983, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2025];
  
  const getEraColor = (era: string) => {
    switch (era) {
      case "Desktop Era":
        return "hsl(217, 100%, 53%)"; // IBM Carbon Blue
      case "Mobile Era":
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
    return ((year - 1983) / (2025 - 1983)) * 100;
  };

  // Group data points by year and category to detect overlaps
  const groupedData = data.reduce((acc, point) => {
    const key = `${point.year}-${point.category}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(point);
    return acc;
  }, {} as Record<string, DataPoint[]>);

  // Calculate offsets for overlapping points
  const getPositionWithOffset = (point: DataPoint, index: number) => {
    const key = `${point.year}-${point.category}`;
    const group = groupedData[key];
    const pointIndex = group.indexOf(point);
    const totalInGroup = group.length;
    
    let xOffset = 0;
    let yOffset = 0;
    
    if (totalInGroup > 1) {
      // Spread points horizontally when they overlap
      const spacing = 3; // 3% horizontal spacing between overlapping points
      xOffset = (pointIndex - (totalInGroup - 1) / 2) * spacing;
    }
    
    return {
      x: getXPosition(point.year) + xOffset,
      y: getYPosition(point.category) + yOffset
    };
  };

  return (
    <div className="w-full bg-card dark:bg-card py-8 sm:py-10 md:py-12 px-4 sm:px-6 rounded-lg">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-center mb-2 text-foreground">
          The Race to Democratize Computing (1983-2025)
        </h3>
        <p className="text-center text-xs sm:text-sm md:text-base font-sans text-muted-foreground mb-8">
          How tools, terminology, and teams evolved to make design accessible globally
        </p>
        
        {/* Legend */}
        <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-8 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(217, 100%, 53%)" }} />
            <span className="text-xs sm:text-sm font-sans text-foreground">Desktop Era (1983-2006)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(292, 48%, 55%)" }} />
            <span className="text-xs sm:text-sm font-sans text-foreground">Mobile Era (2007-2015)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(142, 63%, 39%)" }} />
            <span className="text-xs sm:text-sm font-sans text-foreground">Modern Era (2016-2025)</span>
          </div>
        </div>

        {/* Chart Container */}
        <div className="relative bg-background border border-primary/10 rounded-lg p-4 sm:p-6 md:p-8">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-4 sm:top-6 md:top-8 bottom-4 sm:bottom-6 md:bottom-8 w-24 sm:w-32 md:w-40 flex flex-col justify-between text-right pr-2 sm:pr-3 md:pr-4">
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
          <div className="ml-24 sm:ml-32 md:ml-40 relative h-64 sm:h-80 md:h-96">
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
            {data.map((point, index) => {
              const position = getPositionWithOffset(point, index);
              return (<motion.div
                key={`${point.name}-${index}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group"
                style={{
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                }}
                data-testid={`icon-${point.category.toLowerCase().replace(/\s+/g, '-')}-${point.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {/* Icon container with colored background */}
                <div 
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 rounded-lg flex items-center justify-center p-1 sm:p-1.5 md:p-2 shadow-md transition-all duration-200 group-hover:scale-125 group-hover:shadow-lg"
                  style={{
                    backgroundColor: getEraColor(point.era),
                    color: 'white'
                  }}
                >
                  {point.icon}
                </div>
                
                {/* Hover tooltip */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                  <div className="bg-card dark:bg-card text-foreground text-xs rounded-lg px-3 py-2 whitespace-nowrap shadow-xl border border-primary/20">
                    <div className="font-bold">{point.name}</div>
                    <div className="text-muted-foreground">{point.year} - {point.detail}</div>
                  </div>
                </div>
              </motion.div>
              );
            })}

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
