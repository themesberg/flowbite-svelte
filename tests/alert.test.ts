import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('/components/alert');
});

test('alert page has expected h1', async ({ page }) => {
  expect(await page.textContent('h1')).toContain('Alert');
});

test('alert page has expected meta title', async ({ page }) => {
  await expect(page).toHaveTitle('Alert - Svelte 5 Ui Lib');
});

test('alert page has expected meta description', async ({ page }) => {
  const metaDescription = page.locator('meta[name="description"]');
  await expect(metaDescription).toHaveAttribute('content', 'Alert component for Svelte 5 Runes.');
});

test('alert page has expected meta keywords', async ({ page }) => {
  const metaKeywords = page.locator('meta[name="keywords"]');
  await expect(metaKeywords).toHaveAttribute('content', 'svelte, runes, ui, components, library');
});

test('alert page has expected meta og', async ({ page }) => {
  const metaOgTitle = page.locator('meta[property="og:title"]');
  await expect(metaOgTitle).toHaveAttribute('content', 'Alert - Svelte 5 Ui Lib');
  const metaOgDescription = page.locator('meta[property="og:description"]');
  await expect(metaOgDescription).toHaveAttribute('content', 'Alert component for Svelte 5 Runes.');
  const metaOgUrl = page.locator('meta[property="og:url"]');
  await expect(metaOgUrl).toHaveAttribute('content', 'http://localhost:4173/components/alert');
  const metaOgImage = page.locator('meta[property="og:image"]');
  await expect(metaOgImage).toHaveAttribute(
    'content',
    'https://open-graph-vercel.vercel.app/api/svelte-5-ui-lib?title=Alert'
  );
});

test('alert page has expected meta twitter', async ({ page }) => {
  const metaTwitterTitle = page.locator('meta[name="twitter:title"]');
  await expect(metaTwitterTitle).toHaveAttribute('content', 'Alert - Svelte 5 Ui Lib');
  const metaTwitterDescription = page.locator('meta[name="twitter:description"]');
  await expect(metaTwitterDescription).toHaveAttribute('content', 'Alert component for Svelte 5 Runes.');
  const metaTwitterImage = page.locator('meta[name="twitter:image"]');
  await expect(metaTwitterImage).toHaveAttribute(
    'content',
    'https://open-graph-vercel.vercel.app/api/svelte-5-ui-lib?title=Alert'
  );
});
