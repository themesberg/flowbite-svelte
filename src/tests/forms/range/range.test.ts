import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import { userEvent } from "@testing-library/user-event";

import RangeBasicTest from "./range-basic.test.svelte";
import RangeValueBindingTest from "./range-value-binding.test.svelte";
import RangeColorsTest from "./range-colors.test.svelte";
import RangeSizesTest from "./range-sizes.test.svelte";
import RangeAttributesTest from "./range-attributes.test.svelte";
import RangeCustomPropsTest from "./range-custom-props.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Range - Basic", () => {
  test("renders range element", () => {
    render(RangeBasicTest);
    const range = screen.getByTestId("basic-range");
    expect(range).toBeInTheDocument();
  });

  test("renders as input element with type range", () => {
    render(RangeBasicTest);
    const range = screen.getByTestId("basic-range");
    expect(range.tagName).toBe("INPUT");
    expect(range).toHaveAttribute("type", "range");
  });

  test("has data-scope and data-part attributes", () => {
    render(RangeBasicTest);
    const range = screen.getByTestId("basic-range");
    expect(range).toHaveAttribute("data-scope", "range");
    expect(range).toHaveAttribute("data-part", "base");
  });

  test("range has default value of 50", () => {
    render(RangeBasicTest);
    const range = screen.getByTestId("basic-range") as HTMLInputElement;
    expect(range.value).toBe("50");
  });
});

describe("Range - Value Binding", () => {
  test("displays initial bound value", () => {
    render(RangeValueBindingTest);
    const range = screen.getByTestId("bound-range") as HTMLInputElement;
    const display = screen.getByTestId("display-value");

    expect(range.value).toBe("50");
    expect(display).toHaveTextContent("50");
  });

  test("updates display when range value changes", async () => {
    render(RangeValueBindingTest);

    const range = screen.getByTestId("bound-range") as HTMLInputElement;
    const display = screen.getByTestId("display-value");

    // Change the value directly
    range.value = "75";
    range.dispatchEvent(new Event("input", { bubbles: true }));

    // Wait for reactivity
    await new Promise(resolve => setTimeout(resolve, 0));

    expect(range.value).toBe("75");
    expect(display.textContent).toBe("75");
  });

  test("range value can be modified programmatically", async () => {
    render(RangeValueBindingTest);

    const range = screen.getByTestId("bound-range") as HTMLInputElement;
    const display = screen.getByTestId("display-value");
    
    // Set value to 25
    range.value = "25";
    range.dispatchEvent(new Event("input", { bubbles: true }));

    await new Promise(resolve => setTimeout(resolve, 0));

    expect(range.value).toBe("25");
    expect(display.textContent).toBe("25");
  });
});

describe("Range - Colors", () => {
  test("renders ranges with different colors", () => {
    render(RangeColorsTest);
    expect(screen.getByTestId("blue-range")).toBeInTheDocument();
    expect(screen.getByTestId("green-range")).toBeInTheDocument();
    expect(screen.getByTestId("red-range")).toBeInTheDocument();
    expect(screen.getByTestId("purple-range")).toBeInTheDocument();
    expect(screen.getByTestId("yellow-range")).toBeInTheDocument();
  });

  test("all color variants are range input elements", () => {
    render(RangeColorsTest);
    expect(screen.getByTestId("blue-range")).toHaveAttribute("type", "range");
    expect(screen.getByTestId("green-range")).toHaveAttribute("type", "range");
    expect(screen.getByTestId("red-range")).toHaveAttribute("type", "range");
    expect(screen.getByTestId("purple-range")).toHaveAttribute("type", "range");
    expect(screen.getByTestId("yellow-range")).toHaveAttribute("type", "range");
  });
});

describe("Range - Sizes", () => {
  test("renders ranges with different sizes", () => {
    render(RangeSizesTest);
    expect(screen.getByTestId("small-range")).toBeInTheDocument();
    expect(screen.getByTestId("medium-range")).toBeInTheDocument();
    expect(screen.getByTestId("large-range")).toBeInTheDocument();
  });

  test("all size variants are range input elements", () => {
    render(RangeSizesTest);
    expect(screen.getByTestId("small-range")).toHaveAttribute("type", "range");
    expect(screen.getByTestId("medium-range")).toHaveAttribute("type", "range");
    expect(screen.getByTestId("large-range")).toHaveAttribute("type", "range");
  });
});

describe("Range - Attributes", () => {
  test("renders with min and max attributes", () => {
    render(RangeAttributesTest);
    const range = screen.getByTestId("min-max-range") as HTMLInputElement;
    
    expect(range).toHaveAttribute("min", "0");
    expect(range).toHaveAttribute("max", "100");
  });

  test("respects step attribute", () => {
    render(RangeAttributesTest);
    const range = screen.getByTestId("step-range") as HTMLInputElement;
    
    expect(range).toHaveAttribute("step", "5");
  });

  test("supports negative range values", () => {
    render(RangeAttributesTest);
    const range = screen.getByTestId("negative-range") as HTMLInputElement;
    
    expect(range).toHaveAttribute("min", "-50");
    expect(range).toHaveAttribute("max", "50");
  });

  test("supports decimal step values", () => {
    render(RangeAttributesTest);
    const range = screen.getByTestId("decimal-range") as HTMLInputElement;
    
    expect(range).toHaveAttribute("min", "0");
    expect(range).toHaveAttribute("max", "1");
    expect(range).toHaveAttribute("step", "0.1");
  });
});

describe("Range - Custom Props", () => {
  test("renders with custom class", () => {
    render(RangeCustomPropsTest);
    const range = screen.getByTestId("custom-class-range");
    expect(range).toHaveClass("custom-range-class");
  });

  test("passes through custom id", () => {
    render(RangeCustomPropsTest);
    const range = screen.getByTestId("custom-class-range");
    expect(range).toHaveAttribute("id", "custom-range-id");
  });

  test("custom id is accessible", () => {
    render(RangeCustomPropsTest);
    const range = document.getElementById("custom-range-id");
    expect(range).toBeInTheDocument();
  });

  test("supports disabled state", () => {
    render(RangeCustomPropsTest);
    const range = screen.getByTestId("disabled-range");
    expect(range).toBeDisabled();
  });

  test("passes through name attribute", () => {
    render(RangeCustomPropsTest);
    const range = screen.getByTestId("named-range");
    expect(range).toHaveAttribute("name", "custom-range");
  });
});

describe("Range - User Interaction", () => {
  test("can be focused", async () => {
    const user = userEvent.setup();
    render(RangeBasicTest);

    const range = screen.getByTestId("basic-range") as HTMLInputElement;

    await user.click(range);
    expect(range).toHaveFocus();
  });

  test("disabled range cannot be interacted with", async () => {
    const user = userEvent.setup();
    render(RangeCustomPropsTest);

    const range = screen.getByTestId("disabled-range") as HTMLInputElement;
    const initialValue = range.value;

    // Attempt to interact should not change value
    await user.click(range);
    expect(range.value).toBe(initialValue);
  });

  test("value changes on programmatic update", async () => {
    render(RangeValueBindingTest);
    const range = screen.getByTestId("bound-range") as HTMLInputElement;
    const display = screen.getByTestId("display-value");
    const initialValue = range.value;

    // Manually change value
    range.value = "80";
    range.dispatchEvent(new Event("input", { bubbles: true }));

    await new Promise(resolve => setTimeout(resolve, 0));

    expect(range.value).not.toBe(initialValue);
    expect(range.value).toBe("80");
    expect(display.textContent).toBe("80");
  });
});
