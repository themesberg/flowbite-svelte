import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicHrTest from "./basic-hr.test.svelte";
import HrWithContentTest from "./hr-with-content.test.svelte";
import HrCustomClassTest from "./hr-custom-class.test.svelte";
import HrCustomPropsTest from "./hr-custom-props.test.svelte";
import HrCustomClassesTest from "./hr-custom-classes.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Hr Component", () => {
  describe("Basic Rendering", () => {
    test("renders hr element without children", () => {
      render(BasicHrTest);
      const hr = document.querySelector("hr");

      expect(hr).toBeInTheDocument();
      expect(hr?.tagName).toBe("HR");
      expect(hr).toHaveAttribute("data-scope", "hr");
      expect(hr).toHaveAttribute("data-part", "base");
    });

    test("renders as single hr element when no children", () => {
      render(BasicHrTest);
      const hrs = document.querySelectorAll("hr");

      expect(hrs).toHaveLength(1);
    });
  });

  describe("Hr with Content", () => {
    test("renders wrapper div when children are provided", () => {
      render(HrWithContentTest);
      const wrapper = document.querySelector('[data-part="wrapper"]');

      expect(wrapper).toBeInTheDocument();
      expect(wrapper?.tagName).toBe("DIV");
      expect(wrapper).toHaveAttribute("data-scope", "hr");
    });

    test("renders hr element inside wrapper", () => {
      render(HrWithContentTest);
      const hr = document.querySelector('[data-part="base"]');

      expect(hr).toBeInTheDocument();
      expect(hr?.tagName).toBe("HR");
      expect(hr).toHaveAttribute("data-part", "base");
    });

    test("renders content element with children", () => {
      render(HrWithContentTest);
      const content = screen.getByTestId("content");
      const contentWrapper = document.querySelector('[data-part="content"]');

      expect(contentWrapper).toBeInTheDocument();
      expect(contentWrapper?.tagName).toBe("DIV");
      expect(contentWrapper).toContainElement(content);
      expect(content).toHaveTextContent("Content between lines");
    });

    test("has correct structure with wrapper, hr, and content", () => {
      render(HrWithContentTest);
      const wrapper = document.querySelector('[data-scope="hr"][data-part="wrapper"]');
      const hr = wrapper?.querySelector('[data-part="base"]');
      const content = wrapper?.querySelector('[data-part="content"]');

      expect(wrapper).toBeInTheDocument();
      expect(hr).toBeInTheDocument();
      expect(content).toBeInTheDocument();
    });
  });

  describe("Props", () => {
    test("applies custom class to hr", () => {
      render(HrCustomClassTest);
      const hr = document.querySelector("hr");

      expect(hr).toBeInTheDocument();
      expect(hr).toHaveClass("custom-hr-class");
    });

    test("accepts custom attributes via hrProps", () => {
      render(HrCustomPropsTest);
      const hr = document.querySelector("#custom-hr-id");

      expect(hr).toBeInTheDocument();
      expect(hr?.tagName).toBe("HR");
      expect(hr).toHaveAttribute("id", "custom-hr-id");
      expect(hr).toHaveAttribute("data-custom", "custom-value");
      expect(hr).toHaveAttribute("title", "Custom HR title");
      expect(hr).toHaveAttribute("aria-label", "Custom HR label");
    });

    test("divProps are applied to wrapper div", () => {
      render(HrCustomPropsTest);
      const wrapperDiv = screen.getByTestId("wrapper-div");

      expect(wrapperDiv).toBeInTheDocument();
      expect(wrapperDiv).toHaveAttribute("id", "wrapper-id");
      expect(wrapperDiv?.tagName).toBe("DIV");
      expect(wrapperDiv).toHaveAttribute("data-part", "wrapper");
    });

    test("hrProps are applied to hr element", () => {
      render(HrCustomPropsTest);
      const hrElement = screen.getByTestId("hr-element");

      expect(hrElement).toBeInTheDocument();
      expect(hrElement).toHaveAttribute("id", "hr-id");
      expect(hrElement?.tagName).toBe("HR");
      expect(hrElement).toHaveAttribute("data-part", "base");
    });

    test("applies custom class and classes variant", () => {
      render(HrCustomClassesTest);
      const wrapper = document.querySelector('[data-part="wrapper"]');
      const content = document.querySelector('[data-part="content"]');
      const hr = document.querySelector('[data-part="base"]');

      // Test classes prop for wrapper and content
      expect(wrapper).toHaveClass("custom-wrapper-class");
      expect(content).toHaveClass("custom-content-class");

      // Test top-level class prop for hr element
      expect(hr?.className).toContain("custom-hr-class");
    });
  });

  describe("Data Attributes", () => {
    test("single hr has data-scope and data-part attributes", () => {
      render(BasicHrTest);
      const hr = document.querySelector("hr");

      expect(hr).toHaveAttribute("data-scope", "hr");
      expect(hr).toHaveAttribute("data-part", "base");
    });

    test("wrapper has correct data attributes", () => {
      render(HrWithContentTest);
      const wrapper = document.querySelector('[data-part="wrapper"]');

      expect(wrapper).toHaveAttribute("data-scope", "hr");
      expect(wrapper).toHaveAttribute("data-part", "wrapper");
    });

    test("content div has data-part attribute", () => {
      render(HrWithContentTest);
      const content = document.querySelector('[data-part="content"]');

      expect(content).toHaveAttribute("data-part", "content");
    });
  });

  describe("Conditional Rendering", () => {
    test("renders single hr when no children", () => {
      render(BasicHrTest);
      const wrapper = document.querySelector('[data-part="wrapper"]');
      const hrs = document.querySelectorAll("hr");

      expect(wrapper).not.toBeInTheDocument();
      expect(hrs).toHaveLength(1);
    });

    test("renders wrapper structure when children exist", () => {
      render(HrWithContentTest);
      const wrapper = document.querySelector('[data-part="wrapper"]');
      const content = document.querySelector('[data-part="content"]');

      expect(wrapper).toBeInTheDocument();
      expect(content).toBeInTheDocument();
    });
  });
});
