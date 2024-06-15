import { expect, test } from '@playwright/test';

test('Icons Outline page page should have h1', async ({ page }) => {
  await page.goto('/icons/outline-icons');
  expect(await page.textContent('h1')).toBe('Outline Icons - Flowbite Svelte Icons');
});

test('Icons Solid page page should have h1', async ({ page }) => {
  await page.goto('/icons/solid-icons');
  expect(await page.textContent('h1')).toBe('Solid Icons - Flowbite Svelte Icons');
});

test('Icons Svelte 4 getting started page page should have h1', async ({ page }) => {
  await page.goto('/icons/svelte-4');
  expect(await page.textContent('h1')).toBe('Svelte 4 Getting started - Flowbite Svelte Icons v1');
});

test('Icons Svelte 5 getting started page page should have h1', async ({ page }) => {
  await page.goto('/icons/svelte-5');
  expect(await page.textContent('h1')).toBe('Svelte 5 Getting started - Flowbite Svelte Icons v2');
});
