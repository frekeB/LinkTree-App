/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        custom: "16px 14px 0px -3px rgba(0,0,0,0.75)"        
      }
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")], 
}