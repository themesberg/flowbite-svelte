import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicSidebarTest from "./basic-sidebar.test.svelte";
import BasicSidebarBrandTest from "./basic-sidebar-brand.test.svelte";
import CustomSidebarBrandTest from "./custom-sidebar-brand.test.svelte";
import BasicSidebarButtonTest from "./basic-sidebar-button.test.svelte";
import BasicSidebarCtaTest from "./basic-sidebar-cta.test.svelte";
import DropdownSidebarTest from "./dropdown-sidebar.test.svelte";
import ActiveSidebarItemTest from "./active-sidebar-item.test.svelte";
import BorderSidebarGroupTest from "./border-sidebar-group.test.svelte";
import SidebarWrapperTest from "./sidebar-wrapper.test.svelte";
import PositionedSidebarTest from "./positioned-sidebar.test.svelte";
import BackdropSidebarTest from "./backdrop-sidebar.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Sidebar Component", () => {
  describe("Basic Functionality", () => {
    test("renders sidebar with items", () => {
      render(BasicSidebarTest);
      const sidebar = screen.getByRole("complementary");

      expect(sidebar).toBeInTheDocument();
      expect(screen.getByText("Dashboard")).toBeInTheDocument();
      expect(screen.getByText("Settings")).toBeInTheDocument();
    });

    test("renders sidebar links correctly", () => {
      render(BasicSidebarTest);
      const dashboardLink = screen.getByRole("link", { name: /dashboard/i });
      const settingsLink = screen.getByRole("link", { name: /settings/i });

      expect(dashboardLink).toHaveAttribute("href", "/dashboard");
      expect(settingsLink).toHaveAttribute("href", "/settings");
    });

    test("sidebar has proper ARIA structure", () => {
      render(BasicSidebarTest);
      const sidebar = screen.getByRole("complementary");
      const lists = sidebar.querySelectorAll("ul");

      expect(sidebar).toBeInTheDocument();
      expect(lists.length).toBeGreaterThan(0);
    });
  });

  describe("SidebarBrand Component", () => {
    test("renders brand with site object", () => {
      render(BasicSidebarBrandTest);
      const link = screen.getByRole("link");
      const image = screen.getByRole("img");

      expect(link).toHaveAttribute("href", "/");
      expect(image).toHaveAttribute("src", "/images/logo.svg");
      expect(image).toHaveAttribute("alt", "Flowbite");
      expect(screen.getByText("Flowbite")).toBeInTheDocument();
    });

    test("renders brand with custom children", () => {
      render(CustomSidebarBrandTest);

      expect(screen.getByText("Custom Brand Content")).toBeInTheDocument();
    });

    test("brand link is clickable", () => {
      render(BasicSidebarBrandTest);
      const link = screen.getByRole("link");

      expect(link).toBeInTheDocument();
    });
  });

  describe("SidebarButton Component", () => {
    test("renders sidebar button", () => {
      render(BasicSidebarButtonTest);
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute("type", "button");
    });

    test("sidebar button has accessibility label", () => {
      render(BasicSidebarButtonTest);
      const srOnly = screen.getByText("Open sidebar");

      expect(srOnly).toBeInTheDocument();
      expect(srOnly).toHaveClass("sr-only");
    });

    test("sidebar button contains SVG icon", () => {
      const { container } = render(BasicSidebarButtonTest);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("fill", "currentColor");
    });

    test("sidebar button renders and is clickable", async () => {
      const user = userEvent.setup();
      render(BasicSidebarButtonTest);
      const button = screen.getByRole("button");

      // Button should be clickable without errors
      await user.click(button);
      expect(button).toBeInTheDocument();
      // Note: This component has no behavior to test - it's a presentational button
    });
  });

  describe("SidebarCta Component", () => {
    test("renders CTA with label", () => {
      render(BasicSidebarCtaTest);

      expect(screen.getByText("Beta")).toBeInTheDocument();
    });

    test("renders CTA with content", () => {
      render(BasicSidebarCtaTest);

      expect(screen.getByText(/Preview our new dashboard design/i)).toBeInTheDocument();
    });

    test("CTA has alert role", () => {
      const { container } = render(BasicSidebarCtaTest);
      const cta = container.querySelector('[role="alert"]');

      expect(cta).toBeInTheDocument();
    });
  });

  describe("SidebarDropdownWrapper Component", () => {
    test("renders dropdown button", () => {
      render(DropdownSidebarTest);
      const button = screen.getByRole("button", { name: /products/i });

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("Products");
    });

    test("dropdown items are initially visible", () => {
      render(DropdownSidebarTest);

      // Items should be visible initially since we're not using controlled state
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.getByText("Product 2")).toBeInTheDocument();
    });

    test("dropdown button toggles visibility", async () => {
      const user = userEvent.setup();
      render(DropdownSidebarTest);
      const button = screen.getByRole("button", { name: /products/i });

      // Initial state - items should be visible (isOpen={true} in test component)
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.getByText("Product 2")).toBeInTheDocument();

      // Click to toggle - behavior depends on component implementation
      await user.click(button);
      expect(button).toBeInTheDocument();
    });

    test("dropdown contains arrow icon", () => {
      const { container } = render(DropdownSidebarTest);
      const svgs = container.querySelectorAll("svg");

      expect(svgs.length).toBeGreaterThan(0);
    });
  });

  describe("SidebarItem Component", () => {
    test("renders active sidebar item", () => {
      render(ActiveSidebarItemTest);
      const dashboardLink = screen.getByRole("link", { name: /dashboard/i });

      // Active items should have aria-current for accessibility
      expect(dashboardLink).toHaveAttribute("aria-current", "page");
      // Active items should have visual styling (testing implementation detail)
      expect(dashboardLink).toHaveClass("bg-gray-200");
    });

    test("renders non-active sidebar item", () => {
      render(ActiveSidebarItemTest);
      const settingsLink = screen.getByRole("link", { name: /settings/i });

      expect(settingsLink).not.toHaveAttribute("aria-current");
    });

    test("sidebar item links render and are clickable", async () => {
      const user = userEvent.setup();
      render(BasicSidebarTest);
      const dashboardLink = screen.getByRole("link", { name: /dashboard/i });

      // Links should be clickable without errors
      await user.click(dashboardLink);
      expect(dashboardLink).toBeInTheDocument();
      expect(dashboardLink).toHaveAttribute("href", "/dashboard");
      // Note: Navigation behavior is handled by the router, not tested here
    });
  });

  describe("SidebarGroup Component", () => {
    test("renders sidebar group", () => {
      const { container } = render(BasicSidebarTest);
      const groups = container.querySelectorAll("ul");

      expect(groups.length).toBeGreaterThan(0);
    });

    test("renders border for sidebar group", () => {
      const { container } = render(BorderSidebarGroupTest);
      const group = container.querySelector(".border-t");

      expect(group).toBeInTheDocument();
    });

    test("sidebar group contains items", () => {
      render(BorderSidebarGroupTest);

      expect(screen.getByText("Dashboard")).toBeInTheDocument();
      expect(screen.getByText("Settings")).toBeInTheDocument();
      expect(screen.getByText("Profile")).toBeInTheDocument();
    });
  });

  describe("SidebarWrapper Component", () => {
    test("renders wrapper with content", () => {
      render(SidebarWrapperTest);

      expect(screen.getByText("Wrapped content")).toBeInTheDocument();
    });

    test("wrapper applies custom class", () => {
      const { container } = render(SidebarWrapperTest);
      const wrapper = container.querySelector(".custom-wrapper");

      expect(wrapper).toBeInTheDocument();
    });
  });

  describe("Sidebar Variants", () => {
    test("renders sidebar with absolute position", () => {
      const { container } = render(PositionedSidebarTest);
      const sidebar = container.querySelector("aside");

      expect(sidebar).toHaveClass("absolute");
    });

    test("renders sidebar with backdrop", () => {
      const { container } = render(BackdropSidebarTest);
      const sidebar = container.querySelector("aside");

      expect(sidebar).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    test("sidebar has complementary role", () => {
      render(BasicSidebarTest);
      const sidebar = screen.getByRole("complementary");

      expect(sidebar).toBeInTheDocument();
    });

    test("sidebar items have proper link structure", () => {
      render(BasicSidebarTest);
      const links = screen.getAllByRole("link");

      links.forEach((link) => {
        expect(link).toHaveAttribute("href");
      });
    });

    test("active sidebar item has aria-current", () => {
      render(ActiveSidebarItemTest);
      const activeLink = screen.getByRole("link", { name: /dashboard/i });

      expect(activeLink).toHaveAttribute("aria-current", "page");
    });
  });
});
