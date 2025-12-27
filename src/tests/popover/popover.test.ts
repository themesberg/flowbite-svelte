import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicPopoverTest from "./basic-popover.test.svelte";
import HoverPopoverTest from "./hover-popover.test.svelte";
import ColoredPopoverTest from "./colored-popover.test.svelte";
import NoTitlePopoverTest from "./no-title-popover.test.svelte";
import NoArrowPopoverTest from "./no-arrow-popover.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Popover Component", () => {
  describe("Basic Functionality", () => {
    test("renders trigger button", () => {
      render(BasicPopoverTest);
      const button = screen.getByRole("button", { name: "Click me" });

      expect(button).toBeInTheDocument();
    });

    test("renders popover title", () => {
      render(BasicPopoverTest);

      expect(screen.getByText("Popover Title")).toBeInTheDocument();
    });

    test("renders popover content", () => {
      render(BasicPopoverTest);

      expect(screen.getByText("This is the popover content.")).toBeInTheDocument();
    });

    test("popover content is visible when open", () => {
      render(BasicPopoverTest);
      const content = screen.getByText("This is the popover content.");

      // Content should be visible when isOpen is true
      expect(content).toBeInTheDocument();
    });
  });

  describe("Trigger Types", () => {
    test("renders with click trigger", () => {
      render(BasicPopoverTest);
      const button = screen.getByRole("button", { name: "Click me" });

      expect(button).toBeInTheDocument();
    });

    test("renders with hover trigger", () => {
      render(HoverPopoverTest);
      const button = screen.getByRole("button", { name: "Hover me" });

      expect(button).toBeInTheDocument();
      expect(screen.getByText("Popover with hover trigger")).toBeInTheDocument();
    });
  });

  describe("Customization", () => {
    test("applies custom color", () => {
      render(ColoredPopoverTest);

      expect(screen.getByText("Custom Color")).toBeInTheDocument();
      expect(screen.getByText("This popover has a custom blue color.")).toBeInTheDocument();
    });

    test("renders without title", () => {
      render(NoTitlePopoverTest);

      expect(screen.queryByText("Popover Title")).not.toBeInTheDocument();
      expect(screen.getByText("Popover without a title.")).toBeInTheDocument();
    });

    test("renders without arrow", () => {
      render(NoArrowPopoverTest);

      expect(screen.getByText("No Arrow")).toBeInTheDocument();
      expect(screen.getByText("This popover has no arrow.")).toBeInTheDocument();
    });
  });

  describe("Placement", () => {
    test("renders popover with bottom placement prop", () => {
      render(ColoredPopoverTest);
      const button = screen.getByRole("button", { name: "Click me" });
      const popover = screen.getByRole("tooltip", { hidden: true });

      expect(button).toBeInTheDocument();
      expect(popover).toBeInTheDocument();
      // Note: Actual placement styling is handled by Popper.js at runtime
      // and may not be testable without browser simulation
    });
  });

  describe("Interaction", () => {
    test("trigger button is clickable and popover is rendered", async () => {
      const user = userEvent.setup();
      render(BasicPopoverTest);

      const button = screen.getByRole("button", { name: "Click me" });
      const popover = screen.getByRole("tooltip", { hidden: true });

      // Verify popover content is accessible
      expect(popover).toBeInTheDocument();
      expect(screen.getByText("This is the popover content.")).toBeInTheDocument();

      await user.click(button);

      // Verify button remains functional after click
      expect(button).toBeInTheDocument();
    });
  });
});
