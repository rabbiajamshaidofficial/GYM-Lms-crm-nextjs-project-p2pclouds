"use client";

import React, { useState, useEffect, JSX } from "react";
import Link from "next/link";
import {
  FiMenu,
  FiX,
  FiMail,       // Request Demo CTA Icon
} from "react-icons/fi";

// The navigation list is empty to support the minimalist design
const navItems: { display: string, href: string, icon?: JSX.Element }[] = [
    // Removed detailed navigation links
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleLinkClick = () => isMenuOpen && setIsMenuOpen(false);

  // Detect scroll to add shadow / backdrop effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-[#0b0d13]/80 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <nav className="flex justify-between items-center py-3 px-4 sm:px-6 text-white">
          {/* Logo - P2PClouds CRM */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="P2PClouds CRM Logo" 
              width="32"
              height="32"
              className="object-contain drop-shadow-md"
            />
            {/* The main brand name/link */}
            <span className="font-bold text-lg tracking-wide text-emerald-400">P2PClouds CRM</span>
          </Link>

          {/* ⭐ Desktop Nav - Single 'CRM' Link REPLACING all others ⭐ */}
          <div className="hidden lg:flex space-x-8 text-sm font-medium">
            <Link
              href="/" // Links back to the homepage or main section
              className="px-2 py-2  text-2xl text-white hover:text-emerald-400 transition-all duration-200 tracking-wider"
            >
              CRM
            </Link>
          </div>

          {/* CTA Button - Request Demo */}
          <a
            href="#contact"
            className="hidden lg:flex h-10 px-4 items-center gap-2 font-semibold text-white bg-emerald-500 hover:bg-emerald-600 rounded-xl transition-all duration-200"
          >
            <FiMail /> Contact Us
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-200"
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu - Only shows the single 'CRM' link and the CTA */}
      <div
        id="mobile-menu"
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100 py-2" : "max-h-0 opacity-0"
        } bg-[#0b0d13]/90 backdrop-blur-lg shadow-xl`}
      >
        <div className="flex flex-col space-y-1 px-4 sm:px-6 pb-4">
          {/* The single 'CRM' link is displayed first on mobile */}
          <Link
            href="/"
            onClick={handleLinkClick}
            className="flex items-center justify-center text-xl font-extrabold text-emerald-400 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-colors mb-2"
          >
            CRM
          </Link>
          
          {/* The mobile CTA button */}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="mt-3 flex items-center justify-center gap-2 h-10 font-semibold text-white bg-emerald-500 hover:bg-emerald-600 rounded-xl transition-all duration-200"
          >
            <FiMail /> Request Demo
          </a>
        </div>
      </div>
    </header>
  );
}