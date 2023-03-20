/** @type {import('tailwindcss').Config} */
const myPlugin = require('./index')

module.exports = {
  content: ['./*.{html, js, ts, jsx, tsx, vue, svelte}'],
  theme: {
    extend: {},
  },
  plugins: [myPlugin],
}
