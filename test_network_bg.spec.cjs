const { test, expect } = require('@playwright/test');

test('capture network background screenshot', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Wait for the main content to be loaded and visible
  await page.waitForSelector('canvas', { state: 'visible', timeout: 30000 });

  // Add a small delay for animations to settle and nodes to connect
  await page.waitForTimeout(4000);

  // Take full page screenshot to see the background
  await page.screenshot({ path: '/home/jules/verification/network_bg_after.png' });
});
