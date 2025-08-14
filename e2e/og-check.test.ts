import { expect, test } from "@playwright/test";
// home
test("Home page should have OG image", async ({ page }) => {
  await page.goto("/");

  const ogImage = page.locator('meta[property="og:image"]');
  const content = await ogImage.getAttribute("content");

  expect(content).toContain("og?title=Svelte UI Components");
});
// component
test("Accordion page should have OG image", async ({ page }) => {
  await page.goto("/docs/components/accordion");

  const ogImage = page.locator('meta[property="og:image"]');
  const content = await ogImage.getAttribute("content");

  expect(content).toContain("og?title=Svelte%20Accordion");
});

// form
test("Checkbox page should have OG image", async ({ page }) => {
  await page.goto("/docs/forms/checkbox");

  const ogImage = page.locator('meta[property="og:image"]');
  const content = await ogImage.getAttribute("content");

  expect(content).toContain("og?title=Svelte%20Checkbox");
});

// typography
test("Blockquote page should have OG image", async ({ page }) => {
  await page.goto("/docs/typography/blockquote");

  const ogImage = page.locator('meta[property="og:image"]');
  const content = await ogImage.getAttribute("content");

  expect(content).toContain("og?title=Svelte%20Blockquote");
});

// utilities
test("CloseButton page should have OG image", async ({ page }) => {
  await page.goto("/docs/utilities/close-button");

  const ogImage = page.locator('meta[property="og:image"]');
  const content = await ogImage.getAttribute("content");

  expect(content).toContain("og?title=Svelte%20Close%20Button%20-%20Flowbite");
});
// extend
test("ButtonToggle page should have OG image", async ({ page }) => {
  await page.goto("/docs/extend/button-toggle");

  const ogImage = page.locator('meta[property="og:image"]');
  const content = await ogImage.getAttribute("content");

  expect(content).toContain("og?title=Button%20toggle");
});
// plugins
test("Chart page should have OG image", async ({ page }) => {
  await page.goto("/docs/plugins/charts");

  const ogImage = page.locator('meta[property="og:image"]');
  const content = await ogImage.getAttribute("content");

  expect(content).toContain("og?title=Svelte%20Charts");
});
// icon
test("Icon page should have OG image", async ({ page }) => {
  await page.goto("/icons/outline-icons");

  const ogImage = page.locator('meta[property="og:image"]');
  const content = await ogImage.getAttribute("content");

  expect(content).toContain("og?title=Outline%20Icons&package=Flowbite%20Svelte%20Icons");
});
// illustrations
test("Illustration page should have OG image", async ({ page }) => {
  await page.goto("/illustrations/illustrations");

  const ogImage = page.locator('meta[property="og:image"]');
  const content = await ogImage.getAttribute("content");

  expect(content).toContain("og?title=Illustrations&package=Flowbite%20Svelte%20Illustrations");
});
// builder
test("Builder page should have OG image", async ({ page }) => {
  await page.goto("/builder/alert");

  const ogImage = page.locator('meta[property="og:image"]');
  const content = await ogImage.getAttribute("content");

  expect(content).toContain("og?title=Alert%20builder&package=Flowbite%20Svelte");
});
// blocks
test("Blocsk page should have OG image", async ({ page }) => {
  await page.goto("/blocks/application");

  const ogImage = page.locator('meta[property="og:image"]');
  const content = await ogImage.getAttribute("content");

  expect(content).toContain("og?title=Application&package=Flowbite%20Svelte%20Blocks");
});
// blocks/application/advanced-tables
test("blocks/application/advanced-tables page should have OG image", async ({ page }) => {
  await page.goto("/blocks/application/advanced-tables");

  const ogImage = page.locator('meta[property="og:image"]');
  const content = await ogImage.getAttribute("content");

  expect(content).toContain("og?title=Advanced%20Tables&package=Flowbite%20Svelte%20Blocks");
});
// admin-dashboard
test("admin-dashboard page should have OG image", async ({ page }) => {
  await page.goto("/admin-dashboard");

  const ogImage = page.locator('meta[property="og:image"]');
  const content = await ogImage.getAttribute("content");

  expect(content).toContain("og?package=Flowbite%20Svelte%20Admin%20Dashboard&title=Admin Dashboard");
});