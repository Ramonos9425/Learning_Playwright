const { chromium } = require('playwright');
//npm cliRecorder.js
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  const page = await context.newPage();

  // Go to https://www.saucedemo.com/
  await page.goto('https://www.saucedemo.com/');

  // Click [data-test="username"]
  await page.click('[data-test="username"]');

  // Fill [data-test="username"]
  await page.fill('[data-test="username"]', 'ramon1');

  // Click [data-test="password"]
  await page.click('[data-test="password"]');

  // Fill [data-test="password"]
  await page.fill('[data-test="password"]', '123456789');

  // Click [data-test="login-button"]
  await page.click('[data-test="login-button"]');

  // Click [data-test="error"]
  await page.click('[data-test="error"]');

  // ---------------------
  await context.close();
  await browser.close();
})();