//const { chromium } = require('@playwright/test')
const { chromium } = require('playwright');

( async() => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('https://letcode.in/dropdowns')

    const fruits = await page.$("#fruits")
    await fruits?.selectOption("2")

    await browser.close();
})();

// Para executar: node first.js