const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", ...fontFamily.sans] },
      padding: ["focus"],
      animation: {
        wave: "wave 1.5s linear both 1",
        fadeDown: "fadeDown 0.3s linear",
      },
      transitionProperty: {
        backgroundColor: "background-color",
        borderColor: "border-color, background-color",
        nav: "height, background-color, border-color, opacity",
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
        fadeDown: {
          from: { opacity: "0", transform: "translateY(-16px)" },
          to: { opacity: "1", transform: "translateY(0px)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
