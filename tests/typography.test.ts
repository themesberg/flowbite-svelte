import { expect, test } from '@playwright/test';

test('blockquote page has expected h1', async ({ page }) => {
  await page.goto('/typography/blockquote');
  expect(await page.textContent('h1')).toBe('Blockquote');
});

test('heading/mark page has expected h1', async ({ page }) => {
  await page.goto('/typography/heading');
  expect(await page.textContent('h1')).toBe('Heading & Mark');
});

test('hr page has expected h1', async ({ page }) => {
  await page.goto('/typography/hr');
  expect(await page.textContent('h1')).toBe('Horizontal line (HR)');
});

test('link page has expected h1', async ({ page }) => {
  await page.goto('/typography/link');
  expect(await page.textContent('h1')).toBe('Links');
});

test('list page has expected h1', async ({ page }) => {
  await page.goto('/typography/list');
  expect(await page.textContent('h1')).toBe('List');
});

test('paragraph page has expected h1', async ({ page }) => {
  await page.goto('/typography/paragraph');
  expect(await page.textContent('h1')).toBe('Paragraph');
});
