/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", // Blue color (replacing lavender)
        "primary-dark": "#2563EB", // Darker blue for hover states
        "primary-light": "#93C5FD", // Light blue
        "blue-sand": "#EFF6FF", // Light blue/sand background color
        "blue-50": "#F0F9FF",
        "blue-100": "#E0F2FE",
        cream: "#FFFAF0", // Light cream background color (secondary)
        dark: "#171717", // Dark text
        "slate-600": "#4B5563", // Medium gray text
        "slate-700": "#374151", // Darker gray text
        "slate-900": "#111827", // Very dark text
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        handwritten: ["Caveat", "cursive"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out",
        "fade-in": "fadeIn 0.8s ease-out",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        wave: "wave 2.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(0, 0, 0, 0.06)",
        "soft-lg": "0 10px 30px -3px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
