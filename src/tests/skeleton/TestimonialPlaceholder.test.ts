import { render, screen } from "@testing-library/svelte";
import { describe, test, expect } from "vitest";
import TestimonialPlaceholder from "$lib/skeleton/TestimonialPlaceholder.svelte";

describe("TestimonialPlaceholder Component", () => {
  describe("Basic Rendering", () => {
    test("renders basic testimonial placeholder", () => {
      const { container } = render(TestimonialPlaceholder);
      const placeholder = container.querySelector('[role="status"]');

      expect(placeholder).toBeInTheDocument();
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    test("testimonial placeholder has svg icon", () => {
      const { container } = render(TestimonialPlaceholder);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    test("testimonial placeholder has multiple lines", () => {
      const { container } = render(TestimonialPlaceholder);
      const placeholder = container.querySelector('[role="status"]');
      const divs = placeholder?.querySelectorAll("div");

      expect(divs?.length).toBeGreaterThan(0);
    });
  });

  describe("Accessibility", () => {
    test("testimonial placeholder has role status", () => {
      const { container } = render(TestimonialPlaceholder);
      const placeholder = container.querySelector('[role="status"]');

      expect(placeholder).toBeInTheDocument();
      expect(placeholder).toHaveAttribute("role", "status");
    });

    test("testimonial placeholder svg has aria-hidden", () => {
      const { container } = render(TestimonialPlaceholder);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    test("testimonial placeholder has screen reader text", () => {
      const { container } = render(TestimonialPlaceholder);
      const loadingText = container.querySelector(".sr-only");

      expect(loadingText).toBeInTheDocument();
      expect(loadingText?.textContent).toBe("Loading...");
    });
  });
});
