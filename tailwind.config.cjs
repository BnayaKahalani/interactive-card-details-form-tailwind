/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.js",
    "./src/**/*.jsx"
  ],
  theme: {
    colors: {
      'red': '#ff5252',
      'white': '#ffffff',
      'light-grey': '#dedddf',
      'dark-grey': '#8e8593',
      'dark-violet': '#21092f',
    },
    fontFamily: {
      display: ['Space Grotesk', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
