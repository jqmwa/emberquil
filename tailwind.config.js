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
        // NERV Theme Colors
        'nerv-void': '#0a1612',        // Background: Deep sea darkness
        'nerv-sage': '#8fb3a5',        // Foreground: Muted sage
        'nerv-orange': '#e85d04',      // Accent: Signal orange
        'nerv-purple': '#8a5a8a',      // Functions: Subdued purple
        'nerv-teal': '#3a7a8c',        // Types: Industrial teal
        'nerv-green': '#4a8c5c',       // Strings: Organic green
        
        // Semantic mapping
        primary: '#3a7a8c',            // Industrial teal
        secondary: '#4a8c5c',          // Organic green
        accent: '#e85d04',             // Signal orange
        dark: '#0a1612',               // Deep void
        muted: '#8a5a8a',              // Subdued purple
      },
      fontFamily: {
        sans: ['Share Tech Mono', 'Roboto Mono', 'monospace'],
        mono: ['Share Tech Mono', 'Roboto Mono', 'monospace'],
        display: ['Orbitron', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'nerv': '2px',  // Sharp, terminal aesthetic
      },
      backdropBlur: {
        'xs': '2px',
        'nerv': '8px',  // CRT screen effect
      },
      boxShadow: {
        'nerv-glow': '0 0 20px rgba(232, 93, 4, 0.3)',
        'nerv-glow-sm': '0 0 10px rgba(232, 93, 4, 0.2)',
        'nerv-terminal': '0 0 30px rgba(58, 122, 140, 0.2)',
      },
      animation: {
        'flicker': 'flicker 0.15s infinite',
        'scan': 'scan 8s linear infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.95' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
}
