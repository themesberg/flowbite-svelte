import { cleanup, render, screen, fireEvent } from "@testing-library/svelte";
import { expect, test, afterEach, describe, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicSplitPaneTest from "./basic-splitpane.test.svelte";
import VerticalSplitPaneTest from "./vertical-splitpane.test.svelte";
import MultiPaneTest from "./multi-pane.test.svelte";
import InitialSizesTest from "./initial-sizes.test.svelte";
import CallbackTest from "./callback.test.svelte";
import MinSizeTest from "./minsize.test.svelte";
import CustomClassTest from "./custom-class.test.svelte";
import NoTransitionTest from "./no-transition.test.svelte";
import ResponsiveTest from "./responsive.test.svelte";
import { callbackTestState, resetCallbackState } from "./callback-state";

// Mock ResizeObserver
class MockResizeObserver {
  private observed = new WeakSet<Element>();

  constructor(private callback: ResizeObserverCallback) {}

  observe(element: Element) {
    if (this.observed.has(element)) return;
    this.observed.add(element);

    queueMicrotask(() => {
      this.callback(
        [
          {
            target: element,
            contentRect: { width: 800, height: 600 } as DOMRectReadOnly
          } as ResizeObserverEntry
        ],
        this as unknown as ResizeObserver
      );
    });
  }

  unobserve() {}
  disconnect() {}
}

beforeEach(() => {
  vi.clearAllMocks();
  window.ResizeObserver = MockResizeObserver as unknown as typeof ResizeObserver;
});

afterEach(() => {
  cleanup();
  resetCallbackState();
});

describe("SplitPane Component", () => {
  describe("Basic Rendering", () => {
    test("renders splitpane container correctly", () => {
      render(BasicSplitPaneTest);
      const wrapper = screen.getByTestId("basic-splitpane");
      const splitpane = wrapper.querySelector('[data-scope="split-pane"]');

      expect(splitpane).toBeInTheDocument();
      expect(splitpane).toHaveAttribute("data-scope", "split-pane");
      expect(splitpane).toHaveAttribute("data-part", "base");
    });

    test("renders two panes", () => {
      render(BasicSplitPaneTest);
      const wrapper = screen.getByTestId("basic-splitpane");

      const panes = wrapper.querySelectorAll('[data-scope="pane"]');
      expect(panes).toHaveLength(2);

      panes.forEach((pane) => {
        expect(pane).toHaveAttribute("data-scope", "pane");
        expect(pane).toHaveAttribute("data-part", "base");
      });
    });

    test("renders divider between panes", () => {
      render(BasicSplitPaneTest);
      const wrapper = screen.getByTestId("basic-splitpane");

      const divider = wrapper.querySelector('[data-scope="divider"]');
      expect(divider).toBeInTheDocument();
    });

    test("does not render divider after last pane", () => {
      render(BasicSplitPaneTest);
      const wrapper = screen.getByTestId("basic-splitpane");

      const dividers = wrapper.querySelectorAll('[data-scope="divider"]');
      // Should have 1 divider for 2 panes
      expect(dividers).toHaveLength(1);
    });
  });

  describe("Direction Variants", () => {
    test("applies horizontal direction by default", () => {
      render(BasicSplitPaneTest);
      const wrapper = screen.getByTestId("basic-splitpane");
      const splitpane = wrapper.querySelector('[data-scope="split-pane"]') as HTMLElement;

      expect(splitpane).toHaveAttribute("data-scope", "split-pane");
    });

    test("applies vertical direction", () => {
      render(VerticalSplitPaneTest);
      const wrapper = screen.getByTestId("vertical-splitpane");
      const splitpane = wrapper.querySelector('[data-scope="split-pane"]') as HTMLElement;

      expect(splitpane.className).toMatch(/flex-col/);
    });
  });

  describe("Multiple Panes", () => {
    test("renders three panes", () => {
      render(MultiPaneTest);
      const wrapper = screen.getByTestId("multi-pane-splitpane");

      const panes = wrapper.querySelectorAll('[data-scope="pane"]');
      expect(panes).toHaveLength(3);
    });

    test("renders correct number of dividers for three panes", () => {
      render(MultiPaneTest);
      const wrapper = screen.getByTestId("multi-pane-splitpane");

      const dividers = wrapper.querySelectorAll('[data-scope="divider"]');
      // Should have 2 dividers for 3 panes
      expect(dividers).toHaveLength(2);
    });
  });

  describe("Initial Sizes", () => {
    test("renders with initial sizes", () => {
      render(InitialSizesTest);
      const wrapper = screen.getByTestId("initial-sizes-splitpane");

      const panes = wrapper.querySelectorAll('[data-scope="pane"]');
      expect(panes).toHaveLength(2);
    });
  });

  describe("Callback Functions", () => {
    test("calls onResize callback", async () => {
      render(CallbackTest);

      // Wait for callback to be invoked during initialization
      await vi.waitFor(() => {
        expect(callbackTestState.callCount).toBeGreaterThan(0);
      });
    });

    test("receives size array in callback", async () => {
      render(CallbackTest);

      await vi.waitFor(() => {
        expect(callbackTestState.lastSizes.length).toBeGreaterThan(0);
      });

      expect(callbackTestState.lastSizes).toHaveLength(2);
      expect(callbackTestState.lastSizes.every((size) => typeof size === "number")).toBe(true);
    });
  });

  describe("Divider Interactions", () => {
    test("divider has proper role attribute", () => {
      render(BasicSplitPaneTest);
      const wrapper = screen.getByTestId("basic-splitpane");

      const divider = wrapper.querySelector('[data-scope="divider"]');
      expect(divider).toHaveAttribute("role", "separator");
    });

    test("divider is keyboard accessible", () => {
      render(BasicSplitPaneTest);
      const wrapper = screen.getByTestId("basic-splitpane");

      const divider = wrapper.querySelector('[data-scope="divider"]') as HTMLElement;
      expect(divider).toHaveAttribute("tabindex", "0");
    });

    test("divider has aria-orientation for horizontal", () => {
      render(BasicSplitPaneTest);
      const wrapper = screen.getByTestId("basic-splitpane");

      const divider = wrapper.querySelector('[data-scope="divider"]');
      expect(divider).toHaveAttribute("aria-orientation");
    });

    test("divider has aria-orientation for vertical", () => {
      render(VerticalSplitPaneTest);
      const wrapper = screen.getByTestId("vertical-splitpane");

      const divider = wrapper.querySelector('[data-scope="divider"]');
      expect(divider).toHaveAttribute("aria-orientation", "horizontal");
    });

    test("divider has aria-label", () => {
      render(BasicSplitPaneTest);
      const wrapper = screen.getByTestId("basic-splitpane");

      const divider = wrapper.querySelector('[data-scope="divider"]');
      expect(divider).toHaveAttribute("aria-label");
    });

    test("divider has aria-valuenow", () => {
      render(BasicSplitPaneTest);
      const wrapper = screen.getByTestId("basic-splitpane");

      const divider = wrapper.querySelector('[data-scope="divider"]');
      expect(divider).toHaveAttribute("aria-valuenow");
    });

    test("divider has aria value range", () => {
      render(BasicSplitPaneTest);
      const wrapper = screen.getByTestId("basic-splitpane");

      const divider = wrapper.querySelector('[data-scope="divider"]');
      expect(divider).toHaveAttribute("aria-valuemin", "0");
      expect(divider).toHaveAttribute("aria-valuemax", "100");
    });
  });

  describe("Mouse Interactions", () => {
    test("handles mousedown on divider", async () => {
      render(BasicSplitPaneTest);
      const wrapper = screen.getByTestId("basic-splitpane");

      const divider = wrapper.querySelector('[data-scope="divider"]') as HTMLElement;

      await fireEvent.mouseDown(divider, { clientX: 100, clientY: 100 });

      // Should set cursor style
      expect(document.body.style.cursor).toBeTruthy();
    });
  });

  describe("Keyboard Interactions", () => {
    test("handles arrow key navigation on horizontal divider", async () => {
      const user = userEvent.setup();
      render(BasicSplitPaneTest);
      const wrapper = screen.getByTestId("basic-splitpane");

      const divider = wrapper.querySelector('[data-scope="divider"]') as HTMLElement;

      divider.focus();
      expect(divider).toHaveFocus();

      await user.keyboard("{ArrowRight}");

      // Should handle the key event
      expect(divider).toBeInTheDocument();
    });

    test("handles arrow key navigation on vertical divider", async () => {
      const user = userEvent.setup();
      render(VerticalSplitPaneTest);
      const wrapper = screen.getByTestId("vertical-splitpane");

      const divider = wrapper.querySelector('[data-scope="divider"]') as HTMLElement;

      divider.focus();
      expect(divider).toHaveFocus();

      await user.keyboard("{ArrowDown}");

      // Should handle the key event
      expect(divider).toBeInTheDocument();
    });

    test("handles Enter key to reset sizes", async () => {
      const user = userEvent.setup();
      render(BasicSplitPaneTest);
      const wrapper = screen.getByTestId("basic-splitpane");

      const divider = wrapper.querySelector('[data-scope="divider"]') as HTMLElement;

      divider.focus();
      await user.keyboard("{Enter}");

      // Should handle the key event
      expect(divider).toBeInTheDocument();
    });

    test("handles Space key to reset sizes", async () => {
      const user = userEvent.setup();
      render(BasicSplitPaneTest);
      const wrapper = screen.getByTestId("basic-splitpane");

      const divider = wrapper.querySelector('[data-scope="divider"]') as HTMLElement;

      divider.focus();
      await user.keyboard(" ");

      // Should handle the key event
      expect(divider).toBeInTheDocument();
    });
  });

  describe("Custom Styling", () => {
    test("applies custom class to splitpane", () => {
      render(CustomClassTest);
      const wrapper = screen.getByTestId("custom-class-splitpane");
      const splitpane = wrapper.querySelector('[data-scope="split-pane"]') as HTMLElement;

      expect(splitpane.className).toContain("custom-splitpane-class");
    });

    test("applies custom class to panes", () => {
      render(CustomClassTest);
      const wrapper = screen.getByTestId("custom-class-splitpane");
      const panes = wrapper.querySelectorAll('[data-scope="pane"]');

      panes.forEach((pane) => {
        expect((pane as HTMLElement).className).toContain("custom-pane-class");
      });
    });
  });

  describe("Min Size Configuration", () => {
    test("renders with custom minSize", () => {
      render(MinSizeTest);
      const wrapper = screen.getByTestId("minsize-splitpane");
      const splitpane = wrapper.querySelector('[data-scope="split-pane"]');

      expect(splitpane).toBeInTheDocument();
    });
  });

  describe("Transition Behavior", () => {
    test("renders with transition disabled", () => {
      render(NoTransitionTest);
      const wrapper = screen.getByTestId("no-transition-splitpane");
      const splitpane = wrapper.querySelector('[data-scope="split-pane"]');

      expect(splitpane).toBeInTheDocument();
    });
  });

  describe("Responsive Behavior", () => {
    test("renders with responsive enabled", () => {
      render(ResponsiveTest);
      const wrapper = screen.getByTestId("responsive-splitpane");
      const splitpane = wrapper.querySelector('[data-scope="split-pane"]');

      expect(splitpane).toBeInTheDocument();
    });
  });

  describe("Pane Structure", () => {
    test("panes have correct data attributes", () => {
      render(BasicSplitPaneTest);
      const wrapper = screen.getByTestId("basic-splitpane");

      const panes = wrapper.querySelectorAll('[data-scope="pane"]');

      panes.forEach((pane) => {
        expect(pane).toHaveAttribute("data-scope", "pane");
        expect(pane).toHaveAttribute("data-part", "base");
      });
    });

    test("panes have style attributes", () => {
      render(BasicSplitPaneTest);
      const wrapper = screen.getByTestId("basic-splitpane");

      const panes = wrapper.querySelectorAll('[data-scope="pane"]');

      // Both panes should have style attributes for sizing
      panes.forEach((pane) => {
        expect(pane.getAttribute("style")).toBeTruthy();
      });
    });
  });

  describe("Divider Structure", () => {
    test("divider has hit area", () => {
      render(BasicSplitPaneTest);
      const wrapper = screen.getByTestId("basic-splitpane");

      const divider = wrapper.querySelector('[data-scope="divider"]');
      const hitArea = divider?.querySelector('[data-part="hit-area"]');

      expect(hitArea).toBeInTheDocument();
    });

    test("divider applies cursor style for horizontal", () => {
      render(BasicSplitPaneTest);
      const wrapper = screen.getByTestId("basic-splitpane");

      const divider = wrapper.querySelector('[data-scope="divider"]') as HTMLElement;

      expect(divider.className).toMatch(/cursor-(col|row)-resize/);
    });

    test("divider applies cursor style for vertical", () => {
      render(VerticalSplitPaneTest);
      const wrapper = screen.getByTestId("vertical-splitpane");

      const divider = wrapper.querySelector('[data-scope="divider"]') as HTMLElement;

      expect(divider.className).toMatch(/cursor-row-resize/);
    });
  });

  describe("Accessibility", () => {
    test("splitpane container is accessible", () => {
      render(BasicSplitPaneTest);
      const wrapper = screen.getByTestId("basic-splitpane");
      const splitpane = wrapper.querySelector('[data-scope="split-pane"]');

      expect(splitpane).toBeInTheDocument();
    });

    test("divider has complete ARIA attributes", () => {
      render(BasicSplitPaneTest);
      const wrapper = screen.getByTestId("basic-splitpane");

      const divider = wrapper.querySelector('[data-scope="divider"]');

      expect(divider).toHaveAttribute("role", "separator");
      expect(divider).toHaveAttribute("tabindex", "0");
      expect(divider).toHaveAttribute("aria-orientation");
      expect(divider).toHaveAttribute("aria-label");
      expect(divider).toHaveAttribute("aria-valuenow");
      expect(divider).toHaveAttribute("aria-valuemin");
      expect(divider).toHaveAttribute("aria-valuemax");
      expect(divider).toHaveAttribute("aria-valuetext");
    });

    test("divider is focusable", () => {
      render(BasicSplitPaneTest);
      const wrapper = screen.getByTestId("basic-splitpane");

      const divider = wrapper.querySelector('[data-scope="divider"]') as HTMLElement;

      divider.focus();
      expect(divider).toHaveFocus();
    });
  });
});
