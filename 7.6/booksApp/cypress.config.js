const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "retries":2,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "viewportWidth": 1366,
  "viewportHeight": 768
});
