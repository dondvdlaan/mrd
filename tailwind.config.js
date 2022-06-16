/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
      },
      contrast: {
      25: '.25',
      }
    },
  plugins: [],
  }
}
