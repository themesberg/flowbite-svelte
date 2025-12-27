import { render, screen } from "@testing-library/svelte";
import { describe, test, expect } from "vitest";
import CardPlaceholder from "$lib/skeleton/CardPlaceholder.svelte";

describe("CardPlaceholder Component", () => {
  describe("Basic Rendering", () => {
    test("renders basic card placeholder", () => {
      const { container } = render(CardPlaceholder);
      const cardPlaceholder = container.querySelector('[role="status"]');

      expect(cardPlaceholder).toBeInTheDocument();
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    test("card placeholder has svg icon", () => {
      const { container } = render(CardPlaceholder);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    test("card placeholder has multiple lines", () => {
      const { container } = render(CardPlaceholder);
      const placeholder = container.querySelector('[role="status"]');
      const lines = placeholder?.querySelectorAll("div");

      expect(lines?.length).toBeGreaterThan(0);
    });
  });

  describe("Size Variants", () => {
    test("renders properly with different sizes", () => {
      // Testing that it renders without error for standard sizes if props allow
      const { container } = render(CardPlaceholder, { props: { size: "lg" } });
      expect(container.querySelector('[role="status"]')).toBeInTheDocument();
    });

    test("renders with specific classes", () => {
      const { container } = render(CardPlaceholder, { props: { class: "test-class" } });
      expect(container.querySelector(".test-class")).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    test("card placeholder has role status", () => {
      const { container } = render(CardPlaceholder);
      const placeholder = container.querySelector('[role="status"]');

      expect(placeholder).toBeInTheDocument();
      expect(placeholder).toHaveAttribute("role", "status");
    });

    test("card placeholder svg has aria-hidden", () => {
      const { container } = render(CardPlaceholder);
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    test("card placeholder has screen reader text", () => {
      const { container } = render(CardPlaceholder);
      const loadingText = container.querySelector(".sr-only");

      expect(loadingText).toBeInTheDocument();
      expect(loadingText?.textContent).toBe("Loading...");
    });
  });
});
