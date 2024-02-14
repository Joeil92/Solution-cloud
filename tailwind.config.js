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
        100: '#E7E2FA',
        200: '#D0C6F5',
        300: '#AEA1E2',
        400: '#8B7FC5',
        500: '#6054A0',
        600: '#483D89',
        700: '#332A73',
        800: '#211A5C',
        900: '#15104C',
      }
    }
  },
  plugins: [],
}