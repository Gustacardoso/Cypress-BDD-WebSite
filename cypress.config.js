const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 10000,
 
  e2e: {
    baseUrl: 'https://seubarriga.wcaquino.me/',
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    excludeSpecPattern: ["*.js", "*.md"],
    specPattern: 'cypress/e2e/**/*.{feature,features}',
  },
})
