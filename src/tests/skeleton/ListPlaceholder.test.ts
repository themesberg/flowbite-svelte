import { render, screen } from "@testing-library/svelte";
import { describe, test, expect } from "vitest";
import ListPlaceholder from "$lib/skeleton/ListPlaceholder.svelte";

describe("ListPlaceholder Component", () => {
  describe("Basic Rendering", () => {
    test("renders basic list placeholder", () => {
      const { container } = render(ListPlaceholder);
      const placeholder = container.querySelector('[role="status"]');

      expect(placeholder).toBeInTheDocument();
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    test("list placeholder renders default items", () => {
      // Default behavior typically renders a few items
      const { container } = render(ListPlaceholder);
      const placeholder = container.querySelector('[role="status"]');
      const items = placeholder?.querySelectorAll("div > div");
      expect(items?.length).toBeGreaterThan(0);
    });
  });

  describe("Accessibility", () => {
    test("list placeholder has role status", () => {
      const { container } = render(ListPlaceholder);
      const placeholder = container.querySelector('[role="status"]');

      expect(placeholder).toBeInTheDocument();
      expect(placeholder).toHaveAttribute("role", "status");
    });

    test("list placeholder has screen reader text", () => {
      const { container } = render(ListPlaceholder);
      const loadingText = container.querySelector(".sr-only");

      expect(loadingText).toBeInTheDocument();
      expect(loadingText?.textContent).toBe("Loading...");
    });
  });
});
