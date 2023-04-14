import { expect, test } from '@playwright/test';

test('Snapshot page should have h1', async ({ page }) => {
  await page.goto('/docs/examples/snapshot');
  expect(await page.textContent('h1')).toBe('Svelte Snapshot - Flowbite');
});

test('Responsive Sidebar Layout page should have h1', async ({ page }) => {
  await page.goto('/docs/examples/sidebar-layout');
  expect(await page.textContent('h1')).toBe('Responsive Sidebar Layout');
});
