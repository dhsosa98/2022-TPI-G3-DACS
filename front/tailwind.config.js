module.exports = {
  content:["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar-hide'),
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'wolf': '1430',
      // => @media (min-width: 1430px) { ... }
    },
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

