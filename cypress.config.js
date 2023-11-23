const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 300000,
  env: {
    url: "https://practicesoftwaretesting.com/#/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js',
  
  
  },
  });
  
