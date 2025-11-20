/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0C1D2F',
        red: '#C6423B',
        cream: '#F6E3C7',
        dark: '#142131',
      },
      keyframes: {
        'scroll-x': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'scroll-x-slow': 'scroll-x 50s linear infinite', // desktop/tablet
        'scroll-x-fast': 'scroll-x 30s linear infinite', // mobile
      },
    },
  },
  plugins: [],
};

