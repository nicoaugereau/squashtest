// playwright.js
// https://medium.com/tech-learn-share/shall-we-integrate-cypress-io-with-safari-browser-c190d600e771
const { chrome, firefox, webkit } = require('playwright')
// Set the env variable.
process.env.DEBUG = 'pw:api,pw:browser*'

exports.playwright = async function playwright(browserName) {
    const browser = await webkit.launch({ headless: false })
    const context = await browser.newContext()
    const page = await context.newPage()
    await page
        .goto('https://www.younup.fr', { waitUntil: 'load', timeout: 5000 })
        .then(() => {
            console.log('success')
        })
        .catch(res => {
            console.log('fails', res)
        })
    await page.click('text=Blog', {timeout: 5000})
    await browser.close()
    return null
}
