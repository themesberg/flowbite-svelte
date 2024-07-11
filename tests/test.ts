import { expect, test } from '@playwright/test';

test('alet page has expected h1', async ({ page }) => {
	await page.goto('/components/alert');
	expect(await page.textContent('h1')).toContain('Alert');
});

test('avatar page has expected h1', async ({ page }) => {
	await page.goto('/components/avatar');
	expect(await page.textContent('h1')).toContain('Avatar');
});

test('badge page has expected h1', async ({ page }) => {
	await page.goto('/components/badge');
	expect(await page.textContent('h1')).toContain('Badge');
});

test('banner page has expected h1', async ({ page }) => {
	await page.goto('/components/banner');
	expect(await page.textContent('h1')).toContain('Banner');
});

test('bottom navigation page has expected h1', async ({ page }) => {
	await page.goto('/components/bottom-navigation');
	expect(await page.textContent('h1')).toContain('Bottom navigation');
});

test('breadcrumb page has expected h1', async ({ page }) => {
	await page.goto('/components/breadcrumb');
	expect(await page.textContent('h1')).toContain('Breadcrumb');
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

test('device mockup page has expected h1', async ({ page }) => {
	await page.goto('/components/device-mockup');
	expect(await page.textContent('h1')).toBe('Device mockup');
});

test('drawer page has expected h1', async ({ page }) => {
	await page.goto('/components/drawer');
	expect(await page.textContent('h1')).toContain('Drawer');
});

test('dropdown page has expected h1', async ({ page }) => {
	await page.goto('/components/dropdown');
	expect(await page.textContent('h1')).toBe('Dropdown');
});

test('footer page has expected h1', async ({ page }) => {
	await page.goto('/components/footer');
	expect(await page.textContent('h1')).toBe('Footer');
});

test('gallery page has expected h1', async ({ page }) => {
	await page.goto('/components/gallery');
	expect(await page.textContent('h1')).toContain('Gallery');
});

test('indicator page has expected h1', async ({ page }) => {
	await page.goto('/components/indicators');
	expect(await page.textContent('h1')).toContain('Indicator');
});

test('kbd page has expected h1', async ({ page }) => {
	await page.goto('/components/kbd');
	expect(await page.textContent('h1')).toContain('KBD (Keyboard)');
});

test('list-group page has expected h1', async ({ page }) => {
	await page.goto('/components/list-group');
	expect(await page.textContent('h1')).toBe('List group');
});

test('navbar page has expected h1', async ({ page }) => {
	await page.goto('/components/navbar');
	expect(await page.textContent('h1')).toBe('Navbar');
});

test('progress page has expected h1', async ({ page }) => {
	await page.goto('/components/progress');
	expect(await page.textContent('h1')).toBe('Progress bar');
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

test('tab page has expected h1', async ({ page }) => {
	await page.goto('/components/tab');
	expect(await page.textContent('h1')).toBe('Tabs');
});

test('table page has expected h1', async ({ page }) => {
	await page.goto('/components/table');
	expect(await page.textContent('h1')).toBe('Table');
});

test('toast page has expected h1', async ({ page }) => {
	await page.goto('/components/toast');
	expect(await page.textContent('h1')).toBe('Toast');
});

test('video page has expected h1', async ({ page }) => {
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

// typography

test('blockquote page has expected h1', async ({ page }) => {
	await page.goto('/typography/blockquote');
	expect(await page.textContent('h1')).toBe('Blockquote');
});

test('heading/span/mark page has expected h1', async ({ page }) => {
	await page.goto('/typography/heading');
	expect(await page.textContent('h1')).toBe('Heading, Span & Mark');
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

// plugins
test('chart page has expected h1', async ({ page }) => {
	await page.goto('/plugins/chart');
	expect(await page.textContent('h1')).toBe('Chart');
});
