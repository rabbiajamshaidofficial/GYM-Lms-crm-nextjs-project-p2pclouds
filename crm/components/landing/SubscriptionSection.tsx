"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// UPDATED ICONS: Focus on billing and recurrence
import { CreditCard, BarChart, Package, Repeat, DollarSign } from "lucide-react"; 

const EcommerceSection: React.FC = () => {
  return (
    <section
      id="billing-subscriptions" // UPDATED ID
      className="relative overflow-hidden py-24 md:py-32 bg-[#0b0d13]"
    >
      <div className="absolute inset-0 flex justify-center -z-10">
        <div className="w-[700px] h-[700px] bg-emerald-500/10 blur-[120px] rounded-full mt-20" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          <Image
            // UPDATED IMAGE: Placeholder for a billing/subscription dashboard
            src="/images/dashboard-store.png" 
            alt="Subscription and Billing Management Dashboard"
            width={560}
            height={400}
            className="rounded-2xl shadow-2xl border border-white/10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* UPDATED: Section Title */}
          <span className="text-emerald-400 uppercase tracking-[0.25em] text-sm font-semibold">
            Subscription & Billing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Automate Recurring Payments and Revenue Tracking
          </h2>
          {/* UPDATED: Description */}
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            Effortlessly manage all your client subscriptions, recurring payments, and service packages within a centralized dashboard. Reduce manual work and prevent revenue leakage with intelligent automation.
          </p>

          {/* UPDATED: Feature Bullet Points */}
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <Repeat className="text-emerald-400 w-5 h-5" />
              Automated recurring billing and subscription renewal management
            </li>
            <li className="flex items-center gap-2">
              <CreditCard className="text-emerald-400 w-5 h-5" />
              Secure, integrated online payment processing (Stripe, PayPal, etc.)
            </li>
            <li className="flex items-center gap-2">
              <DollarSign className="text-emerald-400 w-5 h-5" />
              Handle pro-rata billing, upgrades, downgrades, and paused accounts
            </li>
            <li className="flex items-center gap-2">
              <Package className="text-emerald-400 w-5 h-5" />
              Auto-generate professional invoices and financial reports
            </li>
            <li className="flex items-center gap-2">
              <BarChart className="text-emerald-400 w-5 h-5" />
              Real-time MRR (Monthly Recurring Revenue) and churn analytics
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default EcommerceSection;