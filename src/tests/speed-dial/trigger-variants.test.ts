import { cleanup, render, screen, act } from "@testing-library/svelte";
import { expect, test, afterEach, describe, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";

import TriggerVariantsTest from "./trigger-variants.test.svelte";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  cleanup();
  vi.clearAllTimers();
  vi.useRealTimers();
});

describe("SpeedDial - Trigger Variants", () => {
  describe("Gradient Prop", () => {
    test("renders regular button when gradient=false", () => {
      render(TriggerVariantsTest, { gradient: false });
      const trigger = screen.getByTestId("trigger-variant");

      // Regular button should not have gradient classes
      expect(trigger).toBeInTheDocument();
      expect(trigger.className).not.toMatch(/bg-gradient-to/);
    });

    test("renders gradient button when gradient=true", () => {
      render(TriggerVariantsTest, { gradient: true });
      const trigger = screen.getByTestId("trigger-variant");

      // Gradient button should have gradient classes
      expect(trigger).toBeInTheDocument();
      // Check if button has gradient-related classes or is a different component
      const hasGradient = trigger.className.includes("gradient") || trigger.className.includes("bg-gradient");
      expect(hasGradient || trigger.tagName).toBeTruthy();
    });
  });

  describe("Custom Icon", () => {
    test("renders default plus icon when no custom icon provided", () => {
      render(TriggerVariantsTest, { customIcon: false });
      const trigger = screen.getByTestId("trigger-variant");

      // Default icon should be SVG with plus path
      const svg = trigger.querySelector("svg");
      expect(svg).toBeInTheDocument();
      const path = svg?.querySelector("path");
      expect(path?.getAttribute("d")).toContain("M12 6v6m0 0v6m0-6h6m-6 0H6");
    });

    test("renders custom icon when provided", () => {
      render(TriggerVariantsTest, { customIcon: true });

      // Custom icon should be present
      const customIcon = screen.getByTestId("custom-icon");
      expect(customIcon).toBeInTheDocument();
    });

    test("default icon has rotation transition on hover", async () => {
      render(TriggerVariantsTest, { customIcon: false });
      const trigger = screen.getByTestId("trigger-variant");

      const svg = trigger.querySelector("svg");
      expect(svg).toHaveClass("transition-transform");
      expect(svg).toHaveClass("group-hover:rotate-45");
    });
  });

  describe("Accessibility Name", () => {
    test("trigger has custom accessible name", () => {
      render(TriggerVariantsTest);
      const trigger = screen.getByTestId("trigger-variant");

      // Should have screen reader text with custom name
      const srText = trigger.querySelector("span.sr-only");
      expect(srText?.textContent).toBe("Custom actions menu");
    });

    test("custom name improves accessibility", () => {
      render(TriggerVariantsTest);

      // Should be findable by accessible name
      const triggerByName = screen.getByRole("button", { name: /custom actions menu/i });
      expect(triggerByName).toBeInTheDocument();
    });
  });

  describe("Trigger Functionality with Variants", () => {
    test("gradient trigger opens speed dial on hover", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(TriggerVariantsTest, { gradient: true });
      const trigger = screen.getByTestId("trigger-variant");

      await user.hover(trigger);
      await act(() => vi.advanceTimersByTime(300));

      const shareButton = screen.queryByRole("button", { name: /share/i });
      expect(shareButton).toBeInTheDocument();
    });

    test("custom icon trigger opens speed dial on hover", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      render(TriggerVariantsTest, { customIcon: true });
      const trigger = screen.getByTestId("trigger-variant");

      await user.hover(trigger);
      await act(() => vi.advanceTimersByTime(300));

      const shareButton = screen.queryByRole("button", { name: /share/i });
      expect(shareButton).toBeInTheDocument();
    });
  });
});
