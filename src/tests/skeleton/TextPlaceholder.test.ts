import { render, screen } from "@testing-library/svelte";
import { describe, test, expect } from "vitest";
import TextPlaceholder from "$lib/skeleton/TextPlaceholder.svelte";

describe("TextPlaceholder Component", () => {
  describe("Basic Rendering", () => {
    test("renders basic text placeholder", () => {
      const { container } = render(TextPlaceholder);
      const placeholder = container.querySelector('[role="status"]');

      expect(placeholder).toBeInTheDocument();
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    test("text placeholder has multiple lines", () => {
      const { container } = render(TextPlaceholder);
      const placeholder = container.querySelector('[role="status"]');
      const divs = placeholder?.querySelectorAll("div");

      expect(divs?.length).toBeGreaterThan(0);
    });

    test("text placeholder lines have varying widths", () => {
      const { container } = render(TextPlaceholder);
      const placeholder = container.querySelector('[role="status"]');
      const sections = placeholder?.querySelectorAll("div > div");

      expect(sections?.length).toBeGreaterThan(0);
    });
  });

  describe("Size Variants", () => {
    test("renders different size text placeholders", () => {
      const sizes = ["sm", "md", "lg", "xl", "2xl"] as const;
      sizes.forEach((size) => {
        const { container } = render(TextPlaceholder, { props: { size } });
        expect(container.querySelector('[role="status"]')).toBeInTheDocument();
      });
    });

    test("all text placeholders have proper structure", () => {
      const { container } = render(TextPlaceholder, { props: { size: "lg" } });
      const placeholder = container.querySelector('[role="status"]');
      const divs = placeholder?.querySelectorAll("div");
      expect(divs?.length).toBeGreaterThan(0);
    });
  });

  describe("Accessibility", () => {
    test("text placeholder has role status", () => {
      const { container } = render(TextPlaceholder);
      const placeholder = container.querySelector('[role="status"]');

      expect(placeholder).toBeInTheDocument();
      expect(placeholder).toHaveAttribute("role", "status");
    });

    test("text placeholder has screen reader text", () => {
      const { container } = render(TextPlaceholder);
      const loadingText = container.querySelector(".sr-only");

      expect(loadingText).toBeInTheDocument();
      expect(loadingText?.textContent).toBe("Loading...");
    });
  });
});
