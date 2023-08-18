import { expect, test } from '@playwright/test';

test('Charts page should have h1', async ({ page }) => {
  await page.goto('/docs/charts/chart');
  expect(await page.textContent('h1')).toBe('Svelte Charts - Flowbite');
});
