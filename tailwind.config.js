/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C1B2FF',
        secondary: '#54A388',
        dark: '#161316',
        purple: '#43256E',
        orange: '#FF6B35',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['SF UI Display', 'system-ui', 'sans-serif'],
        'glitch': ['Orbitron', 'sans-serif'], // Using Orbitron as substitute for Glitch Goblin
        'mono': ['Roboto Mono', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
