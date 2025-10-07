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
      <div className="bg-[#121212] border border-[#8AA97A]/40 rounded-lg px-4 py-3 shadow-xl transition-all duration-200">
        <p className="font-semibold text-[#f4f4e4] mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm text-[#f4f4e4]/90">
            {entry.name === 'users' ? 'UX Professionals' : 'Collaboration'}:
            <span className="ml-2 font-mono font-semibold" style={{ color: entry.color }}>
              {entry.name === 'users' ? `${entry.value}k` : `${entry.value}%`}
            </span>
          </p>
        ))}
        {data.find(d => d.period === label)?.tool && (
          <p className="text-xs text-[#f4f4e4]/60 mt-2">
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
      <div className="bg-[#8AA97A]/[0.02] rounded-xl border border-[#8AA97A]/10 p-4 sm:p-6 md:p-8 transition-all duration-300 hover:border-[#8AA97A]/20">
        <div className="mb-4">
          <span className="text-[#f4f4e4]/50 uppercase tracking-wider text-xs font-mono">Fig 01</span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold font-display text-[#f4f4e4] mt-1">Design Tool Evolution & Professional Growth</h3>
          <p className="text-xs sm:text-sm md:text-base text-[#f4f4e4]/70 mt-2">
            Tracking the correlation between tool capabilities and industry expansion over four decades
          </p>
        </div>
        
        <div className="h-64 sm:h-80 md:h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="#8AA97A" 
                opacity={0.05}
                verticalPoints={[0]}
              />
              <XAxis 
                dataKey="period" 
                stroke="transparent"
                tick={{ fill: '#f4f4e4', opacity: 0.7, fontSize: 10 }}
                className="text-xs sm:text-sm"
                axisLine={{ stroke: '#f4f4e4', opacity: 0.1 }}
                tickLine={false}
              />
              <YAxis 
                yAxisId="left"
                stroke="transparent"
                tick={{ fill: '#f4f4e4', opacity: 0.7, fontSize: 10 }}
                className="text-xs sm:text-sm"
                axisLine={{ stroke: '#f4f4e4', opacity: 0.1 }}
                tickLine={false}
                label={{ 
                  value: 'UX Professionals (thousands)', 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { fill: '#f4f4e4', opacity: 0.7, fontSize: 11 }
                }}
              />
              <YAxis 
                yAxisId="right"
                orientation="right"
                stroke="transparent"
                tick={{ fill: '#f4f4e4', opacity: 0.7, fontSize: 10 }}
                className="text-xs sm:text-sm"
                axisLine={{ stroke: '#f4f4e4', opacity: 0.1 }}
                tickLine={false}
                label={{ 
                  value: 'Collaboration Capability (%)', 
                  angle: 90, 
                  position: 'insideRight',
                  style: { fill: '#f4f4e4', opacity: 0.7, fontSize: 11 }
                }}
                domain={[0, 100]}
              />
              <Tooltip 
                content={<CustomTooltip />}
                cursor={{ fill: '#8AA97A', opacity: 0.05 }}
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
                  return <span className="text-xs sm:text-sm text-[#f4f4e4]/80">{labels[value] || value}</span>;
                }}
              />
              <Bar 
                yAxisId="left"
                dataKey="users" 
                fill="#8AA97A"
                radius={[6, 6, 0, 0]}
                animationDuration={800}
                animationBegin={0}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="collab" 
                stroke="#DB4545"
                strokeWidth={3}
                dot={{ fill: '#DB4545', r: 5, strokeWidth: 0 }}
                activeDot={{ r: 7, strokeWidth: 2, stroke: '#DB4545', fill: '#121212' }}
                animationDuration={1000}
                animationBegin={200}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        
        <p className="text-xs text-[#f4f4e4]/50 mt-4 font-mono">
          Source: Industry surveys and tool adoption metrics (1988-2025)
        </p>
      </div>
    </div>
  );
}