import { motion } from "framer-motion";
import { 
  SiAdobephotoshop,
  SiAdobeillustrator, 
  SiAdobedreamweaver,
  SiFigma,
  SiSketch,
  SiFramer,
  SiAdobe,
  SiApple,
  SiHtml5,
  SiCss3
} from "react-icons/si";
import { ReactNode } from "react";

interface ToolDataPoint {
  name: string;
  year: number;
  category: string;
  era: "Print to Digital Era" | "Web Revolution Era" | "Modern Design Tools Era";
  icon: ReactNode;
}

export default function ToolsEvolutionScatter() {
  const toolData: ToolDataPoint[] = [
    // Print to Digital Era (1970-1995) - Cyan
    { name: "Apple II", year: 1977, category: "Personal Comput", era: "Print to Digital Era", icon: <SiApple className="w-full h-full" /> },
    { name: "Illustrator", year: 1987, category: "Vector Graphics", era: "Print to Digital Era", icon: <SiAdobeillustrator className="w-full h-full" /> },
    { name: "PageMaker", year: 1985, category: "Desktop Publish", era: "Print to Digital Era", icon: <SiAdobe className="w-full h-full" /> },
    { name: "Photoshop", year: 1990, category: "Raster Graphics", era: "Print to Digital Era", icon: <SiAdobephotoshop className="w-full h-full" /> },
    { name: "HTML", year: 1993, category: "Web Markup", era: "Print to Digital Era", icon: <SiHtml5 className="w-full h-full" /> },
    { name: "CSS", year: 1996, category: "Web Styling", era: "Print to Digital Era", icon: <SiCss3 className="w-full h-full" /> },
    
    // Web Revolution Era (1996-2009) - Red/Pink
    { name: "Flash", year: 1996, category: "Web Animation", era: "Web Revolution Era", icon: <SiAdobe className="w-full h-full" /> },
    { name: "Dreamweaver", year: 1997, category: "WYSIWYG Editor", era: "Web Revolution Era", icon: <SiAdobedreamweaver className="w-full h-full" /> },
    { name: "Fireworks", year: 2003, category: "Web Graphics", era: "Web Revolution Era", icon: <SiAdobe className="w-full h-full" /> },
    { name: "Axure", year: 2005, category: "Prototyping", era: "Web Revolution Era", icon: <SiAdobe className="w-full h-full" /> },
    { name: "OmniGraffle", year: 2007, category: "Diagramming", era: "Web Revolution Era", icon: <SiApple className="w-full h-full" /> },
    { name: "Balsamiq", year: 2008, category: "Wireframing", era: "Web Revolution Era", icon: <SiAdobe className="w-full h-full" /> },
    
    // Modern Design Tools Era (2010-2019) - Green
    { name: "Sketch", year: 2010, category: "UI Design", era: "Modern Design Tools Era", icon: <SiSketch className="w-full h-full" /> },
    { name: "InVision", year: 2013, category: "Prototyping", era: "Modern Design Tools Era", icon: <SiAdobe className="w-full h-full" /> },
    { name: "Framer", year: 2014, category: "Interaction", era: "Modern Design Tools Era", icon: <SiFramer className="w-full h-full" /> },
    { name: "Figma", year: 2016, category: "Collaboration", era: "Modern Design Tools Era", icon: <SiFigma className="w-full h-full" /> },
    { name: "Adobe XD", year: 2017, category: "All-in-One", era: "Modern Design Tools Era", icon: <SiAdobe className="w-full h-full" /> },
    { name: "Abstract", year: 2017, category: "Version Control", era: "Modern Design Tools Era", icon: <SiAdobe className="w-full h-full" /> },
    { name: "Storybook", year: 2019, category: "Design Systems", era: "Modern Design Tools Era", icon: <SiAdobe className="w-full h-full" /> }
  ];

  const categories = [
    "Design Systems",
    "Version Control",
    "All-in-One",
    "Collaboration",
    "Interaction",
    "Prototyping",
    "UI Design",
    "Wireframing",
    "Diagramming",
    "Web Graphics",
    "WYSIWYG Editor",
    "Web Animation",
    "Web Styling",
    "Web Markup",
    "Raster Graphics",
    "Desktop Publish",
    "Vector Graphics",
    "Personal Comput"
  ];

  const years = [1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020];
  
  const getEraColor = (era: string) => {
    switch (era) {
      case "Print to Digital Era":
        return "#4fd1c5"; // Cyan
      case "Web Revolution Era":
        return "#f56565"; // Red
      case "Modern Design Tools Era":
        return "#48bb78"; // Green
      default:
        return "#a0aec0";
    }
  };

  const getYPosition = (category: string) => {
    const index = categories.indexOf(category);
    return (index / (categories.length - 1)) * 100;
  };

  const getXPosition = (year: number) => {
    return ((year - 1970) / (2020 - 1970)) * 100;
  };

  return (
    <div className="w-full bg-[#f5f2ed] py-12 px-6 rounded-lg">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-2 text-black">
          Design Tools Evolution (1977-2019)
        </h3>
        
        {/* Legend */}
        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#4fd1c5]" />
            <span className="text-sm text-black">Print to Digital Era</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#f56565]" />
            <span className="text-sm text-black">Web Revolution Era</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#48bb78]" />
            <span className="text-sm text-black">Modern Design Tools Era</span>
          </div>
        </div>

        {/* Chart Container */}
        <div className="relative bg-white/30 border border-black/10 rounded-lg p-8">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-8 bottom-8 w-32 flex flex-col justify-between text-right pr-4">
            {categories.map((cat, index) => (
              <div key={cat} className="text-[10px] text-black/70 leading-tight" style={{ 
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
          <div className="ml-32 relative" style={{ height: '500px' }}>
            {/* Grid lines - vertical */}
            {years.map((year) => (
              <div
                key={`grid-v-${year}`}
                className="absolute top-0 bottom-0 border-l border-black/5"
                style={{ left: `${getXPosition(year)}%` }}
              />
            ))}

            {/* Grid lines - horizontal */}
            {categories.map((cat, index) => (
              <div
                key={`grid-h-${cat}`}
                className="absolute left-0 right-0 border-t border-black/5"
                style={{ top: `${(index / (categories.length - 1)) * 100}%` }}
              />
            ))}

            {/* Data points with icons */}
            {toolData.map((tool, index) => (
              <motion.div
                key={`${tool.name}-${index}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.03, duration: 0.4 }}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group"
                style={{
                  left: `${getXPosition(tool.year)}%`,
                  top: `${getYPosition(tool.category)}%`,
                }}
                data-testid={`icon-tool-${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {/* Icon container with colored background */}
                <div 
                  className="w-7 h-7 rounded-lg flex items-center justify-center p-1.5 shadow-md transition-all duration-200 group-hover:scale-125 group-hover:shadow-lg"
                  style={{
                    backgroundColor: getEraColor(tool.era),
                    color: 'white'
                  }}
                  title={`${tool.name} (${tool.year})`}
                >
                  {tool.icon}
                </div>
                
                {/* Tooltip on hover */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                  <div className="bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {tool.name} ({tool.year})
                  </div>
                </div>
              </motion.div>
            ))}

            {/* X-axis labels */}
            <div className="absolute -bottom-8 left-0 right-0 flex justify-between">
              {years.map((year) => (
                <div
                  key={`year-${year}`}
                  className="text-xs text-black/70 font-mono"
                  style={{ position: 'absolute', left: `${getXPosition(year)}%`, transform: 'translateX(-50%)' }}
                >
                  {year}
                </div>
              ))}
            </div>
          </div>

          {/* Axis labels */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12">
            <span className="text-sm font-medium text-black/60">Year</span>
          </div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 -rotate-90 origin-center">
            <span className="text-sm font-medium text-black/60">Tool Categories</span>
          </div>
        </div>
      </div>
    </div>
  );
}
