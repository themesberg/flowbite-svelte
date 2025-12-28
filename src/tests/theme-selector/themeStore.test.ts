import { describe, test, expect, beforeEach, vi, afterEach } from "vitest";
import { loadTheme, getCurrentTheme, getSelectedTheme, themeConfigs } from "$lib/theme-selector";

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
  value: localStorageMock,
  writable: true
});

// Store mock links
const mockLinks: HTMLLinkElement[] = [];

// Save original methods to avoid infinite recursion
const originalQuerySelectorAll = document.querySelectorAll.bind(document);
const originalCreateElement = document.createElement.bind(document);

beforeEach(() => {
  // Clear localStorage
  localStorageMock.clear();

  // Clear mock links
  mockLinks.length = 0;

  // Mock document.querySelectorAll
  vi.spyOn(document, "querySelectorAll").mockImplementation((selector: string) => {
    if (selector === "#dynamic-theme-css, #initial-theme-css, #dynamic-theme-font") {
      return mockLinks as unknown as NodeListOf<Element>;
    }
    return originalQuerySelectorAll(selector);
  });

  // Mock document.createElement
  vi.spyOn(document, "createElement").mockImplementation((tagName: string) => {
    if (tagName === "link") {
      const link = originalCreateElement(tagName) as HTMLLinkElement;
      mockLinks.push(link);
      return link;
    }
    return originalCreateElement(tagName);
  });

  // Mock document.head.appendChild
  vi.spyOn(document.head, "appendChild").mockImplementation((node: Node) => {
    return node;
  });

  // Reset theme to default to prevent state leaking (after mocks are set up)
  loadTheme("default");

  // Clear mockLinks after initial theme load so tests start fresh
  mockLinks.length = 0;
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("themeStore", () => {
  describe("getCurrentTheme", () => {
    test("returns default theme when no theme is stored", () => {
      const currentTheme = getCurrentTheme();
      expect(currentTheme).toBe("default");
    });

    test("returns stored theme from localStorage", () => {
      localStorageMock.setItem("flowbite-svelte-theme", "minimal");

      // Since the store is already initialized, we need to load the theme
      loadTheme("minimal");

      expect(getCurrentTheme()).toBe("minimal");
    });
  });

  describe("getSelectedTheme", () => {
    test("returns theme object for current theme", () => {
      loadTheme("enterprise");
      const selectedTheme = getSelectedTheme();

      expect(selectedTheme).toBeDefined();
      expect(selectedTheme?.id).toBe("enterprise");
      expect(selectedTheme?.name).toBe("Enterprise");
    });

    test("returns defined theme object for current valid theme", () => {
      const selectedTheme = getSelectedTheme();
      expect(selectedTheme).toBeDefined();
    });

    test("selected theme has all required properties", () => {
      loadTheme("playful");
      const selectedTheme = getSelectedTheme();

      expect(selectedTheme).toHaveProperty("id");
      expect(selectedTheme).toHaveProperty("name");
      expect(selectedTheme).toHaveProperty("cssPath");
      expect(selectedTheme).toHaveProperty("fontUrl");
      expect(selectedTheme).toHaveProperty("colors");
    });
  });

  describe("loadTheme", () => {
    test("loads theme successfully", () => {
      const consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});

      loadTheme("minimal");

      expect(getCurrentTheme()).toBe("minimal");

      consoleLogSpy.mockRestore();
    });

    test("creates theme CSS link element", () => {
      loadTheme("enterprise");

      // Check that a link was created
      expect(mockLinks.length).toBeGreaterThan(0);

      const themeLink = mockLinks.find((link) => link.id === "dynamic-theme-css");
      expect(themeLink).toBeDefined();
      expect(themeLink?.rel).toBe("stylesheet");
    });

    test("creates font link element", () => {
      loadTheme("playful");

      const fontLink = mockLinks.find((link) => link.id === "dynamic-theme-font");
      expect(fontLink).toBeDefined();
      expect(fontLink?.rel).toBe("stylesheet");
    });

    test("sets correct CSS path for theme", () => {
      loadTheme("mono");

      const themeLink = mockLinks.find((link) => link.id === "dynamic-theme-css");
      const monoTheme = themeConfigs.find((t) => t.id === "mono");

      expect(themeLink?.href).toContain(monoTheme?.cssPath);
    });

    test("sets correct font URL for theme", () => {
      loadTheme("minimal");

      const fontLink = mockLinks.find((link) => link.id === "dynamic-theme-font");
      const minimalTheme = themeConfigs.find((t) => t.id === "minimal");

      expect(fontLink?.href).toBe(minimalTheme?.fontUrl);
    });

    test("persists theme to localStorage", () => {
      loadTheme("enterprise");

      expect(localStorageMock.getItem("flowbite-svelte-theme")).toBe("enterprise");
    });

    test("handles invalid theme ID gracefully", () => {
      const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

      loadTheme("invalid-theme-id");

      expect(consoleErrorSpy).toHaveBeenCalledWith("Theme invalid-theme-id not found");

      consoleErrorSpy.mockRestore();
    });

    test("removes existing theme links before loading new theme", () => {
      // Load first theme
      loadTheme("default");

      // Load second theme
      loadTheme("minimal");

      // Should have called querySelectorAll to find existing links
      expect(document.querySelectorAll).toHaveBeenCalled();
    });

    test("updates getCurrentTheme after loading", () => {
      expect(getCurrentTheme()).toBe("default");

      loadTheme("playful");

      expect(getCurrentTheme()).toBe("playful");
    });

    test("updates getSelectedTheme after loading", () => {
      loadTheme("mono");

      const selectedTheme = getSelectedTheme();
      expect(selectedTheme?.id).toBe("mono");
      expect(selectedTheme?.name).toBe("Mono");
    });
  });

  describe("themeConfigs", () => {
    test("exports all theme configurations", () => {
      expect(themeConfigs).toBeDefined();
      expect(Array.isArray(themeConfigs)).toBe(true);
      expect(themeConfigs.length).toBeGreaterThan(0);
    });

    test("includes default theme", () => {
      const defaultTheme = themeConfigs.find((t) => t.id === "default");
      expect(defaultTheme).toBeDefined();
      expect(defaultTheme?.name).toBe("Default");
    });

    test("includes all standard themes", () => {
      const expectedThemes = ["default", "minimal", "enterprise", "playful", "mono"];

      expectedThemes.forEach((themeId) => {
        const theme = themeConfigs.find((t) => t.id === themeId);
        expect(theme).toBeDefined();
      });
    });

    test("each theme has unique ID", () => {
      const ids = themeConfigs.map((t) => t.id);
      const uniqueIds = new Set(ids);

      expect(ids.length).toBe(uniqueIds.size);
    });

    test("each theme has at least one color", () => {
      themeConfigs.forEach((theme) => {
        expect(theme.colors.length).toBeGreaterThan(0);
      });
    });
  });

  describe("Theme switching", () => {
    test("can switch between themes multiple times", () => {
      loadTheme("default");
      expect(getCurrentTheme()).toBe("default");

      loadTheme("minimal");
      expect(getCurrentTheme()).toBe("minimal");

      loadTheme("enterprise");
      expect(getCurrentTheme()).toBe("enterprise");

      loadTheme("playful");
      expect(getCurrentTheme()).toBe("playful");

      loadTheme("mono");
      expect(getCurrentTheme()).toBe("mono");
    });

    test("maintains theme state across multiple loads", () => {
      loadTheme("enterprise");

      // Simulate multiple calls
      for (let i = 0; i < 5; i++) {
        expect(getCurrentTheme()).toBe("enterprise");
      }
    });
  });

  describe("Error handling", () => {
    test("handles localStorage errors gracefully", () => {
      const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

      // Mock localStorage to throw error
      vi.spyOn(localStorageMock, "setItem").mockImplementationOnce(() => {
        throw new Error("localStorage error");
      });

      // Should not throw
      expect(() => loadTheme("minimal")).not.toThrow();

      consoleWarnSpy.mockRestore();
    });

    test("logs warning for font loading failure", () => {
      const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

      loadTheme("default");

      // Trigger onerror
      const fontLink = mockLinks.find((link) => link.id === "dynamic-theme-font");
      if (fontLink?.onerror && typeof fontLink.onerror === "function") {
        (fontLink.onerror as (event: Event) => void)(new Event("error"));
      }

      expect(consoleWarnSpy).toHaveBeenCalled();

      consoleWarnSpy.mockRestore();
    });

    test("logs error for theme CSS loading failure", () => {
      const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

      loadTheme("default");

      // Trigger onerror
      const themeLink = mockLinks.find((link) => link.id === "dynamic-theme-css");
      if (themeLink?.onerror && typeof themeLink.onerror === "function") {
        (themeLink.onerror as (event: Event) => void)(new Event("error"));
      }

      expect(consoleErrorSpy).toHaveBeenCalled();

      consoleErrorSpy.mockRestore();
    });
  });
});
