/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#10B981', // your teal
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
};