/************** 
 * To run this test
 * npx playwright test tests/forms.spec.ts 
************/

import { expect, test } from '@playwright/test';

// Forms
test('Form page should have h1', async ({ page }) => {
	await page.goto('/components/forms');
	expect(await page.textContent('h1')).toBe('Forms');
});

test('Checkbox page should have h1', async ({ page }) => {
	await page.goto('/forms/checkbox');
	expect(await page.textContent('h1')).toBe('Checkbox');
});

test('File input page should have h1', async ({ page }) => {
	await page.goto('/forms/file-input');
	expect(await page.textContent('h1')).toBe('File Input');
});

test('Floating label page should have h1', async ({ page }) => {
	await page.goto('/forms/floating-label');
	expect(await page.textContent('h1')).toBe('Floating Label');
});

test('Input page should have h1', async ({ page }) => {
	await page.goto('/forms/input-field');
	expect(await page.textContent('h1')).toBe('Input');
});

test('Radio page should have h1', async ({ page }) => {
	await page.goto('/forms/radio');
	expect(await page.textContent('h1')).toBe('Radio');
});

test('Range page should have h1', async ({ page }) => {
	await page.goto('/forms/range');
	expect(await page.textContent('h1')).toBe('Range');
});

test('Search page should have h1', async ({ page }) => {
	await page.goto('/forms/search-input');
	expect(await page.textContent('h1')).toBe('Search');
});

test('Seletct page should have h1', async ({ page }) => {
	await page.goto('/forms/select');
	expect(await page.textContent('h1')).toBe('Select');
});

test('Textarea page should have h1', async ({ page }) => {
	await page.goto('/forms/textarea');
	expect(await page.textContent('h1')).toBe('Textarea');
});

test('Toggle page should have h1', async ({ page }) => {
	await page.goto('/forms/toggle');
	expect(await page.textContent('h1')).toBe('Toggle');
});