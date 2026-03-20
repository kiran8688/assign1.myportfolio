const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173');
  // Wait for animations to settle
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'final_verification.png', fullPage: true });
  await browser.close();
})();
