/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'primaryColor': '#882BEC',
        'buttonColor': '#FEA301'
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'alfa': ['Alfa Slab One']
      }
    },
  },
  plugins: [],
}

