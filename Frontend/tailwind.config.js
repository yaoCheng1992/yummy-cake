/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './dist/index.html'],
  theme: {
    colors:{
     'gold':'#E0D929',
     'red':'#941320',
     'blue':'#3FAAE0', 
     'white':'#FFFFFF', 
     'black':'#000000',  
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
