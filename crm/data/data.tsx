import { siteColors } from "@/lib/data";

export const ComparisonColors = {
  themePrimary: siteColors["gym-primary"] || "#10B981",
  bgDark: "#0b0d13",
  cardBg: "rgba(255,255,255,0.05)",
  headerText: "#FFFFFF",
  border: "rgba(255,255,255,0.1)",
  check: "#10B981",
  cross: "#EF4444",
};

// charts
export const DonutChartSVG = () => (
  <svg viewBox="0 0 36 36" className="w-full h-full">
    <circle
      cx="18"
      cy="18"
      r="15.9155"
      fill="none"
      stroke="#1f2937"
      strokeWidth="6"
    ></circle>
    <circle
      cx="18"
      cy="18"
      r="15.9155"
      fill="none"
      stroke="#10B981"
      strokeWidth="6"
      strokeDasharray="83 100"
    ></circle>
    <circle
      cx="18"
      cy="18"
      r="15.9155"
      fill="none"
      stroke="#3B82F6"
      strokeWidth="6"
      strokeDasharray="10 100"
      strokeDashoffset="-83"
    ></circle>
    <circle
      cx="18"
      cy="18"
      r="15.9155"
      fill="none"
      stroke="#FBBF24"
      strokeWidth="6"
      strokeDasharray="7 100"
      strokeDashoffset="-93"
    ></circle>
  </svg>
);

export const BarChartSVG = () => (
  <svg viewBox="0 0 100 50" className="w-full h-full">
    <rect x="5" y="10" width="10" height="30" fill="#1f2937" rx="2"></rect>
    <rect x="20" y="5" width="10" height="35" fill="#1f2937" rx="2"></rect>
    <rect x="35" y="20" width="10" height="20" fill="#1f2937" rx="2"></rect>
    <rect x="50" y="8" width="10" height="32" fill="#1f2937" rx="2"></rect>
    <rect x="65" y="15" width="10" height="25" fill="#1f2937" rx="2"></rect>
    <rect x="80" y="10" width="10" height="30" fill="#1f2937" rx="2"></rect>
    <rect x="5" y="25" width="10" height="15" fill="#FBBF24" rx="2"></rect>
    <rect x="20" y="20" width="10" height="20" fill="#FBBF24" rx="2"></rect>
    <rect x="35" y="30" width="10" height="10" fill="#FBBF24" rx="2"></rect>
    <rect x="50" y="18" width="10" height="22" fill="#FBBF24" rx="2"></rect>
    <rect x="65" y="22" width="10" height="18" fill="#FBBF24" rx="2"></rect>
    <rect x="80" y="20" width="10" height="20" fill="#FBBF24" rx="2"></rect>
  </svg>
);

export const AreaLineChartSVG = () => (
  <svg viewBox="0 0 100 60" className="w-full h-full">
    <path
      d="M0 50 L10 40 L20 45 L30 35 L40 40 L50 30 L60 35 L70 25 L80 30 L90 20 L100 25 V60 H0 Z"
      fill="#10B98122"
    />
    <path
      d="M0 50 L10 40 L20 45 L30 35 L40 40 L50 30 L60 35 L70 25 L80 30 L90 20 L100 25"
      stroke="#10B981"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
