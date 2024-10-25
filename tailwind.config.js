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
        'circular': 'circularMotion 1s forwards',
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
        circularMotion: {
          '0%': {transform: 'translate(-50%, 50%) rotate(0deg)',},
          '100%': {transform: 'translate(0, 0) rotate(360deg)', },
        },
      },
      boxShadow: {
        custom: '8px 8px 20px 0px #8750f7, -8px -8px 20px 0px #8750f7',
      },
    },
  },
  plugins: [],
}

