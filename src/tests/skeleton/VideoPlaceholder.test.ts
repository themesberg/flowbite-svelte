import { render, screen } from "@testing-library/svelte";
import { describe, test, expect } from "vitest";
import VideoPlaceholder from "$lib/skeleton/VideoPlaceholder.svelte";

describe("VideoPlaceholder Component", () => {
  describe("Basic Rendering", () => {
    test("renders basic video placeholder", () => {
      const { container } = render(VideoPlaceholder);
      const placeholder = container.querySelector('[role="status"]');

      expect(placeholder).toBeInTheDocument();
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    test("video placeholder has svg icon", () => {
      const { container } = render(VideoPlaceholder);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    test("video placeholder svg has play icon", () => {
      const { container } = render(VideoPlaceholder);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
      // Video icon should have a path element
      const path = svg?.querySelector("path");
      expect(path).toBeInTheDocument();
    });
  });

  describe("Size Variants", () => {
    test("renders different size video placeholders", () => {
      const sizes = ["sm", "md", "lg", "xl", "2xl"] as const;
      sizes.forEach((size) => {
        const { container } = render(VideoPlaceholder, { props: { size } });
        expect(container.querySelector('[role="status"]')).toBeInTheDocument();
      });
    });
  });

  describe("Accessibility", () => {
    test("video placeholder has role status", () => {
      const { container } = render(VideoPlaceholder);
      const placeholder = container.querySelector('[role="status"]');

      expect(placeholder).toBeInTheDocument();
      expect(placeholder).toHaveAttribute("role", "status");
    });

    test("video placeholder svg has aria-hidden", () => {
      const { container } = render(VideoPlaceholder);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    test("video placeholder has screen reader text", () => {
      const { container } = render(VideoPlaceholder);
      const loadingText = container.querySelector(".sr-only");

      expect(loadingText).toBeInTheDocument();
      expect(loadingText?.textContent).toBe("Loading...");
    });
  });
});
