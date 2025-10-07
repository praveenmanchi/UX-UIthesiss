import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine, ReferenceArea } from 'recharts';

// Job market data with postings and search interest
const jobMarketData = [
  {
    year: 2014,
    postings: 15,
    searchInterest: 25,
    annotation: null
  },
  {
    year: 2015,
    postings: 22,
    searchInterest: 30,
    annotation: null
  },
  {
    year: 2016,
    postings: 35,
    searchInterest: 38,
    annotation: null
  },
  {
    year: 2017,
    postings: 48,
    searchInterest: 45,
    annotation: null
  },
  {
    year: 2018,
    postings: 65,
    searchInterest: 55,
    annotation: null
  },
  {
    year: 2019,
    postings: 85,
    searchInterest: 62,
    annotation: null
  },
  {
    year: 2020,
    postings: 70,
    searchInterest: 70,
    annotation: 'COVID-19 Impact'
  },
  {
    year: 2021,
    postings: 110,
    searchInterest: 85,
    annotation: 'Recovery Surge'
  },
  {
    year: 2022,
    postings: 140,
    searchInterest: 95,
    annotation: null
  },
  {
    year: 2023,
    postings: 125,
    searchInterest: 100,
    annotation: 'Peak Interest'
  },
  {
    year: 2024,
    postings: 130,
    searchInterest: 92,
    annotation: null
  }
];

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = jobMarketData.find(d => d.year === label);
    
    return (
      <div className="bg-[#121212] border border-[#8AA97A]/40 rounded-lg px-4 py-3 shadow-xl transition-all duration-200 min-w-[200px]">
        <p className="font-semibold text-[#f4f4e4] mb-2">{label}</p>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-[#8AA97A]" />
              <span className="text-sm text-[#f4f4e4]/90">Job Postings</span>
            </div>
            <span className="text-sm font-mono font-semibold text-[#8AA97A]">
              {data?.postings}k
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#9BB88B]" />
              <span className="text-sm text-[#f4f4e4]/90">Search Interest</span>
            </div>
            <span className="text-sm font-mono font-semibold text-[#9BB88B]">
              {data?.searchInterest}
            </span>
          </div>
        </div>
        
        {data?.annotation && (
          <p className="text-xs text-[#8AA97A] mt-3 pt-2 border-t border-[#8AA97A]/20 italic">
            ✦ {data.annotation}
          </p>
        )}
      </div>
    );
  }
  return null;
};

// Custom legend component
const CustomLegend = () => {
  return (
    <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mt-4">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-[#8AA97A] rounded-sm" />
        <span className="text-xs sm:text-sm text-[#f4f4e4]/90 font-medium">
          Job Postings (thousands)
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-[#9BB88B] rounded-full" />
        <span className="text-xs sm:text-sm text-[#f4f4e4]/90 font-medium">
          Search Interest Index (0-100)
        </span>
      </div>
    </div>
  );
};

export default function JobMarketChart() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#8AA97A]/[0.02] rounded-xl border border-[#8AA97A]/10 p-4 sm:p-6 md:p-8 transition-all duration-300 hover:border-[#8AA97A]/20">
          <div className="mb-6">
            <span className="text-[#f4f4e4]/50 uppercase tracking-wider text-xs font-mono">Fig 04</span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold font-display text-[#f4f4e4] mt-1">
              UX/UI Job Market Growth
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-[#f4f4e4]/70 mt-2">
              Annual job postings and search interest trends
            </p>
          </div>
          
          <div className="h-64 sm:h-80 md:h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart 
                data={jobMarketData} 
                margin={{ top: 20, right: 60, left: 20, bottom: 60 }}
              >
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  stroke="#8AA97A" 
                  opacity={0.05}
                  verticalPoints={[0]}
                />
                
                {/* X Axis */}
                <XAxis 
                  dataKey="year" 
                  stroke="transparent"
                  tick={{ fill: '#f4f4e4', opacity: 0.7, fontSize: 10 }}
                  className="text-xs sm:text-sm"
                  axisLine={{ stroke: '#f4f4e4', opacity: 0.1 }}
                  tickLine={false}
                  interval={0}
                  angle={-45}
                  textAnchor="end"
                />
                
                {/* Left Y Axis - Job Postings */}
                <YAxis 
                  yAxisId="postings"
                  orientation="left"
                  stroke="transparent"
                  tick={{ fill: '#f4f4e4', opacity: 0.7, fontSize: 10 }}
                  className="text-xs sm:text-sm"
                  axisLine={{ stroke: '#f4f4e4', opacity: 0.1 }}
                  tickLine={false}
                  domain={[0, 150]}
                  tickFormatter={(value) => `${value}k`}
                  label={{ 
                    value: 'Job Postings (thousands)', 
                    angle: -90, 
                    position: 'insideLeft',
                    style: { fill: '#8AA97A', opacity: 0.8, fontSize: 10 }
                  }}
                />
                
                {/* Right Y Axis - Search Interest */}
                <YAxis 
                  yAxisId="interest"
                  orientation="right"
                  stroke="transparent"
                  tick={{ fill: '#f4f4e4', opacity: 0.7, fontSize: 10 }}
                  className="text-xs sm:text-sm"
                  axisLine={{ stroke: '#f4f4e4', opacity: 0.1 }}
                  tickLine={false}
                  domain={[0, 100]}
                  label={{ 
                    value: 'Search Interest Index', 
                    angle: 90, 
                    position: 'insideRight',
                    style: { fill: '#9BB88B', opacity: 0.8, fontSize: 10 }
                  }}
                />
                
                <Tooltip 
                  content={<CustomTooltip />}
                  cursor={{ fill: '#8AA97A', opacity: 0.05 }}
                  animationDuration={200}
                />
                
                <Legend 
                  content={<CustomLegend />}
                />
                
                {/* COVID-19 Reference Area */}
                <ReferenceArea
                  yAxisId="postings"
                  x1={2019.5}
                  x2={2020.5}
                  fill="#FF6B6B"
                  fillOpacity={0.03}
                  strokeOpacity={0}
                />
                
                {/* Bar Chart - Job Postings */}
                <Bar
                  yAxisId="postings"
                  dataKey="postings"
                  fill="#8AA97A"
                  fillOpacity={0.8}
                  radius={[4, 4, 0, 0]}
                  animationDuration={1000}
                  animationBegin={0}
                />
                
                {/* Line Chart - Search Interest */}
                <Line
                  yAxisId="interest"
                  type="monotone"
                  dataKey="searchInterest"
                  stroke="#9BB88B"
                  strokeWidth={3}
                  dot={{ fill: '#9BB88B', r: 5 }}
                  activeDot={{ r: 7 }}
                  animationDuration={1200}
                  animationBegin={200}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          
          {/* Annotations for Key Events */}
          <div className="mt-8 pt-6 border-t border-[#8AA97A]/10">
            <h4 className="text-sm font-semibold text-[#f4f4e4]/90 mb-3">Key Market Events:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-[#8AA97A] text-lg">•</span>
                <div>
                  <p className="text-xs font-mono text-[#f4f4e4]/80">2020</p>
                  <p className="text-xs text-[#f4f4e4]/60">COVID-19 causes temporary dip in job postings while search interest rises as professionals upskill</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#8AA97A] text-lg">•</span>
                <div>
                  <p className="text-xs font-mono text-[#f4f4e4]/80">2021</p>
                  <p className="text-xs text-[#f4f4e4]/60">Post-pandemic recovery surge with record hiring and digital transformation initiatives</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#8AA97A] text-lg">•</span>
                <div>
                  <p className="text-xs font-mono text-[#f4f4e4]/80">2023</p>
                  <p className="text-xs text-[#f4f4e4]/60">Search interest peaks at 100 as field matures, slight market correction in postings</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Market Insights */}
          <div className="mt-6 pt-6 border-t border-[#8AA97A]/10">
            <h4 className="text-sm font-semibold text-[#f4f4e4]/90 mb-3">Market Insights:</h4>
            <ul className="space-y-2 text-xs text-[#f4f4e4]/70">
              <li className="flex items-start">
                <span className="text-[#8AA97A] mr-2">•</span>
                Job postings grew 767% from 2014 to 2024, reflecting the industry's explosive expansion
              </li>
              <li className="flex items-start">
                <span className="text-[#8AA97A] mr-2">•</span>
                Search interest increased 268%, showing growing career interest in UX/UI design
              </li>
              <li className="flex items-start">
                <span className="text-[#8AA97A] mr-2">•</span>
                The 2020 pandemic briefly disrupted hiring but accelerated digital transformation demand
              </li>
              <li className="flex items-start">
                <span className="text-[#8AA97A] mr-2">•</span>
                2022 marked peak hiring with 140k postings, followed by market normalization
              </li>
            </ul>
          </div>
          
          <p className="text-xs text-[#f4f4e4]/50 mt-6 font-mono">
            Source: Industry job boards aggregated data & Google Trends search interest data (2014-2024)
          </p>
        </div>
      </div>
    </section>
  );
}