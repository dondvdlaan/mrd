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
      },
      height: {
        '120': '30rem',
        '144': '36rem',
      },
      colors: {
        'mrd-blue': '#083a79',
        'mrd-light-blue': '#22b5dd',
        'mrd-beige': '#e6e0d5',
        'mrd-yellow': '#EAB308',

        
      },
    },
  plugins: [],
  }
}
