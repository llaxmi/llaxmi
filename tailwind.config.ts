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
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        "step--1": "var(--step--1)",
        "step-0": "var(--step-0)",
        "step-1": "var(--step-1)",
        "step-2": "var(--step-2)",
        "step-3": "var(--step-3)",
        "step-4": "var(--step-4)",
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
