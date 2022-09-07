/************** 
 * To run this test
 * npx playwright test tests/typography.spec.ts 
************/

import { expect, test } from '@playwright/test';

// Typography
test('Typography page should have h1', async ({ page }) => {
	await page.goto('/components/typography');
	expect(await page.textContent('h1')).toBe('Typography');
});

test('Blockquote page should have h1', async ({ page }) => {
	await page.goto('/typography/blockquote');
	expect(await page.textContent('h1')).toBe('Blockquote');
});

test('Headings page should have h1', async ({ page }) => {
	await page.goto('/typography/heading');
	expect(await page.textContent('h1')).toBe('Heading');
});

test('HR page should have h1', async ({ page }) => {
	await page.goto('/typography/hr');
	expect(await page.textContent('h1')).toBe('Horizontal Line (HR)');
});

test('Images page should have h1', async ({ page }) => {
	await page.goto('/typography/image');
	expect(await page.textContent('h1')).toBe('Image');
});

test('Links page should have h1', async ({ page }) => {
	await page.goto('/typography/link');
	expect(await page.textContent('h1')).toBe('Link');
});

test('Lists page should have h1', async ({ page }) => {
	await page.goto('/typography/list');
	expect(await page.textContent('h1')).toBe('List');
});

test('Paragraphs page should have h1', async ({ page }) => {
	await page.goto('/typography/paragraph');
	expect(await page.textContent('h1')).toBe('Paragraph');
});

test('Text page should have h1', async ({ page }) => {
	await page.goto('/typography/text');
	expect(await page.textContent('h1')).toBe('Text');
});
