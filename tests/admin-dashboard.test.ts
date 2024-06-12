import { expect, test } from '@playwright/test';

test('admin-dashboard page has expected h3', async ({ page }) => {
	await page.goto('/admin-dashboard');
	expect(await page.textContent('h3')).toContain('$45,385');
});

test('admin-dashboard dashboard page has expected h3', async ({ page }) => {
	await page.goto('/admin-dashboard/dashboard');
	expect(await page.textContent('h3')).toContain('$45,385');
});

test('admin-dashboard layout stacked page has expected h3', async ({ page }) => {
	await page.goto('/admin-dashboard/layouts/stacked');
	expect(await page.textContent('h3')).toContain('$45,385');
});

test('admin-dashboard layout sidebar page has expected h3', async ({ page }) => {
	await page.goto('/admin-dashboard/layouts/sidebar');
	expect(await page.textContent('h3')).toContain('$45,385');
});

// CRUD
test('admin-dashboard products page has expected h1', async ({ page }) => {
	await page.goto('/admin-dashboard/crud/products');
	expect(await page.textContent('h1')).toContain('All products');
});

test('admin-dashboard users page has expected h1', async ({ page }) => {
	await page.goto('/admin-dashboard/crud/users');
	expect(await page.textContent('h1')).toContain('All users');
});

// settings
test('admin-dashboard user settings page has expected h1', async ({ page }) => {
	await page.goto('/admin-dashboard/settings');
	expect(await page.textContent('h1')).toContain('User settings');
});

// pages
test('admin-dashboard pricing page has expected h1', async ({ page }) => {
	await page.goto('/admin-dashboard/pages/pricing');
	expect(await page.textContent('h1')).toContain('Our pricing plan made simple');
});

test('admin-dashboard errors 400 has expected h1', async ({ page }) => {
	await page.goto('/admin-dashboard/errors/400');
	expect(await page.textContent('h1')).toContain('Under Maintenance');
});

test('admin-dashboard errors/404 has expected h1', async ({ page }) => {
	await page.goto('/admin-dashboard/errors/404');
	expect(await page.textContent('h1')).toContain('Page not found');
});

test('admin-dashboard errors/500 has expected h1', async ({ page }) => {
	await page.goto('/admin-dashboard/errors/500');
	expect(await page.textContent('h1')).toContain('Something has gone seriously wrong');
});

// authentication
test('admin-dashboard sign-in page has expected h1', async ({ page }) => {
	await page.goto('/admin-dashboard/authentication/sign-in');
	expect(await page.textContent('h1')).toContain('Sign in to platform');
});

test('admin-dashboard sign-up page has expected h1', async ({ page }) => {
	await page.goto('/admin-dashboard/authentication/sign-up');
	expect(await page.textContent('h1')).toContain('Create a Free Account');
});

test('admin-dashboard Forgot password page has expected h1', async ({ page }) => {
	await page.goto('/admin-dashboard/authentication/forgot-password');
	expect(await page.textContent('h1')).toContain('Forgot your password?');
});

test('admin-dashboard Reset password page has expected h1', async ({ page }) => {
	await page.goto('/admin-dashboard/authentication/reset-password');
	expect(await page.textContent('h1')).toContain('Reset your password');
});

test('admin-dashboard Profile lock page has expected h1', async ({ page }) => {
	await page.goto('/admin-dashboard/authentication/profile-lock');
	expect(await page.textContent('h1')).toContain('Neil Sims');
});

// playground
test('admin-dashboard playground/stacked page has expected h1', async ({ page }) => {
	await page.goto('/admin-dashboard/playground/stacked');
	expect(await page.textContent('h1')).toContain('Create something awesome here');
});

test('admin-dashboard playground/sidebar page has expected h1', async ({ page }) => {
	await page.goto('/admin-dashboard/playground/sidebar');
	expect(await page.textContent('h1')).toContain('Create something awesome here');
});
