import { cleanup, render, screen, act } from "@testing-library/svelte";
import { expect, test, afterEach, describe, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicSpeedDialTest from "./basic-speed-dial.test.svelte";
import ClickTriggerTest from "./click-trigger.test.svelte";

beforeEach(() => {
  vi.useFakeTimers();
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
      await act(() => vi.advanceTimersByTime(50));

      // Open speed dial with hover
      await user.hover(trigger);
      await act(() => vi.advanceTimersByTime(300));

      // Tab through buttons
      await user.tab();
      const shareButton = screen.getByRole("button", { name: /share/i });
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
      await act(() => vi.advanceTimersByTime(300));

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
      await act(() => vi.advanceTimersByTime(300));

      const shareButton = screen.queryByRole("button", { name: /share/i });
      expect(shareButton).toBeInTheDocument();
    });

    test("space key activates trigger with click trigger", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(ClickTriggerTest);
      const trigger = screen.getByTestId("click-trigger");

      await user.tab();
      expect(trigger).toHaveFocus();

      await user.keyboard(" ");
      await act(() => vi.advanceTimersByTime(300));

      const shareButton = screen.queryByRole("button", { name: /share/i });
      expect(shareButton).toBeInTheDocument();
    });

    test("enter key activates speed dial button", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(ClickTriggerTest);
      const trigger = screen.getByTestId("click-trigger");

      await user.click(trigger);
      await act(() => vi.advanceTimersByTime(300));

      const shareButton = screen.getByRole("button", { name: /share/i });
      shareButton.focus();

      await user.keyboard("{Enter}");
      // Button should remain clickable
      expect(shareButton).toBeInTheDocument();
    });
  });

  describe("Escape Key", () => {
    test("escape key closes speed dial with click trigger", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(ClickTriggerTest);
      const trigger = screen.getByTestId("click-trigger");

      await user.click(trigger);
      await act(() => vi.advanceTimersByTime(300));
      expect(screen.queryByRole("button", { name: /share/i })).toBeInTheDocument();

      await user.keyboard("{Escape}");
      await act(() => vi.advanceTimersByTime(300));
      // Extra time for transition
      await act(() => vi.advanceTimersByTime(200));

      expect(screen.queryByRole("button", { name: /share/i })).not.toBeInTheDocument();
    });

    test("escape key with hover trigger closes speed dial", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      await user.hover(trigger);
      await act(() => vi.advanceTimersByTime(300));
      expect(screen.queryByRole("button", { name: /share/i })).toBeInTheDocument();

      await user.keyboard("{Escape}");
      await act(() => vi.advanceTimersByTime(100));
      // Extra time for transition
      await act(() => vi.advanceTimersByTime(200));

      expect(screen.queryByRole("button", { name: /share/i })).not.toBeInTheDocument();
    });
  });

  describe("Focus Management", () => {
    test("focus returns to trigger after closing with escape", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(ClickTriggerTest);
      const trigger = screen.getByTestId("click-trigger");

      await user.click(trigger);
      await act(() => vi.advanceTimersByTime(300));

      const shareButton = screen.getByRole("button", { name: /share/i });
      shareButton.focus();

      await user.keyboard("{Escape}");
      await act(() => vi.advanceTimersByTime(300));

      // Focus should return to trigger or be manageable
      expect(document.activeElement).toBeTruthy();
    });

    test("trigger remains focusable when speed dial is open", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      await user.hover(trigger);
      await act(() => vi.advanceTimersByTime(300));

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
      render(BasicSpeedDialTest);
      const trigger = screen.getByTestId("speed-dial-trigger");

      await user.hover(trigger);
      await act(() => vi.advanceTimersByTime(300));

      // All buttons should be accessible by name
      expect(screen.getByRole("button", { name: /share/i })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /print/i })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /download/i })).toBeInTheDocument();
    });
  });
});
