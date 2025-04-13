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
        primary: "#4B9F59",
        secondary: "#A9D6B5",
        accent: "#E8F3E9",
        dark: "#333333",
        "primary-dark": "#3a7c46", // Added this for hover states
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        handwritten: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};
