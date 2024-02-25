/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        width: '1408px',
        padding: '1rem',
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1408px',
        },
      },
      colors: {
        'black': '#000',
        'white': '#fff',
        'blue': '#0156FF',
        'dark-blue': '#272560',
        'grey': '#838383',
        'light-grey': '#F5F7FF',
        'green': '#78A962',
        'red': '#C94D3F',
        'lightgrey': '#c4d1ec',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        sl: ['10px', '21px'],
      }
    },
  },
  plugins: [],
}

