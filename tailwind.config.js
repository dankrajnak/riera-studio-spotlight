const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      serifDisplay: ["EB Garamond", "serif"],
    },
    colors: {
      transparent: "transparent",
      currentColor: "currentColor",
      white: colors.white,
      black: colors.stone,
    },
  },
  plugins: [],
};
