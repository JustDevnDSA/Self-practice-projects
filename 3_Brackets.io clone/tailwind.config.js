/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
      extend: {
        fontFamily:{
          'inter':["Inter", "sans-serif"],
          'syne':["Syne", "sans-serif"],
        },
        colors:{
          'footer':'#13181b',
          'topHero':'#f0f9ff',
          'headingTop':'#2d2d2d',
          'button1':'#000000',
          'button2':'#FE9615', 
          'peLink':'#489ef5',
        }
      },
    },
    plugins: [],
  }