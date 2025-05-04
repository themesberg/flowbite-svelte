import { expect, test } from "@playwright/test";

test("Builder alert page should have h1", async ({ page }) => {
  await page.goto("/api-check/alert");
  expect(await page.textContent("h1")).toBe("Alert");
});