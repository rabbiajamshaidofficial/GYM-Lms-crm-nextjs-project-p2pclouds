"use client";

import React from "react";
import {
  CheckCircle,
  Info,
  Zap,
  Shield,
  TrendingUp,
  DollarSign,
  X,
  BookOpen,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { ComparisonFeature } from "@/types/allTypes";
import { comparisonData, siteColors } from "@/lib/data";

// (FeatureItem, MessageModal components remain unchanged)
const FeatureItem = ({ feature }: { feature: ComparisonFeature }) => {
  const renderValue = (value: string | boolean) => {
    if (typeof value === "boolean") {
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
      <div className="flex justify-center">{renderValue(feature.gymValue)}</div>
      <div className="flex justify-center">{renderValue(feature.lmsValue)}</div>
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

const leftContentMap = {
  "Content & Delivery": {
    icon: BookOpen,
    title: "Masterful Course Authoring",
    description:
      "Design, launch, and update custom training in minutes with drag-and-drop tools and full SCORM compatibility. Deliver content perfectly on any device.",
  },
  "Learner Management & Progress": {
    icon: Users,
    title: "Track Mastery, Not Just Activity",
    description:
      "Automated enrollment, skill gap analysis, and gamified progress tracking ensure high engagement and verifiable competency growth across your teams.",
  },
  "Analytics & Reporting": {
    icon: TrendingUp,
    title: "Data-Driven Training ROI",
    description:
      "AI dashboards track completion rates, engagement, and assessment scores to predict performance and prove the return on your training investment.",
  },
  "Branding & Security": {
    icon: Shield,
    title: "Total Control and Trust",
    description:
      "Custom white-label branding, role-based access, and enterprise-grade data encryption ensure your learning portal is secure and uniquely yours.",
  },
  "Pricing Model": {
    icon: DollarSign,
    title: "Sustainable and Transparent Cost",
    description:
      "Predictable, flat, per-admin pricing keeps costs low. No per-learner fees or unexpected scaling charges.",
  },
};
const filteredCategories = Object.keys(leftContentMap);

export default function FeatureComparisonSection() {
  const [message, setMessage] = React.useState<string | null>(null);

  const grouped = comparisonData.reduce((acc, f) => {
    if (filteredCategories.includes(f.category)) {
      (acc[f.category] ||= []).push(f);
    }
    return acc;
  }, {} as Record<string, ComparisonFeature[]>);

  const handleCTA = () =>
    setMessage(
      "Thank you! Our team will reach out shortly to help you integrate P2P Cloud LMS for your organization's training program."
    );

  return (
    <section
      id="comparison"
      // FIX: Replaced inline style with gradient classes
      className="relative py-24 md:py-32 overflow-hidden bg-linear-to-b from-[#0b0d13] via-[#10141c] to-[#0b0d13]" 
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
            <span className="text-emerald-400">P2P Cloud LMS</span> vs Generic
            Learning Platforms
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto font-light">
            Discover how cloud-native design, advanced analytics, and custom
            authoring transform traditional training into a dynamic learning
            powerhouse.
          </p>
        </motion.div>

        {Object.keys(grouped).map((category, idx) => {
          const content =
            leftContentMap[category as keyof typeof leftContentMap];
          if (!content) return null;

          const Icon = content.icon;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
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
                    P2P Cloud LMS
                  </div>
                  <div className="text-center text-gray-400">Generic LMS</div>
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
          className="text-center mt-20"
        >
          <button
            onClick={handleCTA}
            className="bg-emerald-500 text-gray-900 px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-emerald-400 hover:shadow-lg transition-all"
          >
            Elevate Your Training Platform
          </button>
        </motion.div>
      </div>

      {message && (
        <MessageModal message={message} onClose={() => setMessage(null)} />
      )}
    </section>
  );
}