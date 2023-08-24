/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/header/**/*.{js,jsx}',
    './src/components/body/**/*.{js,jsx}',
    './src/components/footer/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
};