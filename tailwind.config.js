/** 
@type
{       
import
(
'tailwindcss'
)
.
Config
}
 */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4B9F59",
        // Green theme for homeopathy
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
