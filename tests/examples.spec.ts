import { expect, test } from '@playwright/test';

// Icons
test('Snapshot page should have h1', async ({ page }) => {
	await page.goto('/examples/snapshot');
	expect(await page.textContent('h1')).toBe('Svelte Snapshot');
});