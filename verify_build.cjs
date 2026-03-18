const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navigate to the built production site
  await page.goto('http://localhost:4174');

  // Wait for animation to finish
  await page.waitForTimeout(4500);

  // Make the dock visible
  await page.setViewportSize({ width: 1280, height: 800 });

  // Wait a bit for layout to settle
  await page.waitForTimeout(1000);

  const verificationDir = path.join('/home/jules/verification');
  if (!fs.existsSync(verificationDir)) {
      fs.mkdirSync(verificationDir, { recursive: true });
  }

  const screenshotPath = path.join(verificationDir, 'prod_nav_dock.png');
  await page.screenshot({ path: screenshotPath, fullPage: true });

  console.log(`Screenshot saved to: ${screenshotPath}`);

  await browser.close();
})();