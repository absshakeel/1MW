/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0px 5px 15px rgba(0, 0, 0, 0.14)',
        '4xl': '2px 4px 5px 5px rgba(0, 0, 0, 0.24)',
        '5xl': '2px 2px 8px 0px rgba(0,0,0,0.40)',
      },
      colors: {
        brand: {
          DEFAULT: '#006400',
          button: '#5C28FB',
          box: '#F0F0EF',
          light:'#34364A',
          red: '#DF5334',
          teal: '#E32FFF',
          gray: '#59657A',
          green:"#7D75E0"
        },
      },
    },
  },
  plugins: [],
}
