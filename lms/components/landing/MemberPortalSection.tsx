"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// UPDATED ICONS: BookOpen, Award, DollarSign, BarChart (for learning progress)
import { BookOpen, Award, DollarSign, BarChart } from "lucide-react"; 

const MemberPortalSection: React.FC = () => {
  return (
    <section
      id="member-portal"
      className="relative overflow-hidden py-24 md:py-32 bg-[#0b0d13]"
    >
      <div className="absolute inset-0 flex justify-center -z-10">
        <div className="w-[700px] h-[700px] bg-emerald-500/10 blur-[120px] rounded-full mt-20" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-emerald-400 uppercase tracking-[0.25em] text-sm font-semibold">
            {/* UPDATED: Subheading */}
            Learner Portal
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            {/* UPDATED: Main Heading */}
            Empower Learners with Their Personalized Hub
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            {/* UPDATED: Description */}
            Give your learners a modern, intuitive digital experience. They can track their course progress, manage payments, download certificates, and enroll in new training paths directly from their personalized dashboard.
          </p>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <BookOpen className="text-emerald-400 w-5 h-5" />
              {/* UPDATED: Feature 1 */}
              Access assigned courses, view deadlines, and resume learning
            </li>
            <li className="flex items-center gap-2">
              <Award className="text-emerald-400 w-5 h-5" />
              {/* UPDATED: Feature 2 */}
              Download earned certificates and proof of completion instantly
            </li>
            <li className="flex items-center gap-2">
              <DollarSign className="text-emerald-400 w-5 h-5" />
              {/* UPDATED: Feature 3 */}
              View payment history for courses and subscription invoices
            </li>
            <li className="flex items-center gap-2">
              <BarChart className="text-emerald-400 w-5 h-5" />
              {/* UPDATED: Feature 4 */}
              Track personal assessment scores and course completion rate
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          <Image
            src="/images/member-portal.png"
            alt="Learner Portal Dashboard"
            width={560}
            height={400}
            className="rounded-2xl shadow-2xl border border-white/10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MemberPortalSection;