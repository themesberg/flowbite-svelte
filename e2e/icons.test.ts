import { expect, test } from "@playwright/test";

test("Icons Outline page page should have h1", async ({ page }) => {
  await page.goto("/icons/outline-icons");
  expect(await page.textContent("h1")).toBe("Svelte Outline Icons - Flowbite");
});

test("Icons Solid page page should have h1", async ({ page }) => {
  await page.goto("/icons/solid-icons");
  expect(await page.textContent("h1")).toBe("Svelte Solid Icons - Flowbite");
});

// test("Icons Svelte 4 getting started page page should have h1", async ({ page }) => {
//   await page.goto("/icons/svelte-4");
//   expect(await page.textContent("h1")).toBe("Svelte 4 Icons - Flowbite");
// });

test("Icons quickstart page page should have h1", async ({ page }) => {
  await page.goto("/icons/quickstart");
  expect(await page.textContent("h1")).toBe("Flowbite Svelte Icons - Flowbite");
});
