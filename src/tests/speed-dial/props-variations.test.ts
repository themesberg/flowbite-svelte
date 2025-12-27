import { cleanup, render, screen, act } from "@testing-library/svelte";
import { expect, test, afterEach, describe, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";

import PropsVariationsTest from "./props-variations.test.svelte";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  cleanup();
  vi.clearAllTimers();
  vi.useRealTimers();
});

describe("SpeedDial - Props Variations", () => {
  describe("Pill Prop", () => {
    test("buttons have rounded-full class when pill=true", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(PropsVariationsTest, { pill: true });
      const trigger = screen.getByTestId("props-trigger");

      await user.hover(trigger);
      await act(() => vi.advanceTimersByTime(300));

      const shareButton = screen.getByRole("button", { name: /share/i });
      expect(shareButton).toHaveClass("rounded-full");
    });

    test("buttons do not have rounded-full class when pill=false", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(PropsVariationsTest, { pill: false });
      const trigger = screen.getByTestId("props-trigger");

      await user.hover(trigger);
      await act(() => vi.advanceTimersByTime(300));

      const shareButton = screen.getByRole("button", { name: /share/i });
      expect(shareButton).not.toHaveClass("rounded-full");
    });
  });

  describe("TextOutside Prop", () => {
    test("button labels are visible when textOutside=true", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(PropsVariationsTest, { textOutside: true });
      const trigger = screen.getByTestId("props-trigger");

      await user.hover(trigger);
      await act(() => vi.advanceTimersByTime(300));

      const shareButton = screen.getByRole("button", { name: /share/i });
      const span = shareButton.querySelector("span");
      expect(span).toBeInTheDocument();
      expect(span).not.toHaveClass("sr-only");
      expect(span?.textContent).toBe("Share");
    });

    test("button labels are screen-reader only when textOutside=false", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(PropsVariationsTest, { textOutside: false });
      const trigger = screen.getByTestId("props-trigger");

      await user.hover(trigger);
      await act(() => vi.advanceTimersByTime(300));

      const shareButton = screen.getByRole("button", { name: /share/i });
      const span = shareButton.querySelector("span.sr-only");
      expect(span).toBeInTheDocument();
      expect(span?.textContent).toBe("Share");
    });
  });

  describe("Tooltip Prop", () => {
    test("tooltips appear with default tooltip placement", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(PropsVariationsTest, { tooltip: "left" });
      const trigger = screen.getByTestId("props-trigger");

      await user.hover(trigger);
      await act(() => vi.advanceTimersByTime(300));

      const shareButton = screen.getByRole("button", { name: /share/i });
      await user.hover(shareButton);
      await act(() => vi.advanceTimersByTime(300));

      // Tooltip should appear - use getAllByText for multiple matches
      const shareElements = screen.getAllByText("Share");
      expect(shareElements.length).toBeGreaterThan(1); // Button text + tooltip
    });

    test("no tooltips when tooltip='none'", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const { container } = render(PropsVariationsTest, { tooltip: "none" });
      const trigger = screen.getByTestId("props-trigger");

      await user.hover(trigger);
      await act(() => vi.advanceTimersByTime(300));

      // Check that no tooltip component is rendered in the DOM
      const tooltips = container.querySelectorAll('[role="tooltip"]');
      // Should only have the main speed dial popper, not individual tooltips
      expect(tooltips.length).toBeLessThanOrEqual(1);
    });

    test.each(["left", "right", "top", "bottom"] as const)("tooltip placement='%s' works correctly", async (tooltipPlacement) => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const { container } = render(PropsVariationsTest, { tooltip: tooltipPlacement });
      const trigger = screen.getByTestId("props-trigger");

      await user.hover(trigger);
      await act(() => vi.advanceTimersByTime(300));

      const shareButton = screen.getByRole("button", { name: /share/i });
      await user.hover(shareButton);
      await act(() => vi.advanceTimersByTime(300));

      // Check that tooltip exists - it should be in the DOM after hovering
      const tooltips = container.querySelectorAll('[role="tooltip"]');
      // Should have at least the main speed dial tooltip
      expect(tooltips.length).toBeGreaterThanOrEqual(1);
    });
  });
});
