const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: { fontFamily: { sans: ["Inter", ...fontFamily.sans] } },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
