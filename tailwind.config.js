/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      black_thirty: "#292929",
      white_sixty: "#f1efe7",
      dark_blue_tenth: "#055c9d",
      light_blue_tenth: "#5500ff",
    },
    extend: {
      spacing: {},
    },
  },
  plugins: [],
};
