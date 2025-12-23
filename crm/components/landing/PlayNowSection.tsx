"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
// Removed import { videoShowcaseData } from "@/lib/data";

// --- START: Internal Data (Replaced External Import) ---
const videoShowcaseData = {
  heading: "Get the Full Tour: See the Power of Our CRM",
  subheading:
    "Watch a short, focused demonstration of key features, from lead capture to closing deals and managing customer support.",
  imageUrl:
    "images/playnow.png",
  callToAction: "Watch CRM Demo",
};
// --- END: Internal Data ---


const cn = (
  ...classes: (string | Record<string, boolean> | undefined | null)[]
): string =>
  classes
    .map((arg) => {
      if (typeof arg === "string") return arg;
      if (typeof arg === "object" && arg !== null)
        return Object.entries(arg)
          .filter(([_, cond]) => cond)
          .map(([cls]) => cls)
          .join(" ");
      return "";
    })
    .filter(Boolean)
    .join(" ");

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.onerror = null;
  e.currentTarget.src =
    "https://placehold.co/1024x768/111827/10B981?text=Video+Preview+Unavailable";
};

export function PlayNowSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const primary = "#10B981";

  return (
    <section
      id="play-now"
      className="relative py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0b0d13] via-[#111319] to-[#0b0d13] text-center"
    >
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[800px] h-[800px] bg-emerald-500/10 blur-3xl rounded-full mt-32"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative container mx-auto px-6 max-w-6xl z-10"
      >
        <div className="mb-12">
          <p className="text-emerald-400 text-sm uppercase tracking-[0.25em] font-semibold mb-3">
            Watch in Action
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 font-poppins">
            {videoShowcaseData.heading}
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light">
            {videoShowcaseData.subheading}
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.2)] border border-white/10 backdrop-blur-md">
          {/* Background thumbnail */}
          <img
            src={videoShowcaseData.imageUrl}
            alt={videoShowcaseData.callToAction}
            className="absolute inset-0 w-full h-full object-cover opacity-90"
            onError={handleImageError}
          />

          <div
            className={cn(
              "absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-500",
              { "opacity-80": isPlaying, "opacity-40": !isPlaying }
            )}
          />

          {!isPlaying && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center focus:outline-none"
              aria-label={videoShowcaseData.callToAction}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 rounded-full bg-emerald-500/30 blur-md animate-ping"
                  style={{ width: "100%", height: "100%" }}
                />
                <div
                  className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-emerald-500 text-white shadow-lg"
                  style={{ boxShadow: `0 0 0 10px ${primary}25` }}
                >
                  <Play className="w-12 h-12 fill-current translate-x-px" />
                </div>
              </div>
            </motion.button>
          )}

          {isPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center text-white p-8"
            >
              <h3 className="text-2xl font-semibold mb-3">🎥 Playing Video</h3>
              <p className="text-gray-400 max-w-md mb-6">
                This is a demo placeholder. In the final version, your YouTube,
                Vimeo, or custom hosted video will appear here.
              </p>
              <button
                onClick={() => setIsPlaying(false)}
                className="px-5 py-2.5 rounded-lg font-semibold text-gray-900 transition-all hover:opacity-90"
                style={{ backgroundColor: primary }}
              >
                Stop Video
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default PlayNowSection;