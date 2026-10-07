/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#5e7798',
          500: '#37516f',
          600: '#243b53',
          700: '#1a2e42',
          800: '#102138',
          900: '#0a1623',
          950: '#070f18',
        },
        coolblue: {
          50: '#eff8ff',
          100: '#dbeefe',
          200: '#bfe3fe',
          300: '#93d3fd',
          400: '#60bbfa',
          500: '#3a9ff5',
          600: '#2383e8',
          700: '#1a6bd1',
          800: '#1b57ab',
          900: '#1c4a87',
          950: '#163057',
        },
        warmorange: {
          50: '#fff8f1',
          100: '#feecdc',
          200: '#fcd9bd',
          300: '#fdba8f',
          400: '#ff8c52',
          500: '#ff6b2b',
          600: '#f04e1a',
          700: '#c93d12',
          800: '#a33416',
          900: '#872f18',
          950: '#4a1608',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #0a1623 0%, #1a2e42 100%)',
        'hero-overlay': 'linear-gradient(180deg, rgba(10,22,35,0.85) 0%, rgba(10,22,35,0.6) 50%, rgba(10,22,35,0.85) 100%)',
      },
    },
  },
  plugins: [],
};
