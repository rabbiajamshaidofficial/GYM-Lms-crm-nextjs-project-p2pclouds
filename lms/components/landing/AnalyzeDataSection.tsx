"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
// Assuming these SVGs (AreaLineChartSVG, BarChartSVG, DonutChartSVG) are now visually neutral 
// or represent LMS data (e.g., completion rates, assessment scores).
import { AreaLineChartSVG, BarChartSVG, DonutChartSVG } from "@/data/data";

export function AnalyzeDataSection() {
  // UPDATED: Analysis points for LMS/Training Context
  const analysisPoints = [
    "Visualize learner completion and engagement trends in real-time.",
    "Generate instant certification and training progress reports.",
    "AI-powered insights to predict skill gaps and retention issues.",
    "Smart anomaly detection for failed assessments or low activity.",
    "Collaborate with L&D managers on shared progress dashboards.",
  ];

  return (
    <section
      id="analytics"
      className="relative py-24 md:py-32 bg-linear-to-b from-[#0b0d13] via-[#111319] to-[#0b0d13] overflow-hidden"
    >
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-3xl mt-32"></div>
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center lg:text-left max-w-lg mx-auto lg:mx-0"
        >
          <span className="inline-block bg-emerald-500 text-black text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {/* UPDATED: Data Pill Text */}
            Learning Performance
          </span>

          <h2 className="text-4xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
            {/* UPDATED: Main Heading */}
            Analyze Training ROI <br /> in a Few Clicks
          </h2>

          <div className="space-y-3">
            {analysisPoints.map((point, i) => (
              <div key={i} className="flex items-start justify-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 mr-3 shrink-0 mt-0.5" />
                <p className="text-gray-300 text-base md:text-lg">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto"
        >
          {/* Card 1: Donut Chart - Now shows Course Completion */}
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 h-48 relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.1)]">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-24 h-24 mb-2">
                <DonutChartSVG />
              </div>
              {/* UPDATED: Metric value */}
              <p className="text-white font-bold text-lg">91% Completion</p> 
            </div>
          </div>

          {/* Card 2: Bar Chart - Now shows Monthly Enrollment */}
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 h-48 flex flex-col justify-between shadow-[0_0_30px_rgba(16,185,129,0.1)]">
            <div>
              {/* UPDATED: Metric name */}
              <p className="text-sm text-gray-400">Monthly Enrollments</p> 
              {/* UPDATED: Metric value */}
              <p className="text-2xl font-semibold text-white">1,450</p> 
            </div>
            <div className="h-28">
              <BarChartSVG />
            </div>
          </div>

          {/* Card 3 (Span 2): Area Chart - Now shows Course Revenue / Training Budget */}
          <div className="md:col-span-2 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 h-48 flex flex-col justify-between shadow-[0_0_30px_rgba(16,185,129,0.1)]">
            <div>
              {/* UPDATED: Metric name */}
              <p className="text-sm text-gray-400">Quarterly Training Revenue</p> 
              {/* UPDATED: Metric value */}
              <p className="text-2xl font-semibold text-white">$45,200</p> 
            </div>
            <div className="h-28">
              <AreaLineChartSVG />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}