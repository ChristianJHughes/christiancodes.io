const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: "class",
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
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              fontWeight: "400",
              color: theme("colors.gray.900"),
              strong: {
                a: {
                  fontWeight: "600",
                },
              },
              a: {
                textDecoration: "none",
                color: theme("colors.blue.600"),
                "&:hover": {
                  color: theme("colors.blue.400"),
                },
              },
            },
          ],
        },
        // Thanks @adamwathan for the dark mode configuration: https://github.com/tailwindlabs/tailwindcss-typography/issues/69#issuecomment-752946920
        light: {
          css: [
            {
              color: theme("colors.gray.200"),
              '[class~="lead"]': {
                color: theme("colors.gray.300"),
              },
              a: {
                textDecoration: "none",
                color: theme("colors.blue.400"),
                "&:hover": {
                  color: theme("colors.blue.500"),
                },
              },
              strong: {
                color: theme("colors.gray.100"),
              },
              "ol > li::before": {
                color: theme("colors.gray.400"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.600"),
              },
              hr: {
                borderColor: theme("colors.gray.200"),
              },
              blockquote: {
                color: theme("colors.gray.200"),
                borderLeftColor: theme("colors.gray.600"),
              },
              h1: {
                color: theme("colors.white"),
              },
              h2: {
                color: theme("colors.white"),
              },
              h3: {
                color: theme("colors.white"),
              },
              h4: {
                color: theme("colors.white"),
              },
              "figure figcaption": {
                color: theme("colors.gray.400"),
              },
              code: {
                color: theme("colors.white"),
              },
              "a code": {
                color: theme("colors.white"),
              },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800"),
              },
              thead: {
                color: theme("colors.white"),
                borderBottomColor: theme("colors.gray.400"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.gray.600"),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark", "hover"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
