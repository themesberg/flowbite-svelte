import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicAnchorTest from "./basic-anchor.test.svelte";
import AnchorWithClickTest, { testState as clickTestState } from "./anchor-with-click.test.svelte";
import AnchorAsButtonTest from "./anchor-as-button.test.svelte";
import AnchorButtonClickTest, { testState as buttonClickTestState } from "./anchor-button-click.test.svelte";
import AnchorColorsTest from "./anchor-colors.test.svelte";
import AnchorCustomClassTest from "./anchor-custom-class.test.svelte";
import AnchorExternalTest from "./anchor-external.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Anchor (A) Component", () => {
  describe("Basic Rendering", () => {
    test("renders as anchor element by default", () => {
      render(BasicAnchorTest);
      const anchor = screen.getByRole("link");

      expect(anchor).toBeInTheDocument();
      expect(anchor.tagName).toBe("A");
      expect(anchor).toHaveAttribute("href", "/test");
      expect(anchor).toHaveAttribute("data-scope", "anchor");
      expect(anchor).toHaveAttribute("data-part", "base");
    });

    test("renders with provided content", () => {
      render(BasicAnchorTest);
      const anchor = screen.getByRole("link");

      expect(anchor).toHaveTextContent("Link content");
    });

    test("renders as button when asButton is true", () => {
      render(AnchorAsButtonTest);
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
      expect(button.tagName).toBe("BUTTON");
      expect(button).toHaveAttribute("type", "button");
      expect(button).toHaveAttribute("data-scope", "anchor");
      expect(button).toHaveAttribute("data-part", "base");
    });
  });

  describe("Props", () => {
    test("applies custom class", () => {
      render(AnchorCustomClassTest);
      const anchor = screen.getByRole("link");

      expect(anchor).toHaveClass("custom-anchor-class");
    });

    test("supports external link attributes", () => {
      render(AnchorExternalTest);
      const anchor = screen.getByRole("link");

      expect(anchor).toHaveAttribute("href", "https://example.com");
      expect(anchor).toHaveAttribute("target", "_blank");
      expect(anchor).toHaveAttribute("rel", "noopener noreferrer");
    });

    test("renders different color variants", () => {
      render(AnchorColorsTest);

      const primaryAnchor = screen.getByTestId("color-primary");
      const secondaryAnchor = screen.getByTestId("color-secondary");
      const grayAnchor = screen.getByTestId("color-gray");

      expect(primaryAnchor).toBeInTheDocument();
      expect(secondaryAnchor).toBeInTheDocument();
      expect(grayAnchor).toBeInTheDocument();

      expect(primaryAnchor).toHaveTextContent("Primary");
      expect(secondaryAnchor).toHaveTextContent("Secondary");
      expect(grayAnchor).toHaveTextContent("Gray");
    });
  });

  describe("Interactions", () => {
    test("handles click events on anchor", async () => {
      const user = userEvent.setup();
      clickTestState.clickCount = 0;

      render(AnchorWithClickTest);
      const anchor = screen.getByRole("link");

      expect(clickTestState.clickCount).toBe(0);

      await user.click(anchor);
      expect(clickTestState.clickCount).toBe(1);

      await user.click(anchor);
      expect(clickTestState.clickCount).toBe(2);
    });

    test("handles click events in button mode and prevents default", async () => {
      const user = userEvent.setup();
      buttonClickTestState.clickCount = 0;
      buttonClickTestState.defaultPrevented = false;

      render(AnchorButtonClickTest);
      const button = screen.getByRole("button");

      expect(buttonClickTestState.clickCount).toBe(0);

      await user.click(button);
      expect(buttonClickTestState.clickCount).toBe(1);
      expect(buttonClickTestState.defaultPrevented).toBe(true);

      await user.click(button);
      expect(buttonClickTestState.clickCount).toBe(2);
    });
  });

  describe("Behavior", () => {
    test("button mode does not have href attribute", () => {
      render(AnchorAsButtonTest);
      const button = screen.getByRole("button");

      expect(button).not.toHaveAttribute("href");
    });

    test("anchor mode navigation is not prevented", async () => {
      const user = userEvent.setup();
      clickTestState.clickCount = 0;

      render(AnchorWithClickTest);
      const anchor = screen.getByRole("link");

      // Click the anchor - the onclick handler should be called
      await user.click(anchor);
      expect(clickTestState.clickCount).toBe(1);

      // In anchor mode, we can't easily test if navigation would happen,
      // but we can verify the href is present
      expect(anchor).toHaveAttribute("href", "/test");
    });
  });
});
