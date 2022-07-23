const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        Noto: "'Noto Serif', serif",
      },
     
    },

  },
  plugins: [],
}
