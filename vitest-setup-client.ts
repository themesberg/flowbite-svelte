/// <reference types="@vitest/browser/matchers" />

import "@testing-library/jest-dom/vitest";
import { beforeEach, afterEach, vi } from "vitest";

const mockMatchMedia = (
  initialMatches = false
): MediaQueryList & {
  dispatchChange: (matches: boolean) => void;
} => {
  let _matches = initialMatches;

  const listeners = new Set<(event: MediaQueryListEvent) => void>();

  const mql: MediaQueryList & {
    dispatchChange: (matches: boolean) => void;
  } = {
    media: "(prefers-reduced-motion: reduce)",
    onchange: null,

    get matches() {
      return _matches;
    },

    addEventListener(_type: string, listener: EventListenerOrEventListenerObject) {
      if (typeof listener === "function") {
        listeners.add(listener as (e: MediaQueryListEvent) => void);
      } else {
        listeners.add((e) => listener.handleEvent(e));
      }
    },

    removeEventListener(_type: string, listener: EventListenerOrEventListenerObject) {
      if (typeof listener === "function") {
        listeners.delete(listener as (e: MediaQueryListEvent) => void);
      } else {
        listeners.delete((e) => listener.handleEvent(e));
      }
    },

    // Legacy APIs (required by TS)
    addListener(listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void) {
      listeners.add(listener);
    },

    removeListener(listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void) {
      listeners.delete(listener);
    },

    dispatchEvent(event: Event) {
      if (!("matches" in event)) return false;
      listeners.forEach((listener) => listener.call(this, event as MediaQueryListEvent));
      return true;
    },

    dispatchChange(newMatches: boolean) {
      _matches = newMatches;

      const event = { matches: newMatches } as MediaQueryListEvent;

      listeners.forEach((listener) => listener.call(this, event));
      this.onchange?.call(this, event);
    }
  };

  return mql;
};

const mm = mockMatchMedia(true);

Object.defineProperty(window, "matchMedia", {
  configurable: true,
  writable: true,
  value: (query: string) => {
    if (query.includes("prefers-reduced-motion")) {
      return mm;
    }

    // Default behavior for everything else
    return mockMatchMedia(false);
  }
});

// import here
import { installPopoverPolyfill } from "./src/tests/utils/installPopoverPolyfill";
installPopoverPolyfill();

// Store original console methods
const originalConsoleLog = console.log;
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

// Suppress theme-related console output during tests
beforeEach(() => {
  // Spy on console.log to filter theme messages
  vi.spyOn(console, "log").mockImplementation((...args: unknown[]) => {
    const message = args.map((arg) => (typeof arg === "string" ? arg : String(arg))).join(" ");
    // Filter out theme-related console messages
    const themeMessages = ["Theme state updated to:", "Loading theme:", "loaded successfully"];
    if (themeMessages.some((msg) => message.includes(msg))) {
      return;
    }
    originalConsoleLog(...args);
  });

  // Spy on console.error to filter theme messages
  vi.spyOn(console, "error").mockImplementation((...args: unknown[]) => {
    const message = args.map((arg) => (typeof arg === "string" ? arg : String(arg))).join(" ");
    // Filter out theme-related error messages during expected error tests
    if (message.includes("Failed to load theme")) {
      return;
    }
    originalConsoleError(...args);
  });

  // Spy on console.warn to filter theme messages
  vi.spyOn(console, "warn").mockImplementation((...args: unknown[]) => {
    const message = args.join(" ");
    // Filter out theme-related warnings
    if (message.includes("Failed to load font for theme") || message.includes("Could not save theme")) {
      return;
    }
    originalConsoleWarn(...args);
  });
});

// Restore original console methods after each test
afterEach(() => {
  vi.restoreAllMocks();
});

// Mock Floating UI globally
vi.mock("@floating-ui/dom", () => {
  return {
    computePosition: vi.fn().mockResolvedValue({
      x: 0,
      y: 0,
      placement: "bottom",
      middlewareData: {
        arrow: { x: 0, y: 0 }
      }
    }),

    // middleware helpers
    offset: vi.fn(() => ({})),
    flip: vi.fn(() => ({})),
    shift: vi.fn(() => ({})),
    arrow: vi.fn(() => ({})),

    // ✅ REQUIRED by other Floating UI users
    autoUpdate: vi.fn(() => {
      return () => {}; // cleanup function
    })
  };
});

// Shim global for browser tests
if (typeof globalThis !== "undefined" && !(globalThis as Record<string, unknown>).global) {
  (globalThis as Record<string, unknown>).global = globalThis;
}
