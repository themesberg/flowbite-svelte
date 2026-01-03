import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from '@testing-library/user-event'

import CheckboxSingleTest from "./checkbox-single.test.svelte";
import CheckboxGroupTest from "./checkbox-group.test.svelte";
import CheckboxChoicesTest from "./checkbox-choices.test.svelte";
import CheckboxButtonTest from "./checkbox-button.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Checkbox - Single", () => {
  test("renders single checkbox", () => {
    render(CheckboxSingleTest);
    const checkbox = screen.getByLabelText("Single Checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  test("toggles checkbox state", async () => {
    const user = userEvent.setup();
    render(CheckboxSingleTest);
    const checkbox = screen.getByLabelText("Single Checkbox");

    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});

describe("Checkbox - Group", () => {
  test("renders checkbox group", () => {
    render(CheckboxGroupTest);
    expect(screen.getByLabelText("Option 1")).toBeInTheDocument();
    expect(screen.getByLabelText("Option 2")).toBeInTheDocument();
    expect(screen.getByLabelText("Option 3")).toBeInTheDocument();
  });

  test("allows multiple selections in group", async () => {
    const user = userEvent.setup();
    render(CheckboxGroupTest);

    const checkbox1 = screen.getByLabelText("Option 1");
    const checkbox2 = screen.getByLabelText("Option 2");
    const checkbox3 = screen.getByLabelText("Option 3");

    expect(checkbox1).not.toBeChecked();
    expect(checkbox2).not.toBeChecked();
    expect(checkbox3).not.toBeChecked();

    await user.click(checkbox1);
    await user.click(checkbox3);

    expect(checkbox1).toBeChecked();
    expect(checkbox2).not.toBeChecked();
    expect(checkbox3).toBeChecked();
  });

  test("deselects checkboxes in group", async () => {
    const user = userEvent.setup();
    render(CheckboxGroupTest);

    const checkbox1 = screen.getByLabelText("Option 1");
    const checkbox2 = screen.getByLabelText("Option 2");

    await user.click(checkbox1);
    await user.click(checkbox2);
    expect(checkbox1).toBeChecked();
    expect(checkbox2).toBeChecked();

    await user.click(checkbox1);
    expect(checkbox1).not.toBeChecked();
    expect(checkbox2).toBeChecked();
  });
});

describe("Checkbox - Choices", () => {
  test("renders checkboxes from choices array", () => {
    render(CheckboxChoicesTest);
    expect(screen.getByLabelText("Apple")).toBeInTheDocument();
    expect(screen.getByLabelText("Banana")).toBeInTheDocument();
    expect(screen.getByLabelText("Orange")).toBeInTheDocument();
  });

  test("respects pre-checked state from group binding", () => {
    render(CheckboxChoicesTest);
    const appleCheckbox = screen.getByLabelText("Apple");
    const orangeCheckbox = screen.getByLabelText("Orange");

    expect(appleCheckbox).not.toBeChecked();
    expect(orangeCheckbox).toBeChecked();
  });

  test("toggles choices checkboxes", async () => {
    const user = userEvent.setup();
    render(CheckboxChoicesTest);
    const appleCheckbox = screen.getByLabelText("Apple");

    expect(appleCheckbox).not.toBeChecked();
    await user.click(appleCheckbox);
    expect(appleCheckbox).toBeChecked();
  });
});

describe("CheckboxButton", () => {
  test("renders checkbox buttons", () => {
    render(CheckboxButtonTest);
    expect(screen.getByText("Button Option 1")).toBeInTheDocument();
    expect(screen.getByText("Button Option 2")).toBeInTheDocument();
  });

  test("toggles checkbox button state", async () => {
    const user = userEvent.setup();
    render(CheckboxButtonTest);

    const button1 = screen.getByText("Button Option 1").closest("label");
    const button2 = screen.getByText("Button Option 2").closest("label");
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();

    // Find the hidden checkboxes
    const checkbox1 = button1?.querySelector('input[type="checkbox"]') as HTMLInputElement;
    const checkbox2 = button2?.querySelector('input[type="checkbox"]') as HTMLInputElement;

    expect(checkbox1).not.toBeChecked();
    expect(checkbox2).not.toBeChecked();

    await user.click(button1!);
    expect(checkbox1).toBeChecked();

    await user.click(button2!);
    expect(checkbox1).toBeChecked();
    expect(checkbox2).toBeChecked();

    await user.click(button1!);
    expect(checkbox1).not.toBeChecked();
    expect(checkbox2).toBeChecked();
  });
});
