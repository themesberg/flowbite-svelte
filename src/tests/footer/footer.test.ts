import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicFooterTest from "./basic-footer.test.svelte";
import SocialmediaFooterTest from "./socialmedia-footer.test.svelte";
import SitemapFooterTest from "./sitemap-footer.test.svelte";
import CustomClassFooterTest from "./custom-class-footer.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Footer Component", () => {
  describe("Basic Rendering", () => {
    test("basic footer renders correctly", () => {
      render(BasicFooterTest);
      const footer = screen.getByRole("contentinfo");

      expect(footer).toBeInTheDocument();
      expect(footer).toHaveTextContent("Footer Content");
    });

    test("footer with default type renders correctly", () => {
      render(BasicFooterTest);
      const footer = screen.getByRole("contentinfo");

      expect(footer).toBeInTheDocument();
      expect(footer.tagName.toLowerCase()).toBe("footer");
    });
  });

  describe("Footer Types", () => {
    test("socialmedia footer renders correctly", () => {
      render(SocialmediaFooterTest);
      const footer = screen.getByTestId("socialmedia-footer");

      expect(footer).toBeInTheDocument();
      expect(footer).toHaveTextContent("Social Media Footer");
    });

    test("sitemap footer renders correctly", () => {
      render(SitemapFooterTest);
      const footer = screen.getByTestId("sitemap-footer");

      expect(footer).toBeInTheDocument();
      expect(footer).toHaveTextContent("Sitemap Footer");
    });
  });

  describe("Styling", () => {
    test("custom class is applied to footer", () => {
      render(CustomClassFooterTest);
      const footer = screen.getByTestId("custom-footer");

      expect(footer).toHaveClass("custom-footer-class");
    });
  });
});
