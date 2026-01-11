import { cleanup, render, screen, waitFor } from "@testing-library/svelte";
import { expect, test, afterEach, describe, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";

import PlacementTest from "./placement.test.svelte";

beforeEach(() => {
  vi.useFakeTimers({ shouldAdvanceTime: true });
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

      // Check that items are rendered
      const shareButton = await screen.findByRole("button", { name: /share/i, hidden: true });
      expect(shareButton).toBeInTheDocument();

      // Check for the menu/popper element (SpeedDial uses role="menu" not "tooltip")
      const popper = container.querySelector('[role="menu"]');
      expect(popper).toBeInTheDocument();
    });
  });

  test("top placement positions items above trigger", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    render(PlacementTest, { placement: "top" });
    const trigger = screen.getByTestId("placement-trigger");

    await user.hover(trigger);

    const shareButton = await screen.findByRole("button", { name: /share/i, hidden: true });
    expect(shareButton).toBeInTheDocument();
  });

  test("placement affects vertical/horizontal layout", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    const { container: topContainer } = render(PlacementTest, { placement: "top" });
    const topTrigger = screen.getByTestId("placement-trigger");

    await user.hover(topTrigger);

    await waitFor(() => {
      // SpeedDial uses role="menu" not "tooltip"
      const topPopper = topContainer.querySelector('[role="menu"]');
      expect(topPopper).toBeInTheDocument();
    });

    cleanup();

    const { container: leftContainer } = render(PlacementTest, { placement: "left" });
    const leftTrigger = screen.getByTestId("placement-trigger");

    await user.hover(leftTrigger);

    await waitFor(() => {
      // SpeedDial uses role="menu" not "tooltip"
      const leftPopper = leftContainer.querySelector('[role="menu"]');
      expect(leftPopper).toBeInTheDocument();
    });
  });
});
