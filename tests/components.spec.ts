import { expect, test } from '@playwright/test';

// Accordion
test('Accordion page should have h1', async ({ page }) => {
	await page.goto('/components/accordion');
	expect(await page.textContent('h1')).toBe('Accordion');
});

// Alert
test('Alert page should have h1', async ({ page }) => {
	await page.goto('/components/alert');
	expect(await page.textContent('h1')).toBe('Alert');
});

// Avatar
test('Avatar page should have h1', async ({ page }) => {
	await page.goto('/components/avatar');
	expect(await page.textContent('h1')).toBe('Avatar');
});

// Badges
test('Badges page should have h1', async ({ page }) => {
	await page.goto('/components/badge');
	expect(await page.textContent('h1')).toBe('Badge');
});

// Breadcrumbs
test('Breadcrumb page should have h1', async ({ page }) => {
	await page.goto('/components/breadcrumb');
	expect(await page.textContent('h1')).toBe('Breadcrumb');
});

// Button groups
test('Button Group page should have h1', async ({ page }) => {
	await page.goto('/components/button-group');
	expect(await page.textContent('h1')).toBe('Button Group');
});

// Buttons
test('Buttons page should have h1', async ({ page }) => {
	await page.goto('/components/button');
	expect(await page.textContent('h1')).toBe('Button');
});

// Cards
test('Cards page should have h1', async ({ page }) => {
	await page.goto('/components/card');
	expect(await page.textContent('h1')).toBe('Card');
});

// Carousel
test('Carousel page should have h1', async ({ page }) => {
	await page.goto('/components/carousel');
	expect(await page.textContent('h1')).toBe('Carousel');
});

// Darkmode
test('Dark mode page should have h1', async ({ page }) => {
	await page.goto('/components/darkmode');
	expect(await page.textContent('h1')).toBe('Dark mode');
});

// Datepicker
test('Datepicker page should have h1', async ({ page }) => {
	await page.goto('/datepicker');
	expect(await page.textContent('h1')).toBe('Datepicker');
});

// Dropdown
test('Dropdown page should have h1', async ({ page }) => {
	await page.goto('/components/dropdown');
	expect(await page.textContent('h1')).toBe('Dropdown');
});

// Footer
test('Footer index page should have h1', async ({ page }) => {
	await page.goto('/components/footer');
	expect(await page.textContent('h1')).toBe('Footer');
});

// Kbd
test('Kbd group page should have h1', async ({ page }) => {
	await page.goto('/components/kbd');
	expect(await page.textContent('h1')).toBe('KBD (Keyboard)');
});

// List group
test('List group page should have h1', async ({ page }) => {
	await page.goto('/components/list-group');
	expect(await page.textContent('h1')).toBe('List Group');
});

// Modals
test('Modals page should have h1', async ({ page }) => {
	await page.goto('/components/modal');
	expect(await page.textContent('h1')).toBe('Modal');
});

// Navbar
test('Navbar page should have h1', async ({ page }) => {
	await page.goto('/components/navbar');
	expect(await page.textContent('h1')).toBe('Navbar');
});

// Pagination
test('Paginations page should have h1', async ({ page }) => {
	await page.goto('/components/pagination');
	expect(await page.textContent('h1')).toBe('Pagination');
});

// Popover
test('Popover page should have h1', async ({ page }) => {
	await page.goto('/components/popover');
	expect(await page.textContent('h1')).toBe('Popover');
});

// Progress bar
test('Progress bar page should have h1', async ({ page }) => {
	await page.goto('/components/progress');
	expect(await page.textContent('h1')).toBe('Progress');
});

// Ratings
test('Rating page should have h1', async ({ page }) => {
	await page.goto('/components/rating');
	expect(await page.textContent('h1')).toBe('Rating');
});

// Sidebar
test('Sidebar page should have h1', async ({ page }) => {
	await page.goto('/components/sidebar');
	expect(await page.textContent('h1')).toBe('Sidebar');
});

// Skeleton
test('Skeleton page should have h1', async ({ page }) => {
	await page.goto('/components/skeleton');
	expect(await page.textContent('h1')).toBe('Skeleton');
});

// Spinner
test('Spinner page should have h1', async ({ page }) => {
	await page.goto('/components/spinner');
	expect(await page.textContent('h1')).toBe('Spinner');
});

// Tables
test('Table page should have h1', async ({ page }) => {
	await page.goto('/components/table');
	expect(await page.textContent('h1')).toBe('Table');
});

// Tabs
test('Tab page should have h1', async ({ page }) => {
	await page.goto('/components/tab');
	expect(await page.textContent('h1')).toBe('Tab');
});

// Timeline
test('Timeline page should have h1', async ({ page }) => {
	await page.goto('/components/timeline');
	expect(await page.textContent('h1')).toBe('Timeline');
});

// Toasts
test('Toast page should have h1', async ({ page }) => {
	await page.goto('/components/toast');
	expect(await page.textContent('h1')).toBe('Toast');
});

// Tooltips
test('Tooltip page should have h1', async ({ page }) => {
	await page.goto('/components/tooltip');
	expect(await page.textContent('h1')).toBe('Tooltip');
});

