const { chromium } = require('playwright');
// Para executar: node first.js
( async() => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 400});
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/alerts')

    page.on('dialog', async dialog => {
        console.log(dialog.message())// mostra a mensagem que aparece no alerta
        await dialog.accept()
    });

    await page.click('#confirmButton');

    await page.click('#promtButton');

    await browser.close();
})();
