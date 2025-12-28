import { cleanup, render, screen, act } from "@testing-library/svelte";
import { expect, test, afterEach, describe, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import TestWrapper from "./bindable-state-wrapper.test.svelte";
import BindableStateTest from "./bindable-state.test.svelte";

beforeEach(() => {
  vi.useFakeTimers();
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
    expect(screen.queryByRole("button", { name: /share/i })).not.toBeInTheDocument();

    // Open externally
    const openButton = screen.getByTestId("external-open");
    await user.click(openButton);
    await act(() => vi.advanceTimersByTime(300));

    expect(screen.queryByRole("button", { name: /share/i })).toBeInTheDocument();
  });

  test("external toggle button controls speed dial state", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(BindableStateTest, { isOpen: false });
    const toggleButton = screen.getByTestId("external-toggle");

    // Toggle open
    await user.click(toggleButton);
    await act(() => vi.advanceTimersByTime(300));
    expect(screen.queryByRole("button", { name: /share/i })).toBeInTheDocument();

    // Toggle closed
    await user.click(toggleButton);
    await act(() => vi.advanceTimersByTime(300));
    // After closing, wait a bit more for transition to complete
    await act(() => vi.advanceTimersByTime(200));
    expect(screen.queryByRole("button", { name: /share/i })).not.toBeInTheDocument();
  });

  test("external close button closes speed dial", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(BindableStateTest, { isOpen: true });

    await act(() => vi.advanceTimersByTime(300));
    expect(screen.queryByRole("button", { name: /share/i })).toBeInTheDocument();

    const closeButton = screen.getByTestId("external-close");
    await user.click(closeButton);
    await act(() => vi.advanceTimersByTime(300));
    // Wait more for transition
    await act(() => vi.advanceTimersByTime(200));

    expect(screen.queryByRole("button", { name: /share/i })).not.toBeInTheDocument();
  });

  test("programmatic state changes are reflected in UI", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

    render(TestWrapper);

    // Initially closed
    expect(screen.queryByRole("button", { name: /share/i })).not.toBeInTheDocument();

    // Click to open programmatically
    const openButton = screen.getByTestId("programmatic-open");
    await user.click(openButton);
    await act(() => vi.advanceTimersByTime(300));
    expect(screen.queryByRole("button", { name: /share/i })).toBeInTheDocument();

    // Click to close programmatically
    const closeButton = screen.getByTestId("programmatic-close");
    await user.click(closeButton);
    await act(() => vi.advanceTimersByTime(300));
    await act(() => vi.advanceTimersByTime(200));
    expect(screen.queryByRole("button", { name: /share/i })).not.toBeInTheDocument();
  });

  test("hover interaction updates external state binding", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(BindableStateTest, { isOpen: false });
    const trigger = screen.getByTestId("bindable-trigger");

    expect(screen.queryByRole("button", { name: /share/i })).not.toBeInTheDocument();

    // Hover to open
    await user.hover(trigger);
    await act(() => vi.advanceTimersByTime(300));

    expect(screen.queryByRole("button", { name: /share/i })).toBeInTheDocument();
  });

  test("initial isOpen=true shows items immediately", async () => {
    render(BindableStateTest, { isOpen: true });
    await act(() => vi.advanceTimersByTime(300));

    expect(screen.queryByRole("button", { name: /share/i })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /print/i })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /download/i })).toBeInTheDocument();
  });
});
