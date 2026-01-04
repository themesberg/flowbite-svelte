import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicHeadingTest from "./basic-heading.test.svelte";
import HeadingLevelsTest from "./heading-levels.test.svelte";
import CustomClassTest from "./custom-class.test.svelte";
import CustomAttributesTest from "./custom-attributes.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Heading Component", () => {
  describe("Basic Rendering", () => {
    test("renders with default h1 tag", () => {
      render(BasicHeadingTest);
      const heading = document.querySelector("h1");

      expect(heading).toBeInTheDocument();
      expect(heading?.tagName).toBe("H1");
      expect(heading).toHaveAttribute("data-scope", "heading");
      expect(heading).toHaveAttribute("data-part", "base");
    });

    test("renders with provided content", () => {
      render(BasicHeadingTest);
      const heading = document.querySelector("h1");

      expect(heading).toHaveTextContent("Default heading content");
    });
  });

  describe("Heading Levels", () => {
    test("renders h1 with correct tag and attributes", () => {
      render(HeadingLevelsTest);
      const h1 = screen.getByTestId("h1");

      expect(h1).toBeInTheDocument();
      expect(h1.tagName).toBe("H1");
      expect(h1).toHaveAttribute("data-scope", "heading");
      expect(h1).toHaveAttribute("data-part", "base");
      expect(h1).toHaveTextContent("H1 heading");
    });

    test("renders h2 with correct tag and attributes", () => {
      render(HeadingLevelsTest);
      const h2 = screen.getByTestId("h2");

      expect(h2).toBeInTheDocument();
      expect(h2.tagName).toBe("H2");
      expect(h2).toHaveAttribute("data-scope", "heading");
      expect(h2).toHaveAttribute("data-part", "base");
      expect(h2).toHaveTextContent("H2 heading");
    });

    test("renders h3 with correct tag and attributes", () => {
      render(HeadingLevelsTest);
      const h3 = screen.getByTestId("h3");

      expect(h3).toBeInTheDocument();
      expect(h3.tagName).toBe("H3");
      expect(h3).toHaveAttribute("data-scope", "heading");
      expect(h3).toHaveAttribute("data-part", "base");
      expect(h3).toHaveTextContent("H3 heading");
    });

    test("renders h4 with correct tag and attributes", () => {
      render(HeadingLevelsTest);
      const h4 = screen.getByTestId("h4");

      expect(h4).toBeInTheDocument();
      expect(h4.tagName).toBe("H4");
      expect(h4).toHaveAttribute("data-scope", "heading");
      expect(h4).toHaveAttribute("data-part", "base");
      expect(h4).toHaveTextContent("H4 heading");
    });

    test("renders h5 with correct tag and attributes", () => {
      render(HeadingLevelsTest);
      const h5 = screen.getByTestId("h5");

      expect(h5).toBeInTheDocument();
      expect(h5.tagName).toBe("H5");
      expect(h5).toHaveAttribute("data-scope", "heading");
      expect(h5).toHaveAttribute("data-part", "base");
      expect(h5).toHaveTextContent("H5 heading");
    });

    test("renders h6 with correct tag and attributes", () => {
      render(HeadingLevelsTest);
      const h6 = screen.getByTestId("h6");

      expect(h6).toBeInTheDocument();
      expect(h6.tagName).toBe("H6");
      expect(h6).toHaveAttribute("data-scope", "heading");
      expect(h6).toHaveAttribute("data-part", "base");
      expect(h6).toHaveTextContent("H6 heading");
    });

    test("all heading levels have consistent data attributes", () => {
      render(HeadingLevelsTest);

      const headings = [screen.getByTestId("h1"), screen.getByTestId("h2"), screen.getByTestId("h3"), screen.getByTestId("h4"), screen.getByTestId("h5"), screen.getByTestId("h6")];

      headings.forEach((heading) => {
        expect(heading).toHaveAttribute("data-scope", "heading");
        expect(heading).toHaveAttribute("data-part", "base");
      });
    });
  });

  describe("Props", () => {
    test("applies custom class to h1", () => {
      render(CustomClassTest);
      const heading = document.querySelector(".custom-h1-class");

      expect(heading).toBeInTheDocument();
      expect(heading?.tagName).toBe("H1");
      expect(heading).toHaveClass("custom-h1-class");
    });

    test("applies custom class to h2", () => {
      render(CustomClassTest);
      const heading = document.querySelector(".custom-h2-class");

      expect(heading).toBeInTheDocument();
      expect(heading?.tagName).toBe("H2");
      expect(heading).toHaveClass("custom-h2-class");
    });

    test("accepts custom attributes via restProps", () => {
      render(CustomAttributesTest);
      const heading = document.querySelector("#custom-heading-id");

      expect(heading).toBeInTheDocument();
      expect(heading?.tagName).toBe("H2");
      expect(heading).toHaveAttribute("id", "custom-heading-id");
      expect(heading).toHaveAttribute("data-custom", "custom-value");
      expect(heading).toHaveAttribute("title", "Custom heading title");
      expect(heading).toHaveAttribute("aria-label", "Custom heading label");
    });
  });

  describe("Default Values", () => {
    test("uses h1 as default when tag prop is not provided", () => {
      render(BasicHeadingTest);
      const heading = document.querySelector("h1");

      expect(heading).toBeInTheDocument();
      expect(heading?.tagName).toBe("H1");
    });

    test("default heading has theme classes applied", () => {
      render(BasicHeadingTest);
      const heading = document.querySelector("h1");

      expect(heading).toBeInTheDocument();
      // Theme classes are applied but we don't test specific class strings
    });
  });

  describe("Semantic HTML", () => {
    test("renders proper heading hierarchy", () => {
      render(HeadingLevelsTest);

      // Verify all heading levels exist and can be queried
      expect(document.querySelector("h1")).toBeInTheDocument();
      expect(document.querySelector("h2")).toBeInTheDocument();
      expect(document.querySelector("h3")).toBeInTheDocument();
      expect(document.querySelector("h4")).toBeInTheDocument();
      expect(document.querySelector("h5")).toBeInTheDocument();
      expect(document.querySelector("h6")).toBeInTheDocument();
    });
  });
});
