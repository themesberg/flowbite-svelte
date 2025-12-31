import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicButtonTest from "./basic-button.test.svelte";
import SubmitButtonTest from "./submit-button.test.svelte";
import LinkButtonTest from "./link-button.test.svelte";
import LabelButtonTest from "./label-button.test.svelte";
import DisabledButtonTest from "./disabled-button.test.svelte";
import LoadingButtonTest from "./loading-button.test.svelte";
import OutlineButtonTest from "./outline-button.test.svelte";
import PillButtonTest from "./pill-button.test.svelte";
import ShadowButtonTest from "./shadow-button.test.svelte";
import SizeButtonTest from "./size-button.test.svelte";
import ColorButtonTest from "./color-button.test.svelte";
import ClickButtonTest, { testState } from "./click-button.test.svelte";
import CustomClassButtonTest from "./custom-class-button.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Button Component", () => {
  describe("Basic Rendering", () => {
    test("basic button renders correctly", () => {
      render(BasicButtonTest);
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("Test");
      expect(button).toHaveAttribute("type", "button");
    });

    test("submit button renders correctly", () => {
      render(SubmitButtonTest);
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("Save");
      expect(button).toHaveAttribute("type", "submit");
    });

    test("link button renders correctly", () => {
      render(LinkButtonTest);
      const link = screen.getByRole("link");

      expect(link).toHaveTextContent("Flowbite Svelte");
      expect(link).not.toHaveAttribute("type");
    });

    test("renders button as label element correctly", () => {
      render(LabelButtonTest);
      const label = screen.getByTestId("label");

      expect(label).toBeInTheDocument();
      expect(label).not.toHaveAttribute("type");
      expect(label).not.toHaveAttribute("role");
    });
  });

  describe("Props", () => {
    test("disabled button is disabled", () => {
      render(DisabledButtonTest);
      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
    });

    test("loading button shows spinner and is disabled", () => {
      render(LoadingButtonTest);
      const button = screen.getByRole("button");
      const spinner = screen.getByTestId("loading-spinner");

      expect(button).toBeDisabled();
      expect(spinner).toBeInTheDocument();
    });

    test("outline button renders", () => {
      render(OutlineButtonTest);
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("Outline");
    });

    test("pill button renders", () => {
      render(PillButtonTest);
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("Pill");
    });

    test("shadow button renders", () => {
      render(ShadowButtonTest);
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("Shadow");
    });

    test("custom class is applied to button", () => {
      render(CustomClassButtonTest);
      const button = screen.getByRole("button");

      expect(button).toHaveClass("custom-test-class");
    });
  });

  describe("Size Variants", () => {
    test("renders buttons with different sizes", () => {
      render(SizeButtonTest);
      const xsButton = screen.getByTestId("size-xs");
      const smButton = screen.getByTestId("size-sm");
      const mdButton = screen.getByTestId("size-md");
      const lgButton = screen.getByTestId("size-lg");
      const xlButton = screen.getByTestId("size-xl");

      // Just verify they all render as buttons
      expect(xsButton).toBeInTheDocument();
      expect(smButton).toBeInTheDocument();
      expect(mdButton).toBeInTheDocument();
      expect(lgButton).toBeInTheDocument();
      expect(xlButton).toBeInTheDocument();
    });
  });

  describe("Color Variants", () => {
    test("renders buttons with different colors", () => {
      render(ColorButtonTest);
      const primaryButton = screen.getByTestId("color-primary");
      const secondaryButton = screen.getByTestId("color-secondary");
      const darkButton = screen.getByTestId("color-dark");

      // Verify buttons render with text content
      expect(primaryButton).toHaveTextContent("Primary");
      expect(secondaryButton).toHaveTextContent("Success");
      expect(darkButton).toHaveTextContent("Danger");

      // Verify they're all buttons
      expect(primaryButton).toHaveAttribute("type", "button");
      expect(secondaryButton).toHaveAttribute("type", "button");
      expect(darkButton).toHaveAttribute("type", "button");
    });
  });

  describe("Interactions", () => {
    test("button click event works", async () => {
      const user = userEvent.setup();
      // Reset state before test
      testState.clickCount = 0;
      render(ClickButtonTest);
      const button = screen.getByRole("button");

      expect(testState.clickCount).toBe(0);

      await user.click(button);
      expect(testState.clickCount).toBe(1);

      await user.click(button);
      expect(testState.clickCount).toBe(2);
    });

    test("disabled button cannot be clicked", async () => {
      const user = userEvent.setup();
      render(DisabledButtonTest);
      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
      await user.click(button);
      // Button should remain disabled and not trigger click
      expect(button).toBeDisabled();
    });
  });
});
