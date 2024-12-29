/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EEEDEB",
        secondary: "#A9A9A9",
        tertiary: "#030637",
      },
      textColor: {
        pri: "#102C57",
        sec: "#222831",
        tert: "#F7EFE5",
      },
      fontFamily: {
        pixel: ["Pixelify Sans", "sans-serif"],
        marcellus: ["Marcellus", "serif"],
      },
    },
  },
  plugins: [],
};
