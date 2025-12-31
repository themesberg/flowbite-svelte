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
    });

    test("gradient link button renders correctly", () => {
      render(LinkGradientButtonTest);
      const link = screen.getByRole("link");

      expect(link).toHaveTextContent("Gradient Link");
      expect(link).toHaveAttribute("href", "https://flowbite-svelte.com/");
    });
  });

  describe("Props", () => {
    test("outline gradient button renders", () => {
      render(OutlineGradientButtonTest);
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("Outline Gradient");
    });

    test("pill gradient button renders", () => {
      render(PillGradientButtonTest);
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("Pill Gradient");
    });

    test("shadow gradient button renders", () => {
      render(ShadowGradientButtonTest);
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("Shadow Gradient");
    });

    test("disabled gradient button is disabled", () => {
      render(DisabledGradientButtonTest);
      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
    });
  });

  describe("Color Gradients", () => {
    test("renders gradient buttons with different color combinations", () => {
      render(ColorGradientButtonTest);

      const blueButton = screen.getByTestId("gradient-blue");
      const greenButton = screen.getByTestId("gradient-green");
      const purpleToPinkButton = screen.getByTestId("gradient-purpleToPink");
      const pinkToOrangeButton = screen.getByTestId("gradient-pinkToOrange");

      // Verify buttons render with correct content
      expect(blueButton).toHaveTextContent("Blue");
      expect(greenButton).toHaveTextContent("Green");
      expect(purpleToPinkButton).toHaveTextContent("Purple to Pink");
      expect(pinkToOrangeButton).toHaveTextContent("Pink to Orange");
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

      // Verify all sizes render correctly
      expect(xsButton).toBeInTheDocument();
      expect(smButton).toBeInTheDocument();
      expect(mdButton).toBeInTheDocument();
      expect(lgButton).toBeInTheDocument();
      expect(xlButton).toBeInTheDocument();
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
});
