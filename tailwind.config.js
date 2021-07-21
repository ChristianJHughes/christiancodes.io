const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", ...fontFamily.sans] },
      animation: { wave: "wave 1.5s linear both 1" },
      transitionProperty: {
        backgroundColor: "background-color",
        borderColor: "border-color, background-color",
      },
      keyframes: {
        wave: {
          "0%": { transform: "none" },
          "15%": {
            transform: "translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)",
          },
          "30%": {
            transform: "translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)",
          },
          "45%": {
            transform: "translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)",
          },
          "60%": {
            transform: "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)",
          },
          "75%": {
            transform: "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)",
          },
          "1100%": { transform: "none" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
