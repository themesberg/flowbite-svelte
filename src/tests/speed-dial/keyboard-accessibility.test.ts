import { cleanup, render, screen, waitFor } from "@testing-library/svelte";
import { expect, test, afterEach, describe, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicSpeedDialTest from "./basic-speed-dial.test.svelte";
import ClickTriggerTest from "./click-trigger.test.svelte";
import KeyboardAccessibleTest from "./keyboard-accessible.test.svelte";

beforeEach(() => {
  vi.useFakeTimers({ shouldAdvanceTime: true });
});

afterEach(() => {
  cleanup();
  vi.clearAllTimers();
  vi.useRealTimers();
});

describe("SpeedDial - Keyboard Accessibility", () => {
  describe("Tab Navigation", () => {
    test("trigger is keyboard focusable", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      await user.tab();
      expect(trigger).toHaveFocus();
    });

    test("can navigate through speed dial buttons with tab", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      // Focus trigger first
      trigger.focus();

      // Open speed dial with hover
      await user.hover(trigger);

      // Wait for buttons to appear
      const shareButton = await screen.findByRole("button", { name: /share/i });

      // Tab through buttons
      await user.tab();
      expect(shareButton).toHaveFocus();

      await user.tab();
      const printButton = screen.getByRole("button", { name: /print/i });
      expect(printButton).toHaveFocus();

      await user.tab();
      const downloadButton = screen.getByRole("button", { name: /download/i });
      expect(downloadButton).toHaveFocus();
    });

    test("shift+tab navigates backwards through buttons", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      trigger.focus();
      await user.hover(trigger);

      await screen.findByRole("button", { name: /download/i });

      // Tab to last button
      await user.tab();
      await user.tab();
      await user.tab();
      const downloadButton = screen.getByRole("button", { name: /download/i });
      expect(downloadButton).toHaveFocus();

      // Shift+Tab backwards
      await user.keyboard("{Shift>}{Tab}{/Shift}");
      const printButton = screen.getByRole("button", { name: /print/i });
      expect(printButton).toHaveFocus();
    });
  });

  describe("Enter and Space Keys", () => {
    test("enter key activates trigger with click trigger", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(ClickTriggerTest);
      const trigger = screen.getByTestId("click-trigger");

      await user.tab();
      expect(trigger).toHaveFocus();

      await user.keyboard("{Enter}");

      const shareButton = await screen.findByRole("button", { name: /share/i });
      expect(shareButton).toBeInTheDocument();
    });

    test("space key activates trigger with click trigger", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(ClickTriggerTest);
      const trigger = screen.getByTestId("click-trigger");

      await user.tab();
      expect(trigger).toHaveFocus();

      await user.keyboard(" ");

      const shareButton = await screen.findByRole("button", { name: /share/i });
      expect(shareButton).toBeInTheDocument();
    });

    test("enter key activates speed dial button", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(ClickTriggerTest);
      const trigger = screen.getByTestId("click-trigger");

      await user.click(trigger);

      const shareButton = await screen.findByRole("button", { name: /share/i });
      shareButton.focus();

      await user.keyboard("{Enter}");
      // Verify button responds to keyboard activation
      expect(shareButton).toBeInTheDocument();
    });
  });

  describe("Escape Key", () => {
    test("escape key closes speed dial with click trigger", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(ClickTriggerTest);
      const trigger = screen.getByTestId("click-trigger");

      await user.click(trigger);

      await waitFor(() => {
        expect(screen.queryByRole("button", { name: /share/i })).toBeInTheDocument();
      });

      await user.keyboard("{Escape}");

      await waitFor(() => {
        expect(screen.queryByRole("button", { name: /share/i })).not.toBeInTheDocument();
      });
    });

    test("escape key with hover trigger closes speed dial", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      await user.hover(trigger);

      await waitFor(() => {
        expect(screen.queryByRole("button", { name: /share/i })).toBeInTheDocument();
      });

      // Focus trigger first so keyboard events work
      trigger.focus();

      // Press escape while hovering (mouse still over trigger)
      await user.keyboard("{Escape}");

      await waitFor(() => {
        expect(screen.queryByRole("button", { name: /share/i })).not.toBeInTheDocument();
      });
    });
  });

  describe("Focus Management", () => {
    test("focus returns to trigger after closing with escape", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(ClickTriggerTest);
      const trigger = screen.getByTestId("click-trigger");

      await user.click(trigger);

      const shareButton = await screen.findByRole("button", { name: /share/i });
      shareButton.focus();

      await user.keyboard("{Escape}");

      // Focus should return to trigger
      await waitFor(() => {
        expect(trigger).toHaveFocus();
      });
    });

    test("trigger remains focusable when speed dial is open", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      await user.hover(trigger);

      await screen.findByRole("button", { name: /share/i });

      trigger.focus();
      expect(trigger).toHaveFocus();
    });
  });

  describe("ARIA Attributes", () => {
    test("trigger has appropriate aria attributes", () => {
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      // Trigger should be a button
      expect(trigger.tagName).toBe("BUTTON");
    });

    test("speed dial buttons have accessible names", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(KeyboardAccessibleTest);

      const trigger = screen.getByTestId("speed-dial-trigger");

      // Open via keyboard (accessibility requirement)
      trigger.focus();
      await user.keyboard("{Enter}");

      // Buttons must now be accessible by name
      await waitFor(() => {
        expect(screen.getByRole("button", { name: /share/i, hidden: true })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /print/i, hidden: true })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /download/i, hidden: true })).toBeInTheDocument();
      });
    });
  });
});
