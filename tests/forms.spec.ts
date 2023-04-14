/**************
 * To run this test
 * npx playwright test tests/forms.spec.ts
 ************/

import { expect, test } from '@playwright/test';

// Forms
test('Form page should have h1', async ({ page }) => {
  await page.goto('/docs/components/forms');
  expect(await page.textContent('h1')).toBe('Svelte Forms - Flowbite');
});

test('Checkbox page should have h1', async ({ page }) => {
  await page.goto('/docs/forms/checkbox');
  expect(await page.textContent('h1')).toBe('Svelte Checkbox - Flowbite');
});

test('File input page should have h1', async ({ page }) => {
  await page.goto('/docs/forms/file-input');
  expect(await page.textContent('h1')).toBe('Svelte File Input - Flowbite');
});

test('Floating label page should have h1', async ({ page }) => {
  await page.goto('/docs/forms/floating-label');
  expect(await page.textContent('h1')).toBe('Svelte Floating Label - Flowbite');
});

test('Input page should have h1', async ({ page }) => {
  await page.goto('/docs/forms/input-field');
  expect(await page.textContent('h1')).toBe('Svelte Input Fields - Flowbite');
});

test('Radio page should have h1', async ({ page }) => {
  await page.goto('/docs/forms/radio');
  expect(await page.textContent('h1')).toBe('Svelte Radio - Flowbite');
});

test('Range page should have h1', async ({ page }) => {
  await page.goto('/docs/forms/range');
  expect(await page.textContent('h1')).toBe('Svelte Range Slider - Flowbite');
});

test('Search page should have h1', async ({ page }) => {
  await page.goto('/docs/forms/search-input');
  expect(await page.textContent('h1')).toBe('Svelte Search Input - Flowbite');
});

test('Seletct page should have h1', async ({ page }) => {
  await page.goto('/docs/forms/select');
  expect(await page.textContent('h1')).toBe('Svelte Select - Flowbite');
});

test('Textarea page should have h1', async ({ page }) => {
  await page.goto('/docs/forms/textarea');
  expect(await page.textContent('h1')).toBe('Svelte Textarea - Flowbite');
});

test('Toggle page should have h1', async ({ page }) => {
  await page.goto('/docs/forms/toggle');
  expect(await page.textContent('h1')).toBe('Svelte Toggle (Switch) - Flowbite');
});
