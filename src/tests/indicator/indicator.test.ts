import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicIndicator from "./basic-indicator.test.svelte";
import ColorIndicator from "./color-indicator.test.svelte";
import SizeIndicator from "./size-indicator.test.svelte";
import BorderIndicator from "./border-indicator.test.svelte";
import PlacementIndicator from "./placement-indicator.test.svelte";
import CornerStyleIndicator from "./corner-style-indicator.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Indicator - Basic", () => {
  test("renders indicator", () => {
    render(BasicIndicator);
    const indicator = screen.getByTestId("basic-indicator");
    expect(indicator).toBeInTheDocument();
  });

  test("renders with default brand color", () => {
    render(BasicIndicator);
    const indicator = screen.getByTestId("basic-indicator");
    expect(indicator).toHaveClass("bg-brand");
  });

  test("renders with default circular corner style", () => {
    render(BasicIndicator);
    const indicator = screen.getByTestId("basic-indicator");
    expect(indicator).toHaveClass("rounded-full");
  });
});

describe("Indicator - Colors", () => {
  test("renders brand color", () => {
    render(ColorIndicator);
    const brandIndicator = screen.getByTestId("brand-indicator");
    expect(brandIndicator).toHaveClass("bg-brand");
  });

  test("renders success color", () => {
    render(ColorIndicator);
    const successIndicator = screen.getByTestId("success-indicator");
    expect(successIndicator).toHaveClass("bg-success");
  });

  test("renders danger color", () => {
    render(ColorIndicator);
    const dangerIndicator = screen.getByTestId("danger-indicator");
    expect(dangerIndicator).toHaveClass("bg-danger");
  });

  test("renders warning color", () => {
    render(ColorIndicator);
    const warningIndicator = screen.getByTestId("warning-indicator");
    expect(warningIndicator).toHaveClass("bg-warning");
  });
});

describe("Indicator - Sizes", () => {
  test("renders small size", () => {
    render(SizeIndicator);
    const smallIndicator = screen.getByTestId("sm-indicator");
    expect(smallIndicator).toHaveClass("w-2.5");
    expect(smallIndicator).toHaveClass("h-2.5");
  });

  test("renders medium size", () => {
    render(SizeIndicator);
    const mediumIndicator = screen.getByTestId("md-indicator");
    expect(mediumIndicator).toHaveClass("w-3");
    expect(mediumIndicator).toHaveClass("h-3");
  });

  test("renders large size", () => {
    render(SizeIndicator);
    const largeIndicator = screen.getByTestId("lg-indicator");
    expect(largeIndicator).toHaveClass("w-3.5");
    expect(largeIndicator).toHaveClass("h-3.5");
  });

  test("renders extra large size", () => {
    render(SizeIndicator);
    const xlIndicator = screen.getByTestId("xl-indicator");
    expect(xlIndicator).toHaveClass("w-6");
    expect(xlIndicator).toHaveClass("h-6");
  });
});

describe("Indicator - Border", () => {
  test("renders indicator without border by default", () => {
    render(BorderIndicator);
    const noBorderIndicator = screen.getByTestId("no-border-indicator");
    expect(noBorderIndicator).not.toHaveClass("border");
  });

  test("renders indicator with border", () => {
    render(BorderIndicator);
    const borderIndicator = screen.getByTestId("border-indicator");
    expect(borderIndicator).toHaveClass("border");
  });
});

describe("Indicator - Placement", () => {
  test("renders indicator with top-left placement", () => {
    render(PlacementIndicator);
    const topLeftIndicator = screen.getByTestId("top-left-indicator");
    expect(topLeftIndicator).toHaveClass("top-0");
    expect(topLeftIndicator).toHaveClass("start-0");
  });

  test("renders indicator with top-right placement", () => {
    render(PlacementIndicator);
    const topRightIndicator = screen.getByTestId("top-right-indicator");
    expect(topRightIndicator).toHaveClass("top-0");
    expect(topRightIndicator).toHaveClass("end-0");
  });

  test("renders indicator with bottom-left placement", () => {
    render(PlacementIndicator);
    const bottomLeftIndicator = screen.getByTestId("bottom-left-indicator");
    expect(bottomLeftIndicator).toHaveClass("bottom-0");
    expect(bottomLeftIndicator).toHaveClass("start-0");
  });

  test("renders indicator with bottom-right placement", () => {
    render(PlacementIndicator);
    const bottomRightIndicator = screen.getByTestId("bottom-right-indicator");
    expect(bottomRightIndicator).toHaveClass("bottom-0");
    expect(bottomRightIndicator).toHaveClass("end-0");
  });
});

describe("Indicator - Corner Style", () => {
  test("renders circular corner style", () => {
    render(CornerStyleIndicator);
    const circularIndicator = screen.getByTestId("circular-indicator");
    expect(circularIndicator).toHaveClass("rounded-full");
  });

  test("renders rounded corner style", () => {
    render(CornerStyleIndicator);
    const roundedIndicator = screen.getByTestId("rounded-indicator");
    expect(roundedIndicator).toHaveClass("rounded-sm");
  });
});
