const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173');
  // Wait for animations and boot sequence to settle (boot sequence is 4 seconds)
  await page.waitForTimeout(6000);
  await page.screenshot({ path: 'final_verification.png', fullPage: true });
  await browser.close();
})();
