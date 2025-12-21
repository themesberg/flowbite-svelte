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
      // Should have carousel button + 2 control buttons
      expect(buttons.length).toBeGreaterThanOrEqual(3);
    });

    test("control buttons have correct structure", () => {
      render(CarouselWithControlsTest);
      
      const buttons = screen.getAllByRole("button");
      const controlButtons = buttons.filter(btn => 
        btn.classList.contains("flex") && 
        btn.classList.contains("absolute")
      );
      
      expect(controlButtons.length).toBe(2);
      
      // Check if they have the expected classes
      controlButtons.forEach(button => {
        expect(button).toHaveClass("flex", "absolute", "top-0", "z-30");
      });
    });

    test("control buttons have correct positioning", () => {
      render(CarouselWithControlsTest);
      
      const buttons = screen.getAllByRole("button");
      const controlButtons = buttons.filter(btn => 
        btn.classList.contains("flex") && 
        btn.classList.contains("absolute")
      );
      
      // One should be at start (left), one at end (right)
      const leftButton = controlButtons.find(btn => btn.classList.contains("start-0"));
      const rightButton = controlButtons.find(btn => btn.classList.contains("end-0"));
      
      expect(leftButton).toBeDefined();
      expect(rightButton).toBeDefined();
    });
  });

  describe("Interactions", () => {
    test("clicking control buttons works", async () => {
      const user = userEvent.setup();
      render(CarouselWithControlsTest);
      
      const buttons = screen.getAllByRole("button");
      const controlButtons = buttons.filter(btn => 
        btn.classList.contains("flex") && 
        btn.classList.contains("absolute")
      );
      
      // Click should not throw error
      await user.click(controlButtons[0]);
      expect(controlButtons[0]).toBeInTheDocument();
      
      await user.click(controlButtons[1]);
      expect(controlButtons[1]).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    test("control buttons are keyboard accessible", () => {
      render(CarouselWithControlsTest);
      
      const buttons = screen.getAllByRole("button");
      const controlButtons = buttons.filter(btn => 
        btn.classList.contains("flex") && 
        btn.classList.contains("absolute")
      );
      
      controlButtons.forEach(button => {
        expect(button).toBeInTheDocument();
        // Button should be focusable
        expect(button.tagName).toBe("BUTTON");
      });
    });
  });
});
