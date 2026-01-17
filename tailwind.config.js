/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00f0ff',
          pink: '#ff2bd6',
          purple: '#a855f7',
          blue: '#3b82f6',
          green: '#10b981',
        },
      },
      fontFamily: {
        display: ['"Orbitron"', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(0, 240, 255, 0.3)',
        'neon-pink': '0 0 20px rgba(255, 43, 214, 0.5), 0 0 40px rgba(255, 43, 214, 0.3)',
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { filter: 'brightness(1) drop-shadow(0 0 5px currentColor)' },
          '100%': { filter: 'brightness(1.2) drop-shadow(0 0 20px currentColor)' },
        },
      },
    },
  },
  plugins: [],
};