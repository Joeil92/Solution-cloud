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
        100: '#F3FCF6',
        200: '#E8FAEF',
        300: '#D6F1E4',
        400: '#C4E3D7',
        500: '#ABD1C6',
        600: '#7DB3A9',
        700: '#569690',
        800: '#367979',
        900: '#205D64',
      }
    }
  },
  plugins: [],
}