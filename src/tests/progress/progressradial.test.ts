import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicProgressradialTest from "./basic-progressradial.test.svelte";
import LabelInsideProgressradialTest from "./label-inside-progressradial.test.svelte";
import LabelOutsideProgressradialTest from "./label-outside-progressradial.test.svelte";
import ColoredProgressradialTest from "./colored-progressradial.test.svelte";
import AnimatedProgressradialTest from "./animated-progressradial.test.svelte";
import CustomSizeProgressradialTest from "./custom-size-progressradial.test.svelte";

afterEach(() => {
  cleanup();
});

/**
 * Helper function to calculate expected stroke-dashoffset for a given progress
 * Formula: circumference - (progress / 100) * circumference
 * Where circumference = 2 * PI * radius
 * Default radius for Progressradial is 42
 */
function calculateStrokeDashoffset(progress: number, radius: number = 42): number {
  const circumference = 2 * Math.PI * radius;
  return circumference - (progress / 100) * circumference;
}

describe("Progressradial Component", () => {
  describe("Basic Functionality", () => {
    test("renders progressradial", () => {
      const { container } = render(BasicProgressradialTest);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
    });

    test("renders background circle", () => {
      const { container } = render(BasicProgressradialTest);
      const circles = container.querySelectorAll("circle");

      // Should have 2 circles: background and foreground
      expect(circles).toHaveLength(2);
    });

    test("renders foreground circle", () => {
      const { container } = render(BasicProgressradialTest);
      const circles = container.querySelectorAll("circle");

      expect(circles[1]).toBeInTheDocument();
    });

    test("applies default size classes", () => {
      const { container } = render(BasicProgressradialTest);
      const wrapper = container.querySelector(".h-24");

      expect(wrapper).toBeInTheDocument();
    });
  });

  describe("Label Variations", () => {
    test("renders with label inside", () => {
      render(LabelInsideProgressradialTest);

      expect(screen.getByText("75%")).toBeInTheDocument();
    });

    test("renders with label outside", () => {
      render(LabelOutsideProgressradialTest);

      expect(screen.getByText("Loading Progress")).toBeInTheDocument();
      expect(screen.getByText("60%")).toBeInTheDocument();
    });

    test("displays correct percentage in label", () => {
      render(LabelInsideProgressradialTest);
      const percentage = screen.getByText("75%");

      expect(percentage).toBeInTheDocument();
    });
  });

  describe("Customization", () => {
    test("applies custom green color to circles", () => {
      const { container } = render(ColoredProgressradialTest);
      const circles = container.querySelectorAll("circle");

      // Should have 2 circles: background and foreground
      expect(circles.length).toBe(2);
      
      // Check that the foreground circle has green stroke color class
      const foregroundCircle = circles[1];
      const classes = foregroundCircle.getAttribute("class") || "";
      expect(classes).toMatch(/stroke-green/);
    });

    test("applies custom size", () => {
      const { container } = render(ColoredProgressradialTest);
      const wrapper = container.querySelector(".h-32");

      expect(wrapper).toBeInTheDocument();
    });

    test("applies custom radius and thickness", () => {
      const { container } = render(CustomSizeProgressradialTest);
      const circles = container.querySelectorAll("circle");

      // Check if circles exist with custom attributes
      expect(circles[0]).toHaveAttribute("r", "38");
      expect(circles[0]).toHaveAttribute("stroke-width", "6");
    });
  });

  describe("Animation", () => {
    test("renders with animation enabled", () => {
      const { container } = render(AnimatedProgressradialTest);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
    });

    test("applies custom starting position", () => {
      const { container } = render(AnimatedProgressradialTest);
      const svg = container.querySelector("svg");

      // Check that transform style is applied (browsers compute rotate as matrix)
      expect(svg).toHaveAttribute("style");
      const style = svg?.getAttribute("style");
      expect(style).toContain("transform");
    });
  });

  describe("SVG Properties", () => {
    test("renders SVG with correct viewBox", () => {
      const { container } = render(BasicProgressradialTest);
      const svg = container.querySelector("svg");

      expect(svg).toHaveAttribute("viewBox", "0 0 100 100");
    });

    test("applies stroke-dasharray to foreground circle", () => {
      const { container } = render(BasicProgressradialTest);
      const circles = container.querySelectorAll("circle");
      const foregroundCircle = circles[1];

      expect(foregroundCircle).toHaveAttribute("stroke-dasharray");
    });

    test("applies stroke-dashoffset to foreground circle", () => {
      const { container } = render(BasicProgressradialTest);
      const circles = container.querySelectorAll("circle");
      const foregroundCircle = circles[1];

      expect(foregroundCircle).toHaveAttribute("stroke-dashoffset");
    });
  });

  describe("Progress Values", () => {
    test("handles low progress value (50%) with correct stroke-dashoffset", () => {
      const { container } = render(BasicProgressradialTest);
      const circles = container.querySelectorAll("circle");
      const foregroundCircle = circles[1];

      expect(foregroundCircle).toBeInTheDocument();
      
      // For medium progress, stroke-dashoffset should be close to half circumference
      const dashoffset = foregroundCircle.getAttribute("stroke-dashoffset");
      expect(dashoffset).toBeTruthy();
      
      // With 50% progress and default radius 42, we expect specific dashoffset
      const expectedOffset = calculateStrokeDashoffset(50, 42);
      expect(parseFloat(dashoffset!)).toBeCloseTo(expectedOffset, 1);
    });

    test("handles high progress value (75%) with correct stroke-dashoffset", () => {
      const { container } = render(LabelInsideProgressradialTest);
      const circles = container.querySelectorAll("circle");
      const foregroundCircle = circles[1];

      expect(foregroundCircle).toBeInTheDocument();
      
      // For high progress, stroke-dashoffset should be lower
      const dashoffset = foregroundCircle.getAttribute("stroke-dashoffset");
      expect(dashoffset).toBeTruthy();
      
      // With 75% progress and default radius 42, we expect specific dashoffset
      const expectedOffset = calculateStrokeDashoffset(75, 42);
      expect(parseFloat(dashoffset!)).toBeCloseTo(expectedOffset, 1);
    });

    test("handles custom progress (65%) with label", () => {
      render(CustomSizeProgressradialTest);

      expect(screen.getByText("65%")).toBeInTheDocument();
      
      const { container } = render(CustomSizeProgressradialTest);
      const circles = container.querySelectorAll("circle");
      const foregroundCircle = circles[1];
      
      // Verify stroke-dashoffset reflects 65% progress with custom radius 38
      const dashoffset = foregroundCircle.getAttribute("stroke-dashoffset");
      const expectedOffset = calculateStrokeDashoffset(65, 38);
      expect(parseFloat(dashoffset!)).toBeCloseTo(expectedOffset, 1);
    });
  });
});
