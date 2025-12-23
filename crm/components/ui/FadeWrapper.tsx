// components/ui/FadeWrapper.tsx
'use client';

import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface FadeWrapperProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  yOffset?: number; // How far up it should travel (e.g., 40px)
  stagger?: number; // Stagger delay for children elements
}

const FadeWrapper: React.FC<FadeWrapperProps> = ({
  children,
  duration = 0.8, // Duration of the animation for each item
  delay = 0.1,    // Initial delay before first child starts
  yOffset = 40,   // Start 40px below final position (Fades up from bottom)
  stagger = 0.15, // Delay between each child element
}) => {
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  // Variants for the individual child items
  const itemVariants: Variants = {
    hidden: { y: yOffset, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: duration, 
        // A robust ease-out curve [x1, y1, x2, y2]
        ease: [0.25, 1, 0.5, 1] 
      } 
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* We map over children and wrap them in a motion.div to apply the stagger effect. */}
        {React.Children.map(children, child => (
          // We must ensure 'child' is a valid React element
          React.isValidElement(child) ? (
            <motion.div variants={itemVariants} style={{ display: 'contents' }}>
              {child}
            </motion.div>
          ) : child
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeWrapper;