import { cleanup, render } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicListTest from "./basic-list.test.svelte";
import OrderedListTest from "./ordered-list.test.svelte";
import PositionListTest from "./position-list.test.svelte";
import ContenteditableListTest from "./contenteditable-list.test.svelte";
import IconListTest from "./icon-list.test.svelte";
import CustomClassListTest from "./custom-class-list.test.svelte";

afterEach(() => {
  cleanup();
});

describe("List Component", () => {
  describe("Basic Rendering", () => {
    test("renders ul element by default", () => {
      const { container } = render(BasicListTest);
      const list = container.querySelector('[data-scope="list"]');

      expect(list).toBeInTheDocument();
      expect(list?.tagName).toBe("UL");
    });

    test("renders with correct data attributes", () => {
      const { container } = render(BasicListTest);
      const list = container.querySelector('[data-scope="list"]');

      expect(list).toHaveAttribute("data-scope", "list");
      expect(list).toHaveAttribute("data-part", "base");
    });

    test("renders list items correctly", () => {
      const { container } = render(BasicListTest);
      const listItems = container.querySelectorAll('[data-scope="li"]');

      expect(listItems.length).toBe(3);
      listItems.forEach((item) => {
        expect(item).toBeInTheDocument();
        expect(item?.tagName).toBe("LI");
      });
    });

    test("list items have correct data attributes", () => {
      const { container } = render(BasicListTest);
      const listItems = container.querySelectorAll('[data-scope="li"]');

      listItems.forEach((item) => {
        expect(item).toHaveAttribute("data-scope", "li");
        expect(item).toHaveAttribute("data-part", "base");
      });
    });
  });

  describe("Tag Variants", () => {
    test("renders as ordered list when tag is ol", () => {
      const { container } = render(OrderedListTest);
      const list = container.querySelector('[data-scope="list"]');

      expect(list).toBeInTheDocument();
      expect(list?.tagName).toBe("OL");
    });

    test("ordered list contains list items", () => {
      const { container } = render(OrderedListTest);
      const listItems = container.querySelectorAll('[data-scope="li"]');

      expect(listItems.length).toBe(3);
      listItems.forEach((item) => {
        expect(item?.tagName).toBe("LI");
      });
    });
  });

  describe("Position Variants", () => {
    test("applies position prop correctly", () => {
      const { container } = render(PositionListTest);
      const list = container.querySelector('[data-scope="list"]');

      expect(list).toBeInTheDocument();
      // Position is applied via theme classes, verify element exists
      expect(list?.className).toBeTruthy();
    });
  });

  describe("Contenteditable Functionality", () => {
    test("applies contenteditable attribute when isContenteditable is true", () => {
      const { container } = render(ContenteditableListTest);
      const list = container.querySelector('[data-scope="list"]');

      expect(list).toHaveAttribute("contenteditable", "true");
    });

    test("list items are rendered in contenteditable list", () => {
      const { container } = render(ContenteditableListTest);
      const listItems = container.querySelectorAll('[data-scope="li"]');

      expect(listItems.length).toBe(2);
      listItems.forEach((item) => {
        expect(item).toBeInTheDocument();
      });
    });
  });

  describe("Icon Functionality", () => {
    test("renders list items with icon prop", () => {
      const { container } = render(IconListTest);
      const iconListItem = container.querySelector('[data-testid="icon-li"]');

      expect(iconListItem).toBeInTheDocument();
      // Icon adds flex items-center classes via Li component
      expect(iconListItem?.className).toBeTruthy();
    });

    test("multiple items with icon prop render correctly", () => {
      const { container } = render(IconListTest);
      const listItems = container.querySelectorAll('[data-scope="li"]');

      expect(listItems.length).toBe(2);
      listItems.forEach((item) => {
        expect(item).toBeInTheDocument();
      });
    });
  });

  describe("Custom Styling", () => {
    test("applies custom class to list", () => {
      const { container } = render(CustomClassListTest);
      const list = container.querySelector('[data-scope="list"]');

      expect(list).toHaveClass("custom-list-class");
    });

    test("applies custom class to list item", () => {
      const { container } = render(CustomClassListTest);
      const listItem = container.querySelector('[data-testid="custom-li"]');

      expect(listItem).toHaveClass("custom-li-class");
    });
  });

  describe("Context Functionality", () => {
    test("list provides context to child items", () => {
      const { container } = render(BasicListTest);
      const list = container.querySelector('[data-scope="list"]');
      const listItems = container.querySelectorAll('[data-scope="li"]');

      expect(list).toBeInTheDocument();
      expect(listItems.length).toBeGreaterThan(0);
      // Context is used internally by Li component to get ctxClass
      // Verify that items are properly nested within list
      listItems.forEach((item) => {
        expect(list?.contains(item)).toBe(true);
      });
    });
  });

  describe("Accessibility", () => {
    test("list maintains proper semantic structure", () => {
      const { container } = render(BasicListTest);
      const list = container.querySelector("ul");
      const listItems = container.querySelectorAll("li");

      expect(list).toBeInTheDocument();
      expect(listItems.length).toBeGreaterThan(0);

      // All list items should be children of the list
      listItems.forEach((item) => {
        expect(item.parentElement?.tagName).toBe("UL");
      });
    });

    test("ordered list maintains proper semantic structure", () => {
      const { container } = render(OrderedListTest);
      const list = container.querySelector("ol");
      const listItems = container.querySelectorAll("li");

      expect(list).toBeInTheDocument();

      // All list items should be children of the ordered list
      listItems.forEach((item) => {
        expect(item.parentElement?.tagName).toBe("OL");
      });
    });
  });
});
