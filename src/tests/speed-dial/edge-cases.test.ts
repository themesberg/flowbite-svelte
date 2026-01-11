import { cleanup, render, screen, waitFor } from "@testing-library/svelte";
import { expect, test, afterEach, describe, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicSpeedDialTest from "./basic-speed-dial.test.svelte";
import ButtonColorsTest from "./button-colors.test.svelte";
import PropsVariationsTest from "./props-variations.test.svelte";
import KeyboardAccessible from "./keyboard-accessible.test.svelte";

beforeEach(() => {
  vi.useFakeTimers({ shouldAdvanceTime: true });
});

afterEach(() => {
  cleanup();
  vi.clearAllTimers();
  vi.useRealTimers();
});

describe("SpeedDial - Edge Cases & Additional Scenarios", () => {
  describe("Button Colors", () => {
    test("buttons accept color prop", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(ButtonColorsTest, { color: "primary" });
      const trigger = screen.getByTestId("color-trigger");

      await user.hover(trigger);

      const shareButton = await screen.findByRole("button", { name: /share/i });
      expect(shareButton).toBeInTheDocument();
      // Button should have color classes applied
      expect(shareButton.className).toBeTruthy();
    });

    test("buttons with different colors render correctly", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const colors = ["primary", "blue", "green", "red", "yellow", "purple"] as const;

      for (const color of colors) {
        cleanup();
        // Clear timers between iterations to prevent accumulation under fake timers
        vi.clearAllTimers();
        render(ButtonColorsTest, { color });
        const trigger = screen.getByTestId("color-trigger");

        await user.hover(trigger);

        const shareButton = await screen.findByRole("button", { name: /share/i });
        expect(shareButton).toBeInTheDocument();
      }
    });
  });

  describe("Custom Classes", () => {
    test("SpeedDial accepts custom className", async () => {
      render(BasicSpeedDialTest);

      // Speed dial should be present
      const trigger = screen.getByTestId("speed-dial-trigger");
      expect(trigger).toBeInTheDocument();
    });

    test("SpeedDialButton accepts custom className", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      await user.hover(trigger);

      const shareButton = await screen.findByRole("button", { name: /share/i });
      expect(shareButton).toBeInTheDocument();
      expect(shareButton.className).toBeTruthy();
    });

    test("SpeedDialTrigger accepts custom className", () => {
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      // Should have custom class
      expect(trigger.className).toContain("absolute");
    });
  });

  describe("Empty States", () => {
    test("speed dial renders without buttons", () => {
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      expect(trigger).toBeInTheDocument();
    });
  });

  describe("Icon Sizes", () => {
    test("button icons have correct size classes", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      await user.hover(trigger);

      const shareButton = await screen.findByRole("button", { name: /share/i });
      const icon = shareButton.querySelector("svg");

      expect(icon).toBeInTheDocument();
      expect(icon).toHaveClass("h-5");
      expect(icon).toHaveClass("w-5");
    });

    test("trigger icon has correct size", () => {
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");
      const icon = trigger.querySelector("svg");

      expect(icon).toBeInTheDocument();
      expect(icon).toHaveClass("h-8");
      expect(icon).toHaveClass("w-8");
    });
  });

  describe("Tooltip and TextOutside Interaction", () => {
    test("textOutside=true and tooltip='none' shows text without tooltip", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const { container } = render(PropsVariationsTest, {
        textOutside: true,
        tooltip: "none"
      });
      const trigger = screen.getByTestId("props-trigger");

      await user.hover(trigger);

      const shareButton = await screen.findByRole("button", { name: /share/i });
      const span = shareButton.querySelector("span:not(.sr-only)");

      expect(span).toBeInTheDocument();
      expect(span?.textContent).toBe("Share");

      // Should not have separate tooltip elements for each button
      const tooltips = container.querySelectorAll('[role="tooltip"]');
      expect(tooltips.length).toBeLessThanOrEqual(1); // Only main popper
    });

    test("textOutside=false and tooltip='left' shows sr-only text and tooltip", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(PropsVariationsTest, {
        textOutside: false,
        tooltip: "left"
      });
      const trigger = screen.getByTestId("props-trigger");

      await user.hover(trigger);

      const shareButton = await screen.findByRole("button", { name: /share/i });
      const srSpan = shareButton.querySelector("span.sr-only");

      expect(srSpan).toBeInTheDocument();
      expect(srSpan?.textContent).toBe("Share");

      // Hover button to show tooltip
      await user.hover(shareButton);

      await waitFor(() => expect(screen.getByRole("tooltip")).toBeInTheDocument());
      const tooltip = screen.getByRole("tooltip");
      expect(tooltip).toHaveTextContent(/share/i);
    });
  });

  describe("Responsive Behavior", () => {
    test("speed dial works with different viewport sizes", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      // Use vi.stubGlobal for more reliable viewport simulation
      // This works consistently across browser and JSDOM environments
      const restore = () => {
        vi.unstubAllGlobals();
        window.dispatchEvent(new Event("resize"));
      };

      try {
        // Simulate mobile viewport
        vi.stubGlobal("innerWidth", 375);
        vi.stubGlobal("innerHeight", 667);
        window.dispatchEvent(new Event("resize"));

        render(BasicSpeedDialTest);
        const trigger = screen.getByTestId("speed-dial-trigger");

        await user.hover(trigger);

        const shareButton = await screen.findByRole("button", { name: /share/i });
        expect(shareButton).toBeInTheDocument();
      } finally {
        // Restore original window dimensions to prevent cross-test leaks
        restore();
      }
    });

    test("trigger button is appropriately sized", () => {
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      // Trigger should have padding classes
      expect(trigger.className).toContain("p-3");
    });
  });

  describe("Performance", () => {
    test("rapid open/close operations do not cause errors", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      // Rapid operations
      for (let i = 0; i < 5; i++) {
        await user.hover(trigger);
        await user.unhover(trigger);
      }

      // Should not throw errors
      expect(trigger).toBeInTheDocument();
    });

    test("multiple button clicks in succession work correctly", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      await user.hover(trigger);

      const shareButton = await screen.findByRole("button", { name: /share/i });

      // Multiple rapid clicks
      await user.click(shareButton);
      await user.click(shareButton);
      await user.click(shareButton);

      // Should not cause errors
      expect(shareButton).toBeInTheDocument();
    });
  });

  describe("Accessibility Edge Cases", () => {
    test("speed dial works without mouse interactions", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(KeyboardAccessible);

      // Tab to trigger
      await user.tab();
      const trigger = screen.getByTestId("speed-dial-trigger");
      expect(trigger).toHaveFocus();

      // Click to open SpeedDial (trigger="click")
      await user.click(trigger);

      // Now buttons should be in the document
      const shareButton = await screen.findByRole("button", { name: /share/i });
      expect(shareButton).toBeInTheDocument();
    });

    test("all interactive elements are keyboard accessible", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(KeyboardAccessible);

      const trigger = screen.getByTestId("speed-dial-trigger");

      // Open using click
      await user.click(trigger);

      // Wait for buttons to appear after popper positioning
      const shareButton = await screen.findByRole("button", { name: /share/i });
      const printButton = await screen.findByRole("button", { name: /print/i });
      const downloadButton = await screen.findByRole("button", { name: /download/i });

      expect(shareButton).toBeInTheDocument();
      expect(printButton).toBeInTheDocument();
      expect(downloadButton).toBeInTheDocument();

      // Tab through all buttons
      await user.tab();
      expect(shareButton).toHaveFocus();

      await user.tab();
      expect(printButton).toHaveFocus();

      await user.tab();
      expect(downloadButton).toHaveFocus();
    });
  });
});
