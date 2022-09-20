/************** 
 * To run this test
 * npx playwright test tests/utilities.spec.ts 
************/

import { expect, test } from '@playwright/test';

// Utilities
test('CloseButton page should have h1', async ({ page }) => {
  await page.goto('/utilities/closebutton');
  expect(await page.textContent('h1')).toBe('Svelte Close Button - Flowbite');
});

test('Label page should have h1', async ({ page }) => {
  await page.goto('/utilities/label');
  expect(await page.textContent('h1')).toBe('Svelte Label - Flowbite');
});
  
test('Toolbar page should have h1', async ({ page }) => {
  await page.goto('/utilities/toolbar');
  expect(await page.textContent('h1')).toBe('Svelte Toolbar - Flowbite');
});