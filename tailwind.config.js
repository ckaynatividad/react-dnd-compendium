/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: "0px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      default: "#bada55",
    },
    extend: {},
  },
  plugins: [],
};
