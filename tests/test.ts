import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toContain('Svelte 5 UI Lib');
});

test('button page has expected h1', async ({ page }) => {
	await page.goto('/buttons');
	expect(await page.textContent('h1')).toBe('Buttons');
});

test('cards page has expected h1', async ({ page }) => {
	await page.goto('/cards');
	expect(await page.textContent('h1')).toBe('Cards');
});

test('darkmode page has expected h1', async ({ page }) => {
	await page.goto('/darkmode');
	expect(await page.textContent('h1')).toBe('Darkmode');
});

test('dropdown page has expected h1', async ({ page }) => {
	await page.goto('/dropdown');
	expect(await page.textContent('h1')).toBe('Dropdown');
});

test('footer page has expected h1', async ({ page }) => {
	await page.goto('/footer');
	expect(await page.textContent('h1')).toBe('Footer');
});

test('navbar page has expected h1', async ({ page }) => {
	await page.goto('/navbar');
	expect(await page.textContent('h1')).toBe('Navbar');
});

test('about page has expected h1', async ({ page }) => {
	await page.goto('/pages/about');
	expect(await page.textContent('h1')).toBe('About');
});

test('sidebar page has expected h1', async ({ page }) => {
	await page.goto('/sidebar');
	expect(await page.textContent('h1')).toBe('Sidebar');
});

test('skeleton page has expected h1', async ({ page }) => {
	await page.goto('/skeleton');
	expect(await page.textContent('h1')).toBe('Skeleton');
});
