const { chromium, devices } = require('playwright');// devices = a dictionary of devices
const iPhone = devices['iPhone 11'];

// Playwright comes with a registry of device parameters for selected mobile devices
// Can be used to simulate browser behaviors on mobile devices like Android or iPhone

( async() => {
    //mobile code
    const browser = await chromium.launch({headless: false, slowMo: 300});
    const context = browser.newContext({
        ...iPhone,
        permissions: ['geolocation'],
        geolocation: { latitude: 19.432608, longitude: -99.133209},
        locale: 'fr-FR'
    });

    const page = await (await context).newPage();
    await page.goto('https://www.google.com/maps');
    await page.waitForTimeout(5000);
    
    await browser.close();
})();
