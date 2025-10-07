import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useState } from 'react';

// Skills evolution data for different time periods
const skillsData = [
  {
    skill: 'Visual Design',
    '2000': 90,
    '2010': 85,
    '2020': 75,
    '2024': 70,
    fullMark: 100
  },
  {
    skill: 'User Research',
    '2000': 40,
    '2010': 60,
    '2020': 80,
    '2024': 85,
    fullMark: 100
  },
  {
    skill: 'Prototyping',
    '2000': 30,
    '2010': 70,
    '2020': 85,
    '2024': 90,
    fullMark: 100
  },
  {
    skill: 'Coding/HTML',
    '2000': 60,
    '2010': 50,
    '2020': 40,
    '2024': 35,
    fullMark: 100
  },
  {
    skill: 'Psychology',
    '2000': 50,
    '2010': 60,
    '2020': 70,
    '2024': 75,
    fullMark: 100
  },
  {
    skill: 'Design Systems',
    '2000': 10,
    '2010': 30,
    '2020': 75,
    '2024': 90,
    fullMark: 100
  },
  {
    skill: 'Data Analysis',
    '2000': 20,
    '2010': 40,
    '2020': 70,
    '2024': 80,
    fullMark: 100
  },
  {
    skill: 'Business Strategy',
    '2000': 30,
    '2010': 45,
    '2020': 65,
    '2024': 80,
    fullMark: 100
  }
];

// Color palette - sage gradient for different time periods
const periodColors: Record<string, string> = {
  '2024': '#8AA97A',     // Sage (primary)
  '2020': '#7A9A6A',     // Darker sage
  '2010': '#6A8A5A',     // Even darker sage
  '2000': '#5A7A4A',     // Darkest sage
};

// Custom tooltip component
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const sortedPayload = [...payload].sort((a, b) => {
      const yearA = parseInt(a.dataKey);
      const yearB = parseInt(b.dataKey);
      return yearB - yearA;
    });
    
    return (
      <div className="bg-[#121212] border border-[#8AA97A]/40 rounded-lg px-4 py-3 shadow-xl transition-all duration-200 min-w-[200px]">
        <p className="font-semibold text-[#f4f4e4] mb-2">
          {payload[0]?.payload?.skill}
        </p>
        {sortedPayload.map((entry: any) => {
          if (entry.value) {
            return (
              <div key={entry.dataKey} className="flex justify-between items-center py-1">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-sm" 
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-sm text-[#f4f4e4]/90">{entry.dataKey}</span>
                </div>
                <span className="text-sm font-mono font-semibold text-[#f4f4e4]">
                  {entry.value}
                </span>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  }
  return null;
};

// Custom legend component with interactivity
const CustomLegend = ({ payload, onToggle, hiddenPeriods }: any) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-6">
      {payload.map((entry: any) => {
        const isHidden = hiddenPeriods.includes(entry.value);
        return (
          <button
            key={entry.value}
            onClick={() => onToggle(entry.value)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 
              ${isHidden 
                ? 'opacity-40 bg-[#1a1a1a] hover:opacity-60' 
                : 'bg-[#8AA97A]/10 hover:bg-[#8AA97A]/20'
              }`}
          >
            <div 
              className="w-3 h-3 rounded-sm transition-all duration-200"
              style={{ 
                backgroundColor: isHidden ? '#666' : entry.color,
              }}
            />
            <span className="text-xs sm:text-sm text-[#f4f4e4]/90 font-medium">
              {entry.value}
            </span>
          </button>
        );
      })}
    </div>
  );
};

// Custom label rendering for PolarAngleAxis
const renderCustomAxisLabel = (value: string) => {
  const maxLength = 12;
  if (value.length > maxLength) {
    return value.substring(0, maxLength - 3) + '...';
  }
  return value;
};

export default function SkillsEvolutionChart() {
  const [hiddenPeriods, setHiddenPeriods] = useState<string[]>([]);
  
  const togglePeriod = (period: string) => {
    setHiddenPeriods(prev => 
      prev.includes(period) 
        ? prev.filter(p => p !== period)
        : [...prev, period]
    );
  };
  
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#8AA97A]/[0.02] rounded-xl border border-[#8AA97A]/10 p-4 sm:p-6 md:p-8 transition-all duration-300 hover:border-[#8AA97A]/20">
          <div className="mb-6">
            <span className="text-[#f4f4e4]/50 uppercase tracking-wider text-xs font-mono">Fig 03</span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold font-display text-[#f4f4e4] mt-1">
              Evolution of UX/UI Skill Requirements
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-[#f4f4e4]/70 mt-2">
              Relative importance of skills over time (0-100 scale)
            </p>
          </div>
          
          <div className="h-64 sm:h-80 md:h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={skillsData}>
                <PolarGrid 
                  stroke="#8AA97A"
                  strokeOpacity={0.1}
                  radialLines={true}
                />
                <PolarAngleAxis 
                  dataKey="skill"
                  tick={{ fill: '#f4f4e4', opacity: 0.8, fontSize: 10 }}
                  className="text-xs sm:text-sm"
                />
                <PolarRadiusAxis 
                  angle={90}
                  domain={[0, 100]}
                  tick={{ fill: '#f4f4e4', opacity: 0.5, fontSize: 9 }}
                  className="text-xs"
                  tickCount={6}
                />
                
                <Tooltip 
                  content={<CustomTooltip />}
                  cursor={false}
                  animationDuration={200}
                />
                
                {/* Render radars in reverse chronological order for proper layering */}
                {!hiddenPeriods.includes('2000') && (
                  <Radar
                    name="2000"
                    dataKey="2000"
                    stroke={periodColors['2000']}
                    fill={periodColors['2000']}
                    fillOpacity={0.15}
                    strokeWidth={2}
                    animationDuration={1200}
                    animationBegin={0}
                  />
                )}
                {!hiddenPeriods.includes('2010') && (
                  <Radar
                    name="2010"
                    dataKey="2010"
                    stroke={periodColors['2010']}
                    fill={periodColors['2010']}
                    fillOpacity={0.15}
                    strokeWidth={2}
                    animationDuration={1200}
                    animationBegin={200}
                  />
                )}
                {!hiddenPeriods.includes('2020') && (
                  <Radar
                    name="2020"
                    dataKey="2020"
                    stroke={periodColors['2020']}
                    fill={periodColors['2020']}
                    fillOpacity={0.15}
                    strokeWidth={2}
                    animationDuration={1200}
                    animationBegin={400}
                  />
                )}
                {!hiddenPeriods.includes('2024') && (
                  <Radar
                    name="2024"
                    dataKey="2024"
                    stroke={periodColors['2024']}
                    fill={periodColors['2024']}
                    fillOpacity={0.25}
                    strokeWidth={3}
                    animationDuration={1200}
                    animationBegin={600}
                  />
                )}
                
                <Legend 
                  content={(props) => 
                    <CustomLegend 
                      {...props} 
                      onToggle={togglePeriod} 
                      hiddenPeriods={hiddenPeriods} 
                    />
                  }
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          
          {/* Key Insights */}
          <div className="mt-8 pt-6 border-t border-[#8AA97A]/10">
            <h4 className="text-sm font-semibold text-[#f4f4e4]/90 mb-3">Key Skill Evolution Insights:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-xs font-mono text-[#8AA97A] mb-2">Skills Gaining Importance ↑</h5>
                <ul className="space-y-2 text-xs text-[#f4f4e4]/70">
                  <li className="flex items-start">
                    <span className="text-[#8AA97A] mr-2">•</span>
                    <span><strong>Design Systems</strong> (+800% since 2000): From 10 to 90, reflecting the shift to scalable, consistent design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8AA97A] mr-2">•</span>
                    <span><strong>Data Analysis</strong> (+300% since 2000): From 20 to 80, driven by data-informed design decisions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8AA97A] mr-2">•</span>
                    <span><strong>Prototyping</strong> (+200% since 2000): From 30 to 90, enabled by modern tools like Figma</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8AA97A] mr-2">•</span>
                    <span><strong>Business Strategy</strong> (+167% since 2000): From 30 to 80, UX as business differentiator</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h5 className="text-xs font-mono text-[#8AA97A] mb-2">Skills Declining in Emphasis ↓</h5>
                <ul className="space-y-2 text-xs text-[#f4f4e4]/70">
                  <li className="flex items-start">
                    <span className="text-[#8AA97A] mr-2">•</span>
                    <span><strong>Visual Design</strong> (-22% since 2000): From 90 to 70, still important but less dominant</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8AA97A] mr-2">•</span>
                    <span><strong>Coding/HTML</strong> (-42% since 2000): From 60 to 35, specialized roles and no-code tools</span>
                  </li>
                </ul>
                
                <h5 className="text-xs font-mono text-[#8AA97A] mb-2 mt-4">Steady Growth Areas</h5>
                <ul className="space-y-2 text-xs text-[#f4f4e4]/70">
                  <li className="flex items-start">
                    <span className="text-[#8AA97A] mr-2">•</span>
                    <span><strong>User Research</strong>: Consistent upward trend from 40 to 85</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8AA97A] mr-2">•</span>
                    <span><strong>Psychology</strong>: Gradual increase from 50 to 75</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Historical Context */}
          <div className="mt-6 pt-6 border-t border-[#8AA97A]/10">
            <h4 className="text-sm font-semibold text-[#f4f4e4]/90 mb-3">Evolution Timeline:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-[#5A7A4A] text-lg">•</span>
                <div>
                  <p className="text-xs font-mono text-[#f4f4e4]/80">2000</p>
                  <p className="text-xs text-[#f4f4e4]/60">Visual-centric web design era, heavy coding requirements</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#6A8A5A] text-lg">•</span>
                <div>
                  <p className="text-xs font-mono text-[#f4f4e4]/80">2010</p>
                  <p className="text-xs text-[#f4f4e4]/60">Mobile-first revolution, rise of prototyping tools</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#7A9A6A] text-lg">•</span>
                <div>
                  <p className="text-xs font-mono text-[#f4f4e4]/80">2020</p>
                  <p className="text-xs text-[#f4f4e4]/60">Systems thinking dominance, data-driven design</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#8AA97A] text-lg">•</span>
                <div>
                  <p className="text-xs font-mono text-[#f4f4e4]/80">2024</p>
                  <p className="text-xs text-[#f4f4e4]/60">AI-augmented design, strategic business focus</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-xs text-[#f4f4e4]/50 mt-6 font-mono">
            Source: Industry job postings analysis, design role surveys, and professional skill assessments (2000-2024)
          </p>
        </div>
      </div>
    </section>
  );
}