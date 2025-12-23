"use client";

import { cnNew } from "@/lib/utils";
import { PricingPlan } from "@/types/allTypes";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// UPDATED: Pricing Plans for an LMS (Per Admin/Features)
const pricingPlans: PricingPlan[] = [
  {
    name: "Standard",
    price: 99,
    duration: "month",
    ctaText: "Start 14-Day Free Trial",
    isPopular: false,
    features: [
      "Up to 5 Administrators",
      "Unlimited Learners & Courses",
      "Basic Reporting & Analytics",
      "Mobile App Access (Learners)",
      "Email Support (24hr response)",
    ],
  },
  {
    name: "Professional",
    price: 249,
    duration: "month",
    ctaText: "Choose Professional",
    isPopular: true,
    features: [
      "Up to 20 Administrators",
      "Advanced SCORM/xAPI Support",
      "Custom Branding (White-Label)",
      "AI Skill Gap Analysis Tool",
      "Dedicated Account Manager",
      "Single Sign-On (SSO) Ready",
    ],
  },
  {
    name: "Enterprise",
    price: 2499,
    duration: "year",
    ctaText: "Contact for Quote", // Changed CTA for enterprise
    isPopular: false,
    features: [
      "Unlimited Administrators",
      "Custom Feature Development",
      "Dedicated Cloud Instance",
      "24/7 Priority Phone Support",
      "SLA and Uptime Guarantee",
      "Advanced API Integrations",
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
            Pricing
          </p>
          <h2 className="text-4xl md:text-4xl font-extrabold mb-4 font-poppins">
            {/* UPDATED: LMS Heading */}
            Simple, Transparent Pricing for Your Training Needs
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            {/* UPDATED: LMS Subheading */}
            Choose the plan that suits your organization scale. All plans include unlimited learners and zero revenue share.
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
                className={cnNew(
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
                      {/* Price display updated for yearly plans */}
                      {plan.price > 1000 ? (
                        <div className="text-xl font-bold mt-2">Custom Quote</div>
                      ) : (
                        `$${plan.price}`
                      )}
                    </span>
                    <span className="text-gray-400 text-sm ml-1">
                      {plan.price > 1000 ? "" : `/${plan.duration}`}
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
                        className={cnNew(
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
                  className={cnNew(
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