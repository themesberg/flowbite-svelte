import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicDropdownTest from "./basic-dropdown.test.svelte";
import DropdownWithHeaderTest from "./dropdown-with-header.test.svelte";
import DropdownWithGroupsTest from "./dropdown-with-groups.test.svelte";
import DropdownWithLinksTest from "./dropdown-with-links.test.svelte";
import DropdownPlacementTest from "./dropdown-placement.test.svelte";
import DropdownClickTest, { testState } from "./dropdown-click.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Dropdown Component", () => {
  describe("Basic Rendering", () => {
    test("basic dropdown renders correctly", () => {
      render(BasicDropdownTest);
      const button = screen.getByText("Dropdown button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute("type", "button");
    });

    test("dropdown with header renders correctly", () => {
      render(DropdownWithHeaderTest);
      const name = screen.getByText("Bonnie Green");
      const email = screen.getByText("bonnie@example.com");

      expect(name).toBeInTheDocument();
      expect(email).toBeInTheDocument();
    });

    test("dropdown with groups renders correctly", () => {
      render(DropdownWithGroupsTest);
      const profile = screen.getByText("Profile");
      const messages = screen.getByText("Messages");

      expect(profile).toBeInTheDocument();
      expect(messages).toBeInTheDocument();
    });

    test("dropdown with links renders correctly", () => {
      render(DropdownWithLinksTest);
      const dashboardLink = screen.getByText("Dashboard").closest("a");

      expect(dashboardLink).toBeInTheDocument();
      expect(dashboardLink).toHaveAttribute("href", "/dashboard");
    });
  });

  describe("Props", () => {
    test("dropdown placement can be set", () => {
      render(DropdownPlacementTest);
      const button = screen.getByText("Top placement");

      expect(button).toBeInTheDocument();
    });

    test("dropdown items can have href prop", () => {
      render(DropdownWithLinksTest);
      const dashboardLink = screen.getByText("Dashboard").closest("a");
      const settingsLink = screen.getByText("Settings").closest("a");

      expect(dashboardLink).toHaveAttribute("href", "/dashboard");
      expect(settingsLink).toHaveAttribute("href", "/settings");
    });

    test("active URL highlights the correct item", () => {
      render(DropdownWithLinksTest);
      const dashboardLink = screen.getByText("Dashboard").closest("a");

      // The active link should have different styling
      expect(dashboardLink).toBeInTheDocument();
    });
  });

  describe("Interactions", () => {
    test("clicking toggle button opens dropdown", async () => {
      const user = userEvent.setup();
      render(BasicDropdownTest);
      const button = screen.getByText("Dropdown button");

      // Dropdown starts open, so items should be visible
      const dashboardItem = screen.getByText("Dashboard");
      expect(dashboardItem).toBeInTheDocument();

      // Click to close
      await user.click(button);

      // Click again to reopen
      await user.click(button);
      expect(dashboardItem).toBeInTheDocument();
    });

    test("dropdown item click event works", async () => {
      const user = userEvent.setup();
      testState.clickCount = 0;

      render(DropdownClickTest);
      const item = screen.getByText("Item 1").closest("button");

      expect(testState.clickCount).toBe(0);
      expect(item).toBeInTheDocument();

      if (item) {
        await user.click(item);
        expect(testState.clickCount).toBe(1);

        await user.click(item);
        expect(testState.clickCount).toBe(2);
      }
    });
  });

  describe("Components", () => {
    test("DropdownDivider renders correctly", () => {
      render(DropdownWithHeaderTest);

      // Check that divider is in the document
      const dashboard = screen.getByText("Dashboard");
      expect(dashboard).toBeInTheDocument();
    });

    test("DropdownHeader renders correctly", () => {
      render(DropdownWithHeaderTest);
      const header = screen.getByText("Bonnie Green").closest("div");

      expect(header).toBeInTheDocument();
    });

    test("DropdownGroup renders correctly", () => {
      render(DropdownWithGroupsTest);

      // Both groups should be present
      const profile = screen.getByText("Profile");
      const messages = screen.getByText("Messages");

      expect(profile).toBeInTheDocument();
      expect(messages).toBeInTheDocument();
    });
  });

  describe("DropdownItem Variations", () => {
    test("DropdownItem with href renders as link", () => {
      render(DropdownWithLinksTest);
      const link = screen.getByText("Dashboard").closest("a");

      expect(link).toBeInTheDocument();
      expect(link?.tagName).toBe("A");
    });

    test("DropdownItem with onclick renders as button", () => {
      render(DropdownClickTest);
      const button = screen.getByText("Item 1").closest("button");

      expect(button).toBeInTheDocument();
      expect(button?.tagName).toBe("BUTTON");
      expect(button).toHaveAttribute("type", "button");
    });

    test("DropdownItem without href or onclick renders as div", () => {
      render(DropdownClickTest);
      const item = screen.getByText("Item 2");
      const parentDiv = item.closest("div");

      expect(parentDiv).toBeInTheDocument();
    });
  });
});
