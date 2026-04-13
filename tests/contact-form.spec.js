import { test, expect } from '@playwright/test';

/**
 * Contact Form E2E Test Suite
 * Verifies the structural integrity and environment variable integration of the Contact form.
 */
test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the app (using the base path as per Vite configuration)
    await page.goto('http://localhost:5173/');

    // Wait for the BootSequence to complete and ensure the hero section is visible
    // We wait for the #hero element specifically to avoid arbitrary timeouts
    await expect(page.locator('#hero')).toBeVisible({ timeout: 10000 });

    // Scroll to contact section to ensure it's loaded and interactive
    const contactSection = page.locator('#contact');
    await contactSection.scrollIntoViewIfNeeded();
    await expect(contactSection).toBeVisible();
  });

  test('should have the correct form action with environment variable', async ({ page }) => {
    const form = page.locator('#contact form');

    // Verify form submission endpoint and method.
    // The action attribute should correctly incorporate the VITE_FORMSUBMIT_TOKEN.
    const action = await form.getAttribute('action');
    expect(action).toMatch(/^https:\/\/formsubmit\.co\/.+/);
    await expect(form).toHaveAttribute('method', 'POST');
  });

  test('should have hidden/honeypot fields correctly configured', async ({ page }) => {
    const form = page.locator('#contact form');

    // Honeypot Field: Verifies that the field is present and hidden from users
    const honey = form.locator('input[name="_honey"]');
    await expect(honey).toHaveAttribute('type', 'text');
    await expect(honey).toHaveCSS('display', 'none');

    // Captcha Configuration: Verifies CAPTCHA is disabled
    const captcha = form.locator('input[name="_captcha"]');
    await expect(captcha).toHaveAttribute('type', 'hidden');
    await expect(captcha).toHaveValue('false');

    // Template Configuration: Verifies the 'box' email layout is used
    const template = form.locator('input[name="_template"]');
    await expect(template).toHaveAttribute('type', 'hidden');
    await expect(template).toHaveValue('box');
  });

  test('should have all required and optional input fields with correct attributes', async ({ page }) => {
    const form = page.locator('#contact form');

    // Name Field: Should be required
    const nameInput = form.locator('input[name="name"]');
    await expect(nameInput).toBeVisible();
    await expect(nameInput).toHaveAttribute('required', '');

    // Email Field: Should be a required email type
    const emailInput = form.locator('input[name="email"]');
    await expect(emailInput).toBeVisible();
    await expect(emailInput).toHaveAttribute('type', 'email');
    await expect(emailInput).toHaveAttribute('required', '');

    // Phone Field: Should be an optional tel type
    const phoneInput = form.locator('input[name="phone"]');
    await expect(phoneInput).toBeVisible();
    await expect(phoneInput).toHaveAttribute('type', 'tel');
    await expect(phoneInput).not.toHaveAttribute('required', '');

    // Message Field: Should be a required textarea
    const messageInput = form.locator('textarea[name="message"]');
    await expect(messageInput).toBeVisible();
    await expect(messageInput).toHaveAttribute('required', '');
  });
});
