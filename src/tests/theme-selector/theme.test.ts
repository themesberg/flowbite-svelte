import { describe, test, expect } from "vitest";
import { themeSelector } from "$lib/theme-selector/theme";

describe("ThemeSelector Theme Variants", () => {
  describe("Slot definitions", () => {
    test("defines all required slots", () => {
      const slots = themeSelector();

      expect(slots.button).toBeDefined();
      expect(slots.dropdown).toBeDefined();
      expect(slots.item).toBeDefined();
      expect(slots.itemLabel).toBeDefined();
      expect(slots.colorSwatchContainer).toBeDefined();
      expect(slots.colorSwatch).toBeDefined();
    });

    test("button slot has correct base classes", () => {
      const { button } = themeSelector();

      expect(button()).toContain("gap-2");
      expect(button()).toContain("rounded-sm");
      expect(button()).toContain("border-0");
      expect(button()).toContain("px-1");
      expect(button()).toContain("py-1");
      expect(button()).toContain("shadow-none");
    });

    test("dropdown slot has correct base classes", () => {
      const { dropdown } = themeSelector();

      expect(dropdown()).toContain("w-52");
      expect(dropdown()).toContain("px-2");
    });

    test("item slot has correct base classes", () => {
      const { item } = themeSelector();

      expect(item()).toContain("mb-1");
      expect(item()).toContain("inline-flex");
      expect(item()).toContain("w-full");
      expect(item()).toContain("items-center");
      expect(item()).toContain("justify-between");
      expect(item()).toContain("rounded-xl");
    });

    test("itemLabel slot has correct base classes", () => {
      const { itemLabel } = themeSelector();

      expect(itemLabel()).toContain("theme-select-button");
      expect(itemLabel()).toContain("inline-flex");
      expect(itemLabel()).toContain("w-full");
      expect(itemLabel()).toContain("items-center");
      expect(itemLabel()).toContain("justify-between");
      expect(itemLabel()).toContain("rounded");
    });

    test("colorSwatchContainer slot has correct base classes", () => {
      const { colorSwatchContainer } = themeSelector();

      expect(colorSwatchContainer()).toContain("flex");
      expect(colorSwatchContainer()).toContain("items-center");
      expect(colorSwatchContainer()).toContain("rounded-xs");
    });

    test("colorSwatch slot has correct base classes", () => {
      const { colorSwatch } = themeSelector();

      expect(colorSwatch()).toContain("h-3.5");
      expect(colorSwatch()).toContain("w-[1.125rem]");
    });
  });

  describe("Active variant", () => {
    test("applies active styling when active is true", () => {
      const { item } = themeSelector({ active: true });

      expect(item()).toContain("bg-brand-50");
      expect(item()).toContain("dark:bg-brand-900/20");
    });

    test("does not apply active styling when active is false", () => {
      const { item } = themeSelector({ active: false });

      expect(item()).not.toContain("bg-brand-50");
      expect(item()).not.toContain("dark:bg-brand-900/20");
    });

    test("defaults to false when active is not specified", () => {
      const { item } = themeSelector();

      expect(item()).not.toContain("bg-brand-50");
    });
  });

  describe("SwatchPosition variant", () => {
    test("applies rounded-s-xs for first position", () => {
      const { colorSwatch } = themeSelector({ swatchPosition: "first" });

      expect(colorSwatch()).toContain("rounded-s-xs");
      expect(colorSwatch()).not.toContain("rounded-e-xs");
    });

    test("applies rounded-e-xs for last position", () => {
      const { colorSwatch } = themeSelector({ swatchPosition: "last" });

      expect(colorSwatch()).toContain("rounded-e-xs");
      expect(colorSwatch()).not.toContain("rounded-s-xs");
    });

    test("applies no additional rounding for middle position", () => {
      const { colorSwatch } = themeSelector({ swatchPosition: "middle" });

      expect(colorSwatch()).not.toContain("rounded-s-xs");
      expect(colorSwatch()).not.toContain("rounded-e-xs");
    });

    test("base classes remain regardless of position", () => {
      const variants = ["first", "middle", "last"] as const;

      variants.forEach((position) => {
        const { colorSwatch } = themeSelector({ swatchPosition: position });

        expect(colorSwatch()).toContain("h-3.5");
        expect(colorSwatch()).toContain("w-[1.125rem]");
      });
    });
  });

  describe("Combined variants", () => {
    test("can combine active and swatchPosition variants", () => {
      const theme = themeSelector({
        active: true,
        swatchPosition: "first"
      });

      expect(theme.item()).toContain("bg-brand-50");
      expect(theme.colorSwatch()).toContain("rounded-s-xs");
    });

    test("all slots work together with variants", () => {
      const theme = themeSelector({
        active: true,
        swatchPosition: "last"
      });

      expect(theme.button()).toBeTruthy();
      expect(theme.dropdown()).toBeTruthy();
      expect(theme.item()).toBeTruthy();
      expect(theme.itemLabel()).toBeTruthy();
      expect(theme.colorSwatchContainer()).toBeTruthy();
      expect(theme.colorSwatch()).toBeTruthy();
    });
  });

  describe("Type safety", () => {
    test("themeSelector function is callable", () => {
      expect(() => themeSelector()).not.toThrow();
    });

    test("returns object with slot methods", () => {
      const slots = themeSelector();

      expect(typeof slots.button).toBe("function");
      expect(typeof slots.dropdown).toBe("function");
      expect(typeof slots.item).toBe("function");
      expect(typeof slots.itemLabel).toBe("function");
      expect(typeof slots.colorSwatchContainer).toBe("function");
      expect(typeof slots.colorSwatch).toBe("function");
    });

    test("slot methods return strings", () => {
      const slots = themeSelector();

      expect(typeof slots.button()).toBe("string");
      expect(typeof slots.dropdown()).toBe("string");
      expect(typeof slots.item()).toBe("string");
      expect(typeof slots.itemLabel()).toBe("string");
      expect(typeof slots.colorSwatchContainer()).toBe("string");
      expect(typeof slots.colorSwatch()).toBe("string");
    });
  });
});
