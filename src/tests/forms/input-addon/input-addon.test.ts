import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import InputAddonBasicTest from "./input-addon-basic.test.svelte";
import InputAddonSizesTest from "./input-addon-sizes.test.svelte";
import InputAddonCustomPropsTest from "./input-addon-custom-props.test.svelte";

afterEach(() => {
  cleanup();
});

describe("InputAddon - Basic", () => {
  test("renders input addon", () => {
    render(InputAddonBasicTest);
    expect(screen.getByText("@")).toBeInTheDocument();
  });

  test("renders as div element", () => {
    render(InputAddonBasicTest);
    const addon = screen.getByText("@");
    expect(addon.tagName).toBe("DIV");
  });
});

describe("InputAddon - Sizes", () => {
  test("renders input addon with different sizes", () => {
    render(InputAddonSizesTest);
    expect(screen.getByText("Small")).toBeInTheDocument();
    expect(screen.getByText("Medium")).toBeInTheDocument();
    expect(screen.getByText("Large")).toBeInTheDocument();
  });

  test("all size variants render as div elements", () => {
    render(InputAddonSizesTest);
    expect(screen.getByText("Small").tagName).toBe("DIV");
    expect(screen.getByText("Medium").tagName).toBe("DIV");
    expect(screen.getByText("Large").tagName).toBe("DIV");
  });
});

describe("InputAddon - Custom Props", () => {
  test("renders with custom class", () => {
    render(InputAddonCustomPropsTest);
    const addon = screen.getByText("Custom Addon");
    expect(addon).toHaveClass("custom-addon");
  });

  test("passes through data attributes", () => {
    render(InputAddonCustomPropsTest);
    const addon = screen.getByTestId("test-addon");
    expect(addon).toBeInTheDocument();
    expect(addon).toHaveTextContent("Custom Addon");
  });

  test("passes through id attribute", () => {
    render(InputAddonCustomPropsTest);
    const addon = document.getElementById("addon-id");
    expect(addon).toBeInTheDocument();
    expect(addon).toHaveTextContent("Custom Addon");
  });

  test("supports arbitrary HTML attributes", () => {
    render(InputAddonCustomPropsTest);
    const addon = screen.getByTestId("test-addon");
    expect(addon).toHaveAttribute("id", "addon-id");
  });
});
