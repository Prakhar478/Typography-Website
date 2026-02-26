/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          900: '#050608',
          800: '#070910',
          700: '#0b0d16',
        },
        accent: {
          teal: '#3dd5c6',
          gold: '#f5c56a',
          pink: '#f472b6',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['"Open Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        georgia: ['Georgia', '"Times New Roman"', 'serif'],
        times: ['"Times New Roman"', 'Times', 'serif'],
        garamond: ['"EB Garamond"', 'Garamond', 'serif'],
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
        arial: ['Arial', 'Helvetica', 'sans-serif'],
        roboto: ['Roboto', '"Segoe UI"', 'system-ui', 'sans-serif'],
        openSans: ['"Open Sans"', 'system-ui', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        bebas: ['"Bebas Neue"', 'system-ui', 'sans-serif'],
        mono: ['"Roboto Mono"', '"Inconsolata"', '"Courier New"', 'monospace'],
        script: ['Pacifico', '"Brush Script MT"', 'cursive'],
      },
      keyframes: {
        'soft-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.03)', opacity: '0.9' },
        },
        'gentle-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        'jitter': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-1px)' },
          '50%': { transform: 'translateX(1px)' },
          '75%': { transform: 'translateX(-0.5px)' },
        },
        'sway': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(1.5deg)' },
        },
      },
      animation: {
        'soft-pulse': 'soft-pulse 2.2s ease-in-out infinite',
        'gentle-float': 'gentle-float 6s ease-in-out infinite',
        jitter: 'jitter 400ms ease-in-out infinite',
        sway: 'sway 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

