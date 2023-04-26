import { expect, test } from '@playwright/test';

test('index page should have h1', async ({ page }) => {
  await page.goto('/');
  expect(await page.textContent('h1 > span')).toBe('Speed up your web development with');
});

test('About page should have h1', async ({ page }) => {
  await page.goto('/docs/pages/introduction');
  expect(await page.textContent('h1')).toBe('Flowbite Svelte - UI Component Library');
});

test('Getting Started page should have h1', async ({ page }) => {
  await page.goto('/docs/pages/quickstart');
  expect(await page.textContent('h1')).toBe('Quickstart - Flowbite Svelte');
});

test('How to contribute page should have h1', async ({ page }) => {
  await page.goto('/docs/pages/how-to-contribute');
  expect(await page.textContent('h1')).toBe('How to Contribute - Flowbite Svelte');
});

test('License page should have h1', async ({ page }) => {
  await page.goto('/docs/pages/license');
  expect(await page.textContent('h1')).toBe('License - Flowbite Svelte');
});

test('Type list page should have h1', async ({ page }) => {
  await page.goto('/docs/pages/typescript');
  expect(await page.textContent('h1')).toBe('Svelte TypeScript Types - Flowbite');
});

test('Faster Compiling Speed page should have h1', async ({ page }) => {
  await page.goto('/docs/pages/compiler-speed');
  expect(await page.textContent('h1')).toBe('Svelte Compiler Speed - Flowbite');
});
