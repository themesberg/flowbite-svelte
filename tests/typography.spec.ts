/************** 
 * To run this test
 * npx playwright test tests/typography.spec.ts 
************/

import { expect, test } from '@playwright/test';

// Typography
test('Typography page should have h1', async ({ page }) => {
	await page.goto('/typography');
	expect(await page.textContent('h1')).toBe('Typography');
});

test('Blockquote page should have h1', async ({ page }) => {
	await page.goto('/typography/blockquote');
	expect(await page.textContent('h1')).toBe('Blockquote');
});

test('Headings page should have h1', async ({ page }) => {
	await page.goto('/typography/headings');
	expect(await page.textContent('h1')).toBe('Headings');
});

test('HR page should have h1', async ({ page }) => {
	await page.goto('/typography/hr');
	expect(await page.textContent('h1')).toBe('Horizontal Line (HR)');
});

test('Images page should have h1', async ({ page }) => {
	await page.goto('/typography/images');
	expect(await page.textContent('h1')).toBe('Images');
});

test('Links page should have h1', async ({ page }) => {
	await page.goto('/typography/links');
	expect(await page.textContent('h1')).toBe('Links');
});

test('Lists page should have h1', async ({ page }) => {
	await page.goto('/typography/lists');
	expect(await page.textContent('h1')).toBe('Lists');
});

test('Paragraphs page should have h1', async ({ page }) => {
	await page.goto('/typography/paragraphs');
	expect(await page.textContent('h1')).toBe('Paragraphs');
});

test('Text page should have h1', async ({ page }) => {
	await page.goto('/typography/text');
	expect(await page.textContent('h1')).toBe('Text');
});
