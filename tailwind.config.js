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
      },
      boxShadow: {
        'glass': '0 16px 40px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(5%, -5%) scale(1.05)' },
          '66%': { transform: 'translate(-5%, 5%) scale(0.95)' },
        }
      },
      animation: {
        'drift': 'drift 20s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
