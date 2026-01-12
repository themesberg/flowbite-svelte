import { cleanup, render, screen, fireEvent, waitFor } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicListTest from "./basic-list.test.svelte";
import VariableHeightTest from "./variable-height.test.svelte";
import ScrollToIndexTest, { testState as scrollTestState, scrollTo } from "./scroll-to-index.test.svelte";
import CustomClassesTest from "./custom-classes.test.svelte";
import ContainedTest from "./contained.test.svelte";

afterEach(() => {
  cleanup();
  scrollTestState.scrolledToIndex = -1;
});

describe("VirtualList Component", () => {
  describe("Basic Rendering", () => {
    test("renders virtual list container", () => {
      render(BasicListTest);

      const list = screen.getByTestId("basic-list");
      expect(list).toBeInTheDocument();
      expect(list).toHaveAttribute("data-scope", "virtual-list");
      expect(list).toHaveAttribute("role", "list");
    });

    test("renders visible items only", () => {
      render(BasicListTest);

      // With height 400 and minItemHeight 50, we expect about 8-10 visible items
      const items = document.querySelectorAll('[data-testid^="list-item-"]');
      expect(items.length).toBeLessThan(100); // Should not render all 100 items
      expect(items.length).toBeGreaterThan(0); // Should render some items
    });

    test("applies correct height to container", () => {
      render(BasicListTest);

      const list = screen.getByTestId("basic-list");
      expect(list).toHaveStyle({ height: "400px" });
    });

    test("renders spacer with total height", () => {
      render(BasicListTest);

      const spacer = document.querySelector('[data-part="spacer"]');
      expect(spacer).toBeInTheDocument();
      // 100 items * 50px default height = 5000px
      expect(spacer).toHaveStyle({ height: "5000px" });
    });

    test("renders content wrapper with transform", () => {
      render(BasicListTest);

      const content = document.querySelector('[data-part="content"]');
      expect(content).toBeInTheDocument();
      expect(content?.getAttribute("style")).toContain("transform");
    });
  });

  describe("Accessibility", () => {
    test("has proper ARIA role", () => {
      render(BasicListTest);

      const list = screen.getByTestId("basic-list");
      expect(list).toHaveAttribute("role", "list");
    });

    test("uses custom aria-label", () => {
      render(BasicListTest);

      const list = screen.getByTestId("basic-list");
      expect(list).toHaveAttribute("aria-label", "Virtual scrolling list");
    });

    test("list items have proper ARIA attributes", () => {
      render(BasicListTest);

      const items = document.querySelectorAll('[role="listitem"]');
      expect(items.length).toBeGreaterThan(0);

      // Check first visible item
      const firstItem = items[0];
      expect(firstItem).toHaveAttribute("aria-setsize", "100");
      expect(firstItem).toHaveAttribute("aria-posinset");
    });
  });

  describe("Variable Heights", () => {
    test("renders items with variable heights", () => {
      render(VariableHeightTest);

      const list = screen.getByTestId("variable-height-list");
      expect(list).toBeInTheDocument();
    });

    test("calculates correct total height with variable heights", () => {
      render(VariableHeightTest);

      const spacer = document.querySelector('[data-part="spacer"]');
      expect(spacer).toBeInTheDocument();
      // Heights: 50, 80, 110 repeating = (50+80+110) * 16 + 50 + 80 = 3970px for 50 items
      const expectedHeight = 3970;
      expect(spacer).toHaveStyle({ height: `${expectedHeight}px` });
    });
  });

  describe("Scrolling", () => {
    test("updates visible items on scroll", async () => {
      render(BasicListTest);

      const list = screen.getByTestId("basic-list");

      // Trigger scroll event
      fireEvent.scroll(list, { target: { scrollTop: 500 } });

      await waitFor(() => {
        const items = document.querySelectorAll('[data-testid^="list-item-"]');
        expect(items.length).toBeGreaterThan(0);
      });
    });

    test("handles rapid scroll events", async () => {
      render(BasicListTest);
      const list = screen.getByTestId("basic-list");

      for (let i = 0; i < 10; i++) {
        fireEvent.scroll(list, { target: { scrollTop: i * 100 } });
      }

      await waitFor(() => {
        const items = document.querySelectorAll('[data-testid^="list-item-"]');
        expect(items.length).toBeGreaterThan(0);
      });
    });
  });

  describe("Scroll To Index", () => {
    test("scrolls to specific index", async () => {
      render(ScrollToIndexTest);

      scrollTo(50);

      await waitFor(() => {
        expect(scrollTestState.scrolledToIndex).toBe(50);
      });
    });

    test("handles out of bounds indices gracefully", () => {
      render(ScrollToIndexTest);

      const list = screen.getByTestId("scroll-list");
      const initialScrollTop = list.scrollTop;

      scrollTo(-1);
      expect(list.scrollTop).toBe(initialScrollTop);

      scrollTo(1000);
      expect(list.scrollTop).toBe(initialScrollTop);

      // Component remains stable
      const items = document.querySelectorAll('[data-testid^="scroll-item-"]');
      expect(items.length).toBeGreaterThan(0);
    });
  });

  describe("Custom Styling", () => {
    test("applies custom base class", () => {
      render(CustomClassesTest);

      const list = screen.getByTestId("custom-list");
      expect(list.className).toContain("custom-base-class");
    });

    test("applies custom item classes", () => {
      render(CustomClassesTest);

      const items = document.querySelectorAll('[data-part="item"]');
      expect(items.length).toBeGreaterThan(0);
      expect(items[0].className).toContain("custom-item-class");
    });

    test("applies overscan prop", () => {
      render(CustomClassesTest);

      // With overscan=10, should render more items than without
      const items = document.querySelectorAll('[data-testid^="custom-item-"]');
      expect(items.length).toBeGreaterThan(8); // Default visible + overscan
    });
  });

  describe("CSS Containment", () => {
    test("applies containment styles when contained prop is true", () => {
      render(ContainedTest);

      const items = document.querySelectorAll('[data-part="item"]');
      expect(items.length).toBeGreaterThan(0);

      const firstItem = items[0] as HTMLElement;
      expect(firstItem.style.cssText).toContain("contain:");
    });

    test("does not apply containment by default", () => {
      render(BasicListTest);

      const items = document.querySelectorAll('[data-part="item"]');
      expect(items.length).toBeGreaterThan(0);

      const firstItem = items[0] as HTMLElement;
      expect(firstItem.style.cssText).not.toContain("contain:");
    });
  });

  describe("Performance", () => {
    test("renders large dataset efficiently", () => {
      const start = performance.now();
      render(BasicListTest);
      const end = performance.now();

      // Should render in reasonable time (less than 500ms)
      expect(end - start).toBeLessThan(500);
    });

    test("only renders visible items from large dataset", () => {
      render(BasicListTest);

      const allItems = document.querySelectorAll('[data-testid^="list-item-"]');
      // Should only render visible items + overscan, not all 100
      expect(allItems.length).toBeLessThan(20);
    });
  });

  describe("Container Structure", () => {
    test("renders container with correct structure", () => {
      const { container } = render(BasicListTest);

      // Verifies container renders with correct structure
      const list = container.querySelector('[data-scope="virtual-list"]');
      expect(list).toBeInTheDocument();
    });
  });

  describe("Data Parts", () => {
    test("renders with correct data-part attributes", () => {
      render(BasicListTest);

      expect(document.querySelector('[data-part="base"]')).toBeInTheDocument();
      expect(document.querySelector('[data-part="spacer"]')).toBeInTheDocument();
      expect(document.querySelector('[data-part="content"]')).toBeInTheDocument();
      expect(document.querySelector('[data-part="item"]')).toBeInTheDocument();
    });

    test("has correct data-scope attribute", () => {
      render(BasicListTest);

      const list = screen.getByTestId("basic-list");
      expect(list).toHaveAttribute("data-scope", "virtual-list");
    });
  });
});
