/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'stroke': 'stroke 3s ease-in-out infinite',
        'zoom': 'zoom 10s ease-in-out infinite',
      },
      keyframes: {
        stroke: {
          '0%, 100%': { 'stroke-dashoffset': '1000' },
          '50%': { 'stroke-dashoffset': '0' },
        },
        zoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' }, 
        },
      },
    },
  },
  plugins: [],
}

