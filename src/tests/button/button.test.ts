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
    test("disabled button renders correctly", () => {
      render(DisabledButtonTest);
      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
      expect(button).toHaveClass("cursor-not-allowed text-fg-disabled bg-disabled");
    });

    test("loading button shows spinner and is disabled", () => {
      render(LoadingButtonTest);
      const button = screen.getByRole("button");
      const spinner = screen.getByTestId("loading-spinner");

      expect(button).toBeDisabled();
      expect(spinner).toBeInTheDocument();
      expect(button).toHaveClass("cursor-not-allowed text-fg-disabled bg-disabled");
    });

    test("outline button renders with outline styles", () => {
      render(OutlineButtonTest);
      const button = screen.getByRole("button");

      expect(button).toHaveClass("bg-transparent", "border");
    });

    test("pill button renders with rounded-full class", () => {
      render(PillButtonTest);
      const button = screen.getByRole("button");

      expect(button).toHaveClass("rounded-full");
    });

    test("shadow button renders with shadow class", () => {
      render(ShadowButtonTest);
      const button = screen.getByRole("button");

      expect(button).toHaveClass("shadow-lg");
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

      expect(xsButton).toHaveClass("px-3", "py-2", "text-xs");
      expect(smButton).toHaveClass("px-4", "py-2", "text-sm");
      expect(mdButton).toHaveClass("px-5", "py-2.5", "text-sm");
      expect(lgButton).toHaveClass("px-5", "py-3", "text-base");
      expect(xlButton).toHaveClass("px-6", "py-3.5", "text-base");
    });
  });

  describe("Color Variants", () => {
    test("renders buttons with different colors", () => {
      render(ColorButtonTest);
      const primaryButton = screen.getByTestId("color-primary");
      const secondaryButton = screen.getByTestId("color-secondary");
      const darkButton = screen.getByTestId("color-dark");

      expect(primaryButton).toHaveClass("bg-primary-700");
      expect(secondaryButton).toHaveClass("bg-secondary-700");
      expect(darkButton).toHaveClass("bg-dark");
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
