const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter:'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl:"https://demowebshop.tricentis.com",
    video: true,
    screenshotOnRunFailure:true,
    testIsolation:true,
  },
});
