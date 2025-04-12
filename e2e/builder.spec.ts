import { expect, test } from "@playwright/test";

test("Builder alert page should have h1", async ({ page }) => {
  await page.goto("/builder/alert");
  expect(await page.textContent("h1")).toBe("Alert Builder");
});

test("Builder avatar page should have h1", async ({ page }) => {
  await page.goto("/builder/avatar");
  expect(await page.textContent("h1")).toBe("Avatar Builder");
});

test("Builder badge page should have h1", async ({ page }) => {
  await page.goto("/builder/badge");
  expect(await page.textContent("h1")).toBe("Badge Builder");
});

test("Builder banner page should have h1", async ({ page }) => {
  await page.goto("/builder/banner");
  expect(await page.textContent("h1")).toBe("Banner Builder");
});

test("Builder blockquote page should have h1", async ({ page }) => {
  await page.goto("/builder/blockquote");
  expect(await page.textContent("h1")).toBe("Blockquote Builder");
});

test("Builder button-group page should have h1", async ({ page }) => {
  await page.goto("/builder/button-group");
  expect(await page.textContent("h1")).toBe("Button-group Builder");
});

test("Builder button page should have h1", async ({ page }) => {
  await page.goto("/builder/button");
  expect(await page.textContent("h1")).toBe("Button Builder");
});

test("Builder card page should have h1", async ({ page }) => {
  await page.goto("/builder/card");
  expect(await page.textContent("h1")).toBe("Card Builder");
});

test("Builder checkbox page should have h1", async ({ page }) => {
  await page.goto("/builder/checkbox");
  expect(await page.textContent("h1")).toBe("Checkbox Builder");
});

test("Builder device-mockup page should have h1", async ({ page }) => {
  await page.goto("/builder/device-mockup");
  expect(await page.textContent("h1")).toBe("Device Mockup Builder");
});

test("Builder drawer page should have h1", async ({ page }) => {
  await page.goto("/builder/drawer");
  expect(await page.textContent("h1")).toBe("Drawer Builder");
});

test("Builder dropdown page should have h1", async ({ page }) => {
  await page.goto("/builder/dropdown");
  expect(await page.textContent("h1")).toBe("Dropdown Builder");
});

test("Builder file-input page should have h1", async ({ page }) => {
  await page.goto("/builder/file-input");
  expect(await page.textContent("h1")).toBe("File input Builder");
});

test("Builder floating-label page should have h1", async ({ page }) => {
  await page.goto("/builder/floating-label");
  expect(await page.textContent("h1")).toBe("Floating-label Builder");
});

test("Builder heading page should have h1", async ({ page }) => {
  await page.goto("/builder/heading");
  expect(await page.textContent("h1")).toBe("Heading Builder");
});

test("Builder hr page should have h1", async ({ page }) => {
  await page.goto("/builder/hr");
  expect(await page.textContent("h1")).toBe("Hr Builder");
});