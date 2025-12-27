import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicSidebarTest from "./basic-sidebar.test.svelte";
import ActiveSidebarItemTest from "./active-sidebar-item.test.svelte";

afterEach(() => {
  cleanup();
});

describe("SidebarItem Component", () => {
  describe("Basic Functionality", () => {
    test("renders sidebar item with label", () => {
      render(BasicSidebarTest);

      expect(screen.getByText("Dashboard")).toBeInTheDocument();
      expect(screen.getByText("Settings")).toBeInTheDocument();
    });

    test("renders as link with href", () => {
      render(BasicSidebarTest);
      const dashboardLink = screen.getByRole("link", { name: /dashboard/i });

      expect(dashboardLink).toHaveAttribute("href", "/dashboard");
    });

    test("sidebar item is within list item", () => {
      const { container } = render(BasicSidebarTest);
      const listItems = container.querySelectorAll("li");

      expect(listItems.length).toBeGreaterThan(0);
    });
  });

  describe("Active State", () => {
    test("renders active sidebar item", () => {
      render(ActiveSidebarItemTest);
      const dashboardLink = screen.getByRole("link", { name: /dashboard/i });

      expect(dashboardLink).toHaveAttribute("aria-current", "page");
    });

    test("active item has active styling", () => {
      render(ActiveSidebarItemTest);
      const dashboardLink = screen.getByRole("link", { name: /dashboard/i });

      expect(dashboardLink).toHaveClass("bg-gray-200");
    });

    test("non-active item does not have aria-current", () => {
      render(ActiveSidebarItemTest);
      const settingsLink = screen.getByRole("link", { name: /settings/i });

      expect(settingsLink).not.toHaveAttribute("aria-current");
    });

    test("non-active item does not have active styling", () => {
      render(ActiveSidebarItemTest);
      const settingsLink = screen.getByRole("link", { name: /settings/i });

      expect(settingsLink).not.toHaveClass("bg-gray-200");
    });
  });

  describe("Styling", () => {
    test("applies base styling classes", () => {
      render(BasicSidebarTest);
      const dashboardLink = screen.getByRole("link", { name: /dashboard/i });

      expect(dashboardLink).toHaveClass("flex", "items-center", "px-2", "py-1.5");
    });

    test("label has margin class", () => {
      const { container } = render(BasicSidebarTest);
      const span = container.querySelector("span");

      expect(span).toHaveClass("ms-3");
    });
  });

  describe("Interaction", () => {
    test("sidebar item link is clickable and has correct href", async () => {
      const user = userEvent.setup();
      render(BasicSidebarTest);
      const dashboardLink = screen.getByRole("link", { name: /dashboard/i });

      // Verify href is correct before click
      expect(dashboardLink).toHaveAttribute("href", "/dashboard");

      // Verify link is clickable (preventDefault in test prevents actual navigation)
      await user.click(dashboardLink);
      expect(dashboardLink).toBeInTheDocument();
    });
  });
});
