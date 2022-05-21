module.exports = {
  content: [
    './components/**/*.vue',
    './slices/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif:
        '"Libre Baskerville", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    },
    extend: {
      colors: {
        primary: '#1478B3',
        'dark-blue': '#093753',
        'sigma-green': '#C6DDDA'
      },
      spacing: {
        80: '20rem',
        108: '27rem',
        160: '40rem'
      },
      inset: {
        '-16': '-4rem'
      },
      fontSize: {
        xxs: '0.625rem'
      },
      boxShadow: {
        'outline-green': '0 0 0 3px rgba(5,202,160, 0.8)'
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
