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
      },  
      colors: {
        customBlue: 'rgba(95, 145, 255, 1)',
      },
    },
  },
  plugins: [],
}

