import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import { userEvent } from "@testing-library/user-event";

import CheckRadioButtonTest from "./check-radio-button.test.svelte";
import RadioButtonGroupTest from "./radio-button-group.test.svelte";
import RadioButtonSizesTest from "./radio-button-sizes.test.svelte";
import RadioButtonColorsTest from "./radio-button-colors.test.svelte";
import RadioButtonVariantsTest from "./radio-button-variants.test.svelte";
import RadioButtonInlineTest from "./radio-button-inline.test.svelte";
import RadioButtonCustomTest from "./radio-button-custom.test.svelte";

afterEach(() => {
  cleanup();
});

describe("RadioButton - Basic Functionality", () => {
  test("renders radio buttons", () => {
    render(CheckRadioButtonTest);
    expect(screen.getByLabelText("A")).toBeInTheDocument();
    expect(screen.getByLabelText("B")).toBeInTheDocument();
  });

  test("radio buttons are initially unchecked", () => {
    render(CheckRadioButtonTest);
    const inputA = screen.getByLabelText("A");
    const inputB = screen.getByLabelText("B");

    expect(inputA).not.toBeChecked();
    expect(inputB).not.toBeChecked();
  });

  test("checking a radio button", async () => {
    const user = userEvent.setup();
    render(CheckRadioButtonTest);
    const inputA = screen.getByLabelText("A");
    const inputB = screen.getByLabelText("B");

    expect(inputA).not.toBeChecked();
    expect(inputB).not.toBeChecked();

    await user.click(inputB.parentElement!);

    expect(inputA).not.toBeChecked();
    expect(inputB).toBeChecked();
  });

  test("radio buttons are mutually exclusive", async () => {
    const user = userEvent.setup();
    render(CheckRadioButtonTest);
    const inputA = screen.getByLabelText("A");
    const inputB = screen.getByLabelText("B");

    await user.click(inputA.parentElement!);
    expect(inputA).toBeChecked();
    expect(inputB).not.toBeChecked();

    await user.click(inputB.parentElement!);
    expect(inputA).not.toBeChecked();
    expect(inputB).toBeChecked();
  });

  test("clicking same radio button keeps it checked", async () => {
    const user = userEvent.setup();
    render(CheckRadioButtonTest);
    const inputA = screen.getByLabelText("A");

    await user.click(inputA.parentElement!);
    expect(inputA).toBeChecked();

    await user.click(inputA.parentElement!);
    expect(inputA).toBeChecked();
  });
});

describe("RadioButton - Group Binding", () => {
  test("renders with pre-selected value", () => {
    render(RadioButtonGroupTest);
    const option1 = screen.getByLabelText("Option 1");
    const option2 = screen.getByLabelText("Option 2");
    const option3 = screen.getByLabelText("Option 3");

    expect(option1).not.toBeChecked();
    expect(option2).toBeChecked();
    expect(option3).not.toBeChecked();
  });

  test("displays selected value", () => {
    render(RadioButtonGroupTest);
    const selectedDisplay = screen.getByTestId("selected-value");
    expect(selectedDisplay).toHaveTextContent("option2");
  });

  test("updates displayed value when selection changes", async () => {
    const user = userEvent.setup();
    render(RadioButtonGroupTest);

    const option1 = screen.getByLabelText("Option 1");
    const option3 = screen.getByLabelText("Option 3");
    const selectedDisplay = screen.getByTestId("selected-value");

    expect(selectedDisplay).toHaveTextContent("option2");

    await user.click(option1.parentElement!);
    expect(selectedDisplay).toHaveTextContent("option1");

    await user.click(option3.parentElement!);
    expect(selectedDisplay).toHaveTextContent("option3");
  });

  test("ensures only one option is selected at a time", async () => {
    const user = userEvent.setup();
    render(RadioButtonGroupTest);

    const option1 = screen.getByLabelText("Option 1");
    const option2 = screen.getByLabelText("Option 2");
    const option3 = screen.getByLabelText("Option 3");

    await user.click(option1.parentElement!);
    expect(option1).toBeChecked();
    expect(option2).not.toBeChecked();
    expect(option3).not.toBeChecked();
  });
});

describe("RadioButton - Sizes", () => {
  test("renders radio buttons with different sizes", () => {
    render(RadioButtonSizesTest);
    expect(screen.getByText("Small")).toBeInTheDocument();
    expect(screen.getByText("Medium")).toBeInTheDocument();
    expect(screen.getByText("Large")).toBeInTheDocument();
    expect(screen.getByText("Extra Large")).toBeInTheDocument();
  });

  test("all sizes are clickable", async () => {
    const user = userEvent.setup();
    render(RadioButtonSizesTest);

    const small = screen.getByLabelText("Small");
    const large = screen.getByLabelText("Large");

    await user.click(small.parentElement!);
    expect(small).toBeChecked();

    await user.click(large.parentElement!);
    expect(large).toBeChecked();
    expect(small).not.toBeChecked();
  });
});

describe("RadioButton - Colors", () => {
  test("renders radio buttons with different colors", () => {
    render(RadioButtonColorsTest);
    expect(screen.getByText("Brand")).toBeInTheDocument();
    expect(screen.getByText("Danger")).toBeInTheDocument();
    expect(screen.getByText("Success")).toBeInTheDocument();
    expect(screen.getByText("Warning")).toBeInTheDocument();
  });

  test("colored radio buttons are functional", async () => {
    const user = userEvent.setup();
    render(RadioButtonColorsTest);

    const brand = screen.getByLabelText("Brand");
    const danger = screen.getByLabelText("Danger");

    await user.click(brand.parentElement!);
    expect(brand).toBeChecked();

    await user.click(danger.parentElement!);
    expect(danger).toBeChecked();
    expect(brand).not.toBeChecked();
  });
});

describe("RadioButton - Variants", () => {
  test("renders radio buttons with different variants", () => {
    render(RadioButtonVariantsTest);
    expect(screen.getByText("Pill Button")).toBeInTheDocument();
    expect(screen.getByText("Outline Button")).toBeInTheDocument();
    expect(screen.getByText("Pill & Outline")).toBeInTheDocument();
    expect(screen.getByText("Regular Button")).toBeInTheDocument();
  });

  test("variant radio buttons are functional", async () => {
    const user = userEvent.setup();
    render(RadioButtonVariantsTest);

    const pill = screen.getByLabelText("Pill Button");
    const outline = screen.getByLabelText("Outline Button");

    await user.click(pill.parentElement!);
    expect(pill).toBeChecked();

    await user.click(outline.parentElement!);
    expect(outline).toBeChecked();
    expect(pill).not.toBeChecked();
  });
});

describe("RadioButton - Inline Layout", () => {
  test("renders inline radio buttons", () => {
    render(RadioButtonInlineTest);
    expect(screen.getByText("Inline 1")).toBeInTheDocument();
    expect(screen.getByText("Inline 2")).toBeInTheDocument();
    expect(screen.getByText("Inline 3")).toBeInTheDocument();
  });

  test("inline radio buttons are functional", async () => {
    const user = userEvent.setup();
    render(RadioButtonInlineTest);

    const inline1 = screen.getByLabelText("Inline 1");
    const inline2 = screen.getByLabelText("Inline 2");

    await user.click(inline1.parentElement!);
    expect(inline1).toBeChecked();

    await user.click(inline2.parentElement!);
    expect(inline2).toBeChecked();
    expect(inline1).not.toBeChecked();
  });
});

describe("RadioButton - Custom Props", () => {
  test("renders with custom class", () => {
    render(RadioButtonCustomTest);
    const customRadio = screen.getByLabelText("Custom Radio");
    expect(customRadio.parentElement).toHaveClass("custom-class");
  });

  test("passes through data attributes", () => {
    render(RadioButtonCustomTest);
    const customRadio = screen.getByTestId("custom-radio");
    expect(customRadio).toBeInTheDocument();
  });

  test("respects disabled state", () => {
    render(RadioButtonCustomTest);
    const disabledRadio = screen.getByLabelText("Disabled Radio");
    expect(disabledRadio).toBeDisabled();
  });

  test("disabled radio button cannot be clicked", async () => {
    const user = userEvent.setup();
    render(RadioButtonCustomTest);
    const disabledRadio = screen.getByLabelText("Disabled Radio");

    expect(disabledRadio).not.toBeChecked();
    await user.click(disabledRadio.parentElement!);
    expect(disabledRadio).not.toBeChecked();
  });

  test("applies custom checked class when checked", async () => {
    const user = userEvent.setup();
    render(RadioButtonCustomTest);
    const customRadio = screen.getByLabelText("Custom Radio");

    await user.click(customRadio.parentElement!);
    expect(customRadio).toBeChecked();
    expect(customRadio.parentElement).toHaveClass("custom-checked-class");
  });
});

describe("RadioButton - Accessibility", () => {
  test("radio buttons are accessible via label", () => {
    render(CheckRadioButtonTest);
    const inputA = screen.getByLabelText("A");
    const inputB = screen.getByLabelText("B");

    expect(inputA).toBeInTheDocument();
    expect(inputB).toBeInTheDocument();
  });

  test("radio input has correct type attribute", () => {
    render(CheckRadioButtonTest);
    const inputA = screen.getByLabelText("A");
    expect(inputA).toHaveAttribute("type", "radio");
  });

  test("radio buttons in same group share name attribute", () => {
    render(CheckRadioButtonTest);
    const inputA = screen.getByLabelText("A");
    const inputB = screen.getByLabelText("B");

    expect(inputA).toHaveAttribute("name", "test");
    expect(inputB).toHaveAttribute("name", "test");
  });

  test("radio buttons have correct value attributes", () => {
    render(CheckRadioButtonTest);
    const inputA = screen.getByLabelText("A");
    const inputB = screen.getByLabelText("B");

    expect(inputA).toHaveAttribute("value", "A");
    expect(inputB).toHaveAttribute("value", "B");
  });
});
