import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicFooterLinkGroupTest from "./basic-footer-link-group.test.svelte";
import FooterLinkGroupCustomClassTest from "./footer-link-group-custom-class.test.svelte";

afterEach(() => {
  cleanup();
});

describe("FooterLinkGroup Component", () => {
  describe("Basic Rendering", () => {
    test("footer link group renders correctly", () => {
      render(BasicFooterLinkGroupTest);
      const list = screen.getByTestId("footer-link-group");

      expect(list).toBeInTheDocument();
      expect(list.tagName.toLowerCase()).toBe("ul");
    });

    test("footer link group contains multiple links", () => {
      render(BasicFooterLinkGroupTest);
      const links = screen.getAllByRole("link");

      expect(links).toHaveLength(3);
      expect(links[0]).toHaveTextContent("About");
      expect(links[1]).toHaveTextContent("Privacy Policy");
      expect(links[2]).toHaveTextContent("Contact");
    });

    test("footer link group links have correct hrefs", () => {
      render(BasicFooterLinkGroupTest);
      const links = screen.getAllByRole("link");

      expect(links[0]).toHaveAttribute("href", "https://flowbite.com/about");
      expect(links[1]).toHaveAttribute("href", "https://flowbite.com/privacy");
      expect(links[2]).toHaveAttribute("href", "https://flowbite.com/contact");
    });
  });

  describe("Styling", () => {
    test("custom class is applied to list", () => {
      render(FooterLinkGroupCustomClassTest);
      const list = screen.getByTestId("footer-link-group-custom-class");

      expect(list).toHaveClass("custom-group-class");
    });

    test("footer link group with custom class still renders links correctly", () => {
      render(FooterLinkGroupCustomClassTest);
      const links = screen.getAllByRole("link");

      expect(links).toHaveLength(2);
      expect(links[0]).toHaveTextContent("About");
      expect(links[1]).toHaveTextContent("Privacy Policy");
    });
  });
});
