/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mirage': '#17192b',
        'beige': '#9e7f66',
        'ebonyClay': '#242b37',
        'grisClair': '#5c6779',
        'noir': '#111111',
        'primary' : '#ffffff',
    },
      fonts: {
        'lightSpartan': ['League Spartan'],
        'semiBoldSpartan': '',
        'boldSpartan': '',
      }
    },
  },
  plugins: [],
}

