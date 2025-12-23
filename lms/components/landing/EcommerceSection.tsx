"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// UPDATED ICONS: BookOpen (for courses), DollarSign (for sales), UserCheck (for license), BarChart (for reporting)
import { BookOpen, DollarSign, UserCheck, BarChart } from "lucide-react"; 

const EcommerceSection: React.FC = () => {
  return (
    <section
      id="ecommerce"
      className="relative overflow-hidden py-24 md:py-32 bg-[#0b0d13]"
    >
      <div className="absolute inset-0 flex justify-center -z-10">
        <div className="w-[700px] h-[700px] bg-emerald-500/10 blur-[120px] rounded-full mt-20" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          {/* Image source remains the same, but context shifts to a sales/revenue dashboard */}
          <Image
            src="/images/dashboard-store.png"
            alt="LMS Course Sales Dashboard"
            width={560}
            height={400}
            className="rounded-2xl shadow-2xl border border-white/10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-emerald-400 uppercase tracking-[0.25em] text-sm font-semibold">
            {/* UPDATED: Subheading */}
            Course Monetization
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            {/* UPDATED: Main Heading */}
            Sell Your Digital Courses & Training Licenses
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            {/* UPDATED: Description */}
            Turn your content library into a revenue stream. Sell courses, bundles, and user licenses directly through your platform. Keep 100% of your earnings with our zero-commission model.
          </p>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <BookOpen className="text-emerald-400 w-5 h-5" />
              {/* UPDATED: Feature 1 */}
              Bundle and price unlimited courses and learning paths
            </li>
            <li className="flex items-center gap-2">
              <DollarSign className="text-emerald-400 w-5 h-5" />
              {/* UPDATED: Feature 2 */}
              Zero commission fee on all course sales and transactions
            </li>
            <li className="flex items-center gap-2">
              <UserCheck className="text-emerald-400 w-5 h-5" />
              {/* UPDATED: Feature 3 */}
              Automated management of user licenses and subscription access
            </li>
            <li className="flex items-center gap-2">
              <BarChart className="text-emerald-400 w-5 h-5" />
              {/* UPDATED: Feature 4 */}
              Real-time analytics on revenue, popular courses, and conversion rates
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default EcommerceSection;