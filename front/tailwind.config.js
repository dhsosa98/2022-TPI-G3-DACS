module.exports = {
  content:["./src/**/*.{js,jsx}"],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar-hide'),
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        adelia: ["ADELIA", "cursive"],
        monstserrat: ['Montserrat', "sans-serif"],
        mulish: ['Mulish', 'sans-serif']
      },
      screens:{'2xl':'1347px'}
    },
  },
}

