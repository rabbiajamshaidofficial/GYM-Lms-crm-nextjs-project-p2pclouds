"use client";

import React from "react";
import { cnNew } from "@/lib/utils";
import { TrendingUp } from "lucide-react"; 
import { motion } from "framer-motion";
import { PromoData } from "@/types/allTypes";

// UPDATED PROMO DATA with gym1.png
const promoData: PromoData = {
  headline: "Accelerate Your Revenue with AI-Powered CRM",
  subtitle:
    "Gain real-time insights into your sales pipeline, customer retention, and forecast performance. Let smart automation guide your team to close deals faster and smarter.",
  ctaText: "Request a Sales Demo",
  // ⭐ UPDATED IMAGE URL TO gym1.png ⭐
  imageUrl: "/images/gym1.png", 
  imageAlt:
    "Digital CRM dashboard showing sales pipeline, revenue metrics, and real-time performance tracking.",
};

export function FeaturePromoSection() {
  // Styles remain consistent with your existing theme
  const outerBg = "#0b0d13";
  const innerCard = "#111319";
  const ctaColor = "#10b981";

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src =
      "https://placehold.co/800x600/111319/10b981?text=CRM+Dashboard+Placeholder"; 
  };

  return (
    <section
      className="relative py-20 md:py-28 font-inter overflow-hidden"
      style={{ backgroundColor: outerBg }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/10 blur-3xl rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative container mx-auto px-6 md:px-10 max-w-7xl"
      >
        <div
          className="flex flex-col lg:flex-row items-center justify-between rounded-3xl shadow-[0_0_50px_rgba(16,185,129,0.15)] border border-white/10 backdrop-blur-md overflow-hidden"
          style={{ backgroundColor: innerCard }}
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-[45%] p-10 lg:p-14 text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
              {promoData.headline}
            </h1>

            <p className="text-gray-400 text-base sm:text-lg mb-8">
              {promoData.subtitle}
            </p>

            <a
              href="/request-demo" // Updated link target
              className={cnNew(
                "inline-flex items-center justify-center text-base py-3.5 px-8 rounded-full font-semibold shadow-lg hover:shadow-emerald-500/40 transition-transform duration-300 text-gray-900",
                "transform hover:scale-[1.05] active:scale-100"
              )}
              style={{ backgroundColor: ctaColor }}
            >
              {promoData.ctaText}
              <TrendingUp className="ml-3 h-5 w-5" /> {/* Updated Icon */}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:w-[55%] w-full flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-lg aspect-4/3 rounded-2xl overflow-hidden ring-2 ring-emerald-500/20 shadow-[0_10px_50px_-10px_rgba(16,185,129,0.3)]">
              <img
                // ⭐ Source updated here ⭐
                src={"/gym1.png"} 
                alt={promoData.imageAlt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-3 h-3 bg-emerald-400/20 rounded-full top-[20%] left-[15%] animate-pulse"></div>
        <div className="absolute w-2 h-2 bg-emerald-400/20 rounded-full bottom-[15%] right-[25%] animate-bounce"></div>
      </div>
    </section>
  );
}