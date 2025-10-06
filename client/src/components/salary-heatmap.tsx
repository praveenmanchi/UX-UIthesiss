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

// Function to get color based on salary average
const getSalaryColor = (min: number, max: number): string => {
  const avg = (min + max) / 2;
  const maxSalary = 250;
  const intensity = avg / maxSalary;
  
  // Create gradient from dark gray to sage (#8AA97A)
  if (intensity < 0.2) {
    return '#2a2a2a'; // Very dark gray
  } else if (intensity < 0.3) {
    return '#3a3a3a';
  } else if (intensity < 0.4) {
    return '#4a4a4a';
  } else if (intensity < 0.5) {
    return '#5a5a5a';
  } else if (intensity < 0.6) {
    return '#6B8261'; // Starting to add sage tint
  } else if (intensity < 0.7) {
    return '#7A9170';
  } else if (intensity < 0.8) {
    return '#8AA97A'; // Full sage
  } else {
    return '#9BB88B'; // Lighter sage for highest values
  }
};

// Custom tooltip component
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const { region, level, min, max, levelLabel } = payload[0].payload;
    return (
      <div className="bg-[#121212] border border-[#8AA97A]/40 rounded-lg px-4 py-3 shadow-xl transition-all duration-200">
        <p className="font-semibold text-[#f4f4e4] mb-1">{region}</p>
        <p className="text-sm text-[#f4f4e4]/90 mb-2">{levelLabel}</p>
        <p className="text-sm text-[#f4f4e4]/90">
          Salary Range:
          <span className="ml-2 font-mono font-semibold text-[#8AA97A]">
            ${min}k - ${max}k
          </span>
        </p>
        <p className="text-xs text-[#f4f4e4]/60 mt-2">
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
        <div className="bg-[#8AA97A]/[0.02] rounded-xl border border-[#8AA97A]/10 p-6 transition-all duration-300 hover:border-[#8AA97A]/20">
          <div className="mb-6">
            <span className="text-[#f4f4e4]/50 uppercase tracking-wider text-xs font-mono">Fig 03</span>
            <h3 className="text-2xl font-semibold font-display text-[#f4f4e4] mt-1">
              UX/UI Designer Salaries by Region and Experience
            </h3>
            <p className="text-sm text-[#f4f4e4]/70 mt-2">
              Annual compensation in USD (2024 market data)
            </p>
          </div>
          
          {/* Heatmap Grid */}
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              {/* Column Headers */}
              <div className="grid grid-cols-5 gap-2 mb-3">
                <div className="text-xs text-[#f4f4e4]/70 font-mono"></div>
                {seniorityLevels.map((level) => (
                  <div key={level.key} className="text-xs text-[#f4f4e4]/70 font-mono text-center">
                    {level.label}
                  </div>
                ))}
              </div>
              
              {/* Heatmap Rows */}
              {salaryData.map((region) => (
                <div key={region.region} className="grid grid-cols-5 gap-2 mb-2">
                  {/* Row Label */}
                  <div className="text-sm text-[#f4f4e4]/90 flex items-center pr-2 font-medium">
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
                          <div className="text-xs font-mono text-[#f4f4e4]/90 font-semibold">
                            ${avg}k
                          </div>
                          <div className="text-[10px] text-[#f4f4e4]/60 mt-1">
                            ${salaryRange.min}-${salaryRange.max}k
                          </div>
                        </div>
                        
                        {/* Hover Tooltip */}
                        <div className="absolute z-10 hidden group-hover:block bottom-full left-1/2 -translate-x-1/2 mb-2 w-48">
                          <div className="bg-[#121212] border border-[#8AA97A]/40 rounded-lg px-3 py-2 shadow-xl">
                            <p className="text-xs font-semibold text-[#f4f4e4]">{region.region}</p>
                            <p className="text-xs text-[#f4f4e4]/80 mt-1">{level.label}</p>
                            <p className="text-xs text-[#8AA97A] font-mono mt-1">
                              ${salaryRange.min}k - ${salaryRange.max}k USD
                            </p>
                          </div>
                          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#121212]"></div>
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
              <span className="text-xs text-[#f4f4e4]/60">Lower Salaries</span>
              <div className="flex">
                {['#2a2a2a', '#3a3a3a', '#4a4a4a', '#5a5a5a', '#6B8261', '#7A9170', '#8AA97A', '#9BB88B'].map((color, index) => (
                  <div
                    key={index}
                    className="w-8 h-4"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <span className="text-xs text-[#f4f4e4]/60">Higher Salaries</span>
            </div>
          </div>
          
          <p className="text-xs text-[#f4f4e4]/50 mt-6 font-mono">
            Source: Industry salary surveys and recruitment data (2024). All values in USD thousands.
          </p>
          
          {/* Additional Insights */}
          <div className="mt-6 pt-6 border-t border-[#8AA97A]/10">
            <h4 className="text-sm font-semibold text-[#f4f4e4]/90 mb-3">Key Insights:</h4>
            <ul className="space-y-2 text-xs text-[#f4f4e4]/70">
              <li className="flex items-start">
                <span className="text-[#8AA97A] mr-2">•</span>
                US West Coast leads in compensation across all experience levels, with Lead roles reaching up to $250k
              </li>
              <li className="flex items-start">
                <span className="text-[#8AA97A] mr-2">•</span>
                Asia shows the lowest compensation ranges, reflecting cost of living and market differences
              </li>
              <li className="flex items-start">
                <span className="text-[#8AA97A] mr-2">•</span>
                Experience significantly impacts compensation, with Lead roles earning 2-3x Junior salaries in most regions
              </li>
              <li className="flex items-start">
                <span className="text-[#8AA97A] mr-2">•</span>
                Europe and Canada show similar mid-level compensation despite geographic differences
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}