import { cleanup, render } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicSpanTest from "./basic-span.test.svelte";
import BooleanSpanTest from "./boolean-span.test.svelte";
import GradientSpanTest from "./gradient-span.test.svelte";
import HighlightSpanTest from "./highlight-span.test.svelte";
import DecorationSpanTest from "./decoration-span.test.svelte";
import DecorationColorSpanTest from "./decoration-color-span.test.svelte";
import DecorationThicknessSpanTest from "./decoration-thickness-span.test.svelte";
import CustomClassSpanTest from "./custom-class-span.test.svelte";
import AttributesSpanTest from "./attributes-span.test.svelte";
import CombinedSpanTest from "./combined-span.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Span Component", () => {
  describe("Basic Rendering", () => {
    test("renders span element", () => {
      const { container } = render(BasicSpanTest);
      const span = container.querySelector('[data-scope="span"]');

      expect(span).toBeInTheDocument();
      expect(span?.tagName).toBe("SPAN");
    });

    test("renders with correct data attributes", () => {
      const { container } = render(BasicSpanTest);
      const span = container.querySelector('[data-scope="span"]');

      expect(span).toHaveAttribute("data-scope", "span");
      expect(span).toHaveAttribute("data-part", "base");
    });

    test("renders children content", () => {
      const { container } = render(BasicSpanTest);
      const span = container.querySelector('[data-scope="span"]');

      expect(span).toBeInTheDocument();
      expect(span?.textContent).toBeTruthy();
    });
  });

  describe("Boolean Variants", () => {
    test("renders italic span", () => {
      const { container } = render(BooleanSpanTest);
      const span = container.querySelector('[data-testid="italic-span"]');

      expect(span).toBeInTheDocument();
      expect(span).toHaveClass("italic");
    });

    test("renders underline span", () => {
      const { container } = render(BooleanSpanTest);
      const span = container.querySelector('[data-testid="underline-span"]');

      expect(span).toBeInTheDocument();
      expect(span?.className).toBeTruthy();
    });

    test("renders linethrough span", () => {
      const { container } = render(BooleanSpanTest);
      const span = container.querySelector('[data-testid="linethrough-span"]');

      expect(span).toBeInTheDocument();
      expect(span?.className).toBeTruthy();
    });

    test("renders uppercase span", () => {
      const { container } = render(BooleanSpanTest);
      const span = container.querySelector('[data-testid="uppercase-span"]');

      expect(span).toBeInTheDocument();
      expect(span?.className).toBeTruthy();
    });

    test("all boolean variants have proper data attributes", () => {
      const { container } = render(BooleanSpanTest);
      const spans = container.querySelectorAll('[data-scope="span"]');

      spans.forEach((span) => {
        expect(span).toHaveAttribute("data-scope", "span");
        expect(span).toHaveAttribute("data-part", "base");
      });
    });
  });

  describe("Gradient Variants", () => {
    test.each([
      { testId: "gradient-sky-emerald", name: "skyToEmerald" },
      { testId: "gradient-purple-blue", name: "purpleToBlue" },
      { testId: "gradient-pink-orange", name: "pinkToOrange" }
      // ... other variants
    ])("renders $name gradient", ({ testId }) => {
      const { container } = render(GradientSpanTest);
      const span = container.querySelector(`[data-testid="${testId}"]`);
      expect(span).toBeInTheDocument();
    });
  });

  describe("Highlight Variants", () => {
    test.each([
      { color: "blue" },
      { color: "green" },
      { color: "red" },
      { color: "yellow" },
      { color: "purple" },
      { color: "pink" },
      { color: "indigo" },
      { color: "teal" },
      { color: "orange" },
      { color: "cyan" },
      { color: "fuchsia" },
      { color: "amber" },
      { color: "lime" },
      { color: "none" }
    ])("renders $color highlight", ({ color }) => {
      const { container } = render(HighlightSpanTest);
      const span = container.querySelector(`[data-testid="highlight-${color}"]`);
      expect(span).toBeInTheDocument();
    });
  });

  describe("Decoration Variants", () => {
    test("renders solid decoration", () => {
      const { container } = render(DecorationSpanTest);
      const span = container.querySelector('[data-testid="decoration-solid"]');

      expect(span).toBeInTheDocument();
      expect(span?.className).toBeTruthy();
    });

    test("renders double decoration", () => {
      const { container } = render(DecorationSpanTest);
      const span = container.querySelector('[data-testid="decoration-double"]');

      expect(span).toBeInTheDocument();
    });

    test("renders dotted decoration", () => {
      const { container } = render(DecorationSpanTest);
      const span = container.querySelector('[data-testid="decoration-dotted"]');

      expect(span).toBeInTheDocument();
    });

    test("renders dashed decoration", () => {
      const { container } = render(DecorationSpanTest);
      const span = container.querySelector('[data-testid="decoration-dashed"]');

      expect(span).toBeInTheDocument();
    });

    test("renders wavy decoration", () => {
      const { container } = render(DecorationSpanTest);
      const span = container.querySelector('[data-testid="decoration-wavy"]');

      expect(span).toBeInTheDocument();
    });

    test("renders with no decoration when decoration is none", () => {
      const { container } = render(DecorationSpanTest);
      const span = container.querySelector('[data-testid="decoration-none"]');

      expect(span).toBeInTheDocument();
    });
  });

  describe("Decoration Color Variants", () => {
    test.each([
      { color: "primary" },
      { color: "secondary" },
      { color: "gray" },
      { color: "red" },
      { color: "orange" },
      { color: "yellow" },
      { color: "lime" },
      { color: "green" },
      { color: "emerald" },
      { color: "teal" },
      { color: "cyan" },
      { color: "sky" },
      { color: "blue" },
      { color: "indigo" },
      { color: "violet" },
      { color: "purple" },
      { color: "fuchsia" },
      { color: "pink" },
      { color: "rose" },
      { color: "none" }
    ])("renders $color decoration color", ({ color }) => {
      const { container } = render(DecorationColorSpanTest);
      const span = container.querySelector(`[data-testid="decoration-color-${color}"]`);
      expect(span).toBeInTheDocument();
    });
  });

  describe("Decoration Thickness Variants", () => {
    test("renders decoration thickness 0", () => {
      const { container } = render(DecorationThicknessSpanTest);
      const span = container.querySelector('[data-testid="decoration-thickness-0"]');

      expect(span).toBeInTheDocument();
      expect(span?.className).toBeTruthy();
    });

    test("renders decoration thickness 1", () => {
      const { container } = render(DecorationThicknessSpanTest);
      const span = container.querySelector('[data-testid="decoration-thickness-1"]');

      expect(span).toBeInTheDocument();
    });

    test("renders decoration thickness 2", () => {
      const { container } = render(DecorationThicknessSpanTest);
      const span = container.querySelector('[data-testid="decoration-thickness-2"]');

      expect(span).toBeInTheDocument();
    });

    test("renders decoration thickness 4", () => {
      const { container } = render(DecorationThicknessSpanTest);
      const span = container.querySelector('[data-testid="decoration-thickness-4"]');

      expect(span).toBeInTheDocument();
    });

    test("renders decoration thickness 8", () => {
      const { container } = render(DecorationThicknessSpanTest);
      const span = container.querySelector('[data-testid="decoration-thickness-8"]');

      expect(span).toBeInTheDocument();
    });
  });

  describe("Custom Styling", () => {
    test("applies custom class to span", () => {
      const { container } = render(CustomClassSpanTest);
      const span = container.querySelector('[data-testid="custom-span"]');

      expect(span).toBeInTheDocument();
      expect(span).toHaveClass("custom-span-class");
    });

    test("merges custom class with theme classes", () => {
      const { container } = render(CustomClassSpanTest);
      const span = container.querySelector('[data-testid="custom-span"]');

      expect(span?.className).toBeTruthy();
      expect(span?.classList.length).toBeGreaterThan(0);
    });
  });

  describe("HTML Attributes", () => {
    test("applies additional HTML attributes", () => {
      const { container } = render(AttributesSpanTest);
      const span = container.querySelector('[data-testid="attributes-span"]');

      expect(span).toBeInTheDocument();
      expect(span).toHaveAttribute("id", "custom-span-id");
      expect(span).toHaveAttribute("title", "Span title");
      expect(span).toHaveAttribute("aria-label", "Span label");
    });

    test("supports custom data attributes", () => {
      const { container } = render(AttributesSpanTest);
      const span = container.querySelector('[data-testid="attributes-span"]');

      expect(span).toHaveAttribute("data-custom", "custom-value");
      expect(span).toHaveAttribute("data-testid", "attributes-span");
    });
  });

  describe("Combined Variants", () => {
    test("renders italic and underline combined", () => {
      const { container } = render(CombinedSpanTest);
      const span = container.querySelector('[data-testid="combined-italic-underline"]');

      expect(span).toBeInTheDocument();
      expect(span?.className).toBeTruthy();
    });

    test("renders uppercase with highlight combined", () => {
      const { container } = render(CombinedSpanTest);
      const span = container.querySelector('[data-testid="combined-uppercase-highlight"]');

      expect(span).toBeInTheDocument();
    });

    test("renders italic with gradient combined", () => {
      const { container } = render(CombinedSpanTest);
      const span = container.querySelector('[data-testid="combined-italic-gradient"]');

      expect(span).toBeInTheDocument();
    });

    test("renders decoration with color and thickness combined", () => {
      const { container } = render(CombinedSpanTest);
      const span = container.querySelector('[data-testid="combined-decoration"]');

      expect(span).toBeInTheDocument();
      expect(span?.className).toBeTruthy();
    });

    test("renders multiple boolean variants combined", () => {
      const { container } = render(CombinedSpanTest);
      const span = container.querySelector('[data-testid="combined-multiple"]');

      expect(span).toBeInTheDocument();
      expect(span?.className).toBeTruthy();
    });

    test("combined variants maintain proper data attributes", () => {
      const { container } = render(CombinedSpanTest);
      const spans = container.querySelectorAll('[data-scope="span"]');

      spans.forEach((span) => {
        expect(span).toHaveAttribute("data-scope", "span");
        expect(span).toHaveAttribute("data-part", "base");
      });
    });
  });

  describe("Semantic HTML", () => {
    test("uses semantic span element", () => {
      const { container } = render(BasicSpanTest);
      const span = container.querySelector("span");

      expect(span).toBeInTheDocument();
      expect(span?.tagName).toBe("SPAN");
    });

    test("maintains proper document structure", () => {
      const { container } = render(BasicSpanTest);
      const span = container.querySelector('[data-scope="span"]');

      expect(span).toBeInTheDocument();
      expect(span?.parentElement).toBeTruthy();
    });
  });

  describe("Theme Integration", () => {
    test("element has className property", () => {
      const { container } = render(BasicSpanTest);
      const span = container.querySelector('[data-scope="span"]');

      // Span element has className property (may be empty without variants)
      expect(span).toBeInTheDocument();
      expect(span).toHaveProperty("className");
    });

    test("theme classes work with custom classes", () => {
      const { container } = render(CustomClassSpanTest);
      const span = container.querySelector('[data-testid="custom-span"]');

      // Both theme and custom classes should be present
      expect(span?.className).toBeTruthy();
      expect(span).toHaveClass("custom-span-class");
    });

    test("variant classes are properly applied", () => {
      const { container } = render(BooleanSpanTest);
      const italicSpan = container.querySelector('[data-testid="italic-span"]');
      const underlineSpan = container.querySelector('[data-testid="underline-span"]');

      expect(italicSpan?.className).toBeTruthy();
      expect(underlineSpan?.className).toBeTruthy();
      // Different variants should have different class combinations
      expect(italicSpan?.className).not.toBe(underlineSpan?.className);
    });
  });

  describe("Accessibility", () => {
    test("span element is semantically meaningful", () => {
      const { container } = render(BasicSpanTest);
      const span = container.querySelector("span");

      expect(span).toBeInTheDocument();
      expect(span?.tagName).toBe("SPAN");
    });

    test("content is readable", () => {
      const { container } = render(BasicSpanTest);
      const span = container.querySelector('[data-scope="span"]');

      expect(span?.textContent).toBeTruthy();
      expect(span?.textContent?.length).toBeGreaterThan(0);
    });

    test("supports aria attributes", () => {
      const { container } = render(AttributesSpanTest);
      const span = container.querySelector('[data-testid="attributes-span"]');

      expect(span).toHaveAttribute("aria-label", "Span label");
    });

    test("maintains text readability with decorations", () => {
      const { container } = render(DecorationSpanTest);
      const spans = container.querySelectorAll('[data-scope="span"]');

      spans.forEach((span) => {
        expect(span.textContent).toBeTruthy();
        expect(span.textContent?.length).toBeGreaterThan(0);
      });
    });

    test("maintains text readability with highlights", () => {
      const { container } = render(HighlightSpanTest);
      const spans = container.querySelectorAll('[data-scope="span"]');

      spans.forEach((span) => {
        expect(span.textContent).toBeTruthy();
      });
    });
  });

  describe("Edge Cases", () => {
    test("renders correctly as basic span element", () => {
      const { container } = render(BasicSpanTest);
      const span = container.querySelector('[data-scope="span"]');

      expect(span).toBeInTheDocument();
      expect(span?.tagName).toBe("SPAN");
    });

    test("handles none values for optional variants", () => {
      const { container } = render(GradientSpanTest);
      const noneGradient = container.querySelector('[data-testid="gradient-none"]');

      expect(noneGradient).toBeInTheDocument();
    });

    test("multiple spans can coexist", () => {
      const { container } = render(BooleanSpanTest);
      const spans = container.querySelectorAll('[data-scope="span"]');

      expect(spans.length).toBeGreaterThan(1);
      spans.forEach((span) => {
        expect(span).toBeInTheDocument();
      });
    });
  });
});
