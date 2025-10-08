import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card } from './ui/card';
import { motion } from 'framer-motion';

interface DataPoint {
  year: string;
  [key: string]: number | string;
}

interface AnimatedLineChartProps {
  data: DataPoint[];
  title: string;
  description?: string;
  lines: Array<{
    dataKey: string;
    name: string;
    color: string;
  }>;
}

export default function AnimatedLineChart({ data, title, description, lines }: AnimatedLineChartProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="p-4 sm:p-6 md:p-8 glass-card">
        <div className="mb-6">
          <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{title}</h4>
          {description && (
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">{description}</p>
          )}
        </div>
        
        <div className="h-64 sm:h-80 md:h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 100%, 53%)" opacity={0.05} />
            <XAxis 
              dataKey="year" 
              stroke="transparent"
              tick={{ fill: 'hsl(0, 0%, 55%)', fontSize: 10 }}
              className="text-xs sm:text-sm"
              axisLine={{ stroke: 'hsl(0, 0%, 88%)', opacity: 0.1 }}
              tickLine={false}
            />
            <YAxis 
              stroke="transparent"
              tick={{ fill: 'hsl(0, 0%, 55%)', fontSize: 10 }}
              className="text-xs sm:text-sm"
              axisLine={{ stroke: 'hsl(0, 0%, 88%)', opacity: 0.1 }}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(217, 100%, 53%, 0.4)',
                borderRadius: '8px',
                color: 'hsl(var(--foreground))'
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <Legend 
              wrapperStyle={{ 
                fontFamily: 'JetBrains Mono',
                fontSize: '11px'
              }}
              className="text-xs sm:text-sm"
            />
            {lines.map((line) => (
              <Line
                key={line.dataKey}
                type="monotone"
                dataKey={line.dataKey}
                name={line.name}
                stroke={line.color}
                strokeWidth={2}
                dot={{ fill: line.color, r: 4 }}
                activeDot={{ r: 6 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
        </div>
      </Card>
    </motion.div>
  );
}
