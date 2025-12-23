"use client";

import React from "react";
import * as LucideIcons from "lucide-react";
import { newFeaturesData } from "@/lib/data";
import { NewFeatureItem } from "@/types/allTypes";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type LucideIconName = keyof typeof LucideIcons;
const DynamicIcon: React.FC<{ name: string; className?: string }> = ({
  name,
  className,
}) => {
  const IconName = name as LucideIconName;
  if (!IconName || !(IconName in LucideIcons)) {
    console.error(`Icon "${name}" not found in lucide-react.`);
    return null;
  }
  const IconComponent = LucideIcons[IconName] as React.ComponentType<{
    className?: string;
  }>;
  return <IconComponent className={className} />;
};

const FeaturePromoSection: React.FC = () => {
  return (
    <section
      id="features"
      className="relative py-20 md:py-32 bg-linear-to-b from-[#0b0d13] via-[#10141c] to-[#0b0d13] overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-3xl rounded-full"></div>

      <div className="relative container mx-auto px-6 max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="font-semibold text-sm uppercase tracking-[0.25em] text-emerald-400 mb-3">
            Core LMS Tools
          </p>
          <h2 className="text-4xl md:text-4xl font-extrabold text-white mb-5">
            {/* UPDATED: LMS Main Heading */}
            Tools to Build, Engage, and Measure Knowledge
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {/* UPDATED: LMS Subheading */}
            Design custom learning journeys, automate assessments, track skill
            mastery, and drive powerful learner engagement with P2P Cloud LMS.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newFeaturesData.map((feature: NewFeatureItem, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group relative h-full bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 shadow-[0_0_25px_rgba(16,185,129,0.1)] hover:shadow-[0_0_35px_rgba(16,185,129,0.25)] transition-all duration-500">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center justify-center space-x-3 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 font-bold text-xl group-hover:bg-emerald-500/20 transition-all duration-500">
                      {feature.number}
                    </div>
                    {/* The icon and text here automatically reflect the LMS data from newFeaturesData */}
                    <DynamicIcon
                      name={feature.icon}
                      className="w-8 h-8 text-emerald-400 group-hover:text-emerald-300 transition-all duration-500"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-emerald-400/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500"></div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturePromoSection;