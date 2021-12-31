const { chromium } = require('playwright');
// Para executar: node first.js
( async() => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/forgot_password')

    const email = await page.$('#email'); //$single element
    await email.type('ixchel@mail.com', { delay: 50}); //elementHandle.type(text), esse delay é para ver digitando
    
    await browser.close();
})();
