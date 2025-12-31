import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import HelperBasicTest from "./helper-basic.test.svelte";
import HelperColorsTest from "./helper-colors.test.svelte";
import HelperCustomPropsTest from "./helper-custom-props.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Helper - Basic", () => {
  test("renders helper text", () => {
    render(HelperBasicTest);
    expect(screen.getByText("This is a helper text")).toBeInTheDocument();
  });

  test("renders as paragraph element", () => {
    render(HelperBasicTest);
    const helper = screen.getByText("This is a helper text");
    expect(helper.tagName).toBe("P");
  });
});

describe("Helper - Colors", () => {
  test("renders helper with different colors", () => {
    render(HelperColorsTest);
    expect(screen.getByText("Brand helper text")).toBeInTheDocument();
    expect(screen.getByText("Gray helper text")).toBeInTheDocument();
    expect(screen.getByText("Success helper text")).toBeInTheDocument();
    expect(screen.getByText("Error helper text")).toBeInTheDocument();
  });

  test("all color variants render as paragraph elements", () => {
    render(HelperColorsTest);
    expect(screen.getByText("Brand helper text").tagName).toBe("P");
    expect(screen.getByText("Gray helper text").tagName).toBe("P");
    expect(screen.getByText("Success helper text").tagName).toBe("P");
    expect(screen.getByText("Error helper text").tagName).toBe("P");
  });
});

describe("Helper - Custom Props", () => {
  test("renders with custom class", () => {
    render(HelperCustomPropsTest);
    const helper = screen.getByText("Helper with custom props");
    expect(helper).toHaveClass("custom-class");
  });

  test("passes through data attributes", () => {
    render(HelperCustomPropsTest);
    const helper = screen.getByTestId("custom-helper");
    expect(helper).toBeInTheDocument();
    expect(helper).toHaveTextContent("Helper with custom props");
  });

  test("passes through id attribute", () => {
    render(HelperCustomPropsTest);
    const helper = document.getElementById("helper-id");
    expect(helper).toBeInTheDocument();
    expect(helper).toHaveTextContent("Helper with custom props");
  });

  test("supports arbitrary HTML attributes", () => {
    render(HelperCustomPropsTest);
    const helper = screen.getByTestId("custom-helper");
    expect(helper).toHaveAttribute("id", "helper-id");
  });
});
