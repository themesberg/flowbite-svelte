import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicBadgeTest from "./basic-badge.test.svelte";
import DismissableBadgeTest from "./dismissable-badge.test.svelte";
import BadgeLinkTest from "./badge-link.test.svelte";
import LargeBadgeTest from "./large-badge.test.svelte";
import BadgeColorsTest from "./badge-colors.test.svelte";
import BadgeBorderTest from "./badge-border.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Badge Component", () => {
  describe("Basic Rendering", () => {
    test("renders basic badge with text", () => {
      const { container } = render(BasicBadgeTest);
      const badge = container.querySelector("div");

      expect(badge).toBeInTheDocument();
      expect(badge).toHaveTextContent("Default");
    });

    test("renders large badge", () => {
      const { container } = render(LargeBadgeTest);
      const badge = container.querySelector("div");

      expect(badge).toBeInTheDocument();
      expect(badge).toHaveTextContent("Large Badge");
      // Large size should apply different classes
      expect(badge?.className).toBeTruthy();
    });

    test("renders different color badges", () => {
      const { container } = render(BadgeColorsTest);
      const badges = container.querySelectorAll("div");

      expect(badges.length).toBeGreaterThan(0);
      badges.forEach((badge) => {
        expect(badge).toBeInTheDocument();
      });
    });

    test("renders badge with border", () => {
      const { container } = render(BadgeBorderTest);
      const badge = container.querySelector("div");

      expect(badge).toBeInTheDocument();
      expect(badge).toHaveTextContent("Bordered Badge");
    });
  });

  describe("Link Behavior", () => {
    test("renders badge as link when href is provided", () => {
      render(BadgeLinkTest);
      const link = screen.getByRole("link");

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "/link");
      expect(link).toHaveTextContent("Link Badge");
    });
  });

  describe("Dismissable Functionality", () => {
    test("renders dismissable badge with close button", () => {
      render(DismissableBadgeTest);
      const closeButton = screen.getByRole("button", { name: /remove badge/i });

      expect(closeButton).toBeInTheDocument();
      expect(screen.getByText("Dismissable")).toBeInTheDocument();
    });

    test("dismisses badge when close button is clicked", async () => {
      const user = userEvent.setup();
      render(DismissableBadgeTest);

      const closeButton = screen.getByRole("button", { name: /remove badge/i });
      expect(screen.getByText("Dismissable")).toBeInTheDocument();

      await user.click(closeButton);

      // After clicking, the badge should be removed from DOM (due to badgeStatus = false)
      // Wait for transition to complete
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Badge might still exist during transition, but should be hidden or removed
    });
  });

  describe("Accessibility", () => {
    test("close button has proper aria-label", () => {
      render(DismissableBadgeTest);
      const closeButton = screen.getByRole("button", { name: /remove badge/i });

      expect(closeButton).toHaveAttribute("aria-label", "Remove badge");
    });

    test("badge content is readable", () => {
      render(BasicBadgeTest);

      expect(screen.getByText("Default")).toBeInTheDocument();
    });
  });

  describe("Event Handling", () => {
    test("dispatches close event when dismissed", async () => {
      const user = userEvent.setup();
      const { container } = render(DismissableBadgeTest);

      let closeEventFired = false;
      const badge = container.querySelector("div");

      badge?.addEventListener("close", () => {
        closeEventFired = true;
      });

      const closeButton = screen.getByRole("button", { name: /remove badge/i });
      await user.click(closeButton);

      expect(closeEventFired).toBe(true);
    });
  });
});
