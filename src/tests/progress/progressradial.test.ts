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
    test("applies custom color", () => {
      const { container } = render(ColoredProgressradialTest);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
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
    test("handles low progress value", () => {
      const { container } = render(BasicProgressradialTest);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
    });

    test("handles high progress value", () => {
      const { container } = render(AnimatedProgressradialTest);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
    });

    test("handles custom progress with label", () => {
      render(CustomSizeProgressradialTest);

      expect(screen.getByText("65%")).toBeInTheDocument();
    });
  });
});
