const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2",
    // baseUrl: "https://qamid.tmweb.ru",
    // retries: 1, // количество повторных попыток при завалвании теста
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
