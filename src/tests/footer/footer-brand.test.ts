import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicFooterBrandTest from "./basic-footer-brand.test.svelte";
import FooterBrandNoLinkTest from "./footer-brand-no-link.test.svelte";
import FooterBrandNoNameTest from "./footer-brand-no-name.test.svelte";
import FooterBrandNoSrcTest from "./footer-brand-no-src.test.svelte";
import { TEST_IMAGE_SVG } from "../fixtures/test-images"

afterEach(() => {
  cleanup();
});

describe("FooterBrand Component", () => {
  describe("Basic Rendering", () => {
    test("footer brand with link renders correctly", () => {
      render(BasicFooterBrandTest);
      const link = screen.getByTestId("footer-brand");

      expect(link).toBeInTheDocument();
      expect(link.tagName.toLowerCase()).toBe("a");
      expect(link).toHaveAttribute("href", "https://flowbite.com");
    });

    test("footer brand renders image correctly", () => {
      render(BasicFooterBrandTest);
      const image = screen.getByRole("img");

      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", TEST_IMAGE_SVG);
      expect(image).toHaveAttribute("alt", "Flowbite Logo");
    });

    test("footer brand renders name correctly", () => {
      render(BasicFooterBrandTest);
      const name = screen.getByText("Flowbite");

      expect(name).toBeInTheDocument();
      expect(name.tagName.toLowerCase()).toBe("span");
    });
  });

  describe("Without Link", () => {
    test("footer brand without href renders image only", () => {
      render(FooterBrandNoLinkTest);
      const image = screen.getByRole("img");

      expect(image).toBeInTheDocument();
      expect(image.tagName.toLowerCase()).toBe("img");
      expect(image).toHaveAttribute("src", TEST_IMAGE_SVG);
      expect(image).toHaveAttribute("alt", "Flowbite Logo");
    });

    test("footer brand without href should not render as link", () => {
      render(FooterBrandNoLinkTest);
      const links = screen.queryAllByRole("link");

      expect(links).toHaveLength(0);
    });
  });

  describe("Component Variations", () => {
    test("footer brand without name renders correctly", () => {
      render(FooterBrandNoNameTest);
      const link = screen.getByTestId("footer-brand-no-name");
      const image = screen.getByRole("img");

      expect(link).toBeInTheDocument();
      expect(image).toBeInTheDocument();
      expect(screen.queryByText("Flowbite")).not.toBeInTheDocument();
    });

    test("footer brand without src renders name only", () => {
      render(FooterBrandNoSrcTest);
      const link = screen.getByTestId("footer-brand-no-src");
      const name = screen.getByText("Flowbite");

      expect(link).toBeInTheDocument();
      expect(name).toBeInTheDocument();
      expect(screen.queryByRole("img")).not.toBeInTheDocument();
    });
  });
});
