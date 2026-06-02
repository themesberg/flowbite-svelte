import { expect, test } from "@playwright/test";

function checkOgImage(content: string | null, expected: string) {
  expect(content).toBeTruthy();
  expect(content).toContain(expected);
}

// home
test("Home page should have OG image", async ({ page }) => {
  await page.goto("/");
  const content = await page.locator('meta[property="og:image"]').getAttribute("content");
  checkOgImage(content, "/og/docs-pages-introduction.png");
});

// component
test("Accordion page should have OG image", async ({ page }) => {
  await page.goto("/docs/components/accordion");
  const content = await page.locator('meta[property="og:image"]').getAttribute("content");
  checkOgImage(content, "/og/docs-components-accordion.png");
});

// form
test("Checkbox page should have OG image", async ({ page }) => {
  await page.goto("/docs/forms/checkbox");
  const content = await page.locator('meta[property="og:image"]').getAttribute("content");
  checkOgImage(content, "/og/docs-forms-checkbox.png");
});

// typography
test("Blockquote page should have OG image", async ({ page }) => {
  await page.goto("/docs/typography/blockquote");
  const content = await page.locator('meta[property="og:image"]').getAttribute("content");
  checkOgImage(content, "/og/docs-typography-blockquote.png");
});

// utilities
test("CloseButton page should have OG image", async ({ page }) => {
  await page.goto("/docs/utilities/close-button");
  const content = await page.locator('meta[property="og:image"]').getAttribute("content");
  checkOgImage(content, "/og/docs-utilities-close-button.png");
});

// extend
test("ButtonToggle page should have OG image", async ({ page }) => {
  await page.goto("/docs/extend/button-toggle");
  const content = await page.locator('meta[property="og:image"]').getAttribute("content");
  checkOgImage(content, "/og/docs-extend-button-toggle.png");
});

// plugins
test("Chart page should have OG image", async ({ page }) => {
  await page.goto("/docs/plugins/charts");
  const content = await page.locator('meta[property="og:image"]').getAttribute("content");
  checkOgImage(content, "/og/docs-plugins-charts.png");
});

// icon
test("Icon page should have OG image", async ({ page }) => {
  await page.goto("/icons/outline-icons");
  const content = await page.locator('meta[property="og:image"]').getAttribute("content");
  checkOgImage(content, "/og/icons-outline-icons.png");
});

// illustrations
test("Illustration page should have OG image", async ({ page }) => {
  await page.goto("/illustrations/illustrations");
  const content = await page.locator('meta[property="og:image"]').getAttribute("content");
  checkOgImage(content, "/og/illustrations-illustrations.png");
});

// builder
test("Builder page should have OG image", async ({ page }) => {
  await page.goto("/builder/alert");
  const content = await page.locator('meta[property="og:image"]').getAttribute("content");
  checkOgImage(content, "/og/builder-alert.png");
});

// blocks
test("Blocks page should have OG image", async ({ page }) => {
  await page.goto("/blocks/application");
  const content = await page.locator('meta[property="og:image"]').getAttribute("content");
  checkOgImage(content, "/og/blocks-application.png");
});

// blocks/application/advanced-tables
test("blocks/application/advanced-tables page should have OG image", async ({ page }) => {
  await page.goto("/blocks/application/advanced-tables");
  const content = await page.locator('meta[property="og:image"]').getAttribute("content");
  checkOgImage(content, "/og/blocks-application-advanced-tables.png");
});

// admin-dashboard
test("admin-dashboard page should have OG image", async ({ page }) => {
  await page.goto("/admin-dashboard");
  const content = await page.locator('meta[property="og:image"]').getAttribute("content");
  checkOgImage(content, "/og/admin-dashboard.png");
});
