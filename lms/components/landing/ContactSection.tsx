"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { newContactLeftData, contactFormData } from "@/lib/data";

interface FormState {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  message: string;
}

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormState({ ...formState, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("Scheduling your demo...");
    await new Promise((r) => setTimeout(r, 2000));
    console.log("Demo Request Submitted:", formState);
    setIsSubmitting(false);
    setFormState({
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      message: "",
    });
    setStatusMessage("✅ Thank you! We’ll contact you soon.");
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 bg-gradient-to-b from-[#0b0d13] to-[#12141c] text-white overflow-hidden"
    >
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-12 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.2)] overflow-hidden"
        >
          <div className="lg:w-1/2 py-12 px-10 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-10 text-emerald-400 drop-shadow-md">
              {newContactLeftData.mainHeading}
            </h1>

            <div className="bg-emerald-500/10 p-6 md:p-8 rounded-2xl border border-emerald-400/30 shadow-inner">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
                {newContactLeftData.blueBoxTitle}
              </h3>
              <ul className="space-y-4">
                {newContactLeftData.blueBoxBenefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-start text-lg text-white/80 font-medium"
                  >
                    <Check className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0 text-emerald-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:w-1/2 bg-[#111319]/70 p-10 rounded-t-3xl lg:rounded-none">
            <h3 className="text-3xl font-bold mb-8 text-white">
              {contactFormData.formTitle}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-white/80">
                  Email <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 placeholder-white/40 text-white focus:ring-2 focus:ring-emerald-400 outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={formState.firstName}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 placeholder-white/40 text-white focus:ring-2 focus:ring-emerald-400 outline-none"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formState.lastName}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 placeholder-white/40 text-white focus:ring-2 focus:ring-emerald-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-white/80">
                  Phone Number <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder="+92 300 1234567"
                  className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 placeholder-white/40 text-white focus:ring-2 focus:ring-emerald-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-white/80">
                  Message <span className="text-emerald-400">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your gym, goals, or any custom request..."
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/40 text-white focus:ring-2 focus:ring-emerald-400 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-3 rounded-xl font-semibold text-white transition duration-300 shadow-lg",
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:ring-emerald-400/50"
                )}
              >
                {isSubmitting
                  ? "Scheduling..."
                  : contactFormData.submitButtonText}
              </button>
            </form>

            {statusMessage && (
              <p className="mt-8 pt-4 text-center text-emerald-400 font-medium border-t border-white/10">
                {statusMessage}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
