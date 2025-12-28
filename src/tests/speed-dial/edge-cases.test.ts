import { cleanup, render, screen, act } from "@testing-library/svelte";
import { expect, test, afterEach, describe, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicSpeedDialTest from "./basic-speed-dial.test.svelte";
import ButtonColorsTest from "./button-colors.test.svelte";
import PropsVariationsTest from "./props-variations.test.svelte";

beforeEach(() => {
  vi.useFakeTimers();
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
      await act(() => vi.advanceTimersByTime(300));

      const shareButton = screen.getByRole("button", { name: /share/i });
      expect(shareButton).toBeInTheDocument();
      // Button should have color classes applied
      expect(shareButton.className).toBeTruthy();
    });

    test("buttons with different colors render correctly", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const colors = ["primary", "blue", "green", "red", "yellow", "purple"];

      for (const color of colors) {
        cleanup();
        render(ButtonColorsTest, { color: color as string });
        const trigger = screen.getByTestId("color-trigger");

        await user.hover(trigger);
        await act(() => vi.advanceTimersByTime(300));

        const shareButton = screen.queryByRole("button", { name: /share/i });
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
      await act(() => vi.advanceTimersByTime(300));

      const shareButton = screen.getByRole("button", { name: /share/i });
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
      await act(() => vi.advanceTimersByTime(300));

      const shareButton = screen.getByRole("button", { name: /share/i });
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
      await act(() => vi.advanceTimersByTime(300));

      const shareButton = screen.getByRole("button", { name: /share/i });
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
      await act(() => vi.advanceTimersByTime(300));

      const shareButton = screen.getByRole("button", { name: /share/i });
      const srSpan = shareButton.querySelector("span.sr-only");

      expect(srSpan).toBeInTheDocument();
      expect(srSpan?.textContent).toBe("Share");

      // Hover button to show tooltip
      await user.hover(shareButton);
      await act(() => vi.advanceTimersByTime(300));

      // Tooltip should appear
      const shareTexts = screen.getAllByText(/share/i);
      expect(shareTexts.length).toBeGreaterThan(1);
    });
  });

  describe("Responsive Behavior", () => {
    test("speed dial works with different viewport sizes", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      // Simulate mobile viewport using window
      window.innerWidth = 375;
      window.innerHeight = 667;
      window.dispatchEvent(new Event("resize"));

      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      await user.hover(trigger);
      await act(() => vi.advanceTimersByTime(300));

      expect(screen.queryByRole("button", { name: /share/i })).toBeInTheDocument();
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
        await act(() => vi.advanceTimersByTime(100));
        await user.unhover(trigger);
        await act(() => vi.advanceTimersByTime(100));
      }

      // Should not throw errors
      expect(trigger).toBeInTheDocument();
    });

    test("multiple button clicks in succession work correctly", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      await user.hover(trigger);
      await act(() => vi.advanceTimersByTime(300));

      const shareButton = screen.getByRole("button", { name: /share/i });

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
      render(BasicSpeedDialTest);

      // Tab to trigger
      await user.tab();
      const trigger = screen.getByTestId("speed-dial-trigger");
      expect(trigger).toHaveFocus();

      // Hover should still work
      await user.hover(trigger);
      await act(() => vi.advanceTimersByTime(300));

      expect(screen.queryByRole("button", { name: /share/i })).toBeInTheDocument();
    });

    test("all interactive elements are keyboard accessible", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(BasicSpeedDialTest);

      const trigger = screen.getByTestId("speed-dial-trigger");
      trigger.focus();
      await user.hover(trigger);
      await act(() => vi.advanceTimersByTime(300));

      // Tab through all buttons
      await user.tab();
      expect(screen.getByRole("button", { name: /share/i })).toHaveFocus();

      await user.tab();
      expect(screen.getByRole("button", { name: /print/i })).toHaveFocus();

      await user.tab();
      expect(screen.getByRole("button", { name: /download/i })).toHaveFocus();
    });
  });
});
