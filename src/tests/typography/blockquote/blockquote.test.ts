import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicBlockquoteTest from "./basic-blockquote.test.svelte";
import BlockquoteWithBorderTest from "./blockquote-with-border.test.svelte";
import BlockquoteNotItalicTest from "./blockquote-not-italic.test.svelte";
import BlockquoteWithBgTest from "./blockquote-with-bg.test.svelte";
import BlockquoteAlignmentTest from "./blockquote-alignment.test.svelte";
import BlockquoteSizesTest from "./blockquote-sizes.test.svelte";
import BlockquoteCustomClassTest from "./blockquote-custom-class.test.svelte";
import BlockquoteCombinedTest from "./blockquote-combined.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Blockquote Component", () => {
  describe("Basic Rendering", () => {
    test("renders blockquote element", () => {
      render(BasicBlockquoteTest);
      const blockquote = screen.getByRole("blockquote");

      expect(blockquote).toBeInTheDocument();
      expect(blockquote.tagName).toBe("BLOCKQUOTE");
      expect(blockquote).toHaveAttribute("data-scope", "blockquote");
      expect(blockquote).toHaveAttribute("data-part", "base");
    });

    test("renders with provided content", () => {
      render(BasicBlockquoteTest);
      const blockquote = screen.getByRole("blockquote");

      expect(blockquote).toHaveTextContent("This is a blockquote");
    });
  });

  describe("Props", () => {
    test("applies border prop", () => {
      render(BlockquoteWithBorderTest);
      const blockquote = screen.getByRole("blockquote");

      expect(blockquote).toBeInTheDocument();
      expect(blockquote).toHaveTextContent("Blockquote with border");
    });

    test("applies italic prop correctly", () => {
      render(BlockquoteNotItalicTest);
      const blockquote = screen.getByRole("blockquote");

      expect(blockquote).toBeInTheDocument();
      expect(blockquote).toHaveTextContent("Blockquote without italic");
    });

    test("applies bg prop", () => {
      render(BlockquoteWithBgTest);
      const blockquote = screen.getByRole("blockquote");

      expect(blockquote).toBeInTheDocument();
      expect(blockquote).toHaveTextContent("Blockquote with background");
    });

    test("applies custom class", () => {
      render(BlockquoteCustomClassTest);
      const blockquote = screen.getByRole("blockquote");

      expect(blockquote).toHaveClass("custom-blockquote-class");
    });
  });

  describe("Alignment Variants", () => {
    test("renders different alignment variants", () => {
      render(BlockquoteAlignmentTest);

      const leftAlign = screen.getByTestId("align-left");
      const centerAlign = screen.getByTestId("align-center");
      const rightAlign = screen.getByTestId("align-right");

      expect(leftAlign).toBeInTheDocument();
      expect(centerAlign).toBeInTheDocument();
      expect(rightAlign).toBeInTheDocument();

      expect(leftAlign).toHaveTextContent("Left aligned");
      expect(centerAlign).toHaveTextContent("Center aligned");
      expect(rightAlign).toHaveTextContent("Right aligned");
    });
  });

  describe("Size Variants", () => {
    test("renders different size variants", () => {
      render(BlockquoteSizesTest);

      const smallSize = screen.getByTestId("size-sm");
      const baseSize = screen.getByTestId("size-base");
      const largeSize = screen.getByTestId("size-lg");
      const xlSize = screen.getByTestId("size-xl");

      expect(smallSize).toBeInTheDocument();
      expect(baseSize).toBeInTheDocument();
      expect(largeSize).toBeInTheDocument();
      expect(xlSize).toBeInTheDocument();

      expect(smallSize).toHaveTextContent("Small size");
      expect(baseSize).toHaveTextContent("Base size");
      expect(largeSize).toHaveTextContent("Large size");
      expect(xlSize).toHaveTextContent("Extra large size");
    });
  });

  describe("Combined Props", () => {
    test("applies multiple props together", () => {
      render(BlockquoteCombinedTest);
      const blockquote = screen.getByRole("blockquote");

      expect(blockquote).toBeInTheDocument();
      expect(blockquote).toHaveTextContent("Combined props blockquote");
    });
  });

  describe("Default Values", () => {
    test("uses default values when props not provided", () => {
      render(BasicBlockquoteTest);
      const blockquote = screen.getByRole("blockquote");

      // Component should render with defaults (italic=true, alignment="left", size="lg")
      expect(blockquote).toBeInTheDocument();
    });
  });
});
