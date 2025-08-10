import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
  await page.goto('/admin-dashboard');
  expect(await page.textContent('h1')).toBe('Dashboard');
});

test('dashboard page has expected h1', async ({ page }) => {
  await page.goto('/admin-dashboard/dashboard');
  expect(await page.textContent('h1')).toBe('Dashboard');
});

test('Pricing page has expected h1', async ({ page }) => {
  await page.goto('/admin-dashboard/pages/pricing');
  expect(await page.textContent('h1')).toBe('Our pricing plan made simple');
});

test('Layouts: Stacked page has expected h1', async ({ page }) => {
  await page.goto('/admin-dashboard/layouts/stacked');
  expect(await page.textContent('h1')).toBe('Layouts: Stacked');
});

test('Layouts: Sidebar page has expected h1', async ({ page }) => {
  await page.goto('/admin-dashboard/layouts/sidebar');
  expect(await page.textContent('h1')).toBe('Layouts: Sidebar');
});

test('Crud: Products page has expected h1', async ({ page }) => {
  await page.goto('/admin-dashboard/crud/products');
  expect(await page.textContent('h1')).toBe('CRUD: Products');
});

test('Crud: Users page has expected h1', async ({ page }) => {
  await page.goto('/admin-dashboard/crud/users');
  expect(await page.textContent('h1')).toBe('CRUD: Users');
});

test('Settings page has expected h1', async ({ page }) => {
  await page.goto('/admin-dashboard/settings');
  expect(await page.textContent('h1')).toBe('User settings');
});

test('Error 400, Maintenance page has expected h1', async ({ page }) => {
  await page.goto('/admin-dashboard/errors/400');
  expect(await page.textContent('h1')).toBe('Under Maintenance');
});

test('Error 404, Page not found page has expected h1', async ({ page }) => {
  await page.goto('/admin-dashboard/errors/404');
  expect(await page.textContent('h1')).toBe('Page not found');
});

test('Error 500 page has expected h1', async ({ page }) => {
  await page.goto('/admin-dashboard/errors/500');
  expect(await page.textContent('h1')).toBe('Something has gone seriously wrong');
});

test('Sign-in page has expected h1', async ({ page }) => {
  await page.goto('/admin-dashboard/authentication/sign-in');
  expect(await page.textContent('h1')).toBe('Sign in to platform');
});

test('Sign-up page has expected h1', async ({ page }) => {
  await page.goto('/admin-dashboard/authentication/sign-up');
  expect(await page.textContent('h1')).toBe('Create a Free Account');
});

test('forgot-password page has expected h1', async ({ page }) => {
  await page.goto('/admin-dashboard/authentication/forgot-password');
  expect(await page.textContent('h1')).toBe('Forgot your password?');
});

test('reset-password page has expected h1', async ({ page }) => {
  await page.goto('/admin-dashboard/authentication/reset-password');
  expect(await page.textContent('h1')).toBe('Reset your password');
});

test('profile-lock page has expected h1', async ({ page }) => {
  await page.goto('/admin-dashboard/authentication/profile-lock');
  expect(await page.textContent('h1')).toBe('Neil Sims');
});

test('playground/stacked page has expected h1', async ({ page }) => {
  await page.goto('/admin-dashboard/playground/stacked');
  expect(await page.textContent('h1')).toBe('Create something awesome here');
});

test('playground/sidebar page has expected h1', async ({ page }) => {
  await page.goto('/admin-dashboard/playground/sidebar');
  expect(await page.textContent('h1')).toBe('Create something awesome here');
});

test('Quickstart page has expected h1', async ({ page }) => {
  await page.goto('/admin-dashboard/quickstart');
  expect(await page.textContent('h1')).toBe('Flowbite Svelte Admin Dashboard');
});
