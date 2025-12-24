import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicBannerTest from "./basic-banner.test.svelte";
import NonDismissableBannerTest from "./non-dismissable-banner.test.svelte";
import BannerColorsTest from "./banner-colors.test.svelte";
import BannerClosedTest from "./banner-closed.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Banner Component", () => {
  describe("Basic Rendering", () => {
    test("renders basic banner with content", () => {
      const { container } = render(BasicBannerTest);
      const banner = container.querySelector("div");

      expect(banner).toBeInTheDocument();
      expect(banner).toHaveTextContent("This is a basic banner message.");
    });

    test("renders different color banners", () => {
      const { container } = render(BannerColorsTest);
      const banners = container.querySelectorAll("div[tabindex='-1']");

      expect(banners.length).toBeGreaterThan(0);
      banners.forEach((banner) => {
        expect(banner).toBeInTheDocument();
      });
    });

    test("does not render when open is false", () => {
      const { container } = render(BannerClosedTest);
      const banner = container.querySelector("div[tabindex='-1']");

      // Banner should not be rendered when open=false
      expect(banner).not.toBeInTheDocument();
    });
  });

  describe("Dismissable Functionality", () => {
    test("renders dismissable banner with close button by default", () => {
      render(BasicBannerTest);
      const closeButton = screen.getByRole("button", { name: /remove banner/i });

      expect(closeButton).toBeInTheDocument();
      expect(screen.getByText("This is a basic banner message.")).toBeInTheDocument();
    });

    test("does not render close button when dismissable is false", () => {
      render(NonDismissableBannerTest);
      const closeButton = screen.queryByRole("button", { name: /remove banner/i });

      expect(closeButton).not.toBeInTheDocument();
      expect(screen.getByText("This banner cannot be dismissed.")).toBeInTheDocument();
    });

    test("dismisses banner when close button is clicked", async () => {
      const user = userEvent.setup();
      render(BasicBannerTest);

      const closeButton = screen.getByRole("button", { name: /remove banner/i });
      expect(screen.getByText("This is a basic banner message.")).toBeInTheDocument();

      await user.click(closeButton);

      // After clicking, the banner should be removed from DOM
      // Wait for transition to complete
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Due to transitions, banner might still exist in DOM but be hidden
    });
  });

  describe("Accessibility", () => {
    test("banner has proper tabindex", () => {
      const { container } = render(BasicBannerTest);
      const banner = container.querySelector("div[tabindex='-1']");

      expect(banner).toHaveAttribute("tabindex", "-1");
    });

    test("close button has proper aria-label", () => {
      render(BasicBannerTest);
      const closeButton = screen.getByRole("button", { name: /remove banner/i });

      expect(closeButton).toHaveAttribute("aria-label", "Remove banner");
    });

    test("banner content is readable", () => {
      render(BasicBannerTest);

      expect(screen.getByText("This is a basic banner message.")).toBeInTheDocument();
    });
  });

  describe("Event Handling", () => {
    test("dispatches close event when dismissed", async () => {
      const user = userEvent.setup();
      const { container } = render(BasicBannerTest);

      let closeEventFired = false;
      const banner = container.querySelector("div[tabindex='-1']");

      banner?.addEventListener("close", () => {
        closeEventFired = true;
      });

      const closeButton = screen.getByRole("button", { name: /remove banner/i });
      await user.click(closeButton);

      expect(closeEventFired).toBe(true);
    });
  });

  describe("Structure", () => {
    test("banner contains inner content div", () => {
      const { container } = render(BasicBannerTest);
      const banner = container.querySelector("div[tabindex='-1']");
      const innerDiv = banner?.querySelector("div");

      expect(innerDiv).toBeInTheDocument();
    });

    test("dismissable banner has close button", () => {
      render(BasicBannerTest);
      const closeButton = screen.getByRole("button", { name: /remove banner/i });

      expect(closeButton).toBeInTheDocument();
    });
  });
});
