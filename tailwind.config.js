/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dodgerBlue: '#1E90FF',
        gold: '#FFD700',
        darkGray: '#333333',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ]
}

