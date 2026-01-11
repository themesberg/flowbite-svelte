import { cleanup, render, screen, act, waitFor } from "@testing-library/svelte";
import { expect, test, afterEach, describe, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";

import ClickTriggerTest from "./click-trigger.test.svelte";

beforeEach(() => {
  vi.useFakeTimers({ shouldAdvanceTime: true });
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
      await act(async () => {
        await vi.runAllTimersAsync();
      });

      const shareButton = await screen.findByRole("button", { name: /share/i, hidden: true });

      expect(shareButton).toBeInTheDocument();
    });

    test("clicking trigger again hides speed dial items", async () => {
      const user = userEvent.setup();
      render(ClickTriggerTest);

      const trigger = screen.getByTestId("click-trigger");

      // Open
      await user.click(trigger);

      const shareButton = await screen.findByRole("button", { name: /share/i, hidden: true });
      expect(shareButton).toBeInTheDocument();

      // Close
      await user.click(trigger);

      await waitFor(() => {
        expect(screen.queryByRole("button", { name: /share/i, hidden: true })).not.toBeInTheDocument();
      });
    });

    test("hovering does not show items with click trigger", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(ClickTriggerTest);
      const trigger = screen.getByTestId("click-trigger");

      await user.hover(trigger);
      await act(async () => {
        await vi.runAllTimersAsync();
      });

      const shareButton = screen.queryByRole("button", { name: /share/i });
      expect(shareButton).not.toBeInTheDocument();
    });

    test("clicking a speed dial button triggers its action", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(ClickTriggerTest);
      const trigger = screen.getByTestId("click-trigger");

      await user.click(trigger);
      await act(async () => {
        await vi.runAllTimersAsync();
      });

      const shareButton = await screen.findByRole("button", { name: /share/i, hidden: true });

      await user.click(shareButton);
      expect(shareButton).toBeInTheDocument();
    });
  });
});
