"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FiMenu,
  FiX,
  FiHome, // Icon still needed for the link
  FiPhone,
} from "react-icons/fi";

// UPDATED: Navigation items replaced with a single LMS link
const navItems = [
  // Assuming the LMS link goes to the top of the home page
  { display: "LMS", href: "#home", icon: <FiHome /> },
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
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="P2P Cloud Logo"
              width="32"
              height="32"
              className="object-contain drop-shadow-md"
            />
            <span className="font-bold text-lg tracking-wide">P2P Cloud LMS</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-8 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.display}
                href={item.href}
                onClick={handleLinkClick}
                // Styling for white text and green hover (text-emerald-400)
                className="flex items-center gap-1 text-white hover:text-emerald-400 transition-all duration-200"
              >
                {item.icon}
                {item.display}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden lg:flex h-10 px-4 items-center gap-2 font-semibold text-white border border-emerald-400/40 hover:bg-emerald-500/10 rounded-xl transition-all duration-200"
          >
            <FiPhone /> Contact Sales
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

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100 py-2" : "max-h-0 opacity-0"
        } bg-[#0b0d13]/90 backdrop-blur-lg shadow-xl`}
      >
        <div className="flex flex-col space-y-1 px-4 sm:px-6 pb-4">
          {navItems.map((item) => (
            <a
              key={item.display}
              href={item.href}
              onClick={handleLinkClick}
              // Styling for mobile menu links
              className="flex items-center gap-2 text-base font-medium text-white hover:text-emerald-400 hover:bg-white/10 px-3 py-2 rounded-lg transition-colors"
            >
              {item.icon}
              {item.display}
            </a>
          ))}

          <a
            href="#contact"
            onClick={handleLinkClick}
            className="mt-3 flex items-center justify-center gap-2 h-10 font-semibold text-white border border-emerald-400/40 hover:bg-emerald-500/10 rounded-xl transition-all duration-200"
          >
            <FiPhone /> Contact Sales
          </a>
        </div>
      </div>
    </header>
  );
}