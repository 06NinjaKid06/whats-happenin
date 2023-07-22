const colors = require('tailwindcss/colors')


module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#0a5af0',
        bg: '#050505',
        text: '#fafafa',
        secondary: '#090231',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
