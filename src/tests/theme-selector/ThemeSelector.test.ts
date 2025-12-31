import { cleanup, render, screen, waitFor } from "@testing-library/svelte";
import { expect, test, afterEach, describe, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicThemeSelectorTest from "./basic-theme-selector.test.svelte";
import { themeConfigs } from "$lib/theme-selector/themes";
import { loadTheme } from "$lib/theme-selector";
import { setupLocalStorageMock } from "../utils/localStorageMock";

// Set up localStorage mock
const localStorageMock = setupLocalStorageMock();

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

      // Wait for dropdown to open and aria-expanded to be true
      await waitFor(() => {
        expect(button).toHaveAttribute("aria-expanded", "true");
      });

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

      // Wait for dropdown to open
      await waitFor(() => {
        expect(button).toHaveAttribute("aria-expanded", "true");
      });

      // Check that color swatches are rendered
      const swatches = screen.getAllByTestId("basic-theme");
      expect(swatches.length).toBeGreaterThan(0);
    });

    test("highlights active theme with correct styling", async () => {
      const user = userEvent.setup();
      render(BasicThemeSelectorTest);

      const button = screen.getByRole("button", { name: /select theme/i });
      await user.click(button);

      // Wait for dropdown to open
      await waitFor(() => {
        expect(button).toHaveAttribute("aria-expanded", "true");
      });

      // Find the default theme item in dropdown (should be active)
      const activeTheme = screen.getByRole("option", { name: /default/i });
      expect(activeTheme).toHaveAttribute("aria-selected", "true");
    });
  });

  describe("Theme Interactions", () => {
    test("changes theme when clicking on theme option", async () => {
      const user = userEvent.setup();

      render(BasicThemeSelectorTest);

      const button = screen.getByRole("button", { name: /select theme/i });
      await user.click(button);

      // Wait for dropdown to open
      await waitFor(() => {
        expect(button).toHaveAttribute("aria-expanded", "true");
      });

      // Click on "Minimal" theme - find by role="option"
      const minimalOption = screen.getByRole("option", { name: /minimal/i });
      expect(minimalOption).toBeDefined();
      await user.click(minimalOption);

      // Wait for dropdown to close
      await waitFor(() => {
        expect(button).toHaveAttribute("aria-expanded", "false");
      });

      // Re-open dropdown to check active theme
      await user.click(button);

      // Wait for dropdown to open again
      await waitFor(() => {
        expect(button).toHaveAttribute("aria-expanded", "true");
      });

      // Check that Minimal is now active
      const minimalOptionAfter = screen.getByRole("option", { name: /minimal/i });
      expect(minimalOptionAfter).toHaveAttribute("aria-selected", "true");
    });

    test("updates button text when theme changes", async () => {
      const user = userEvent.setup();
      render(BasicThemeSelectorTest);

      const button = screen.getByRole("button", { name: /select theme/i });

      // Initial state should show "Default"
      expect(button).toHaveTextContent("Default");

      await user.click(button);

      // Wait for dropdown to open
      await waitFor(() => {
        expect(button).toHaveAttribute("aria-expanded", "true");
      });

      // Click on "Enterprise" theme
      const enterpriseOption = screen.getByRole("option", { name: /enterprise/i });
      await user.click(enterpriseOption);

      // Wait for theme change to complete
      await waitFor(() => {
        expect(button).toHaveTextContent("Enterprise");
      });
    });

    test("persists theme selection to localStorage", async () => {
      const user = userEvent.setup();
      render(BasicThemeSelectorTest);

      const button = screen.getByRole("button", { name: /select theme/i });
      await user.click(button);

      // Wait for dropdown to open
      await waitFor(() => {
        expect(button).toHaveAttribute("aria-expanded", "true");
      });

      // Click on "Playful" theme
      const playfulOption = screen.getByRole("option", { name: /playful/i });
      await user.click(playfulOption);

      // Wait for localStorage to be updated
      await waitFor(() => {
        expect(localStorageMock.getItem("flowbite-svelte-theme")).toBe("playful");
      });
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
      expect(button).toHaveAttribute("aria-expanded", "false");

      await user.click(button);

      // After clicking should be true
      await waitFor(() => {
        expect(button.getAttribute("aria-expanded")).toBe("true");
      });
    });

    test("dropdown items are keyboard accessible", async () => {
      const user = userEvent.setup();
      render(BasicThemeSelectorTest);

      const button = screen.getByRole("button", { name: /select theme/i });
      await user.click(button);

      // Wait for dropdown to open
      await waitFor(() => {
        expect(button).toHaveAttribute("aria-expanded", "true");
      });

      // All theme items should be accessible via role="option"
      const themeOptions = screen.getAllByRole("option");

      // Should have one option for each theme
      expect(themeOptions.length).toBeGreaterThanOrEqual(themeConfigs.length);
    });
  });

  describe("Color Swatches", () => {
    test("renders correct number of color swatches per theme", async () => {
      const user = userEvent.setup();
      render(BasicThemeSelectorTest);

      const button = screen.getByRole("button", { name: /select theme/i });
      await user.click(button);

      // Wait for dropdown to open
      await waitFor(() => {
        expect(button).toHaveAttribute("aria-expanded", "true");
      });

      // Each theme should have its color swatches
      themeConfigs.forEach((theme) => {
        const themeOption = screen.getByRole("option", { name: new RegExp(theme.name, "i") });
        const colorDivs = themeOption.querySelectorAll(".h-3\\.5");
        expect(colorDivs.length).toBe(theme.colors.length);
      });
    });

    test("first color swatch has correct border radius", async () => {
      const user = userEvent.setup();
      render(BasicThemeSelectorTest);

      const button = screen.getByRole("button", { name: /select theme/i });
      await user.click(button);

      // Wait for dropdown to open
      await waitFor(() => {
        expect(button).toHaveAttribute("aria-expanded", "true");
      });

      await waitFor(() => {
        const firstSwatch = document.querySelector(".h-3\\.5.rounded-s-xs");
        expect(firstSwatch).toBeInTheDocument();
      });
    });

    test("last color swatch has correct border radius", async () => {
      const user = userEvent.setup();
      render(BasicThemeSelectorTest);

      const button = screen.getByRole("button", { name: /select theme/i });
      await user.click(button);

      // Wait for dropdown to open
      await waitFor(() => {
        expect(button).toHaveAttribute("aria-expanded", "true");
      });

      await waitFor(() => {
        const lastSwatch = document.querySelector(".h-3\\.5.rounded-e-xs");
        expect(lastSwatch).toBeInTheDocument();
      });
    });
  });
});
