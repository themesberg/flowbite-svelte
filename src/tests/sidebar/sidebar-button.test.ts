import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicSidebarButtonTest from "./basic-sidebar-button.test.svelte";

afterEach(() => {
  cleanup();
});

describe("SidebarButton Component", () => {
  describe("Basic Functionality", () => {
    test("renders button", () => {
      render(BasicSidebarButtonTest);
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute("type", "button");
    });

    test("has accessibility label", () => {
      render(BasicSidebarButtonTest);
      const srOnly = screen.getByText("Open sidebar");

      expect(srOnly).toBeInTheDocument();
      expect(srOnly).toHaveClass("sr-only");
    });

    test("contains SVG icon", () => {
      const { container } = render(BasicSidebarButtonTest);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("aria-hidden", "true");
      expect(svg).toHaveAttribute("fill", "currentColor");
    });
  });

  describe("Interaction", () => {
    test("button is clickable without errors", async () => {
      const user = userEvent.setup();
      render(BasicSidebarButtonTest);
      const button = screen.getByRole("button");

      // This is a smoke test - verifies button doesn't crash on click
      // In a real app, you would test for sidebar visibility toggle
      await user.click(button);
      expect(button).toBeInTheDocument();
    });
  });

  describe("Styling", () => {
    test("applies base styling classes", () => {
      const { container } = render(BasicSidebarButtonTest);
      const button = container.querySelector("button");

      expect(button).toHaveClass("inline-flex", "items-center");
    });

    test("SVG has proper size classes", () => {
      const { container } = render(BasicSidebarButtonTest);
      const svg = container.querySelector("svg");

      expect(svg).toHaveClass("h-6", "w-6");
    });
  });
});
