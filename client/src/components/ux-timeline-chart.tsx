import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Dot } from 'recharts';

const data = [
  { year: 1973, professionals: 1, milestone: 'Xerox Alto GUI' },
  { year: 1984, professionals: 5, milestone: 'Apple Macintosh' },
  { year: 1988, professionals: 20, milestone: "Don Norman's Book" },
  { year: 1990, professionals: 50, milestone: 'Nielsen Heuristics' },
  { year: 1993, professionals: 100, milestone: 'UX Term Coined' },
  { year: 1995, professionals: 500, milestone: 'First UX Consultancy' },
  { year: 2000, professionals: 2000, milestone: 'UX Job Roles Emerge' },
  { year: 2007, professionals: 10000, milestone: 'iPhone/Mobile UX' },
  { year: 2010, professionals: 50000, milestone: 'Sketch Tool Launch' },
  { year: 2014, professionals: 100000, milestone: 'Google Material Design' },
  { year: 2016, professionals: 200000, milestone: 'Figma Collaboration' },
  { year: 2020, professionals: 500000, milestone: 'UX Industry Maturity' },
  { year: 2025, professionals: 800000, milestone: 'Current Year' }
];

const CustomDot = (props: any) => {
  const { cx, cy, payload } = props;
  
  if (payload.milestone && typeof cx === 'number' && typeof cy === 'number' && !isNaN(cx) && !isNaN(cy)) {
    return (
      <g>
        <circle 
          cx={cx} 
          cy={cy} 
          r={5} 
          fill="hsl(217, 100%, 53%)" 
          stroke="hsl(217, 100%, 53%)" 
          strokeWidth={2}
          className="transition-all duration-200"
        />
      </g>
    );
  }
  return null;
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-card dark:bg-card border border-primary/40 rounded-lg px-4 py-3 shadow-xl transition-all duration-200">
        <p className="font-semibold text-foreground mb-2">{data.year}</p>
        <p className="text-sm text-foreground/90">
          Professionals: 
          <span className="ml-2 font-mono font-semibold text-primary">
            {data.professionals.toLocaleString()}
          </span>
        </p>
        {data.milestone && (
          <p className="text-xs text-muted-foreground mt-2">
            {data.milestone}
          </p>
        )}
      </div>
    );
  }
  return null;
};

export default function UXTimelineChart() {
  return (
    <>
      <section id="formalization" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="bg-primary/[0.02] rounded-xl border border-primary/10 p-4 sm:p-6 md:p-8 transition-all duration-300 hover:border-primary/20">
              <div className="mb-4">
                <span className="text-muted-foreground uppercase tracking-wider text-xs font-mono">Fig 03</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold font-display text-foreground mt-1">
                  UX/UI Professional Roles Evolution Timeline
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-foreground/70 mt-2">
                  Exponential growth of UX professionals from GUI inception to industry maturity
                </p>
              </div>
              
              <div className="w-full h-64 sm:h-80 md:h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data} margin={{ top: 20, right: 30, left: 60, bottom: 60 }}>
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
                      label={{ 
                        value: 'Year', 
                        position: 'insideBottom', 
                        offset: -10,
                        style: { fill: 'hsl(0, 0%, 55%)', fontSize: 11 }
                      }}
                      domain={[1970, 2025]}
                    />
                    <YAxis 
                      stroke="transparent"
                      tick={{ fill: 'hsl(0, 0%, 55%)', fontSize: 10 }}
                      className="text-xs sm:text-sm"
                      axisLine={{ stroke: 'hsl(0, 0%, 88%)', opacity: 0.1 }}
                      tickLine={false}
                      label={{ 
                        value: 'Professional Roles (log scale)', 
                        angle: -90, 
                        position: 'insideLeft',
                        style: { fill: 'hsl(0, 0%, 55%)', fontSize: 11 }
                      }}
                      scale="log"
                      domain={[1, 1000000]}
                      ticks={[1, 10, 100, 1000, 10000, 100000, 1000000]}
                      tickFormatter={(value) => {
                        if (value >= 1000000) return '1M';
                        if (value >= 100000) return '100K';
                        if (value >= 10000) return '10K';
                        if (value >= 1000) return '1K';
                        if (value >= 100) return '100';
                        if (value >= 10) return '10';
                        return '1';
                      }}
                    />
                    <Tooltip 
                      content={<CustomTooltip />}
                      cursor={{ stroke: 'hsl(217, 100%, 53%)', strokeWidth: 1, opacity: 0.2 }}
                      animationDuration={200}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="professionals" 
                      stroke="hsl(217, 100%, 53%)"
                      strokeWidth={3}
                      dot={<CustomDot />}
                      activeDot={{ 
                        r: 7, 
                        fill: 'hsl(354, 81%, 49%)',
                        strokeWidth: 2,
                        stroke: 'hsl(354, 81%, 49%)'
                      }}
                      animationDuration={1500}
                      animationBegin={0}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4 font-mono">
                Source: Industry research on UX/UI professional growth patterns (1973-2025)
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-foreground/70">Key Milestones</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.filter(d => d.milestone).map((item, index) => (
                  <div 
                    key={item.year}
                    className="flex items-start space-x-3 p-3 bg-primary/[0.02] rounded-lg border border-primary/10 transition-all duration-200 hover:border-primary/20"
                    data-testid={`milestone-${item.year}`}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0 animate-pulse" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between">
                        <span className="font-mono text-sm font-semibold text-foreground">{item.year}</span>
                        <span className="text-xs text-muted-foreground">{item.professionals.toLocaleString()} roles</span>
                      </div>
                      <p className="text-sm text-foreground/80 mt-0.5">{item.milestone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-muted-foreground pt-4 font-mono">
              Note: Professional roles estimates based on industry growth and tool adoption data
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg space-y-6 text-foreground/90 leading-relaxed">
            <p>
              But the rapid growth won't be the last. Because today the Designers are back — in the hundreds of thousands — and they are backed by billions of dollars in design tools and resources to build user-centered experiences. However, their effort and tools alone are not enough to transform every digital experience. We need a UX Renaissance to democratize design and transform the way teams build products. Here is my treatise on how to get that done.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}