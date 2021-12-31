const { chromium } = require('playwright');

( async() => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('https://applitools.com/');

    await page.screenshot({path: 'screenshot.png'});
    const logo = await page.$('.logo');
    await logo.screenshot({path: 'logo.png'}) // no caso aqui vai tirar uma imagem apenas da logo
    await page.screenshot({path: 'fullpage.png', fullPage: true}); // tira a imagem de toda pagina, inclusive se ele tiver que rolar pra baixo

    await browser.close();
})();
