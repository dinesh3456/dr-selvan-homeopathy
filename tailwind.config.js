/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // This covers all files in src directory
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4B9F59",
        secondary: "#A9D6B5",
        accent: "#E8F3E9",
        dark: "#333333",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        handwritten: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};
