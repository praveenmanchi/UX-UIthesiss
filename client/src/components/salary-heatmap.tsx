import { ResponsiveContainer, Tooltip } from 'recharts';

// Define types for the data structure
interface SalaryRange {
  min: number;
  max: number;
}

interface RegionData {
  region: string;
  junior: SalaryRange;
  mid: SalaryRange;
  senior: SalaryRange;
  lead: SalaryRange;
}

// Realistic salary data for 2024
const salaryData: RegionData[] = [
  {
    region: 'US West Coast',
    junior: { min: 75, max: 95 },
    mid: { min: 110, max: 140 },
    senior: { min: 150, max: 180 },
    lead: { min: 180, max: 250 }
  },
  {
    region: 'US East Coast',
    junior: { min: 70, max: 85 },
    mid: { min: 95, max: 120 },
    senior: { min: 130, max: 160 },
    lead: { min: 160, max: 220 }
  },
  {
    region: 'Europe',
    junior: { min: 45, max: 60 },
    mid: { min: 65, max: 85 },
    senior: { min: 90, max: 120 },
    lead: { min: 120, max: 160 }
  },
  {
    region: 'Asia',
    junior: { min: 25, max: 40 },
    mid: { min: 45, max: 65 },
    senior: { min: 70, max: 95 },
    lead: { min: 95, max: 130 }
  },
  {
    region: 'Canada',
    junior: { min: 55, max: 70 },
    mid: { min: 75, max: 95 },
    senior: { min: 100, max: 130 },
    lead: { min: 130, max: 170 }
  },
  {
    region: 'Australia',
    junior: { min: 60, max: 75 },
    mid: { min: 80, max: 100 },
    senior: { min: 110, max: 140 },
    lead: { min: 140, max: 180 }
  }
];

const seniorityLevels = [
  { key: 'junior', label: 'Junior (0-2 years)' },
  { key: 'mid', label: 'Mid (3-5 years)' },
  { key: 'senior', label: 'Senior (6-10 years)' },
  { key: 'lead', label: 'Lead (10+ years)' }
];

// Function to get color based on salary average - IBM Carbon palette
const getSalaryColor = (min: number, max: number): string => {
  const avg = (min + max) / 2;
  const maxSalary = 250;
  const intensity = avg / maxSalary;
  
  // Create gradient using IBM Carbon blue shades
  if (intensity < 0.2) {
    return 'hsl(217, 40%, 85%)'; // Very light blue
  } else if (intensity < 0.3) {
    return 'hsl(217, 50%, 75%)';
  } else if (intensity < 0.4) {
    return 'hsl(217, 60%, 65%)';
  } else if (intensity < 0.5) {
    return 'hsl(217, 70%, 60%)';
  } else if (intensity < 0.6) {
    return 'hsl(217, 80%, 55%)'; // IBM Carbon blue
  } else if (intensity < 0.7) {
    return 'hsl(217, 90%, 50%)';
  } else if (intensity < 0.8) {
    return 'hsl(220, 100%, 46%)'; // IBM Carbon blue hover
  } else {
    return 'hsl(220, 100%, 40%)'; // Deepest blue for highest values
  }
};

// Custom tooltip component
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const { region, level, min, max, levelLabel } = payload[0].payload;
    return (
      <div className="bg-card dark:bg-card border border-primary/40 rounded-lg px-4 py-3 shadow-xl transition-all duration-200">
        <p className="font-semibold text-foreground mb-1">{region}</p>
        <p className="text-sm text-foreground/90 mb-2">{levelLabel}</p>
        <p className="text-sm text-foreground/90">
          Salary Range:
          <span className="ml-2 font-mono font-semibold text-primary">
            ${min}k - ${max}k
          </span>
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Average: ${Math.round((min + max) / 2)}k USD
        </p>
      </div>
    );
  }
  return null;
};

export default function SalaryHeatmap() {
  // Transform data into heatmap cells
  const heatmapCells = salaryData.flatMap((region) =>
    seniorityLevels.map((level) => {
      const salaryRange = region[level.key as keyof RegionData] as SalaryRange;
      return {
        region: region.region,
        level: level.key,
        levelLabel: level.label,
        min: salaryRange.min,
        max: salaryRange.max,
        color: getSalaryColor(salaryRange.min, salaryRange.max)
      };
    })
  );

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-primary/[0.02] dark:bg-primary/[0.05] rounded-xl border border-primary/10 p-6 transition-all duration-300 hover:border-primary/20">
          <div className="mb-6">
            <span className="text-muted-foreground uppercase tracking-wider text-xs font-mono">Fig 03</span>
            <h3 className="text-2xl font-semibold font-display text-foreground mt-1">
              UX/UI Designer Salaries by Region and Experience
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Annual compensation in USD (2024 market data)
            </p>
          </div>
          
          {/* Heatmap Grid */}
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              {/* Column Headers */}
              <div className="grid grid-cols-5 gap-2 mb-3">
                <div className="text-xs text-muted-foreground font-mono"></div>
                {seniorityLevels.map((level) => (
                  <div key={level.key} className="text-xs text-muted-foreground font-mono text-center">
                    {level.label}
                  </div>
                ))}
              </div>
              
              {/* Heatmap Rows */}
              {salaryData.map((region) => (
                <div key={region.region} className="grid grid-cols-5 gap-2 mb-2">
                  {/* Row Label */}
                  <div className="text-sm text-foreground/90 flex items-center pr-2 font-medium">
                    {region.region}
                  </div>
                  
                  {/* Cells */}
                  {seniorityLevels.map((level) => {
                    const salaryRange = region[level.key as keyof RegionData] as SalaryRange;
                    const color = getSalaryColor(salaryRange.min, salaryRange.max);
                    const avg = Math.round((salaryRange.min + salaryRange.max) / 2);
                    
                    return (
                      <div
                        key={`${region.region}-${level.key}`}
                        className="relative group cursor-pointer transition-all duration-200 hover:scale-105"
                        style={{ backgroundColor: color }}
                      >
                        <div className="p-3 rounded text-center">
                          <div className="text-xs font-mono text-white dark:text-white font-semibold">
                            ${avg}k
                          </div>
                          <div className="text-[10px] text-white/80 dark:text-white/80 mt-1">
                            ${salaryRange.min}-${salaryRange.max}k
                          </div>
                        </div>
                        
                        {/* Hover Tooltip */}
                        <div className="absolute z-10 hidden group-hover:block bottom-full left-1/2 -translate-x-1/2 mb-2 w-48">
                          <div className="bg-card dark:bg-card border border-primary/40 rounded-lg px-3 py-2 shadow-xl">
                            <p className="text-xs font-semibold text-foreground">{region.region}</p>
                            <p className="text-xs text-foreground/80 mt-1">{level.label}</p>
                            <p className="text-xs text-primary font-mono mt-1">
                              ${salaryRange.min}k - ${salaryRange.max}k USD
                            </p>
                          </div>
                          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-card"></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          
          {/* Legend */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Lower Salaries</span>
              <div className="flex">
                {[
                  'hsl(217, 40%, 85%)', 'hsl(217, 50%, 75%)', 'hsl(217, 60%, 65%)', 'hsl(217, 70%, 60%)',
                  'hsl(217, 80%, 55%)', 'hsl(217, 90%, 50%)', 'hsl(220, 100%, 46%)', 'hsl(220, 100%, 40%)'
                ].map((color, index) => (
                  <div
                    key={index}
                    className="w-8 h-4"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">Higher Salaries</span>
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground mt-6 font-mono">
            Source: Industry salary surveys and recruitment data (2024). All values in USD thousands.
          </p>
          
          {/* Additional Insights */}
          <div className="mt-6 pt-6 border-t border-primary/10">
            <h4 className="text-sm font-semibold text-foreground/90 mb-3">Key Insights:</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                US West Coast leads in compensation across all experience levels, with Lead roles reaching up to $250k
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Asia shows the lowest compensation ranges, reflecting cost of living and market differences
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Experience significantly impacts compensation, with Lead roles earning 2-3x Junior salaries in most regions
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Europe and Canada show similar mid-level compensation despite geographic differences
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}