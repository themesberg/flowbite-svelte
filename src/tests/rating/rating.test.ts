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
    test("renders rating with value 0", () => {
      render(RatingValuesTest);
      const rating = screen.getByTestId("rating-0");

      expect(rating).toBeInTheDocument();
      expect(rating).toHaveAttribute("data-scope", "rating");
    });

    test("renders rating with value 1", () => {
      render(RatingValuesTest);
      const rating = screen.getByTestId("rating-1");

      expect(rating).toBeInTheDocument();
    });

    test("renders rating with decimal value 2.5", () => {
      render(RatingValuesTest);
      const rating = screen.getByTestId("rating-2.5");

      expect(rating).toBeInTheDocument();
    });

    test("renders rating with value 4", () => {
      render(RatingValuesTest);
      const rating = screen.getByTestId("rating-4");

      expect(rating).toBeInTheDocument();
    });

    test("renders rating with max value 5", () => {
      render(RatingValuesTest);
      const rating = screen.getByTestId("rating-5");

      expect(rating).toBeInTheDocument();
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
    test("renders rating with size 16", () => {
      render(RatingSizesTest);
      const rating = screen.getByTestId("rating-size-16");

      expect(rating).toBeInTheDocument();
      const svg = rating.querySelector("svg");
      expect(svg).toHaveAttribute("width", "16");
      expect(svg).toHaveAttribute("height", "16");
    });

    test("renders rating with size 24", () => {
      render(RatingSizesTest);
      const rating = screen.getByTestId("rating-size-24");

      expect(rating).toBeInTheDocument();
      const svg = rating.querySelector("svg");
      expect(svg).toHaveAttribute("width", "24");
      expect(svg).toHaveAttribute("height", "24");
    });

    test("renders rating with size 32", () => {
      render(RatingSizesTest);
      const rating = screen.getByTestId("rating-size-32");

      expect(rating).toBeInTheDocument();
      const svg = rating.querySelector("svg");
      expect(svg).toHaveAttribute("width", "32");
      expect(svg).toHaveAttribute("height", "32");
    });

    test("renders rating with size 48", () => {
      render(RatingSizesTest);
      const rating = screen.getByTestId("rating-size-48");

      expect(rating).toBeInTheDocument();
      const svg = rating.querySelector("svg");
      expect(svg).toHaveAttribute("width", "48");
      expect(svg).toHaveAttribute("height", "48");
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

    // Check first percentage (70%)
    expect(percentages[0].textContent).toContain("70");
    expect(percentages[0].textContent).toContain("%");
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
    expect((bars[0] as HTMLElement).style.width).toBe("88%");
  });
});
