/**************
 * To run this test
 * npx playwright test tests/typography.spec.ts
 ************/

import { expect, test } from '@playwright/test';

// Typography
test('Typography page should have h1', async ({ page }) => {
  await page.goto('/docs/components/typography');
  expect(await page.textContent('h1')).toBe('Svelte Typography - Flowbite');
});

test('Blockquote page should have h1', async ({ page }) => {
  await page.goto('/docs/typography/blockquote');
  expect(await page.textContent('h1')).toBe('Svelte Blockquote - Flowbite');
});

test('Headings page should have h1', async ({ page }) => {
  await page.goto('/docs/typography/heading');
  expect(await page.textContent('h1')).toBe('Svelte Heading - Flowbite');
});

test('HR page should have h1', async ({ page }) => {
  await page.goto('/docs/typography/hr');
  expect(await page.textContent('h1')).toBe('Svelte Horizontal Line (HR) - Flowbite');
});

test('Images page should have h1', async ({ page }) => {
  await page.goto('/docs/typography/image');
  expect(await page.textContent('h1')).toBe('Svelte Images - Flowbite');
});

test('Links page should have h1', async ({ page }) => {
  await page.goto('/docs/typography/link');
  expect(await page.textContent('h1')).toBe('Svelte Links - Flowbite');
});

test('Lists page should have h1', async ({ page }) => {
  await page.goto('/docs/typography/list');
  expect(await page.textContent('h1')).toBe('Svelte Lists - Flowbite');
});

test('Paragraphs page should have h1', async ({ page }) => {
  await page.goto('/docs/typography/paragraph');
  expect(await page.textContent('h1')).toBe('Svelte Paragraph - Flowbite');
});

test('Text page should have h1', async ({ page }) => {
  await page.goto('/docs/typography/text');
  expect(await page.textContent('h1')).toBe('Svelte Text - Flowbite');
});
