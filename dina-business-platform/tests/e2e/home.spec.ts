import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');
    
    // Check if the page title contains expected text
    await expect(page).toHaveTitle(/Dina Business/);
    
    // Check if main heading is visible
    await expect(page.getByRole('heading', { name: /Dina Business/ })).toBeVisible();
  });

  test('should have navigation links', async ({ page }) => {
    await page.goto('/');
    
    // Check navigation links
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'About Us' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Services' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check mobile menu button is visible
    const mobileMenuButton = page.locator('button[aria-label*="menu"]').or(page.locator('svg'));
    await expect(mobileMenuButton.first()).toBeVisible();
  });
});
