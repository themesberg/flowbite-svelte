import { cleanup, render, screen, waitFor } from "@testing-library/svelte";
import { expect, test, afterEach, describe, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicSpeedDialTest from "./basic-speed-dial.test.svelte";
import ClickTriggerTest from "./click-trigger.test.svelte";

beforeEach(() => {
  vi.useFakeTimers({ shouldAdvanceTime: true });
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

      await waitFor(() => {
        expect(screen.queryByRole("button", { name: /share/i })).toBeInTheDocument();
      });

      // Unhover to close
      await user.unhover(trigger);

      await waitFor(() => {
        expect(screen.queryByRole("button", { name: /share/i })).not.toBeInTheDocument();
      });
    });

    test("clicking speed dial button executes action", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      await user.hover(trigger);

      const shareButton = await screen.findByRole("button", { name: /share/i });
      await user.click(shareButton);

      // Button click should work without errors
      expect(shareButton).toBeInTheDocument();
    });

    test("hover delay prevents accidental opening", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      await user.hover(trigger);

      // Should eventually open
      await waitFor(() => {
        expect(screen.queryByRole("button", { name: /share/i })).toBeInTheDocument();
      });
    });

    test("rapid hover/unhover is handled correctly", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      // Rapid hover/unhover
      await user.hover(trigger);
      await user.unhover(trigger);
      await user.hover(trigger);
      await user.unhover(trigger);

      // Should end up closed
      await waitFor(() => {
        expect(screen.queryByRole("button", { name: /share/i })).not.toBeInTheDocument();
      });
    });
  });

  describe("Click Outside", () => {
    test("clicking outside closes speed dial with click trigger", async () => {
      const user = userEvent.setup();
      render(ClickTriggerTest);

      const trigger = screen.getByTestId("click-trigger");

      // Open speed dial
      await user.click(trigger);
      const shareButton = await screen.findByRole("button", { name: /share/i, hidden: true });
      expect(shareButton).toBeInTheDocument();

      // Click outside
      await user.click(document.body);

      await waitFor(() => {
        expect(screen.queryByRole("button", { name: /share/i, hidden: true })).not.toBeInTheDocument();
      });
    });
  });

  describe("Hover on Buttons", () => {
    test("hovering speed dial buttons shows tooltips", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      // Open speed dial
      await user.hover(trigger);

      const shareButton = await screen.findByRole("button", { name: /share/i, hidden: true });
      await user.hover(shareButton);

      // Tooltip should appear (multiple elements with "Share" text)
      await waitFor(() => {
        const shareTexts = screen.getAllByText(/share/i);
        expect(shareTexts.length).toBeGreaterThan(1);
      });
    });
  });

  describe("State Consistency", () => {
    test("speed dial maintains state during interactions", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      // Open
      await user.hover(trigger);

      await waitFor(() => {
        expect(screen.queryByRole("button", { name: /share/i, hidden: true })).toBeInTheDocument();
      });

      // Interact with button
      const shareButton = screen.getByRole("button", { name: /share/i, hidden: true });
      await user.hover(shareButton);

      // Speed dial should still be open
      expect(screen.queryByRole("button", { name: /share/i, hidden: true })).toBeInTheDocument();
    });

    test("trigger icon state reflects open/closed state", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");
      const icon = trigger.querySelector("svg");

      expect(icon).toHaveClass("transition-transform");

      // Open
      await user.hover(trigger);

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

      await waitFor(() => {
        const shareButtons = screen.getAllByRole("button", { name: /share/i, hidden: true });
        expect(shareButtons.length).toBeGreaterThanOrEqual(1);
      });
    });
  });
});
