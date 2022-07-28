/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "serif"],
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
