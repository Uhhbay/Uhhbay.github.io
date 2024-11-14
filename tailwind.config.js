/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        cedarville: ['Cedarville Cursive', 'cursive'], 
        dancing: ['Dancing Script', 'cursive'], 
        bebas: ['Bebas Neue', 'sans-serif']
      },  
      colors: {
        customBlue: 'rgba(95, 145, 255, 1)',
      },
      screens: {
        'xl-custom': '1170px', 
        'xl-custom2': '1280px', 
        'md-lg': { 'min': '1170px', 'max': '1280px' },
      },
    },
  },
  plugins: [],
}

