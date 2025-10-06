import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card } from './ui/card';
import { motion } from 'framer-motion';

interface DataPoint {
  name: string;
  [key: string]: number | string;
}

interface AnimatedBarChartProps {
  data: DataPoint[];
  title: string;
  description?: string;
  bars: Array<{
    dataKey: string;
    name: string;
    color: string;
  }>;
}

export default function AnimatedBarChart({ data, title, description, bars }: AnimatedBarChartProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="p-6 glass-card">
        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">{title}</h4>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(138, 169, 122, 0.1)" />
            <XAxis 
              dataKey="name" 
              stroke="rgba(244, 244, 228, 0.5)"
              style={{ fontSize: '12px', fontFamily: 'JetBrains Mono' }}
            />
            <YAxis 
              stroke="rgba(244, 244, 228, 0.5)"
              style={{ fontSize: '12px', fontFamily: 'JetBrains Mono' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(18, 18, 18, 0.9)',
                border: '1px solid rgba(138, 169, 122, 0.3)',
                borderRadius: '8px',
                fontFamily: 'JetBrains Mono'
              }}
              labelStyle={{ color: 'rgba(244, 244, 228, 0.9)' }}
            />
            <Legend 
              wrapperStyle={{ 
                fontFamily: 'JetBrains Mono',
                fontSize: '12px'
              }}
            />
            {bars.map((bar) => (
              <Bar
                key={bar.dataKey}
                dataKey={bar.dataKey}
                name={bar.name}
                fill={bar.color}
                radius={[4, 4, 0, 0]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </motion.div>
  );
}
