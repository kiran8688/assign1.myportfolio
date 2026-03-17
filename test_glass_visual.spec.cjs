const { test, expect } = require('@playwright/test');

test('capture glass UI screenshots', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Wait for the main content to be loaded and visible
  await page.waitForSelector('#skills', { state: 'visible', timeout: 30000 });

  // Scroll to the skills section
  const skillsSection = await page.locator('#skills');
  await skillsSection.scrollIntoViewIfNeeded();

  // Add a small delay for animations to settle
  await page.waitForTimeout(2000);

  // Take screenshot of the skills section
  await skillsSection.screenshot({ path: '/home/jules/verification/skills_glass_after.png' });

  // Take screenshot of the navigation dock
  const navDock = await page.locator('.fixed.left-6');
  await navDock.screenshot({ path: '/home/jules/verification/nav_dock_glass_after.png' });
});
