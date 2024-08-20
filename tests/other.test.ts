import { expect, test } from '@playwright/test';

// plugins
test('chart page has expected h1', async ({ page }) => {
  await page.goto('/plugins/chart');
  expect(await page.textContent('h1')).toBe('Chart');
});

// Pages
test('about page has expected h1', async ({ page }) => {
  await page.goto('/pages/about');
  expect(await page.textContent('h1')).toBe('About');
});
