/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070b14',
          900: '#0B1120',
          850: '#0f172a',
          800: '#131e36',
          700: '#1e293b',
          600: '#334155',
        },
        cloud: {
          blue: '#38bdf8',
          cyan: '#06b6d4',
          indigo: '#6366f1',
          accent: '#0ea5e9'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'dash-move': 'dashMove 1.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 8px rgba(56, 189, 248, 0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 18px rgba(56, 189, 248, 0.8))' },
        },
        dashMove: {
          to: {
            strokeDashoffset: '-20',
          }
        }
      }
    },
  },
  plugins: [],
}
