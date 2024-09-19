module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: "#FF4B3E",
        koraWhite: "#FFFFFF",
        koraGreen: "#3A5A40",
        deepRed: "#D72638",
      },
    },
  },
  plugins: [],
};
