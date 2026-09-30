/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0b0b0c", 900: "#0b0b0c", 800: "#131315", 700: "#1a1a1d", 600: "#26262a", 500: "#3a3a40" },
        accent: { DEFAULT: "#ccff00", dark: "#b3e000" },
        muted: "#9a9aa3",
      },
      fontFamily: {
        display: ["Oswald", "Impact", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
