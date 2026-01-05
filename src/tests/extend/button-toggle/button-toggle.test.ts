import { cleanup, render, screen } from "@testing-library/svelte";
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
import ColorInheritGroupTest from "./color-inherit-group.test.svelte";
import ColorOverrideGroupTest from "./color-override-group.test.svelte";
import SizeGroupTest from "./size-group.test.svelte";
import SizeSmGroupTest from "./size-sm-group.test.svelte";
import SizeMdGroupTest from "./size-md-group.test.svelte";
import SizeXlGroupTest from "./size-xl-group.test.svelte";

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
      const iconByAttr = toggle.querySelector('svg[data-scope="check-icon"]');
      expect(iconByAttr).toBeInTheDocument();
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
    describe("Color Propagation", () => {
      test("group color takes precedence over button color prop", () => {
        render(ColorGroupTest);
        const group = screen.getByTestId("color-group");

        expect(group).toBeInTheDocument();

        const option1 = screen.getByTestId("color-opt1");
        const option2 = screen.getByTestId("color-opt2");

        // Group has color="secondary", buttons have color="red" and color="green"
        // Group color takes precedence, so both buttons use secondary color
        expect(option1.className).toMatch(/bg-secondary-\d+/);
        expect(option2.className).toMatch(/bg-secondary-\d+/);

        // Should NOT have red or green colors
        expect(option1.className).not.toMatch(/bg-red-\d+/);
        expect(option2.className).not.toMatch(/bg-green-\d+/);
      });

      test("button uses own color when group has no color prop", () => {
        render(ColorOverrideGroupTest);
        const group = screen.getByTestId("color-override-group");

        expect(group).toBeInTheDocument();

        const option1 = screen.getByTestId("color-override-opt1");
        const option2 = screen.getByTestId("color-override-opt2");

        // Group has NO color prop, so buttons use their own colors
        expect(option1.className).toMatch(/bg-red-\d+/);
        expect(option2.className).toMatch(/bg-green-\d+/);
      });

      test("all buttons inherit same group color when set", () => {
        render(ColorInheritGroupTest);
        const group = screen.getByTestId("color-inherit-group");

        expect(group).toBeInTheDocument();

        const option1 = screen.getByTestId("color-inherit-opt1");
        const option2 = screen.getByTestId("color-inherit-opt2");

        // Buttons should inherit blue color from group
        expect(option1.className).toMatch(/bg-blue-\d+/);
        expect(option2.className).toMatch(/bg-blue-\d+/);
      });
    });

    describe("Size Propagation", () => {
      test("applies small size from group context", () => {
        render(SizeSmGroupTest);
        const group = screen.getByTestId("size-sm-group");

        expect(group).toBeInTheDocument();

        const option1 = screen.getByTestId("size-sm-opt1");
        const option2 = screen.getByTestId("size-sm-opt2");

        // Small size: p-1, px-2, text-sm
        expect(option1.className).toMatch(/\bp-1\b/);
        expect(option1.className).toMatch(/\bpx-2\b/);
        expect(option1.className).toMatch(/\btext-sm\b/);

        expect(option2.className).toMatch(/\bp-1\b/);
        expect(option2.className).toMatch(/\bpx-2\b/);
        expect(option2.className).toMatch(/\btext-sm\b/);
      });

      test("applies medium size from group context", () => {
        render(SizeMdGroupTest);
        const group = screen.getByTestId("size-md-group");

        expect(group).toBeInTheDocument();

        const option1 = screen.getByTestId("size-md-opt1");
        const option2 = screen.getByTestId("size-md-opt2");

        // Medium size: p-2, px-4, text-base
        expect(option1.className).toMatch(/\bp-2\b/);
        expect(option1.className).toMatch(/\bpx-4\b/);
        expect(option1.className).toMatch(/\btext-base\b/);

        expect(option2.className).toMatch(/\bp-2\b/);
        expect(option2.className).toMatch(/\bpx-4\b/);
        expect(option2.className).toMatch(/\btext-base\b/);
      });

      test("applies large size from group context", () => {
        render(SizeGroupTest);
        const group = screen.getByTestId("size-group");

        expect(group).toBeInTheDocument();

        const option1 = screen.getByTestId("size-opt1");
        const option2 = screen.getByTestId("size-opt2");

        // Large size: p-3, px-5, text-lg
        expect(option1.className).toMatch(/\bp-3\b/);
        expect(option1.className).toMatch(/\bpx-5\b/);
        expect(option1.className).toMatch(/\btext-lg\b/);

        expect(option2.className).toMatch(/\bp-3\b/);
        expect(option2.className).toMatch(/\bpx-5\b/);
        expect(option2.className).toMatch(/\btext-lg\b/);
      });

      test("applies extra large size from group context", () => {
        render(SizeXlGroupTest);
        const group = screen.getByTestId("size-xl-group");

        expect(group).toBeInTheDocument();

        const option1 = screen.getByTestId("size-xl-opt1");
        const option2 = screen.getByTestId("size-xl-opt2");

        // XL size: p-4, px-6, text-xl
        expect(option1.className).toMatch(/\bp-4\b/);
        expect(option1.className).toMatch(/\bpx-6\b/);
        expect(option1.className).toMatch(/\btext-xl\b/);

        expect(option2.className).toMatch(/\bp-4\b/);
        expect(option2.className).toMatch(/\bpx-6\b/);
        expect(option2.className).toMatch(/\btext-xl\b/);
      });
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
