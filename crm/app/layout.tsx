import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// Removed ALL Geist imports to resolve the module not found error (ts2307)
import "./globals.css";

// 🎯 Define Poppins as the primary font 🎯
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  // IMPORTANT: This variable is used in tailwind.config.js to define the 'font-poppins' utility class.
  variable: "--font-poppins",
});

// Set specific metadata for the application
export const metadata: Metadata = {
  title: "P2PClouds GYM Management System - Unleash Your Potential",
  description:
    "State-of-the-art gym facilities and training programs powered by Next.js.",
  // The icon paths are correct (root-relative) and do not need changes.
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/android-chrome-192x192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "512x512",
      url: "/android-chrome-512x512.png",
    },
  ],
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // FIX: Combine poppins.variable with 'font-poppins' and 'antialiased' directly on <html>
    // This makes the class applied to the HTML element static, reducing hydration mismatch risk.
    <html lang="en" className={`${poppins.variable} font-poppins antialiased`}>
      <body>
        {/* REMOVED className from <body> as it's now on <html> */}
        {children}
      </body>
    </html>
  );
}
