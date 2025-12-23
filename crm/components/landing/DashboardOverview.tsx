"use client";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image"; 

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 18 },
  },
};

export default function DashboardOverview() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-40 md:pb-24 bg-[#0B0D13]">
      <motion.div
        className="container mx-auto px-6 max-w-7xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-sm font-medium text-emerald-400/90 mb-4 uppercase tracking-[0.2em] flex items-center justify-center"
          >
            <Zap className="w-4 h-4 mr-2" />
            CUSTOMER RELATIONSHIP MANAGEMENT
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            P2PClouds CRM:
            <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
              Grow Your Business
            </span>
            , Effortlessly.
          </motion.h1>

          {/* Subheading/Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-10"
          >
            Streamline leads, automate sales, and delight customers with the ultimate platform for personalized customer engagement and retention.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="#pricing"
              className="px-8 py-3 bg-emerald-500 text-white font-semibold rounded-lg shadow-lg hover:bg-emerald-600 transition duration-300 flex items-center justify-center"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="#features"
              className="px-8 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-white/5 transition duration-300 flex items-center justify-center"
            >
              Explore Features
            </Link>
          </motion.div>
        </div>

        {/* CRM Dashboard Image - GLOW ADDED HERE */}
        <motion.div
          variants={itemVariants}
          className="mt-16 md:mt-24 max-w-4xl w-full p-2 bg-white/5 rounded-2xl shadow-2xl border border-white/10 mx-auto"
          // ⭐ GLOW STYLES ADDED USING ARBITRARY BOX-SHADOW ⭐
          style={{
            boxShadow: '0 0 40px rgba(16, 185, 129, 0.6), 0 0 100px rgba(16, 185, 129, 0.2)', // Emerald-500 color with a wide blur
          }}
        >
          <Image
            src="/images/hero2.png" // Path to your 'hero' image
            alt="P2PClouds CRM Dashboard"
            width={1200} 
            height={675} 
            layout="responsive"
            className="rounded-xl"
          />
        </motion.div>
      </motion.div>

      {/* Background radial gradient effect - Increased Glow (from previous request) */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div 
          className="w-[1000px] h-[1000px] bg-emerald-500 rounded-full blur-[200px] absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
          style={{ opacity: 0.35 }}
        ></div>
      </div>
    </section>
  );
}