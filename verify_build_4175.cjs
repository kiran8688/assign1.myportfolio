const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:4175/');
  await page.waitForTimeout(6000); // Wait for boot sequence and animations
  await page.screenshot({ path: 'prod_nav_dock_4175.png', fullPage: true });
  await browser.close();
})();
