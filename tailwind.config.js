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
    },
  },
  plugins: [],
};

