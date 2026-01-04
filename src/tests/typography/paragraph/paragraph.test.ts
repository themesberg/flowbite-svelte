import { cleanup, render } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicParagraphTest from "./basic-paragraph.test.svelte";
import SizeParagraphTest from "./size-paragraph.test.svelte";
import WeightParagraphTest from "./weight-paragraph.test.svelte";
import AlignParagraphTest from "./align-paragraph.test.svelte";
import BooleanParagraphTest from "./boolean-paragraph.test.svelte";
import SpacingParagraphTest from "./spacing-paragraph.test.svelte";
import CustomClassParagraphTest from "./custom-class-paragraph.test.svelte";
import CombinedParagraphTest from "./combined-paragraph.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Paragraph Component", () => {
  describe("Basic Rendering", () => {
    test("renders p element", () => {
      const { container } = render(BasicParagraphTest);
      const paragraph = container.querySelector('[data-scope="paragraph"]');

      expect(paragraph).toBeInTheDocument();
      expect(paragraph?.tagName).toBe("P");
    });

    test("renders with correct data attributes", () => {
      const { container } = render(BasicParagraphTest);
      const paragraph = container.querySelector('[data-scope="paragraph"]');

      expect(paragraph).toHaveAttribute("data-scope", "paragraph");
      expect(paragraph).toHaveAttribute("data-part", "base");
    });

    test("renders children content", () => {
      const { container } = render(BasicParagraphTest);
      const paragraph = container.querySelector('[data-scope="paragraph"]');

      expect(paragraph).toBeInTheDocument();
      expect(paragraph?.textContent).toBeTruthy();
    });
  });

  describe("Size Variants", () => {
    test("renders extra small paragraph", () => {
      const { container } = render(SizeParagraphTest);
      const paragraph = container.querySelector('[data-testid="size-xs"]');

      expect(paragraph).toBeInTheDocument();
      expect(paragraph?.className).toBeTruthy();
    });

    test("renders small paragraph", () => {
      const { container } = render(SizeParagraphTest);
      const paragraph = container.querySelector('[data-testid="size-sm"]');

      expect(paragraph).toBeInTheDocument();
    });

    test("renders base size paragraph", () => {
      const { container } = render(SizeParagraphTest);
      const paragraph = container.querySelector('[data-testid="size-base"]');

      expect(paragraph).toBeInTheDocument();
    });

    test("renders large paragraph", () => {
      const { container } = render(SizeParagraphTest);
      const paragraph = container.querySelector('[data-testid="size-lg"]');

      expect(paragraph).toBeInTheDocument();
    });

    test("renders extra large paragraph", () => {
      const { container } = render(SizeParagraphTest);
      const paragraph = container.querySelector('[data-testid="size-xl"]');

      expect(paragraph).toBeInTheDocument();
    });

    test("all size variants render correctly", () => {
      const { container } = render(SizeParagraphTest);
      const paragraphs = container.querySelectorAll('[data-scope="paragraph"]');

      expect(paragraphs.length).toBe(5);
      paragraphs.forEach((p) => {
        expect(p).toBeInTheDocument();
        expect(p?.tagName).toBe("P");
      });
    });
  });

  describe("Weight Variants", () => {
    test("renders thin weight paragraph", () => {
      const { container } = render(WeightParagraphTest);
      const paragraph = container.querySelector('[data-testid="weight-thin"]');

      expect(paragraph).toBeInTheDocument();
    });

    test("renders normal weight paragraph", () => {
      const { container } = render(WeightParagraphTest);
      const paragraph = container.querySelector('[data-testid="weight-normal"]');

      expect(paragraph).toBeInTheDocument();
    });

    test("renders bold weight paragraph", () => {
      const { container } = render(WeightParagraphTest);
      const paragraph = container.querySelector('[data-testid="weight-bold"]');

      expect(paragraph).toBeInTheDocument();
    });

    test("renders extrabold weight paragraph", () => {
      const { container } = render(WeightParagraphTest);
      const paragraph = container.querySelector('[data-testid="weight-extrabold"]');

      expect(paragraph).toBeInTheDocument();
    });

    test("all weight variants render correctly", () => {
      const { container } = render(WeightParagraphTest);
      const paragraphs = container.querySelectorAll('[data-scope="paragraph"]');

      expect(paragraphs.length).toBe(4);
      paragraphs.forEach((p) => {
        expect(p).toBeInTheDocument();
      });
    });
  });

  describe("Alignment Variants", () => {
    test("renders left aligned paragraph", () => {
      const { container } = render(AlignParagraphTest);
      const paragraph = container.querySelector('[data-testid="align-left"]');

      expect(paragraph).toBeInTheDocument();
    });

    test("renders center aligned paragraph", () => {
      const { container } = render(AlignParagraphTest);
      const paragraph = container.querySelector('[data-testid="align-center"]');

      expect(paragraph).toBeInTheDocument();
    });

    test("renders right aligned paragraph", () => {
      const { container } = render(AlignParagraphTest);
      const paragraph = container.querySelector('[data-testid="align-right"]');

      expect(paragraph).toBeInTheDocument();
    });

    test("all alignment variants render correctly", () => {
      const { container } = render(AlignParagraphTest);
      const paragraphs = container.querySelectorAll('[data-scope="paragraph"]');

      expect(paragraphs.length).toBe(3);
      paragraphs.forEach((p) => {
        expect(p).toBeInTheDocument();
      });
    });
  });

  describe("Boolean Props", () => {
    test("renders italic paragraph", () => {
      const { container } = render(BooleanParagraphTest);
      const paragraph = container.querySelector('[data-testid="italic-paragraph"]');

      expect(paragraph).toBeInTheDocument();
      // Italic applies classes through theme
      expect(paragraph?.className).toBeTruthy();
    });

    test("renders justified paragraph", () => {
      const { container } = render(BooleanParagraphTest);
      const paragraph = container.querySelector('[data-testid="justify-paragraph"]');

      expect(paragraph).toBeInTheDocument();
    });

    test("renders paragraph with firstUpper", () => {
      const { container } = render(BooleanParagraphTest);
      const paragraph = container.querySelector('[data-testid="firstupper-paragraph"]');

      expect(paragraph).toBeInTheDocument();
      // firstUpper applies special first-letter styling
      expect(paragraph?.className).toBeTruthy();
    });

    test("all boolean prop variants render correctly", () => {
      const { container } = render(BooleanParagraphTest);
      const paragraphs = container.querySelectorAll('[data-scope="paragraph"]');

      expect(paragraphs.length).toBe(3);
      paragraphs.forEach((p) => {
        expect(p).toBeInTheDocument();
      });
    });
  });

  describe("Spacing Variants", () => {
    test("renders paragraph with nowrap whitespace", () => {
      const { container } = render(SpacingParagraphTest);
      const paragraph = container.querySelector('[data-testid="whitespace-nowrap"]');

      expect(paragraph).toBeInTheDocument();
    });

    test("renders paragraph with pre whitespace", () => {
      const { container } = render(SpacingParagraphTest);
      const paragraph = container.querySelector('[data-testid="whitespace-pre"]');

      expect(paragraph).toBeInTheDocument();
    });

    test("renders paragraph with tight height", () => {
      const { container } = render(SpacingParagraphTest);
      const paragraph = container.querySelector('[data-testid="height-tight"]');

      expect(paragraph).toBeInTheDocument();
    });

    test("renders paragraph with loose height", () => {
      const { container } = render(SpacingParagraphTest);
      const paragraph = container.querySelector('[data-testid="height-loose"]');

      expect(paragraph).toBeInTheDocument();
    });

    test("all spacing variants render correctly", () => {
      const { container } = render(SpacingParagraphTest);
      const paragraphs = container.querySelectorAll('[data-scope="paragraph"]');

      expect(paragraphs.length).toBe(4);
      paragraphs.forEach((p) => {
        expect(p).toBeInTheDocument();
      });
    });
  });

  describe("Custom Styling", () => {
    test("applies custom class to paragraph", () => {
      const { container } = render(CustomClassParagraphTest);
      const paragraph = container.querySelector('[data-testid="custom-paragraph"]');

      expect(paragraph).toHaveClass("custom-paragraph-class");
    });

    test("merges custom class with theme classes", () => {
      const { container } = render(CustomClassParagraphTest);
      const paragraph = container.querySelector('[data-testid="custom-paragraph"]');

      expect(paragraph?.className).toBeTruthy();
      expect(paragraph?.classList.length).toBeGreaterThan(0);
    });
  });

  describe("Combined Props", () => {
    test("renders paragraph with multiple props", () => {
      const { container } = render(CombinedParagraphTest);
      const paragraph = container.querySelector('[data-testid="combined-paragraph"]');

      expect(paragraph).toBeInTheDocument();
      // Multiple props should combine their theme classes
      expect(paragraph?.className).toBeTruthy();
    });

    test("combined props maintain proper rendering", () => {
      const { container } = render(CombinedParagraphTest);
      const paragraph = container.querySelector('[data-scope="paragraph"]');

      expect(paragraph).toBeInTheDocument();
      expect(paragraph?.tagName).toBe("P");
      expect(paragraph?.textContent).toBeTruthy();
    });
  });

  describe("Theme Integration", () => {
    test("applies theme classes", () => {
      const { container } = render(BasicParagraphTest);
      const paragraph = container.querySelector('[data-scope="paragraph"]');

      // Theme classes are applied through the paragraph() function
      expect(paragraph?.className).toBeTruthy();
    });

    test("theme classes work with variant props", () => {
      const { container } = render(SizeParagraphTest);
      const paragraphs = container.querySelectorAll('[data-scope="paragraph"]');

      paragraphs.forEach((p) => {
        expect(p?.className).toBeTruthy();
      });
    });
  });

  describe("Semantic HTML", () => {
    test("uses semantic p element", () => {
      const { container } = render(BasicParagraphTest);
      const paragraph = container.querySelector("p");

      expect(paragraph).toBeInTheDocument();
      expect(paragraph?.tagName).toBe("P");
    });

    test("maintains proper document structure", () => {
      const { container } = render(BasicParagraphTest);
      const paragraph = container.querySelector('[data-scope="paragraph"]');

      expect(paragraph).toBeInTheDocument();
      expect(paragraph?.parentElement).toBeTruthy();
    });
  });

  describe("Accessibility", () => {
    test("paragraph element is semantically meaningful", () => {
      const { container } = render(BasicParagraphTest);
      const paragraph = container.querySelector("p");

      expect(paragraph).toBeInTheDocument();
      expect(paragraph?.tagName).toBe("P");
    });

    test("content is readable", () => {
      const { container } = render(BasicParagraphTest);
      const paragraph = container.querySelector('[data-scope="paragraph"]');

      expect(paragraph?.textContent).toBeTruthy();
      expect(paragraph?.textContent?.length).toBeGreaterThan(0);
    });

    test("whitespace variants preserve content structure", () => {
      const { container } = render(SpacingParagraphTest);
      const preParagraph = container.querySelector('[data-testid="whitespace-pre"]');

      expect(preParagraph).toBeInTheDocument();
      expect(preParagraph?.textContent).toBeTruthy();
    });
  });

  describe("HTML Attributes", () => {
    test("supports additional HTML attributes", () => {
      const { container } = render(BasicParagraphTest);
      const paragraph = container.querySelector('[data-testid="basic-paragraph"]');

      expect(paragraph).toHaveAttribute("data-testid", "basic-paragraph");
    });

    test("maintains data attributes with variants", () => {
      const { container } = render(CombinedParagraphTest);
      const paragraph = container.querySelector('[data-testid="combined-paragraph"]');

      expect(paragraph).toHaveAttribute("data-testid", "combined-paragraph");
      expect(paragraph).toHaveAttribute("data-scope", "paragraph");
    });
  });
});
