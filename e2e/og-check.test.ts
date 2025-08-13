import { expect, test } from "@playwright/test";

test("Home page should have OG image", async ({ page }) => {
  await page.goto("/");

  const ogImage = page.locator('meta[property="og:image"]');
  const content = await ogImage.getAttribute("content");

  expect(content).toContain("og?title=Svelte UI Components");
});

test("Accordion page should have OG image", async ({ page }) => {
  await page.goto("/docs/components/accordion");

  const ogImage = page.locator('meta[property="og:image"]');
  const content = await ogImage.getAttribute("content");

  expect(content).toContain("og?title=Svelte%20Accordion");
});

test("Checkbox page should have OG image", async ({ page }) => {
  await page.goto("/docs/forms/checkbox");

  const ogImage = page.locator('meta[property="og:image"]');
  const content = await ogImage.getAttribute("content");

  expect(content).toContain("og?title=Svelte%20Checkbox");
});


test("Blockquote page should have OG image", async ({ page }) => {
  await page.goto("/docs/typography/blockquote");

  const ogImage = page.locator('meta[property="og:image"]');
  const content = await ogImage.getAttribute("content");

  expect(content).toContain("og?title=Svelte%20Blockquote");
});


test("CloseButton page should have OG image", async ({ page }) => {
  await page.goto("/docs/utilities/close-button");

  const ogImage = page.locator('meta[property="og:image"]');
  const content = await ogImage.getAttribute("content");

  expect(content).toContain("og?title=Svelte%20Close%20Button%20-%20Flowbite");
});

test("ButtonToggle page should have OG image", async ({ page }) => {
  await page.goto("/docs/extend/button-toggle");

  const ogImage = page.locator('meta[property="og:image"]');
  const content = await ogImage.getAttribute("content");

  expect(content).toContain("og?title=Button%20toggle");
});

test("Chart page should have OG image", async ({ page }) => {
  await page.goto("/docs/plugins/charts");

  const ogImage = page.locator('meta[property="og:image"]');
  const content = await ogImage.getAttribute("content");

  expect(content).toContain("og?title=Svelte%20Charts");
});

// test("Icon page should have OG image", async ({ page }) => {
//   await page.goto("/docs/plugins/charts");

//   const ogImage = page.locator('meta[property="og:image"]');
//   const content = await ogImage.getAttribute("content");

//   expect(content).toContain("og?title=Svelte%20Charts");
// });
