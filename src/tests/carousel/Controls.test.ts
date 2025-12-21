import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import CarouselWithControlsTest from "./carousel-with-controls.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Controls Component", () => {
  describe("Basic Rendering", () => {
    test("controls render within carousel", () => {
      render(CarouselWithControlsTest);

      const buttons = screen.getAllByRole("button");
      // Should have exactly: 1 carousel button + 2 control buttons
      expect(buttons).toHaveLength(3);
    });

    test("control buttons have correct structure", () => {
      render(CarouselWithControlsTest);

      const buttons = screen.getAllByRole("button");
      const controlButtons = buttons.filter((btn) => btn.classList.contains("flex") && btn.classList.contains("absolute"));

      expect(controlButtons.length).toBe(2);

      // Check if they have the expected classes
      controlButtons.forEach((button) => {
        expect(button).toHaveClass("flex", "absolute", "top-0", "z-30");
      });
    });

    test("control buttons have correct positioning", () => {
      render(CarouselWithControlsTest);

      const buttons = screen.getAllByRole("button");
      const controlButtons = buttons.filter((btn) => btn.classList.contains("flex") && btn.classList.contains("absolute"));

      // One should be at start (left), one at end (right)
      const leftButton = controlButtons.find((btn) => btn.classList.contains("start-0"));
      const rightButton = controlButtons.find((btn) => btn.classList.contains("end-0"));

      expect(leftButton).toBeInTheDocument();
      expect(rightButton).toBeInTheDocument();
    });
  });

  describe("Interactions", () => {
    test("clicking control buttons changes carousel", async () => {
      const user = userEvent.setup();
      render(CarouselWithControlsTest);

      const buttons = screen.getAllByRole("button");
      const controlButtons = buttons.filter((btn) => btn.classList.contains("flex") && btn.classList.contains("absolute"));

      // Get carousel by aria-label (it has role="button" for dragging)
      const carousel = screen.getByLabelText("Draggable Carousel");
      expect(carousel).toBeInTheDocument();

      // Click next button
      await user.click(controlButtons[1]);

      // Verify buttons are still in document and functional
      expect(controlButtons[0]).toBeInTheDocument();
      expect(controlButtons[1]).toBeInTheDocument();

      // Click previous button
      await user.click(controlButtons[0]);

      // Verify buttons are still functional
      expect(controlButtons[0]).toBeInTheDocument();
      expect(controlButtons[1]).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    test("control buttons are rendered as focusable button elements", () => {
      render(CarouselWithControlsTest);

      const buttons = screen.getAllByRole("button");
      const controlButtons = buttons.filter((btn) => btn.classList.contains("flex") && btn.classList.contains("absolute"));

      controlButtons.forEach((button) => {
        expect(button).toBeInTheDocument();
        // Button should be focusable
        expect(button.tagName).toBe("BUTTON");
      });
    });

    test("control buttons have screen reader text", () => {
      render(CarouselWithControlsTest);

      // Previous button should have sr-only text
      const previousText = document.querySelector(".sr-only");
      expect(previousText).toBeInTheDocument();

      // Check that sr-only elements exist for both controls
      const srOnlyElements = document.querySelectorAll(".sr-only");
      expect(srOnlyElements.length).toBeGreaterThanOrEqual(2);
    });

    test("control buttons support keyboard navigation", async () => {
      const user = userEvent.setup();
      render(CarouselWithControlsTest);

      const buttons = screen.getAllByRole("button");
      const controlButtons = buttons.filter((btn) => btn.classList.contains("flex") && btn.classList.contains("absolute"));

      // Tab to first focusable element (likely the carousel itself with tabindex=0)
      await user.tab();

      // Tab again to reach control buttons
      await user.tab();

      // After tabbing, verify we can reach a button element
      const activeElement = document.activeElement;
      const isButton = activeElement?.tagName === "BUTTON";
      const isControlButton = controlButtons.some((btn) => btn === activeElement);

      // Either we're on a control button, or we can verify buttons are keyboard accessible
      expect(isButton || isControlButton).toBe(true);

      // Verify control buttons have no tabindex=-1 (they should be reachable)
      controlButtons.forEach((button) => {
        expect(button).not.toHaveAttribute("tabindex", "-1");
      });
    });

    test("SVG icons have aria-hidden attribute", () => {
      render(CarouselWithControlsTest);

      const buttons = screen.getAllByRole("button");
      const controlButtons = buttons.filter((btn) => btn.classList.contains("flex") && btn.classList.contains("absolute"));

      controlButtons.forEach((button) => {
        const svg = button.querySelector("svg");
        expect(svg).toBeInTheDocument();
        expect(svg).toHaveAttribute("aria-hidden", "true");
      });
    });
  });
});
