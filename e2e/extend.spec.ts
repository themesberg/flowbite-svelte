import { expect, test } from "@playwright/test";

// ButtonToggle
test("ButtonToggle page should have h1", async ({ page }) => {
  await page.goto("/docs/extend/button-toggle");
  expect(await page.textContent("h1")).toBe("Svelte Button Toggle");
});

// flowbite-svelte-starter
test("Flowbite Svelte Starter page should have h1", async ({ page }) => {
  await page.goto("/docs/extend/flowbite-svelte-starter");
  expect(await page.textContent("h1")).toBe("Flowbite Svelte Starters");
});

// Kanban
test("KanbanBoard page should have h1", async ({ page }) => {
  await page.goto("/docs/extend/kanban-board");
  expect(await page.textContent("h1")).toBe("Svelte Kanban Board");
});

// Progressradial
test("Progressradial page should have h1", async ({ page }) => {
  await page.goto("/docs/extend/progressradial");
  expect(await page.textContent("h1")).toBe("Svelte Progressradial");
});

// Progressradial
test("Split Pane page should have h1", async ({ page }) => {
  await page.goto("/docs/extend/split-pane");
  expect(await page.textContent("h1")).toBe("Svelte Split Pane");
});

// StepIndicator
test("StepIndicator page should have h1", async ({ page }) => {
  await page.goto("/docs/extend/step-indicator");
  expect(await page.textContent("h1")).toBe("Svelte StepIndicator");
});

// Tags
test("Tags page should have h1", async ({ page }) => {
  await page.goto("/docs/extend/tags");
  expect(await page.textContent("h1")).toBe("Svelte Tags");
});

// VirtualList
test("VirtualList page should have h1", async ({ page }) => {
  await page.goto("/docs/extend/virtual-list");
  expect(await page.textContent("h1")).toBe("Svelte Virtual List");
});
