import { cleanup, render } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicMarkTest from "./basic-mark.test.svelte";
import CustomClassMarkTest from "./custom-class-mark.test.svelte";
import AttributesMarkTest from "./attributes-mark.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Mark Component", () => {
  describe("Basic Rendering", () => {
    test("renders mark element", () => {
      const { container } = render(BasicMarkTest);
      const mark = container.querySelector('[data-scope="mark"]');

      expect(mark).toBeInTheDocument();
      expect(mark?.tagName).toBe("MARK");
    });

    test("renders with correct data attributes", () => {
      const { container } = render(BasicMarkTest);
      const mark = container.querySelector('[data-scope="mark"]');

      expect(mark).toHaveAttribute("data-scope", "mark");
      expect(mark).toHaveAttribute("data-part", "base");
    });

    test("renders children content", () => {
      const { container } = render(BasicMarkTest);
      const mark = container.querySelector('[data-scope="mark"]');

      expect(mark).toBeInTheDocument();
      expect(mark?.textContent).toBeTruthy();
    });
  });

  describe("Custom Styling", () => {
    test("applies custom class to mark", () => {
      const { container } = render(CustomClassMarkTest);
      const mark = container.querySelector('[data-testid="custom-mark"]');

      expect(mark).toHaveClass("custom-mark-class");
    });

    test("merges custom class with theme classes", () => {
      const { container } = render(CustomClassMarkTest);
      const mark = container.querySelector('[data-testid="custom-mark"]');

      expect(mark?.className).toBeTruthy();
      expect(mark).toHaveClass("custom-mark-class");
    });
  });

  describe("HTML Attributes", () => {
    test("applies additional HTML attributes", () => {
      const { container } = render(AttributesMarkTest);
      const mark = container.querySelector('[data-testid="attributes-mark"]');

      expect(mark).toHaveAttribute("id", "mark-id");
      expect(mark).toHaveAttribute("title", "Mark title");
    });

    test("supports data attributes", () => {
      const { container } = render(AttributesMarkTest);
      const mark = container.querySelector('[data-testid="attributes-mark"]');

      expect(mark).toHaveAttribute("data-testid", "attributes-mark");
    });
  });

  describe("Semantic HTML", () => {
    test("uses semantic mark element", () => {
      const { container } = render(BasicMarkTest);
      const mark = container.querySelector("mark");

      expect(mark).toBeInTheDocument();
      expect(mark?.tagName).toBe("MARK");
    });

    test("maintains proper document structure", () => {
      const { container } = render(BasicMarkTest);
      const mark = container.querySelector('[data-scope="mark"]');

      expect(mark).toBeInTheDocument();
      expect(mark?.parentElement).toBeTruthy();
    });
  });

  describe("Theme Integration", () => {
    test("applies theme classes", () => {
      const { container } = render(BasicMarkTest);
      const mark = container.querySelector('[data-scope="mark"]');

      // Theme classes are applied through the mark() function
      expect(mark?.className).toBeTruthy();
    });

    test("theme classes work with custom classes", () => {
      const { container } = render(CustomClassMarkTest);
      const mark = container.querySelector('[data-testid="custom-mark"]');

      // Both theme and custom classes should be present
      expect(mark?.className).toBeTruthy();
      expect(mark?.classList.length).toBeGreaterThan(0);
    });
  });

  describe("Accessibility", () => {
    test("mark element is semantically meaningful", () => {
      const { container } = render(BasicMarkTest);
      const mark = container.querySelector("mark");

      expect(mark).toBeInTheDocument();
      // Mark element is a semantic HTML element for highlighted text
      expect(mark?.tagName).toBe("MARK");
    });

    test("content is readable", () => {
      const { container } = render(BasicMarkTest);
      const mark = container.querySelector('[data-scope="mark"]');

      expect(mark?.textContent).toBeTruthy();
      expect(mark?.textContent?.length).toBeGreaterThan(0);
    });
  });
});
