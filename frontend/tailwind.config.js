/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          "pink" : "#0D0300",
          "red" : "#ff6868",
          "secondary" : "#555",
          "primaryBG" : "#fcfcfc"
        },
        animation: {
          scale: 'scale 0.3s ease',
        },
        keyframes: {
          scale: {
            '0%': { transform: 'scale(1)' },
            '100%': { transform: 'scale(1.1)' },
          },
        },


    },
  },
  plugins: [require('daisyui'),],
}

