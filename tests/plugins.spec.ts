import { expect, test } from '@playwright/test';

// Charts
test('Charts page should have h1', async ({ page }) => {
  await page.goto('/docs/plugins/charts');
  expect(await page.textContent('h1')).toBe('Svelte Charts - Flowbite');
});