import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicDtTest from "./basic-dt.test.svelte";
import BasicDdTest from "./basic-dd.test.svelte";
import CustomClassTest from "./custom-class.test.svelte";
import MultipleItemsTest from "./multiple-items.test.svelte";
import CustomAttributesTest from "./custom-attributes.test.svelte";

afterEach(() => {
  cleanup();
});

describe("DescriptionList Component", () => {
  describe("Basic Rendering", () => {
    test("renders dt element with correct tag", () => {
      render(BasicDtTest);
      const term = document.querySelector("dt");

      expect(term).toBeInTheDocument();
      expect(term?.tagName).toBe("DT");
      expect(term).toHaveAttribute("data-scope", "description-list");
      expect(term).toHaveAttribute("data-part", "base");
    });

    test("renders dt element with content", () => {
      render(BasicDtTest);
      const term = document.querySelector("dt");

      expect(term).toHaveTextContent("Term content");
    });

    test("renders dd element with correct tag", () => {
      render(BasicDdTest);
      const definition = document.querySelector("dd");

      expect(definition).toBeInTheDocument();
      expect(definition?.tagName).toBe("DD");
      expect(definition).toHaveAttribute("data-scope", "description-list");
      expect(definition).toHaveAttribute("data-part", "base");
    });

    test("renders dd element with content", () => {
      render(BasicDdTest);
      const definition = document.querySelector("dd");

      expect(definition).toHaveTextContent("Definition content");
    });
  });

  describe("Props", () => {
    test("applies custom class to dt", () => {
      render(CustomClassTest);
      const term = document.querySelector(".custom-dt-class");

      expect(term).toBeInTheDocument();
      expect(term?.tagName).toBe("DT");
      expect(term).toHaveClass("custom-dt-class");
    });

    test("applies custom class to dd", () => {
      render(CustomClassTest);
      const definition = document.querySelector(".custom-dd-class");

      expect(definition).toBeInTheDocument();
      expect(definition?.tagName).toBe("DD");
      expect(definition).toHaveClass("custom-dd-class");
    });

    test("accepts custom attributes via restProps", () => {
      render(CustomAttributesTest);
      const element = document.querySelector("#custom-id");

      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute("id", "custom-id");
      expect(element).toHaveAttribute("data-custom", "custom-value");
      expect(element).toHaveAttribute("title", "Custom title");
      expect(element).toHaveAttribute("aria-label", "Custom aria label");
    });
  });

  describe("Multiple Items", () => {
    test("renders multiple dt/dd pairs correctly", () => {
      render(MultipleItemsTest);

      const term1 = screen.getByTestId("term-1");
      const def1 = screen.getByTestId("def-1");
      const term2 = screen.getByTestId("term-2");
      const def2 = screen.getByTestId("def-2");

      expect(term1).toBeInTheDocument();
      expect(term1.tagName).toBe("DT");
      expect(term1).toHaveTextContent("First term");

      expect(def1).toBeInTheDocument();
      expect(def1.tagName).toBe("DD");
      expect(def1).toHaveTextContent("First definition");

      expect(term2).toBeInTheDocument();
      expect(term2.tagName).toBe("DT");
      expect(term2).toHaveTextContent("Second term");

      expect(def2).toBeInTheDocument();
      expect(def2.tagName).toBe("DD");
      expect(def2).toHaveTextContent("Second definition");
    });

    test("maintains data attributes for all items", () => {
      render(MultipleItemsTest);

      const term1 = screen.getByTestId("term-1");
      const def1 = screen.getByTestId("def-1");
      const term2 = screen.getByTestId("term-2");
      const def2 = screen.getByTestId("def-2");

      // All elements should have data-scope and data-part
      [term1, def1, term2, def2].forEach((element) => {
        expect(element).toHaveAttribute("data-scope", "description-list");
        expect(element).toHaveAttribute("data-part", "base");
      });
    });
  });

  describe("Tag Behavior", () => {
    test("dt tag renders with default theme classes", () => {
      render(BasicDtTest);
      const term = document.querySelector("dt");

      expect(term).toBeInTheDocument();
      // Theme classes are applied but we don't test specific class strings
    });

    test("dd tag renders with default theme classes", () => {
      render(BasicDdTest);
      const definition = document.querySelector("dd");

      expect(definition).toBeInTheDocument();
      // Theme classes are applied but we don't test specific class strings
    });

    test("tag prop is required and respected", () => {
      render(BasicDtTest);
      const dtElement = document.querySelector("dt");
      expect(dtElement).toBeInTheDocument();

      render(BasicDdTest);
      const ddElement = document.querySelector("dd");
      expect(ddElement).toBeInTheDocument();
    });
  });
});
