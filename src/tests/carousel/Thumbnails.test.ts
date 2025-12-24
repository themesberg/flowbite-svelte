import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import { Thumbnails } from "$lib";
import { testImages } from "./testData.js";

afterEach(() => {
  cleanup();
});

describe("Thumbnails Component", () => {
  describe("Basic Rendering", () => {
    test("thumbnails render correctly", () => {
      render(Thumbnails, { images: testImages, index: 0 });

      const buttons = screen.getAllByRole("button");
      expect(buttons.length).toBe(testImages.length);
    });

    test("thumbnails show all images", () => {
      render(Thumbnails, { images: testImages, index: 0 });

      const images = screen.getAllByRole("img");
      expect(images.length).toBe(testImages.length);
    });

    test("thumbnails have correct alt text", () => {
      render(Thumbnails, { images: testImages, index: 0 });

      const images = screen.getAllByRole("img");
      expect(images[0]).toHaveAttribute("alt", "Test Image 1");
      expect(images[1]).toHaveAttribute("alt", "Test Image 2");
      expect(images[2]).toHaveAttribute("alt", "Test Image 3");
    });

    test("thumbnails have correct structure", () => {
      const { container } = render(Thumbnails, { images: testImages, index: 0 });

      const wrapper = container.firstChild as HTMLElement | null;
      expect(wrapper).not.toBeNull();
      if (wrapper) {
        expect(wrapper).toHaveClass("flex", "flex-row", "justify-center");
      }
    });
  });

  describe("Selection State", () => {
    test("first thumbnail is selected by default", () => {
      render(Thumbnails, { images: testImages, index: 0 });

      const buttons = screen.getAllByRole("button");
      expect(buttons[0]).toHaveAttribute("aria-current", "true");
    });

    test("correct thumbnail is selected based on index", () => {
      render(Thumbnails, { images: testImages, index: 1 });

      const buttons = screen.getAllByRole("button");
      expect(buttons[1]).toHaveAttribute("aria-current", "true");
    });

    test("thumbnails have correct opacity for selected state", () => {
      const { container } = render(Thumbnails, { images: testImages, index: 0 });

      const images = container.querySelectorAll("img");
      // Selected thumbnail should have opacity-100
      expect(images[0]).toHaveClass("opacity-100");
      // Unselected thumbnails should have opacity-60
      expect(images[1]).toHaveClass("opacity-60");
    });
  });

  describe("Interactions", () => {
    test("clicking thumbnail button works", async () => {
      const user = userEvent.setup();
      render(Thumbnails, { images: testImages, index: 0 });

      const buttons = screen.getAllByRole("button");

      // Click should not throw error
      await user.click(buttons[1]);
      expect(buttons[1]).toBeInTheDocument();
    });

    test("thumbnail buttons have correct aria-label", () => {
      render(Thumbnails, { images: testImages, index: 0 });

      const buttons = screen.getAllByRole("button");
      buttons.forEach((button) => {
        expect(button).toHaveAttribute("aria-label", "Click to view image");
      });
    });
  });

  describe("Customization", () => {
    test("custom class is applied", () => {
      const { container } = render(Thumbnails, {
        images: testImages,
        index: 0,
        class: "custom-thumbnails-class"
      });

      const wrapper = container.firstChild as HTMLElement | null;
      expect(wrapper).not.toBeNull();
      if (wrapper) {
        // Custom class is merged with default classes
        expect(wrapper.className).toContain("custom-thumbnails-class");
        expect(wrapper).toHaveClass("flex", "flex-row");
      }
    });

    test("custom ariaLabel is applied", () => {
      render(Thumbnails, {
        images: testImages,
        index: 0,
        ariaLabel: "Custom aria label"
      });

      const buttons = screen.getAllByRole("button");
      buttons.forEach((button) => {
        expect(button).toHaveAttribute("aria-label", "Custom aria label");
      });
    });
  });

  describe("Edge Cases", () => {
    test("renders with empty images array", () => {
      render(Thumbnails, { images: [], index: 0 });

      const buttons = screen.queryAllByRole("button");
      expect(buttons.length).toBe(0);
    });

    test("renders with single image", () => {
      render(Thumbnails, { images: [testImages[0]], index: 0 });

      const buttons = screen.getAllByRole("button");
      expect(buttons.length).toBe(1);
    });

    test("handles out of bounds index gracefully", () => {
      render(Thumbnails, { images: testImages, index: 999 });

      // Should still render without crashing
      const buttons = screen.getAllByRole("button");
      expect(buttons.length).toBe(testImages.length);
    });
  });
});
