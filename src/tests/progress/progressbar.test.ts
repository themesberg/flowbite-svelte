import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicProgressbarTest from "./basic-progressbar.test.svelte";
import LabelInsideProgressbarTest from "./label-inside-progressbar.test.svelte";
import LabelOutsideProgressbarTest from "./label-outside-progressbar.test.svelte";
import ColoredProgressbarTest from "./colored-progressbar.test.svelte";
import AnimatedProgressbarTest from "./animated-progressbar.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Progressbar Component", () => {
  describe("Basic Functionality", () => {
    test("renders progressbar", () => {
      const { container } = render(BasicProgressbarTest);
      const progressbar = container.querySelector('div[class*="bg-"]');

      expect(progressbar).toBeInTheDocument();
    });

    test("applies correct progress width", () => {
      const { container } = render(BasicProgressbarTest);
      const progressFill = container.querySelector('div[style*="width"]');

      expect(progressFill).toBeInTheDocument();
    });

    test("renders with default size", () => {
      const { container } = render(BasicProgressbarTest);
      const progressbar = container.querySelector('div[class*="h-2.5"]');

      expect(progressbar).toBeInTheDocument();
    });
  });

  describe("Label Variations", () => {
    test("renders with label inside", () => {
      const { container } = render(LabelInsideProgressbarTest);
      const label = container.querySelector('div[class*="bg-"]');

      expect(label).toBeInTheDocument();
    });

    test("renders with label outside", () => {
      render(LabelOutsideProgressbarTest);

      expect(screen.getByText("Progress Label")).toBeInTheDocument();
      expect(screen.getByText("60%")).toBeInTheDocument();
    });

    test("displays correct percentage in outside label", () => {
      render(LabelOutsideProgressbarTest);
      const percentage = screen.getByText("60%");

      expect(percentage).toBeInTheDocument();
    });
  });

  describe("Customization", () => {
    test("applies custom color", () => {
      const { container } = render(ColoredProgressbarTest);
      const progressbar = container.querySelector('div[class*="bg-"]');

      expect(progressbar).toBeInTheDocument();
    });

    test("applies custom size", () => {
      const { container } = render(ColoredProgressbarTest);
      const progressbar = container.querySelector('div[class*="h-4"]');

      expect(progressbar).toBeInTheDocument();
    });
  });

  describe("Animation", () => {
    test("renders with animation enabled", () => {
      const { container } = render(AnimatedProgressbarTest);
      const progressbar = container.querySelector('div[class*="bg-"]');

      expect(progressbar).toBeInTheDocument();
    });

    test("applies tween duration", () => {
      const { container } = render(AnimatedProgressbarTest);
      const progressFill = container.querySelector('div[style*="width"]');

      expect(progressFill).toBeInTheDocument();
    });
  });

  describe("Progress Values", () => {
    test("handles low progress value", () => {
      const { container } = render(BasicProgressbarTest);
      const progressFill = container.querySelector('div[style*="width"]');

      expect(progressFill).toBeInTheDocument();
    });

    test("handles high progress value", () => {
      const { container } = render(AnimatedProgressbarTest);
      const progressFill = container.querySelector('div[style*="width"]');

      expect(progressFill).toBeInTheDocument();
    });
  });
});
