/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // RGB values support opacity modifiers and change with the active surface.
      colors: {
        surface: "rgb(var(--surface-rgb) / <alpha-value>)",
        "surface-2": "rgb(var(--surface-2-rgb) / <alpha-value>)",
        rule: "rgb(var(--rule-rgb) / <alpha-value>)",
        body: "rgb(var(--body-rgb) / <alpha-value>)",
        muted: "rgb(var(--muted-rgb) / <alpha-value>)",
        "accent-text": "rgb(var(--accent-text-rgb) / <alpha-value>)",
        accent: "rgb(var(--accent-rgb) / <alpha-value>)",
        flag: {
          blue: "rgb(var(--flag-blue-rgb) / <alpha-value>)",
          white: "rgb(var(--flag-white-rgb) / <alpha-value>)",
          red: "rgb(var(--flag-red-rgb) / <alpha-value>)",
          green: "rgb(var(--flag-green-rgb) / <alpha-value>)",
          yellow: "rgb(var(--flag-yellow-rgb) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        hand: ["Caveat", "cursive"],
        deva: ['"Tiro Devanagari Hindi"', "serif"],
      },
      fontSize: {
        "step--1": "var(--step--1)",
        "step-0": "var(--step-0)",
        "step-1": "var(--step-1)",
        "step-2": "var(--step-2)",
        "step-3": "var(--step-3)",
        "step-4": "var(--step-4)",
        "step-5": "var(--step-5)",
        display: "var(--display)",
      },
      borderColor: {
        DEFAULT: "rgb(var(--rule-rgb) / <alpha-value>)",
      },
      maxWidth: {
        shell: "1400px",
      },
      spacing: {
        gutter: "var(--gutter)",
      },
    },
  },
  plugins: [],
};
