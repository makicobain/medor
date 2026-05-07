/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        or: '#EF9204',
        'or-light': '#FEF3DC',
        dark: '#1C1B1F',
        text: '#0A0A0A',
        muted: '#717182',
        bg: '#F4F4F4',
        card: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        xl: '12px',
      },
    },
  },
  plugins: [],
}
