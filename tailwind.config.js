/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js, jsx, ts, tsx}',
    './components/**/*.{js, jsx, ts, tsx}'
  ],
  theme: {
    extend: {
      animation: {
        float: 'float 5s infinite',
      },
      keyframes: {
        float: {
          '0%': {
            transform: 'translate(0vw, 100vh)'
          },
          '100%': {
            transform: 'translate(0vw, -100vh)'
          }
        }
      }
    },
  },
  plugins: [],
  safelist: ['animate-[fade-in_1s_ease-in-out]']
}
