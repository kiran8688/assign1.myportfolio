/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0563bb',
        secondary: '#45505b',
        background: '#f2f3f5',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Raleway', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
