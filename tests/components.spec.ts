import { expect, test } from '@playwright/test';

// Accordion
test('Accordion page should have h1', async ({ page }) => {
	await page.goto('/components/accordion');
	expect(await page.textContent('h1')).toBe('Svelte Accordion - Flowbite');
});

// Alert
test('Alert page should have h1', async ({ page }) => {
	await page.goto('/components/alert');
	expect(await page.textContent('h1')).toBe('Svelte Alert - Flowbite');
});

// Avatar
test('Avatar page should have h1', async ({ page }) => {
	await page.goto('/components/avatar');
	expect(await page.textContent('h1')).toBe('Svelte Avatar - Flowbite');
});

// Badges
test('Badges page should have h1', async ({ page }) => {
	await page.goto('/components/badge');
	expect(await page.textContent('h1')).toBe('Svelte Badge - Flowbite');
});

// Breadcrumbs
test('Breadcrumb page should have h1', async ({ page }) => {
	await page.goto('/components/breadcrumb');
	expect(await page.textContent('h1')).toBe('Svelte Breadcrumb - Flowbite');
});

// Button groups
test('Button Group page should have h1', async ({ page }) => {
	await page.goto('/components/button-group');
	expect(await page.textContent('h1')).toBe('Svelte Button Group - Flowbite');
});

// Buttons
test('Buttons page should have h1', async ({ page }) => {
	await page.goto('/components/button');
	expect(await page.textContent('h1')).toBe('Svelte Buttons - Flowbite');
});

// Cards
test('Cards page should have h1', async ({ page }) => {
	await page.goto('/components/card');
	expect(await page.textContent('h1')).toBe('Svelte Cards - Flowbite');
});

// Carousel
test('Carousel page should have h1', async ({ page }) => {
	await page.goto('/components/carousel');
	expect(await page.textContent('h1')).toBe('Svelte Carousel - Flowbite');
});

// Darkmode
test('Dark mode page should have h1', async ({ page }) => {
	await page.goto('/components/darkmode');
	expect(await page.textContent('h1')).toBe('Svelte Dark Mode - Flowbite');
});

// Datepicker
test('Datepicker page should have h1', async ({ page }) => {
	await page.goto('/datepicker');
	expect(await page.textContent('h1')).toBe('Svelte Datepicker - Flowbite');
});

// Dropdown
test('Dropdown page should have h1', async ({ page }) => {
	await page.goto('/components/dropdown');
	expect(await page.textContent('h1')).toBe('Svelte Dropdown - Flowbite');
});

// Footer
test('Footer index page should have h1', async ({ page }) => {
	await page.goto('/components/footer');
	expect(await page.textContent('h1')).toBe('Svelte Footer - Flowbite');
});

// Kbd
test('Kbd group page should have h1', async ({ page }) => {
	await page.goto('/components/kbd');
	expect(await page.textContent('h1')).toBe('Svelte KBD (Keyboard) - Flowbite');
});

// List group
test('List group page should have h1', async ({ page }) => {
	await page.goto('/components/list-group');
	expect(await page.textContent('h1')).toBe('Svelte List Group - Flowbite');
});

// Modals
test('Modals page should have h1', async ({ page }) => {
	await page.goto('/components/modal');
	expect(await page.textContent('h1')).toBe('Svelte Modal - Flowbite');
});

// Navbar
test('Navbar page should have h1', async ({ page }) => {
	await page.goto('/components/navbar');
	expect(await page.textContent('h1')).toBe('Svelte Navbar - Flowbite');
});

// Pagination
test('Paginations page should have h1', async ({ page }) => {
	await page.goto('/components/pagination');
	expect(await page.textContent('h1')).toBe('Svelte Pagination - Flowbite');
});

// Popover
test('Popover page should have h1', async ({ page }) => {
	await page.goto('/components/popover');
	expect(await page.textContent('h1')).toBe('Svelte Popover - Flowbite');
});

// Progress bar
test('Progress bar page should have h1', async ({ page }) => {
	await page.goto('/components/progress');
	expect(await page.textContent('h1')).toBe('Svelte Progress Bar - Flowbite');
});

// Ratings
test('Rating page should have h1', async ({ page }) => {
	await page.goto('/components/rating');
	expect(await page.textContent('h1')).toBe('Svelte Rating - Flowbite');
});

// Sidebar
test('Sidebar page should have h1', async ({ page }) => {
	await page.goto('/components/sidebar');
	expect(await page.textContent('h1')).toBe('Svelte Sidebar - Flowbite');
});

// Skeleton
test('Skeleton page should have h1', async ({ page }) => {
	await page.goto('/components/skeleton');
	expect(await page.textContent('h1')).toBe('Svelte Skeleton - Flowbite');
});

// Spinner
test('Spinner page should have h1', async ({ page }) => {
	await page.goto('/components/spinner');
	expect(await page.textContent('h1')).toBe('Svelte Spinner - Flowbite');
});

// Indicators
test('Step indicator page should have h1', async ({ page }) => {
	await page.goto('/components/indicators');
	expect(await page.textContent('h1')).toBe('Svelte Indicators - Flowbite');
});

// Tables
test('Table page should have h1', async ({ page }) => {
	await page.goto('/components/table');
	expect(await page.textContent('h1')).toBe('Svelte Tables - Flowbite');
});

// Tabs
test('Tab page should have h1', async ({ page }) => {
	await page.goto('/components/tab');
	expect(await page.textContent('h1')).toBe('Svelte Tabs - Flowbite');
});

// Timeline
test('Timeline page should have h1', async ({ page }) => {
	await page.goto('/components/timeline');
	expect(await page.textContent('h1')).toBe('Svelte Timeline - Flowbite');
});

// Toasts
test('Toast page should have h1', async ({ page }) => {
	await page.goto('/components/toast');
	expect(await page.textContent('h1')).toBe('Svelte Toasts - Flowbite');
});

// Tooltips
test('Tooltip page should have h1', async ({ page }) => {
	await page.goto('/components/tooltip');
	expect(await page.textContent('h1')).toBe('Svelte Tooltip - Flowbite');
});

