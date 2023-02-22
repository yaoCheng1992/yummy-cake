/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './dist/index.html'],
  theme: {
    colors:{
     'first':'#E1AF2D',
     'second':'#118DAD',
     'third':'#ADA111',
     'white': '#ffffff',
     'black': '#000000',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [ 
  ],
}
