import { test, expect } from '@playwright/test';

/**
 * NavigationDock E2E Test Suite
 * Verifies that the NavigationDock correctly highlights the active section as the user scrolls.
 * Also checks that the navigation links correctly scroll to the intended sections.
 */
test.describe('NavigationDock Component', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the app (using the base path as per Vite configuration)
    await page.goto('http://localhost:5173/');

    // Wait for the BootSequence to complete (approx 4.5s total)
    // We use a safe margin of 6000ms as suggested in the project memory
    // and wait for the hero section to be visible to ensure booting is done.
    await page.waitForTimeout(6000);
    await expect(page.locator('#hero')).toBeVisible();

    // Ensure the NavigationDock is visible on desktop
    await expect(page.locator('.fixed.left-6')).toBeVisible();
  });

  test('should initially highlight the Hero section', async ({ page }) => {
    // The "Home" link should have the active text color
    const homeLink = page.getByRole('link', { name: /home/i });
    await expect(homeLink).toHaveClass(/text-white/);

    // The active indicator (motion.div) should be present within the active link
    const activeIndicator = homeLink.locator('.absolute.inset-0.bg-gradient-to-r');
    await expect(activeIndicator).toBeVisible();
  });

  test('should update active section on scroll', async ({ page }) => {
    const sections = [
      { id: 'about', label: /about/i },
      { id: 'skills', label: /skills/i },
      { id: 'projects', label: /work/i },
      { id: 'resume', label: /resume/i },
      { id: 'contact', label: /contact/i }
    ];

    for (const section of sections) {
      // Scroll the target section into the center of the viewport
      const sectionElement = page.locator(`#${section.id}`);
      await sectionElement.scrollIntoViewIfNeeded();

      // Additional small scroll to ensure the section is centered (as per App.jsx logic)
      await page.evaluate(() => window.scrollBy(0, 50));

      // Verify the corresponding link is now active and in view
      // We use web-first assertions to handle the throttled scroll handler and animations
      const navLink = page.getByRole('link', { name: section.label });
      await expect(navLink).toHaveClass(/text-white/, { timeout: 3000 });

      // Verify the active indicator has moved to this link
      const activeIndicator = navLink.locator('.absolute.inset-0.bg-gradient-to-r');
      await expect(activeIndicator).toBeVisible();

      // Verify the section is actually in the viewport
      await expect(sectionElement).toBeInViewport();
    }
  });

  test('should scroll to section when a navigation link is clicked', async ({ page }) => {
    const sections = [
      { id: 'about', label: /about/i },
      { id: 'projects', label: /work/i },
      { id: 'contact', label: /contact/i }
    ];

    for (const section of sections) {
      const navLink = page.getByRole('link', { name: section.label });
      await navLink.click();

      // Verify the section is scrolled into the viewport
      const sectionElement = page.locator(`#${section.id}`);
      await expect(sectionElement).toBeInViewport();

      // Verify the link is highlighted
      await expect(navLink).toHaveClass(/text-white/);
    }
  });

  test('should show tooltips on hover', async ({ page }) => {
    const homeLink = page.getByRole('link', { name: /home/i });

    // Hover over the link
    await homeLink.hover();

    // Tooltip should become visible (opacity-100)
    // The tooltip is a div following the link's label logic
    const tooltip = homeLink.locator('div:has-text("Home")').filter({ hasNot: page.locator('svg') });
    await expect(tooltip).toBeVisible();
    await expect(tooltip).toHaveClass(/opacity-100/);
  });
});
