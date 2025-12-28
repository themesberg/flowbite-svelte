import { cleanup, render, screen, act } from "@testing-library/svelte";
import { expect, test, afterEach, describe, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicSpeedDialTest from "./basic-speed-dial.test.svelte";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  cleanup();
  vi.clearAllTimers();
  vi.useRealTimers();
});

describe("SpeedDial - Basic Functionality", () => {
  test("renders speed dial trigger", () => {
    render(BasicSpeedDialTest);
    const trigger = screen.getByTestId("speed-dial-trigger");
    expect(trigger).toBeInTheDocument();
  });

  test("speed dial items are hidden by default", () => {
    render(BasicSpeedDialTest);
    const shareButtonInfo = screen.queryByRole("button", { name: "Share" });
    expect(shareButtonInfo).not.toBeInTheDocument();
  });

  test("hovering trigger shows speed dial items", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(BasicSpeedDialTest);
    const trigger = screen.getByTestId("speed-dial-trigger");

    await user.hover(trigger);

    // SpeedDial has a 200ms delay by default + ~100ms transition
    await act(() => vi.advanceTimersByTime(300));

    // Now it should be visible/in document
    const shareButton = screen.queryByRole("button", { name: /share/i });
    expect(shareButton).toBeInTheDocument();
  });

  test("buttons have accessible names", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(BasicSpeedDialTest);
    const trigger = screen.getByTestId("speed-dial-trigger");
    await user.hover(trigger);
    await act(() => vi.advanceTimersByTime(300));

    expect(screen.getByRole("button", { name: /share/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /print/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /download/i })).toBeInTheDocument();
  });

  test("trigger has open/close icon transition", async () => {
    render(BasicSpeedDialTest);
    const trigger = screen.getByTestId("speed-dial-trigger");
    const svg = trigger.querySelector("svg");
    expect(svg).toHaveClass("transition-transform");
  });
});
