//const { chromium } = require('@playwright/test')
const { chromium } = require('playwright');

( async() => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('https://www.sendgb.com/')

    const filePath0 = 'arquivos/a.txt';
    const filePath1 = '../arquivos/a.txt';

    await page.click('text=Está bem')
    await page.setInputFiles("input[name='qqfile']", filePath0)
   // await page.setInputFiles("input[name='qqfile']", [filePath0, filePath1])


   // await browser.close();
})();

// Para executar: node uploadFiles.js
//https://www.youtube.com/watch?v=e8jfjV71E6Q&list=PLSg2o0-XcqDASTgY1KIPSHS5WbO6yPter&index=147