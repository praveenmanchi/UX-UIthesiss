import { motion } from "framer-motion";
import { TrendingUp, AlertCircle, Info, DollarSign, Users, Calendar, Percent, BarChart3 } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type DataCalloutType = "trend" | "alert" | "info" | "money" | "users" | "date" | "percentage" | "chart";
export type DataCalloutDisplay = "inline" | "standalone";

interface DataCalloutProps {
  value: string;
  label?: string;
  type?: DataCalloutType;
  display?: DataCalloutDisplay;
  className?: string;
}

const iconMap: Record<DataCalloutType, LucideIcon> = {
  trend: TrendingUp,
  alert: AlertCircle,
  info: Info,
  money: DollarSign,
  users: Users,
  date: Calendar,
  percentage: Percent,
  chart: BarChart3,
};

export default function DataCallout({
  value,
  label,
  type = "info",
  display = "standalone",
  className = "",
}: DataCalloutProps) {
  const Icon = iconMap[type];

  if (display === "inline") {
    return (
      <motion.span
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className={`inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 text-accent rounded-md font-semibold ${className}`}
      >
        <Icon className="w-4 h-4" />
        <span>{value}</span>
      </motion.span>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`my-8 p-6 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg ${className}`}
    >
      <div className="flex items-center gap-4">
        <div className="p-3 bg-accent/20 rounded-lg">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <div className="flex-1">
          <div className="text-3xl sm:text-4xl font-bold text-accent">
            {value}
          </div>
          {label && (
            <div className="mt-1 text-sm sm:text-base text-foreground/70">
              {label}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}