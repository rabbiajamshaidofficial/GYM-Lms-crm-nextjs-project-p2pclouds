"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { dataAnalysisSectionData } from "@/lib/data"; // Assuming this now contains CRM data

const LineGraphSVG = ({
  colorClass,
  progress = 100,
}: {
  colorClass: string;
  progress?: number;
}) => (
  <svg
    className={cn("w-20 h-10 shrink-0", colorClass)}
    viewBox="0 0 100 50"
    preserveAspectRatio="none"
    fill="none"
    stroke="currentColor"
    strokeWidth="5"
  >
    <path
      d="M0 40 L25 30 L50 35 L75 20 L100 10"
      vectorEffect="non-scaling-stroke"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function DataAnalysisSection() {
  const sectionBg = "#0b0d13";
  const cardBg = "rgba(255,255,255,0.05)";

  return (
    <section
      id="data-insights"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: sectionBg }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/10 blur-3xl rounded-full"></div>

      <div className="relative container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col space-y-6 w-full max-w-md sm:max-w-lg md:max-w-none mx-auto lg:mx-0"
        >
          {/* Renders the Stacked Cards (assuming CRM data in dataAnalysisSectionData.cards) */}
          {dataAnalysisSectionData.cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className={cn(
                "flex items-center justify-between w-full p-5 rounded-2xl backdrop-blur-md border border-white/10 shadow-[0_0_25px_rgba(16,185,129,0.15)] transition-transform duration-300 hover:scale-[1.02]",
                { "lg:translate-x-4 xl:translate-x-8": card.id === 2 }
              )}
              style={{ backgroundColor: cardBg }}
            >
              <div className="flex items-center min-w-0 shrink">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full mr-3 flex items-center justify-center text-white text-sm font-bold",
                    card.avatarColor
                  )}
                >
                  {card.name.charAt(0)}
                </div>
                <div className="flex flex-col text-left truncate">
                  <span className="text-white text-base font-medium truncate">
                    {card.name}
                  </span>
                  <span className="text-gray-400 text-xs font-normal truncate">
                    {card.metric}
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2 shrink-0 min-w-fit">
                <LineGraphSVG colorClass={card.graphColorClass} />
                <span
                  className={cn(
                    "text-sm font-semibold whitespace-nowrap",
                    card.graphColorClass.replace("text-", "text-")
                  )}
                >
                  {card.percentage}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Text Content Updated for CRM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center lg:text-left max-w-lg mx-auto lg:mx-0"
        >
          <p className="text-emerald-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Predictive Analytics
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            The Insight Engine Driving Your Sales Growth
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Stop guessing and start leading. P2PClouds CRM uses **AI-driven forecasting** to predict pipeline risks, identify high-value customer segments, and reveal the clearest path to exceeding your revenue targets.
          </p>
        </motion.div>
      </div>
    </section>
  );
}