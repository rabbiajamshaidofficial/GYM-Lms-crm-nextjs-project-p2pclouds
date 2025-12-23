"use client";

// FIX: Changed 'cnNew' import to the standard 'cn'
// If 'cn' is also not found, the user may need to ensure it is correctly exported from '@/lib/utils' or use 'clsx' and 'tailwind-merge' directly.
import { cn } from "@/lib/utils"; 
import { PricingPlan } from "@/types/allTypes";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic Sales Tier",
    price: 19,
    duration: "month",
    ctaText: "Start Free Trial",
    isPopular: false,
    features: [
      "Basic Contact Management (1,000 Records)",
      "Standard Reporting & Dashboards",
      "Email Integration & Templates",
      "Mobile App Access",
    ],
  },
  {
    name: "Pro Automation",
    price: 49,
    duration: "month",
    ctaText: "Get Started Now",
    isPopular: true,
    features: [
      "Unlimited Contacts & Custom Fields",
      "Advanced Sales Pipeline Automation",
      "Marketing Campaign Builder",
      "Dedicated Support Channel",
      "AI-Driven Lead Scoring",
    ],
  },
  {
    name: "Enterprise Annual",
    price: 399,
    duration: "year",
    ctaText: "Save 32% Annually",
    isPopular: false,
    features: [
      "Everything in Pro Automation",
      "SSO & Enterprise Security",
      "Custom API & Integrations",
      "Dedicated Account Manager",
      "Onboarding & Training Workshop",
    ],
  },
];

const theme = {
  bg: "#0b0d13",
  card: "rgba(255,255,255,0.05)",
  border: "rgba(255,255,255,0.1)",
  primary: "#10B981",
  accent: "#FBBF24",
};

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative py-24 md:py-32 text-white overflow-hidden"
      style={{ backgroundColor: theme.bg }}
    >
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[900px] h-[900px] bg-emerald-500/10 blur-3xl rounded-full mt-32"></div>
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-emerald-400 uppercase tracking-[0.25em] text-sm font-semibold mb-3">
            Pricing Plans
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-poppins">
            Find the Perfect CRM Plan for Your Team
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Scale your sales, marketing, and support with a plan built for your growth stage, with no hidden fees.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {pricingPlans.map((plan, index) => {
            const isPro = plan.isPopular;

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04 }}
                className={cn( // Changed cnNew to cn
                  "relative flex flex-col p-8 rounded-3xl border transition-all duration-300 backdrop-blur-md",
                  isPro
                    ? "border-emerald-400/50 shadow-[0_0_25px_rgba(16,185,129,0.15)] bg-emerald-500/5"
                    : "border-white/10 hover:border-emerald-400/30 hover:bg-white/5"
                )}
              >
                {isPro && (
                  <span className="absolute top-4 right-4 bg-emerald-500 text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full animate-pulse">
                    Most Popular
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-1 text-white font-poppins">
                    {plan.name}
                  </h3>
                  <div className="flex items-end mb-1">
                    <span className="text-4xl font-extrabold text-white">
                      ${plan.price}
                    </span>
                    <span className="text-gray-400 text-sm ml-1">
                      /{plan.duration}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-300 text-sm"
                    >
                      <CheckCircle2
                        className={cn( // Changed cnNew to cn
                          "h-5 w-5 mr-2 flex-shrink-0",
                          isPro ? "text-emerald-400" : "text-gray-500"
                        )}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={`/signup?plan=${plan.name
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                  className={cn( // Changed cnNew to cn
                    "block text-center py-3.5 px-6 rounded-xl font-semibold transition-all duration-300 text-sm shadow-md",
                    isPro
                      ? "bg-emerald-500 hover:bg-emerald-400 text-gray-900"
                      : "bg-white/10 hover:bg-emerald-500/20 text-white"
                  )}
                >
                  {plan.ctaText}
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default PricingSection;