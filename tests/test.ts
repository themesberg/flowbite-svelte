import { expect, test } from '@playwright/test';

test('index page should have h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1 > span')).toBe('Flowbite Svelte');
});

test('About page should have h1', async ({ page }) => {
	await page.goto('/pages/about');
	expect(await page.textContent('h1')).toBe('About Flowbite-Svelte');
});

test('CLI page should have h1', async ({ page }) => {
	await page.goto('/pages/cli');
	expect(await page.textContent('h1')).toBe('Flowbite-Svelte-CLI (fsc)');
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
test('Accordion main page should have h1', async ({ page }) => {
	await page.goto('/accordions');
	expect(await page.textContent('h1')).toBe('Accordion Components');
});

test('Accordion default page should have h1', async ({ page }) => {
	await page.goto('/accordions/default');
	expect(await page.textContent('h1')).toBe('Accordion');
});

test('Icon Accordion page should have h1', async ({ page }) => {
	await page.goto('/accordions/icon-accordion');
	expect(await page.textContent('h1')).toBe('Icon Accordion');
});

// Alert
test('Alert main page should have h1', async ({ page }) => {
	await page.goto('/alerts');
	expect(await page.textContent('h1')).toBe('Alert');
});

// Avatar
test('Avatar page should have h1', async ({ page }) => {
	await page.goto('/avatar');
	expect(await page.textContent('h1')).toBe('Avatar');
});

// Badges
test('Badges main page should have h1', async ({ page }) => {
	await page.goto('/badges');
	expect(await page.textContent('h1')).toBe('Badges');
});

// Breadcrumbs
test('Breadcrumb page should have h1', async ({ page }) => {
	await page.goto('/breadcrumbs/');
	expect(await page.textContent('h1')).toBe('Breadcrumb');
});

// Button groups
test('Button Group main page should have h1', async ({ page }) => {
	await page.goto('/button-groups');
	expect(await page.textContent('h1')).toBe('Button group');
});

// Buttons
test('Buttons main page should have h1', async ({ page }) => {
	await page.goto('/buttons/');
	expect(await page.textContent('h1')).toBe('Buttons');
});

// Cards
test('Card main page should have h1', async ({ page }) => {
	await page.goto('/cards');
	expect(await page.textContent('h1')).toBe('Card Components');
});

test('Card page should have h1', async ({ page }) => {
	await page.goto('/cards/card');
	expect(await page.textContent('h1')).toBe('Card');
});

test('CTA Card page should have h1', async ({ page }) => {
	await page.goto('/cards/cta');
	expect(await page.textContent('h1')).toBe('CTA Card');
});

test('Ecommerce Card page should have h1', async ({ page }) => {
	await page.goto('/cards/ecommerce');
	expect(await page.textContent('h1')).toBe('Ecommerce Card');
});

test('Horizontal Card page should have h1', async ({ page }) => {
	await page.goto('/cards/horizontal');
	expect(await page.textContent('h1')).toBe('Horizontal Card');
});

test('Interactive Card page should have h1', async ({ page }) => {
	await page.goto('/cards/interactive');
	expect(await page.textContent('h1')).toBe('Interactive Card');
});

test('Card with list page should have h1', async ({ page }) => {
	await page.goto('/cards/list');
	expect(await page.textContent('h1')).toBe('Card with List');
});

test('Sign In Card page should have h1', async ({ page }) => {
	await page.goto('/cards/signin');
	expect(await page.textContent('h1')).toBe('Sign In Card');
});

// Carousel
test('Carousel main page should have h1', async ({ page }) => {
	await page.goto('/carousels/');
	expect(await page.textContent('h1')).toBe('Carousel Components');
});

test('Carousel default page should have h1', async ({ page }) => {
	await page.goto('/carousels/default');
	expect(await page.textContent('h1')).toBe('Carousel');
});

test('Carousel transition page should have h1', async ({ page }) => {
	await page.goto('/carousels/transition');
	expect(await page.textContent('h1')).toBe('Carousel transition');
});

// Darkmode
test('Dark mode page should have h1', async ({ page }) => {
	await page.goto('/darkmode');
	expect(await page.textContent('h1')).toBe('Dark mode');
});

// Dropdown
test('Dropdown main page should have h1', async ({ page }) => {
	await page.goto('/dropdowns/');
	expect(await page.textContent('h1')).toBe('Dropdown');
});

// Footer
test('Footer index page should have h1', async ({ page }) => {
	await page.goto('/footer');
	expect(await page.textContent('h1')).toBe('Footer');
});

// Forms
test('Form page should have h1', async ({ page }) => {
	await page.goto('/forms');
	expect(await page.textContent('h1')).toBe('Form Components');
});

test('Checkbox page should have h1', async ({ page }) => {
	await page.goto('/forms/checkbox');
	expect(await page.textContent('h1')).toBe('Checkbox Components');
});

test('File input page should have h1', async ({ page }) => {
	await page.goto('/forms/file-input');
	expect(await page.textContent('h1')).toBe('File Components');
});

test('Floating label page should have h1', async ({ page }) => {
	await page.goto('/forms/floating-label');
	expect(await page.textContent('h1')).toBe('Floating label Components');
});

test('Input page should have h1', async ({ page }) => {
	await page.goto('/forms/input-field');
	expect(await page.textContent('h1')).toBe('Input Components');
});

test('Radio page should have h1', async ({ page }) => {
	await page.goto('/forms/radio');
	expect(await page.textContent('h1')).toBe('Radio Components');
});

test('Range page should have h1', async ({ page }) => {
	await page.goto('/forms/range');
	expect(await page.textContent('h1')).toBe('Range Components');
});

test('Search page should have h1', async ({ page }) => {
	await page.goto('/forms/search-input');
	expect(await page.textContent('h1')).toBe('Search Components');
});

test('Seletct page should have h1', async ({ page }) => {
	await page.goto('/forms/select');
	expect(await page.textContent('h1')).toBe('Select Components');
});

test('Textarea page should have h1', async ({ page }) => {
	await page.goto('/forms/textarea');
	expect(await page.textContent('h1')).toBe('Textarea Components');
});

test('Toggle page should have h1', async ({ page }) => {
	await page.goto('/forms/toggle');
	expect(await page.textContent('h1')).toBe('Toggle Components');
});


// Icons
test('Icon main page should have h1', async ({ page }) => {
	await page.goto('/icons');
	expect(await page.textContent('h1')).toBe('Icons');
});

// List group
test('List group page should have h1', async ({ page }) => {
	await page.goto('/list-group');
	expect(await page.textContent('h1')).toBe('List group');
});

// Modals
test('Modal main page should have h1', async ({ page }) => {
	await page.goto('/modals');
	expect(await page.textContent('h1')).toBe('Modal Components');
});

test('All Modals page should have h1', async ({ page }) => {
	await page.goto('/modals/all-modals');
	expect(await page.textContent('h1')).toBe('All Modals');
});

test('Small Modals page should have h1', async ({ page }) => {
	await page.goto('/modals/small');
	expect(await page.textContent('h1')).toBe('Small Modals');
});

test('Medium Modals page should have h1', async ({ page }) => {
	await page.goto('/modals/medium');
	expect(await page.textContent('h1')).toBe('Medium Modals');
});

test('Large Modals page should have h1', async ({ page }) => {
	await page.goto('/modals/large');
	expect(await page.textContent('h1')).toBe('Large Modals');
});

test('Extra-large Modals page should have h1', async ({ page }) => {
	await page.goto('/modals/extra-large');
	expect(await page.textContent('h1')).toBe('Extra-large Modals');
});

test('Sign-in Modals page should have h1', async ({ page }) => {
	await page.goto('/modals/signin');
	expect(await page.textContent('h1')).toBe('Sign-in Modals');
});

// Navbar
test('Navbar index page should have h1', async ({ page }) => {
	await page.goto('/navbar');
	expect(await page.textContent('h1')).toBe('Navbar');
});

// Pagination
test('Pagination page should have h1', async ({ page }) => {
	await page.goto('/paginations');
	expect(await page.textContent('h1')).toBe('Pagination Components');
});

// Progress bar
test('Progress bar page should have h1', async ({ page }) => {
	await page.goto('/progressbars');
	expect(await page.textContent('h1')).toBe('Progress bar Components');
});

// Ratings
test('Rating main page should have h1', async ({ page }) => {
	await page.goto('/ratings');
	expect(await page.textContent('h1')).toBe('Rating Components');
});

test('Rating page should have h1', async ({ page }) => {
	await page.goto('/ratings/rating');
	expect(await page.textContent('h1')).toBe('Rating Component');
});

test('AdvancedRating page should have h1', async ({ page }) => {
	await page.goto('/ratings/advanced-rating');
	expect(await page.textContent('h1')).toBe('AdvancedRating Component');
});

test('ScoreRating page should have h1', async ({ page }) => {
	await page.goto('/ratings/score-rating');
	expect(await page.textContent('h1')).toBe('ScoreRating Component');
});

// Sidebar
test('Sidebar page should have h1', async ({ page }) => {
	await page.goto('/sidebars');
	expect(await page.textContent('h1')).toBe('Sidebar Components');
});

// Spinner
test('Spinner main page should have h1', async ({ page }) => {
	await page.goto('/spinners');
	expect(await page.textContent('h1')).toBe('Spinner Components');
});

// Tables
test('Table page should have h1', async ({ page }) => {
	await page.goto('/tables');
	expect(await page.textContent('h1')).toBe('Table Components');
});

// Tabs
test('Tab main page should have h1', async ({ page }) => {
	await page.goto('/tabs');
	expect(await page.textContent('h1')).toBe('Tab Components');
});

test('Default Tab page should have h1', async ({ page }) => {
	await page.goto('/tabs/default-tabs');
	expect(await page.textContent('h1')).toBe('Default Tabs');
});

test('Underline Tabs page should have h1', async ({ page }) => {
	await page.goto('/tabs/underline-tabs');
	expect(await page.textContent('h1')).toBe('Underline Tabs');
});

test('Icon Tabs page should have h1', async ({ page }) => {
	await page.goto('/tabs/icon-tabs');
	expect(await page.textContent('h1')).toBe('Icon Tabs');
});

test('Full Width Tabs page should have h1', async ({ page }) => {
	await page.goto('/tabs/full-width-tabs');
	expect(await page.textContent('h1')).toBe('Full Width Tabs');
});

test('Interactive Tabs page should have h1', async ({ page }) => {
	await page.goto('/tabs/interactive-tabs');
	expect(await page.textContent('h1')).toBe('Interactive Tabs');
});

test('Interactive Tabs 2: Adding other components page should have h1', async ({ page }) => {
	await page.goto('/tabs/interactive-tabs-2');
	expect(await page.textContent('h1')).toBe('Interactive Tabs 2: Adding other components');
});

test('Multiple Interactive Tabs page should have h1', async ({ page }) => {
	await page.goto('/tabs/multiple-interactive-tabs');
	expect(await page.textContent('h1')).toBe('Multiple Interactive Tabs');
});

test('Pill Tabs page should have h1', async ({ page }) => {
	await page.goto('/tabs/pilltabs');
	expect(await page.textContent('h1')).toBe('Pill Tabs');
});

// Timeline
test('Timeline main page should have h1', async ({ page }) => {
	await page.goto('/timelines');
	expect(await page.textContent('h1')).toBe('Timeline Components');
});

test('Default Timeline page should have h1', async ({ page }) => {
	await page.goto('/timelines/default');
	expect(await page.textContent('h1')).toBe('Default Timeline');
});

test('Vertical Timeline page should have h1', async ({ page }) => {
	await page.goto('/timelines/vertical');
	expect(await page.textContent('h1')).toBe('Vertical Timeline');
});

test('Horizontal Timeline page should have h1', async ({ page }) => {
	await page.goto('/timelines/horizontal');
	expect(await page.textContent('h1')).toBe('Horizontal Timeline');
});

test('Activity Log page should have h1', async ({ page }) => {
	await page.goto('/timelines/activity');
	expect(await page.textContent('h1')).toBe('Activity Log');
});

test('Grouped Timeline page should have h1', async ({ page }) => {
	await page.goto('/timelines/group');
	expect(await page.textContent('h1')).toBe('Grouped Timeline');
});

// Toasts
test('Toast Components page should have h1', async ({ page }) => {
	await page.goto('/toasts');
	expect(await page.textContent('h1')).toBe('Toast Components');
});

// Tooltips
test('Tooltip Components main page should have h1', async ({ page }) => {
	await page.goto('/tooltips');
	expect(await page.textContent('h1')).toBe('Tooltips');
});

