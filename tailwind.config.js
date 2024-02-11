/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        gmarket: ['Gmarket', 'sans-serif'],
      },
      colors: {
        accent: {
          300: '#F26A0E',
        },
      },
    },
  },
  plugins: [],
};
