/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      ssm: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        primary: "#EEEDEB",
        secondary: "#A9A9A9",
        tertiary: "#030637",
        gradient1: "#bac5de",
        gradient2: "#dedede",
      },
      textColor: {
        pri: "#102C57",
        sec: "#222831",
        tert: "#F7EFE5",
      },
      fontFamily: {
        lexend: "Lexend, sans-serif",
        poppins: "Poppins, sans-serif",
        dancing: "Dancing Script, cursive",
        pixel: "Pixelify Sans, sans-serif",
      },
    },
  },
  plugins: [],
};
