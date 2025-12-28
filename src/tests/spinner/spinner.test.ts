import { cleanup, render } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicSpinnerTest from "./basic-spinner.test.svelte";
import SpinnerTypesTest from "./spinner-types.test.svelte";
import SpinnerColorsTest from "./spinner-colors.test.svelte";
import SpinnerSizesTest from "./spinner-sizes.test.svelte";
import SpinnerCustomPropsTest from "./spinner-custom-props.test.svelte";
import SpinnerCombinedTest from "./spinner-combined.test.svelte";

afterEach(() => {
  cleanup();
});

const EXPECTED_SPINNER_TYPES_COUNT = 5;
const EXPECTED_SPINNER_COLORS_COUNT = 5;
const EXPECTED_SPINNER_SIZES_COUNT = 7;
const EXPECTED_DOTS_CIRCLES = 3;
const EXPECTED_BARS_RECTS = 3;
const EXPECTED_PULSE_TYPE = 3;
const EXPECTED_ORBIT_TYPE = 3;

describe("Spinner Component", () => {
  describe("Basic Rendering", () => {
    test("renders basic spinner with default props", () => {
      const { container } = render(BasicSpinnerTest);
      const spinner = container.querySelector("svg");

      expect(spinner).toBeInTheDocument();
      expect(spinner).toHaveAttribute("role", "status");
    });

    test("renders as SVG element", () => {
      const { container } = render(BasicSpinnerTest);
      const spinner = container.querySelector("svg");

      expect(spinner?.tagName).toBe("svg");
    });
  });

  describe("Spinner Types", () => {
    test("renders all spinner types", () => {
      const { container } = render(SpinnerTypesTest);
      const spinners = container.querySelectorAll("svg");

      expect(spinners.length).toBe(EXPECTED_SPINNER_TYPES_COUNT);
      spinners.forEach((spinner) => {
        expect(spinner).toBeInTheDocument();
        expect(spinner).toHaveAttribute("role", "status");
      });
    });

    test("default type has spin animation class", () => {
      const { container } = render(SpinnerTypesTest);
      const defaultSpinner = container.querySelector('[data-testid="default-spinner"]');

      expect(defaultSpinner?.classList.contains("animate-spin")).toBe(true);
    });

    test("dots type renders with correct structure", () => {
      const { container } = render(SpinnerTypesTest);
      const dotsSpinner = container.querySelector('[data-testid="dots-spinner"]');
      const circles = dotsSpinner?.querySelectorAll("circle");

      expect(circles?.length).toBe(EXPECTED_DOTS_CIRCLES);
    });

    test("bars type renders with correct structure", () => {
      const { container } = render(SpinnerTypesTest);
      const barsSpinner = container.querySelector('[data-testid="bars-spinner"]');
      const rects = barsSpinner?.querySelectorAll("rect");

      expect(rects?.length).toBe(EXPECTED_BARS_RECTS);
    });

    test("pulse type renders with correct structure", () => {
      const { container } = render(SpinnerTypesTest);
      const pulseSpinner = container.querySelector('[data-testid="pulse-spinner"]');
      const circles = pulseSpinner?.querySelectorAll("circle");

      expect(circles?.length).toBe(EXPECTED_PULSE_TYPE);
    });

    test("orbit type renders with correct structure", () => {
      const { container } = render(SpinnerTypesTest);
      const orbitSpinner = container.querySelector('[data-testid="orbit-spinner"]');
      const circles = orbitSpinner?.querySelectorAll("circle");

      expect(circles?.length).toBe(EXPECTED_ORBIT_TYPE);
    });
  });

  describe("Color Variants", () => {
    test("renders different color spinners", () => {
      const { container } = render(SpinnerColorsTest);
      const spinners = container.querySelectorAll("svg");

      expect(spinners.length).toBe(EXPECTED_SPINNER_COLORS_COUNT);
    });

    test("applies color classes correctly", () => {
      const { container } = render(SpinnerColorsTest);
      const primarySpinner = container.querySelector('[data-testid="primary-spinner"]');
      const blueSpinner = container.querySelector('[data-testid="blue-spinner"]');
      const redSpinner = container.querySelector('[data-testid="red-spinner"]');

      expect(primarySpinner?.classList.contains("fill-primary-600")).toBe(true);
      expect(blueSpinner?.classList.contains("fill-blue-600")).toBe(true);
      expect(redSpinner?.classList.contains("fill-red-600")).toBe(true);
    });
  });

  describe("Size Variants", () => {
    test("renders all size variants", () => {
      const { container } = render(SpinnerSizesTest);
      const spinners = container.querySelectorAll("svg");

      expect(spinners.length).toBe(EXPECTED_SPINNER_SIZES_COUNT);
    });

    test("applies size classes correctly", () => {
      const { container } = render(SpinnerSizesTest);
      const size4 = container.querySelector('[data-testid="size-4-spinner"]');
      const size8 = container.querySelector('[data-testid="size-8-spinner"]');
      const size16 = container.querySelector('[data-testid="size-16-spinner"]');

      expect(size4?.classList.contains("w-4")).toBe(true);
      expect(size4?.classList.contains("h-4")).toBe(true);
      expect(size8?.classList.contains("w-8")).toBe(true);
      expect(size8?.classList.contains("h-8")).toBe(true);
      expect(size16?.classList.contains("w-16")).toBe(true);
      expect(size16?.classList.contains("h-16")).toBe(true);
    });
  });

  describe("Custom Props", () => {
    test("applies custom class names", () => {
      const { container } = render(SpinnerCustomPropsTest);
      const customClassSpinner = container.querySelector('[data-testid="custom-class-spinner"]');

      expect(customClassSpinner?.classList.contains("custom-class")).toBe(true);
    });

    test("applies custom aria-label", () => {
      const { container } = render(SpinnerCustomPropsTest);
      const customAriaSpinner = container.querySelector('[data-testid="custom-aria-spinner"]');

      expect(customAriaSpinner).toHaveAttribute("aria-label", "Loading content");
    });

    test("applies custom fill and color", () => {
      const { container } = render(SpinnerCustomPropsTest);
      const customFillSpinner = container.querySelector('[data-testid="custom-fill-spinner"]');
      const paths = customFillSpinner?.querySelectorAll("path");

      // Check if the paths exist (structure test)
      expect(paths?.length).toBeGreaterThan(0);
    });
  });

  describe("Combined Props", () => {
    test("applies multiple props correctly", () => {
      const { container } = render(SpinnerCombinedTest);
      const combined1 = container.querySelector('[data-testid="combined-1-spinner"]');
      const combined2 = container.querySelector('[data-testid="combined-2-spinner"]');

      expect(combined1?.classList.contains("fill-blue-600")).toBe(true);
      expect(combined1?.classList.contains("w-10")).toBe(true);
      expect(combined2?.classList.contains("fill-green-500")).toBe(true);
      expect(combined2?.classList.contains("w-12")).toBe(true);
    });

    test("renders combined props with correct structure", () => {
      const { container } = render(SpinnerCombinedTest);
      const spinners = container.querySelectorAll("svg");

      expect(spinners.length).toBe(4);
      spinners.forEach((spinner) => {
        expect(spinner).toBeInTheDocument();
        expect(spinner).toHaveAttribute("role", "status");
      });
    });
  });

  describe("Accessibility", () => {
    test("has proper role attribute", () => {
      const { container } = render(BasicSpinnerTest);
      const spinner = container.querySelector("svg");

      expect(spinner).toHaveAttribute("role", "status");
    });

    test("can have custom aria-label", () => {
      const { container } = render(SpinnerCustomPropsTest);
      const customAriaSpinner = container.querySelector('[data-testid="custom-aria-spinner"]');

      expect(customAriaSpinner).toHaveAttribute("aria-label");
    });

    test("all spinner types have role status", () => {
      const { container } = render(SpinnerTypesTest);
      const spinners = container.querySelectorAll("svg");

      spinners.forEach((spinner) => {
        expect(spinner).toHaveAttribute("role", "status");
      });
    });
  });

  describe("SVG Structure", () => {
    test("renders SVG with correct viewBox", () => {
      const { container } = render(BasicSpinnerTest);
      const spinner = container.querySelector("svg");

      expect(spinner).toHaveAttribute("viewBox");
    });

    test("default type has correct viewBox", () => {
      const { container } = render(SpinnerTypesTest);
      const defaultSpinner = container.querySelector('[data-testid="default-spinner"]');

      expect(defaultSpinner).toHaveAttribute("viewBox", "0 0 100 101");
    });

    test("dots type has correct viewBox", () => {
      const { container } = render(SpinnerTypesTest);
      const dotsSpinner = container.querySelector('[data-testid="dots-spinner"]');

      expect(dotsSpinner).toHaveAttribute("viewBox", "0 0 120 30");
    });

    test("bars type has correct viewBox", () => {
      const { container } = render(SpinnerTypesTest);
      const barsSpinner = container.querySelector('[data-testid="bars-spinner"]');

      expect(barsSpinner).toHaveAttribute("viewBox", "0 0 135 140");
    });
  });

  describe("Default Values", () => {
    test("uses default type when not specified", () => {
      const { container } = render(BasicSpinnerTest);
      const spinner = container.querySelector("svg");

      expect(spinner?.classList.contains("animate-spin")).toBe(true);
    });

    test("uses default color when not specified", () => {
      const { container } = render(BasicSpinnerTest);
      const spinner = container.querySelector("svg");

      expect(spinner?.classList.contains("fill-primary-600")).toBe(true);
    });

    test("uses default size when not specified", () => {
      const { container } = render(BasicSpinnerTest);
      const spinner = container.querySelector("svg");

      expect(spinner?.classList.contains("w-8")).toBe(true);
      expect(spinner?.classList.contains("h-8")).toBe(true);
    });
  });
});
