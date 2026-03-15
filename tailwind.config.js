/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D4AF37', /* Gold/Metallic */
        secondary: '#A9A9A9', /* Light gray text */
        background: '#0B0C10', /* Deep dark background */
        surface: '#1F2833', /* Slightly lighter dark for glassmorphism */
        surface_glass: 'rgba(31, 40, 51, 0.7)', /* Frosted glass */
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
      },
      backdropBlur: {
        'glass': '10px',
      }
    },
  },
  plugins: [],
}
