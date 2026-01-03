/// <reference types="@vitest/browser/matchers" />

import "@testing-library/jest-dom/vitest";
import { beforeEach, afterEach, vi } from "vitest";

// Store original console methods
const originalConsoleLog = console.log;
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

// Suppress theme-related console output during tests
beforeEach(() => {
  // Spy on console.log to filter theme messages
  vi.spyOn(console, "log").mockImplementation((...args: unknown[]) => {
    const message = args.join(" ");
    // Filter out theme-related console messages
    if (message.includes("Theme state updated to:") || message.includes("Loading theme:") || (message.includes("Theme") && message.includes("loaded successfully"))) {
      return;
    }
    originalConsoleLog(...args);
  });

  // Spy on console.error to filter theme messages
  vi.spyOn(console, "error").mockImplementation((...args: unknown[]) => {
    const message = args.join(" ");
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
