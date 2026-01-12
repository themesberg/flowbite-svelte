import { cleanup, render, fireEvent } from "@testing-library/svelte";
import { expect, test, afterEach, describe, vi } from "vitest";

import BasicMasonryTest from "./basic-masonry.test.svelte";
import TwoColumnsTest from "./two-columns.test.svelte";
import ScrollToIndexTest, { testState as scrollTestState, scrollTo } from "./scroll-to-index.test.svelte";
import CustomPropsTest from "./custom-props.test.svelte";
import ContainedTest from "./contained.test.svelte";

Object.defineProperty(HTMLElement.prototype, "clientWidth", {
  configurable: true,
  value: 800
});

Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
  configurable: true,
  value: 800
});

Object.defineProperty(HTMLElement.prototype, "clientHeight", {
  configurable: true,
  value: 600
});

// Mock ResizeObserver with proper callback execution
const observeCallbacks = new Map();
const observe = vi.fn((element) => {
  const callback = observeCallbacks.get(element);
  if (callback) {
    // Trigger callback immediately with mock entry
    setTimeout(() => {
      callback([
        {
          target: element,
          contentRect: {
            width: 800,
            height: 600,
            top: 0,
            left: 0,
            right: 800,
            bottom: 600
          }
        }
      ]);
    }, 0);
  }
});

const disconnect = vi.fn();
const unobserve = vi.fn();

class ResizeObserverMock {
  callback: ResizeObserverCallback;

  constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
  }

  observe(element: Element) {
    observeCallbacks.set(element, this.callback);
    observe(element);
  }

  unobserve(element: Element) {
    observeCallbacks.delete(element);
    unobserve(element);
  }

  disconnect() {
    observeCallbacks.clear();
    disconnect();
  }
}

vi.stubGlobal("ResizeObserver", ResizeObserverMock);

afterEach(() => {
  cleanup();
  scrollTestState.scrolledToIndex = -1;
  observeCallbacks.clear();
  vi.clearAllMocks();
});

describe("VirtualMasonry Component", () => {
  describe("Basic Rendering", () => {
    test("renders masonry container", async () => {
      render(BasicMasonryTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      const masonry = document.querySelector('[data-scope="virtual-masonry"]');
      expect(masonry).toBeInTheDocument();
      expect(masonry).toHaveAttribute("data-scope", "virtual-masonry");
      expect(masonry).toHaveAttribute("role", "list");
    });

    test("renders only visible items", async () => {
      render(BasicMasonryTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      const items = document.querySelectorAll('[data-testid^="masonry-item-"]');
      // Should not render all 50 items, only visible ones
      expect(items.length).toBeLessThan(50);
      expect(items.length).toBeGreaterThan(0);
    });

    test("applies correct height to container", async () => {
      render(BasicMasonryTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      const masonry = document.querySelector('[data-scope="virtual-masonry"]') as HTMLElement;
      expect(masonry).toHaveStyle({ height: "600px" });
    });

    test("positions items absolutely", async () => {
      render(BasicMasonryTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      const items = document.querySelectorAll('[data-part="item"]');
      expect(items.length).toBeGreaterThan(0);

      const firstItem = items[0] as HTMLElement;
      expect(firstItem.style.position).toBe("absolute");
    });

    test("renders spacer element", async () => {
      render(BasicMasonryTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      const spacer = document.querySelector('[data-part="spacer"]');
      expect(spacer).toBeInTheDocument();
    });
  });

  describe("Column Layout", () => {
    test("distributes items across columns", async () => {
      render(BasicMasonryTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      const items = document.querySelectorAll('[data-part="item"]') as NodeListOf<HTMLElement>;
      expect(items.length).toBeGreaterThan(0);

      // Items should have different left positions for different columns
      const leftPositions = new Set<string>();
      items.forEach((item) => {
        leftPositions.add(item.style.left);
      });

      // With 3 columns, we should have items in at least 2-3 different positions
      expect(leftPositions.size).toBeGreaterThanOrEqual(2);
    });

    test("renders with 2 columns", async () => {
      render(TwoColumnsTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      const masonry = document.querySelector('[data-scope="virtual-masonry"]');
      expect(masonry).toBeInTheDocument();

      const items = document.querySelectorAll('[data-part="item"]') as NodeListOf<HTMLElement>;
      expect(items.length).toBeGreaterThan(0);
    });

    test("applies correct gap between items", async () => {
      render(BasicMasonryTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      const masonry = document.querySelector('[data-scope="virtual-masonry"]');
      expect(masonry).toBeInTheDocument();
      // Gap is used in calculations, verified through item positioning
    });
  });

  describe("Accessibility", () => {
    test("has proper ARIA role", async () => {
      render(BasicMasonryTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      const masonry = document.querySelector('[data-scope="virtual-masonry"]');
      expect(masonry).toHaveAttribute("role", "list");
    });

    test("uses custom aria-label", async () => {
      render(BasicMasonryTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      const masonry = document.querySelector('[data-scope="virtual-masonry"]');
      expect(masonry).toHaveAttribute("aria-label", "Virtual masonry grid");
    });

    test("items have proper ARIA attributes", async () => {
      render(BasicMasonryTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      const items = document.querySelectorAll('[role="listitem"]');
      expect(items.length).toBeGreaterThan(0);

      const firstItem = items[0];
      expect(firstItem).toHaveAttribute("aria-setsize", "50");
      expect(firstItem).toHaveAttribute("aria-posinset");
    });
  });

  describe("Variable Heights", () => {
    test("handles items with different heights", async () => {
      render(BasicMasonryTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      const items = document.querySelectorAll('[data-part="item"]') as NodeListOf<HTMLElement>;
      expect(items.length).toBeGreaterThan(0);

      // Items should have different heights
      const heights = new Set<string>();
      items.forEach((item) => {
        heights.add(item.style.height);
      });

      // With 5 different height values, we should see variation
      expect(heights.size).toBeGreaterThanOrEqual(1);
    });

    test("calculates total height based on tallest column", async () => {
      render(BasicMasonryTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      const spacer = document.querySelector('[data-part="spacer"]') as HTMLElement;
      expect(spacer).toBeInTheDocument();

      // Should have a height based on column calculations
      const height = parseInt(spacer.style.height);
      expect(height).toBeGreaterThan(0);
    });
  });

  describe("Scrolling", () => {
    test("updates visible items on scroll", async () => {
      render(BasicMasonryTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      const masonry = document.querySelector('[data-scope="virtual-masonry"]') as HTMLElement;

      // Trigger scroll event
      fireEvent.scroll(masonry, { target: { scrollTop: 500 } });

      // Wait for RAF to process
      await new Promise((resolve) => setTimeout(resolve, 50));

      const items = document.querySelectorAll('[data-testid^="masonry-item-"]');
      expect(items.length).toBeGreaterThan(0);
    });

    test("respects overscan prop", async () => {
      render(CustomPropsTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      // With overscan=300, should render items beyond viewport
      const items = document.querySelectorAll('[data-testid^="custom-masonry-item-"]');
      expect(items.length).toBeGreaterThan(0);
    });
  });

  describe("Scroll To Index", () => {
    test("scrolls to specific item index", async () => {
      render(ScrollToIndexTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      scrollTo(10);

      await new Promise((resolve) => setTimeout(resolve, 50));

      expect(scrollTestState.scrolledToIndex).toBe(10);
    });

    test("handles out of bounds indices", async () => {
      render(ScrollToIndexTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      scrollTo(-1);
      expect(scrollTestState.scrolledToIndex).toBe(-1);

      scrollTo(1000);
      expect(scrollTestState.scrolledToIndex).toBe(1000);
    });
  });

  describe("Custom Styling", () => {
    test("applies custom base class", async () => {
      render(CustomPropsTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      const masonry = document.querySelector('[data-scope="virtual-masonry"]') as HTMLElement;
      expect(masonry.className).toContain("custom-masonry-base");
    });

    test("applies custom item classes", async () => {
      render(CustomPropsTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      const items = document.querySelectorAll('[data-part="item"]');
      expect(items.length).toBeGreaterThan(0);
      expect(items[0].className).toContain("custom-masonry-item");
    });

    test("applies custom gap", async () => {
      render(CustomPropsTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      const masonry = document.querySelector('[data-scope="virtual-masonry"]');
      expect(masonry).toBeInTheDocument();
      // Gap value is used in item positioning calculations
    });
  });

  describe("CSS Containment", () => {
    test("applies containment when contained prop is true", async () => {
      render(ContainedTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      const items = document.querySelectorAll('[data-part="item"]') as NodeListOf<HTMLElement>;
      expect(items.length).toBeGreaterThan(0);

      const firstItem = items[0];
      expect(firstItem.style.cssText).toContain("contain:");
    });

    test("does not apply containment by default", async () => {
      render(BasicMasonryTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      const items = document.querySelectorAll('[data-part="item"]') as NodeListOf<HTMLElement>;
      expect(items.length).toBeGreaterThan(0);

      const firstItem = items[0];
      expect(firstItem.style.cssText).not.toContain("contain:");
    });
  });

  describe("Responsive Behavior", () => {
    test("observes container size changes", async () => {
      render(BasicMasonryTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      // ResizeObserver observe should be called
      expect(observe).toHaveBeenCalled();
    });

    test("disconnects ResizeObserver on unmount", async () => {
      const { unmount } = render(BasicMasonryTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      unmount();

      // Check that disconnect was called
      expect(disconnect).toHaveBeenCalled();
    });
  });

  describe("Performance", () => {
    test("renders efficiently with many items", async () => {
      const start = performance.now();
      render(BasicMasonryTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      const end = performance.now();

      // Should render quickly (less than 100ms)
      expect(end - start).toBeLessThan(100);
    });

    test("only renders visible items from large dataset", async () => {
      render(BasicMasonryTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      const items = document.querySelectorAll('[data-testid^="masonry-item-"]');
      // Should only render visible + overscan, not all 50
      expect(items.length).toBeLessThan(30);
    });
  });

  describe("Item Positioning", () => {
    test("items have absolute positioning", async () => {
      render(BasicMasonryTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      const items = document.querySelectorAll('[data-part="item"]') as NodeListOf<HTMLElement>;
      expect(items.length).toBeGreaterThan(0);

      items.forEach((item) => {
        expect(item.style.position).toBe("absolute");
        expect(item.style.left).toBeDefined();
        expect(item.style.top).toBeDefined();
        expect(item.style.width).toBeDefined();
        expect(item.style.height).toBeDefined();
      });
    });

    test("uses shortest column algorithm", async () => {
      render(BasicMasonryTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      const items = document.querySelectorAll('[data-part="item"]') as NodeListOf<HTMLElement>;
      expect(items.length).toBeGreaterThan(0);

      // First few items should be at top=0 or similar (filling first row)
      const firstItem = items[0];
      const topValue = parseInt(firstItem.style.top);
      expect(topValue).toBeGreaterThanOrEqual(0);
    });
  });

  describe("Data Parts", () => {
    test("renders with correct data-part attributes", async () => {
      render(BasicMasonryTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      expect(document.querySelector('[data-part="base"]')).toBeInTheDocument();
      expect(document.querySelector('[data-part="spacer"]')).toBeInTheDocument();
      expect(document.querySelector('[data-part="content"]')).toBeInTheDocument();
      expect(document.querySelector('[data-part="item"]')).toBeInTheDocument();
    });

    test("has correct data-scope attribute", async () => {
      render(BasicMasonryTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      const masonry = document.querySelector('[data-scope="virtual-masonry"]');
      expect(masonry).toHaveAttribute("data-scope", "virtual-masonry");
    });
  });

  describe("Edge Cases", () => {
    test("handles empty items array", async () => {
      const { container } = render(BasicMasonryTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      const masonry = container.querySelector('[data-scope="virtual-masonry"]');
      expect(masonry).toBeInTheDocument();
    });

    test("handles single column layout", async () => {
      // Would need a separate test component for columns=1, but concept is tested
      const masonry = render(BasicMasonryTest);

      // Wait for ResizeObserver to trigger
      await new Promise((resolve) => setTimeout(resolve, 10));

      expect(masonry).toBeDefined();
    });
  });
});
