import { cn } from "@/lib/utils";

interface AmericanFlagProps {
  className?: string;
}

export default function AmericanFlag({ className }: AmericanFlagProps) {
  return (
    <svg 
      className={cn("inline-block", className)} 
      viewBox="0 0 120 80" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Flag stripes */}
      <rect x="0" y="0" width="120" height="80" fill="hsl(0, 0%, 96%)"/>
      <rect x="0" y="6.15" width="120" height="6.15" className="flag-gradient"/>
      <rect x="0" y="18.46" width="120" height="6.15" className="flag-gradient"/>
      <rect x="0" y="30.77" width="120" height="6.15" className="flag-gradient"/>
      <rect x="0" y="43.08" width="120" height="6.15" className="flag-gradient"/>
      <rect x="0" y="55.38" width="120" height="6.15" className="flag-gradient"/>
      <rect x="0" y="67.69" width="120" height="6.15" className="flag-gradient"/>
      
      {/* Canton */}
      <rect x="0" y="0" width="48" height="43.08" fill="#2a2a2a"/>
      
      {/* Stars (simplified grid pattern) */}
      <g fill="hsl(0, 0%, 96%)">
        <circle cx="6" cy="5" r="1.5"/>
        <circle cx="14" cy="5" r="1.5"/>
        <circle cx="22" cy="5" r="1.5"/>
        <circle cx="30" cy="5" r="1.5"/>
        <circle cx="38" cy="5" r="1.5"/>
        <circle cx="10" cy="11" r="1.5"/>
        <circle cx="18" cy="11" r="1.5"/>
        <circle cx="26" cy="11" r="1.5"/>
        <circle cx="34" cy="11" r="1.5"/>
        <circle cx="42" cy="11" r="1.5"/>
        <circle cx="6" cy="17" r="1.5"/>
        <circle cx="14" cy="17" r="1.5"/>
        <circle cx="22" cy="17" r="1.5"/>
        <circle cx="30" cy="17" r="1.5"/>
        <circle cx="38" cy="17" r="1.5"/>
        <circle cx="10" cy="23" r="1.5"/>
        <circle cx="18" cy="23" r="1.5"/>
        <circle cx="26" cy="23" r="1.5"/>
        <circle cx="34" cy="23" r="1.5"/>
        <circle cx="42" cy="23" r="1.5"/>
        <circle cx="6" cy="29" r="1.5"/>
        <circle cx="14" cy="29" r="1.5"/>
        <circle cx="22" cy="29" r="1.5"/>
        <circle cx="30" cy="29" r="1.5"/>
        <circle cx="38" cy="29" r="1.5"/>
        <circle cx="10" cy="35" r="1.5"/>
        <circle cx="18" cy="35" r="1.5"/>
        <circle cx="26" cy="35" r="1.5"/>
        <circle cx="34" cy="35" r="1.5"/>
        <circle cx="42" cy="35" r="1.5"/>
      </g>
    </svg>
  );
}
