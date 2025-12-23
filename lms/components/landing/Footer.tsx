"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { footerData, siteConfig } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LucideIconName = keyof typeof LucideIcons;
const DynamicIcon: React.FC<{ name: string; className?: string }> = ({
  name,
  className,
}) => {
  const IconName = name as LucideIconName;
  if (!IconName || !(IconName in LucideIcons)) return null;
  const IconComponent = LucideIcons[IconName] as React.ComponentType<{
    className?: string;
  }>;
  return <IconComponent className={className} />;
};

export function Footer() {
  const theme = {
    bg: "#0b0d13",
    border: "rgba(255,255,255,0.08)",
    text: "text-gray-400",
    heading: "text-white",
    hover: "hover:text-emerald-400",
  };

  return (
    <footer
      className={cn(
        "relative border-t font-poppins overflow-hidden",
        "pt-16 md:pt-24 pb-8",
        "bg-[radial-gradient(circle_at_top_left,#0b0d13,#111319,#0b0d13)]"
      )}
      style={{ borderColor: theme.border }}
    >
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[700px] h-[700px] bg-emerald-500/10 blur-2xl rounded-full mt-10" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between border-b pb-10 border-white/10 mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0 max-w-lg">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Join Our Fitness Newsletter
            </h3>
            <p className="text-gray-400 text-sm">
              Get weekly updates on smart gym automation, AI analytics, and
              exclusive offers from P2PCloudsGYM.
            </p>
          </div>
          <div className="flex w-full md:w-auto space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-72 h-11 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus-visible:ring-emerald-500 focus:border-emerald-500 rounded-xl"
            />
            <Button className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-xl h-11 px-5">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.png"
                alt={siteConfig.name}
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-white">
                {siteConfig.name}
              </span>
            </Link>

            <p className="text-sm text-gray-400 mb-4 max-w-xs leading-relaxed">
              The all-in-one AI-powered Gym Management SaaS — automate members,
              fees, eCommerce, and analytics with a single dashboard.
            </p>

            {/* Address + Contact */}
            <div className="text-sm space-y-1 text-white">
              <p>
                {footerData.address.street}, {footerData.address.city},{" "}
                {footerData.address.state}
              </p>
              <p>
                {" "}
                <a
                  href={`tel:${footerData.contact.phone}`}
                  className={`text-gray-400 ${theme.hover}`}
                >
                  {footerData.contact.phone}
                </a>
              </p>
              <p>
                {" "}
                <a
                  href={`mailto:${footerData.contact.email}`}
                  className={`text-gray-400 ${theme.hover}`}
                >
                  {footerData.contact.email}
                </a>
              </p>
            </div>

            <div className="flex space-x-3 mt-5">
              {footerData.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${theme.hover} transition-colors duration-200`}
                >
                  <DynamicIcon name={link.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {footerData.linkGroups.map((group) => (
            <div key={group.title}>
              <h4
                className={`text-base font-semibold mb-4 ${theme.heading} uppercase tracking-wide`}
              >
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`text-sm text-gray-400 ${theme.hover}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-white/10 text-xs text-gray-500">
          <p className="mb-3 sm:mb-0">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {footerData.legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-gray-400 ${theme.hover}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
