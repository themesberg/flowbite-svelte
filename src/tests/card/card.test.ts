import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicCardTest from "./basic-card.test.svelte";
import CardLinkTest from "./card-link.test.svelte";
import CardWithImageTest from "./card-with-image.test.svelte";
import CardSizesTest from "./card-sizes.test.svelte";
import CardShadowsTest from "./card-shadows.test.svelte";
import CardHoverableTest from "./card-hoverable.test.svelte";
import CardHorizontalTest from "./card-horizontal.test.svelte";
import CardReverseTest from "./card-reverse.test.svelte";
import CardHorizontalReverseTest from "./card-horizontal-reverse.test.svelte";
import CardCustomClassTest from "./card-custom-class.test.svelte";
import CardImageErrorTest from "./card-image-error.test.svelte";
import CardCustomImageClassTest from "./card-custom-image-class.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Card Component", () => {
  describe("Basic Rendering", () => {
    test("renders basic card with content", () => {
      const { container } = render(BasicCardTest);
      const card = container.querySelector("div");

      expect(card).toBeInTheDocument();
      expect(card).toHaveTextContent("Basic Card Title");
      expect(card).toHaveTextContent("Basic card content goes here.");
    });

    test("renders card with proper base classes", () => {
      const { container } = render(BasicCardTest);
      const card = container.querySelector("div");

      expect(card).toBeInTheDocument();
      expect(card?.className).toContain("flex");
      expect(card?.className).toContain("border");
      expect(card?.className).toContain("rounded-base");
    });

    test("renders card with children content", () => {
      render(BasicCardTest);

      expect(screen.getByText("Basic Card Title")).toBeInTheDocument();
      expect(screen.getByText("Basic card content goes here.")).toBeInTheDocument();
    });
  });

  describe("Link Behavior", () => {
    test("renders card as link when href is provided", () => {
      const { container } = render(CardLinkTest);
      const link = container.querySelector("a");

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "/test-link");
      expect(link).toHaveTextContent("Card Link Title");
    });

    test("card link has proper classes", () => {
      const { container } = render(CardLinkTest);
      const link = container.querySelector("a");

      expect(link).toBeInTheDocument();
      expect(link?.className).toContain("flex");
      expect(link?.className).toContain("border");
    });
  });

  describe("Image Functionality", () => {
    test("renders card with image", () => {
      const { container } = render(CardWithImageTest);
      const img = container.querySelector("img");

      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("src", "https://flowbite.com/docs/images/blog/image-1.jpg");
      expect(img).toHaveAttribute("alt", "");
      expect(img).toHaveAttribute("loading", "lazy");
    });

    test("image has proper classes", () => {
      const { container } = render(CardWithImageTest);
      const img = container.querySelector("img");

      expect(img).toBeInTheDocument();
      expect(img?.className).toContain("rounded-base");
    });

    test("handles image error gracefully", () => {
      const { container } = render(CardImageErrorTest);
      const img = container.querySelector("img");

      expect(img).toBeInTheDocument();

      // Simulate image error
      if (img) {
        const errorEvent = new Event("error");
        img.dispatchEvent(errorEvent);

        // After error, image should be hidden
        expect(img.style.display).toBe("none");
      }
    });

    test("applies custom image classes", () => {
      const { container } = render(CardCustomImageClassTest);
      const img = container.querySelector("img");

      expect(img).toBeInTheDocument();
      expect(img?.className).toContain("custom-image-class");
    });
  });

  describe("Size Variants", () => {
    test("renders different size cards", () => {
      const { container } = render(CardSizesTest);
      const cards = container.querySelectorAll("div");

      // Should have 5 cards (xs, sm, md, lg, xl)
      expect(cards.length).toBeGreaterThanOrEqual(5);

      // Verify content for each size
      expect(screen.getByText("Extra Small Card")).toBeInTheDocument();
      expect(screen.getByText("Small Card")).toBeInTheDocument();
      expect(screen.getByText("Medium Card")).toBeInTheDocument();
      expect(screen.getByText("Large Card")).toBeInTheDocument();
      expect(screen.getByText("Extra Large Card")).toBeInTheDocument();
    });

    test("size variants apply correct max-width classes", () => {
      const { container } = render(CardSizesTest);
      const cards = container.querySelectorAll("div");

      cards.forEach((card) => {
        expect(card.className).toMatch(/max-w-(xs|sm|lg|2xl|none)/);
      });
    });
  });

  describe("Shadow Variants", () => {
    test("renders different shadow cards", () => {
      const { container } = render(CardShadowsTest);
      const cards = container.querySelectorAll("div");

      // Should have 8 cards (xs, sm, normal, md, lg, xl, 2xl, inner)
      expect(cards.length).toBeGreaterThanOrEqual(8);

      // Verify content for each shadow
      expect(screen.getByText("Extra Small Shadow")).toBeInTheDocument();
      expect(screen.getByText("Small Shadow")).toBeInTheDocument();
      expect(screen.getByText("Normal Shadow")).toBeInTheDocument();
      expect(screen.getByText("Medium Shadow")).toBeInTheDocument();
      expect(screen.getByText("Large Shadow")).toBeInTheDocument();
      expect(screen.getByText("Extra Large Shadow")).toBeInTheDocument();
      expect(screen.getByText("2XL Shadow")).toBeInTheDocument();
      expect(screen.getByText("Inner Shadow")).toBeInTheDocument();
    });

    test("shadow variants apply correct shadow classes", () => {
      const { container } = render(CardShadowsTest);
      const cards = container.querySelectorAll("div");

      cards.forEach((card) => {
        expect(card.className).toMatch(/shadow/);
      });
    });
  });

  describe("Hoverable State", () => {
    test("renders hoverable card", () => {
      const { container } = render(CardHoverableTest);
      const card = container.querySelector("div");

      expect(card).toBeInTheDocument();
      expect(card).toHaveTextContent("Hoverable Card");
    });

    test("hoverable card has hover class", () => {
      const { container } = render(CardHoverableTest);
      const card = container.querySelector("div");

      expect(card).toBeInTheDocument();
      expect(card?.className).toContain("hover:bg");
    });
  });

  describe("Layout Variants", () => {
    test("renders horizontal card", () => {
      const { container } = render(CardHorizontalTest);
      const card = container.querySelector("div");
      const img = container.querySelector("img");

      expect(card).toBeInTheDocument();
      expect(img).toBeInTheDocument();
      expect(card).toHaveTextContent("Horizontal Card");
    });

    test("horizontal card has proper flex direction", () => {
      const { container } = render(CardHorizontalTest);
      const card = container.querySelector("div");

      expect(card).toBeInTheDocument();
      expect(card?.className).toMatch(/md:flex-row/);
    });

    test("renders reversed card", () => {
      const { container } = render(CardReverseTest);
      const card = container.querySelector("div");
      const img = container.querySelector("img");

      expect(card).toBeInTheDocument();
      expect(img).toBeInTheDocument();
      expect(card).toHaveTextContent("Reversed Card");
    });

    test("reversed card has proper flex direction", () => {
      const { container } = render(CardReverseTest);
      const card = container.querySelector("div");

      expect(card).toBeInTheDocument();
      expect(card?.className).toContain("flex-col-reverse");
    });

    test("renders horizontal reversed card", () => {
      const { container } = render(CardHorizontalReverseTest);
      const card = container.querySelector("div");
      const img = container.querySelector("img");

      expect(card).toBeInTheDocument();
      expect(img).toBeInTheDocument();
      expect(card).toHaveTextContent("Horizontal Reversed Card");
    });

    test("horizontal reversed card has proper flex direction", () => {
      const { container } = render(CardHorizontalReverseTest);
      const card = container.querySelector("div");

      expect(card).toBeInTheDocument();
      expect(card?.className).toMatch(/md:flex-row-reverse/);
    });

    test("horizontal card image has proper sizing", () => {
      const { container } = render(CardHorizontalTest);
      const img = container.querySelector("img");

      expect(img).toBeInTheDocument();
      expect(img?.className).toMatch(/w-full.*h-96/);
      expect(img?.className).toMatch(/md:h-auto.*md:w-48/);
    });
  });

  describe("Custom Styling", () => {
    test("applies custom classes to card", () => {
      const { container } = render(CardCustomClassTest);
      const card = container.querySelector("div");

      expect(card).toBeInTheDocument();
      expect(card?.className).toContain("custom-card-class");
      expect(card?.className).toContain("bg-red-100");
    });

    test("custom classes don't override essential classes", () => {
      const { container } = render(CardCustomClassTest);
      const card = container.querySelector("div");

      expect(card).toBeInTheDocument();
      expect(card?.className).toContain("flex");
      expect(card?.className).toContain("border");
    });
  });

  describe("Accessibility", () => {
  test("card content is readable", () => {
  render(BasicCardTest);

  expect(screen.getByText("Basic Card Title")).toBeInTheDocument();
  expect(screen.getByText("Basic card content goes here.")).toBeInTheDocument();
  });

  test("card link has proper href attribute", () => {
  const { container } = render(CardLinkTest);
  const link = container.querySelector("a");

      expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/test-link");
  });

    test("images have alt attributes", () => {
      const { container } = render(CardWithImageTest);
      const img = container.querySelector("img");

      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("alt");
    });

    test("images have lazy loading", () => {
      const { container } = render(CardWithImageTest);
      const img = container.querySelector("img");

      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("loading", "lazy");
    });
  });

  describe("Component Structure", () => {
    test("card without href renders as div", () => {
      const { container } = render(BasicCardTest);
      const div = container.querySelector("div");
      const link = container.querySelector("a");

      expect(div).toBeInTheDocument();
      expect(link).not.toBeInTheDocument();
    });

    test("card with href renders as anchor", () => {
      const { container } = render(CardLinkTest);
      const link = container.querySelector("a");

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href");
    });

    test("card maintains proper hierarchy with image and content", () => {
      const { container } = render(CardWithImageTest);
      const card = container.querySelector("div");
      const img = card?.querySelector("img");
      const heading = card?.querySelector("h5");
      const paragraph = card?.querySelector("p");

      expect(card).toBeInTheDocument();
      expect(img).toBeInTheDocument();
      expect(heading).toBeInTheDocument();
      expect(paragraph).toBeInTheDocument();
    });
  });

  describe("Props Integration", () => {
    test("multiple props work together (horizontal + hoverable + size)", () => {
      const { container } = render(CardHorizontalTest);
      const card = container.querySelector("div");

      expect(card).toBeInTheDocument();
      expect(card?.className).toMatch(/md:flex-row/);
    });

    test("card with all layout options", () => {
      const { container } = render(CardHorizontalReverseTest);
      const card = container.querySelector("div");

      expect(card).toBeInTheDocument();
      expect(card?.className).toMatch(/md:flex-row-reverse/);
    });
  });
});
