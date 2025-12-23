"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function DiscountPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", form);
    alert("Thank you! You’ve claimed your 30% OFF offer 🎉");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-999 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative w-[90%] max-w-md p-8 rounded-2xl bg-linear-to-b from-[#10121B] to-[#1a1d29] text-white border border-white/10 shadow-[0_0_30px_rgba(0,255,170,0.2)]"
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              <FiX size={22} />
            </button>

            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-emerald-400 drop-shadow-sm">
                🎉 Get 30% OFF Today!
              </h2>
              <p className="text-white/70 mt-2 text-sm">
                Enter your details below to claim your special offer.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 placeholder-white/40 text-white focus:ring-2 focus:ring-emerald-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 placeholder-white/40 text-white focus:ring-2 focus:ring-emerald-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+92 3XX XXXXXXX"
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 placeholder-white/40 text-white focus:ring-2 focus:ring-emerald-400 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-3 bg-emerald-500 hover:bg-emerald-600 transition-all text-white font-semibold py-2 rounded-lg shadow-[0_0_10px_rgba(16,185,129,0.5)]"
              >
                Claim Discount
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
