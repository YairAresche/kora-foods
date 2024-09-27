/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{js,ts,jsx,tsx}",
    "/public/images/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["PT Sans Narrow", "sans-serif"],
      },
      colors: {
        "kimchuski-gray": {
          base: "#57585a",
          50: "#f5f6f6",
          100: "#e6e7e7",
          200: "#d0d1d1",
          300: "#afb0b1",
          400: "#86878a",
          500: "#6b6c6f",
          600: "#57585a",
          700: "#4e4f50",
          800: "#444446",
          900: "#3c3d3d",
          950: "#252527",
        },
        "kimchuski-red": {
          base: "#c13f2a",
          50: "#fdf4f3",
          100: "#fce7e4",
          200: "#fbd3cd",
          300: "#f6b5ab",
          400: "#ef8a7a",
          500: "#e4644f",
          600: "#d04832",
          700: "#c13f2a",
          800: "#913223",
          900: "#792f23",
          950: "#41150e",
        },
        "kimchuski-green": {
          base: "#246E49",
          50: "#f0f9f3",
          100: "#daf1e1",
          200: "#b8e2c7",
          300: "#8acba5",
          400: "#58af7f",
          500: "#379263",
          600: "#246e49",
          700: "#1f5d40",
          800: "#1a4b34",
          900: "#163e2b",
          950: "#0c2219",
        },
      },
      textShadow: {
        custom: "2px 2px 4px rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [],
};
