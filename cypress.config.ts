import { defineConfig } from 'cypress'

export default defineConfig({
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

            const { playwright } = require('./cypress/support/playwright')
            on('task', {
                async openPlaywright(options) {
                    return await playwright(options)
                }
            })

            on(
                'before:browser:launch',
                (
                    browser = {
                        name: '',
                        family: 'chromium',
                        channel: '',
                        displayName: '',
                        version: '',
                        majorVersion: '',
                        path: '',
                        isHeaded: false,
                        isHeadless: false
                    },
                    launchOptions
                ) => {
                    if (browser.family === 'webkit' && browser.name == 'safari') {
                        // auto open devtools
                        launchOptions.args.push('--auto-open-devtools-for-tabs')
                        const existing = launchOptions.args.find(arg => arg.slice(0, 23) === '--remote-debugging-port')
                        return launchOptions
                    }
                }
            )

            return config
        },
        experimentalStudio: true,
        experimentalWebKitSupport: true
    }
})
