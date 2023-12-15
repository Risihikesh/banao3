/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      inset:{
      '4/10':'40%',

      },
      height:{
        '1/6':'16.666667%',
        '2/7':'28.571429%',
        '3/7':'42.857143%',
        '2/8':'25%',
        '3/9':'33.333333%',
        '1/7':'14.285714%',
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }

        'ft':{'max':'700px'},

        'kt':{'max':'900px'},

        'jt':{'max':'420px'},

        'bt':{'max':'320px'},

        'vt':{'max':'270px'},
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
}
