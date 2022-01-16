//const { chromium } = require('@playwright/test')
const { chromium } = require('playwright');

( async() => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('https://letcode.in/dropdowns')

    const fruits = await page.$("#fruits")
    await fruits?.selectOption("2")

  /*  const heros = await page.$("#superheros")
    heros?.selectOption([
        {label: "Aquaman" }, { value: "bt" }, { index: 8}
    ]) */

    await browser.close();
})();

// Para executar: node selectOption.js