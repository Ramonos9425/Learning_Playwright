const { chromium } = require('playwright');

( async() => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('https://letcode.in/elements')

    const [response] = await Promise.all([
        page.waitForResponse(res =>
            res.status() == 200  
            &&
            res.url() == "https://api.github.com/users/ortonikc"
        ), //will to wait for response 200 after type
        page.fill("input[name='username']", "ortonikc"),
        page.click("button")
    ])
    //console.log(await response.json());

    await browser.close();
})();

// Para executar: node apiResponse.js