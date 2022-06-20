const { defineConfig } = require('cypress')

module.exports = defineConfig({
    env: {
        COMMAND_DELAY: 20,
        VISIT_DELAY: 2000
    },
    defaultCommandTimeout: 4000,
    execTimeout: 60000,
    taskTimeout: 60000,
    pageLoadTimeout: 60000,
    requestTimeout: 5000,
    responseTimeout: 30000,
    video: false,
    videoUploadOnPasses: false,
    trashAssetsBeforeRuns: true,
    chromeWebSecurity: false,
    e2e: {
        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        setupNodeEvents(on, config) {
            return require('./cypress/plugins/index.js')(on, config)
        }
    }
})
