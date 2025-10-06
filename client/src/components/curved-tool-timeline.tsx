import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Layers, 
  Palette, 
  Code2, 
  Share2, 
  Component,
  Brush,
  Globe,
  PenTool,
  Package,
  Box,
  Sparkles,
  GitBranch,
  Cloud,
  FileCode
} from "lucide-react";

interface Tool {
  id: string;
  name: string;
  year: string;
  position: { x: number; y: number };
  icon: React.ReactNode;
  description: string;
  category: string;
}

interface CurvedToolTimelineProps {
  title?: string;
  description?: string;
}

interface ToolConnection {
  from: string;
  to: string;
  label: string;
  color: string;
}

export default function CurvedToolTimeline({ title, description }: CurvedToolTimelineProps) {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [activeCategories, setActiveCategories] = useState<Set<string>>(new Set());

  const toolConnections: ToolConnection[] = [
    { from: "photoshop", to: "flash", label: "Graphics Evolution", color: "hsl(88, 16%, 53%)" },
    { from: "flash", to: "fireworks", label: "Graphics Evolution", color: "hsl(88, 16%, 53%)" },
    { from: "photoshop", to: "fireworks", label: "Adobe Graphics", color: "hsl(24, 30%, 58%)" },
    { from: "fireworks", to: "adobexd", label: "Adobe Suite", color: "hsl(24, 30%, 58%)" },
    { from: "sketch", to: "figma", label: "UI Design Evolution", color: "hsl(56, 24%, 82%)" },
    { from: "sketch", to: "adobexd", label: "UI Tools", color: "hsl(56, 24%, 82%)" },
    { from: "balsamiq", to: "invision", label: "Prototyping", color: "hsl(48, 18%, 75%)" },
    { from: "invision", to: "framer", label: "Advanced Prototyping", color: "hsl(48, 18%, 75%)" },
    { from: "invision", to: "figma", label: "Collaboration", color: "hsl(120, 5%, 8%)" },
    { from: "figma", to: "penpot", label: "Open Collaboration", color: "hsl(120, 5%, 8%)" },
    { from: "sketch", to: "abstract", label: "Version Control", color: "hsl(24, 30%, 58%)" }
  ];

  const tools: Tool[] = [
    {
      id: "photoshop",
      name: "Photoshop",
      year: "1990",
      position: { x: 8, y: 50 },
      icon: <Brush className="w-5 h-5" />,
      description: "Raster graphics editor adapted for web design via image slicing",
      category: "Graphics"
    },
    {
      id: "flash",
      name: "Flash",
      year: "1996",
      position: { x: 12, y: 48 },
      icon: <Sparkles className="w-5 h-5" />,
      description: "Vector animation and interactive web experiences",
      category: "Animation"
    },
    {
      id: "dreamweaver",
      name: "Dreamweaver",
      year: "1997",
      position: { x: 16, y: 46 },
      icon: <FileCode className="w-5 h-5" />,
      description: "WYSIWYG HTML editor for visual web design",
      category: "Development"
    },
    {
      id: "fireworks",
      name: "Fireworks",
      year: "2005",
      position: { x: 24, y: 42 },
      icon: <Globe className="w-5 h-5" />,
      description: "Web graphics tool optimized for web workflow",
      category: "Graphics"
    },
    {
      id: "balsamiq",
      name: "Balsamiq",
      year: "2008",
      position: { x: 30, y: 40 },
      icon: <Palette className="w-5 h-5" />,
      description: "Low-fidelity rapid prototyping and mockups",
      category: "Wireframing"
    },
    {
      id: "sketch",
      name: "Sketch",
      year: "2010",
      position: { x: 38, y: 35 },
      icon: <PenTool className="w-5 h-5" />,
      description: "First UI-focused vector design tool for Mac",
      category: "UI Design"
    },
    {
      id: "invision",
      name: "InVision",
      year: "2013",
      position: { x: 48, y: 32 },
      icon: <Box className="w-5 h-5" />,
      description: "Clickable prototypes and design collaboration",
      category: "Prototyping"
    },
    {
      id: "framer",
      name: "Framer",
      year: "2014",
      position: { x: 54, y: 30 },
      icon: <Code2 className="w-5 h-5" />,
      description: "Code-based advanced interactions and animations",
      category: "Code & Design"
    },
    {
      id: "figma",
      name: "Figma",
      year: "2016",
      position: { x: 62, y: 28 },
      icon: <Cloud className="w-5 h-5" />,
      description: "Real-time collaborative cloud-based design",
      category: "Collaboration"
    },
    {
      id: "adobexd",
      name: "Adobe XD",
      year: "2017",
      position: { x: 68, y: 35 },
      icon: <Package className="w-5 h-5" />,
      description: "All-in-one UX/UI tool with Adobe ecosystem integration",
      category: "UI Design"
    },
    {
      id: "abstract",
      name: "Abstract",
      year: "2017",
      position: { x: 74, y: 42 },
      icon: <GitBranch className="w-5 h-5" />,
      description: "Version control for designers (Git for design)",
      category: "Version Control"
    },
    {
      id: "systems",
      name: "Design Systems",
      year: "2020",
      position: { x: 82, y: 55 },
      icon: <Component className="w-5 h-5" />,
      description: "Material, Carbon, Polaris - systematic component libraries",
      category: "Systems"
    },
    {
      id: "penpot",
      name: "Penpot",
      year: "2021",
      position: { x: 88, y: 68 },
      icon: <Layers className="w-5 h-5" />,
      description: "Open-source collaborative design platform",
      category: "Open Source"
    },
    {
      id: "ai",
      name: "AI Tools",
      year: "2023",
      position: { x: 92, y: 82 },
      icon: <Sparkles className="w-5 h-5" />,
      description: "Midjourney, DALL-E for AI-augmented design",
      category: "AI"
    }
  ];

  // Get unique categories
  const categories = Array.from(new Set(tools.map(t => t.category)));

  // Toggle category filter
  const toggleCategory = (category: string) => {
    const newCategories = new Set(activeCategories);
    if (newCategories.has(category)) {
      newCategories.delete(category);
    } else {
      newCategories.add(category);
    }
    setActiveCategories(newCategories);
  };

  // Clear all filters
  const clearFilters = () => {
    setActiveCategories(new Set());
  };

  // Filter visible tools
  const visibleTools = activeCategories.size === 0 
    ? tools 
    : tools.filter(t => activeCategories.has(t.category));

  // Generate curved path through visible tool positions
  const generateCurvePath = () => {
    if (visibleTools.length === 0) return "";
    
    const firstTool = visibleTools[0];
    let path = `M ${firstTool.position.x} ${firstTool.position.y}`;
    
    for (let i = 1; i < visibleTools.length; i++) {
      const curr = visibleTools[i];
      const prev = visibleTools[i - 1];
      
      // Create smooth curve using quadratic bezier
      const midX = (prev.position.x + curr.position.x) / 2;
      const controlY = (prev.position.y + curr.position.y) / 2;
      
      path += ` Q ${midX} ${controlY}, ${curr.position.x} ${curr.position.y}`;
    }
    
    return path;
  };

  const activeTool = tools.find(t => t.id === (selectedTool || hoveredTool));

  return (
    <div className="w-full min-h-[600px] bg-background" data-testid="curved-tool-timeline">
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h3 className="font-display text-3xl sm:text-4xl font-semibold mb-4" data-testid="timeline-title">
            {title}
          </h3>
          {description && (
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="timeline-description">
              {description}
            </p>
          )}
        </motion.div>
      )}

      {/* Category Filters */}
      <div className="mb-8 flex flex-wrap items-center gap-3 justify-center">
        <p className="text-sm font-mono text-muted-foreground mr-2">Filter by:</p>
        {categories.map(category => (
          <motion.button
            key={category}
            onClick={() => toggleCategory(category)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all
              ${activeCategories.has(category)
                ? 'bg-timeline-sage text-background'
                : 'bg-timeline-sage/20 text-timeline-sage hover:bg-timeline-sage/30'
              }
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid={`filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {category}
          </motion.button>
        ))}
        {activeCategories.size > 0 && (
          <motion.button
            onClick={clearFilters}
            className="px-4 py-2 rounded-full text-sm font-medium bg-timeline-terracotta/20 text-timeline-terracotta hover:bg-timeline-terracotta/30 transition-all"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="filter-clear"
          >
            Clear Filters
          </motion.button>
        )}
      </div>

      <div className="relative w-full overflow-x-auto">
        <div className="min-w-[1000px] w-full">
          {/* SVG Timeline */}
          <svg
            viewBox="0 0 100 100"
            className="w-full h-[400px] sm:h-[500px]"
            preserveAspectRatio="xMidYMid meet"
            data-testid="timeline-svg"
          >
            {/* Curved path */}
            <motion.path
              d={generateCurvePath()}
              stroke="hsl(var(--timeline-sage))"
              strokeWidth="0.3"
              fill="none"
              strokeDasharray="1 1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              data-testid="timeline-path"
            />

            {/* Connection Lines between related tools */}
            {toolConnections.map((connection, index) => {
              const fromTool = tools.find(t => t.id === connection.from);
              const toTool = tools.find(t => t.id === connection.to);
              
              if (!fromTool || !toTool) return null;

              // Only show connection if both tools are visible
              const isFromVisible = visibleTools.includes(fromTool);
              const isToVisible = visibleTools.includes(toTool);
              if (!isFromVisible || !isToVisible) return null;

              const isConnectionActive = hoveredTool === connection.from || 
                                        hoveredTool === connection.to || 
                                        selectedTool === connection.from || 
                                        selectedTool === connection.to;

              const midX = (fromTool.position.x + toTool.position.x) / 2;
              const midY = (fromTool.position.y + toTool.position.y) / 2;
              const controlY = midY - Math.abs(toTool.position.x - fromTool.position.x) * 0.1;

              const connectionPath = `M ${fromTool.position.x} ${fromTool.position.y} Q ${midX} ${controlY}, ${toTool.position.x} ${toTool.position.y}`;

              return (
                <motion.path
                  key={`connection-${connection.from}-${connection.to}`}
                  d={connectionPath}
                  stroke={connection.color}
                  strokeWidth="0.2"
                  fill="none"
                  strokeDasharray="0.5 1"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: isConnectionActive ? 0.5 : 0.15,
                    strokeWidth: isConnectionActive ? 0.3 : 0.2
                  }}
                  transition={{ duration: 0.3 }}
                  data-testid={`connection-${connection.from}-${connection.to}`}
                />
              );
            })}

            {/* Tool dots and labels */}
            {tools.map((tool, index) => {
              const isVisible = visibleTools.includes(tool);
              const opacity = isVisible ? 1 : 0.15;
              
              return (
                <g key={tool.id}>
                  {/* Connection line to dot */}
                  <motion.line
                    x1={tool.position.x}
                    y1={tool.position.y}
                    x2={tool.position.x}
                    y2={tool.position.y - 5}
                    stroke="hsl(var(--timeline-sage))"
                    strokeWidth="0.1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 0.3 : 0.1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Tool dot */}
                  <motion.circle
                    cx={tool.position.x}
                    cy={tool.position.y}
                    r={hoveredTool === tool.id || selectedTool === tool.id ? 1.2 : 0.8}
                    fill={hoveredTool === tool.id || selectedTool === tool.id 
                      ? "hsl(var(--timeline-terracotta))" 
                      : "hsl(var(--timeline-sage))"}
                    className={isVisible ? "cursor-pointer" : "cursor-not-allowed"}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: 1, 
                      opacity: opacity,
                      transition: { duration: 0.3 }
                    }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, type: "spring" }}
                    onMouseEnter={() => isVisible && setHoveredTool(tool.id)}
                    onMouseLeave={() => setHoveredTool(null)}
                    onClick={() => isVisible && setSelectedTool(selectedTool === tool.id ? null : tool.id)}
                    style={{
                      filter: hoveredTool === tool.id || selectedTool === tool.id 
                        ? "drop-shadow(0 0 8px hsl(var(--timeline-terracotta)))" 
                        : "none"
                    }}
                    data-testid={`tool-dot-${tool.id}`}
                  />

                  {/* Tool label */}
                  <motion.text
                    x={tool.position.x}
                    y={tool.position.y - 6}
                    textAnchor="middle"
                    className="font-mono text-[2.5px] sm:text-[3px] pointer-events-none"
                    fill="hsl(var(--timeline-cream))"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0.2 }}
                    transition={{ duration: 0.3 }}
                    data-testid={`tool-label-${tool.id}`}
                  >
                    {tool.name}
                  </motion.text>

                  {/* Year label below */}
                  <motion.text
                    x={tool.position.x}
                    y={tool.position.y + 3}
                    textAnchor="middle"
                    className="font-mono text-[2px] pointer-events-none"
                    fill="hsl(var(--timeline-sage))"
                    fillOpacity="0.6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 0.6 : 0.15 }}
                    transition={{ duration: 0.3 }}
                    data-testid={`tool-year-${tool.id}`}
                  >
                    {tool.year}
                  </motion.text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Tool Detail Card */}
      <AnimatePresence mode="wait">
        {activeTool && (
          <motion.div
            key={activeTool.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            <Card className="p-6 chart-dark-container border-timeline-sage/30" data-testid={`tool-detail-${activeTool.id}`}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-timeline-sage/10 text-timeline-sage">
                  {activeTool.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h4 className="font-display text-2xl font-bold text-timeline-cream" data-testid="detail-tool-name">
                      {activeTool.name}
                    </h4>
                    <span className="text-sm text-timeline-sage font-mono" data-testid="detail-tool-year">
                      {activeTool.year}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-timeline-sage/20 text-timeline-sage" data-testid="detail-tool-category">
                      {activeTool.category}
                    </span>
                  </div>
                  <p className="text-foreground/80 leading-relaxed" data-testid="detail-tool-description">
                    {activeTool.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legend */}
      <div className="mt-8 flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
        <div className="flex items-center gap-2" data-testid="legend-design-tools">
          <div className="w-3 h-3 rounded-full bg-timeline-sage" />
          <span>Design Tools</span>
        </div>
        <div className="flex items-center gap-2" data-testid="legend-selected">
          <div className="w-3 h-3 rounded-full bg-timeline-terracotta" />
          <span>Selected/Hover</span>
        </div>
        <div className="flex items-center gap-2" data-testid="legend-path">
          <div className="h-0.5 w-8 bg-timeline-sage opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(90deg, hsl(var(--timeline-sage)), hsl(var(--timeline-sage)) 4px, transparent 4px, transparent 8px)' }} />
          <span>Timeline Path</span>
        </div>
      </div>
    </div>
  );
}
