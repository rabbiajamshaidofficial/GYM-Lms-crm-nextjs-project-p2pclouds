"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { User, Receipt, ShoppingCart, Activity } from "lucide-react";

const MemberPortalSection: React.FC = () => {
  return (
    <section
      id="member-portal"
      // ⭐ Updated Background Gradient ⭐
      // Tailwind CSS for linear gradient from top-to-bottom
      className="relative overflow-hidden py-24 md:py-32 bg-linear-to-b from-[#0b0d13] via-[#10141c] to-[#0b0d13]"
    >
      <div className="absolute inset-0 flex justify-center -z-10">
        
        {/* ⭐ Centered Radial Green Glow (Simple Tailwind Style) ⭐ */}
        {/* Note: This replaces the previous complex style-based glow */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-3xl rounded-full"
          style={{ zIndex: -20 }} // Ensure it's behind the content
        ></div>
        
      </div>

      <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-emerald-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Gym & Fitness Hub
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            The Digital Front Desk: Empower Your Members 24/7
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            Elevate the gym experience with a personalized digital portal. Members can seamlessly manage their **subscriptions**, view **class schedules**, track their **progress**, and handle all their billing and profile needs without needing staff assistance.
          </p>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <User className="text-emerald-400 w-5 h-5" />
              Manage profile, update emergency contacts, and change security settings
            </li>
            <li className="flex items-center gap-2">
              <Receipt className="text-emerald-400 w-5 h-5" />
              View subscription status, manage recurring payments, and download all past invoices
            </li>
            <li className="flex items-center gap-2">
              <ShoppingCart className="text-emerald-400 w-5 h-5" />
              Purchase class packs, merchandise, or nutritional supplements instantly
            </li>
            <li className="flex items-center gap-2">
              <Activity className="text-emerald-400 w-5 h-5" />
              Track daily attendance, monitor workout milestones, and set new fitness goals
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
            alt="Gym Member Self-Service Dashboard"
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