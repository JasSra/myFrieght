import { test, expect } from '@playwright/test';

test('home renders', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /SE QLD Freight Logistics/ })).toBeVisible();
});

test('dashboard opens in mock design mode', async ({ page }) => {
  await page.goto('/dashboard');
  await expect(page).toHaveURL(/dashboard/);
  await expect(page.getByRole('heading', { name: /Back office/i })).toBeVisible();
});

test('login page shows button', async ({ page }) => {
  await page.goto('/login');
  await expect(page.getByRole('button', { name: /continue/i })).toBeVisible();
});
