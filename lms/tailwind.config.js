/** @type {import('tailwindcss').Config} */
module.exports = {
  // ... other configurations (like content array)
  content: [
    // Include your component files here, e.g.:
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // --- COLOR DEFINITIONS ADDED HERE ---
      colors: {
        'gym-primary': '#10b981', // Vibrant Green (for buttons, checks, accents)
        'gym-secondary': '#059669', // Darker Green (for hover states)
        'gym-dark': '#1f2937', // Dark Gray (for headings)
      },
      // --- END OF COLOR DEFINITIONS ---
      keyframes: {
        'fade-up': {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(16px)' // Starts 16px below final position
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' // Ends at final position
          },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out', // Applies the keyframes for 0.8s
      },
      // ADDITIONS END HERE
    },
  },
  plugins: [
    // ... your plugins (e.g., require("tailwindcss-animate"))
  ],
};
