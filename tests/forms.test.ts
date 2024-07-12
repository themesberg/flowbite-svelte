import { expect, test } from '@playwright/test';

test('checkbox page has expected h1', async ({ page }) => {
	await page.goto('/forms/checkbox');
	expect(await page.textContent('h1')).toBe('Checkbox');
});

test('floating label page has expected h1', async ({ page }) => {
	await page.goto('/forms/floating-label');
	expect(await page.textContent('h1')).toBe('Floating label');
});

test('radio/helper/radiobutton page has expected h1', async ({ page }) => {
	await page.goto('/forms/radio');
	expect(await page.textContent('h1')).toBe('Radio, Helper, and RadioButton');
});

test('range page has expected h1', async ({ page }) => {
	await page.goto('/forms/range');
	expect(await page.textContent('h1')).toBe('Range');
});

test('select page has expected h1', async ({ page }) => {
	await page.goto('/forms/select');
	expect(await page.textContent('h1')).toBe('Select');
});

test('toggle page has expected h1', async ({ page }) => {
	await page.goto('/forms/toggle');
	expect(await page.textContent('h1')).toBe('Toggle');
});

test('textarea page has expected h1', async ({ page }) => {
	await page.goto('/forms/textarea');
	expect(await page.textContent('h1')).toBe('Textarea');
});

