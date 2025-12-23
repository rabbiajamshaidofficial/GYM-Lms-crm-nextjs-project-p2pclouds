"use client";

import React from "react";
import {
  CheckCircle,
  Info,
  Zap,
  Shield,
  TrendingUp,
  Handshake,
  DollarSign,
  X,
  Mail, // New Icon for Sales/Leads
  BarChart3, // New Icon for Analytics
  Users, // New Icon for Customer
} from "lucide-react";
import { motion } from "framer-motion";
// Assuming ComparisonColors and siteColors are defined or can be inferred
// import { ComparisonColors } from "@/data/data"; 
import { ComparisonFeature } from "@/types/allTypes";
import { comparisonData, siteColors } from "@/lib/data";

// Since ComparisonColors is not defined in the provided code, we'll define a placeholder based on context
const ComparisonColors = {
    bgDark: "#0b0d13", // Assuming a dark background color
};

const FeatureItem = ({ feature }: { feature: ComparisonFeature }) => {
  const renderValue = (value: string | boolean) => {
    if (typeof value === "boolean") {
      // The old data mapping was reversed in the component: gymValue was P2PCloudsGYM and lmsValue was Regular Gym.
      // Now, gymValue (P2PClouds CRM) is the better/Yes value, and lmsValue (Legacy CRM) is the lesser/No value.
      // Since the data structure already reflects CRM features, we'll keep the column order (lmsValue then gymValue) consistent with the grid.
      
      // Feature comparison logic: True = Check, False = X
      return value ? (
        <CheckCircle className="text-emerald-400 h-5 w-5" />
      ) : (
        <X className="text-red-500 h-5 w-5" />
      );
    }
    return <span className="text-gray-300 text-sm">{value}</span>;
  };

  return (
    <div className="grid grid-cols-[1.5fr_1fr_1fr] py-4 border-b border-white/10 hover:bg-white/5 transition-colors">
      <div className="text-sm text-gray-300 font-light">{feature.name}</div>
      {/* Column 2: LMS Value (Now Legacy CRM/Basic Tool) */}
      <div className="flex justify-center">{renderValue(feature.lmsValue)}</div>
      {/* Column 3: GYM Value (Now P2PClouds CRM) */}
      <div className="flex justify-center">{renderValue(feature.gymValue)}</div>
    </div>
  );
};

const MessageModal = ({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) => (
  <div
    className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-sm"
      onClick={(e) => e.stopPropagation()}
    >
      <Info className="text-emerald-500 mx-auto mb-3" size={40} />
      <p className="text-gray-800 font-semibold mb-4">{message}</p>
      <button
        onClick={onClose}
        className="bg-emerald-500 text-white px-5 py-2 rounded-lg hover:bg-emerald-400 font-medium"
      >
        Close
      </button>
    </motion.div>
  </div>
);

// UPDATED CRM Content Map
const leftContentMap = {
  // Matched to categories in the updated comparisonData
  "Sales & Lead Management": {
    icon: Mail,
    title: "Accelerate Sales Pipeline Velocity",
    description:
      "Automate lead scoring, routing, and task management to ensure sales teams focus only on qualified opportunities and close deals faster.",
  },
  "Marketing & Automation": {
    icon: Zap,
    title: "Intelligence & Nurturing Automation",
    description:
      "Create complex, trigger-based campaigns and use behavioral segmentation to nurture leads and re-engage dormant customers automatically.",
  },
  "Billing & Subscriptions": {
    icon: DollarSign,
    title: "Modern, Automated Revenue Management",
    description:
      "Handle recurring billing, subscription upgrades/downgrades, and automated dunning management with zero manual oversight.",
  },
  // If more categories existed in the old map, they would be repurposed:
  /*
  "Analytics & AI": {
    icon: BarChart3,
    title: "Predictive Sales Forecasting",
    description:
      "AI-driven dashboards track pipeline health, retention rates, and customer lifetime value (CLV) to predict future revenue and identify risks.",
  },
  */
};

export default function FeatureComparisonSection() {
  const [message, setMessage] = React.useState<string | null>(null);

  const grouped = comparisonData.reduce((acc, f) => {
    (acc[f.category] ||= []).push(f);
    return acc;
  }, {} as Record<string, ComparisonFeature[]>);

  const handleCTA = () =>
    setMessage(
      "Thank you! Our sales team will reach out shortly to schedule your personalized demo of P2PClouds CRM."
    );

  return (
    <section
      id="comparison"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: ComparisonColors.bgDark }}
    >
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[900px] h-[900px] bg-emerald-500/10 blur-3xl rounded-full mt-32"></div>
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white font-poppins mb-4">
            <span className="text-emerald-400">P2PClouds CRM</span> vs Legacy
            Tools
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto font-light">
            See how modern automation, pipeline intelligence, and a 360° customer view outperform basic spreadsheets and outdated systems.
          </p>
        </motion.div>

        {Object.keys(grouped).map((category, idx) => {
          const content =
            leftContentMap[category as keyof typeof leftContentMap];
          // Check if the category exists in the new map
          if (!content) {
              console.warn(`Category "${category}" not found in leftContentMap. Skipping.`);
              return null;
          }

          const Icon = content.icon;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-10 py-12 border-t border-white/10"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon className="text-emerald-400" size={24} />
                  <span className="uppercase text-sm tracking-[0.25em] text-emerald-400 font-semibold">
                    {category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {content.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {content.description}
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 backdrop-blur-md bg-white/5 shadow-inner">
                <div
                  className="grid grid-cols-[1.5fr_1fr_1fr] py-3 px-6 text-sm font-semibold uppercase tracking-wider"
                  style={{ backgroundColor: "rgba(16,185,129,0.15)" }}
                >
                  <div className="text-white">Feature</div>
                  <div className="text-center text-emerald-400">
                    P2PClouds CRM
                  </div>
                  <div className="text-center text-gray-400">Legacy CRM/Basic Tool</div>
                </div>

                <div className="px-6 pb-6">
                  {grouped[category].map((feature, i) => (
                    <FeatureItem key={i} feature={feature} />
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <button
            onClick={handleCTA}
            className="bg-emerald-500 text-gray-900 px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-emerald-400 hover:shadow-lg transition-all"
          >
            Request a Free Demo
          </button>
        </motion.div>
      </div>

      {message && (
        <MessageModal message={message} onClose={() => setMessage(null)} />
      )}
    </section>
  );
}