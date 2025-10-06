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
      <div className="bg-[#121212] border border-[#8AA97A]/40 rounded-lg px-4 py-3 shadow-xl transition-all duration-200">
        <p className="font-semibold text-[#f4f4e4] mb-2">{label}</p>
        <p className="text-sm text-[#f4f4e4]/90">
          Max Experience: 
          <span className="ml-2 font-mono font-semibold text-[#8AA97A]">
            {payload[0].value} years
          </span>
        </p>
        {entry?.highlight && (
          <p className="text-xs text-[#DB4545] mt-2 font-semibold">
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
      <div className="bg-[#8AA97A]/[0.02] rounded-xl border border-[#8AA97A]/10 p-6 transition-all duration-300 hover:border-[#8AA97A]/20">
        <div className="mb-4">
          <span className="text-[#f4f4e4]/50 uppercase tracking-wider text-xs font-mono">Fig 02</span>
          <h3 className="text-2xl font-semibold font-display text-[#f4f4e4] mt-1">Maximum UX/UI Experience by Professional Category</h3>
          <p className="text-sm text-[#f4f4e4]/70 mt-2">
            Years of potential experience across different generations of UX professionals in 2025
          </p>
        </div>
        
        <div className="h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 30, right: 30, left: 80, bottom: 80 }}>
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="#8AA97A" 
                opacity={0.05}
                verticalPoints={[0]}
              />
              <XAxis 
                dataKey="role" 
                stroke="transparent"
                tick={{ fill: '#f4f4e4', opacity: 0.7, fontSize: 11 }}
                angle={-45}
                textAnchor="end"
                height={100}
                axisLine={{ stroke: '#f4f4e4', opacity: 0.1 }}
                tickLine={false}
              />
              <YAxis 
                stroke="transparent"
                tick={{ fill: '#f4f4e4', opacity: 0.7, fontSize: 11 }}
                axisLine={{ stroke: '#f4f4e4', opacity: 0.1 }}
                tickLine={false}
                label={{ 
                  value: 'Maximum Years of Experience', 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { fill: '#f4f4e4', opacity: 0.7, fontSize: 12 }
                }}
                domain={[0, 35]}
              />
              <Tooltip 
                content={<CustomTooltip />}
                cursor={{ fill: '#8AA97A', opacity: 0.05 }}
                animationDuration={200}
              />
              <ReferenceLine 
                y={24} 
                stroke="#DB4545" 
                strokeDasharray="5 5"
                strokeWidth={2}
                opacity={0.7}
              >
                <Label 
                  value="24-year experience threshold" 
                  position="insideTopRight" 
                  fill="#DB4545"
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
                    fill={entry.highlight ? (index === 0 ? '#8AA97A' : '#DB4545') : '#6B8261'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <p className="text-xs text-[#f4f4e4]/50 mt-4 font-mono">
          Source: Career timeline analysis of UX/UI professional roles (1993-2025)
        </p>
      </div>
    </div>
  );
}