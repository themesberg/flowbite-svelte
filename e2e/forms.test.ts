import { expect, test } from "@playwright/test";

test("checkbox page has expected h1", async ({ page }) => {
  await page.goto("/forms/checkbox");
  expect(await page.textContent("h1")).toBe("Checkbox");
});

test("file input page has expected h1", async ({ page }) => {
  await page.goto("/forms/file-input");
  expect(await page.textContent("h1")).toBe("File input");
});

test("floating label page has expected h1", async ({ page }) => {
  await page.goto("/forms/floating-label");
  expect(await page.textContent("h1")).toBe("Floating label");
});

test("input field label page has expected h1", async ({ page }) => {
  await page.goto("/forms/input-field");
  expect(await page.textContent("h1")).toBe("Input field");
});

test("label label page has expected h1", async ({ page }) => {
  await page.goto("/forms/label");
  expect(await page.textContent("h1")).toBe("Label");
});

test("radio/helper/radiobutton page has expected h1", async ({ page }) => {
  await page.goto("/forms/radio");
  expect(await page.textContent("h1")).toBe("Radio, Helper, and RadioButton");
});

test("range page has expected h1", async ({ page }) => {
  await page.goto("/forms/range");
  expect(await page.textContent("h1")).toBe("Range");
});

test("search input page has expected h1", async ({ page }) => {
  await page.goto("/forms/search-input");
  expect(await page.textContent("h1")).toBe("Search input");
});

test("select page has expected h1", async ({ page }) => {
  await page.goto("/forms/select");
  expect(await page.textContent("h1")).toBe("Select");
});

test("toggle page has expected h1", async ({ page }) => {
  await page.goto("/forms/toggle");
  expect(await page.textContent("h1")).toBe("Toggle");
});

test("textarea page has expected h1", async ({ page }) => {
  await page.goto("/forms/textarea");
  expect(await page.textContent("h1")).toBe("Textarea");
});
