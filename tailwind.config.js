/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    
    extend: {
      colors:{
        primary: "#22c55e",
        dark: "#111827"
      }
    },
  },
  plugins: [],
}

