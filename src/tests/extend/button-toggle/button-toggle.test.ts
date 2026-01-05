import { cleanup, render, screen, within } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicToggleTest from "./basic-toggle.test.svelte";
import SelectedToggleTest from "./selected-toggle.test.svelte";
import ClickToggleTest, { testState as clickTestState } from "./click-toggle.test.svelte";
import BasicGroupTest from "./basic-group.test.svelte";
import MultiSelectGroupTest from "./multi-select-group.test.svelte";
import CallbackGroupTest, { testState as callbackTestState } from "./callback-group.test.svelte";
import PresetValueGroupTest from "./preset-value-group.test.svelte";
import PresetMultiGroupTest from "./preset-multi-group.test.svelte";
import ColorGroupTest from "./color-group.test.svelte";
import SizeGroupTest from "./size-group.test.svelte";

afterEach(() => {
  cleanup();
  // Reset test states
  clickTestState.clickedValue = null;
  clickTestState.clickCount = 0;
  callbackTestState.selectedValue = null;
  callbackTestState.callCount = 0;
});

describe("ButtonToggle Component", () => {
  describe("Basic Rendering", () => {
    test("renders button toggle correctly", () => {
      render(BasicToggleTest);
      const toggle = screen.getByTestId("basic-toggle");

      expect(toggle).toBeInTheDocument();
      expect(toggle).toHaveAttribute("type", "button");
      expect(toggle).toHaveAttribute("data-scope", "button-toggle");
      expect(toggle).toHaveAttribute("role", "radio");
    });

    test("renders with selected state", () => {
      render(SelectedToggleTest);
      const toggle = screen.getByTestId("selected-toggle");

      expect(toggle).toBeInTheDocument();
      expect(toggle).toHaveAttribute("data-selected", "true");
      expect(toggle).toHaveAttribute("aria-checked", "true");

      // Check icon should be present
      const icon = within(toggle).getByRole("img", { hidden: true });
      expect(icon).toBeInTheDocument();
    });

    test("renders without selected state by default", () => {
      render(BasicToggleTest);
      const toggle = screen.getByTestId("basic-toggle");

      expect(toggle).toHaveAttribute("data-selected", "false");
      expect(toggle).toHaveAttribute("aria-checked", "false");
    });
  });

  describe("Interactions", () => {
    test("handles click events", async () => {
      const user = userEvent.setup();
      render(ClickToggleTest);
      const toggle = screen.getByTestId("clickable-toggle");

      expect(clickTestState.clickCount).toBe(0);

      await user.click(toggle);
      expect(clickTestState.clickCount).toBe(1);

      await user.click(toggle);
      expect(clickTestState.clickCount).toBe(2);
    });

    test("is keyboard accessible", async () => {
      const user = userEvent.setup();
      render(ClickToggleTest);
      const toggle = screen.getByTestId("clickable-toggle");

      toggle.focus();
      expect(toggle).toHaveFocus();

      await user.keyboard("{Enter}");
      expect(clickTestState.clickCount).toBe(1);

      await user.keyboard(" ");
      expect(clickTestState.clickCount).toBe(2);
    });
  });
});

describe("ButtonToggleGroup Component", () => {
  describe("Basic Rendering", () => {
    test("renders toggle group correctly", () => {
      render(BasicGroupTest);
      const group = screen.getByTestId("basic-group");

      expect(group).toBeInTheDocument();
      expect(group).toHaveAttribute("data-scope", "button-toggle-group");
      expect(group).toHaveAttribute("role", "radiogroup");
      expect(group).toHaveAttribute("aria-label", "basic-group");
    });

    test("renders all toggle buttons in group", () => {
      render(BasicGroupTest);

      expect(screen.getByTestId("group-option1")).toBeInTheDocument();
      expect(screen.getByTestId("group-option2")).toBeInTheDocument();
      expect(screen.getByTestId("group-option3")).toBeInTheDocument();
    });

    test("renders multi-select group with correct role", () => {
      render(MultiSelectGroupTest);
      const group = screen.getByTestId("multi-group");

      expect(group).toHaveAttribute("role", "group");
    });

    test("renders multi-select buttons with checkbox role", () => {
      render(MultiSelectGroupTest);
      const option1 = screen.getByTestId("multi-opt1");
      const option2 = screen.getByTestId("multi-opt2");

      expect(option1).toHaveAttribute("role", "checkbox");
      expect(option2).toHaveAttribute("role", "checkbox");
    });
  });

  describe("Single Selection", () => {
    test("allows selecting a single option", async () => {
      const user = userEvent.setup();
      render(BasicGroupTest);

      const option1 = screen.getByTestId("group-option1");
      const option2 = screen.getByTestId("group-option2");

      await user.click(option1);
      expect(option1).toHaveAttribute("data-selected", "true");
      expect(option2).toHaveAttribute("data-selected", "false");
    });

    test("deselects previous selection when selecting new option", async () => {
      const user = userEvent.setup();
      render(BasicGroupTest);

      const option1 = screen.getByTestId("group-option1");
      const option2 = screen.getByTestId("group-option2");

      await user.click(option1);
      expect(option1).toHaveAttribute("data-selected", "true");

      await user.click(option2);
      expect(option1).toHaveAttribute("data-selected", "false");
      expect(option2).toHaveAttribute("data-selected", "true");
    });

    test("allows deselecting by clicking same option", async () => {
      const user = userEvent.setup();
      render(BasicGroupTest);

      const option1 = screen.getByTestId("group-option1");

      await user.click(option1);
      expect(option1).toHaveAttribute("data-selected", "true");

      await user.click(option1);
      expect(option1).toHaveAttribute("data-selected", "false");
    });
  });

  describe("Multi Selection", () => {
    test("allows selecting multiple options", async () => {
      const user = userEvent.setup();
      render(MultiSelectGroupTest);

      const option1 = screen.getByTestId("multi-opt1");
      const option2 = screen.getByTestId("multi-opt2");
      const option3 = screen.getByTestId("multi-opt3");

      await user.click(option1);
      expect(option1).toHaveAttribute("data-selected", "true");

      await user.click(option2);
      expect(option1).toHaveAttribute("data-selected", "true");
      expect(option2).toHaveAttribute("data-selected", "true");

      await user.click(option3);
      expect(option1).toHaveAttribute("data-selected", "true");
      expect(option2).toHaveAttribute("data-selected", "true");
      expect(option3).toHaveAttribute("data-selected", "true");
    });

    test("allows deselecting individual options", async () => {
      const user = userEvent.setup();
      render(MultiSelectGroupTest);

      const option1 = screen.getByTestId("multi-opt1");
      const option2 = screen.getByTestId("multi-opt2");

      await user.click(option1);
      await user.click(option2);
      expect(option1).toHaveAttribute("data-selected", "true");
      expect(option2).toHaveAttribute("data-selected", "true");

      await user.click(option1);
      expect(option1).toHaveAttribute("data-selected", "false");
      expect(option2).toHaveAttribute("data-selected", "true");
    });
  });

  describe("Callbacks", () => {
    test("calls onSelect with selected value", async () => {
      const user = userEvent.setup();
      render(CallbackGroupTest);

      const option1 = screen.getByTestId("cb-opt1");

      await user.click(option1);
      expect(callbackTestState.callCount).toBe(1);
      expect(callbackTestState.selectedValue).toBe("cb1");
    });

    test("calls onSelect with null when deselected", async () => {
      const user = userEvent.setup();
      render(CallbackGroupTest);

      const option1 = screen.getByTestId("cb-opt1");

      await user.click(option1);
      expect(callbackTestState.selectedValue).toBe("cb1");

      await user.click(option1);
      expect(callbackTestState.callCount).toBe(2);
      expect(callbackTestState.selectedValue).toBeNull();
    });

    test("calls onSelect with updated value on selection change", async () => {
      const user = userEvent.setup();
      render(CallbackGroupTest);

      const option1 = screen.getByTestId("cb-opt1");
      const option2 = screen.getByTestId("cb-opt2");

      await user.click(option1);
      expect(callbackTestState.selectedValue).toBe("cb1");

      await user.click(option2);
      expect(callbackTestState.callCount).toBe(2);
      expect(callbackTestState.selectedValue).toBe("cb2");
    });
  });

  describe("Preset Values", () => {
    test("initializes with preset single value", () => {
      render(PresetValueGroupTest);

      const option1 = screen.getByTestId("preset-opt1");
      const option2 = screen.getByTestId("preset-opt2");
      const option3 = screen.getByTestId("preset-opt3");

      expect(option1).toHaveAttribute("data-selected", "false");
      expect(option2).toHaveAttribute("data-selected", "true");
      expect(option3).toHaveAttribute("data-selected", "false");
    });

    test("initializes with preset multiple values", () => {
      render(PresetMultiGroupTest);

      const option1 = screen.getByTestId("preset-multi-opt1");
      const option2 = screen.getByTestId("preset-multi-opt2");
      const option3 = screen.getByTestId("preset-multi-opt3");

      expect(option1).toHaveAttribute("data-selected", "true");
      expect(option2).toHaveAttribute("data-selected", "false");
      expect(option3).toHaveAttribute("data-selected", "true");
    });

    test("can change selection from preset value", async () => {
      const user = userEvent.setup();
      render(PresetValueGroupTest);

      const option1 = screen.getByTestId("preset-opt1");
      const option2 = screen.getByTestId("preset-opt2");

      expect(option2).toHaveAttribute("data-selected", "true");

      await user.click(option1);
      expect(option1).toHaveAttribute("data-selected", "true");
      expect(option2).toHaveAttribute("data-selected", "false");
    });
  });

  describe("Props Propagation", () => {
    test("applies color from group context", () => {
      render(ColorGroupTest);
      const group = screen.getByTestId("color-group");

      expect(group).toBeInTheDocument();
      expect(screen.getByTestId("color-opt1")).toBeInTheDocument();
      expect(screen.getByTestId("color-opt2")).toBeInTheDocument();
    });

    test("applies size from group context", () => {
      render(SizeGroupTest);
      const group = screen.getByTestId("size-group");

      expect(group).toBeInTheDocument();
      expect(screen.getByTestId("size-opt1")).toBeInTheDocument();
      expect(screen.getByTestId("size-opt2")).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    test("single select group is keyboard navigable", async () => {
      const user = userEvent.setup();
      render(BasicGroupTest);

      const option1 = screen.getByTestId("group-option1");
      const option2 = screen.getByTestId("group-option2");

      option1.focus();
      await user.keyboard("{Enter}");
      expect(option1).toHaveAttribute("data-selected", "true");

      option2.focus();
      await user.keyboard(" ");
      expect(option2).toHaveAttribute("data-selected", "true");
      expect(option1).toHaveAttribute("data-selected", "false");
    });

    test("multi-select group is keyboard navigable", async () => {
      const user = userEvent.setup();
      render(MultiSelectGroupTest);

      const option1 = screen.getByTestId("multi-opt1");
      const option2 = screen.getByTestId("multi-opt2");

      option1.focus();
      await user.keyboard("{Enter}");
      expect(option1).toHaveAttribute("data-selected", "true");

      option2.focus();
      await user.keyboard(" ");
      expect(option1).toHaveAttribute("data-selected", "true");
      expect(option2).toHaveAttribute("data-selected", "true");
    });
  });
});
