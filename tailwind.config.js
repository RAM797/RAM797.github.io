/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Deep, near-black canvas
        ink: {
          950: '#070708',
          900: '#0b0b0f',
          800: '#111118',
          700: '#1a1a25',
          600: '#262633',
        },
        // Texas A&M maroon, elevated for the web
        maroon: {
          DEFAULT: '#7a1330',
          400: '#b03455',
          500: '#8f1d3c',
          600: '#7a1330',
          700: '#5c0d24',
        },
        // Violet pulled from the Kyle Field night lights
        violet: {
          DEFAULT: '#a855f7',
          400: '#c084fc',
          500: '#a855f7',
          600: '#7c3aed',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Inter Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1180px',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(120deg, #b03455 0%, #a855f7 100%)',
        'mesh': 'radial-gradient(60% 60% at 20% 10%, rgba(176,52,85,0.18) 0%, transparent 60%), radial-gradient(50% 50% at 85% 25%, rgba(168,85,247,0.16) 0%, transparent 55%), radial-gradient(60% 60% at 50% 100%, rgba(124,58,237,0.12) 0%, transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px -20px rgba(168,85,247,0.35)',
        card: '0 1px 0 0 rgba(255,255,255,0.05) inset, 0 24px 60px -30px rgba(0,0,0,0.8)',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-24px) translateX(12px)' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 14s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
      },
    },
  },
  plugins: [],
}
