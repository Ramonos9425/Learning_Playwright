const { chromium } = require('playwright');

// 3 main core concepts:
// Browser, Context, Page
// Browser: is the first thing we need to run UI tests
// Browser class -> instance of Chromium, Firefox or Webkit
// Page: a new tab or pop-up window within a context
// Actions like: page.click, page.type... happen here
//Context: "incognito-alike" session within a browser instance
// We have to use a browser context to record videos. Palywright records videos for all pages in a browser context

( async() => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 100});
    //creating a page inside browser
    const context = await browser.newContext({
        recordVideo: {
            dir:"./recordings"
        }
    });

    const page = await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1')

    await page.click('button');
    await page.waitForSelector('#loading');
    await page.waitForSelector('#loading', { state: 'hidden'});
    await page.waitForTimeout(100); //waitForTimeout can cause flaky tests, use for debugging only
    
    await browser.close();
})();
