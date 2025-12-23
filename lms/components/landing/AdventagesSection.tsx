"use client";

import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { newFeaturesData } from "@/lib/data";
import { NewFeatureItem } from "@/types/allTypes";
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

const AdvantagesSection: React.FC = () => {
  return (
    <section
      id="advantages"
      className="relative py-20 md:py-32 bg-linear-to-b from-[#0b0d13] via-[#111319] to-[#0b0d13] text-white overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/10 blur-3xl rounded-full"></div>

      <div className="relative container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-semibold text-sm uppercase tracking-[0.25em] text-emerald-400 mb-3">
            Our Key Differentiators
          </p>
          <h2 className="text-4xl md:text-4xl font-extrabold font-poppins text-white mb-5">
            {/* UPDATED: LMS Heading */}
            Empower Your Organization with P2P Cloud LMS
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light">
            {/* UPDATED: LMS Subheading */}
            Experience the edge of AI-powered analytics, rapid content creation, and enterprise-grade security — designed to supercharge skill development and training ROI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newFeaturesData.map((feature: NewFeatureItem, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="relative group bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 transition-all duration-500 hover:shadow-[0_0_35px_rgba(16,185,129,0.25)] hover:border-emerald-400/40">
                <CardHeader className="p-0 mb-5">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-500/10 mb-4 group-hover:bg-emerald-500/20 transition-all duration-300">
                    <DynamicIcon
                      name={feature.icon}
                      className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-all duration-300"
                    />
                  </div>
                  <CardTitle className="font-poppins text-xl font-bold text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="font-poppins text-gray-300 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-linear-to-br from-emerald-400/10 to-transparent blur-2xl transition-all duration-500"></div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;