import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('pricing plans', async ({ page }) => {
  await expect(page.locator('#pricing')).toHaveScreenshot();
});

test('sign up', async ({ page }) => {
  await expect(page.getByRole('region', { name: 'Start writing today' })).toHaveScreenshot('signup.png');
});
