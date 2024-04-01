const { Italiana } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        black: {
          main: "#000000",
          off: "#00000",
        },
        light: {
          main: "#D9D9D9",
          off: "",
        },
        graycard: {
          main: "#9B9B9B",
        },
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        InriaSerif: ["Inria Serif", "serif"],
        Italiana: ["Italiana", "sans-serif"],
      },
    },
  },

  plugins: [],
};
