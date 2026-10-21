import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('home page', async ({ page }) => {
  await expect(page).toHaveScreenshot('home.png', { fullPage: true });
});

test('header', async ({ page }) => {
  await expect(page.getByRole('banner')).toHaveScreenshot('header.png');
});
