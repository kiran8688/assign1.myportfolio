import { test, expect } from '@playwright/test';

/**
 * BootSequence Test Suite
 * Verifies the startup simulation, progress tracking, and cleanup logic.
 */
test.describe('BootSequence Component', () => {
  test.beforeEach(async ({ page }) => {
    // Install clock before navigation to control time from the start
    await page.clock.install();
    await page.goto('http://localhost:5173/');
  });

  test('should update progress and text as time passes', async ({ page }) => {
    const progressLabel = page.getByTestId('boot-progress');
    const processLabel = page.getByTestId('boot-current-process');

    // Initial state (at 0ms)
    await expect(progressLabel).toHaveText('0.00%');
    await expect(processLabel).toHaveText('INITIALIZING ROOT VIRTUAL ENVIRONMENT...');

    // Fast-forward to 1000ms (25% progress)
    await page.clock.fastForward(1000);
    await expect(progressLabel).toHaveText('25.00%');
    await expect(processLabel).toHaveText('RESOLVING DEPENDENCIES (node_modules)...');

    // Fast-forward to 2000ms (50% progress)
    await page.clock.fastForward(1000);
    await expect(progressLabel).toHaveText('50.00%');
    await expect(processLabel).toHaveText('BUNDLING ASSETS WITH VITE...');

    // Fast-forward to 3000ms (75% progress)
    await page.clock.fastForward(1000);
    await expect(progressLabel).toHaveText('75.00%');
    await expect(processLabel).toHaveText('RENDERING GLASSMORPHISM UI LAYER...');
  });

  test('should complete the sequence and reveal the portfolio', async ({ page }) => {
    // Fast-forward to 4000ms (100% progress)
    await page.clock.fastForward(4000);
    await expect(page.getByTestId('boot-progress')).toHaveText('100.00%');
    await expect(page.getByTestId('boot-current-process')).toHaveText('SYSTEM ARCHITECTURE COMPILED. WELCOME.');

    // The component triggers onComplete after 500ms
    await page.clock.fastForward(500);

    // After onComplete, App.jsx sets booting to false, and BootSequence unmounts (with 1.2s exit animation)
    // We fast-forward past the exit animation to ensure it's removed from the DOM
    await page.clock.fastForward(1500);

    // We wait for the hero section to be visible and the boot sequence to be gone
    await expect(page.locator('#hero')).toBeVisible();
    await expect(page.getByTestId('boot-sequence')).not.toBeVisible();
  });

  test('should cleanup interval on unmount', async ({ page }) => {
    // Mock clearInterval to track calls
    await page.addInitScript(() => {
      const originalClearInterval = window.clearInterval;
      window.clearIntervalCalls = 0;
      window.clearInterval = (id) => {
        window.clearIntervalCalls++;
        return originalClearInterval(id);
      };
    });

    // Reload to apply the script
    await page.reload();
    await page.clock.install();

    // Fast-forward to completion
    await page.clock.fastForward(4500); // Duration (4s) + buffer (0.5s)
    await page.clock.fastForward(1500); // Wait for exit animation (1.2s)

    // Verify the hero is visible (meaning BootSequence unmounted)
    await expect(page.locator('#hero')).toBeVisible();

    // Check if clearInterval was called
    const clearIntervalCalls = await page.evaluate(() => window.clearIntervalCalls);
    expect(clearIntervalCalls).toBeGreaterThan(0);
  });
});
