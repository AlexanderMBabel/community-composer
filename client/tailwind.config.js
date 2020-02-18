const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          '100': '#e8f4ef',
          '200': '#b5bcb9',
          '300': '#8f9994',
          '400': '#777c7a',
          '500': '#5c605e',
          '900': '#2c3531'
        },
        blue: {
          ...colors.blue,
          '100': '#d1e8e2',
          '900': '#116466'
        },
        tan: {
          '100': '#ffcb9a',
          '500': '#d9b08c'
        }
      }
    }
  },
  variants: {},
  plugins: []
};
