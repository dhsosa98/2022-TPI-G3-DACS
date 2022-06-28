module.exports = {
  content:["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        adelia: ["ADELIA", "cursive"],
        monstserrat: ['Montserrat', "sans-serif"],
        mulish: ['Mulish', 'sans-serif']
      },
      dropShadow: {
        'Wxl': [
            '0 35px 35px rgba(0, 0, 0, 2)',
            '0 45px 65px rgba(0, 0, 0, 2)'
        ]
      }
    },
  },
}

