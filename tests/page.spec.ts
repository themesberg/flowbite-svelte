import { expect, test } from '@playwright/test';

test('index page should have h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1 > span')).toBe('Flowbite Svelte');
});

test('About page should have h1', async ({ page }) => {
	await page.goto('/pages/about');
	expect(await page.textContent('h1')).toBe('About Flowbite-Svelte');
});

test('Getting Started page should have h1', async ({ page }) => {
	await page.goto('/pages/getting-started');
	expect(await page.textContent('h1')).toBe('Getting Started');
});

test('How to contribute page should have h1', async ({ page }) => {
	await page.goto('/pages/how-to-contribute');
	expect(await page.textContent('h1')).toBe('How to Contribute');
});

test('License page should have h1', async ({ page }) => {
	await page.goto('/pages/license');
	expect(await page.textContent('h1')).toBe('LICENSE');
});

test('Type list page should have h1', async ({ page }) => {
	await page.goto('/pages/types');
	expect(await page.textContent('h1')).toBe('Types');
});
