import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicBreadcrumbTest from "./basic-breadcrumb.test.svelte";
import SolidBreadcrumbTest from "./solid-breadcrumb.test.svelte";
import HomeItemTest from "./home-item.test.svelte";
import CustomHomeIconTest from "./custom-home-icon.test.svelte";
import LinkItemTest from "./link-item.test.svelte";
import SpanItemTest from "./span-item.test.svelte";
import CustomSeparatorTest from "./custom-separator.test.svelte";
import CustomClassesTest from "./custom-classes.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Breadcrumb component", () => {
  test("renders basic breadcrumb correctly", () => {
    render(BasicBreadcrumbTest);
    const nav = screen.getByRole("navigation");

    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute("aria-label", "Breadcrumb");

    const list = nav.querySelector("ol");
    expect(list).toBeInTheDocument();
  });

  test("renders solid variant with background", () => {
    render(SolidBreadcrumbTest);
    const nav = screen.getByRole("navigation");

    expect(nav).toBeInTheDocument();
    // Check for solid variant classes
    expect(nav.className).toContain("p-3");
  });

  test("applies custom class and aria-label", () => {
    render(CustomClassesTest);
    const nav = screen.getByRole("navigation");

    expect(nav).toHaveAttribute("aria-label", "Custom navigation");
    expect(nav.className).toContain("custom-breadcrumb");
  });

  test("renders multiple breadcrumb items", () => {
    const { container } = render(BasicBreadcrumbTest);
    const items = container.querySelectorAll("li");

    expect(items).toHaveLength(3);
  });
});

describe("BreadcrumbItem component - Home", () => {
  test("renders home item with default icon", () => {
    render(HomeItemTest);
    const homeItem = screen.getByTestId("home-item");

    expect(homeItem).toBeInTheDocument();

    // Check for home link
    const link = homeItem.querySelector("a");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
    expect(link).toHaveTextContent("Home");

    // Check for default home icon (SVG)
    const svg = homeItem.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  test("renders home item with custom icon", () => {
    render(CustomHomeIconTest);
    const customIcon = screen.getByTestId("custom-home-icon");

    expect(customIcon).toBeInTheDocument();
  });

  test("home item has correct structure", () => {
    render(HomeItemTest);
    const homeItem = screen.getByTestId("home-item");

    // Home items should have inline-flex class
    expect(homeItem.className).toContain("inline-flex");
  });
});

describe("BreadcrumbItem component - Link items", () => {
  test("renders link item with href", () => {
    render(LinkItemTest);
    const linkItem = screen.getByTestId("link-item");

    expect(linkItem).toBeInTheDocument();

    // Check for separator icon (non-home items should have separator)
    const separator = linkItem.querySelector("svg");
    expect(separator).toBeInTheDocument();

    // Check for link
    const link = linkItem.querySelector("a");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/about");
    expect(link).toHaveTextContent("About");
  });

  test("link item has correct structure", () => {
    render(LinkItemTest);
    const linkItem = screen.getByTestId("link-item");

    // Non-home items should have flex items-center class
    expect(linkItem.className).toContain("flex");
    expect(linkItem.className).toContain("items-center");
  });
});

describe("BreadcrumbItem component - Span items", () => {
  test("renders span item without href", () => {
    render(SpanItemTest);
    const spanItem = screen.getByTestId("span-item");

    expect(spanItem).toBeInTheDocument();

    // Check for separator icon
    const separator = spanItem.querySelector("svg");
    expect(separator).toBeInTheDocument();

    // Check for span instead of link
    const span = spanItem.querySelector("span");
    expect(span).toBeInTheDocument();
    expect(span).toHaveTextContent("Current Page");

    // Should not have a link
    const link = spanItem.querySelector("a");
    expect(link).not.toBeInTheDocument();
  });

  test("span item has correct styling classes", () => {
    render(SpanItemTest);
    const spanItem = screen.getByTestId("span-item");
    const span = spanItem.querySelector("span");

    expect(span).toBeInTheDocument();
    // Span should have different styling than links
    expect(span?.className).toContain("text-body-subtle");
  });
});

describe("BreadcrumbItem component - Custom separator", () => {
  test("renders custom separator icon", () => {
    render(CustomSeparatorTest);
    const customSeparator = screen.getByTestId("custom-separator");

    expect(customSeparator).toBeInTheDocument();
  });
});

describe("Breadcrumb accessibility", () => {
  test("has correct ARIA attributes", () => {
    render(BasicBreadcrumbTest);
    const nav = screen.getByRole("navigation");

    expect(nav).toHaveAttribute("aria-label");
  });

  test("maintains semantic HTML structure", () => {
    const { container } = render(BasicBreadcrumbTest);

    // Should have nav > ol > li structure
    const nav = container.querySelector("nav");
    expect(nav).toBeInTheDocument();

    const ol = nav?.querySelector("ol");
    expect(ol).toBeInTheDocument();

    const li = ol?.querySelectorAll("li");
    expect(li).toBeTruthy();
    expect(li?.length).toBeGreaterThan(0);
  });

  test("links are keyboard accessible", () => {
    render(BasicBreadcrumbTest);
    const links = screen.getAllByRole("link");

    links.forEach((link) => {
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href");
    });
  });
});
