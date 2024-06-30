/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ["Poppins", 'sans-serif']
      },
      colors:{
        'blue':"#3c5cb9",
        'dark':"#ea8c6d",
        'light':"#ffcfa3",
        'background':"#f1f5f5",
      },
      screens:{
        'mmd':'920px'
      },
      boxShadow:{
        'custom': '0 2px 4px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.1), 2px 0 4px rgba(0, 0, 0, 0.1), -2px 0 4px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}

