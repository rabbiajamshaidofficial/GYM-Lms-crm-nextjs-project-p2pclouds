"use client";

import React from "react";
import { motion } from "framer-motion";
import { faqData } from "@/lib/data"; // Assumed to hold updated LMS FAQs
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQItem } from "@/types/allTypes";

const FAQSection: React.FC = () => {
  return (
    <section
      id="faq"
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#0b0d13] via-[#111319] to-[#0b0d13] overflow-hidden"
    >
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[700px] h-[700px] bg-emerald-500/10 blur-3xl rounded-full mt-32"></div>
      </div>

      <div className="relative container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-poppins text-emerald-400 font-semibold uppercase text-sm tracking-[0.2em] mb-3">
            Got Questions?
          </p>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            {/* UPDATED: Subheading text for LMS context */}
            Quick answers to the most common inquiries about administration, course features, data security, and pricing for the P2P Cloud LMS.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item: FAQItem, index: number) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group border border-white/10 rounded-2xl backdrop-blur-md 
                bg-white/5 transition-all duration-300 hover:border-emerald-400/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
              >
                <AccordionTrigger
                  className="text-left p-5 md:p-6 font-poppins text-lg font-semibold text-white 
                  transition-all duration-200 data-[state=open]:text-emerald-400 
                  hover:no-underline hover:bg-white/5"
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="p-5 pt-0 md:px-6 text-gray-300 leading-relaxed border-t border-white/10">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;