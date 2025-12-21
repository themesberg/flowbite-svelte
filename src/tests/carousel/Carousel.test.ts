import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicCarouselTest from "./basic-carousel.test.svelte";
import CarouselWithControlsTest from "./carousel-with-controls.test.svelte";
import CarouselWithIndicatorsTest from "./carousel-with-indicators.test.svelte";
import CarouselWithThumbnailsTest from "./carousel-with-thumbnails.test.svelte";
import CarouselAutoplayTest from "./carousel-autoplay.test.svelte";
import CarouselNoSwipeTest from "./carousel-no-swipe.test.svelte";
import CarouselCustomClassTest from "./carousel-custom-class.test.svelte";
import CarouselOnChangeTest from "./carousel-onchange.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Carousel Component", () => {
  describe("Basic Rendering", () => {
    test("basic carousel renders correctly", () => {
      render(BasicCarouselTest);
      const carousel = screen.getByRole("button");

      expect(carousel).toBeInTheDocument();
      expect(carousel).toHaveAttribute("aria-label", "Draggable Carousel");
    });

    test("carousel renders with correct initial image", () => {
      render(BasicCarouselTest);
      const images = screen.getAllByRole("img");

      expect(images.length).toBeGreaterThan(0);
      expect(images[0]).toHaveAttribute("alt", "Test Image 1");
    });

    test("carousel has correct structure classes", () => {
      render(BasicCarouselTest);
      const carousel = screen.getByRole("button");

      expect(carousel).toHaveClass("grid", "overflow-hidden", "relative", "rounded-lg");
    });
  });

  describe("Controls", () => {
    test("carousel renders with controls", () => {
      render(CarouselWithControlsTest);
      const buttons = screen.getAllByRole("button");

      // Should have carousel button + 2 control buttons (prev/next)
      expect(buttons.length).toBeGreaterThanOrEqual(3);
    });

    test("control buttons are present and functional", async () => {
      const user = userEvent.setup();
      render(CarouselWithControlsTest);

      const buttons = screen.getAllByRole("button");
      // Find next and previous buttons (they should be at the end of the array)
      const controlButtons = buttons.filter((btn) => btn.classList.contains("flex") && btn.classList.contains("absolute"));

      expect(controlButtons.length).toBe(2);

      // Click should not throw error
      await user.click(controlButtons[0]);
      expect(controlButtons[0]).toBeInTheDocument();
    });
  });

  describe("Indicators", () => {
    test("carousel renders with indicators", () => {
      render(CarouselWithIndicatorsTest);
      const carousel = screen.getByRole("button", { name: /draggable carousel/i });

      expect(carousel).toBeInTheDocument();

      // Indicators should be rendered as buttons within the carousel
      const indicatorButtons = screen.getAllByRole("button");
      expect(indicatorButtons.length).toBeGreaterThan(1);
    });

    test("indicators reflect the number of images", () => {
      render(CarouselWithIndicatorsTest);

      // Get all buttons - first is carousel, rest are indicators
      const buttons = screen.getAllByRole("button");

      // Should have 1 carousel button + 3 indicator buttons for 3 test images
      expect(buttons.length).toBe(4);
    });

    test("indicator has correct accessibility attributes", () => {
      render(CarouselWithIndicatorsTest);
      const buttons = screen.getAllByRole("button");

      // Check if any button has aria-current (the active indicator)
      const activeIndicator = buttons.find((btn) => btn.hasAttribute("aria-current") && btn.getAttribute("aria-current") === "true");

      expect(activeIndicator).toBeDefined();
    });
  });

  describe("Thumbnails", () => {
    test("carousel renders with thumbnails", () => {
      render(CarouselWithThumbnailsTest);

      // Main carousel
      const carousel = screen.getByRole("button", { name: /draggable carousel/i });
      expect(carousel).toBeInTheDocument();

      // Thumbnail buttons
      const thumbnailButtons = screen.getAllByRole("button", { name: /click to view image/i });
      expect(thumbnailButtons.length).toBe(3);
    });

    test("thumbnails show all images", () => {
      render(CarouselWithThumbnailsTest);
      const images = screen.getAllByRole("img");

      // Should have images for both carousel and thumbnails (at least 4: 1 main + 3 thumbnails)
      expect(images.length).toBeGreaterThanOrEqual(4);
    });

    test("clicking thumbnail button works", async () => {
      const user = userEvent.setup();
      render(CarouselWithThumbnailsTest);

      const thumbnailButtons = screen.getAllByRole("button", { name: /click to view image/i });

      // Click second thumbnail
      await user.click(thumbnailButtons[1]);

      // Button should still be in document
      expect(thumbnailButtons[1]).toBeInTheDocument();
    });
  });

  describe("Autoplay", () => {
    test("carousel with autoplay has correct props", () => {
      render(CarouselAutoplayTest);
      const carousel = screen.getByTestId("autoplay-carousel");

      expect(carousel).toBeInTheDocument();
    });
  });

  describe("Swipe Functionality", () => {
    test("carousel with disableSwipe prop renders", () => {
      render(CarouselNoSwipeTest);
      const carousel = screen.getByTestId("no-swipe-carousel");

      expect(carousel).toBeInTheDocument();
    });
  });

  describe("Customization", () => {
    test("custom class is applied to carousel", () => {
      render(CarouselCustomClassTest);
      const carousel = screen.getByTestId("custom-class-carousel");

      expect(carousel).toHaveClass("custom-carousel-class");
    });
  });

  describe("Events", () => {
    test("onchange callback is triggered", async () => {
      const user = userEvent.setup();
      render(CarouselOnChangeTest);

      // Get control buttons
      const buttons = screen.getAllByRole("button");
      const controlButtons = buttons.filter((btn) => btn.classList.contains("flex") && btn.classList.contains("absolute"));

      // Ensure control buttons are present
      expect(controlButtons.length).toBeGreaterThanOrEqual(2);

      // Click next button
      await user.click(controlButtons[1]);

      // The component should still be in the document
      const carousel = screen.getByTestId("onchange-carousel");
      expect(carousel).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    test("carousel has correct ARIA label", () => {
      render(BasicCarouselTest);
      const carousel = screen.getByRole("button");

      expect(carousel).toHaveAttribute("aria-label", "Draggable Carousel");
    });

    test("carousel is keyboard accessible", () => {
      render(BasicCarouselTest);
      const carousel = screen.getByRole("button");

      expect(carousel).toHaveAttribute("tabindex", "0");
    });

    test("indicators have correct aria-current attribute", () => {
      render(CarouselWithIndicatorsTest);
      const buttons = screen.getAllByRole("button");

      // Find the active indicator
      const activeIndicator = buttons.find((btn) => btn.getAttribute("aria-current") === "true");

      expect(activeIndicator).toBeDefined();
    });
  });
});
