import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toContain('Svelte 5 UI Lib');
});

test('avatar page has expected h1', async ({ page }) => {
	await page.goto('/components/avatar');
	expect(await page.textContent('h1')).toContain('Avatar');
});

test('button page has expected h1', async ({ page }) => {
	await page.goto('/components/button');
	expect(await page.textContent('h1')).toBe('Buttons');
});

test('button group page has expected h1', async ({ page }) => {
	await page.goto('/components/button-group');
	expect(await page.textContent('h1')).toBe('Button group');
});

test('cards page has expected h1', async ({ page }) => {
	await page.goto('/components/card');
	expect(await page.textContent('h1')).toBe('Cards');
});

test('darkmode page has expected h1', async ({ page }) => {
	await page.goto('/components/darkmode');
	expect(await page.textContent('h1')).toBe('Darkmode');
});

test('dropdown page has expected h1', async ({ page }) => {
	await page.goto('/components/dropdown');
	expect(await page.textContent('h1')).toBe('Dropdown');
});

test('footer page has expected h1', async ({ page }) => {
	await page.goto('/components/footer');
	expect(await page.textContent('h1')).toBe('Footer');
});

test('list-group page has expected h1', async ({ page }) => {
	await page.goto('/components/list-group');
	expect(await page.textContent('h1')).toBe('List group');
});


test('navbar page has expected h1', async ({ page }) => {
	await page.goto('/components/navbar');
	expect(await page.textContent('h1')).toBe('Navbar');
});

test('rating page has expected h1', async ({ page }) => {
	await page.goto('/components/rating');
	expect(await page.textContent('h1')).toBe('Rating');
});

test('sidebar page has expected h1', async ({ page }) => {
	await page.goto('/components/sidebar');
	expect(await page.textContent('h1')).toBe('Sidebar');
});

test('skeleton page has expected h1', async ({ page }) => {
	await page.goto('/components/skeleton');
	expect(await page.textContent('h1')).toBe('Skeleton');
});

test('spinner page has expected h1', async ({ page }) => {
	await page.goto('/components/spinner');
	expect(await page.textContent('h1')).toBe('Spinner');
});

// video
test('Video page has expected h1', async ({ page }) => {
	await page.goto('/components/video');
	expect(await page.textContent('h1')).toBe('Video');
});
// Pages
test('about page has expected h1', async ({ page }) => {
	await page.goto('/pages/about');
	expect(await page.textContent('h1')).toBe('About');
});

// Forms
test('checkbox page has expected h1', async ({ page }) => {
	await page.goto('/forms/checkbox');
	expect(await page.textContent('h1')).toBe('Checkbox');
});

test('floating label page has expected h1', async ({ page }) => {
	await page.goto('/forms/floating-label');
	expect(await page.textContent('h1')).toBe('Floating label');
});

test('range page has expected h1', async ({ page }) => {
	await page.goto('/forms/range');
	expect(await page.textContent('h1')).toBe('Range');
});

test('radio/helper/radiobutton page has expected h1', async ({ page }) => {
	await page.goto('/forms/radio');
	expect(await page.textContent('h1')).toBe('Radio, Helper, and RadioButton');
});

test('select page has expected h1', async ({ page }) => {
	await page.goto('/forms/select');
	expect(await page.textContent('h1')).toBe('Select');
});

test('toggle page has expected h1', async ({ page }) => {
	await page.goto('/forms/toggle');
	expect(await page.textContent('h1')).toBe('Toggle');
});

// typography

test('Blockquote page has expected h1', async ({ page }) => {
	await page.goto('/typography/blockquote');
	expect(await page.textContent('h1')).toBe('Blockquote');
});

test('Heading/Span/Mark page has expected h1', async ({ page }) => {
	await page.goto('/typography/heading');
	expect(await page.textContent('h1')).toBe('Heading, Span & Mark');
});

test('HR page has expected h1', async ({ page }) => {
	await page.goto('/typography/hr');
	expect(await page.textContent('h1')).toBe('Horizontal line (HR)');
});

test('Link page has expected h1', async ({ page }) => {
	await page.goto('/typography/link');
	expect(await page.textContent('h1')).toBe('Links');
});

test('List page has expected h1', async ({ page }) => {
	await page.goto('/typography/list');
	expect(await page.textContent('h1')).toBe('List');
});

test('Paragraph page has expected h1', async ({ page }) => {
	await page.goto('/typography/paragraph');
	expect(await page.textContent('h1')).toBe('Paragraph');
});

