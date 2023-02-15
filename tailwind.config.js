/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  variants: {
    extend: {},
  },
  theme: {
    extend: {
      backgroundColor: {
        'hover-btn': 'rgba(201, 201, 201, 0.25)',
        'pressed-btn': 'rgba(0, 0, 0, 0.25)',
        'equal-btn': '#6440F1',
      },
      boxShadow: {
        'common-shadow': '0px 4px 4px rgba(255, 255, 255, 0.25)',
        'equal-btn-shadow': '0px 4px 4px rgba(73, 31, 240, 0.25)',
        'calculator-shadow': '0px 8px 32px #1E1F29',
      },
    },
  },
  plugins: [],
};
