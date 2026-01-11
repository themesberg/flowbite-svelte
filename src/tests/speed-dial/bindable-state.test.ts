import { cleanup, render, screen, waitFor } from "@testing-library/svelte";
import { expect, test, afterEach, describe, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import TestWrapper from "./bindable-state-wrapper.test.svelte";
import BindableStateTest from "./bindable-state.test.svelte";

beforeEach(() => {
  vi.useFakeTimers({ shouldAdvanceTime: true });
});

afterEach(() => {
  cleanup();
  vi.clearAllTimers();
  vi.useRealTimers();
});

describe("SpeedDial - Bindable State", () => {
  test("isOpen can be controlled externally", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(BindableStateTest, { isOpen: false });

    // Initially closed
    expect(screen.queryByText("Share")).not.toBeInTheDocument();

    // Open externally
    const openButton = screen.getByTestId("external-open");
    await user.click(openButton);

    // Wait for element to appear
    await waitFor(() => {
      expect(screen.getByText("Share")).toBeInTheDocument();
    });
  });

  test("external toggle button controls speed dial state", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(BindableStateTest, { isOpen: false });
    const toggleButton = screen.getByTestId("external-toggle");

    // Toggle open
    await user.click(toggleButton);

    // Wait for element to appear
    await waitFor(() => {
      expect(screen.getByText("Share")).toBeInTheDocument();
    });

    // Toggle closed
    await user.click(toggleButton);

    // Wait for element to be removed
    await waitFor(() => {
      expect(screen.queryByText("Share")).not.toBeInTheDocument();
    });
  });

  test("external close button closes speed dial", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(BindableStateTest, { isOpen: true });

    // Wait for element to appear - use text content from sr-only span
    await waitFor(() => {
      expect(screen.getByText("Share")).toBeInTheDocument();
    });

    const closeButton = screen.getByTestId("external-close");
    await user.click(closeButton);

    // Wait for element to be removed
    await waitFor(() => {
      expect(screen.queryByText("Share")).not.toBeInTheDocument();
    });
  });

  test("programmatic state changes are reflected in UI", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

    render(TestWrapper);

    // Initially closed
    expect(screen.queryByText("Share")).not.toBeInTheDocument();

    // Click to open programmatically
    const openButton = screen.getByTestId("programmatic-open");
    await user.click(openButton);

    await waitFor(() => {
      expect(screen.getByText("Share")).toBeInTheDocument();
    });

    // Click to close programmatically
    const closeButton = screen.getByTestId("programmatic-close");
    await user.click(closeButton);

    // Wait for the element to be removed from the DOM
    await waitFor(() => {
      expect(screen.queryByText("Share")).not.toBeInTheDocument();
    });
  });

  test("click interaction updates external state binding", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(BindableStateTest, { isOpen: false });
    const trigger = screen.getByTestId("bindable-trigger");

    expect(screen.queryByText("Share")).not.toBeInTheDocument();

    // Click trigger to open
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText("Share")).toBeInTheDocument();
    });
  });

  test("initial isOpen=true shows items immediately", async () => {
    render(BindableStateTest, { isOpen: true });

    // Wait for elements to appear - use text content from sr-only spans
    await waitFor(() => {
      expect(screen.getByText("Share")).toBeInTheDocument();
      expect(screen.getByText("Print")).toBeInTheDocument();
      expect(screen.getByText("Download")).toBeInTheDocument();
    });
  });
});
