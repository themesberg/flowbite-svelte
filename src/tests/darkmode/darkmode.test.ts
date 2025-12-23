import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicDarkmodeTest from "./basic-darkmode.test.svelte";
import DarkmodeSizesTest from "./darkmode-sizes.test.svelte";
import DarkmodeCustomAriaTest from "./darkmode-custom-aria.test.svelte";
import DarkmodeCustomIconsTest from "./darkmode-custom-icons.test.svelte";
import DarkmodeCustomClassTest from "./darkmode-custom-class.test.svelte";

afterEach(() => {
  cleanup();
  // Clean up localStorage after each test
  localStorage.clear();
  // Remove dark class from document
  document.documentElement.classList.remove("dark");
});

describe("DarkMode Component", () => {
  describe("Basic Rendering", () => {
    test("renders darkmode button correctly", () => {
      render(BasicDarkmodeTest);
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute("type", "button");
      expect(button).toHaveAttribute("aria-label", "Dark mode");
      expect(button).toHaveAttribute("tabindex", "0");
    });

    test("renders with default styling classes", () => {
      render(BasicDarkmodeTest);
      const button = screen.getByRole("button");

      expect(button).toHaveClass(
        "inline-flex hover:text-heading items-center justify-center text-body w-10 h-10 hover:bg-neutral-secondary-soft focus:outline-none focus:ring-2 focus:ring-neutral-tertiary rounded-xl text-sm p-2"
      );
    });

    test("renders default dark mode icon in light mode", () => {
      render(BasicDarkmodeTest);
      const darkIcon = screen.getByRole("img", { name: "Dark mode" });

      expect(darkIcon).toBeInTheDocument();
      expect(darkIcon).toHaveClass("w-4", "h-4");
    });

    test("custom aria-label is applied", () => {
      render(DarkmodeCustomAriaTest);
      const button = screen.getByRole("button", { name: "Toggle theme" });

      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute("aria-label", "Toggle theme");
    });

    test("custom class is applied to button", () => {
      render(DarkmodeCustomClassTest);
      const button = screen.getByRole("button");

      expect(button).toHaveClass("custom-darkmode-class");
    });
  });

  describe("Size Variants", () => {
    test("renders buttons with different sizes", () => {
      render(DarkmodeSizesTest);
      const smButton = screen.getByTestId("size-sm");
      const mdButton = screen.getByTestId("size-md");
      const lgButton = screen.getByTestId("size-lg");

      // Check that all buttons are rendered
      expect(smButton).toBeInTheDocument();
      expect(mdButton).toBeInTheDocument();
      expect(lgButton).toBeInTheDocument();

      // Get SVG icons inside each button to verify size
      const smIcon = smButton.querySelector("svg");
      const mdIcon = mdButton.querySelector("svg");
      const lgIcon = lgButton.querySelector("svg");

      expect(smIcon).toHaveClass("w-4", "h-4");
      expect(mdIcon).toHaveClass("w-5", "h-5");
      expect(lgIcon).toHaveClass("w-6", "h-6");
    });
  });

  describe("Custom Icons", () => {
    test("renders custom light and dark icons", () => {
      render(DarkmodeCustomIconsTest);

      // In light mode, dark icon should be visible
      const customDarkIcon = screen.getByTestId("custom-dark-icon");
      expect(customDarkIcon).toBeInTheDocument();
    });

    test("custom icons have correct testid attributes", () => {
      render(DarkmodeCustomIconsTest);
      const button = screen.getByRole("button");

      // Check that custom icons are in the DOM (one is hidden, one is visible)
      const darkIcon = button.querySelector('[data-testid="custom-dark-icon"]');
      const lightIcon = button.querySelector('[data-testid="custom-light-icon"]');

      expect(darkIcon).toBeInTheDocument();
      expect(lightIcon).toBeInTheDocument();
    });
  });

  describe("Theme Toggle Functionality", () => {
    test("clicking button toggles dark class on document", async () => {
      const user = userEvent.setup();
      render(BasicDarkmodeTest);
      const button = screen.getByRole("button");

      // Initially no dark class
      expect(document.documentElement.classList.contains("dark")).toBe(false);

      // Click to enable dark mode
      await user.click(button);
      expect(document.documentElement.classList.contains("dark")).toBe(true);

      // Click again to disable dark mode
      await user.click(button);
      expect(document.documentElement.classList.contains("dark")).toBe(false);
    });

    test("stores theme preference in localStorage", async () => {
      const user = userEvent.setup();
      render(BasicDarkmodeTest);
      const button = screen.getByRole("button");

      // Click to enable dark mode
      await user.click(button);
      expect(localStorage.getItem("THEME_PREFERENCE_KEY")).toBe("dark");

      // Click to disable dark mode
      await user.click(button);
      expect(localStorage.getItem("THEME_PREFERENCE_KEY")).toBe("light");
    });

    test("multiple clicks toggle theme correctly", async () => {
      const user = userEvent.setup();
      render(BasicDarkmodeTest);
      const button = screen.getByRole("button");

      expect(document.documentElement.classList.contains("dark")).toBe(false);

      // Click 1: Enable dark
      await user.click(button);
      expect(document.documentElement.classList.contains("dark")).toBe(true);

      // Click 2: Disable dark
      await user.click(button);
      expect(document.documentElement.classList.contains("dark")).toBe(false);

      // Click 3: Enable dark again
      await user.click(button);
      expect(document.documentElement.classList.contains("dark")).toBe(true);
    });
  });

  describe("Accessibility", () => {
    test("button is keyboard accessible", () => {
      render(BasicDarkmodeTest);
      const button = screen.getByRole("button");

      expect(button).toHaveAttribute("tabindex", "0");
    });

    test("button has proper aria-label", () => {
      render(BasicDarkmodeTest);
      const button = screen.getByRole("button");

      expect(button).toHaveAttribute("aria-label", "Dark mode");
    });

    test("SVG icons have proper aria-label attributes", () => {
      render(BasicDarkmodeTest);

      // Check for the dark mode icon (visible in light mode)
      const darkIcon = screen.getByRole("img", { name: "Dark mode" });
      expect(darkIcon).toBeInTheDocument();
    });
  });

  describe("Icon Visibility", () => {
    test("shows dark icon in light mode", () => {
      // Ensure we're in light mode
      document.documentElement.classList.remove("dark");

      render(BasicDarkmodeTest);
      const darkIcon = screen.getByRole("img", { name: "Dark mode" });

      expect(darkIcon).toBeInTheDocument();
      expect(darkIcon.parentElement).toHaveClass("block", "dark:hidden");
    });

    test("shows light icon in dark mode", () => {
      // Set dark mode before rendering
      document.documentElement.classList.add("dark");

      render(BasicDarkmodeTest);
      const lightIcon = screen.getByRole("img", { name: "Light mode" });

      expect(lightIcon).toBeInTheDocument();
      expect(lightIcon.parentElement).toHaveClass("hidden", "dark:block");
    });
  });
});
