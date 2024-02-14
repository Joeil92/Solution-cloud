/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      green: colors.green,
      red: colors.red,
      yellow: colors.yellow,
      primary: {
        100: '#D6E4FF',
        200: '#ADC8FF',
        300: '#84A9FF',
        400: '#6690FF',
        500: '#3366FF',
        600: '#254EDB',
        700: '#1939B7',
        800: '#102693',
        900: '#091A7A',
      }
    }
  },
  plugins: [],
}