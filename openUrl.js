//Install clipboardy: npm install clipboardy
const { chromium } = require('playwright');
const clipboard = require("clipboardy")

( async() => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('http://google.com')
    await browser.close();
})();

// Para executar: node first.js