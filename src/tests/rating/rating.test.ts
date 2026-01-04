import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicRatingTest from "./basic-rating.test.svelte";
import RatingValuesTest from "./rating-values.test.svelte";
import RatingIconsTest from "./rating-icons.test.svelte";
import RatingSizesTest from "./rating-sizes.test.svelte";
import RatingCountTest from "./rating-count.test.svelte";
import AdvancedRatingTest from "./advanced-rating.test.svelte";
import ScoreRatingTest from "./score-rating.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Rating Component", () => {
  describe("Basic Rendering", () => {
    test("basic rating renders correctly", () => {
      render(BasicRatingTest);
      const rating = screen.getByTestId("basic-rating");

      expect(rating).toBeInTheDocument();
      expect(rating).toHaveAttribute("data-scope", "rating");
      expect(rating).toHaveAttribute("data-part", "base");
    });
  });

  describe("Rating Values", () => {
    test.each([
      { value: 0, description: "value 0" },
      { value: 1, description: "value 1" },
      { value: 2.5, description: "decimal value 2.5" },
      { value: 4, description: "value 4" },
      { value: 5, description: "max value 5" }
    ])("renders rating with $description", ({ value }) => {
      render(RatingValuesTest);
      const rating = screen.getByTestId(`rating-${value}`);

      expect(rating).toBeInTheDocument();
      expect(rating).toHaveAttribute("data-scope", "rating");
    });
  });

  describe("Custom Icons", () => {
    test("renders rating with heart icon", () => {
      render(RatingIconsTest);
      const rating = screen.getByTestId("rating-heart");

      expect(rating).toBeInTheDocument();
      // Verify SVG elements exist (hearts use SVG)
      const svgs = rating.querySelectorAll("svg");
      expect(svgs.length).toBeGreaterThan(0);
    });

    test("renders rating with thumbup icon", () => {
      render(RatingIconsTest);
      const rating = screen.getByTestId("rating-thumbup");

      expect(rating).toBeInTheDocument();
      const svgs = rating.querySelectorAll("svg");
      expect(svgs.length).toBeGreaterThan(0);
    });
  });

  describe("Sizes", () => {
    test.each([16, 24, 32, 48])("renders rating with size %i", (size) => {
      render(RatingSizesTest);
      const rating = screen.getByTestId(`rating-size-${size}`);

      expect(rating).toBeInTheDocument();
      const svg = rating.querySelector("svg");
      expect(svg).toHaveAttribute("width", String(size));
      expect(svg).toHaveAttribute("height", String(size));
    });
  });

  describe("Count Mode", () => {
    test("renders rating with count mode and children", () => {
      render(RatingCountTest);
      const rating = screen.getByTestId("rating-count");
      const countText = screen.getByTestId("count-text");

      expect(rating).toBeInTheDocument();
      expect(countText).toBeInTheDocument();

      // In count mode, should show the rating value
      const valueElement = rating.querySelector('[data-part="value"]');
      expect(valueElement).toBeInTheDocument();
    });
  });
});

describe("AdvancedRating Component", () => {
  test("renders advanced rating with multiple bars", () => {
    render(AdvancedRatingTest);
    const advancedRating = screen.getByTestId("advanced-rating");

    expect(advancedRating).toBeInTheDocument();
  });

  test("renders all rating bars", () => {
    render(AdvancedRatingTest);

    // Each bar should have label, track, fill, and percentage
    const barTracks = document.querySelectorAll('[data-part="bar-track"]');
    expect(barTracks.length).toBe(5);

    const barFills = document.querySelectorAll('[data-part="bar-fill"]');
    expect(barFills.length).toBe(5);

    const percentages = document.querySelectorAll('[data-part="percentage"]');
    expect(percentages.length).toBe(5);
  });

  test("renders correct percentage values", () => {
    render(AdvancedRatingTest);

    const percentages = document.querySelectorAll('[data-part="percentage"]');
    // Verify all percentages are rendered with % symbol
    percentages.forEach((percentage) => {
      expect(percentage.textContent).toContain("%");
      expect(percentage.textContent).toBeTruthy();
    });

    // Check first percentage value specifically (70%)
    expect(percentages[0].textContent).toContain("70");
  });
});

describe("ScoreRating Component", () => {
  test("renders score rating with header and bars", () => {
    render(ScoreRatingTest);
    const scoreRating = screen.getByTestId("score-rating");

    expect(scoreRating).toBeInTheDocument();
  });

  test("renders header with badge and title", () => {
    render(ScoreRatingTest);

    const badge = document.querySelector('[data-part="badge"]');
    const title = document.querySelector('[data-part="title"]');
    const subtitle = document.querySelector('[data-part="subtitle"]');

    expect(badge).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });

  test("renders all rating bars", () => {
    render(ScoreRatingTest);

    // Should have 6 rating bars total (3 in each column)
    const bars = document.querySelectorAll('[data-part="bar"]');
    expect(bars.length).toBe(6);
  });

  test("renders bars with correct width styles", () => {
    render(ScoreRatingTest);

    const bars = document.querySelectorAll('[data-part="bar"]');

    // First bar should have width: 88% (rating 8.8 * 10)
    // Verify all bars have width styles applied
    bars.forEach((bar) => {
      const width = (bar as HTMLElement).style.width;
      expect(width).toBeTruthy();
      expect(width).toMatch(/^\d+%$/);
    });

    // Check first bar specifically (88% for rating 8.8)
    expect((bars[0] as HTMLElement).style.width).toBe("88%");
  });
});
