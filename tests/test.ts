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

// Accordion
test('Accordion page should have h1', async ({ page }) => {
	await page.goto('/accordions');
	expect(await page.textContent('h1')).toBe('Accordion');
});

// Alert
test('Alert page should have h1', async ({ page }) => {
	await page.goto('/alerts');
	expect(await page.textContent('h1')).toBe('Alert');
});

// Avatar
test('Avatar page should have h1', async ({ page }) => {
	await page.goto('/avatar');
	expect(await page.textContent('h1')).toBe('Avatar');
});

// Badges
test('Badges page should have h1', async ({ page }) => {
	await page.goto('/badges');
	expect(await page.textContent('h1')).toBe('Badges');
});

// Breadcrumbs
test('Breadcrumb page should have h1', async ({ page }) => {
	await page.goto('/breadcrumbs/');
	expect(await page.textContent('h1')).toBe('Breadcrumb');
});

// Button groups
test('Button Group page should have h1', async ({ page }) => {
	await page.goto('/button-groups');
	expect(await page.textContent('h1')).toBe('Button group');
});

// Buttons
test('Buttons page should have h1', async ({ page }) => {
	await page.goto('/buttons/');
	expect(await page.textContent('h1')).toBe('Button');
});

// Cards
test('Card page should have h1', async ({ page }) => {
	await page.goto('/cards');
	expect(await page.textContent('h1')).toBe('Card');
});

// Carousel
test('Carousel page should have h1', async ({ page }) => {
	await page.goto('/carousels/');
	expect(await page.textContent('h1')).toBe('Carousel');
});

// Darkmode
test('Dark mode page should have h1', async ({ page }) => {
	await page.goto('/darkmode');
	expect(await page.textContent('h1')).toBe('Dark mode');
});

// Datepicker
test('Datepicker page should have h1', async ({ page }) => {
	await page.goto('/datepicker');
	expect(await page.textContent('h1')).toBe('Datepicker');
});

// Dropdown
test('Dropdown page should have h1', async ({ page }) => {
	await page.goto('/dropdowns/');
	expect(await page.textContent('h1')).toBe('Dropdown');
});

// Footer
test('Footer index page should have h1', async ({ page }) => {
	await page.goto('/footer');
	expect(await page.textContent('h1')).toBe('Footer');
});

// Icons
test('Icon page should have h1', async ({ page }) => {
	await page.goto('/icons');
	expect(await page.textContent('h1')).toBe('Icons');
});

// Kbd
test('Kbd group page should have h1', async ({ page }) => {
	await page.goto('/kbd');
	expect(await page.textContent('h1')).toBe('Tailwind CSS KBD (Keyboard)');
});

// List group
test('List group page should have h1', async ({ page }) => {
	await page.goto('/list-group');
	expect(await page.textContent('h1')).toBe('List group');
});

// Modals
test('Modals page should have h1', async ({ page }) => {
	await page.goto('/modals');
	expect(await page.textContent('h1')).toBe('Modals');
});

// Navbar
test('Navbar page should have h1', async ({ page }) => {
	await page.goto('/navbar');
	expect(await page.textContent('h1')).toBe('Navbar');
});

// Pagination
test('Pagination page should have h1', async ({ page }) => {
	await page.goto('/paginations');
	expect(await page.textContent('h1')).toBe('Pagination');
});

// Popover
test('Popover page should have h1', async ({ page }) => {
	await page.goto('/popover');
	expect(await page.textContent('h1')).toBe('Popover');
});

// Progress bar
test('Progress bar page should have h1', async ({ page }) => {
	await page.goto('/progressbars');
	expect(await page.textContent('h1')).toBe('Progress');
});

// Ratings
test('Rating page should have h1', async ({ page }) => {
	await page.goto('/ratings');
	expect(await page.textContent('h1')).toBe('Rating');
});

// Sidebar
test('Sidebar page should have h1', async ({ page }) => {
	await page.goto('/sidebars');
	expect(await page.textContent('h1')).toBe('Sidebar');
});

// Skeleton
test('Skeleton page should have h1', async ({ page }) => {
	await page.goto('/skeleton');
	expect(await page.textContent('h1')).toBe('Tailwind CSS Skeleton');
});

// Spinner
test('Spinner page should have h1', async ({ page }) => {
	await page.goto('/spinners');
	expect(await page.textContent('h1')).toBe('Spinner');
});

// Tables
test('Table page should have h1', async ({ page }) => {
	await page.goto('/tables');
	expect(await page.textContent('h1')).toBe('Tables');
});

// Tabs
test('Tab page should have h1', async ({ page }) => {
	await page.goto('/tabs');
	expect(await page.textContent('h1')).toBe('Tabs');
});

// Timeline
test('Timeline page should have h1', async ({ page }) => {
	await page.goto('/timelines');
	expect(await page.textContent('h1')).toBe('Timeline');
});

// Toasts
test('Toast page should have h1', async ({ page }) => {
	await page.goto('/toasts');
	expect(await page.textContent('h1')).toBe('Toast');
});

// Tooltips
test('Tooltip page should have h1', async ({ page }) => {
	await page.goto('/tooltips');
	expect(await page.textContent('h1')).toBe('Tooltips');
});

