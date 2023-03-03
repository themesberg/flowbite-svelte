import { expect, test } from '@playwright/test';

test('Snapshot page should have h1', async ({ page }) => {
	await page.goto('/examples/snapshot');
	expect(await page.textContent('h1')).toBe('Svelte Snapshot');
});

test('Responsive Sidebar Layout page should have h1', async ({ page }) => {
	await page.goto('/examples/sidebar-layout');
	expect(await page.textContent('h1')).toBe('Responsive Sidebar Layout');
});