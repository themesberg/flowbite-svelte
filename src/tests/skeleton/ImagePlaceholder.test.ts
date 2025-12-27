import { render, screen } from "@testing-library/svelte";
import { describe, test, expect } from "vitest";
import ImagePlaceholder from "$lib/skeleton/ImagePlaceholder.svelte";

describe("ImagePlaceholder Component", () => {
  describe("Basic Rendering", () => {
    test("renders basic image placeholder", () => {
      const { container } = render(ImagePlaceholder);
      const placeholder = container.querySelector('[role="status"]');

      expect(placeholder).toBeInTheDocument();
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    test("image placeholder has svg icon", () => {
      const { container } = render(ImagePlaceholder);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    test("image placeholder has content section by default", () => {
      const { container } = render(ImagePlaceholder);
      const placeholder = container.querySelector('[role="status"]');
      const divs = placeholder?.querySelectorAll("div");

      // Should have image div and content div with lines
      expect(divs?.length).toBeGreaterThan(1);
    });
  });

  describe("Size Variants", () => {
    test("renders different size image placeholders", () => {
      const sizes = ["sm", "md", "lg"] as const;
      sizes.forEach((size) => {
        const { container } = render(ImagePlaceholder, { props: { size } });
        expect(container.querySelector('[role="status"]')).toBeInTheDocument();
      });
    });
  });

  describe("Rounded Variant", () => {
    test("renders rounded image placeholder", () => {
      const { container } = render(ImagePlaceholder, { props: { class: "rounded-lg" } });
      const placeholder = container.querySelector('[role="status"]');
      expect(placeholder).toBeInTheDocument();
    });
  });

  describe("Image Only Mode", () => {
    test("renders image only placeholder", () => {
      const { container } = render(ImagePlaceholder, { props: { imgOnly: true } });
      const placeholder = container.querySelector('[role="status"]');
      expect(placeholder).toBeInTheDocument();
    });

    test("image only mode has svg", () => {
      const { container } = render(ImagePlaceholder, { props: { imgOnly: true } });
      const svg = container.querySelector("svg");
      expect(svg).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    test("image placeholder has role status", () => {
      const { container } = render(ImagePlaceholder);
      const placeholder = container.querySelector('[role="status"]');

      expect(placeholder).toBeInTheDocument();
      expect(placeholder).toHaveAttribute("role", "status");
    });

    test("image placeholder svg has aria-hidden", () => {
      const { container } = render(ImagePlaceholder);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    test("image placeholder has screen reader text", () => {
      const { container } = render(ImagePlaceholder);
      const loadingText = container.querySelector(".sr-only");

      expect(loadingText).toBeInTheDocument();
      expect(loadingText?.textContent).toBe("Loading...");
    });
  });
});
