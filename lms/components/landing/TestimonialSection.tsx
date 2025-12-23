"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { testimonialsData } from "@/lib/data"; // Assumed to hold updated LMS testimonials
import { Testimonial } from "@/types/allTypes";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTO_SCROLL_INTERVAL = 7000;

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // The content of testimonialsData is assumed to be updated for LMS quotes
  const testimonials: Testimonial[] = testimonialsData; 

  const next = () => setCurrentIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, AUTO_SCROLL_INTERVAL);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = testimonials[currentIndex];
  if (testimonials.length === 0) return null;

  return (
    <section
      id="reviews"
      className="relative py-20 md:py-28 bg-gradient-to-b from-[#0b0d13] via-[#10141c] to-[#0b0d13] overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-3xl rounded-full" />

      <div className="relative container mx-auto px-6 max-w-6xl text-center">
        {/* Heading */}
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-3">
            Client Success
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            {/* UPDATED: Heading for LMS */}
            Hear From Leading Organizations
          </h2>
          <p className="text-lg text-gray-400">
            {/* UPDATED: Subheading for LMS */}
            Real results from our clients. Discover how P2P Cloud LMS helps transform corporate training and skill development.
          </p>
        </div>

        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="hidden sm:flex w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 transition-all items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative bg-white/5 border border-white/10 backdrop-blur-md text-left p-10 md:p-12 rounded-3xl shadow-[0_0_40px_rgba(16,185,129,0.2)] max-w-4xl w-full"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex flex-col items-center md:items-start md:w-1/3">
                  <img
                    src={
                      current.avatarUrl ||
                      "https://placehold.co/100x100/34D399/ffffff?text=U"
                    }
                    alt={current.name}
                    className="w-24 h-24 rounded-full ring-4 ring-emerald-400/40 shadow-lg object-cover mb-4"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://placehold.co/100x100/34D399/ffffff?text=U";
                    }}
                  />
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold text-white">
                      {current.name}
                    </h3>
                    <p className="text-sm text-emerald-400 mt-1">
                      {current.title}
                    </p>
                  </div>
                </div>

                <div className="md:w-2/3 relative">
                  <svg
                    className="w-8 h-8 text-emerald-400/70 absolute -top-4 left-0"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C5.08 4 1 6.818 1 12.02c0 2.684 1.764 4.54 3.904 4.54 2.14 0 3.736-1.856 3.736-4.54C8.64 6.818 5.08 4 9.352 4zM24.648 4c-4.272 0-8.352 2.818-8.352 8.02 0 2.684 1.764 4.54 3.904 4.54 2.14 0 3.736-1.856 3.736-4.54C24.648 6.818 21.088 4 24.648 4z" />
                  </svg>
                  <p className="text-lg text-gray-200 leading-relaxed italic pl-10">
                    {current.quote}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={next}
            className="hidden sm:flex w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 transition-all items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-10 space-x-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                i === currentIndex
                  ? "bg-emerald-400 scale-125 shadow-[0_0_10px_#34D399]"
                  : "bg-gray-500/40 hover:bg-emerald-300/50"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;