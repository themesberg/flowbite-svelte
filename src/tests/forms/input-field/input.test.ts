import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import { userEvent } from "@testing-library/user-event";

import InputBasicTest from "./input-basic.test.svelte";
import InputTypesTest from "./input-types.test.svelte";
import InputSizesTest from "./input-sizes.test.svelte";
import InputValueBindingTest from "./input-value-binding.test.svelte";
import InputClearableTest from "./input-clearable.test.svelte";
import InputStatesTest from "./input-states.test.svelte";
import InputCustomPropsTest from "./input-custom-props.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Input - Basic", () => {
  test("renders input element", () => {
    render(InputBasicTest);
    const input = screen.getByTestId("basic-input");
    expect(input).toBeInTheDocument();
  });

  test("renders as input element", () => {
    render(InputBasicTest);
    const input = screen.getByTestId("basic-input");
    expect(input.tagName).toBe("INPUT");
  });

  test("displays placeholder text", () => {
    render(InputBasicTest);
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
  });

  test("input is initially empty", () => {
    render(InputBasicTest);
    const input = screen.getByTestId("basic-input") as HTMLInputElement;
    expect(input.value).toBe("");
  });
});

describe("Input - Types", () => {
  test("renders different input types", () => {
    render(InputTypesTest);
    expect(screen.getByTestId("text-input")).toBeInTheDocument();
    expect(screen.getByTestId("email-input")).toBeInTheDocument();
    expect(screen.getByTestId("password-input")).toBeInTheDocument();
    expect(screen.getByTestId("number-input")).toBeInTheDocument();
    expect(screen.getByTestId("tel-input")).toBeInTheDocument();
    expect(screen.getByTestId("url-input")).toBeInTheDocument();
  });

  test("inputs have correct type attributes", () => {
    render(InputTypesTest);
    expect(screen.getByTestId("text-input")).toHaveAttribute("type", "text");
    expect(screen.getByTestId("email-input")).toHaveAttribute("type", "email");
    expect(screen.getByTestId("password-input")).toHaveAttribute("type", "password");
    expect(screen.getByTestId("number-input")).toHaveAttribute("type", "number");
    expect(screen.getByTestId("tel-input")).toHaveAttribute("type", "tel");
    expect(screen.getByTestId("url-input")).toHaveAttribute("type", "url");
  });
});

describe("Input - Sizes", () => {
  test("renders inputs with different sizes", () => {
    render(InputSizesTest);
    expect(screen.getByTestId("small-input")).toBeInTheDocument();
    expect(screen.getByTestId("medium-input")).toBeInTheDocument();
    expect(screen.getByTestId("large-input")).toBeInTheDocument();
  });

  test("all size variants are input elements", () => {
    render(InputSizesTest);
    expect(screen.getByTestId("small-input").tagName).toBe("INPUT");
    expect(screen.getByTestId("medium-input").tagName).toBe("INPUT");
    expect(screen.getByTestId("large-input").tagName).toBe("INPUT");
  });
});

describe("Input - Value Binding", () => {
  test("displays initial bound value", () => {
    render(InputValueBindingTest);
    const input = screen.getByTestId("bound-input") as HTMLInputElement;
    const display = screen.getByTestId("display-value");

    expect(input.value).toBe("Initial value");
    expect(display).toHaveTextContent("Initial value");
  });

  test("updates display when input value changes", async () => {
    const user = userEvent.setup();
    render(InputValueBindingTest);

    const input = screen.getByTestId("bound-input") as HTMLInputElement;
    const display = screen.getByTestId("display-value");

    await user.clear(input);
    await user.type(input, "New value");

    expect(input.value).toBe("New value");
    expect(display).toHaveTextContent("New value");
  });

  test("input is editable", async () => {
    const user = userEvent.setup();
    render(InputValueBindingTest);

    const input = screen.getByTestId("bound-input") as HTMLInputElement;

    await user.clear(input);
    expect(input.value).toBe("");

    await user.type(input, "Test");
    expect(input.value).toBe("Test");
  });
});

describe("Input - Clearable", () => {
  test("renders clearable input with value", () => {
    render(InputClearableTest);
    const input = screen.getByTestId("clearable-input") as HTMLInputElement;
    expect(input.value).toBe("Clearable text");
  });

  test("shows close button when clearable input has value", () => {
    render(InputClearableTest);
    const input = screen.getByTestId("clearable-input") as HTMLInputElement;

    expect(input.value).toBe("Clearable text");
    // Close button should be present when there's a value
    const closeButton = screen.queryByLabelText("Clear search value");
    expect(closeButton).toBeInTheDocument();
  });

  test("does not show close button when clearable input is empty", () => {
    render(InputClearableTest);

    // First input has value, so it has a close button
    const inputWithValue = screen.getByTestId("clearable-input") as HTMLInputElement;
    expect(inputWithValue.value).toBe("Clearable text");

    // Empty input should not have a close button
    const emptyInput = screen.getByTestId("empty-clearable-input") as HTMLInputElement;
    expect(emptyInput.value).toBe("");

    // There should be only one close button (from the first input with value)
    const closeButtons = screen.queryAllByLabelText("Clear search value");
    expect(closeButtons).toHaveLength(1);
  });

  test("close button clears input value", async () => {
    const user = userEvent.setup();
    render(InputClearableTest);

    const input = screen.getByTestId("clearable-input") as HTMLInputElement;
    expect(input.value).toBe("Clearable text");

    const closeButton = screen.getByLabelText("Clear search value");
    expect(closeButton).toBeInTheDocument();

    await user.click(closeButton);

    // Value should be cleared
    expect(input.value).toBe("");
  });
});

describe("Input - States", () => {
  test("renders inputs with different states", () => {
    render(InputStatesTest);
    expect(screen.getByTestId("default-input")).toBeInTheDocument();
    expect(screen.getByTestId("tinted-input")).toBeInTheDocument();
    expect(screen.getByTestId("disabled-input")).toBeInTheDocument();
    expect(screen.getByTestId("readonly-input")).toBeInTheDocument();
  });

  test("disabled input cannot be edited", async () => {
    const user = userEvent.setup();
    render(InputStatesTest);

    const disabledInput = screen.getByTestId("disabled-input") as HTMLInputElement;
    expect(disabledInput).toBeDisabled();

    // Attempt to type should not change value
    await user.type(disabledInput, "test");
    expect(disabledInput.value).toBe("");
  });

  test("readonly input cannot be edited", async () => {
    const user = userEvent.setup();
    render(InputStatesTest);

    const readonlyInput = screen.getByTestId("readonly-input") as HTMLInputElement;
    expect(readonlyInput).toHaveAttribute("readonly");
    expect(readonlyInput.value).toBe("Readonly");

    // Attempt to type should not change value
    await user.type(readonlyInput, "test");
    expect(readonlyInput.value).toBe("Readonly");
  });

  test("default and tinted inputs are editable", async () => {
    const user = userEvent.setup();
    render(InputStatesTest);

    const defaultInput = screen.getByTestId("default-input") as HTMLInputElement;
    const tintedInput = screen.getByTestId("tinted-input") as HTMLInputElement;

    await user.type(defaultInput, "test1");
    expect(defaultInput.value).toBe("test1");

    await user.type(tintedInput, "test2");
    expect(tintedInput.value).toBe("test2");
  });
});

describe("Input - Custom Props", () => {
  test("renders with custom class", () => {
    render(InputCustomPropsTest);
    const input = screen.getByTestId("custom-input");
    expect(input).toHaveClass("custom-input-class");
  });

  test("passes through custom attributes", () => {
    render(InputCustomPropsTest);
    const input = screen.getByTestId("custom-input") as HTMLInputElement;

    expect(input).toHaveAttribute("id", "custom-id");
    expect(input).toHaveAttribute("name", "custom-name");
    expect(input).toHaveAttribute("required");
    expect(input).toHaveAttribute("maxlength", "50");
    expect(input).toHaveAttribute("minlength", "5");
  });

  test("custom id is accessible", () => {
    render(InputCustomPropsTest);
    const input = document.getElementById("custom-id");
    expect(input).toBeInTheDocument();
  });

  test("required attribute is enforced", () => {
    render(InputCustomPropsTest);
    const input = screen.getByTestId("custom-input") as HTMLInputElement;
    expect(input.required).toBe(true);
  });
});

describe("Input - User Interaction", () => {
  test("accepts user input", async () => {
    const user = userEvent.setup();
    render(InputBasicTest);

    const input = screen.getByTestId("basic-input") as HTMLInputElement;

    await user.type(input, "Hello World");
    expect(input.value).toBe("Hello World");
  });

  test("can be focused", async () => {
    const user = userEvent.setup();
    render(InputBasicTest);

    const input = screen.getByTestId("basic-input") as HTMLInputElement;

    await user.click(input);
    expect(input).toHaveFocus();
  });

  test("can be cleared and retyped", async () => {
    const user = userEvent.setup();
    render(InputBasicTest);

    const input = screen.getByTestId("basic-input") as HTMLInputElement;

    await user.type(input, "First text");
    expect(input.value).toBe("First text");

    await user.clear(input);
    expect(input.value).toBe("");

    await user.type(input, "Second text");
    expect(input.value).toBe("Second text");
  });
});
