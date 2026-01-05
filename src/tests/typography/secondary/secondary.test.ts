import { cleanup, render } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicSecondaryTest from "./basic-secondary.test.svelte";
import CustomClassSecondaryTest from "./custom-class-secondary.test.svelte";
import AttributesSecondaryTest from "./attributes-secondary.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Secondary Component", () => {
  describe("Basic Rendering", () => {
    test("renders small element", () => {
      const { container } = render(BasicSecondaryTest);
      const secondary = container.querySelector('[data-scope="secondary"]');

      expect(secondary).toBeInTheDocument();
      expect(secondary?.tagName).toBe("SMALL");
    });

    test("renders with correct data attributes", () => {
      const { container } = render(BasicSecondaryTest);
      const secondary = container.querySelector('[data-scope="secondary"]');

      expect(secondary).toHaveAttribute("data-scope", "secondary");
      expect(secondary).toHaveAttribute("data-part", "base");
    });

    test("renders children content", () => {
      const { container } = render(BasicSecondaryTest);
      const secondary = container.querySelector('[data-scope="secondary"]');

      expect(secondary).toBeInTheDocument();
      expect(secondary?.textContent).toBe("Basic secondary content");
    });
  });

  describe("Custom Styling", () => {
    test("applies custom class to secondary", () => {
      const { container } = render(CustomClassSecondaryTest);
      const secondary = container.querySelector('[data-testid="custom-secondary"]');

      expect(secondary).toBeInTheDocument();
      expect(secondary).toHaveClass("custom-secondary-class");
    });

    test("merges custom class with theme classes", () => {
      const { container } = render(CustomClassSecondaryTest);
      const secondary = container.querySelector('[data-testid="custom-secondary"]');

      expect(secondary).toHaveClass("custom-secondary-class");
      // Verify both custom and theme classes are present
      expect(secondary?.classList.length).toBeGreaterThan(1);
      expect(secondary?.className).toMatch(/text-/);
    });
  });

  describe("HTML Attributes", () => {
    test("applies additional HTML attributes", () => {
      const { container } = render(AttributesSecondaryTest);
      const secondary = container.querySelector('[data-testid="attributes-secondary"]');

      expect(secondary).toBeInTheDocument();
      expect(secondary).toHaveAttribute("id", "custom-secondary-id");
      expect(secondary).toHaveAttribute("title", "Secondary title");
      expect(secondary).toHaveAttribute("aria-label", "Secondary label");
    });

    test("supports custom data attributes", () => {
      const { container } = render(AttributesSecondaryTest);
      const secondary = container.querySelector('[data-testid="attributes-secondary"]');

      expect(secondary).toHaveAttribute("data-custom", "custom-value");
      expect(secondary).toHaveAttribute("data-testid", "attributes-secondary");
    });
  });

  describe("Semantic HTML", () => {
    test("maintains proper document structure", () => {
      const { container } = render(BasicSecondaryTest);
      const secondary = container.querySelector('[data-scope="secondary"]');

      expect(secondary).toBeInTheDocument();
    });
  });

  describe("Theme Integration", () => {
    test("applies theme classes", () => {
      const { container } = render(BasicSecondaryTest);
      const secondary = container.querySelector('[data-scope="secondary"]');

      // Verify actual theme classes applied by Secondary component
      expect(secondary?.className).toMatch(/text-(gray|secondary)/);
      expect(secondary).toHaveClass("test-class");
    });

    test("theme classes work with custom classes", () => {
      const { container } = render(CustomClassSecondaryTest);
      const secondary = container.querySelector('[data-testid="custom-secondary"]');

      // Both theme and custom classes should be present
      expect(secondary?.className).toBeTruthy();
      expect(secondary).toHaveClass("custom-secondary-class");
    });
  });

  describe("Accessibility", () => {
    test("small element is semantically meaningful", () => {
      const { container } = render(BasicSecondaryTest);
      const secondary = container.querySelector("small");

      expect(secondary).toBeInTheDocument();
      // Small element is a semantic HTML element for secondary text
      expect(secondary?.tagName).toBe("SMALL");
    });

    test("content is readable", () => {
      const { container } = render(BasicSecondaryTest);
      const secondary = container.querySelector('[data-scope="secondary"]');

      expect(secondary?.textContent).toBeTruthy();
      expect(secondary?.textContent?.length).toBeGreaterThan(0);
    });

    test("supports aria attributes", () => {
      const { container } = render(AttributesSecondaryTest);
      const secondary = container.querySelector('[data-testid="attributes-secondary"]');

      expect(secondary).toHaveAttribute("aria-label", "Secondary label");
    });
  });
});
