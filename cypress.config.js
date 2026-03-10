const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: process.env.YAHOO_URL,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    defaultCommandTimeout: 60000,
    pageLoadTimeout: 120000,
    responseTimeout: 60000,
    requestTimeout: 45000,

    env: {
    }
  },
});
