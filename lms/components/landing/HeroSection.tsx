// components/landing/HeroSection.tsx
'use client'; 

import React from 'react';
import { motion, Variants } from 'framer-motion'; // 👈 IMPORT FRAMER MOTION
import { Button } from '@/components/ui/button'; 
import { Input } from '@/components/ui/input'; 
import Image from 'next/image';
import { cn } from '@/lib/utils'; 

// Image path
const dashboardImageSrc = "/imagehero11.png"; 

// --- FRAMER MOTION VARIANT DEFINITIONS ---
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.2,
        },
    },
};

const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

const imageVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15, delay: 0.4 } },
};
// ------------------------------------------

export default function HeroSection() {
    // Use the exact dark background color: #1C1D2A
    const heroBgColor = '#1C1D2A'; 
    
    return (
        <section className={cn(
            // Ensure mobile padding is good, and increases for desktop
            "relative w-full overflow-hidden pt-8 md:pt-16 pb-16 md:pb-32",
        )} style={{ backgroundColor: heroBgColor }}>
            
            {/* Background Layers */}
            <div className="absolute inset-0 z-0" style={{ backgroundColor: heroBgColor }} />
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center opacity-10" 
                style={{ backgroundImage: "url('/bgimage.png')" }} 
            />

            {/* 💥 Main Content Container using motion.div 💥 */}
            <motion.div 
                className="container relative z-10 mx-auto px-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-4xl text-center mx-auto">
                    
                    {/* Animated Text Block 1 */}
                    <motion.p 
                        // text-base is fine for mobile
                        className="text-sm sm:text-base font-normal text-gray-300 mb-4"
                        variants={textVariants}
                    >
                        Train Smarter, Not Harder: Personalized Fitness at Your Fingertips
                    </motion.p>

                    {/* Animated Text Block 2 */}
                    <motion.h1 
                        // Adjusted H1 size for better mobile readability (4xl mobile, 5xl small desktop, 6xl large desktop)
                        className="text-4xl sm:text-5xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight mb-8"
                        variants={textVariants}
                    >
                        P2PCloudsGYM: Your All-in-One <br className="hidden sm:block" /> Personal Training Platform
                    </motion.h1>
                    
                    {/* Input & Button Group (Responsive adjustments) */}
                    <motion.div 
                        // Adjusted spacing for mobile (space-x-1) and container width (max-w-sm)
                        // This keeps the input/button in one row, but tighter on small screens.
                        className="mt-10 flex justify-center space-x-1 sm:space-x-2 max-w-sm mx-auto md:max-w-lg bg-white/5 p-1 rounded-full border border-white/10"
                        variants={textVariants}
                    >
                        <Input 
                            type="email" 
                            placeholder="Enter your email to start a free trial..." 
                            className="flex-grow h-10 bg-transparent border-none shadow-none text-white placeholder:text-gray-400 focus-visible:ring-0 px-4" 
                        />
                        <Button 
                            className="h-10 px-4 sm:px-6 font-semibold bg-white text-black hover:bg-gray-100 transition duration-300 rounded-full text-sm sm:text-base whitespace-nowrap"
                        >
                            Start Free Trial
                        </Button>
                    </motion.div>
                </div>
                
                {/* Animated Dashboard Mockup Container (Responsive width) */}
                <motion.div 
                    className="relative mt-8 md:mt-12 flex justify-center px-4" // Added px-4 for safety margin on very small screens
                    variants={imageVariants} // Uses a slightly slower, deeper animation
                >
                    {/* Scaled the image container width: wider on mobile, narrower on desktop */}
                    <div className="relative w-[95vw] md:w-[85vw] lg:w-[70vw] xl:w-[60vw] max-w-6xl"> 
                        <Image 
                            src={dashboardImageSrc} 
                            alt="Gym Platform Dashboard Mockup"
                            width={1200} 
                            height={750} 
                            className="w-full rounded-xl shadow-2xl relative z-10" 
                        />
                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
}
