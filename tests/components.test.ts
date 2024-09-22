import { expect, test } from '@playwright/test';

test('accordion page has expected h1', async ({ page }) => {
  await page.goto('/components/accordion');
  expect(await page.textContent('h1')).toContain('Accordion');
});

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

test('carousel page has expected h1', async ({ page }) => {
  await page.goto('/components/carousel');
  expect(await page.textContent('h1')).toContain('Carousel');
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

test('modal page has expected h1', async ({ page }) => {
  await page.goto('/components/modal');
  expect(await page.textContent('h1')).toBe('Modal');
});

test('navbar page has expected h1', async ({ page }) => {
  await page.goto('/components/navbar');
  expect(await page.textContent('h1')).toBe('Navbar');
});

test('pagination page has expected h1', async ({ page }) => {
  await page.goto('/components/pagination');
  expect(await page.textContent('h1')).toContain('Pagination');
});

test('popover page has expected h1', async ({ page }) => {
  await page.goto('/components/popover');
  expect(await page.textContent('h1')).toContain('Popover');
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

test('speeddial page has expected h1', async ({ page }) => {
  await page.goto('/components/speed-dial');
  expect(await page.textContent('h1')).toContain('Speed dial');
});

test('tab page has expected h1', async ({ page }) => {
  await page.goto('/components/tabs');
  expect(await page.textContent('h1')).toBe('Tabs');
});

test('table page has expected h1', async ({ page }) => {
  await page.goto('/components/table');
  expect(await page.textContent('h1')).toBe('Table');
});

test('timeline page has expected h1', async ({ page }) => {
  await page.goto('/components/timeline');
  expect(await page.textContent('h1')).toBe('Timeline');
});

test('toast page has expected h1', async ({ page }) => {
  await page.goto('/components/toast');
  expect(await page.textContent('h1')).toBe('Toast');
});

test('tooltip page has expected h1', async ({ page }) => {
  await page.goto('/components/tooltip');
  expect(await page.textContent('h1')).toBe('Tooltip');
});

test('video page has expected h1', async ({ page }) => {
  await page.goto('/components/video');
  expect(await page.textContent('h1')).toBe('Video');
});
