"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

// --- START: Internal Data & Types (Replaced External Imports) ---
interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What makes this CRM different from competitors?",
    answer: "Our CRM is built specifically for high-growth service businesses, offering unparalleled automation in client onboarding and custom reporting that competitors often lack. We prioritize a clean, intuitive interface and deep integration with modern communication platforms (Slack, Teams, etc.).",
  },
  {
    question: "Is data migration from my old system complicated?",
    answer: "Not at all. We provide dedicated data migration specialists who work with you to ensure a seamless transfer from popular systems (Salesforce, HubSpot, etc.) or standard CSV files. Data integrity and security are our top priorities during this process.",
  },
  {
    question: "What level of security does the platform offer?",
    answer: "We adhere to industry-leading security standards (SOC 2 Type II compliant). Data is encrypted both in transit (TLS/SSL) and at rest (AES-256). We also offer SSO and advanced role-based access control for Enterprise clients.",
  },
  {
    question: "Can I customize the sales pipeline stages?",
    answer: "Absolutely. The CRM allows complete customization of pipeline stages, field requirements, and automation triggers for each stage. This ensures the platform perfectly mirrors your unique sales process.",
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 14-day, no-commitment free trial on our Basic and Pro tiers. This gives you full access to the features so you can test how well it fits your business needs before subscribing.",
  },
];
// --- END: Internal Data & Types ---

// Simplified Accordion Item to replace external Accordion imports
const AccordionItem: React.FC<{ item: FAQItem, index: number, openIndex: number | null, setOpenIndex: (index: number | null) => void }> = ({ item, index, openIndex, setOpenIndex }) => {
    const isOpen = index === openIndex;

    const toggleAccordion = () => {
        setOpenIndex(isOpen ? null : index);
    };

    return (
        <div 
            className="group border border-white/10 rounded-2xl backdrop-blur-md bg-white/5 transition-all duration-300 hover:border-emerald-400/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
        >
            <button
                className={`flex justify-between items-center w-full text-left p-5 md:p-6 font-poppins text-lg font-semibold transition-all duration-200 hover:bg-white/5 
                ${isOpen ? 'text-emerald-400' : 'text-white'}`}
                onClick={toggleAccordion}
                aria-expanded={isOpen}
            >
                {item.question}
                <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-400' : 'text-gray-400'}`}
                />
            </button>
            <div 
                // Using max-h and opacity for smooth transition
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                {/* Only render content when open to correctly calculate max-height, though standard approach uses visibility */}
                {isOpen && (
                    <div className="p-5 pt-0 md:px-6 text-gray-300 leading-relaxed border-t border-white/10">
                        {item.answer}
                    </div>
                )}
            </div>
        </div>
    );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
            Your Questions, Answered
          </p>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
            Frequently Asked Questions About Our CRM
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Find quick answers to the most common questions regarding setup, features, security, and pricing of our client relationship platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Replacing Accordion component with simple div */}
          <div className="space-y-4">
            {faqData.map((item: FAQItem, index: number) => (
              <AccordionItem 
                key={index} 
                item={item} 
                index={index} 
                openIndex={openIndex} 
                setOpenIndex={setOpenIndex} 
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;