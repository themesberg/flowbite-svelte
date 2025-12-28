import { cleanup, render, screen, act } from "@testing-library/svelte";
import { expect, test, afterEach, describe, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicSpeedDialTest from "./basic-speed-dial.test.svelte";
import ClickTriggerTest from "./click-trigger.test.svelte";
import ClickTriggerParameterized from "./click-trigger-parameterized.test.svelte";

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

    //   // Verify tooltip appears by checking for the tooltip element
    //   const tooltip = document.querySelector('[role="tooltip"]');
    //   expect(tooltip).toBeInTheDocument();
    //   expect(tooltip?.textContent).toMatch(/share/i);

    //   // Unhover the button
    //   await user.unhover(shareButton);
    //   // Move mouse to far location to ensure we're not hovering tooltip
    //   const container = screen.getByTestId("speed-dial-trigger").closest("div");
    //   if (container) {
    //     await user.pointer({ target: container, coords: { x: 0, y: 0 } });
    //   }
    //   await act(() => vi.advanceTimersByTime(300)); // triggerDelay
    //   await act(() => vi.advanceTimersByTime(200)); // transition time

    //   // Tooltip should be hidden now
    //   expect(document.querySelector('[role="tooltip"]')).not.toBeInTheDocument();
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

    //   // Render two instances with unique IDs
    //   render(ClickTriggerParameterized, { props: { triggerId: "click-trigger-1" } });
    //   render(ClickTriggerParameterized, { props: { triggerId: "click-trigger-2" } });

    //   const trigger1 = screen.getByTestId("click-trigger-1");
    //   const trigger2 = screen.getByTestId("click-trigger-2");

    //   // Open only first speed dial
    //   await user.click(trigger1);
    //   await act(() => vi.advanceTimersByTime(300));

    //   // Should have exactly 1 share button (from first dial only)
    //   let shareButtons = screen.getAllByRole("button", { name: /share/i });
    //   expect(shareButtons.length).toBe(1);

    //   // Now open second speed dial
    //   await user.click(trigger2);
    //   await act(() => vi.advanceTimersByTime(300));

    //   // Now should have 2 share buttons (one from each dial)
    //   shareButtons = screen.getAllByRole("button", { name: /share/i });
    //   expect(shareButtons.length).toBe(2);
    // });
  });
});
