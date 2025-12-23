"use client";

import React from "react";
// FIX 1: Import required modules and data
import Link from "next/link";
import { motion } from "framer-motion";
import { benefitsData } from "@/lib/data"; // Assuming the updated data.ts is now in "@/lib/data"
import * as LucideIcons from "lucide-react";
import { BenefitItem } from "@/types/allTypes"; // Assuming BenefitItem type is correctly imported
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Assuming these UI components exist

type LucideIconType = keyof typeof LucideIcons;
const DynamicIcon: React.FC<{ name: string; className?: string }> = ({
  name,
  className,
}) => {
  const Icon = LucideIcons[name as LucideIconType] as React.ComponentType<{
    className?: string;
  }>;
  if (!Icon) return null;
  return <Icon className={className} />;
};

const BenefitsSection: React.FC = () => {
  return (
    <section
      id="benefits"
      className="relative py-20 md:py-32 bg-linear-to-b from-[#0b0d13] via-[#10141c] to-[#0b0d13] overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/10 blur-3xl rounded-full"></div>

      <div className="relative container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-20"
        >
          <p className="text-emerald-400 font-semibold uppercase tracking-[0.25em] mb-3 text-sm">
            Platform Advantages
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {/* LMS Heading */}
            Empower Your Organization with Next-Gen Learning
          </h2>
          <p className="text-lg text-gray-400">
            {/* LMS Subheading */}
            Drive skill development, measure knowledge transfer, and achieve
            measurable results with an intuitive, unified learning platform.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-3">
          {benefitsData.map((benefit: BenefitItem, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="relative group border border-white/10 bg-white/5 backdrop-blur-md rounded-3xl shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all duration-500 p-8">
                <CardHeader className="p-0 mb-6">
                  <div className="relative w-14 h-14 mx-auto mb-6 rounded-2xl bg-emerald-500/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-emerald-500/20">
                    <DynamicIcon
                      name={benefit.icon}
                      className="w-7 h-7 text-emerald-400 transition-all duration-500 group-hover:text-emerald-300"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-emerald-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    {benefit.description}
                  </p>
                  <Link
                    // FIX 2: Ensure the Link uses benefit.ctaText if applicable, otherwise keep the default. 
                    // I will use a generic link since ctaText is not used in the existing structure.
                    href="/#learn-more" 
                    className="text-emerald-400 font-semibold text-sm inline-flex items-center group"
                  >
                    Learn More
                    <span className="ml-2 text-lg transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;