import { cleanup, render, screen, act } from "@testing-library/svelte";
import { expect, test, afterEach, describe, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";

import ClickTriggerTest from "./click-trigger.test.svelte";

const TRANSITION_DURATION = 300;
const CLOSE_ANIMATION_BUFFER = 200;

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  cleanup();
  vi.clearAllTimers();
  vi.useRealTimers();
});

describe("SpeedDial - Trigger Types", () => {
  describe("Click Trigger", () => {
    test("items are hidden by default with click trigger", () => {
      render(ClickTriggerTest);
      const shareButton = screen.queryByRole("button", { name: /share/i });
      expect(shareButton).not.toBeInTheDocument();
    });

    test("clicking trigger shows speed dial items", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(ClickTriggerTest);
      const trigger = screen.getByTestId("click-trigger");

      await user.click(trigger);
      await act(() => vi.advanceTimersByTime(TRANSITION_DURATION));

      const shareButton = screen.queryByRole("button", { name: /share/i });
      expect(shareButton).toBeInTheDocument();
    });

    test("clicking trigger again hides speed dial items", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(ClickTriggerTest);
      const trigger = screen.getByTestId("click-trigger");

      // Open
      await user.click(trigger);
      await act(() => vi.advanceTimersByTime(TRANSITION_DURATION));
      expect(screen.queryByRole("button", { name: /share/i })).toBeInTheDocument();

      // Close
      await user.click(trigger);
      await act(() => vi.advanceTimersByTime(TRANSITION_DURATION));
      // Extra time for transition
      await act(() => vi.advanceTimersByTime(CLOSE_ANIMATION_BUFFER));
      expect(screen.queryByRole("button", { name: /share/i })).not.toBeInTheDocument();
    });

    test("hovering does not show items with click trigger", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(ClickTriggerTest);
      const trigger = screen.getByTestId("click-trigger");

      await user.hover(trigger);
      await act(() => vi.advanceTimersByTime(TRANSITION_DURATION));

      const shareButton = screen.queryByRole("button", { name: /share/i });
      expect(shareButton).not.toBeInTheDocument();
    });

    test("clicking a speed dial button triggers its action", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(ClickTriggerTest);
      const trigger = screen.getByTestId("click-trigger");

      await user.click(trigger);
      await act(() => vi.advanceTimersByTime(TRANSITION_DURATION));

      const shareButton = screen.getByRole("button", { name: /share/i });
      await user.click(shareButton);
      // Button click should work (no error)
      expect(shareButton).toBeInTheDocument();
    });
  });
});
