import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import ToggleBasic from "./toggle-basic.test.svelte";
import ToggleSizes from "./toggle-sizes.test.svelte";
import ToggleDisabled from "./toggle-disabled.test.svelte";
import ToggleColors from "./toggle-colors.test.svelte";
import ToggleOffLabel from "./toggle-offlabel.test.svelte";
import ToggleValue from "./toggle-value.test.svelte";
import TogglePrechecked from "./toggle-prechecked.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Toggle - Basic Functionality", () => {
  test("renders toggle with label", () => {
    render(ToggleBasic);
    const wrapper = screen.getByTestId("basic-toggle");
    const toggle = wrapper.querySelector('[data-scope="toggle"]');
    expect(toggle).toBeInTheDocument();
  });

  test("renders unchecked by default", () => {
    render(ToggleBasic);
    const wrapper = screen.getByTestId("basic-toggle");
    const checkbox = wrapper.querySelector('[data-part="input"]') as HTMLInputElement;
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toBe(false);
  });

  test("toggles checked state on click", async () => {
    const user = userEvent.setup();
    render(ToggleBasic);
    const wrapper = screen.getByTestId("basic-toggle");
    const toggle = wrapper.querySelector('[data-scope="toggle"]') as HTMLElement;
    const checkbox = wrapper.querySelector('[data-part="input"]') as HTMLInputElement;

    expect(checkbox.checked).toBe(false);
    await user.click(toggle);
    expect(checkbox.checked).toBe(true);
    await user.click(toggle);
    expect(checkbox.checked).toBe(false);
  });

  test("has required data attributes", () => {
    render(ToggleBasic);
    const wrapper = screen.getByTestId("basic-toggle");
    const toggle = wrapper.querySelector('[data-scope="toggle"]') as HTMLElement;
    expect(toggle.getAttribute("data-scope")).toBe("toggle");
    expect(toggle.getAttribute("data-part")).toBe("label");
  });

  test("renders track element", () => {
    render(ToggleBasic);
    const wrapper = screen.getByTestId("basic-toggle");
    const track = wrapper.querySelector('[data-part="track"]');
    expect(track).toBeInTheDocument();
  });
});

describe("Toggle - Sizes", () => {
  test("renders small toggle", () => {
    render(ToggleSizes);
    const wrapper = screen.getByTestId("small-toggle");
    const toggle = wrapper.querySelector('[data-scope="toggle"]');
    expect(toggle).toBeInTheDocument();
  });

  test("renders default toggle", () => {
    render(ToggleSizes);
    const wrapper = screen.getByTestId("default-toggle");
    const toggle = wrapper.querySelector('[data-scope="toggle"]');
    expect(toggle).toBeInTheDocument();
  });

  test("renders large toggle", () => {
    render(ToggleSizes);
    const wrapper = screen.getByTestId("large-toggle");
    const toggle = wrapper.querySelector('[data-scope="toggle"]');
    expect(toggle).toBeInTheDocument();
  });

  test("all size toggles are independently clickable", async () => {
    const user = userEvent.setup();
    render(ToggleSizes);

    const smallWrapper = screen.getByTestId("small-toggle");
    const defaultWrapper = screen.getByTestId("default-toggle");
    const largeWrapper = screen.getByTestId("large-toggle");

    const smallToggle = smallWrapper.querySelector('[data-scope="toggle"]') as HTMLElement;

    const largeToggle = largeWrapper.querySelector('[data-scope="toggle"]') as HTMLElement;

    const smallCheckbox = smallWrapper.querySelector('[data-part="input"]') as HTMLInputElement;
    const defaultCheckbox = defaultWrapper.querySelector('[data-part="input"]') as HTMLInputElement;
    const largeCheckbox = largeWrapper.querySelector('[data-part="input"]') as HTMLInputElement;

    await user.click(smallToggle);
    expect(smallCheckbox.checked).toBe(true);
    expect(defaultCheckbox.checked).toBe(false);
    expect(largeCheckbox.checked).toBe(false);

    await user.click(largeToggle);
    expect(smallCheckbox.checked).toBe(true);
    expect(defaultCheckbox.checked).toBe(false);
    expect(largeCheckbox.checked).toBe(true);
  });
});

describe("Toggle - Disabled State", () => {
  test("renders disabled toggle", () => {
    render(ToggleDisabled);
    const wrapper = screen.getByTestId("disabled-toggle");
    const checkbox = wrapper.querySelector('[data-part="input"]') as HTMLInputElement;

    expect(checkbox).toBeDisabled();
  });

  test("prevents toggling when disabled", async () => {
    const user = userEvent.setup();
    render(ToggleDisabled);
    const wrapper = screen.getByTestId("disabled-toggle");
    const toggle = wrapper.querySelector('[data-scope="toggle"]') as HTMLElement;
    const checkbox = wrapper.querySelector('[data-part="input"]') as HTMLInputElement;

    expect(checkbox.checked).toBe(false);
    await user.click(toggle);
    expect(checkbox.checked).toBe(false);
  });
});

describe("Toggle - Colors", () => {
  test("renders toggle with primary color", () => {
    render(ToggleColors);
    const wrapper = screen.getByTestId("primary-toggle");
    const toggle = wrapper.querySelector('[data-scope="toggle"]');
    expect(toggle).toBeInTheDocument();
  });

  test("renders toggle with red color", () => {
    render(ToggleColors);
    const wrapper = screen.getByTestId("red-toggle");
    const toggle = wrapper.querySelector('[data-scope="toggle"]');
    expect(toggle).toBeInTheDocument();
  });

  test("renders toggle with green color", () => {
    render(ToggleColors);
    const wrapper = screen.getByTestId("green-toggle");
    const toggle = wrapper.querySelector('[data-scope="toggle"]');
    expect(toggle).toBeInTheDocument();
  });

  test("all colored toggles function independently", async () => {
    const user = userEvent.setup();
    render(ToggleColors);

    const primaryWrapper = screen.getByTestId("primary-toggle");
    const redWrapper = screen.getByTestId("red-toggle");
    const greenWrapper = screen.getByTestId("green-toggle");

    const primaryToggle = primaryWrapper.querySelector('[data-scope="toggle"]') as HTMLElement;

    const greenToggle = greenWrapper.querySelector('[data-scope="toggle"]') as HTMLElement;

    const primaryCheckbox = primaryWrapper.querySelector('[data-part="input"]') as HTMLInputElement;
    const redCheckbox = redWrapper.querySelector('[data-part="input"]') as HTMLInputElement;
    const greenCheckbox = greenWrapper.querySelector('[data-part="input"]') as HTMLInputElement;

    await user.click(primaryToggle);
    await user.click(greenToggle);

    expect(primaryCheckbox.checked).toBe(true);
    expect(redCheckbox.checked).toBe(false);
    expect(greenCheckbox.checked).toBe(true);
  });
});

describe("Toggle - Off Label", () => {
  test("renders toggle with off label", () => {
    render(ToggleOffLabel);
    const wrapper = screen.getByTestId("offlabel-toggle");
    const toggle = wrapper.querySelector('[data-scope="toggle"]');
    const offLabel = screen.getByTestId("off-label");

    expect(toggle).toBeInTheDocument();
    expect(offLabel).toBeInTheDocument();
  });

  test("maintains off label presence when toggled", async () => {
    const user = userEvent.setup();
    render(ToggleOffLabel);
    const wrapper = screen.getByTestId("offlabel-toggle");
    const toggle = wrapper.querySelector('[data-scope="toggle"]') as HTMLElement;
    const offLabel = screen.getByTestId("off-label");

    await user.click(toggle);
    expect(offLabel).toBeInTheDocument();
  });
});

describe("Toggle - Value Attribute", () => {
  test("renders toggle with value attribute", () => {
    render(ToggleValue);
    const wrapper = screen.getByTestId("value-toggle");
    const checkbox = wrapper.querySelector('[data-part="input"]') as HTMLInputElement;

    expect(checkbox.value).toBe("newsletter");
  });

  test("value persists when toggled", async () => {
    const user = userEvent.setup();
    render(ToggleValue);
    const wrapper = screen.getByTestId("value-toggle");
    const toggle = wrapper.querySelector('[data-scope="toggle"]') as HTMLElement;
    const checkbox = wrapper.querySelector('[data-part="input"]') as HTMLInputElement;

    await user.click(toggle);
    expect(checkbox.value).toBe("newsletter");
    expect(checkbox.checked).toBe(true);
  });
});

describe("Toggle - Pre-checked State", () => {
  test("renders pre-checked toggle", () => {
    render(TogglePrechecked);
    const wrapper = screen.getByTestId("prechecked-toggle");
    const checkbox = wrapper.querySelector('[data-part="input"]') as HTMLInputElement;

    expect(checkbox.checked).toBe(true);
  });

  test("can toggle off from pre-checked state", async () => {
    const user = userEvent.setup();
    render(TogglePrechecked);
    const wrapper = screen.getByTestId("prechecked-toggle");
    const toggle = wrapper.querySelector('[data-scope="toggle"]') as HTMLElement;
    const checkbox = wrapper.querySelector('[data-part="input"]') as HTMLInputElement;

    expect(checkbox.checked).toBe(true);
    await user.click(toggle);
    expect(checkbox.checked).toBe(false);
  });

  test("can toggle back on", async () => {
    const user = userEvent.setup();
    render(TogglePrechecked);
    const wrapper = screen.getByTestId("prechecked-toggle");
    const toggle = wrapper.querySelector('[data-scope="toggle"]') as HTMLElement;
    const checkbox = wrapper.querySelector('[data-part="input"]') as HTMLInputElement;

    await user.click(toggle);
    expect(checkbox.checked).toBe(false);
    await user.click(toggle);
    expect(checkbox.checked).toBe(true);
  });
});
