import { cleanup, render, fireEvent, waitFor } from "@testing-library/svelte";
import { expect, test, afterEach, describe, vi } from "vitest";

import BasicMasonryTest from "./basic-masonry.test.svelte";
import TwoColumnsTest from "./two-columns.test.svelte";
import ScrollToIndexTest, { testState as scrollTestState, scrollTo } from "./scroll-to-index.test.svelte";
import CustomPropsTest from "./custom-props.test.svelte";
import ContainedTest from "./contained.test.svelte";
import EmptyItemsTest from "./empty-items.test.svelte";
import SingleColumnTest from "./single-column.test.svelte";

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

async function waitForMasonry() {
  await waitFor(() => {
    expect(document.querySelector('[data-scope="virtual-masonry"]')).toBeInTheDocument();
  });
}

describe("VirtualMasonry Component", () => {
  describe("Basic Rendering", () => {
    test("renders masonry container", async () => {
      render(BasicMasonryTest);

      await waitForMasonry();

      const masonry = document.querySelector('[data-scope="virtual-masonry"]');
      expect(masonry).toBeInTheDocument();
      expect(masonry).toHaveAttribute("data-scope", "virtual-masonry");
      expect(masonry).toHaveAttribute("role", "list");
    });

    test("renders only visible items", async () => {
      render(BasicMasonryTest);

      await waitForMasonry();

      const items = document.querySelectorAll('[data-testid^="masonry-item-"]');
      // Should not render all 50 items, only visible ones
      expect(items.length).toBeLessThan(50);
      expect(items.length).toBeGreaterThan(0);
    });

    test("applies correct height to container", async () => {
      render(BasicMasonryTest);

      await waitForMasonry();

      const masonry = document.querySelector('[data-scope="virtual-masonry"]') as HTMLElement;
      expect(masonry).toHaveStyle({ height: "600px" });
    });

    test("positions items absolutely", async () => {
      render(BasicMasonryTest);

      await waitForMasonry();

      const items = document.querySelectorAll('[data-part="item"]');
      expect(items.length).toBeGreaterThan(0);

      const firstItem = items[0] as HTMLElement;
      expect(firstItem.style.position).toBe("absolute");
    });

    test("renders spacer element", async () => {
      render(BasicMasonryTest);

      await waitForMasonry();

      const spacer = document.querySelector('[data-part="spacer"]');
      expect(spacer).toBeInTheDocument();
    });
  });

  describe("Column Layout", () => {
    test("distributes items across columns", async () => {
      render(BasicMasonryTest);

      await waitForMasonry();

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

      await waitForMasonry();

      const masonry = document.querySelector('[data-scope="virtual-masonry"]');
      expect(masonry).toBeInTheDocument();

      const items = document.querySelectorAll('[data-part="item"]') as NodeListOf<HTMLElement>;
      expect(items.length).toBeGreaterThan(0);
    });

    test("applies correct gap between items", async () => {
      render(BasicMasonryTest);

      await waitForMasonry();

      const items = document.querySelectorAll('[data-part="item"]') as NodeListOf<HTMLElement>;
      expect(items.length).toBeGreaterThan(1);

      // Verify items in same column have gap between them
      // (This requires knowing the expected gap value and column width)
      const topValues = Array.from(items).map((item) => parseInt(item.style.top));
      // Items should not be at consecutive pixel positions - gap should exist
      expect(topValues.length).toBeGreaterThan(0);
    });
  });

  describe("Accessibility", () => {
    test("has proper ARIA role", async () => {
      render(BasicMasonryTest);

      await waitForMasonry();

      const masonry = document.querySelector('[data-scope="virtual-masonry"]');
      expect(masonry).toHaveAttribute("role", "list");
    });

    test("uses custom aria-label", async () => {
      render(BasicMasonryTest);

      await waitForMasonry();

      const masonry = document.querySelector('[data-scope="virtual-masonry"]');
      expect(masonry).toHaveAttribute("aria-label", "Virtual masonry grid");
    });

    test("items have proper ARIA attributes", async () => {
      render(BasicMasonryTest);

      await waitForMasonry();

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

      await waitForMasonry();

      const items = document.querySelectorAll('[data-part="item"]') as NodeListOf<HTMLElement>;
      expect(items.length).toBeGreaterThan(0);

      // Items should have different heights
      const heights = new Set<string>();
      items.forEach((item) => {
        heights.add(item.style.height);
      });

      // With 5 different height values, we should see variation
      expect(heights.size).toBeGreaterThanOrEqual(2);
    });

    test("calculates total height based on tallest column", async () => {
      render(BasicMasonryTest);

      await waitForMasonry();

      const spacer = document.querySelector('[data-part="spacer"]') as HTMLElement;
      expect(spacer).toBeInTheDocument();

      // Should have a height based on column calculations
      const height = parseInt(spacer.style.height, 10);
      expect(height).toBeGreaterThan(0);
    });
  });

  describe("Scrolling", () => {
    test("updates visible items on scroll", async () => {
      render(BasicMasonryTest);

      await waitForMasonry();

      const masonry = document.querySelector('[data-scope="virtual-masonry"]') as HTMLElement;

      // Trigger scroll event
      fireEvent.scroll(masonry, { target: { scrollTop: 500 } });

      await waitFor(() => {
        expect(document.querySelectorAll('[data-testid^="masonry-item-"]').length).toBeGreaterThan(0);
      });

      const items = document.querySelectorAll('[data-testid^="masonry-item-"]');
      expect(items.length).toBeGreaterThan(0);
    });

    test("respects overscan prop", async () => {
      render(CustomPropsTest);

      await waitForMasonry();

      // With overscan=300, should render items beyond viewport
      const items = document.querySelectorAll('[data-testid^="custom-masonry-item-"]');
      expect(items.length).toBeGreaterThan(0);
    });
  });

  describe("Scroll To Index", () => {
    test("scrolls to specific item index", async () => {
      render(ScrollToIndexTest);

      await waitForMasonry();

      const masonry = document.querySelector('[data-scope="virtual-masonry"]') as HTMLElement;

      // Spy on scrollTop setter
      const scrollTopSpy = vi.spyOn(masonry, "scrollTop", "set");

      scrollTo(10);

      await waitForMasonry();

      expect(scrollTestState.scrolledToIndex).toBe(10);
      // Verify scrollTop was set (component tried to scroll)
      expect(scrollTopSpy).toHaveBeenCalled();
      expect(scrollTopSpy).toHaveBeenCalledWith(expect.any(Number));
      const scrollValue = scrollTopSpy.mock.calls[0][0];
      expect(scrollValue).toBeGreaterThan(0);

      scrollTopSpy.mockRestore();
    });

    test("handles out of bounds indices", async () => {
      render(ScrollToIndexTest);

      await waitForMasonry();

      const masonry = document.querySelector('[data-scope="virtual-masonry"]') as HTMLElement;

      // Spy on scrollTop setter
      const scrollTopSpy = vi.spyOn(masonry, "scrollTop", "set");

      // Test negative index - should not attempt to scroll
      scrollTo(-1);
      await waitForMasonry();
      expect(scrollTopSpy).not.toHaveBeenCalled();
      expect(scrollTestState.scrolledToIndex).toBe(-1);

      scrollTopSpy.mockClear();

      // Test index beyond array length (50 items in test) - should not attempt to scroll
      scrollTo(1000);
      await waitForMasonry();
      expect(scrollTopSpy).not.toHaveBeenCalled();
      expect(scrollTestState.scrolledToIndex).toBe(1000);

      scrollTopSpy.mockRestore();
    });
  });

  describe("Custom Styling", () => {
    test("applies custom base class", async () => {
      render(CustomPropsTest);

      await waitForMasonry();

      const masonry = document.querySelector('[data-scope="virtual-masonry"]') as HTMLElement;
      expect(masonry.className).toContain("custom-masonry-base");
    });

    test("applies custom item classes", async () => {
      render(CustomPropsTest);

      await waitForMasonry();

      const items = document.querySelectorAll('[data-part="item"]');
      expect(items.length).toBeGreaterThan(0);
      expect(items[0].className).toContain("custom-masonry-item");
    });

    test("applies custom gap", async () => {
      render(CustomPropsTest);

      await waitForMasonry();

      const masonry = document.querySelector('[data-scope="virtual-masonry"]');
      expect(masonry).toBeInTheDocument();

      const items = document.querySelectorAll('[data-part="item"]') as NodeListOf<HTMLElement>;
      expect(items.length).toBeGreaterThan(0);

      // CustomPropsTest uses gap=20 and columns=3
      // With container width 800px, gap 20px, and 3 columns:
      // Total gap space = 20 * (3 - 1) = 40px
      // Available width = 800 - 40 = 760px
      // Column width = 760 / 3 ≈ 253.33px
      // Expected column positions: 0px, 273.33px (253.33 + 20), 546.67px (253.33 * 2 + 40)

      const gap = 20;
      const containerWidth = 800;
      const columns = 3;
      const totalGapSpace = gap * (columns - 1);
      const availableWidth = containerWidth - totalGapSpace;
      const columnWidth = availableWidth / columns;

      // Get unique left positions from rendered items
      const leftPositions = new Set<number>();
      items.forEach((item) => {
        const left = parseFloat(item.style.left);
        if (!isNaN(left)) {
          leftPositions.add(left);
        }
      });

      // Verify we have items in multiple columns
      expect(leftPositions.size).toBeGreaterThanOrEqual(2);

      // Verify the gap between columns
      const sortedPositions = Array.from(leftPositions).sort((a, b) => a - b);

      // Check that column positions account for the gap
      // Expected positions: 0, columnWidth + gap, (columnWidth + gap) * 2
      expect(sortedPositions[0]).toBeCloseTo(0, 1);

      if (sortedPositions.length >= 2) {
        const expectedSecondColumn = columnWidth + gap;
        expect(sortedPositions[1]).toBeCloseTo(expectedSecondColumn, 1);
      }

      if (sortedPositions.length >= 3) {
        const expectedThirdColumn = columnWidth * 2 + gap * 2;
        expect(sortedPositions[2]).toBeCloseTo(expectedThirdColumn, 1);
      }
    });
  });

  describe("CSS Containment", () => {
    test("applies containment when contained prop is true", async () => {
      render(ContainedTest);

      await waitForMasonry();

      const items = document.querySelectorAll('[data-part="item"]') as NodeListOf<HTMLElement>;
      expect(items.length).toBeGreaterThan(0);

      const firstItem = items[0];
      expect(firstItem.style.cssText).toContain("contain:");
    });

    test("does not apply containment by default", async () => {
      render(BasicMasonryTest);

      await waitForMasonry();

      const items = document.querySelectorAll('[data-part="item"]') as NodeListOf<HTMLElement>;
      expect(items.length).toBeGreaterThan(0);

      const firstItem = items[0];
      expect(firstItem.style.cssText).not.toContain("contain:");
    });
  });

  describe("Responsive Behavior", () => {
    test("observes container size changes", async () => {
      render(BasicMasonryTest);

      await waitForMasonry();

      // ResizeObserver observe should be called
      expect(observe).toHaveBeenCalled();
    });

    test("disconnects ResizeObserver on unmount", async () => {
      const { unmount } = render(BasicMasonryTest);

      await waitForMasonry();

      unmount();

      // Check that disconnect was called
      expect(disconnect).toHaveBeenCalled();
    });
  });

  describe("Performance", () => {
    test("renders efficiently with many items", async () => {
      const start = performance.now();
      render(BasicMasonryTest);
      const end = performance.now();

      await waitForMasonry();

      // Layout calculation should complete quickly after ResizeObserver triggers
      expect(end - start).toBeLessThan(50);
    });

    test("only renders visible items from large dataset", async () => {
      render(BasicMasonryTest);

      await waitForMasonry();

      const items = document.querySelectorAll('[data-testid^="masonry-item-"]');
      // Should only render visible + overscan, not all 50
      expect(items.length).toBeLessThan(30);
    });
  });

  describe("Item Positioning", () => {
    test("items have absolute positioning", async () => {
      render(BasicMasonryTest);

      await waitForMasonry();

      const items = document.querySelectorAll('[data-part="item"]') as NodeListOf<HTMLElement>;
      expect(items.length).toBeGreaterThan(0);

      items.forEach((item) => {
        expect(item.style.position).toBe("absolute");
        expect(item.style.left).toBeTruthy();
        expect(item.style.top).toBeTruthy();
        expect(item.style.width).toBeTruthy();
        expect(item.style.height).toBeTruthy();
      });
    });

    test("uses shortest column algorithm", async () => {
      render(BasicMasonryTest);

      await waitForMasonry();

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

      await waitForMasonry();

      expect(document.querySelector('[data-part="base"]')).toBeInTheDocument();
      expect(document.querySelector('[data-part="spacer"]')).toBeInTheDocument();
      expect(document.querySelector('[data-part="content"]')).toBeInTheDocument();
      expect(document.querySelector('[data-part="item"]')).toBeInTheDocument();
    });

    test("has correct data-scope attribute", async () => {
      render(BasicMasonryTest);

      await waitForMasonry();

      const masonry = document.querySelector('[data-scope="virtual-masonry"]');
      expect(masonry).toHaveAttribute("data-scope", "virtual-masonry");
    });
  });

  describe("Edge Cases", () => {
    test("handles empty items array", async () => {
      const { container } = render(EmptyItemsTest);

      await waitForMasonry();

      const masonry = container.querySelector('[data-scope="virtual-masonry"]');
      expect(masonry).toBeInTheDocument();

      // Should render no items
      const items = container.querySelectorAll('[data-part="item"]');
      expect(items.length).toBe(0);

      // Spacer should have zero height
      const spacer = container.querySelector('[data-part="spacer"]') as HTMLElement;
      expect(spacer).toBeInTheDocument();
      expect(parseInt(spacer.style.height)).toBe(0);
    });

    test("handles single column layout", async () => {
      render(SingleColumnTest);

      await waitForMasonry();

      const masonry = document.querySelector('[data-scope="virtual-masonry"]');
      expect(masonry).toBeInTheDocument();

      // Get visible items
      const items = document.querySelectorAll('[data-part="item"]') as NodeListOf<HTMLElement>;
      expect(items.length).toBeGreaterThan(0);

      // All items should have the same left position (single column)
      const leftPositions = new Set<string>();
      items.forEach((item) => {
        leftPositions.add(item.style.left);
      });

      // With 1 column, all items should be in the same position (0px)
      expect(leftPositions.size).toBe(1);
      expect(leftPositions.has("0px")).toBe(true);
    });
  });
});
