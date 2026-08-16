/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display-serif': ['"Instrument Serif"', 'Georgia', 'serif'],
        'body': ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'mono': ['"JetBrains Mono"', '"SF Mono"', 'monospace'],
        'pixel': ['"Silkscreen"', 'cursive', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out both',
        'scale-up': 'scaleUp 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        'spin-slow': 'spin 8s linear infinite',
        'float': 'floatY 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleUp: {
          from: { opacity: '0', transform: 'scale(0.92)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
