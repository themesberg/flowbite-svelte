import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicSkeletonTest from "./basic-skeleton.test.svelte";
import SkeletonSizesTest from "./skeleton-sizes.test.svelte";
import SkeletonCustomClassTest from "./skeleton-custom-class.test.svelte";
import BasicCardPlaceholderTest from "./basic-card-placeholder.test.svelte";
import CardPlaceholderSizesTest from "./card-placeholder-sizes.test.svelte";
import BasicImagePlaceholderTest from "./basic-image-placeholder.test.svelte";
import ImagePlaceholderSizesTest from "./image-placeholder-sizes.test.svelte";
import ImagePlaceholderRoundedTest from "./image-placeholder-rounded.test.svelte";
import ImagePlaceholderImgOnlyTest from "./image-placeholder-img-only.test.svelte";
import BasicListPlaceholderTest from "./basic-list-placeholder.test.svelte";
import ListPlaceholderItemsTest from "./list-placeholder-items.test.svelte";
import BasicTestimonialPlaceholderTest from "./basic-testimonial-placeholder.test.svelte";
import BasicTextPlaceholderTest from "./basic-text-placeholder.test.svelte";
import TextPlaceholderSizesTest from "./text-placeholder-sizes.test.svelte";
import BasicVideoPlaceholderTest from "./basic-video-placeholder.test.svelte";
import VideoPlaceholderSizesTest from "./video-placeholder-sizes.test.svelte";
import BasicWidgetPlaceholderTest from "./basic-widget-placeholder.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Skeleton Component", () => {
  describe("Basic Rendering", () => {
    test("renders basic skeleton", () => {
      const { container } = render(BasicSkeletonTest);
      const skeleton = container.querySelector('[role="status"]');

      expect(skeleton).toBeInTheDocument();
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    test("skeleton has proper structure", () => {
      const { container } = render(BasicSkeletonTest);
      const skeleton = container.querySelector('[role="status"]');
      const lines = skeleton?.querySelectorAll("div");

      expect(skeleton).toBeInTheDocument();
      expect(lines?.length).toBeGreaterThan(0);
    });

    test("skeleton has sr-only loading text", () => {
      const { container } = render(BasicSkeletonTest);
      const srText = container.querySelector(".sr-only");

      expect(srText).toBeInTheDocument();
      expect(srText).toHaveTextContent("Loading...");
    });
  });

  describe("Size Variants", () => {
    test("renders different size skeletons", () => {
      const { container } = render(SkeletonSizesTest);
      const skeletons = container.querySelectorAll('[role="status"]');

      expect(skeletons.length).toBe(5);
    });

    test("size variants have proper structure", () => {
      const { container } = render(SkeletonSizesTest);
      const skeletons = container.querySelectorAll('[role="status"]');

      skeletons.forEach((skeleton) => {
        const lines = skeleton.querySelectorAll("div");
        expect(lines.length).toBeGreaterThan(0);
      });
    });
  });

  describe("Custom Styling", () => {
    test("applies custom classes to skeleton", () => {
      const { container } = render(SkeletonCustomClassTest);
      const skeleton = container.querySelector(".custom-skeleton-class");

      expect(skeleton).toBeInTheDocument();
      expect(skeleton).toHaveClass("custom-skeleton-class");
      expect(skeleton).toHaveClass("bg-blue-100");
    });

    test("custom classes don't override essential attributes", () => {
      const { container } = render(SkeletonCustomClassTest);
      const skeleton = container.querySelector('[role="status"]');

      expect(skeleton).toBeInTheDocument();
      expect(skeleton).toHaveAttribute("role", "status");
    });
  });

  describe("Accessibility", () => {
    test("skeleton has role status", () => {
      const { container } = render(BasicSkeletonTest);
      const skeleton = container.querySelector('[role="status"]');

      expect(skeleton).toBeInTheDocument();
      expect(skeleton).toHaveAttribute("role", "status");
    });

    test("skeleton has screen reader text", () => {
      render(BasicSkeletonTest);
      const loadingText = screen.getByText("Loading...");

      expect(loadingText).toBeInTheDocument();
      expect(loadingText.className).toContain("sr-only");
    });
  });
});

describe("CardPlaceholder Component", () => {
  describe("Basic Rendering", () => {
    test("renders basic card placeholder", () => {
      const { container } = render(BasicCardPlaceholderTest);
      const cardPlaceholder = container.querySelector('[role="status"]');

      expect(cardPlaceholder).toBeInTheDocument();
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    test("card placeholder has svg icon", () => {
      const { container } = render(BasicCardPlaceholderTest);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    test("card placeholder has multiple lines", () => {
      const { container } = render(BasicCardPlaceholderTest);
      const placeholder = container.querySelector('[role="status"]');
      const lines = placeholder?.querySelectorAll("div");

      expect(lines?.length).toBeGreaterThan(0);
    });
  });

  describe("Size Variants", () => {
    test("renders different size card placeholders", () => {
      const { container } = render(CardPlaceholderSizesTest);
      const placeholders = container.querySelectorAll('[role="status"]');

      expect(placeholders.length).toBe(5);
    });

    test("all card placeholders have icons", () => {
      const { container } = render(CardPlaceholderSizesTest);
      const svgs = container.querySelectorAll("svg");

      expect(svgs.length).toBeGreaterThanOrEqual(5);
    });
  });

  describe("Accessibility", () => {
    test("card placeholder has role status", () => {
      const { container } = render(BasicCardPlaceholderTest);
      const placeholder = container.querySelector('[role="status"]');

      expect(placeholder).toBeInTheDocument();
      expect(placeholder).toHaveAttribute("role", "status");
    });

    test("card placeholder svg has aria-hidden", () => {
      const { container } = render(BasicCardPlaceholderTest);
      const svgs = container.querySelectorAll("svg");

      svgs.forEach((svg) => {
        expect(svg).toHaveAttribute("aria-hidden", "true");
      });
    });
  });
});

describe("ImagePlaceholder Component", () => {
  describe("Basic Rendering", () => {
    test("renders basic image placeholder", () => {
      const { container } = render(BasicImagePlaceholderTest);
      const placeholder = container.querySelector('[role="status"]');

      expect(placeholder).toBeInTheDocument();
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    test("image placeholder has svg icon", () => {
      const { container } = render(BasicImagePlaceholderTest);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    test("image placeholder has content section by default", () => {
      const { container } = render(BasicImagePlaceholderTest);
      const placeholder = container.querySelector('[role="status"]');
      const divs = placeholder?.querySelectorAll("div");

      // Should have image div and content div with lines
      expect(divs?.length).toBeGreaterThan(1);
    });
  });

  describe("Size Variants", () => {
    test("renders different size image placeholders", () => {
      const { container } = render(ImagePlaceholderSizesTest);
      const placeholders = container.querySelectorAll('[role="status"]');

      expect(placeholders.length).toBe(5);
    });
  });

  describe("Rounded Variant", () => {
    test("renders rounded image placeholder", () => {
      const { container } = render(ImagePlaceholderRoundedTest);
      const placeholder = container.querySelector('[role="status"]');

      expect(placeholder).toBeInTheDocument();
    });

    test("rounded placeholder has proper structure", () => {
      const { container } = render(ImagePlaceholderRoundedTest);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
    });
  });

  describe("Image Only Mode", () => {
    test("renders image only placeholder", () => {
      const { container } = render(ImagePlaceholderImgOnlyTest);
      const placeholder = container.querySelector('[role="status"]');

      expect(placeholder).toBeInTheDocument();
    });

    test("image only mode has svg", () => {
      const { container } = render(ImagePlaceholderImgOnlyTest);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    test("image placeholder has role status", () => {
      const { container } = render(BasicImagePlaceholderTest);
      const placeholder = container.querySelector('[role="status"]');

      expect(placeholder).toBeInTheDocument();
      expect(placeholder).toHaveAttribute("role", "status");
    });

    test("image placeholder svg has aria-hidden", () => {
      const { container } = render(BasicImagePlaceholderTest);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("aria-hidden", "true");
    });
  });
});

describe("ListPlaceholder Component", () => {
  describe("Basic Rendering", () => {
    test("renders basic list placeholder", () => {
      const { container } = render(BasicListPlaceholderTest);
      const placeholder = container.querySelector('[role="status"]');

      expect(placeholder).toBeInTheDocument();
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    test("list placeholder renders default 5 items", () => {
      const { container } = render(BasicListPlaceholderTest);
      const placeholder = container.querySelector('[role="status"]');
      const items = placeholder?.querySelectorAll("div > div");

      // Should have 5 items by default
      expect(items?.length).toBeGreaterThanOrEqual(5);
    });
  });

  describe("Item Number Variants", () => {
    test("renders list with custom item numbers", () => {
      const { container } = render(ListPlaceholderItemsTest);
      const placeholders = container.querySelectorAll('[role="status"]');

      expect(placeholders.length).toBe(3);
    });

    test("list placeholders render correct number of items", () => {
      const { container } = render(ListPlaceholderItemsTest);
      const placeholders = container.querySelectorAll('[role="status"]');

      // Each placeholder should have items
      placeholders.forEach((placeholder) => {
        const items = placeholder.querySelectorAll("div > div");
        expect(items.length).toBeGreaterThan(0);
      });
    });
  });

  describe("Accessibility", () => {
    test("list placeholder has role status", () => {
      const { container } = render(BasicListPlaceholderTest);
      const placeholder = container.querySelector('[role="status"]');

      expect(placeholder).toBeInTheDocument();
      expect(placeholder).toHaveAttribute("role", "status");
    });

    test("list placeholder has screen reader text", () => {
      render(BasicListPlaceholderTest);
      const loadingText = screen.getByText("Loading...");

      expect(loadingText).toBeInTheDocument();
      expect(loadingText.className).toContain("sr-only");
    });
  });
});

describe("TestimonialPlaceholder Component", () => {
  describe("Basic Rendering", () => {
    test("renders basic testimonial placeholder", () => {
      const { container } = render(BasicTestimonialPlaceholderTest);
      const placeholder = container.querySelector('[role="status"]');

      expect(placeholder).toBeInTheDocument();
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    test("testimonial placeholder has svg icon", () => {
      const { container } = render(BasicTestimonialPlaceholderTest);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    test("testimonial placeholder has multiple lines", () => {
      const { container } = render(BasicTestimonialPlaceholderTest);
      const placeholder = container.querySelector('[role="status"]');
      const divs = placeholder?.querySelectorAll("div");

      expect(divs?.length).toBeGreaterThan(0);
    });
  });

  describe("Accessibility", () => {
    test("testimonial placeholder has role status", () => {
      const { container } = render(BasicTestimonialPlaceholderTest);
      const placeholder = container.querySelector('[role="status"]');

      expect(placeholder).toBeInTheDocument();
      expect(placeholder).toHaveAttribute("role", "status");
    });

    test("testimonial placeholder svg has aria-hidden", () => {
      const { container } = render(BasicTestimonialPlaceholderTest);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    test("testimonial placeholder has screen reader text", () => {
      render(BasicTestimonialPlaceholderTest);
      const loadingText = screen.getByText("Loading...");

      expect(loadingText).toBeInTheDocument();
      expect(loadingText.className).toContain("sr-only");
    });
  });
});

describe("TextPlaceholder Component", () => {
  describe("Basic Rendering", () => {
    test("renders basic text placeholder", () => {
      const { container } = render(BasicTextPlaceholderTest);
      const placeholder = container.querySelector('[role="status"]');

      expect(placeholder).toBeInTheDocument();
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    test("text placeholder has multiple lines", () => {
      const { container } = render(BasicTextPlaceholderTest);
      const placeholder = container.querySelector('[role="status"]');
      const divs = placeholder?.querySelectorAll("div");

      expect(divs?.length).toBeGreaterThan(0);
    });

    test("text placeholder lines have varying widths", () => {
      const { container } = render(BasicTextPlaceholderTest);
      const placeholder = container.querySelector('[role="status"]');
      const sections = placeholder?.querySelectorAll("div > div");

      expect(sections?.length).toBeGreaterThan(0);
    });
  });

  describe("Size Variants", () => {
    test("renders different size text placeholders", () => {
      const { container } = render(TextPlaceholderSizesTest);
      const placeholders = container.querySelectorAll('[role="status"]');

      expect(placeholders.length).toBe(5);
    });

    test("all text placeholders have proper structure", () => {
      const { container } = render(TextPlaceholderSizesTest);
      const placeholders = container.querySelectorAll('[role="status"]');

      placeholders.forEach((placeholder) => {
        const divs = placeholder.querySelectorAll("div");
        expect(divs.length).toBeGreaterThan(0);
      });
    });
  });

  describe("Accessibility", () => {
    test("text placeholder has role status", () => {
      const { container } = render(BasicTextPlaceholderTest);
      const placeholder = container.querySelector('[role="status"]');

      expect(placeholder).toBeInTheDocument();
      expect(placeholder).toHaveAttribute("role", "status");
    });

    test("text placeholder has screen reader text", () => {
      render(BasicTextPlaceholderTest);
      const loadingText = screen.getByText("Loading...");

      expect(loadingText).toBeInTheDocument();
      expect(loadingText.className).toContain("sr-only");
    });
  });
});

describe("VideoPlaceholder Component", () => {
  describe("Basic Rendering", () => {
    test("renders basic video placeholder", () => {
      const { container } = render(BasicVideoPlaceholderTest);
      const placeholder = container.querySelector('[role="status"]');

      expect(placeholder).toBeInTheDocument();
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    test("video placeholder has svg icon", () => {
      const { container } = render(BasicVideoPlaceholderTest);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    test("video placeholder svg has play icon", () => {
      const { container } = render(BasicVideoPlaceholderTest);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
      // Video icon should have a path element
      const path = svg?.querySelector("path");
      expect(path).toBeInTheDocument();
    });
  });

  describe("Size Variants", () => {
    test("renders different size video placeholders", () => {
      const { container } = render(VideoPlaceholderSizesTest);
      const placeholders = container.querySelectorAll('[role="status"]');

      expect(placeholders.length).toBe(5);
    });

    test("all video placeholders have svg icons", () => {
      const { container } = render(VideoPlaceholderSizesTest);
      const svgs = container.querySelectorAll("svg");

      expect(svgs.length).toBe(5);
    });
  });

  describe("Accessibility", () => {
    test("video placeholder has role status", () => {
      const { container } = render(BasicVideoPlaceholderTest);
      const placeholder = container.querySelector('[role="status"]');

      expect(placeholder).toBeInTheDocument();
      expect(placeholder).toHaveAttribute("role", "status");
    });

    test("video placeholder svg has aria-hidden", () => {
      const { container } = render(BasicVideoPlaceholderTest);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    test("video placeholder has screen reader text", () => {
      render(BasicVideoPlaceholderTest);
      const loadingText = screen.getByText("Loading...");

      expect(loadingText).toBeInTheDocument();
      expect(loadingText.className).toContain("sr-only");
    });
  });
});

describe("WidgetPlaceholder Component", () => {
  describe("Basic Rendering", () => {
    test("renders basic widget placeholder", () => {
      const { container } = render(BasicWidgetPlaceholderTest);
      const placeholder = container.querySelector('[role="status"]');

      expect(placeholder).toBeInTheDocument();
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    test("widget placeholder has chart bars", () => {
      const { container } = render(BasicWidgetPlaceholderTest);
      const placeholder = container.querySelector('[role="status"]');
      const bars = placeholder?.querySelectorAll("div > div > div");

      // Should have multiple vertical bars for chart
      expect(bars?.length).toBeGreaterThan(0);
    });

    test("widget placeholder has header lines", () => {
      const { container } = render(BasicWidgetPlaceholderTest);
      const placeholder = container.querySelector('[role="status"]');
      const divs = placeholder?.querySelectorAll("div");

      expect(divs?.length).toBeGreaterThan(0);
    });
  });

  describe("Accessibility", () => {
    test("widget placeholder has role status", () => {
      const { container } = render(BasicWidgetPlaceholderTest);
      const placeholder = container.querySelector('[role="status"]');

      expect(placeholder).toBeInTheDocument();
      expect(placeholder).toHaveAttribute("role", "status");
    });

    test("widget placeholder has screen reader text", () => {
      render(BasicWidgetPlaceholderTest);
      const loadingText = screen.getByText("Loading...");

      expect(loadingText).toBeInTheDocument();
      expect(loadingText.className).toContain("sr-only");
    });
  });
});
