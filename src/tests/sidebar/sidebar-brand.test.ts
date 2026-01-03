import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicSidebarBrandTest from "./basic-sidebar-brand.test.svelte";
import CustomSidebarBrandTest from "./custom-sidebar-brand.test.svelte";
import { TEST_IMAGE_SVG } from "../fixtures/test-images"

afterEach(() => {
  cleanup();
});

describe("SidebarBrand Component", () => {
  describe("Basic Functionality", () => {
    test("renders brand with site object", () => {
      render(BasicSidebarBrandTest);
      const link = screen.getByRole("link");

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "/");
    });

    test("renders brand image", () => {
      render(BasicSidebarBrandTest);
      const image = screen.getByRole("img");

      expect(image).toHaveAttribute("src", TEST_IMAGE_SVG);
      expect(image).toHaveAttribute("alt", "Flowbite");
    });

    test("renders brand name", () => {
      render(BasicSidebarBrandTest);

      expect(screen.getByText("Flowbite")).toBeInTheDocument();
    });
  });

  describe("Custom Content", () => {
    test("renders with custom children", () => {
      render(CustomSidebarBrandTest);

      expect(screen.getByText("Custom Brand Content")).toBeInTheDocument();
    });

    test("link is clickable with custom content", () => {
      render(CustomSidebarBrandTest);
      const link = screen.getByRole("link");

      expect(link).toBeInTheDocument();
    });
  });

  describe("Structure", () => {
    test("applies correct CSS classes", () => {
      const { container } = render(BasicSidebarBrandTest);
      const link = container.querySelector("a");

      expect(link).toHaveClass("flex", "items-center");
    });

    test("image has proper styling classes", () => {
      const { container } = render(BasicSidebarBrandTest);
      const image = container.querySelector("img");

      expect(image).toHaveClass("h-6", "me-3");
    });

    test("span has proper styling classes", () => {
      const { container } = render(BasicSidebarBrandTest);
      const span = container.querySelector("span");

      expect(span).toHaveClass("text-xl", "font-semibold");
    });
  });
});
