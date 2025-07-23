/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
      'jost': ["Jost",],
      'voll': ["Vollkorn",],
      
    },
   
    colors: {
      'primary': '#00413D',
      'secondary': '#E5745D',
    },
     backgroundImage: {
        'bannerimg': "url('./src/assets/bannerimg.png')",
      }
    },
  },
  plugins: [],
}