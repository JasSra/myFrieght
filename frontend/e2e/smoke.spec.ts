import { test, expect } from '@playwright/test';

test('home renders', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /On‑Demand Prime Movers/ })).toBeVisible();
});

test('dashboard guard redirects unauthenticated', async ({ page }) => {
  await page.goto('/dashboard');
  await expect(page).toHaveURL(/login/);
});

test('login page shows button', async ({ page }) => {
  await page.goto('/login');
  await expect(page.getByRole('button', { name: /continue/i })).toBeVisible();
});
