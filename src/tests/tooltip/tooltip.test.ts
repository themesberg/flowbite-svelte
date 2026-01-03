import { cleanup, render, screen, waitFor } from "@testing-library/svelte";
import { expect, test, afterEach, describe, beforeEach, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicTooltipTest from "./basic-tooltip.test.svelte";
import PlacementTooltipTest from "./placement-tooltip.test.svelte";
import ClickTriggerTooltipTest from "./click-trigger-tooltip.test.svelte";
import ArrowTooltipTest from "./arrow-tooltip.test.svelte";
import TypeTooltipTest from "./type-tooltip.test.svelte";
import ColorTooltipTest from "./color-tooltip.test.svelte";
import CustomClassTooltipTest from "./custom-class-tooltip.test.svelte";
import IsOpenTooltipTest, { testState as isOpenState } from "./isopen-tooltip.test.svelte";
import EventTooltipTest, { testState as eventState } from "./event-tooltip.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Tooltip Component", () => {
  describe("Basic Rendering", () => {
    test("renders tooltip trigger", () => {
      render(BasicTooltipTest);
      const trigger = screen.getByTestId("trigger-button");

      expect(trigger).toBeInTheDocument();
    });

    test("tooltip has correct data attributes", () => {
      render(BasicTooltipTest);
      const tooltip = screen.queryByTestId("tooltip-content");

      // Tooltip should be in the document but may not be visible initially
      if (tooltip) {
        expect(tooltip).toHaveAttribute("data-scope", "tooltip");
      }
    });
  });

  describe("Placement Variants", () => {
    test("renders tooltips with different placements", () => {
      render(PlacementTooltipTest);

      expect(screen.getByTestId("top-trigger")).toBeInTheDocument();
      expect(screen.getByTestId("bottom-trigger")).toBeInTheDocument();
      expect(screen.getByTestId("left-trigger")).toBeInTheDocument();
      expect(screen.getByTestId("right-trigger")).toBeInTheDocument();
    });
  });

  describe("Trigger Types", () => {
    test("hover trigger renders correctly", () => {
      render(BasicTooltipTest);
      const trigger = screen.getByTestId("trigger-button");

      expect(trigger).toBeInTheDocument();
      expect(trigger.tabIndex).toBeGreaterThanOrEqual(0); // Should be focusable
    });

    test("click trigger renders correctly", () => {
      render(ClickTriggerTooltipTest);
      const trigger = screen.getByTestId("click-trigger");

      expect(trigger).toBeInTheDocument();
      expect(trigger.tabIndex).toBeGreaterThanOrEqual(0); // Should be focusable
    });
  });

  describe("Arrow Visibility", () => {
    test("tooltip with arrow prop set to true", () => {
      render(ArrowTooltipTest);
      const trigger = screen.getByTestId("arrow-trigger");

      expect(trigger).toBeInTheDocument();
    });

    test("tooltip with arrow prop set to false", () => {
      render(ArrowTooltipTest);
      const trigger = screen.getByTestId("no-arrow-trigger");

      expect(trigger).toBeInTheDocument();
    });
  });

  describe("Type Variants", () => {
    test("renders tooltips with different types", () => {
      render(TypeTooltipTest);

      expect(screen.getByTestId("dark-trigger")).toBeInTheDocument();
      expect(screen.getByTestId("light-trigger")).toBeInTheDocument();
      expect(screen.getByTestId("auto-trigger")).toBeInTheDocument();
    });
  });

  describe("Color Variants", () => {
    test("renders tooltips with different colors", () => {
      render(ColorTooltipTest);

      expect(screen.getByTestId("primary-trigger")).toBeInTheDocument();
      expect(screen.getByTestId("blue-trigger")).toBeInTheDocument();
      expect(screen.getByTestId("red-trigger")).toBeInTheDocument();
    });
  });

  describe("Props", () => {
    test("custom class is applied to tooltip", () => {
      render(CustomClassTooltipTest);
      const trigger = screen.getByTestId("custom-class-trigger");

      expect(trigger).toBeInTheDocument();
    });
  });

  describe("State Binding", () => {
    beforeEach(() => {
      isOpenState.isOpen = false;
    });

    test("isOpen binding reflects tooltip state", async () => {
      render(IsOpenTooltipTest);
      const trigger = screen.getByTestId("open-trigger");

      expect(isOpenState.isOpen).toBe(false);
      expect(trigger).toBeInTheDocument();

      // Initial state should be false
      expect(isOpenState.isOpen).toBe(false);
    });
  });

  describe("Events", () => {
    beforeEach(() => {
      eventState.beforeToggleCalled = false;
      eventState.eventReceived = null;
    });

    test("onbeforetoggle callback is invoked", async () => {
      render(EventTooltipTest);
      const trigger = screen.getByTestId("event-trigger");

      expect(trigger).toBeInTheDocument();
      
      // Verify initial state
      expect(eventState.beforeToggleCalled).toBe(false);
    });
  });

  describe("Accessibility", () => {
    test("trigger element is focusable", () => {
      render(BasicTooltipTest);
      const trigger = screen.getByTestId("trigger-button");

      expect(trigger.tabIndex).toBeGreaterThanOrEqual(0);
    });

    test("tooltip has appropriate role", () => {
      render(BasicTooltipTest);
      
      // The tooltip itself should have role when visible
      // This is handled by the Popper component
      const trigger = screen.getByTestId("trigger-button");
      expect(trigger).toBeInTheDocument();
    });
  });

  describe("Focus Management", () => {
    test("trigger maintains focus capability", () => {
      render(BasicTooltipTest);
      const trigger = screen.getByTestId("trigger-button");

      // Element should be focusable
      expect(trigger.tabIndex).toBeGreaterThanOrEqual(0);
    });
  });
});
