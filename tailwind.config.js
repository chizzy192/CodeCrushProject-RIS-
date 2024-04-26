/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
  
    screens:{
      
    },
  extend: {
    backgroundImage: {
      'bodybg': "url('bodybg.svg')",
      'ourquest':"url('ourquest.svg')",
    },
  },
},
  plugins: [],
}
