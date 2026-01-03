import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicToolbarTest from "./basic-toolbar.test.svelte";
import ColorToolbarTest from "./color-toolbar.test.svelte";
import EmbeddedToolbarTest from "./embedded-toolbar.test.svelte";
import EndToolbarTest from "./end-toolbar.test.svelte";
import CustomClassToolbarTest from "./custom-class-toolbar.test.svelte";
import BasicToolbarButtonTest from "./basic-toolbar-button.test.svelte";
import LinkToolbarButtonTest from "./link-toolbar-button.test.svelte";
import ColorToolbarButtonTest from "./color-toolbar-button.test.svelte";
import SizeToolbarButtonTest from "./size-toolbar-button.test.svelte";
import AriaToolbarButtonTest from "./aria-toolbar-button.test.svelte";
import ClickToolbarButtonTest, { testState } from "./click-toolbar-button.test.svelte";
import BasicToolbarGroupTest from "./basic-toolbar-group.test.svelte";
import SpacingToolbarGroupTest from "./spacing-toolbar-group.test.svelte";
import PaddingToolbarGroupTest from "./padding-toolbar-group.test.svelte";
import PositionToolbarGroupTest from "./position-toolbar-group.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Toolbar Component", () => {
  describe("Basic Rendering", () => {
    test("toolbar renders correctly", () => {
      render(BasicToolbarTest);
      const toolbar = screen.getByRole("button", { name: /Button 1/i });

      expect(toolbar).toBeInTheDocument();
    });

    test("toolbar has correct data attributes", () => {
      render(BasicToolbarTest);
      const toolbars = document.querySelectorAll('[data-scope="toolbar"]');

      expect(toolbars.length).toBeGreaterThan(0);
      expect(toolbars[0]).toHaveAttribute("data-part", "base");
    });
  });

  describe("Color Variants", () => {
    test("renders toolbar with different color variants", () => {
      render(ColorToolbarTest);
      const primaryToolbar = screen.getByTestId("color-primary");
      const blueToolbar = screen.getByTestId("color-blue");
      const darkToolbar = screen.getByTestId("color-dark");
      const greenToolbar = screen.getByTestId("color-green");
      const redToolbar = screen.getByTestId("color-red");

      expect(primaryToolbar).toBeInTheDocument();
      expect(blueToolbar).toBeInTheDocument();
      expect(darkToolbar).toBeInTheDocument();
      expect(greenToolbar).toBeInTheDocument();
      expect(redToolbar).toBeInTheDocument();
    });
  });

  describe("Embedded Prop", () => {
    test("renders embedded toolbar", () => {
      render(EmbeddedToolbarTest);
      const embeddedToolbar = screen.getByTestId("embedded-toolbar");

      expect(embeddedToolbar).toBeInTheDocument();
    });

    test("renders non-embedded toolbar", () => {
      render(EmbeddedToolbarTest);
      const nonEmbeddedToolbar = screen.getByTestId("non-embedded-toolbar");

      expect(nonEmbeddedToolbar).toBeInTheDocument();
    });
  });

  describe("End Snippet", () => {
    test("toolbar renders end snippet content", () => {
      render(EndToolbarTest);
      const endContent = screen.getByTestId("end-content");

      expect(endContent).toBeInTheDocument();
    });
  });

  describe("Custom Classes", () => {
    test("custom class is applied to toolbar", () => {
      render(CustomClassToolbarTest);
      const toolbar = screen.getByTestId("custom-class-toolbar");

      expect(toolbar).toHaveClass("custom-toolbar-class");
    });
  });
});

describe("ToolbarButton Component", () => {
  describe("Basic Rendering", () => {
    test("toolbar button renders as button element", () => {
      render(BasicToolbarButtonTest);
      const button = screen.getByTestId("basic-toolbar-button");

      expect(button).toBeInTheDocument();
      expect(button.tagName).toBe("BUTTON");
      expect(button).toHaveAttribute("type", "button");
    });

    test("toolbar button has correct data attributes", () => {
      render(BasicToolbarButtonTest);
      const button = screen.getByTestId("basic-toolbar-button");

      expect(button).toHaveAttribute("data-scope", "toolbar-button");
      expect(button).toHaveAttribute("data-part", "button");
    });
  });

  describe("Link Variant", () => {
    test("toolbar button renders as link when href is provided", () => {
      render(LinkToolbarButtonTest);
      const link = screen.getByTestId("link-button");

      expect(link).toBeInTheDocument();
      expect(link.tagName).toBe("A");
      expect(link).toHaveAttribute("href", "https://example.com");
    });

    test("link toolbar button has correct data attributes", () => {
      render(LinkToolbarButtonTest);
      const link = screen.getByTestId("link-button");

      expect(link).toHaveAttribute("data-scope", "toolbar-button");
      expect(link).toHaveAttribute("data-part", "link");
    });
  });

  describe("Color Variants", () => {
    test("renders toolbar button with different color variants", () => {
      render(ColorToolbarButtonTest);
      const primaryButton = screen.getByTestId("color-primary");
      const blueButton = screen.getByTestId("color-blue");
      const darkButton = screen.getByTestId("color-dark");
      const redButton = screen.getByTestId("color-red");
      const greenButton = screen.getByTestId("color-green");

      expect(primaryButton).toBeInTheDocument();
      expect(blueButton).toBeInTheDocument();
      expect(darkButton).toBeInTheDocument();
      expect(redButton).toBeInTheDocument();
      expect(greenButton).toBeInTheDocument();
    });
  });

  describe("Size Variants", () => {
    test("renders toolbar button with different size variants", () => {
      render(SizeToolbarButtonTest);
      const xsButton = screen.getByTestId("size-xs");
      const smButton = screen.getByTestId("size-sm");
      const mdButton = screen.getByTestId("size-md");
      const lgButton = screen.getByTestId("size-lg");
      const xlButton = screen.getByTestId("size-xl");

      expect(xsButton).toBeInTheDocument();
      expect(smButton).toBeInTheDocument();
      expect(mdButton).toBeInTheDocument();
      expect(lgButton).toBeInTheDocument();
      expect(xlButton).toBeInTheDocument();
    });
  });

  describe("ARIA Attributes", () => {
    test("toolbar button with name has correct aria-label", () => {
      render(AriaToolbarButtonTest);
      const button = screen.getByTestId("button-with-name");

      expect(button).toHaveAttribute("aria-label", "Button Name");
    });

    test("toolbar button respects custom aria-label", () => {
      render(AriaToolbarButtonTest);
      const button = screen.getByTestId("button-with-aria-label");

      expect(button).toHaveAttribute("aria-label", "Custom Label");
    });

    test("toolbar button with aria-expanded attribute", () => {
      render(AriaToolbarButtonTest);
      const button = screen.getByTestId("button-with-aria-expanded");

      expect(button).toHaveAttribute("aria-expanded", "true");
    });

    test("toolbar button with name renders sr-only span", () => {
      render(AriaToolbarButtonTest);
      const button = screen.getByTestId("button-with-name");
      const srOnlySpan = button.querySelector(".sr-only");

      expect(srOnlySpan).toBeInTheDocument();
    });
  });

  describe("Click Functionality", () => {
    test("toolbar button click event works", async () => {
      const user = userEvent.setup();
      testState.clickCount = 0;

      render(ClickToolbarButtonTest);
      const button = screen.getByTestId("clickable-button");

      expect(testState.clickCount).toBe(0);

      await user.click(button);
      expect(testState.clickCount).toBe(1);

      await user.click(button);
      expect(testState.clickCount).toBe(2);
    });
  });
});

describe("ToolbarGroup Component", () => {
  describe("Basic Rendering", () => {
    test("toolbar group renders correctly", () => {
      render(BasicToolbarGroupTest);
      const group = screen.getByTestId("basic-toolbar-group");

      expect(group).toBeInTheDocument();
      expect(group).toHaveAttribute("data-scope", "toolbar-group");
      expect(group).toHaveAttribute("data-part", "base");
    });

    test("toolbar group contains buttons", () => {
      render(BasicToolbarGroupTest);
      const buttons = screen.getAllByRole("button");

      expect(buttons.length).toBe(2);
    });
  });

  describe("Spacing Variants", () => {
    test("renders toolbar group with different spacing variants", () => {
      render(SpacingToolbarGroupTest);
      const noneSpacing = screen.getByTestId("spacing-none");
      const smSpacing = screen.getByTestId("spacing-sm");
      const mdSpacing = screen.getByTestId("spacing-md");
      const lgSpacing = screen.getByTestId("spacing-lg");

      expect(noneSpacing).toBeInTheDocument();
      expect(smSpacing).toBeInTheDocument();
      expect(mdSpacing).toBeInTheDocument();
      expect(lgSpacing).toBeInTheDocument();
    });
  });

  describe("Padding Variants", () => {
    test("renders toolbar group with different padding variants", () => {
      render(PaddingToolbarGroupTest);
      const nonePadding = screen.getByTestId("padding-none");
      const smPadding = screen.getByTestId("padding-sm");
      const mdPadding = screen.getByTestId("padding-md");
      const lgPadding = screen.getByTestId("padding-lg");

      expect(nonePadding).toBeInTheDocument();
      expect(smPadding).toBeInTheDocument();
      expect(mdPadding).toBeInTheDocument();
      expect(lgPadding).toBeInTheDocument();
    });
  });

  describe("Position Variants", () => {
    test("renders toolbar group with different position variants", () => {
      render(PositionToolbarGroupTest);
      const startPosition = screen.getByTestId("position-start");
      const middlePosition = screen.getByTestId("position-middle");
      const endPosition = screen.getByTestId("position-end");

      expect(startPosition).toBeInTheDocument();
      expect(middlePosition).toBeInTheDocument();
      expect(endPosition).toBeInTheDocument();
    });
  });
});
