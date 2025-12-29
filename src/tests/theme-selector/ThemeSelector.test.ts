import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicThemeSelectorTest from "./basic-theme-selector.test.svelte";
import { themeConfigs } from "$lib/theme-selector/themes";
import { loadTheme } from "$lib/theme-selector";

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    }
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock
});

beforeEach(() => {
  // Clear localStorage before each test
  localStorageMock.clear();

  // Remove any existing theme links
  document.querySelectorAll("#dynamic-theme-css, #initial-theme-css, #dynamic-theme-font").forEach((link) => link.remove());

  // Reset to default theme to prevent state leaking between tests
  loadTheme("default");
});

afterEach(() => {
  cleanup();
});

describe("ThemeSelector Component", () => {
  describe("Basic Rendering", () => {
    test("renders theme selector button", () => {
      render(BasicThemeSelectorTest);
      const button = screen.getByRole("button", { name: /select theme/i });

      expect(button).toBeInTheDocument();
    });

    test("displays default theme name", () => {
      render(BasicThemeSelectorTest);
      const button = screen.getByRole("button", { name: /select theme/i });

      expect(button).toHaveTextContent("Default");
    });

    test("renders theme selector icon", () => {
      render(BasicThemeSelectorTest);
      const button = screen.getByRole("button", { name: /select theme/i });
      const svg = button.querySelector("svg");

      expect(svg).toBeInTheDocument();
    });
  });

  describe("Theme Dropdown", () => {
    test("displays all available themes when opened", async () => {
      const user = userEvent.setup();
      render(BasicThemeSelectorTest);

      const button = screen.getByRole("button", { name: /select theme/i });
      await user.click(button);

      // Check that all themes are displayed using getAllByText since themes appear in dropdown
      for (const theme of themeConfigs) {
        const themeItems = screen.getAllByText(theme.name);
        // Should find at least the dropdown item (button might also show it)
        expect(themeItems.length).toBeGreaterThan(0);
      }
    });

    test("displays color swatches for each theme", async () => {
      const user = userEvent.setup();
      render(BasicThemeSelectorTest);

      const button = screen.getByRole("button", { name: /select theme/i });
      await user.click(button);

      // Check that color swatches are rendered
      const colorSwatches = document.querySelectorAll(".h-3\\.5");
      expect(colorSwatches.length).toBeGreaterThan(0);
    });

    test("highlights active theme with correct styling", async () => {
      const user = userEvent.setup();
      render(BasicThemeSelectorTest);

      const button = screen.getByRole("button", { name: /select theme/i });
      await user.click(button);

      // Find the default theme item in dropdown (should be active)
      const dropdownButtons = screen.getAllByRole("button").filter((btn) => btn.textContent?.includes("Default") && btn.classList.contains("bg-brand-50"));

      expect(dropdownButtons.length).toBeGreaterThan(0);
      expect(dropdownButtons[0].className).toContain("bg-brand-50");
    });
  });

  describe("Theme Interactions", () => {
    test("changes theme when clicking on theme option", async () => {
      const user = userEvent.setup();

      render(BasicThemeSelectorTest);

      const button = screen.getByRole("button", { name: /select theme/i });
      await user.click(button);

      // Click on "Minimal" theme - get all buttons and find the one in dropdown
      const allButtons = screen.getAllByRole("button");
      const minimalButton = allButtons.find((btn) => btn.textContent?.includes("Minimal") && btn.classList.contains("text-left"));

      expect(minimalButton).toBeDefined();
      if (minimalButton) {
        await user.click(minimalButton);
      }

      // Re-open dropdown to check active theme
      await user.click(button);

      // Check that Minimal is now active
      const activeButtons = screen.getAllByRole("button").filter((btn) => btn.textContent?.includes("Minimal") && btn.classList.contains("bg-brand-50"));
      expect(activeButtons.length).toBeGreaterThan(0);
    });

    test("updates button text when theme changes", async () => {
      const user = userEvent.setup();
      render(BasicThemeSelectorTest);

      const button = screen.getByRole("button", { name: /select theme/i });

      // Initial state should show "Default"
      expect(button).toHaveTextContent("Default");

      await user.click(button);

      // Click on "Enterprise" theme
      const allButtons = screen.getAllByRole("button");
      const enterpriseButton = allButtons.find((btn) => btn.textContent?.includes("Enterprise") && btn.classList.contains("text-left"));

      if (enterpriseButton) {
        await user.click(enterpriseButton);
      }

      // Button should now show "Enterprise"
      expect(button).toHaveTextContent("Enterprise");
    });

    test("persists theme selection to localStorage", async () => {
      const user = userEvent.setup();
      render(BasicThemeSelectorTest);

      const button = screen.getByRole("button", { name: /select theme/i });
      await user.click(button);

      // Click on "Playful" theme
      const allButtons = screen.getAllByRole("button");
      const playfulButton = allButtons.find((btn) => btn.textContent?.includes("Playful") && btn.classList.contains("text-left"));

      if (playfulButton) {
        await user.click(playfulButton);
      }

      // Check localStorage
      expect(localStorageMock.getItem("flowbite-svelte-theme")).toBe("playful");
    });
  });

  describe("Theme Configuration", () => {
    test("all themes have required properties", () => {
      themeConfigs.forEach((theme) => {
        expect(theme).toHaveProperty("id");
        expect(theme).toHaveProperty("name");
        expect(theme).toHaveProperty("cssPath");
        expect(theme).toHaveProperty("fontUrl");
        expect(theme).toHaveProperty("colors");
        expect(Array.isArray(theme.colors)).toBe(true);
        expect(theme.colors.length).toBeGreaterThan(0);
      });
    });

    test("theme IDs are unique", () => {
      const ids = themeConfigs.map((theme) => theme.id);
      const uniqueIds = new Set(ids);

      expect(ids.length).toBe(uniqueIds.size);
    });

    test("all themes have valid CSS paths", () => {
      themeConfigs.forEach((theme) => {
        expect(theme.cssPath).toMatch(/\/themes\/.+\.css$/);
      });
    });

    test("all themes have valid font URLs", () => {
      themeConfigs.forEach((theme) => {
        expect(theme.fontUrl).toMatch(/^https:\/\/fonts\.googleapis\.com/);
      });
    });
  });

  describe("Accessibility", () => {
    test("button has proper ARIA attributes", () => {
      render(BasicThemeSelectorTest);
      const button = screen.getByRole("button", { name: /select theme/i });

      expect(button).toHaveAttribute("aria-haspopup", "true");
      expect(button).toHaveAttribute("aria-label", "Select Theme");
    });

    test("button aria-expanded changes when dropdown opens", async () => {
      const user = userEvent.setup();
      render(BasicThemeSelectorTest);

      const button = screen.getByRole("button", { name: /select theme/i });

      // Initially should be false or not expanded
      expect(button).toHaveAttribute("aria-expanded");

      await user.click(button);

      // After clicking should be true
      expect(button.getAttribute("aria-expanded")).toBe("true");
    });

    test("dropdown items are keyboard accessible", async () => {
      const user = userEvent.setup();
      render(BasicThemeSelectorTest);

      const button = screen.getByRole("button", { name: /select theme/i });
      await user.click(button);

      // All theme items should be accessible via keyboard
      const themeButtons = screen.getAllByRole("button");

      // Should have at least the toggle button plus theme options
      expect(themeButtons.length).toBeGreaterThanOrEqual(themeConfigs.length);
    });
  });

  describe("Color Swatches", () => {
    test("renders correct number of color swatches per theme", async () => {
      const user = userEvent.setup();
      render(BasicThemeSelectorTest);

      const button = screen.getByRole("button", { name: /select theme/i });
      await user.click(button);

      // Each theme should have its color swatches
      themeConfigs.forEach((theme) => {
        const allButtons = screen.getAllByRole("button");
        const themeButton = allButtons.find((btn) => btn.textContent?.includes(theme.name) && btn.classList.contains("text-left"));

        if (themeButton) {
          const colorDivs = themeButton.querySelectorAll(".h-3\\.5");
          expect(colorDivs.length).toBe(theme.colors.length);
        }
      });
    });

    test("first color swatch has correct border radius", async () => {
      const user = userEvent.setup();
      render(BasicThemeSelectorTest);

      const button = screen.getByRole("button", { name: /select theme/i });
      await user.click(button);

      const firstSwatch = document.querySelector(".h-3\\.5.rounded-s-xs");
      expect(firstSwatch).toBeInTheDocument();
    });

    test("last color swatch has correct border radius", async () => {
      const user = userEvent.setup();
      render(BasicThemeSelectorTest);

      const button = screen.getByRole("button", { name: /select theme/i });
      await user.click(button);

      const lastSwatch = document.querySelector(".h-3\\.5.rounded-e-xs");
      expect(lastSwatch).toBeInTheDocument();
    });
  });
});
