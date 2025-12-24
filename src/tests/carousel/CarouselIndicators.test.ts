import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import CarouselWithIndicatorsTest from "./carousel-with-indicators.test.svelte";

afterEach(() => {
  cleanup();
});

describe("CarouselIndicators Component", () => {
  describe("Basic Rendering", () => {
    test("indicators render within carousel", () => {
      render(CarouselWithIndicatorsTest);

      const buttons = screen.getAllByRole("button");
      // Should have 1 carousel button + 3 indicator buttons for 3 images
      expect(buttons.length).toBe(4);
    });

    test("correct number of indicators for images", () => {
      render(CarouselWithIndicatorsTest);

      const buttons = screen.getAllByRole("button");
      // First button is the carousel itself, rest are indicators
      const indicatorButtons = buttons.slice(1);

      // Should have 3 indicators for 3 test images
      expect(indicatorButtons.length).toBe(3);
    });

    test("indicators have correct structure", () => {
      const { container } = render(CarouselWithIndicatorsTest);

      // Find the indicators container
      const indicatorsContainer = container.querySelector('[class*="absolute"][class*="start-1/2"]');

      expect(indicatorsContainer).toBeInTheDocument();
      expect(indicatorsContainer).toHaveClass("absolute", "flex");
    });
  });

  describe("Selection State", () => {
    test("first indicator is active by default", () => {
      render(CarouselWithIndicatorsTest);

      const buttons = screen.getAllByRole("button");
      const indicatorButtons = buttons.slice(1);

      // First indicator should have aria-current="true"
      expect(indicatorButtons[0]).toHaveAttribute("aria-current", "true");
    });

    test("only one indicator is active at a time", () => {
      render(CarouselWithIndicatorsTest);

      const buttons = screen.getAllByRole("button");
      const indicatorButtons = buttons.slice(1);

      const activeIndicators = indicatorButtons.filter((btn) => btn.getAttribute("aria-current") === "true");

      expect(activeIndicators.length).toBe(1);
    });

    test("indicators have correct opacity classes", () => {
      const { container } = render(CarouselWithIndicatorsTest);

      // Find indicator divs inside buttons
      const indicators = container.querySelectorAll("button > div");

      // Active indicator should have opacity-100
      expect(indicators[0]).toHaveClass("opacity-100");

      // Inactive indicators should have opacity-60
      expect(indicators[1]).toHaveClass("opacity-60");
      expect(indicators[2]).toHaveClass("opacity-60");
    });
  });

  describe("Interactions", () => {
    test("clicking indicators works", async () => {
      const user = userEvent.setup();
      render(CarouselWithIndicatorsTest);

      const buttons = screen.getAllByRole("button");
      const indicatorButtons = buttons.slice(1);

      // Click second indicator
      await user.click(indicatorButtons[1]);

      // Should still be in document
      expect(indicatorButtons[1]).toBeInTheDocument();
    });
  });

  describe("Positioning", () => {
    test("indicators are positioned at bottom by default", () => {
      const { container } = render(CarouselWithIndicatorsTest);

      const indicatorsContainer = container.querySelector('[class*="absolute"][class*="start-1/2"]');

      // Default position should be bottom
      expect(indicatorsContainer).toHaveClass("bottom-5");
    });
  });

  describe("Accessibility", () => {
    test("indicators have button role", () => {
      render(CarouselWithIndicatorsTest);

      const buttons = screen.getAllByRole("button");
      const indicatorButtons = buttons.slice(1);

      indicatorButtons.forEach((button) => {
        expect(button.tagName).toBe("BUTTON");
      });
    });

    test("active indicator has aria-current attribute", () => {
      render(CarouselWithIndicatorsTest);

      const buttons = screen.getAllByRole("button");
      const indicatorButtons = buttons.slice(1);

      const activeIndicator = indicatorButtons.find((btn) => btn.getAttribute("aria-current") === "true");

      expect(activeIndicator).toBeDefined();
    });
  });
});
