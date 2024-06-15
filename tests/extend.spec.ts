import { expect, test } from '@playwright/test';

// flowbite-svelte-starter
test('Flowbite Svelte Starter page should have h1', async ({ page }) => {
  await page.goto('/docs/extend/flowbite-svelte-starter');
  expect(await page.textContent('h1')).toBe('Flowbite Svelte Starters');
});

// Step indicator
test('Step indicator page should have h1', async ({ page }) => {
  await page.goto('/docs/extend/step-indicator');
  expect(await page.textContent('h1')).toBe('Svelte Step Indicator');
});

// marquee
test('Marquee page should have h1', async ({ page }) => {
  await page.goto('/docs/extend/marquee');
  expect(await page.textContent('h1')).toBe('Svelte Marquee Banner - Flowbite');
});
