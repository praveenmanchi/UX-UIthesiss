import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Label, Cell } from 'recharts';

const data = [
  { role: 'Field Creator', experience: 32, highlight: true },
  { role: 'Early Pioneer', experience: 30, highlight: true },
  { role: 'Prof Practice', experience: 25, highlight: false },
  { role: 'Industry Std', experience: 20, highlight: false },
  { role: 'Mainstream', experience: 15, highlight: false },
  { role: 'Modern Tools', experience: 10, highlight: false },
  { role: 'Recent Graduate', experience: 5, highlight: false }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const entry = data.find(d => d.role === label);
    return (
      <div className="bg-card dark:bg-card border border-primary/40 rounded-lg px-4 py-3 shadow-xl transition-all duration-200">
        <p className="font-semibold text-foreground mb-2">{label}</p>
        <p className="text-sm text-foreground/90">
          Max Experience: 
          <span className="ml-2 font-mono font-semibold text-primary">
            {payload[0].value} years
          </span>
        </p>
        {entry?.highlight && (
          <p className="text-xs mt-2 font-semibold" style={{ color: 'hsl(354, 81%, 49%)' }}>
            Above 24-year threshold
          </p>
        )}
      </div>
    );
  }
  return null;
};

export default function MaxExperienceChart() {
  return (
    <div className="w-full">
      <div className="bg-primary/[0.02] rounded-xl border border-primary/10 p-4 sm:p-6 md:p-8 transition-all duration-300 hover:border-primary/20">
        <div className="mb-4">
          <span className="text-muted-foreground uppercase tracking-wider text-xs font-mono">Fig 02</span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold font-display text-foreground mt-1">Maximum UX/UI Experience by Professional Category</h3>
          <p className="text-xs sm:text-sm md:text-base text-foreground/70 mt-2">
            Years of potential experience across different generations of UX professionals in 2025
          </p>
        </div>
        
        <div className="h-64 sm:h-80 md:h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 30, right: 30, left: 80, bottom: 80 }}>
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="hsl(217, 100%, 53%)" 
                opacity={0.05}
                verticalPoints={[0]}
              />
              <XAxis 
                dataKey="role" 
                stroke="transparent"
                tick={{ fill: 'hsl(0, 0%, 55%)', fontSize: 10 }}
                className="text-xs sm:text-sm"
                angle={-45}
                textAnchor="end"
                height={100}
                axisLine={{ stroke: 'hsl(0, 0%, 88%)', opacity: 0.1 }}
                tickLine={false}
              />
              <YAxis 
                stroke="transparent"
                tick={{ fill: 'hsl(0, 0%, 55%)', fontSize: 10 }}
                className="text-xs sm:text-sm"
                axisLine={{ stroke: 'hsl(0, 0%, 88%)', opacity: 0.1 }}
                tickLine={false}
                label={{ 
                  value: 'Maximum Years of Experience', 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { fill: 'hsl(0, 0%, 55%)', fontSize: 11 }
                }}
                domain={[0, 35]}
              />
              <Tooltip 
                content={<CustomTooltip />}
                cursor={{ fill: 'hsl(217, 100%, 53%)', opacity: 0.05 }}
                animationDuration={200}
              />
              <ReferenceLine 
                y={24} 
                stroke="hsl(354, 81%, 49%)" 
                strokeDasharray="5 5"
                strokeWidth={2}
                opacity={0.7}
              >
                <Label 
                  value="24-year experience threshold" 
                  position="insideTopRight" 
                  fill="hsl(354, 81%, 49%)"
                  fontSize={11}
                  offset={10}
                  style={{ fontWeight: 600 }}
                />
              </ReferenceLine>
              <Bar 
                dataKey="experience" 
                radius={[6, 6, 0, 0]}
                animationDuration={800}
                animationBegin={0}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`}
                    fill={entry.highlight ? (index === 0 ? 'hsl(217, 100%, 53%)' : 'hsl(354, 81%, 49%)') : 'hsl(142, 63%, 39%)'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <p className="text-xs text-muted-foreground mt-4 font-mono">
          Source: Career timeline analysis of UX/UI professional roles (1993-2025)
        </p>
      </div>
    </div>
  );
}