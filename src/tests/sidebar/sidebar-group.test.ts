import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicSidebarTest from "./basic-sidebar.test.svelte";
import BorderSidebarGroupTest from "./border-sidebar-group.test.svelte";

afterEach(() => {
  cleanup();
});

describe("SidebarGroup Component", () => {
  describe("Basic Functionality", () => {
    test("renders sidebar group", () => {
      const { container } = render(BasicSidebarTest);
      const groups = container.querySelectorAll("ul");

      expect(groups.length).toBeGreaterThan(0);
    });

    test("group contains sidebar items", () => {
      render(BasicSidebarTest);

      expect(screen.getByText("Dashboard")).toBeInTheDocument();
      expect(screen.getByText("Settings")).toBeInTheDocument();
    });

    test("renders as unordered list", () => {
      const { container } = render(BasicSidebarTest);
      const ul = container.querySelector("ul");

      expect(ul).toBeInTheDocument();
      expect(ul?.tagName).toBe("UL");
    });
  });

  describe("Border Variant", () => {
    test("renders group with border", () => {
      const { container } = render(BorderSidebarGroupTest);
      const borderedGroup = container.querySelector(".border-t");

      expect(borderedGroup).toBeInTheDocument();
    });

    test("border group has correct classes", () => {
      const { container } = render(BorderSidebarGroupTest);
      const borderedGroup = container.querySelector(".border-t");

      expect(borderedGroup).toHaveClass("pt-4", "mt-4", "border-gray-200");
    });

    test("renders multiple groups", () => {
      render(BorderSidebarGroupTest);

      // Should have items from multiple groups
      expect(screen.getByText("Dashboard")).toBeInTheDocument();
      expect(screen.getByText("Settings")).toBeInTheDocument();
      expect(screen.getByText("Profile")).toBeInTheDocument();
    });
  });

  describe("Styling", () => {
    test("group has space-y class by default", () => {
      const { container } = render(BasicSidebarTest);
      const group = container.querySelector("ul");

      expect(group).toHaveClass("space-y-2");
    });

    test("border adds padding and margin", () => {
      const { container } = render(BorderSidebarGroupTest);
      const borderedGroup = container.querySelector(".border-t");

      expect(borderedGroup).toHaveClass("pt-4", "mt-4");
    });
  });

  describe("Content Organization", () => {
    test("groups organize items properly", () => {
      const { container } = render(BorderSidebarGroupTest);
      const groups = container.querySelectorAll("ul");

      // Should have at least 2 groups
      expect(groups.length).toBeGreaterThanOrEqual(2);
    });

    test("each group can contain multiple items", () => {
      render(BorderSidebarGroupTest);
      const links = screen.getAllByRole("link");

      expect(links.length).toBeGreaterThanOrEqual(3);
    });
  });
});
