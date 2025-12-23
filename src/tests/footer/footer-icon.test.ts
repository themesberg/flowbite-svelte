import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicFooterIconTest from "./basic-footer-icon.test.svelte";
import FooterIconNoLinkTest from "./footer-icon-no-link.test.svelte";

afterEach(() => {
  cleanup();
});

describe("FooterIcon Component", () => {
  describe("Basic Rendering", () => {
    test("footer icon with link renders correctly", () => {
      render(BasicFooterIconTest);
      const link = screen.getByTestId("footer-icon");

      expect(link).toBeInTheDocument();
      expect(link.tagName.toLowerCase()).toBe("a");
      expect(link).toHaveAttribute("href", "https://github.com/themesberg/flowbite-svelte");
    });

    test("footer icon has correct aria-label", () => {
      render(BasicFooterIconTest);
      const link = screen.getByTestId("footer-icon");

      expect(link).toHaveAttribute("aria-label", "GitHub");
    });

    test("footer icon renders svg content", () => {
      render(BasicFooterIconTest);
      const svg = screen.getByTestId("footer-icon").querySelector("svg");

      expect(svg).toBeInTheDocument();
      expect(svg).toHaveClass("w-5", "h-5");
    });
  });

  describe("Without Link", () => {
    test("footer icon without href renders svg only", () => {
      const { container } = render(FooterIconNoLinkTest);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
      expect(svg).toHaveClass("w-5", "h-5");
    });

    test("footer icon without href should not be wrapped in a link", () => {
      render(FooterIconNoLinkTest);
      const links = screen.queryAllByRole("link");

      expect(links).toHaveLength(0);
    });
  });
});
