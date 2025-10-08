import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useState } from 'react';

// Comprehensive market share data from 2010-2024
const marketData = [
  {
    year: 2010,
    Photoshop: 85,
    Sketch: 0,
    'Adobe XD': 0,
    Figma: 0,
    InVision: 0,
    Framer: 0,
    Others: 15,
    milestone: 'Sketch launches'
  },
  {
    year: 2012,
    Photoshop: 70,
    Sketch: 20,
    'Adobe XD': 0,
    Figma: 0,
    InVision: 0,
    Framer: 0,
    Others: 10,
  },
  {
    year: 2014,
    Photoshop: 50,
    Sketch: 35,
    'Adobe XD': 0,
    Figma: 0,
    InVision: 10,
    Framer: 0,
    Others: 5,
  },
  {
    year: 2016,
    Photoshop: 35,
    Sketch: 40,
    'Adobe XD': 5,
    Figma: 0,
    InVision: 15,
    Framer: 0,
    Others: 5,
    milestone: 'Figma launches'
  },
  {
    year: 2018,
    Photoshop: 25,
    Sketch: 35,
    'Adobe XD': 10,
    Figma: 15,
    InVision: 10,
    Framer: 5,
    Others: 0,
  },
  {
    year: 2020,
    Photoshop: 15,
    Sketch: 25,
    'Adobe XD': 10,
    Figma: 35,
    InVision: 5,
    Framer: 10,
    Others: 0,
    milestone: 'Figma overtakes Sketch'
  },
  {
    year: 2022,
    Photoshop: 10,
    Sketch: 15,
    'Adobe XD': 8,
    Figma: 55,
    InVision: 0,
    Framer: 7,
    Others: 5,
    milestone: 'Adobe acquires Figma'
  },
  {
    year: 2024,
    Photoshop: 8,
    Sketch: 10,
    'Adobe XD': 5,
    Figma: 65,
    InVision: 0,
    Framer: 7,
    Others: 5,
    milestone: 'Figma dominance'
  },
];

// Color palette - IBM Carbon Design System colors
const toolColors: Record<string, string> = {
  Figma: 'hsl(217, 100%, 53%)',      // IBM Carbon Blue
  Sketch: 'hsl(292, 48%, 55%)',      // Purple
  Photoshop: 'hsl(142, 63%, 39%)',   // Success green
  'Adobe XD': 'hsl(47, 86%, 52%)',   // Yellow
  InVision: 'hsl(354, 81%, 49%)',    // Red
  Framer: 'hsl(180, 29%, 50%)',      // Teal
  Others: 'hsl(0, 0%, 40%)',         // Neutral gray
};

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = marketData.find(d => d.year === label);
    const sortedPayload = [...payload].sort((a, b) => b.value - a.value);
    
    return (
      <div className="bg-card dark:bg-card border border-primary/40 rounded-lg px-4 py-3 shadow-xl transition-opacity duration-200 min-w-[200px]">
        <p className="font-display font-semibold text-foreground mb-2">{label}</p>
        {sortedPayload.map((entry: any) => {
          if (entry.value > 0) {
            return (
              <div key={entry.name} className="flex justify-between items-center py-1">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-sm" 
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-sm font-sans text-foreground/90">{entry.name}</span>
                </div>
                <span className="text-sm font-mono font-semibold text-foreground">
                  {entry.value}%
                </span>
              </div>
            );
          }
          return null;
        })}
        {data?.milestone && (
          <p className="text-xs font-sans text-primary mt-3 pt-2 border-t border-primary/20 italic">
            ✦ {data.milestone}
          </p>
        )}
      </div>
    );
  }
  return null;
};

// Custom legend component with interactivity
const CustomLegend = ({ payload, onToggle, hiddenTools }: any) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-6">
      {payload.map((entry: any) => {
        const isHidden = hiddenTools.includes(entry.value);
        return (
          <button
            key={entry.value}
            onClick={() => onToggle(entry.value)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 
              ${isHidden 
                ? 'opacity-40 bg-card hover:opacity-60' 
                : 'bg-primary/10 hover:bg-primary/20'
              }`}
          >
            <div 
              className="w-3 h-3 rounded-sm transition-all duration-200"
              style={{ 
                backgroundColor: isHidden ? 'hsl(0, 0%, 40%)' : entry.color,
              }}
            />
            <span className="text-xs sm:text-sm font-sans text-foreground/90 font-medium">
              {entry.value}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default function MarketShareChart() {
  const [hiddenTools, setHiddenTools] = useState<string[]>([]);
  
  const toggleTool = (tool: string) => {
    setHiddenTools(prev => 
      prev.includes(tool) 
        ? prev.filter(t => t !== tool)
        : [...prev, tool]
    );
  };
  
  // Filter data based on hidden tools
  const displayData = marketData.map(entry => {
    const newEntry = { ...entry };
    hiddenTools.forEach(tool => {
      if (tool in newEntry) {
        (newEntry as any)[tool] = 0;
      }
    });
    return newEntry;
  });
  
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-primary/[0.02] rounded-xl border border-primary/10 p-4 sm:p-6 md:p-8 transition-all duration-300 hover:border-primary/20">
          <div className="mb-6">
            <span className="text-muted-foreground uppercase tracking-wider text-xs font-mono">Fig 02</span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold font-display text-foreground mt-1">
              Design Tool Market Share Evolution
            </h3>
            <p className="text-xs sm:text-sm md:text-base font-sans text-foreground/70 mt-2">
              Percentage of professional designers using each tool as primary (2010-2024)
            </p>
          </div>
          
          <div className="h-64 sm:h-80 md:h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart 
                data={displayData} 
                margin={{ top: 10, right: 30, left: 20, bottom: 60 }}
              >
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  stroke="hsl(217, 100%, 53%)" 
                  opacity={0.05}
                  verticalPoints={[0]}
                />
                <XAxis 
                  dataKey="year" 
                  stroke="transparent"
                  tick={{ fill: 'hsl(0, 0%, 55%)', fontSize: 10 }}
                  className="text-xs sm:text-sm"
                  axisLine={{ stroke: 'hsl(0, 0%, 88%)', opacity: 0.1 }}
                  tickLine={false}
                  interval={0}
                />
                <YAxis 
                  stroke="transparent"
                  tick={{ fill: 'hsl(0, 0%, 55%)', fontSize: 10 }}
                  className="text-xs sm:text-sm"
                  axisLine={{ stroke: 'hsl(0, 0%, 88%)', opacity: 0.1 }}
                  tickLine={false}
                  domain={[0, 100]}
                  tickFormatter={(value) => `${value}%`}
                  label={{ 
                    value: 'Market Share (%)', 
                    angle: -90, 
                    position: 'insideLeft',
                    style: { fill: 'hsl(0, 0%, 55%)', fontSize: 11 }
                  }}
                />
                <Tooltip 
                  content={<CustomTooltip />}
                  cursor={{ fill: 'hsl(217, 100%, 53%)', opacity: 0.05 }}
                  animationDuration={200}
                />
                <Legend 
                  content={(props) => 
                    <CustomLegend 
                      {...props} 
                      onToggle={toggleTool} 
                      hiddenTools={hiddenTools} 
                    />
                  }
                />
                
                {/* Areas stacked from bottom to top */}
                <Area
                  type="monotone"
                  dataKey="Others"
                  stackId="1"
                  stroke="transparent"
                  fill={toolColors.Others}
                  fillOpacity={0.8}
                  animationDuration={1000}
                  animationBegin={0}
                />
                <Area
                  type="monotone"
                  dataKey="Framer"
                  stackId="1"
                  stroke="transparent"
                  fill={toolColors.Framer}
                  fillOpacity={0.8}
                  animationDuration={1000}
                  animationBegin={100}
                />
                <Area
                  type="monotone"
                  dataKey="InVision"
                  stackId="1"
                  stroke="transparent"
                  fill={toolColors.InVision}
                  fillOpacity={0.8}
                  animationDuration={1000}
                  animationBegin={200}
                />
                <Area
                  type="monotone"
                  dataKey="Adobe XD"
                  stackId="1"
                  stroke="transparent"
                  fill={toolColors['Adobe XD']}
                  fillOpacity={0.8}
                  animationDuration={1000}
                  animationBegin={300}
                />
                <Area
                  type="monotone"
                  dataKey="Photoshop"
                  stackId="1"
                  stroke="transparent"
                  fill={toolColors.Photoshop}
                  fillOpacity={0.8}
                  animationDuration={1000}
                  animationBegin={400}
                />
                <Area
                  type="monotone"
                  dataKey="Sketch"
                  stackId="1"
                  stroke="transparent"
                  fill={toolColors.Sketch}
                  fillOpacity={0.8}
                  animationDuration={1000}
                  animationBegin={500}
                />
                <Area
                  type="monotone"
                  dataKey="Figma"
                  stackId="1"
                  stroke="transparent"
                  fill={toolColors.Figma}
                  fillOpacity={0.9}
                  animationDuration={1200}
                  animationBegin={600}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          {/* Key Milestones */}
          <div className="mt-8 pt-6 border-t border-primary/10">
            <h4 className="text-sm font-display font-semibold text-foreground/90 mb-3">Key Milestones:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-primary text-lg">•</span>
                <div>
                  <p className="text-xs font-mono text-foreground/80">2010</p>
                  <p className="text-xs font-sans text-muted-foreground">Sketch launches, challenges Photoshop</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-lg">•</span>
                <div>
                  <p className="text-xs font-mono text-foreground/80">2016</p>
                  <p className="text-xs font-sans text-muted-foreground">Figma introduces real-time collaboration</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-lg">•</span>
                <div>
                  <p className="text-xs font-mono text-foreground/80">2020</p>
                  <p className="text-xs font-sans text-muted-foreground">Figma becomes market leader</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-lg">•</span>
                <div>
                  <p className="text-xs font-mono text-foreground/80">2022</p>
                  <p className="text-xs font-sans text-muted-foreground">Adobe acquires Figma for $20B</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground mt-6 font-mono">
            Source: Designer Tools Survey, State of Design Reports (2010-2024)
          </p>
        </div>
      </div>
    </section>
  );
}