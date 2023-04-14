import { expect, test } from '@playwright/test';

test('index page should have h1', async ({ page }) => {
  await page.goto('/');
  expect(await page.textContent('h1 > span')).toBe('Flowbite Svelte');
});

test('About page should have h1', async ({ page }) => {
  await page.goto('/docs/pages/about');
  expect(await page.textContent('h1')).toBe('About Flowbite Svelte');
});

test('Getting Started page should have h1', async ({ page }) => {
  await page.goto('/docs/pages/getting-started');
  expect(await page.textContent('h1')).toBe('Getting Started - Flowbite Svelte');
});

test('How to contribute page should have h1', async ({ page }) => {
  await page.goto('/docs/pages/how-to-contribute');
  expect(await page.textContent('h1')).toBe('How to Contribute - Flowbite Svelte');
});

test('License page should have h1', async ({ page }) => {
  await page.goto('/docs/pages/license');
  expect(await page.textContent('h1')).toBe('License');
});

test('Type list page should have h1', async ({ page }) => {
  await page.goto('/docs/pages/types');
  expect(await page.textContent('h1')).toBe('Types');
});

test('Faster Compiling Speed page should have h1', async ({ page }) => {
  await page.goto('/docs/pages/faster-compiling-speed');
  expect(await page.textContent('h1')).toBe('Faster Compiling Speed');
});
