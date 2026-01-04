import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import { TEST_IMAGE_SVG } from "../../fixtures/test-images";

import BasicImgTest from "./basic-img.test.svelte";
import ImgWithCaptionTest from "./img-with-caption.test.svelte";
import ImgSizesTest from "./img-sizes.test.svelte";
import ImgEffectsTest from "./img-effects.test.svelte";
import ImgAlignmentTest from "./img-alignment.test.svelte";
import ImgWithHrefTest from "./img-with-href.test.svelte";
import ImgCustomClassTest from "./img-custom-class.test.svelte";
import ImgCustomPropsTest from "./img-custom-props.test.svelte";
import ImgWithSlotTest from "./img-with-slot.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Img Component", () => {
  describe("Basic Rendering", () => {
    test("renders img element", () => {
      render(BasicImgTest);
      const img = screen.getByTestId("basic-img");

      expect(img).toBeInTheDocument();
      expect(img.tagName).toBe("IMG");
      expect(img).toHaveAttribute("data-scope", "img");
    });

    test("renders with src and alt attributes", () => {
      render(BasicImgTest);
      const img = screen.getByTestId("basic-img");

      expect(img).toHaveAttribute("src", TEST_IMAGE_SVG);
      expect(img).toHaveAttribute("alt", "Test image");
    });

    test("standalone img has data-scope but not data-part", () => {
      render(BasicImgTest);
      const img = screen.getByTestId("basic-img");

      expect(img).toHaveAttribute("data-scope", "img");
      expect(img).not.toHaveAttribute("data-part");
    });
  });

  describe("Caption Functionality", () => {
    test("renders figure when caption is provided", () => {
      render(ImgWithCaptionTest);
      const figure = document.querySelector("figure");

      expect(figure).toBeInTheDocument();
      expect(figure).toHaveAttribute("data-scope", "img");
      expect(figure).toHaveAttribute("data-part", "figure");
    });

    test("renders figcaption with caption text", () => {
      render(ImgWithCaptionTest);
      const caption = document.querySelector("figcaption");

      expect(caption).toBeInTheDocument();
      expect(caption).toHaveAttribute("data-part", "caption");
      expect(caption).toHaveTextContent("This is a caption");
    });

    test("img inside figure has data-part attribute", () => {
      render(ImgWithCaptionTest);
      const img = screen.getByTestId("img-with-caption");

      expect(img).toHaveAttribute("data-part", "image");
    });

    test("img is inside figure when caption exists", () => {
      render(ImgWithCaptionTest);
      const figure = document.querySelector("figure");
      const img = screen.getByTestId("img-with-caption");

      expect(figure).toContainElement(img);
    });

    test("caption HTML is rendered", () => {
      render(ImgWithCaptionTest);
      const caption = document.querySelector("figcaption");

      expect(caption?.innerHTML).toContain("This is a caption");
    });
  });

  describe("Size Variants", () => {
    test("renders xs size correctly", () => {
      render(ImgSizesTest);
      const img = screen.getByTestId("img-xs");

      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("alt", "Extra small image");
    });

    test("renders sm size correctly", () => {
      render(ImgSizesTest);
      const img = screen.getByTestId("img-sm");

      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("alt", "Small image");
    });

    test("renders md size correctly", () => {
      render(ImgSizesTest);
      const img = screen.getByTestId("img-md");

      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("alt", "Medium image");
    });

    test("renders lg size correctly", () => {
      render(ImgSizesTest);
      const img = screen.getByTestId("img-lg");

      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("alt", "Large image");
    });

    test("renders xl size correctly", () => {
      render(ImgSizesTest);
      const img = screen.getByTestId("img-xl");

      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("alt", "Extra large image");
    });

    test("renders 2xl size correctly", () => {
      render(ImgSizesTest);
      const img = screen.getByTestId("img-2xl");

      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("alt", "2XL image");
    });

    test("renders full size correctly", () => {
      render(ImgSizesTest);
      const img = screen.getByTestId("img-full");

      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("alt", "Full image");
    });
  });

  describe("Effect Variants", () => {
    test("renders grayscale effect", () => {
      render(ImgEffectsTest);
      const img = screen.getByTestId("img-grayscale");

      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("alt", "Grayscale effect");
    });

    test("renders blur effect", () => {
      render(ImgEffectsTest);
      const img = screen.getByTestId("img-blur");

      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("alt", "Blur effect");
    });

    test("renders invert effect", () => {
      render(ImgEffectsTest);
      const img = screen.getByTestId("img-invert");

      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("alt", "Invert effect");
    });

    test("renders sepia effect", () => {
      render(ImgEffectsTest);
      const img = screen.getByTestId("img-sepia");

      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("alt", "Sepia effect");
    });

    test("renders saturate effect", () => {
      render(ImgEffectsTest);
      const img = screen.getByTestId("img-saturate");

      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("alt", "Saturate effect");
    });

    test("renders hue-rotate effect", () => {
      render(ImgEffectsTest);
      const img = screen.getByTestId("img-hue-rotate");

      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("alt", "Hue rotate effect");
    });
  });

  describe("Alignment Variants", () => {
    test("renders left aligned image", () => {
      render(ImgAlignmentTest);
      const img = screen.getByTestId("img-left");

      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("alt", "Left aligned image");
    });

    test("renders center aligned image", () => {
      render(ImgAlignmentTest);
      const img = screen.getByTestId("img-center");

      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("alt", "Center aligned image");
    });

    test("renders right aligned image", () => {
      render(ImgAlignmentTest);
      const img = screen.getByTestId("img-right");

      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("alt", "Right aligned image");
    });
  });

  describe("Link Functionality", () => {
    test("wraps image in anchor when href is provided", () => {
      render(ImgWithHrefTest);
      const anchor = document.querySelector("a");
      const img = screen.getByTestId("img-with-href");

      expect(anchor).toBeInTheDocument();
      expect(anchor).toHaveAttribute("href", "https://example.com");
      expect(anchor).toContainElement(img);
    });

    test("wraps figure in anchor when href and caption are provided", () => {
      render(ImgWithHrefTest);
      const anchors = document.querySelectorAll("a");
      const figure = document.querySelector("figure");

      // Find the anchor that contains the figure
      const figureAnchor = Array.from(anchors).find((a) => a.contains(figure));

      expect(figureAnchor).toBeInTheDocument();
      expect(figureAnchor).toHaveAttribute("href", "https://example.com");
    });

    test("img remains inside anchor when href is set", () => {
      render(ImgWithHrefTest);
      const img = screen.getByTestId("img-href-caption");
      const anchor = img.closest("a");

      expect(anchor).toBeInTheDocument();
    });
  });

  describe("Props", () => {
    test("applies custom class via classes prop", () => {
      render(ImgCustomClassTest);
      const img = screen.getByTestId("img-custom-class");

      expect(img).toHaveClass("custom-img-class");
    });

    test("applies custom classes variant", () => {
      render(ImgCustomClassTest);
      const img = document.querySelector(".custom-image-class");
      const figure = document.querySelector(".custom-figure-class");
      const caption = document.querySelector(".custom-caption-class");

      expect(img).toBeInTheDocument();
      expect(figure).toBeInTheDocument();
      expect(caption).toBeInTheDocument();
    });

    test("accepts custom attributes via restProps", () => {
      render(ImgCustomPropsTest);
      const img = screen.getByTestId("img-custom-props");

      expect(img).toHaveAttribute("id", "custom-img-id");
      expect(img).toHaveAttribute("data-custom", "custom-value");
      expect(img).toHaveAttribute("title", "Custom image title");
      expect(img).toHaveAttribute("loading", "lazy");
      expect(img).toHaveAttribute("width", "300");
      expect(img).toHaveAttribute("height", "200");
    });
  });

  describe("Slot Functionality", () => {
    test("renders custom img element via slot", () => {
      render(ImgWithSlotTest);
      const img = screen.getByTestId("custom-img-element");

      expect(img).toBeInTheDocument();
      expect(img.tagName).toBe("IMG");
      expect(img).toHaveAttribute("src", TEST_IMAGE_SVG);
    });

    test("slot receives correct class prop", () => {
      render(ImgWithSlotTest);
      const img = screen.getByTestId("custom-img-element");

      // The image should have classes applied from the component
      expect(img).toHaveAttribute("class");
    });

    test("renders slot content with caption", () => {
      render(ImgWithSlotTest);
      const img = screen.getByTestId("custom-img-with-caption");
      const caption = document.querySelector("figcaption");

      expect(img).toBeInTheDocument();
      expect(caption).toBeInTheDocument();
      expect(caption).toHaveTextContent("Custom slot with caption");
    });

    test("slot content is inside figure when caption exists", () => {
      render(ImgWithSlotTest);
      const figure = document.querySelector("figure");
      const img = screen.getByTestId("custom-img-with-caption");

      expect(figure).toContainElement(img);
    });
  });

  describe("Data Attributes", () => {
    test("standalone img has data-scope attribute", () => {
      render(BasicImgTest);
      const img = screen.getByTestId("basic-img");

      expect(img).toHaveAttribute("data-scope", "img");
    });

    test("img inside figure has data-part attribute", () => {
      render(ImgWithCaptionTest);
      const img = screen.getByTestId("img-with-caption");

      expect(img).toHaveAttribute("data-part", "image");
    });

    test("figure has correct data attributes", () => {
      render(ImgWithCaptionTest);
      const figure = document.querySelector("figure");

      expect(figure).toHaveAttribute("data-scope", "img");
      expect(figure).toHaveAttribute("data-part", "figure");
    });

    test("figcaption has data-part attribute", () => {
      render(ImgWithCaptionTest);
      const caption = document.querySelector("figcaption");

      expect(caption).toHaveAttribute("data-part", "caption");
    });
  });

  describe("Conditional Rendering", () => {
    test("renders img directly when no caption", () => {
      render(BasicImgTest);
      const figure = document.querySelector("figure");

      expect(figure).not.toBeInTheDocument();
    });

    test("renders figure when caption is provided", () => {
      render(ImgWithCaptionTest);
      const figure = document.querySelector("figure");

      expect(figure).toBeInTheDocument();
    });

    test("renders without anchor when href is not provided", () => {
      render(BasicImgTest);
      const anchor = document.querySelector("a");

      expect(anchor).not.toBeInTheDocument();
    });

    test("renders with anchor when href is provided", () => {
      render(ImgWithHrefTest);
      const anchor = document.querySelector("a");

      expect(anchor).toBeInTheDocument();
    });
  });
});
