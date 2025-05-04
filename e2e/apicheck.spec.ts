import { expect, test } from "@playwright/test";

test("API check accordion page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/accordion");
  expect(await page.textContent("h1")).toBe("Accordion");
});

test("API check alert page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/alert");
  expect(await page.textContent("h1")).toBe("Alert");
});

test("API check Avatar page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/avatar");
  expect(await page.textContent("h1")).toBe("Avatar");
});

test("API check badge page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/badge");
  expect(await page.textContent("h1")).toBe("Badge");
});

test("API check banner page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/banner");
  expect(await page.textContent("h1")).toBe("Banner");
});

test("API check bottom-navigation page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/bottom-navigation");
  expect(await page.textContent("h1")).toBe("Bottom Navigation");
});

test("API check breadcrumb page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/breadcrumb");
  expect(await page.textContent("h1")).toBe("Breadcrumb");
});

test("API check button-group page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/button-group");
  expect(await page.textContent("h1")).toBe("Button Group");
});

test("API check buttons page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/buttons");
  expect(await page.textContent("h1")).toBe("Buttons");
});

test("API check cards page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/cards");
  expect(await page.textContent("h1")).toBe("Cards");
});

test("API check carousel page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/carousel");
  expect(await page.textContent("h1")).toBe("Carousel");
});

test("API check darkmode page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/darkmode");
  expect(await page.textContent("h1")).toBe("Darkmode");
});

test("API check datepicker page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/datepicker");
  expect(await page.textContent("h1")).toBe("Datepicker");
});

test("API check device-mockups page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/device-mockups");
  expect(await page.textContent("h1")).toBe("Device Mockups");
});

test("API check drawer page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/drawer");
  expect(await page.textContent("h1")).toBe("Drawer");
});

test("API check dropdown page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/dropdown");
  expect(await page.textContent("h1")).toBe("Dropdown");
});

test("API check footer page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/footer");
  expect(await page.textContent("h1")).toBe("Footer");
});

test("API check forms page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/forms");
  expect(await page.textContent("h1")).toBe("Forms");
});

test("API check gallery page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/gallery");
  expect(await page.textContent("h1")).toBe("Gallery");
});

test("API check indicators page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/indicators");
  expect(await page.textContent("h1")).toBe("Indicators");
});

test("API check kbd page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/kbd");
  expect(await page.textContent("h1")).toBe("Kbd");
});

test("API check list-group page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/list-group");
  expect(await page.textContent("h1")).toBe("List Group");
});

test("API check mega-menu page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/mega-menu");
  expect(await page.textContent("h1")).toBe("Megamenu");
});

test("API check modal page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/modal");
  expect(await page.textContent("h1")).toBe("Modal");
});

test("API check navbar page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/navbar");
  expect(await page.textContent("h1")).toBe("Navbar");
});

test("API check pagination page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/pagination");
  expect(await page.textContent("h1")).toBe("Pagination");
});

test("API check popover page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/popover");
  expect(await page.textContent("h1")).toBe("Popover");
});

test("API check progress page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/progress");
  expect(await page.textContent("h1")).toBe("Progress");
});

test("APIrating check rating page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/rating");
  expect(await page.textContent("h1")).toBe("Rating");
});

test("API check sidebar page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/sidebar");
  expect(await page.textContent("h1")).toBe("Sidebar");
});

test("API check skeleton page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/skeleton");
  expect(await page.textContent("h1")).toBe("Skeleton");
});

test("API check speed-dial page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/speed-dial");
  expect(await page.textContent("h1")).toBe("Speed Dial");
});

test("API check spinner page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/spinner");
  expect(await page.textContent("h1")).toBe("Spinner");
});

test("API check table page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/table");
  expect(await page.textContent("h1")).toBe("Table");
});

test("API check timeline page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/timeline");
  expect(await page.textContent("h1")).toBe("Timeline");
});

test("API check toast page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/toast");
  expect(await page.textContent("h1")).toBe("Toast");
});

test("API check tooltip page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/tooltip");
  expect(await page.textContent("h1")).toBe("Tooltip");
});

test("API check typography page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/typography");
  expect(await page.textContent("h1")).toBe("Typography");
});

test("API check video page should have h1", async ({ page }) => {
  await page.goto("/api-check/components/video");
  expect(await page.textContent("h1")).toBe("Video");
});

test("API check checkbox page should have h1", async ({ page }) => {
  await page.goto("/api-check/forms/checkbox");
  expect(await page.textContent("h1")).toBe("Checkbox");
});

test("API check file-input page should have h1", async ({ page }) => {
  await page.goto("/api-check/forms/file-input");
  expect(await page.textContent("h1")).toBe("File Input");
});

test("API check floating-label page should have h1", async ({ page }) => {
  await page.goto("/api-check/forms/floating-label");
  expect(await page.textContent("h1")).toBe("Floating Label");
});

test("API check input-field page should have h1", async ({ page }) => {
  await page.goto("/api-check/forms/input-field");
  expect(await page.textContent("h1")).toBe("Input Field");
});

test("API check radio page should have h1", async ({ page }) => {
  await page.goto("/api-check/forms/radio");
  expect(await page.textContent("h1")).toBe("Radio");
});

test("API check range page should have h1", async ({ page }) => {
  await page.goto("/api-check/forms/range");
  expect(await page.textContent("h1")).toBe("Range");
});

test("API check search-input page should have h1", async ({ page }) => {
  await page.goto("/api-check/forms/search-input");
  expect(await page.textContent("h1")).toBe("Search Input");
});

test("API check select page should have h1", async ({ page }) => {
  await page.goto("/api-check/forms/select");
  expect(await page.textContent("h1")).toBe("Select");
});

test("API check textarea page should have h1", async ({ page }) => {
  await page.goto("/api-check/forms/textarea");
  expect(await page.textContent("h1")).toBe("Textarea");
});

test("API check toggle page should have h1", async ({ page }) => {
  await page.goto("/api-check/forms/toggle");
  expect(await page.textContent("h1")).toBe("Toggle");
});

test("API check blockquote page should have h1", async ({ page }) => {
  await page.goto("/api-check/typography/blockquote");
  expect(await page.textContent("h1")).toBe("Blockquote");
});

test("API check heading page should have h1", async ({ page }) => {
  await page.goto("/api-check/typography/heading");
  expect(await page.textContent("h1")).toBe("Heading");
});

test("API check hr page should have h1", async ({ page }) => {
  await page.goto("/api-check/typography/hr");
  expect(await page.textContent("h1")).toBe("Hr");
});

test("API check image page should have h1", async ({ page }) => {
  await page.goto("/api-check/typography/image");
  expect(await page.textContent("h1")).toBe("Images");
});

test("API check link page should have h1", async ({ page }) => {
  await page.goto("/api-check/typography/link");
  expect(await page.textContent("h1")).toBe("Link");
});

test("API check list page should have h1", async ({ page }) => {
  await page.goto("/api-check/typography/list");
  expect(await page.textContent("h1")).toBe("List");
});

test("API check paragraph page should have h1", async ({ page }) => {
  await page.goto("/api-check/typography/paragraph");
  expect(await page.textContent("h1")).toBe("Paragraph");
});

test("API check text page should have h1", async ({ page }) => {
  await page.goto("/api-check/typography/text");
  expect(await page.textContent("h1")).toBe("Text");
});
