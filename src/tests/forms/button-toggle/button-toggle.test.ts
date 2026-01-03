import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from '@testing-library/user-event'

import ButtonToggleSingleTest from "./button-toggle-single.test.svelte";
import ButtonToggleMultiTest from "./button-toggle-multi.test.svelte";

afterEach(() => {
  cleanup();
});

describe("ButtonToggle - Single Select", () => {
  test("renders button toggle group", () => {
    render(ButtonToggleSingleTest);
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByText("Option 3")).toBeInTheDocument();
  });

  test("toggles selection in single select mode", async () => {
    const user = userEvent.setup();
    render(ButtonToggleSingleTest);

    const button1 = screen.getByRole("radio", { name: "Option 1" });
    const button2 = screen.getByRole("radio", { name: "Option 2" });

    // Initially button1 should be selected
    expect(button1).toHaveAttribute("data-selected", "true");
    expect(button2).toHaveAttribute("data-selected", "false");

    // Click button2
    await user.click(button2);
    expect(button1).toHaveAttribute("data-selected", "false");
    expect(button2).toHaveAttribute("data-selected", "true");

    // Click button2 again (should deselect in single mode)
    await user.click(button2);
    expect(button2).toHaveAttribute("data-selected", "false");
  });

  test("has correct aria attributes for single select", () => {
    const { container } = render(ButtonToggleSingleTest);
    const group = container.querySelector('[role="radiogroup"]');
    expect(group).toBeInTheDocument();

    const buttons = screen.getAllByRole("radio");
    expect(buttons).toHaveLength(3);
    buttons.forEach((button) => {
      expect(button).toHaveAttribute("aria-checked");
    });
  });
});

describe("ButtonToggle - Multi Select", () => {
  test("allows multiple selections", async () => {
    const user = userEvent.setup();
    render(ButtonToggleMultiTest);

    const button1 = screen.getByRole("checkbox", { name: "Option 1" });
    const button2 = screen.getByRole("checkbox", { name: "Option 2" });
    const button3 = screen.getByRole("checkbox", { name: "Option 3" });

    // Initially button1 should be selected
    expect(button1).toHaveAttribute("data-selected", "true");
    expect(button2).toHaveAttribute("data-selected", "false");
    expect(button3).toHaveAttribute("data-selected", "false");

    // Click button2
    await user.click(button2);
    expect(button1).toHaveAttribute("data-selected", "true");
    expect(button2).toHaveAttribute("data-selected", "true");

    // Click button3
    await user.click(button3);
    expect(button1).toHaveAttribute("data-selected", "true");
    expect(button2).toHaveAttribute("data-selected", "true");
    expect(button3).toHaveAttribute("data-selected", "true");

    // Click button1 to deselect
    await user.click(button1);
    expect(button1).toHaveAttribute("data-selected", "false");
    expect(button2).toHaveAttribute("data-selected", "true");
    expect(button3).toHaveAttribute("data-selected", "true");
  });

  test("has correct aria attributes for multi select", () => {
    const { container } = render(ButtonToggleMultiTest);
    const group = container.querySelector('[role="group"]');
    expect(group).toBeInTheDocument();

    const buttons = screen.getAllByRole("checkbox");
    expect(buttons).toHaveLength(3);
    buttons.forEach((button) => {
      expect(button).toHaveAttribute("aria-checked");
    });
  });
});
