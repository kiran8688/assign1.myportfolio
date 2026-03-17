const { test, expect } = require('@playwright/test');

test('capture skills section screenshot', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Wait for the main content to be loaded and visible
  await page.waitForSelector('#skills', { state: 'visible', timeout: 30000 });

  // Scroll to the skills section
  const skillsSection = await page.locator('#skills');
  await skillsSection.scrollIntoViewIfNeeded();

  // Add a small delay for animations to settle
  await page.waitForTimeout(2000);

  // Take screenshot of the skills section
  await skillsSection.screenshot({ path: '/tmp/skills_section_after.png' });
});
