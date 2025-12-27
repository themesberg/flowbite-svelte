import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicProgressbarTest from "./basic-progressbar.test.svelte";
import LabelInsideProgressbarTest from "./label-inside-progressbar.test.svelte";
import LabelOutsideProgressbarTest from "./label-outside-progressbar.test.svelte";
import ColoredProgressbarTest from "./colored-progressbar.test.svelte";
import AnimatedProgressbarTest from "./animated-progressbar.test.svelte";
import LowProgressbarTest from "./low-progressbar.test.svelte";
import HighProgressbarTest from "./high-progressbar.test.svelte";

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

    test("applies correct progress width (50%)", () => {
      const { container } = render(BasicProgressbarTest);
      const progressFill = container.querySelector('div[style*="width"]');

      expect(progressFill).toBeInTheDocument();

      // Verify actual width value
      const style = progressFill?.getAttribute("style");
      expect(style).toMatch(/width:\s*50%/);
    });

    test("renders with default size", () => {
      const { container } = render(BasicProgressbarTest);
      const progressbar = container.querySelector('div[class*="h-2.5"]');

      expect(progressbar).toBeInTheDocument();
    });
  });

  describe("Label Variations", () => {
    test("renders with label text inside progress bar", () => {
      const { container } = render(LabelInsideProgressbarTest);
      const label = container.querySelector('div[class*="bg-"]');

      expect(label).toBeInTheDocument();
      // Verify label content is present
      expect(container.textContent).toBeTruthy();
    });

    test("renders with label outside", () => {
      render(LabelOutsideProgressbarTest);

      expect(screen.getByText("Progress Label")).toBeInTheDocument();
      expect(screen.getByText("60%")).toBeInTheDocument();
    });
  });

  describe("Customization", () => {
    test("applies custom red color class", () => {
      const { container } = render(ColoredProgressbarTest);
      const progressbar = container.querySelector('div[class*="bg-red"]');

      expect(progressbar).toBeInTheDocument();
    });

    test("applies custom height size (h-4)", () => {
      const { container } = render(ColoredProgressbarTest);
      const progressbar = container.querySelector('div[class*="h-4"]');

      expect(progressbar).toBeInTheDocument();
    });

    test("verifies colored progressbar has correct width (80%)", () => {
      const { container } = render(ColoredProgressbarTest);
      const progressFill = container.querySelector('div[style*="width"]');

      const style = progressFill?.getAttribute("style");
      expect(style).toMatch(/width:\s*80%/);
    });
  });

  describe("Animation", () => {
    test("renders with animation enabled", () => {
      const { container } = render(AnimatedProgressbarTest);
      const progressbar = container.querySelector('div[class*="bg-"]');

      expect(progressbar).toBeInTheDocument();
    });

    test("renders animated progressbar element with width style", () => {
      const { container } = render(AnimatedProgressbarTest);
      const progressFill = container.querySelector('div[style*="width"]');

      expect(progressFill).toBeInTheDocument();
      // Note: Tween duration is a JavaScript animation property,
      // not directly verifiable in the DOM without animation testing
    });
  });

  describe("Progress Values", () => {
    test("handles low progress value (10%)", () => {
      const { container } = render(LowProgressbarTest);
      const progressFill = container.querySelector('div[style*="width"]');

      expect(progressFill).toBeInTheDocument();
      const style = progressFill?.getAttribute("style");
      expect(style).toMatch(/width:\s*10%/);
    });

    test("handles medium progress value (50%)", () => {
      const { container } = render(BasicProgressbarTest);
      const progressFill = container.querySelector('div[style*="width"]');

      expect(progressFill).toBeInTheDocument();
      const style = progressFill?.getAttribute("style");
      expect(style).toMatch(/width:\s*50%/);
    });

    test("handles high progress value (95%)", () => {
      const { container } = render(HighProgressbarTest);
      const progressFill = container.querySelector('div[style*="width"]');

      expect(progressFill).toBeInTheDocument();
      const style = progressFill?.getAttribute("style");
      expect(style).toMatch(/width:\s*95%/);
    });
  });
});
