import { render, screen } from "@testing-library/svelte";
import { describe, test, expect } from "vitest";
import WidgetPlaceholder from "$lib/skeleton/WidgetPlaceholder.svelte";

describe("WidgetPlaceholder Component", () => {
  describe("Basic Rendering", () => {
    test("renders basic widget placeholder", () => {
      const { container } = render(WidgetPlaceholder);
      const placeholder = container.querySelector('[role="status"]');

      expect(placeholder).toBeInTheDocument();
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    test("widget placeholder has chart bars", () => {
      const { container } = render(WidgetPlaceholder);
      const placeholder = container.querySelector('[role="status"]');
      const bars = placeholder?.querySelectorAll("div > div > div");

      // Should have multiple vertical bars for chart
      expect(bars?.length).toBeGreaterThan(0);
    });

    test("widget placeholder has header lines", () => {
      const { container } = render(WidgetPlaceholder);
      const placeholder = container.querySelector('[role="status"]');
      const divs = placeholder?.querySelectorAll("div");

      expect(divs?.length).toBeGreaterThan(0);
    });
  });

  describe("Accessibility", () => {
    test("widget placeholder has role status", () => {
      const { container } = render(WidgetPlaceholder);
      const placeholder = container.querySelector('[role="status"]');

      expect(placeholder).toBeInTheDocument();
      expect(placeholder).toHaveAttribute("role", "status");
    });

    test("widget placeholder has screen reader text", () => {
      const { container } = render(WidgetPlaceholder);
      const loadingText = container.querySelector(".sr-only");

      expect(loadingText).toBeInTheDocument();
      expect(loadingText?.textContent).toBe("Loading...");
    });
  });
});
