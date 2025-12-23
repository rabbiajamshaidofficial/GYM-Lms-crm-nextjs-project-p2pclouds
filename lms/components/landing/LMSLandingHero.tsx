"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
// 1. CHANGE: Updated image source name
const dashboardImageSrc = "/images/lms-dashboard.jpg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.1, staggerChildren: 0.2 },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 18 },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 70, damping: 18, delay: 0.4 },
  },
};

// RENAMED COMPONENT
export default function Hero1() {
  const heroBg = "#0B0D13";

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden pt-16 md:pt-24 pb-24 md:pb-40 text-center"
      )}
      style={{ backgroundColor: heroBg }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-emerald-500/10 blur-[120px] rounded-full"></div>
        <div
          className="absolute inset-0 bg-[url('/bgimage.png')] bg-cover bg-center opacity-[0.07]"
          aria-hidden="true"
        />
        <div className="absolute bottom-0 left-0 w-full h-[200px] bg-linear-to-t from-[#0b0d13] to-transparent"></div>
      </div>
      <motion.div
        className="container relative z-10 mx-auto px-6 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto">
          <motion.p
            variants={textVariants}
            className="text-sm sm:text-base font-medium text-emerald-400/90 mb-3 uppercase tracking-[0.2em]"
          >
            {/* 2. CHANGE: LMS focused subtitle */}
            Learn. Grow. Master Your Skills.
          </motion.p>

          <motion.h1
            variants={textVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            {/* 3. CHANGE: LMS focused main title */}
            P2P Cloud <span className="text-emerald-400">—</span>
            The Modern Learning Experience
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="text-lg sm:text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            {/* 4. CHANGE: LMS focused description */}
            Discover thousands of courses from industry experts. Start your
            learning journey today and gain the skills you need to succeed.
          </motion.p>

          <motion.div
            variants={textVariants}
            className="mx-auto max-w-md sm:max-w-lg flex items-center bg-white/10 border border-white/20 rounded-full p-1.5 backdrop-blur-md"
          >
            <Input
              type="email"
              // 5. CHANGE: Updated placeholder
              placeholder="Enter your email to get course updates..."
              className="grow h-11 bg-transparent border-none shadow-none text-white placeholder:text-gray-400 focus-visible:ring-0 px-4"
            />
            <Button className="h-11 px-6 sm:px-8 rounded-full font-semibold bg-emerald-500 text-white hover:bg-emerald-400 transition-all duration-300">
              Explore Courses {/* 6. CHANGE: Updated CTA button text */}
            </Button>
          </motion.div>
        </div>

        <motion.div
          variants={imageVariants}
          className="relative mt-16 md:mt-24 flex justify-center"
        >
          <div className="relative w-[95vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] max-w-6xl">
            <Image
              src={"/images/hero1.png"}
              // 7. CHANGE: Updated alt text
              alt="P2P Cloud LMS Course Dashboard"
              width={1200}
              height={700}
              className="w-full rounded-3xl shadow-[0_0_40px_rgba(16,185,129,0.2)]"
            />

            <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-emerald-500/10 blur-3xl"></div>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-2 h-2 bg-emerald-400/30 rounded-full animate-pulse top-1/3 left-[20%]"></div>
        <div className="absolute w-3 h-3 bg-emerald-400/20 rounded-full animate-bounce bottom-[25%] right-[15%]"></div>
      </div>
    </section>
  );
}