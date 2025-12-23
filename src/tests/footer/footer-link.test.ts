import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicFooterLinkTest from "./basic-footer-link.test.svelte";
import FooterLinkCustomClassTest from "./footer-link-custom-class.test.svelte";

afterEach(() => {
  cleanup();
});

describe("FooterLink Component", () => {
  describe("Basic Rendering", () => {
    test("footer link renders correctly", () => {
      const { container } = render(BasicFooterLinkTest);
      const listItem = container.querySelector("li");

      expect(listItem).toBeInTheDocument();
      expect(listItem?.tagName.toLowerCase()).toBe("li");
    });

    test("footer link contains anchor element", () => {
      render(BasicFooterLinkTest);
      const link = screen.getByRole("link");

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "https://flowbite.com/about");
      expect(link).toHaveTextContent("About");
    });
  });

  describe("Styling", () => {
    test("custom class is applied to list item", () => {
      const { container } = render(FooterLinkCustomClassTest);
      const listItem = container.querySelector("li");

      expect(listItem).toHaveClass("custom-link-class");
    });

    test("footer link with custom class still renders link correctly", () => {
      render(FooterLinkCustomClassTest);
      const link = screen.getByRole("link");

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "https://flowbite.com/about");
      expect(link).toHaveTextContent("About");
    });
  });
});
