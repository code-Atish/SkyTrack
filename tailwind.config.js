/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.js",
    './index.html'],
  theme: {
    extend: {
      colors: {
        // 'clifford': '#da373d',
        'random': 'cyan'
      },
      backgroundImage: {
        'nature-bg': "url(../images/nature-bg.jpg)",
      },
      width: {
        '100': '32rem',
      },
      screens: {
        'xsm': '376px',
      }
    },
  },
  plugins: [],
}

