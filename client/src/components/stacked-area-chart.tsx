import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Card } from "@/components/ui/card";

interface DataPoint {
  year: string;
  [key: string]: string | number;
}

interface AreaConfig {
  dataKey: string;
  name: string;
  color: string;
}

interface StackedAreaChartProps {
  data: DataPoint[];
  areas: AreaConfig[];
  title: string;
  description?: string;
  yAxisLabel?: string;
}

export default function StackedAreaChart({
  data,
  areas,
  title,
  description,
  yAxisLabel = "Value"
}: StackedAreaChartProps) {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black border border-accent/20 p-4 rounded-lg shadow-xl" data-testid="chart-tooltip">
          <p className="font-mono text-white font-bold mb-2" data-testid="tooltip-label">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center gap-2 text-sm" data-testid={`tooltip-entry-${index}`}>
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-foreground/80">{entry.name}:</span>
              <span className="font-semibold text-white" data-testid={`tooltip-value-${index}`}>
                {typeof entry.value === 'number' ? entry.value.toFixed(1) : entry.value}M
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      data-testid="stacked-area-chart"
    >
      <Card className="chart-dark-container">
        <div className="mb-6">
          <h4 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-timeline-cream mb-2">
            {title}
          </h4>
          {description && (
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        <div className="w-full h-64 sm:h-80 md:h-96" data-testid="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                {areas.map((area, index) => (
                  <linearGradient
                    key={area.dataKey}
                    id={`gradient-${area.dataKey}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor={area.color}
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor={area.color}
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                ))}
              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(88 16% 53% / 0.1)"
                vertical={false}
              />

              <XAxis
                dataKey="year"
                stroke="hsl(var(--timeline-sage))"
                tick={{ fill: "hsl(var(--timeline-cream))", fontSize: 10 }}
                className="text-xs sm:text-sm"
                tickLine={{ stroke: "hsl(var(--timeline-sage))" }}
              />

              <YAxis
                stroke="hsl(var(--timeline-sage))"
                tick={{ fill: "hsl(var(--timeline-cream))", fontSize: 10 }}
                className="text-xs sm:text-sm"
                tickLine={{ stroke: "hsl(var(--timeline-sage))" }}
                label={{
                  value: yAxisLabel,
                  angle: -90,
                  position: "insideLeft",
                  fill: "hsl(var(--timeline-sage))",
                  fontSize: 11,
                }}
              />

              <Tooltip content={<CustomTooltip />} />

              <Legend
                wrapperStyle={{
                  paddingTop: "20px",
                }}
                iconType="circle"
                formatter={(value) => (
                  <span className="text-xs sm:text-sm text-foreground/80">{value}</span>
                )}
              />

              {areas.map((area) => (
                <Area
                  key={area.dataKey}
                  type="monotone"
                  dataKey={area.dataKey}
                  stackId="1"
                  stroke={area.color}
                  strokeWidth={2}
                  fill={`url(#gradient-${area.dataKey})`}
                  animationDuration={1500}
                  animationBegin={0}
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Legend Labels Below Chart */}
        <div className="mt-6 pt-6 border-t border-timeline-sage/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
            {areas.map((area, index) => (
              <div key={area.dataKey} className="flex items-center gap-3" data-testid={`legend-item-${index}`}>
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: area.color }}
                />
                <span className="text-xs sm:text-sm text-foreground/70" data-testid={`legend-label-${index}`}>{area.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
