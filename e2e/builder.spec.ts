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

test("Builder image page should have h1", async ({ page }) => {
  await page.goto("/builder/image");
  expect(await page.textContent("h1")).toBe("Image Builder");
});

test("Builder indicators page should have h1", async ({ page }) => {
  await page.goto("/builder/indicators");
  expect(await page.textContent("h1")).toBe("Indicator Builder");
});

test("Builder input-field page should have h1", async ({ page }) => {
  await page.goto("/builder/input-field");
  expect(await page.textContent("h1")).toBe("Input Builder");
});

test("Builder label page should have h1", async ({ page }) => {
  await page.goto("/builder/label");
  expect(await page.textContent("h1")).toBe("Label Builder");
});

test("Builder layout page should have h1", async ({ page }) => {
  await page.goto("/builder/layout");
  expect(await page.textContent("h1")).toBe("Layout");
});

test("Builder link page should have h1", async ({ page }) => {
  await page.goto("/builder/link");
  expect(await page.textContent("h1")).toBe("Link Builder");
});

test("Builder list page should have h1", async ({ page }) => {
  await page.goto("/builder/list");
  expect(await page.textContent("h1")).toBe("List Builder");
});

test("Builder modal page should have h1", async ({ page }) => {
  await page.goto("/builder/modal");
  expect(await page.textContent("h1")).toBe("Modal Builder");
});

test("Builder paragraph page should have h1", async ({ page }) => {
  await page.goto("/builder/paragraph");
  expect(await page.textContent("h1")).toBe("Paragraph Builder");
});

test("Builder popover page should have h1", async ({ page }) => {
  await page.goto("/builder/popover");
  expect(await page.textContent("h1")).toBe("Popover Builder");
});

test("Builder progress page should have h1", async ({ page }) => {
  await page.goto("/builder/progress");
  expect(await page.textContent("h1")).toBe("Progressbar Builder");
});

test("Builder radio page should have h1", async ({ page }) => {
  await page.goto("/builder/radio");
  expect(await page.textContent("h1")).toBe("Radio Builder");
});

test("Builder range page should have h1", async ({ page }) => {
  await page.goto("/builder/range");
  expect(await page.textContent("h1")).toBe("Range Builder");
});

test("Builder select page should have h1", async ({ page }) => {
  await page.goto("/builder/select");
  expect(await page.textContent("h1")).toBe("Select Builder");
});

test("Builder skeleton page should have h1", async ({ page }) => {
  await page.goto("/builder/skeleton");
  expect(await page.textContent("h1")).toBe("Skeleton Builder");
});

test("Builder span page should have h1", async ({ page }) => {
  await page.goto("/builder/span");
  expect(await page.textContent("h1")).toBe("Span Builder");
});

test("Builder spinner page should have h1", async ({ page }) => {
  await page.goto("/builder/spinner");
  expect(await page.textContent("h1")).toBe("Spinner Builder");
});

test("Builder tab page should have h1", async ({ page }) => {
  await page.goto("/builder/tab");
  expect(await page.textContent("h1")).toBe("Tab Builder");
});

test("Builder table page should have h1", async ({ page }) => {
  await page.goto("/builder/table");
  expect(await page.textContent("h1")).toBe("Table Builder");
});

test("Builder textarea page should have h1", async ({ page }) => {
  await page.goto("/builder/textarea");
  expect(await page.textContent("h1")).toBe("Textarea Builder");
});

test("Builder toast page should have h1", async ({ page }) => {
  await page.goto("/builder/toast");
  expect(await page.textContent("h1")).toBe("Toast Builder");
});

test("Builder toggle page should have h1", async ({ page }) => {
  await page.goto("/builder/toggle");
  expect(await page.textContent("h1")).toBe("Toggle Builder");
});

test("Builder tooltip page should have h1", async ({ page }) => {
  await page.goto("/builder/tooltip");
  expect(await page.textContent("h1")).toBe("Tooltip Builder");
});

test("Builder video page should have h1", async ({ page }) => {
  await page.goto("/builder/video");
  expect(await page.textContent("h1")).toBe("Video Player Builder");
});
