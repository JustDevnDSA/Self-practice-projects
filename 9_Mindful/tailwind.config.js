/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors:{
        'darkGreen':'#2e5d4e',
        'lightGreen':"#c3f499"
      },
      screens:{
        'md':'768px',
        'lg':'1040px',
        'xl':'1200px',
        'navfull':'550px',
        'lilycen':'873px',
        'lilycen2':'920px',
        'lilycen3':'945px',
      }
    },
  },
  plugins: [],
}