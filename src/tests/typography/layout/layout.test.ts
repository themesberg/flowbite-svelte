import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicLayoutTest from "./basic-layout.test.svelte";
import LayoutCustomClassTest from "./layout-custom-class.test.svelte";
import LayoutCustomPropsTest from "./layout-custom-props.test.svelte";
import LayoutWithContentTest from "./layout-with-content.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Layout Component", () => {
  describe("Basic Rendering", () => {
    test("renders div element", () => {
      render(BasicLayoutTest);
      const layout = screen.getByTestId("basic-layout");

      expect(layout).toBeInTheDocument();
      expect(layout.tagName).toBe("DIV");
    });

    test("has data-scope attribute", () => {
      render(BasicLayoutTest);
      const layout = screen.getByTestId("basic-layout");

      expect(layout).toHaveAttribute("data-scope", "layout");
    });

    test("has data-part attribute", () => {
      render(BasicLayoutTest);
      const layout = screen.getByTestId("basic-layout");

      expect(layout).toHaveAttribute("data-part", "base");
    });

    test("renders children content", () => {
      render(BasicLayoutTest);
      const content = screen.getByTestId("layout-content");

      expect(content).toBeInTheDocument();
      expect(content).toHaveTextContent("Layout content");
    });

    test("children are inside layout div", () => {
      render(BasicLayoutTest);
      const layout = screen.getByTestId("basic-layout");
      const content = screen.getByTestId("layout-content");

      expect(layout).toContainElement(content);
    });
  });

  describe("Props", () => {
    test("applies custom class to layout", () => {
      render(LayoutCustomClassTest);
      const layout = screen.getByTestId("custom-class-layout");

      expect(layout).toHaveClass("custom-layout-class");
    });

    test("accepts custom attributes via restProps", () => {
      render(LayoutCustomPropsTest);
      const layout = screen.getByTestId("custom-props-layout");

      expect(layout).toHaveAttribute("id", "custom-layout-id");
      expect(layout).toHaveAttribute("data-custom", "custom-value");
      expect(layout).toHaveAttribute("title", "Custom layout title");
      expect(layout).toHaveAttribute("aria-label", "Custom layout label");
      expect(layout).toHaveAttribute("role", "region");
    });

    test("maintains data attributes with custom props", () => {
      render(LayoutCustomPropsTest);
      const layout = screen.getByTestId("custom-props-layout");

      expect(layout).toHaveAttribute("data-scope", "layout");
      expect(layout).toHaveAttribute("data-part", "base");
    });
  });

  describe("Content Rendering", () => {
    test("renders complex child structure", () => {
      render(LayoutWithContentTest);
      const layout = screen.getByTestId("complex-layout");
      const childDiv = screen.getByTestId("child-div");
      const heading = screen.getByTestId("heading");
      const paragraph = screen.getByTestId("paragraph");
      const button = screen.getByTestId("button");

      expect(layout).toContainElement(childDiv);
      expect(childDiv).toContainElement(heading);
      expect(childDiv).toContainElement(paragraph);
      expect(childDiv).toContainElement(button);
    });

    test("supports nested layouts", () => {
      render(LayoutWithContentTest);
      const outerLayout = screen.getByTestId("nested-layout");
      const innerLayout = screen.getByTestId("inner-layout");
      const nestedContent = screen.getByTestId("nested-content");

      expect(outerLayout).toContainElement(innerLayout);
      expect(innerLayout).toContainElement(nestedContent);
    });

    test("nested layout maintains data attributes", () => {
      render(LayoutWithContentTest);
      const outerLayout = screen.getByTestId("nested-layout");
      const innerLayout = screen.getByTestId("inner-layout");

      expect(outerLayout).toHaveAttribute("data-scope", "layout");
      expect(innerLayout).toHaveAttribute("data-scope", "layout");
      expect(outerLayout).toHaveAttribute("data-part", "base");
      expect(innerLayout).toHaveAttribute("data-part", "base");
    });
  });

  describe("HTML Structure", () => {
    test("renders as div element", () => {
      render(BasicLayoutTest);
      const layout = screen.getByTestId("basic-layout");

      expect(layout.tagName).toBe("DIV");
    });

    test("does not wrap content in additional elements", () => {
      render(BasicLayoutTest);
      const layout = screen.getByTestId("basic-layout");
      const content = screen.getByTestId("layout-content");

      // Content should be a direct child
      expect(layout.children).toHaveLength(1);
      expect(layout.firstElementChild).toBe(content);
    });
  });

  describe("Data Attributes", () => {
    test("all layouts have consistent data-scope", () => {
      render(LayoutWithContentTest);
      const layouts = document.querySelectorAll('[data-scope="layout"]');

      expect(layouts.length).toBe(3);
      layouts.forEach((layout) => {
        expect(layout).toHaveAttribute("data-scope", "layout");
      });
    });

    test("all layouts have data-part base", () => {
      render(LayoutWithContentTest);
      const layouts = document.querySelectorAll('[data-scope="layout"]');

      layouts.forEach((layout) => {
        expect(layout).toHaveAttribute("data-part", "base");
      });
    });
  });

  describe("Default Behavior", () => {
    test("renders correctly without any props", () => {
      render(BasicLayoutTest);
      const layout = screen.getByTestId("basic-layout");

      expect(layout).toBeInTheDocument();
      expect(layout.tagName).toBe("DIV");
    });

    test("renders with only children provided", () => {
      render(BasicLayoutTest);
      const content = screen.getByTestId("layout-content");

      expect(content).toBeInTheDocument();
    });
  });
});
