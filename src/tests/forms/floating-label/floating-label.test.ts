import { cleanup, render, screen, waitFor } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import { userEvent } from "@testing-library/user-event";

import FloatingLabelBasicTest from "./floating-label-basic.test.svelte";
import FloatingLabelVariantsTest from "./floating-label-variants.test.svelte";
import FloatingLabelValidationTest from "./floating-label-validation.test.svelte";
import FloatingLabelDisabledTest from "./floating-label-disabled.test.svelte";
import FloatingLabelIconTest from "./floating-label-icon.test.svelte";
import FloatingLabelValueTest from "./floating-label-value.test.svelte";
import FloatingLabelClearableTest from "./floating-label-clearable.test.svelte";
import FloatingLabelSuggestionsTest from "./floating-label-suggestions.test.svelte";
import FloatingLabelSizesTest from "./floating-label-sizes.test.svelte";

afterEach(() => {
  cleanup();
});

describe("FloatingLabelInput - Basic", () => {
  test("renders floating label input", () => {
    render(FloatingLabelBasicTest);
    const input = screen.getByLabelText("Basic Label");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("id", "test-basic");
    expect(input).toHaveAttribute("name", "test-basic");
  });

  test("has correct label for input", () => {
    render(FloatingLabelBasicTest);
    const label = screen.getByText("Basic Label");
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute("for", "test-basic");
  });

  test("input is focusable", async () => {
    const user = userEvent.setup();
    render(FloatingLabelBasicTest);
    const input = screen.getByLabelText("Basic Label");

    await user.click(input);
    expect(input).toHaveFocus();
  });

  test("input accepts text input", async () => {
    const user = userEvent.setup();
    render(FloatingLabelBasicTest);
    const input = screen.getByLabelText("Basic Label") as HTMLInputElement;

    await user.type(input, "Test input");
    expect(input.value).toBe("Test input");
  });
});

describe("FloatingLabelInput - Variants", () => {
  test("renders filled variant", () => {
    render(FloatingLabelVariantsTest);
    const input = screen.getByLabelText("Filled Variant");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("rounded-t-base");
    expect(input).toHaveClass("bg-neutral-secondary-medium");
  });

  test("renders outlined variant", () => {
    render(FloatingLabelVariantsTest);
    const input = screen.getByLabelText("Outlined Variant");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("rounded-base");
    expect(input).toHaveClass("border-1");
  });

  test("renders standard variant", () => {
    render(FloatingLabelVariantsTest);
    const input = screen.getByLabelText("Standard Variant");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("border-b-2");
  });
});

describe("FloatingLabelInput - Sizes", () => {
  test("renders small size", () => {
    render(FloatingLabelSizesTest);
    const input = screen.getByLabelText("Small Size");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("pb-1.5");
    expect(input).toHaveClass("pt-4");
  });

  test("renders default size", () => {
    render(FloatingLabelSizesTest);
    const input = screen.getByLabelText("Default Size");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("pb-2.5");
    expect(input).toHaveClass("pt-5");
  });
});

describe("FloatingLabelInput - Validation", () => {
  test("renders default validation state", () => {
    render(FloatingLabelValidationTest);
    const input = screen.getByLabelText("None Validation");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("border-default-medium");
  });

  test("renders success validation state", () => {
    render(FloatingLabelValidationTest);
    const input = screen.getByLabelText("Success Validation");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("border-success");
  });

  test("renders error validation state", () => {
    render(FloatingLabelValidationTest);
    const input = screen.getByLabelText("Error Validation");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("border-danger");
  });

  test("success validation applies correct label color", () => {
    render(FloatingLabelValidationTest);
    const label = screen.getByText("Success Validation");
    expect(label).toHaveClass("text-fg-success-strong");
  });

  test("error validation applies correct label color", () => {
    render(FloatingLabelValidationTest);
    const label = screen.getByText("Error Validation");
    expect(label).toHaveClass("text-fg-danger-strong");
  });
});

describe("FloatingLabelInput - Disabled", () => {
  test("renders disabled input", () => {
    render(FloatingLabelDisabledTest);
    const input = screen.getByLabelText("Disabled Label");
    expect(input).toBeInTheDocument();
    expect(input).toBeDisabled();
  });

  test("disabled input has correct styling", () => {
    render(FloatingLabelDisabledTest);
    const input = screen.getByLabelText("Disabled Label");
    expect(input).toHaveClass("cursor-not-allowed");
    expect(input).toHaveClass("opacity-50");
  });

  test("disabled label has correct styling", () => {
    render(FloatingLabelDisabledTest);
    const label = screen.getByText("Disabled Label");
    expect(label).toHaveClass("text-fg-disabled");
    expect(label).toHaveClass("cursor-not-allowed");
  });

  test("disabled input is not focusable by clicking", async () => {
    const user = userEvent.setup();
    render(FloatingLabelDisabledTest);
    const input = screen.getByLabelText("Disabled Label");

    await user.click(input);
    expect(input).not.toHaveFocus();
  });

  test("disabled input does not accept text input", async () => {
    const user = userEvent.setup();
    render(FloatingLabelDisabledTest);
    const input = screen.getByLabelText("Disabled Label") as HTMLInputElement;

    await user.type(input, "Test");
    expect(input.value).toBe("");
  });
});

describe("FloatingLabelInput - With Icon", () => {
  test("renders input with icon", () => {
    render(FloatingLabelIconTest);
    const input = screen.getByLabelText("Email");
    const icon = screen.getByTestId("icon-svg");

    expect(input).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  test("label has inline-flex for icon alignment", () => {
    render(FloatingLabelIconTest);
    const label = screen.getByText("Email").closest("label");
    expect(label).toHaveClass("inline-flex");
    expect(label).toHaveClass("items-center");
  });
});

describe("FloatingLabelInput - Value Binding", () => {
  test("displays initial value", () => {
    render(FloatingLabelValueTest);
    const input = screen.getByLabelText("Value Binding") as HTMLInputElement;
    const display = screen.getByTestId("value-display");

    expect(input.value).toBe("Initial value");
    expect(display).toHaveTextContent("Initial value");
  });

  test("updates value on input", async () => {
    const user = userEvent.setup();
    render(FloatingLabelValueTest);
    const input = screen.getByLabelText("Value Binding") as HTMLInputElement;
    const display = screen.getByTestId("value-display");

    await user.clear(input);
    await user.type(input, "New value");

    expect(input.value).toBe("New value");
    expect(display).toHaveTextContent("New value");
  });
});

describe("FloatingLabelInput - Clearable", () => {
  test("does not show clear button when input is empty", () => {
    render(FloatingLabelClearableTest);
    const input = screen.getByLabelText("Clearable Input") as HTMLInputElement;

    // Clear the input first
    input.value = "";
    input.dispatchEvent(new Event("input", { bubbles: true }));

    const clearButton = input.parentElement?.querySelector('[aria-label="Clear search value"]');
    expect(clearButton).not.toBeInTheDocument();
  });

  test("shows clear button when input has value", async () => {
    render(FloatingLabelClearableTest);
    const input = screen.getByLabelText("Clearable Input") as HTMLInputElement;

    expect(input.value).toBe("Clearable text");
    
    // Wait for Svelte reactivity to update the DOM
    await waitFor(
      () => {
        const clearButton = input.parentElement?.querySelector('[aria-label="Clear search value"]');
        expect(clearButton).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });

  test("clears value when clear button is clicked", async () => {
    const user = userEvent.setup();
    render(FloatingLabelClearableTest);
    const input = screen.getByLabelText("Clearable Input") as HTMLInputElement;

    expect(input.value).toBe("Clearable text");

    // Wait for clear button to appear
    await waitFor(
      () => {
        const clearButton = input.parentElement?.querySelector('[aria-label="Clear search value"]');
        expect(clearButton).toBeInTheDocument();
      },
      { timeout: 3000 }
    );

    const clearButton = input.parentElement?.querySelector('[aria-label="Clear search value"]') as HTMLElement;
    await user.click(clearButton);

    // Wait for the value to be cleared
    await waitFor(
      () => {
        expect(input.value).toBe("");
      },
      { timeout: 3000 }
    );
  });
});

describe("FloatingLabelInput - Suggestions/Autocomplete", () => {
  test("shows suggestions when typing", async () => {
    const user = userEvent.setup();
    render(FloatingLabelSuggestionsTest);
    const input = screen.getByLabelText("Autocomplete") as HTMLInputElement;

    await user.click(input);
    await user.type(input, "a");

    // Wait for suggestions to appear
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Banana")).toBeInTheDocument();
  });

  test("filters suggestions based on input", async () => {
    const user = userEvent.setup();
    render(FloatingLabelSuggestionsTest);
    const input = screen.getByLabelText("Autocomplete") as HTMLInputElement;

    await user.click(input);
    await user.type(input, "ch");

    // Wait for suggestions to filter
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(screen.getByText("Cherry")).toBeInTheDocument();
    expect(screen.queryByText("Apple")).not.toBeInTheDocument();
  });

  test("selects suggestion on click", async () => {
    const user = userEvent.setup();
    render(FloatingLabelSuggestionsTest);
    const input = screen.getByLabelText("Autocomplete") as HTMLInputElement;
    const selectedDisplay = screen.getByTestId("selected-item");

    await user.click(input);
    await user.type(input, "a");

    // Wait for suggestions
    await new Promise((resolve) => setTimeout(resolve, 100));

    const suggestion = screen.getByText("Apple");
    await user.click(suggestion);

    // Wait for selection to process
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(selectedDisplay).toHaveTextContent("Apple");
  });

  test("navigates suggestions with keyboard", async () => {
    const user = userEvent.setup();
    render(FloatingLabelSuggestionsTest);
    const input = screen.getByLabelText("Autocomplete") as HTMLInputElement;

    await user.click(input);
    await user.type(input, "a");

    // Wait for suggestions
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Press ArrowDown to select first item
    await user.keyboard("{ArrowDown}");
    await user.keyboard("{Enter}");

    // Wait for selection
    await new Promise((resolve) => setTimeout(resolve, 100));

    const selectedDisplay = screen.getByTestId("selected-item");
    expect(selectedDisplay.textContent).toBeTruthy();
  });

  test("closes suggestions on Escape key", async () => {
    const user = userEvent.setup();
    render(FloatingLabelSuggestionsTest);
    const input = screen.getByLabelText("Autocomplete") as HTMLInputElement;

    await user.click(input);
    await user.type(input, "a");

    // Wait for suggestions
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(screen.getByText("Apple")).toBeInTheDocument();

    await user.keyboard("{Escape}");

    // Wait for suggestions to close
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(screen.queryByText("Apple")).not.toBeInTheDocument();
  });
});
