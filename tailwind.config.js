/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        beach: ['BeachSound2', 'sans-serif'], 
        jagret :['Jagret','sans-serif']// Register the custom font
      },
    },
  },
  plugins: [],
}

