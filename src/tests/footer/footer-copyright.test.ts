import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicFooterCopyrightTest from "./basic-footer-copyright.test.svelte";
import FooterCopyrightNoLinkTest from "./footer-copyright-no-link.test.svelte";
import FooterCopyrightCustomMessageTest from "./footer-copyright-custom-message.test.svelte";

afterEach(() => {
  cleanup();
});

describe("FooterCopyright Component", () => {
  describe("Basic Rendering", () => {
    test("footer copyright renders correctly", () => {
      render(BasicFooterCopyrightTest);
      const copyright = screen.getByText(/© 2024/);

      expect(copyright).toBeInTheDocument();
      expect(copyright.tagName.toLowerCase()).toBe("span");
    });

    test("footer copyright displays year correctly", () => {
      render(BasicFooterCopyrightTest);
      const copyright = screen.getByText(/© 2024/);

      expect(copyright).toHaveTextContent("© 2024");
    });

    test("footer copyright displays by text with link", () => {
      render(BasicFooterCopyrightTest);
      const link = screen.getByRole("link");

      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent("Flowbite™");
      expect(link).toHaveAttribute("href", "https://flowbite.com");
    });

    test("footer copyright displays default message", () => {
      render(BasicFooterCopyrightTest);
      const copyright = screen.getByText(/All Rights Reserved/);

      expect(copyright).toHaveTextContent("All Rights Reserved.");
    });
  });

  describe("Without Link", () => {
    test("footer copyright without href renders by text as span", () => {
      render(FooterCopyrightNoLinkTest);
      const byText = screen.getByText("Flowbite™");

      expect(byText).toBeInTheDocument();
      expect(byText.tagName.toLowerCase()).toBe("span");
      expect(screen.queryByRole("link")).not.toBeInTheDocument();
    });

    test("footer copyright without href displays current year", () => {
      render(FooterCopyrightNoLinkTest);
      const currentYear = new Date().getFullYear();
      const copyright = screen.getByText(new RegExp(`© ${currentYear}`));

      expect(copyright).toHaveTextContent(`© ${currentYear}`);
    });
  });

  describe("Custom Message", () => {
    test("footer copyright with custom message renders correctly", () => {
      render(FooterCopyrightCustomMessageTest);
      const copyright = screen.getByText(/Custom copyright message/);

      expect(copyright).toHaveTextContent("Custom copyright message.");
      expect(copyright).not.toHaveTextContent("All Rights Reserved.");
    });
  });
});
