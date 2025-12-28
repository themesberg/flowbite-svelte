import { cleanup, render, screen, act } from "@testing-library/svelte";
import { expect, test, afterEach, describe, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicSpeedDialTest from "./basic-speed-dial.test.svelte";
import ClickTriggerTest from "./click-trigger.test.svelte";

beforeEach(() => {
  vi.useFakeTimers();
  // Mock requestAnimationFrame to work with fake timers
  let rafId = 0;
  window.requestAnimationFrame = vi.fn((cb) => {
    const id = ++rafId;
    setTimeout(() => cb(performance.now()), 0);
    return id;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) as any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  window.cancelAnimationFrame = vi.fn() as any;
});

afterEach(() => {
  cleanup();
  vi.clearAllTimers();
  vi.useRealTimers();
});

describe("SpeedDial - Interactions", () => {
  describe("Mouse Interactions", () => {
    test("unhover closes speed dial with hover trigger", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      // Hover to open
      await user.hover(trigger);
      await act(() => vi.advanceTimersByTime(300));
      expect(screen.queryByRole("button", { name: /share/i })).toBeInTheDocument();

      // Unhover to close
      await user.unhover(trigger);
      await act(() => vi.advanceTimersByTime(300));
      // Extra time for transition
      await act(() => vi.advanceTimersByTime(200));
      expect(screen.queryByRole("button", { name: /share/i })).not.toBeInTheDocument();
    });

    test("clicking speed dial button executes action", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      await user.hover(trigger);
      await act(() => vi.advanceTimersByTime(300));

      const shareButton = screen.getByRole("button", { name: /share/i });
      await user.click(shareButton);

      // Button click should work without errors
      expect(shareButton).toBeInTheDocument();
    });

    test("hover delay prevents accidental opening", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      await user.hover(trigger);
      // Don't wait full delay
      await act(() => vi.advanceTimersByTime(100));

      // Should not be open yet
      expect(screen.queryByRole("button", { name: /share/i })).not.toBeInTheDocument();

      // Wait remaining time
      await act(() => vi.advanceTimersByTime(200));
      expect(screen.queryByRole("button", { name: /share/i })).toBeInTheDocument();
    });

    test("rapid hover/unhover is handled correctly", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      // Rapid hover/unhover
      await user.hover(trigger);
      await act(() => vi.advanceTimersByTime(50));
      await user.unhover(trigger);
      await act(() => vi.advanceTimersByTime(50));
      await user.hover(trigger);
      await act(() => vi.advanceTimersByTime(50));
      await user.unhover(trigger);
      await act(() => vi.advanceTimersByTime(300));
      // Extra time for transition
      await act(() => vi.advanceTimersByTime(200));

      // Should end up closed
      expect(screen.queryByRole("button", { name: /share/i })).not.toBeInTheDocument();
    });
  });

  describe("Click Outside", () => {
    test("clicking outside closes speed dial with click trigger", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const { container } = render(ClickTriggerTest);
      const trigger = screen.getByTestId("click-trigger");

      // Open speed dial
      await user.click(trigger);
      await act(() => vi.advanceTimersByTime(300));
      expect(screen.queryByRole("button", { name: /share/i })).toBeInTheDocument();

      // Click outside
      await user.click(container);
      await act(() => vi.advanceTimersByTime(300));
      // Extra time for transition
      await act(() => vi.advanceTimersByTime(200));

      expect(screen.queryByRole("button", { name: /share/i })).not.toBeInTheDocument();
    });
  });

  describe("Hover on Buttons", () => {
    test("hovering speed dial buttons shows tooltips", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      // Open speed dial
      await user.hover(trigger);
      await act(() => vi.advanceTimersByTime(300));

      const shareButton = screen.getByRole("button", { name: /share/i });
      await user.hover(shareButton);
      await act(() => vi.advanceTimersByTime(300));

      // Tooltip should appear (multiple elements with "Share" text)
      const shareTexts = screen.getAllByText(/share/i);
      expect(shareTexts.length).toBeGreaterThan(1);
    });

    // TODO fix
    // test("unhovering button hides tooltip", async () => {
    //   const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    //   render(BasicSpeedDialTest);
    //   const trigger = screen.getByTestId("speed-dial-trigger");

    //   await user.hover(trigger);
    //   await act(() => vi.advanceTimersByTime(300));

    //   const shareButton = screen.getByRole("button", { name: /share/i });
    //   await user.hover(shareButton);
    //   await act(() => vi.advanceTimersByTime(300));

    //   // Verify tooltip appears (button text + tooltip = 2)
    //   let shareTexts = screen.queryAllByText(/share/i);
    //   expect(shareTexts.length).toBeGreaterThan(1);

    //   // Move mouse to far corner of container to ensure we're not hovering tooltip
    //   await user.pointer({ coords: { x: 1, y: 1 } });
    //   await act(() => vi.advanceTimersByTime(500));
    //   // Advance one more frame for RAF-based debounce
    //   await act(() => vi.advanceTimersToNextTimer());
    //   await act(() => vi.advanceTimersByTime(200));

    //   // Tooltip should be hidden, only button text remains
    //   shareTexts = screen.queryAllByText(/share/i);
    //   expect(shareTexts.length).toBe(1);
    // });
  });

  describe("State Consistency", () => {
    test("speed dial maintains state during interactions", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      // Open
      await user.hover(trigger);
      await act(() => vi.advanceTimersByTime(300));
      expect(screen.queryByRole("button", { name: /share/i })).toBeInTheDocument();

      // Interact with button
      const shareButton = screen.getByRole("button", { name: /share/i });
      await user.hover(shareButton);
      await act(() => vi.advanceTimersByTime(100));

      // Speed dial should still be open
      expect(screen.queryByRole("button", { name: /share/i })).toBeInTheDocument();
    });

    test("trigger icon state reflects open/closed state", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");
      const icon = trigger.querySelector("svg");

      expect(icon).toHaveClass("transition-transform");

      // Open
      await user.hover(trigger);
      await act(() => vi.advanceTimersByTime(300));

      // Icon should have transform classes
      expect(icon).toHaveClass("group-hover:rotate-45");
    });
  });

  describe("Multiple Speed Dials", () => {
    test("multiple speed dials can coexist", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

      // Render two instances
      render(BasicSpeedDialTest);
      render(BasicSpeedDialTest);

      const triggers = screen.getAllByTestId("speed-dial-trigger");
      expect(triggers).toHaveLength(2);

      // Open first one
      await user.hover(triggers[0]);
      await act(() => vi.advanceTimersByTime(300));

      const shareButtons = screen.getAllByRole("button", { name: /share/i });
      expect(shareButtons.length).toBeGreaterThanOrEqual(1);
    });

    // TODO fix
    // test("opening one speed dial does not affect another", async () => {
    //   const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

    //   // Use two click-triggered speed dials to avoid hover interference
    //   render(ClickTriggerTest);
    //   render(ClickTriggerTest);

    //   const triggers = screen.getAllByTestId("click-trigger");
    //   expect(triggers).toHaveLength(2);

    //   // Open first speed dial
    //   await user.click(triggers[0]);
    //   await act(() => vi.advanceTimersByTime(300));

    //   // Open second speed dial
    //   await user.click(triggers[1]);
    //   await act(() => vi.advanceTimersByTime(300));

    //   // Both should have share buttons (3 buttons each = 6 total, including 2 share buttons)
    //   const shareButtons = screen.getAllByRole("button", { name: /share/i });
    //   expect(shareButtons.length).toBeGreaterThanOrEqual(2);
    // });
  });
});
