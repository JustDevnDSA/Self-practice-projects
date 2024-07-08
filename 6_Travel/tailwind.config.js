/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["gilroy", "sans-serif"],
        poppins: ["poppins", "sans-serif"],
      },
      colors: {
        blue: "#3b71ef",
        darkblue: "#0d1f35",
        regulartext: "#565e73",
        shadow: "#b3e8be",
      },
    },
  },
  plugins: [],
};
