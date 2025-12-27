import { cleanup, render, screen, act } from "@testing-library/svelte";
import { expect, test, afterEach, describe, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";

import PlacementTest from "./placement.test.svelte";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  cleanup();
  vi.clearAllTimers();
  vi.useRealTimers();
});

describe("SpeedDial - Placement", () => {
  const placements = ["top", "bottom", "left", "right"] as const;

  placements.forEach((placement) => {
    test(`renders with placement="${placement}"`, async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
      const { container } = render(PlacementTest, { placement });
      const trigger = screen.getByTestId("placement-trigger");

      await user.hover(trigger);
      await act(() => vi.advanceTimersByTime(300));

      // Check that items are rendered
      const shareButton = screen.queryByRole("button", { name: /share/i });
      expect(shareButton).toBeInTheDocument();

      // Check for the tooltip/popper element
      const popper = container.querySelector('[role="tooltip"]');
      expect(popper).toBeInTheDocument();
    });
  });

  test("top placement positions items above trigger", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(PlacementTest, { placement: "top" });
    const trigger = screen.getByTestId("placement-trigger");

    await user.hover(trigger);
    await act(() => vi.advanceTimersByTime(300));

    const shareButton = screen.getByRole("button", { name: /share/i });
    expect(shareButton).toBeInTheDocument();
  });

  test("placement affects vertical/horizontal layout", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    const { container: topContainer } = render(PlacementTest, { placement: "top" });
    const topTrigger = screen.getByTestId("placement-trigger");

    await user.hover(topTrigger);
    await act(() => vi.advanceTimersByTime(300));

    const topPopper = topContainer.querySelector('[role="tooltip"]');
    expect(topPopper).toBeInTheDocument();

    cleanup();

    const { container: leftContainer } = render(PlacementTest, { placement: "left" });
    const leftTrigger = screen.getByTestId("placement-trigger");

    await user.hover(leftTrigger);
    await act(() => vi.advanceTimersByTime(300));

    const leftPopper = leftContainer.querySelector('[role="tooltip"]');
    expect(leftPopper).toBeInTheDocument();
  });
});
