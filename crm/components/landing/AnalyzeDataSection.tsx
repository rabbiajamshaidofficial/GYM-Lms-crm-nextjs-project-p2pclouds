"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
// Assuming these SVG components still exist, but now represent CRM data
import { AreaLineChartSVG, BarChartSVG, DonutChartSVG } from "@/data/data";

export function AnalyzeDataSection() {
  // UPDATED: CRM-focused analysis points
  const analysisPoints = [
    "Visualize pipeline health & sales velocity in real-time.",
    "Generate instant reports on conversion rates and deal aging.",
    "AI-powered insights to predict customer churn and revenue gaps.",
    "Smart anomaly detection for sudden drops in leads or sales.",
    "Collaborate with sales teams on shared, customizable dashboards.",
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
          {/* UPDATED: Heading for CRM context */}
          <span className="inline-block bg-emerald-500 text-black text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Predictive CRM Analytics
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Uncover Revenue Opportunities in Real-Time
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

        {/* Mock Dashboard Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto"
        >
          {/* Donut Chart Card */}
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 h-48 relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.1)]">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-24 h-24 mb-2">
                <DonutChartSVG />
              </div>
              {/* UPDATED: Metric to reflect sales KPI */}
              <p className="text-white font-bold text-lg">78% Win Rate Target</p>
            </div>
          </div>

          {/* Bar Chart Card */}
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 h-48 flex flex-col justify-between shadow-[0_0_30px_rgba(16,185,129,0.1)]">
            <div>
              {/* UPDATED: Metric to reflect sales KPI */}
              <p className="text-sm text-gray-400">Leads Generated (MoM)</p>
              <p className="text-2xl font-semibold text-white">1,520</p>
            </div>
            <div className="h-28">
              <BarChartSVG />
            </div>
          </div>

          {/* Area/Line Chart Card (spans 2 columns) */}
          <div className="md:col-span-2 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 h-48 flex flex-col justify-between shadow-[0_0_30px_rgba(16,185,129,0.1)]">
            <div>
              {/* UPDATED: Metric to reflect sales KPI */}
              <p className="text-sm text-gray-400">Total Monthly Recurring Revenue (MRR)</p>
              <p className="text-2xl font-semibold text-white">$85,200</p>
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