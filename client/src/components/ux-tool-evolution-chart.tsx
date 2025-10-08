import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { period: '1988-2010', tool: 'Photoshop', users: 50, collab: 10 },
  { period: '2010-2016', tool: 'Sketch', users: 150, collab: 30 },
  { period: '2016-2020', tool: 'Figma', users: 400, collab: 90 },
  { period: '2020-2025', tool: 'Advanced Figma', users: 600, collab: 95 }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card dark:bg-card border border-primary/40 rounded-lg px-4 py-3 shadow-xl transition-all duration-200">
        <p className="font-semibold text-foreground mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm text-foreground/90">
            {entry.name === 'users' ? 'UX Professionals' : 'Collaboration'}:
            <span className="ml-2 font-mono font-semibold" style={{ color: entry.color }}>
              {entry.name === 'users' ? `${entry.value}k` : `${entry.value}%`}
            </span>
          </p>
        ))}
        {data.find(d => d.period === label)?.tool && (
          <p className="text-xs text-muted-foreground mt-2">
            Primary Tool: {data.find(d => d.period === label)?.tool}
          </p>
        )}
      </div>
    );
  }
  return null;
};

export default function UXToolEvolutionChart() {
  return (
    <div className="w-full">
      <div className="bg-primary/[0.02] rounded-xl border border-primary/10 p-4 sm:p-6 md:p-8 transition-all duration-300 hover:border-primary/20">
        <div className="mb-4">
          <span className="text-muted-foreground uppercase tracking-wider text-xs font-mono">Fig 01</span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold font-display text-foreground mt-1">Design Tool Evolution & Professional Growth</h3>
          <p className="text-xs sm:text-sm md:text-base text-foreground/70 mt-2">
            Tracking the correlation between tool capabilities and industry expansion over four decades
          </p>
        </div>
        
        <div className="h-64 sm:h-80 md:h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="hsl(217, 100%, 53%)" 
                opacity={0.05}
                verticalPoints={[0]}
              />
              <XAxis 
                dataKey="period" 
                stroke="transparent"
                tick={{ fill: 'hsl(0, 0%, 55%)', fontSize: 10 }}
                className="text-xs sm:text-sm"
                axisLine={{ stroke: 'hsl(0, 0%, 88%)', opacity: 0.1 }}
                tickLine={false}
              />
              <YAxis 
                yAxisId="left"
                stroke="transparent"
                tick={{ fill: 'hsl(0, 0%, 55%)', fontSize: 10 }}
                className="text-xs sm:text-sm"
                axisLine={{ stroke: 'hsl(0, 0%, 88%)', opacity: 0.1 }}
                tickLine={false}
                label={{ 
                  value: 'UX Professionals (thousands)', 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { fill: 'hsl(0, 0%, 55%)', fontSize: 11 }
                }}
              />
              <YAxis 
                yAxisId="right"
                orientation="right"
                stroke="transparent"
                tick={{ fill: 'hsl(0, 0%, 55%)', fontSize: 10 }}
                className="text-xs sm:text-sm"
                axisLine={{ stroke: 'hsl(0, 0%, 88%)', opacity: 0.1 }}
                tickLine={false}
                label={{ 
                  value: 'Collaboration Capability (%)', 
                  angle: 90, 
                  position: 'insideRight',
                  style: { fill: 'hsl(0, 0%, 55%)', fontSize: 11 }
                }}
                domain={[0, 100]}
              />
              <Tooltip 
                content={<CustomTooltip />}
                cursor={{ fill: 'hsl(217, 100%, 53%)', opacity: 0.05 }}
                animationDuration={200}
              />
              <Legend 
                wrapperStyle={{ paddingTop: '24px' }}
                iconType="rect"
                iconSize={12}
                formatter={(value: string) => {
                  const labels: Record<string, string> = {
                    users: 'UX Professionals',
                    collab: 'Collaboration Capability'
                  };
                  return <span className="text-xs sm:text-sm text-foreground/80">{labels[value] || value}</span>;
                }}
              />
              <Bar 
                yAxisId="left"
                dataKey="users" 
                fill="hsl(217, 100%, 53%)"
                radius={[6, 6, 0, 0]}
                animationDuration={800}
                animationBegin={0}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="collab" 
                stroke="hsl(354, 81%, 49%)"
                strokeWidth={3}
                dot={{ fill: 'hsl(354, 81%, 49%)', r: 5, strokeWidth: 0 }}
                activeDot={{ r: 7, strokeWidth: 2, stroke: 'hsl(354, 81%, 49%)', fill: 'hsl(var(--card))' }}
                animationDuration={1000}
                animationBegin={200}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        
        <p className="text-xs text-muted-foreground mt-4 font-mono">
          Source: Industry surveys and tool adoption metrics (1988-2025)
        </p>
      </div>
    </div>
  );
}