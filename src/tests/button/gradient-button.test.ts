import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicGradientButtonTest from "./basic-gradient-button.test.svelte";
import OutlineGradientButtonTest from "./outline-gradient-button.test.svelte";
import PillGradientButtonTest from "./pill-gradient-button.test.svelte";
import ShadowGradientButtonTest from "./shadow-gradient-button.test.svelte";
import ColorGradientButtonTest from "./color-gradient-button.test.svelte";
import SizeGradientButtonTest from "./size-gradient-button.test.svelte";
import DisabledGradientButtonTest from "./disabled-gradient-button.test.svelte";
import LinkGradientButtonTest from "./link-gradient-button.test.svelte";
import ClickGradientButtonTest, { testState } from "./click-gradient-button.test.svelte";

afterEach(() => {
  cleanup();
});

describe("GradientButton Component", () => {
  describe("Basic Rendering", () => {
    test("basic gradient button renders correctly", () => {
      render(BasicGradientButtonTest);
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("Gradient Button");
      // Check for gradient classes
      expect(button).toHaveClass("bg-linear-to-r");
    });

    test("gradient link button renders correctly", () => {
      render(LinkGradientButtonTest);
      const link = screen.getByRole("link");

      expect(link).toHaveTextContent("Gradient Link");
      expect(link).toHaveAttribute("href", "https://flowbite-svelte.com/");
    });
  });

  describe("Props", () => {
    test("outline gradient button renders with wrapper div", () => {
      render(OutlineGradientButtonTest);
      const button = screen.getByRole("button");
      const wrapper = button.parentElement;

      expect(wrapper).toBeInTheDocument();
      expect(wrapper).toHaveClass("p-0.5");
      expect(button).toHaveClass("bg-white", "text-gray-900!");
    });

    test("pill gradient button renders with rounded-full", () => {
      render(PillGradientButtonTest);
      const button = screen.getByRole("button");

      expect(button).toHaveClass("rounded-full");
    });

    test("shadow gradient button renders with shadow class", () => {
      render(ShadowGradientButtonTest);
      const button = screen.getByRole("button");

      expect(button).toHaveClass("shadow-lg");
    });

    test("disabled gradient button is disabled", () => {
      render(DisabledGradientButtonTest);
      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
      expect(button).toHaveClass("opacity-50", "cursor-not-allowed");
    });
  });

  describe("Color Gradients", () => {
    test("renders gradient buttons with different color combinations", () => {
      render(ColorGradientButtonTest);

      const blueButton = screen.getByTestId("gradient-blue");
      const greenButton = screen.getByTestId("gradient-green");
      const purpleToPinkButton = screen.getByTestId("gradient-purpleToPink");
      const pinkToOrangeButton = screen.getByTestId("gradient-pinkToOrange");

      expect(blueButton).toHaveClass("from-blue-500", "via-blue-600", "to-blue-700");
      expect(greenButton).toHaveClass("from-green-400", "via-green-500", "to-green-600");
      expect(purpleToPinkButton).toHaveClass("from-purple-500", "to-pink-500");
      expect(pinkToOrangeButton).toHaveClass("from-pink-500", "to-orange-400");
    });
  });

  describe("Size Variants", () => {
    test("renders gradient buttons with different sizes", () => {
      render(SizeGradientButtonTest);

      const xsButton = screen.getByTestId("gradient-size-xs");
      const smButton = screen.getByTestId("gradient-size-sm");
      const mdButton = screen.getByTestId("gradient-size-md");
      const lgButton = screen.getByTestId("gradient-size-lg");
      const xlButton = screen.getByTestId("gradient-size-xl");

      expect(xsButton).toHaveClass("px-3", "py-2", "text-xs");
      expect(smButton).toHaveClass("px-4", "py-2", "text-sm");
      expect(mdButton).toHaveClass("px-5", "py-2.5", "text-sm");
      expect(lgButton).toHaveClass("px-5", "py-3", "text-base");
      expect(xlButton).toHaveClass("px-6", "py-3.5", "text-base");
    });
  });

  describe("Interactions", () => {
    test("gradient button click event works", async () => {
      const user = userEvent.setup();
      // Reset state before test
      testState.clickCount = 0;
      render(ClickGradientButtonTest);
      const button = screen.getByRole("button");

      expect(testState.clickCount).toBe(0);

      await user.click(button);
      expect(testState.clickCount).toBe(1);

      await user.click(button);
      expect(testState.clickCount).toBe(2);
    });

    test("disabled gradient button cannot be clicked", async () => {
      const user = userEvent.setup();
      render(DisabledGradientButtonTest);
      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
      await user.click(button);
      expect(button).toBeDisabled();
    });
  });

  describe("Outline Variant Special Cases", () => {
    test("outline gradient button with pill has correct classes", () => {
      render(OutlineGradientButtonTest);
      const button = screen.getByRole("button");
      const wrapper = button.parentElement;

      expect(wrapper).toHaveClass("rounded-full");
      expect(button).toHaveClass("rounded-full");
    });
  });
});
