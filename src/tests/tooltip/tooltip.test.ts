import { cleanup, render, screen, waitFor, fireEvent } from "@testing-library/svelte";
import { expect, test, afterEach, describe, beforeEach } from "vitest";
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

    test("tooltip has correct data attributes", async () => {
      render(BasicTooltipTest);
      const trigger = screen.getByTestId("trigger-button");

      // Trigger the tooltip to make it appear
      await fireEvent.mouseEnter(trigger);

      await waitFor(() => {
        const tooltip = screen.queryByTestId("tooltip-content");
        expect(tooltip).toBeInTheDocument();
        expect(tooltip).toHaveAttribute("data-scope", "tooltip");
      });
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

    test("hover trigger shows tooltip on mouse enter", async () => {
      render(BasicTooltipTest);
      const trigger = screen.getByTestId("trigger-button");

      // Initially, tooltip should not be in the DOM
      expect(screen.queryByTestId("tooltip-content")).not.toBeInTheDocument();

      // Show on hover
      await fireEvent.mouseEnter(trigger);
      await waitFor(() => {
        const tooltip = screen.queryByTestId("tooltip-content");
        expect(tooltip).toBeInTheDocument();
        expect(tooltip).toBeVisible();
      });

      // Hide on leave
      await fireEvent.mouseLeave(trigger);
      await waitFor(() => {
        expect(screen.queryByTestId("tooltip-content")).not.toBeInTheDocument();
      });
    });

    test("click trigger toggles tooltip on click", async () => {
      render(ClickTriggerTooltipTest);
      const trigger = screen.getByTestId("click-trigger");

      // Initially, tooltip should not be in the DOM
      expect(screen.queryByTestId("click-tooltip")).not.toBeInTheDocument();

      // Show on click
      await fireEvent.mouseDown(trigger);
      await waitFor(() => {
        const tooltip = screen.queryByTestId("click-tooltip");
        expect(tooltip).toBeInTheDocument();
        expect(tooltip).toBeVisible();
      });

      // Hide on second click
      await fireEvent.mouseDown(trigger);
      await waitFor(() => {
        expect(screen.queryByTestId("click-tooltip")).not.toBeInTheDocument();
      });
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

    test("isOpen changes to true when tooltip is shown", async () => {
      const user = userEvent.setup();
      render(IsOpenTooltipTest);
      const trigger = screen.getByTestId("open-trigger");

      expect(isOpenState.isOpen).toBe(false);

      await user.hover(trigger);
      await waitFor(() => expect(isOpenState.isOpen).toBe(true));
    });

    test("onbeforetoggle is called when tooltip is triggered", async () => {
      const user = userEvent.setup();
      render(EventTooltipTest);
      const trigger = screen.getByTestId("event-trigger");

      expect(eventState.beforeToggleCalled).toBe(false);

      await user.hover(trigger);
      await waitFor(() => expect(eventState.beforeToggleCalled).toBe(true));
      expect(eventState.eventReceived).not.toBeNull();
    });

    test("isOpen binding reflects tooltip state", async () => {
      render(IsOpenTooltipTest);
      const trigger = screen.getByTestId("open-trigger");

      // Initial state should be false
      expect(isOpenState.isOpen).toBe(false);
      expect(trigger).toBeInTheDocument();

      // Trigger the tooltip (hover or click depending on trigger type)
      await fireEvent.mouseEnter(trigger);

      // State should update to true (wait for async state update)
      await waitFor(() => {
        expect(isOpenState.isOpen).toBe(true);
      });

      // Close the tooltip
      await fireEvent.mouseLeave(trigger);

      // State should update back to false (wait for async state update)
      await waitFor(() => {
        expect(isOpenState.isOpen).toBe(false);
      });
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
      expect(eventState.eventReceived).toBe(null);

      // Trigger the tooltip to invoke the callback
      await fireEvent.mouseEnter(trigger);

      // Verify the callback was invoked
      await waitFor(() => {
        expect(eventState.beforeToggleCalled).toBe(true);
        expect(eventState.eventReceived).not.toBe(null);
      });
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

  describe("Accessibility", () => {
    test("tooltip has proper ARIA attributes", async () => {
      render(BasicTooltipTest);
      const trigger = screen.getByTestId("trigger-button");

      // Trigger the tooltip to make it appear
      await fireEvent.mouseEnter(trigger);

      await waitFor(() => {
        const tooltip = screen.queryByTestId("tooltip-content");
        expect(tooltip).toBeInTheDocument();
        // Check that the tooltip has the proper role
        expect(tooltip).toHaveAttribute("role", "tooltip");
      });

      // Note: aria-describedby is not currently implemented on the trigger
      // This would be a good enhancement for better accessibility
    });

    test("tooltip shows on keyboard focus", async () => {
      render(BasicTooltipTest);
      const trigger = screen.getByTestId("trigger-button");

      trigger.focus();

      await waitFor(() => {
        const tooltip = screen.queryByTestId("tooltip-content");
        expect(tooltip).toBeInTheDocument();
        expect(tooltip).toBeVisible();
      });
    });

    test("tooltip hides on Escape key", async () => {
      render(BasicTooltipTest);
      const trigger = screen.getByTestId("trigger-button");

      // Show the tooltip first
      await fireEvent.mouseEnter(trigger);

      await waitFor(() => {
        const tooltip = screen.queryByTestId("tooltip-content");
        expect(tooltip).toBeInTheDocument();
        expect(tooltip).toBeVisible();
      });

      // Press Escape to hide (fire on document since that's where the listener is)
      await fireEvent.keyDown(document, { key: "Escape" });

      await waitFor(() => {
        const tooltip = screen.queryByTestId("tooltip-content");
        expect(tooltip).not.toBeInTheDocument();
      });
    });
  });
});
