const plugin = require('tailwindcss/plugin')

const myPlugin = plugin(function ({ theme, addComponents }) {
  addComponents({
    '.test': {
      backgroundColor: theme('colors.blue.500'),
    },
    '.example': {
      backgroundColor: theme('colors.yellow.500'),
      padding: theme('spacing.10'),
    },
    '.something': {
      backgroundColor: theme('colors.red.500'),
    },
  })
})

module.exports = myPlugin
