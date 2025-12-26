import { cleanup, render, screen, waitFor } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import { userEvent } from "@testing-library/user-event";
import SimpleTest from "./SimpleTest.svelte";
import SimpleTestEffect from "./SimpleTestEffect.svelte";
import SimpleTestComplete from "./SimpleTestComplete.svelte";

afterEach(() => {
  cleanup();
});

describe("Simple Aria-Expanded Test", () => {
  test("toggle button has correct initial aria-expanded", () => {
    render(SimpleTest);
    const toggleButton = screen.getByTestId("toggle-button");

    // Should start as false (hidden=true means not expanded)
    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
  });

  test("toggle button changes aria-expanded when clicked", async () => {
    const user = userEvent.setup();
    render(SimpleTest);
    const toggleButton = screen.getByTestId("toggle-button");

    // Initially false
    expect(toggleButton).toHaveAttribute("aria-expanded", "false");

    // Click to expand
    await user.click(toggleButton);

    // Should now be true
    await waitFor(() => {
      expect(toggleButton).toHaveAttribute("aria-expanded", "true");
    });

    // Click again to collapse
    await user.click(toggleButton);

    // Should be false again
    await waitFor(() => {
      expect(toggleButton).toHaveAttribute("aria-expanded", "false");
    });
  });

  test("close button sets aria-expanded to false", async () => {
    const user = userEvent.setup();
    render(SimpleTest);
    const toggleButton = screen.getByTestId("toggle-button");
    const closeButton = screen.getByTestId("close-button");

    // Open the menu first
    await user.click(toggleButton);

    // Verify it's open
    await waitFor(() => {
      expect(toggleButton).toHaveAttribute("aria-expanded", "true");
    });

    // Click close button
    await user.click(closeButton);

    // Should now be false
    await waitFor(() => {
      expect(toggleButton).toHaveAttribute("aria-expanded", "false");
    });
  });

  test("close button works even when menu is already closed", async () => {
    const user = userEvent.setup();
    render(SimpleTest);
    const toggleButton = screen.getByTestId("toggle-button");
    const closeButton = screen.getByTestId("close-button");

    // Should start closed
    expect(toggleButton).toHaveAttribute("aria-expanded", "false");

    // Click close button
    await user.click(closeButton);

    // Should still be false
    await waitFor(() => {
      expect(toggleButton).toHaveAttribute("aria-expanded", "false");
    });
  });
});

describe("Complete Structure Test (like Navbar)", () => {
  test("toggle button has correct initial aria-expanded", () => {
    render(SimpleTestComplete);
    const toggleButton = screen.getByTestId("toggle-button");

    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
  });

  test("content wrapper reflects hidden state", () => {
    render(SimpleTestComplete);
    const hiddenContent = screen.getByTestId("content-hidden");

    expect(hiddenContent).toBeInTheDocument();
  });

  test("clicking toggle shows content", async () => {
    const user = userEvent.setup();
    render(SimpleTestComplete);
    const toggleButton = screen.getByTestId("toggle-button");

    await user.click(toggleButton);

    await waitFor(() => {
      expect(toggleButton).toHaveAttribute("aria-expanded", "true");
      expect(screen.getByTestId("content-visible")).toBeInTheDocument();
    });
  });

  test("close button inside content sets aria-expanded to false", async () => {
    const user = userEvent.setup();
    render(SimpleTestComplete);
    const toggleButton = screen.getByTestId("toggle-button");
    const closeButton = screen.getByTestId("close-button");

    // Open menu
    await user.click(toggleButton);

    await waitFor(() => {
      expect(toggleButton).toHaveAttribute("aria-expanded", "true");
    });

    // Close via close button
    await user.click(closeButton);

    // THIS IS THE KEY TEST - does aria-expanded update?
    await waitFor(() => {
      expect(toggleButton).toHaveAttribute("aria-expanded", "false");
    });
  });
});

describe("Simple Aria-Expanded Test with $effect", () => {
  test("toggle button has correct initial aria-expanded", () => {
    render(SimpleTestEffect);
    const toggleButton = screen.getByTestId("toggle-button-effect");

    // Should start as false (hidden=true means not expanded)
    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
  });

  test("toggle button changes aria-expanded when clicked", async () => {
    const user = userEvent.setup();
    render(SimpleTestEffect);
    const toggleButton = screen.getByTestId("toggle-button-effect");

    // Initially false
    expect(toggleButton).toHaveAttribute("aria-expanded", "false");

    // Click to expand
    await user.click(toggleButton);

    // Should now be true
    await waitFor(() => {
      expect(toggleButton).toHaveAttribute("aria-expanded", "true");
    });

    // Click again to collapse
    await user.click(toggleButton);

    // Should be false again
    await waitFor(() => {
      expect(toggleButton).toHaveAttribute("aria-expanded", "false");
    });
  });

  test("close button sets aria-expanded to false", async () => {
    const user = userEvent.setup();
    render(SimpleTestEffect);
    const toggleButton = screen.getByTestId("toggle-button-effect");
    const closeButton = screen.getByTestId("close-button");

    // Open the menu first
    await user.click(toggleButton);

    // Verify it's open
    await waitFor(() => {
      expect(toggleButton).toHaveAttribute("aria-expanded", "true");
    });

    // Click close button
    await user.click(closeButton);

    // Should now be false
    await waitFor(() => {
      expect(toggleButton).toHaveAttribute("aria-expanded", "false");
    });
  });
});
