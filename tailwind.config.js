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
        jagret: ['Jagret', 'sans-serif'],// Register the custom font
        montserrat: ['Montserrat', 'sans-serif'],
        bebas: ['Bebas Neue', 'cursive'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        cookie: ['Cookie', 'cursive'],
      },
      animation: {
        rotate: 'rotate 800ms ease-in-out 1',
        customBounce: 'customBounce 2s ease-out infinite',
        customBounce2: 'customBounce2 2s ease-out infinite',
        flipHorizontal: 'flipHorizontal 1s ease-in-out 1',
        rotate360: 'rotate360 500ms linear 1',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg) scale(0.7)' },
          '50%': { transform: 'rotate(180deg) scale(0.7) translateX(-100px)', top: '-200px' },
          '100%': { transform: 'rotate(360deg) scale(0.7)' },
        },
        customBounce: {
          '0%': {
            transform: 'translateY(0)',
          },
          '30%': {
            transform: 'translateY(-5px)',
          },
          '50%': {
            transform: 'translateY(0)',
          },
          '70%': {
            transform: 'translateY(-2px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        flipHorizontal: {
          '0%': {
            transform: 'scaleX(-1)',
          },
          '100%': {
            transform: 'scaleX(1)',
          },
        },
        customBounce2: {
          '0%': {
            transform: 'translateY(0) scale(0.6)',
          },
          '30%': {
            transform: 'translateY(-10px) scale(0.6)',
          },
          '50%': {
            transform: 'translateY(0) scale(0.6)',
          },
          '70%': {
            transform: 'translateY(-5px) scale(0.6)',
          },
          '100%': {
            transform: 'translateY(0) scale(0.6)',
          },
        },
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}

