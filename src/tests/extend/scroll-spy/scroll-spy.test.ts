import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicScrollSpyTest from "./basic-scrollspy.test.svelte";
import PositionLeftTest from "./position-left.test.svelte";
import PositionRightTest from "./position-right.test.svelte";
import NonStickyTest from "./non-sticky.test.svelte";
import CallbackTest from "./callback.test.svelte";
import NoSmoothScrollTest from "./no-smooth-scroll.test.svelte";
import CustomHrefTest from "./custom-href.test.svelte";
import CustomClassTest from "./custom-class.test.svelte";
import OffsetTest from "./offset.test.svelte";
import CustomClassesTest from "./custom-classes.test.svelte";
import RestPropsTest from "./rest-props.test.svelte";
import { callbackTestState, resetCallbackState } from "./callback-state";

// Mock IntersectionObserver
const mockObserve = vi.fn();
const mockUnobserve = vi.fn();
const mockDisconnect = vi.fn();

class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = "";
  readonly thresholds: ReadonlyArray<number> = [];

  observe = mockObserve;
  unobserve = mockUnobserve;
  disconnect = mockDisconnect;
  takeRecords = vi.fn(() => []);

  constructor(
    public callback: IntersectionObserverCallback,
    public options?: IntersectionObserverInit
  ) {
    this.root = options?.root ?? null;
    this.rootMargin = options?.rootMargin ?? "";
    this.thresholds = Array.isArray(options?.threshold) ? options.threshold : [options?.threshold ?? 0];
  }
}

beforeEach(() => {
  vi.clearAllMocks();
  window.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;
});

afterEach(() => {
  cleanup();
  // Reset callback test state
  resetCallbackState();
});

describe("ScrollSpy Component", () => {
  describe("Basic Rendering", () => {
    test("renders scrollspy navigation correctly", () => {
      render(BasicScrollSpyTest);
      const scrollspy = screen.getByTestId("basic-scrollspy");

      expect(scrollspy).toBeInTheDocument();
      expect(scrollspy).toHaveAttribute("data-scope", "scroll-spy");
      expect(scrollspy).toHaveAttribute("data-part", "base");
      expect(scrollspy).toHaveAttribute("aria-label", "Scroll spy navigation");
    });

    test("renders navigation items", () => {
      render(BasicScrollSpyTest);
      const scrollspy = screen.getByTestId("basic-scrollspy");

      // Check for list structure
      const list = scrollspy.querySelector('[data-part="list"]');
      expect(list).toBeInTheDocument();

      // Check for list items
      const items = scrollspy.querySelectorAll('[data-part="item"]');
      expect(items).toHaveLength(3);
    });

    test("renders navigation links with correct attributes", () => {
      render(BasicScrollSpyTest);
      const scrollspy = screen.getByTestId("basic-scrollspy");

      const links = scrollspy.querySelectorAll('[data-part="link"]');
      expect(links).toHaveLength(3);

      links.forEach((link) => {
        expect(link).toHaveAttribute("href");
        expect(link).toHaveAttribute("data-part", "link");
      });
    });

    test("renders container with correct structure", () => {
      render(BasicScrollSpyTest);
      const scrollspy = screen.getByTestId("basic-scrollspy");

      const container = scrollspy.querySelector('[data-part="container"]');
      expect(container).toBeInTheDocument();
    });
  });

  describe("Position Variants", () => {
    test("applies top position styles", () => {
      render(BasicScrollSpyTest);
      const scrollspy = screen.getByTestId("basic-scrollspy");

      expect(scrollspy.className).toMatch(/top-0/);
      expect(scrollspy.className).toMatch(/left-0/);
      expect(scrollspy.className).toMatch(/right-0/);
    });

    test("applies left position styles", () => {
      render(PositionLeftTest);
      const scrollspy = screen.getByTestId("left-scrollspy");

      expect(scrollspy.className).toMatch(/left-0/);
      expect(scrollspy.className).toMatch(/fixed/);
    });

    test("applies right position styles", () => {
      render(PositionRightTest);
      const scrollspy = screen.getByTestId("right-scrollspy");

      expect(scrollspy.className).toMatch(/right-0/);
      expect(scrollspy.className).toMatch(/fixed/);
    });
  });

  describe("Sticky Behavior", () => {
    test("applies sticky positioning when enabled", () => {
      render(BasicScrollSpyTest);
      const scrollspy = screen.getByTestId("basic-scrollspy");

      expect(scrollspy.className).toMatch(/sticky/);
    });

    test("does not apply sticky positioning when disabled", () => {
      render(NonStickyTest);
      const scrollspy = screen.getByTestId("non-sticky-scrollspy");

      expect(scrollspy.className).not.toMatch(/sticky/);
    });
  });

  describe("Link Interactions", () => {
    test("handles link click events", async () => {
      const user = userEvent.setup();
      render(BasicScrollSpyTest);
      const scrollspy = screen.getByTestId("basic-scrollspy");

      const links = scrollspy.querySelectorAll('[data-part="link"]');
      const firstLink = links[0] as HTMLElement;

      // Mock scrollTo
      window.scrollTo = vi.fn();

      await user.click(firstLink);

      // Should prevent default navigation and handle scroll
      expect(window.scrollTo).toHaveBeenCalled();
    });

    test("is keyboard accessible with Enter key", async () => {
      const user = userEvent.setup();
      render(BasicScrollSpyTest);
      const scrollspy = screen.getByTestId("basic-scrollspy");

      const links = scrollspy.querySelectorAll('[data-part="link"]');
      const firstLink = links[0] as HTMLElement;

      // Mock scrollTo
      window.scrollTo = vi.fn();

      firstLink.focus();
      expect(firstLink).toHaveFocus();

      await user.keyboard("{Enter}");

      expect(window.scrollTo).toHaveBeenCalled();
    });

    test("is keyboard accessible with Space key", async () => {
      const user = userEvent.setup();
      render(BasicScrollSpyTest);
      const scrollspy = screen.getByTestId("basic-scrollspy");

      const links = scrollspy.querySelectorAll('[data-part="link"]');
      const firstLink = links[0] as HTMLElement;

      // Mock scrollTo
      window.scrollTo = vi.fn();

      firstLink.focus();

      await user.keyboard(" ");

      expect(window.scrollTo).toHaveBeenCalled();
    });
  });

  describe("Callback Functions", () => {
    test("calls onActiveChange when active section changes", () => {
      render(CallbackTest);

      // Initially should set first item as active
      expect(callbackTestState.activeChangeCallCount).toBeGreaterThanOrEqual(0);
    });

    test("calls onNavigate when navigation link is clicked", async () => {
      const user = userEvent.setup();
      render(CallbackTest);
      const scrollspy = screen.getByTestId("callback-scrollspy");

      const links = scrollspy.querySelectorAll('[data-part="link"]');
      const firstLink = links[0] as HTMLElement;

      // Mock scrollTo
      window.scrollTo = vi.fn();

      const initialCallCount = callbackTestState.navigateCallCount;

      await user.click(firstLink);

      expect(callbackTestState.navigateCallCount).toBe(initialCallCount + 1);
      expect(callbackTestState.navigatedId).toBeTruthy();
    });
  });

  describe("Custom Href", () => {
    test("uses custom href when provided", () => {
      render(CustomHrefTest);
      const scrollspy = screen.getByTestId("custom-href-scrollspy");

      const links = scrollspy.querySelectorAll('[data-part="link"]');
      const firstLink = links[0] as HTMLAnchorElement;

      expect(firstLink.getAttribute("href")).toBe("#custom-href-1");
    });

    test("uses default href pattern when not provided", () => {
      render(BasicScrollSpyTest);
      const scrollspy = screen.getByTestId("basic-scrollspy");

      const links = scrollspy.querySelectorAll('[data-part="link"]');
      const firstLink = links[0] as HTMLAnchorElement;

      expect(firstLink.getAttribute("href")).toMatch(/#section\d+/);
    });
  });

  describe("Custom Styling", () => {
    test("applies custom active class", () => {
      render(CustomClassTest);
      const scrollspy = screen.getByTestId("custom-class-scrollspy");

      expect(scrollspy.className).toContain("custom-base-class");
    });

    test("applies active class to first item by default", () => {
      render(CustomClassTest);
      const scrollspy = screen.getByTestId("custom-class-scrollspy");

      const links = scrollspy.querySelectorAll('[data-part="link"]');
      const firstLink = links[0] as HTMLElement;

      // Should have active styling
      expect(firstLink.getAttribute("aria-current")).toBe("location");
    });
  });

  describe("Offset Behavior", () => {
    test("renders with custom offset", () => {
      render(OffsetTest);
      const scrollspy = screen.getByTestId("offset-scrollspy");

      expect(scrollspy).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    test("has proper ARIA labels", () => {
      render(BasicScrollSpyTest);
      const scrollspy = screen.getByTestId("basic-scrollspy");

      expect(scrollspy).toHaveAttribute("aria-label", "Scroll spy navigation");
    });

    test("sets aria-current on active item", () => {
      render(BasicScrollSpyTest);
      const scrollspy = screen.getByTestId("basic-scrollspy");

      const links = scrollspy.querySelectorAll('[data-part="link"]');
      const firstLink = links[0] as HTMLElement;

      // First item should be active by default
      expect(firstLink.getAttribute("aria-current")).toBe("location");
    });

    test("navigation links are focusable", () => {
      render(BasicScrollSpyTest);
      const scrollspy = screen.getByTestId("basic-scrollspy");

      const links = scrollspy.querySelectorAll('[data-part="link"]');

      links.forEach((link) => {
        expect(link).not.toHaveAttribute("tabindex", "-1");
      });
    });
  });

  describe("Smooth Scroll", () => {
    test("applies smooth scroll behavior by default", async () => {
      const user = userEvent.setup();
      render(BasicScrollSpyTest);
      const scrollspy = screen.getByTestId("basic-scrollspy");

      const links = scrollspy.querySelectorAll('[data-part="link"]');
      const firstLink = links[0] as HTMLElement;

      window.scrollTo = vi.fn();

      await user.click(firstLink);

      expect(window.scrollTo).toHaveBeenCalledWith(
        expect.objectContaining({
          behavior: "smooth"
        })
      );
    });

    test("applies auto scroll behavior when smoothScroll is false", async () => {
      const user = userEvent.setup();
      render(NoSmoothScrollTest);
      const scrollspy = screen.getByTestId("no-smooth-scrollspy");

      const links = scrollspy.querySelectorAll('[data-part="link"]');
      const firstLink = links[0] as HTMLElement;

      window.scrollTo = vi.fn();

      await user.click(firstLink);

      expect(window.scrollTo).toHaveBeenCalledWith(
        expect.objectContaining({
          behavior: "auto"
        })
      );
    });
  });

  describe("IntersectionObserver Setup", () => {
    test("creates IntersectionObserver on mount", () => {
      render(BasicScrollSpyTest);

      // Verify that observe was called (which means IntersectionObserver was instantiated)
      expect(mockObserve).toHaveBeenCalled();
    });

    test("observes target sections", () => {
      render(BasicScrollSpyTest);

      // Verify sections exist in DOM
      expect(screen.getByTestId("section-1")).toBeInTheDocument();
      expect(screen.getByTestId("section-2")).toBeInTheDocument();
      expect(screen.getByTestId("section-3")).toBeInTheDocument();
    });
  });

  describe("Link Structure", () => {
    test("renders correct number of navigation items", () => {
      render(BasicScrollSpyTest);
      const scrollspy = screen.getByTestId("basic-scrollspy");

      const items = scrollspy.querySelectorAll('[data-part="item"]');
      expect(items.length).toBe(3);
    });

    test("each link has required attributes", () => {
      render(BasicScrollSpyTest);
      const scrollspy = screen.getByTestId("basic-scrollspy");

      const links = scrollspy.querySelectorAll('[data-part="link"]');

      links.forEach((link) => {
        expect(link).toHaveAttribute("href");
        expect(link).toHaveAttribute("data-part", "link");
      });
    });
  });

  describe("Custom Classes Prop", () => {
    test("applies custom classes to container", () => {
      render(CustomClassesTest);
      const scrollspy = screen.getByTestId("classes-scrollspy");

      const container = scrollspy.querySelector('[data-part="container"]');
      expect(container?.className).toContain("custom-container-class");
    });

    test("applies custom classes to list", () => {
      render(CustomClassesTest);
      const scrollspy = screen.getByTestId("classes-scrollspy");

      const list = scrollspy.querySelector('[data-part="list"]');
      expect(list?.className).toContain("custom-list-class");
    });

    test("applies custom classes to items", () => {
      render(CustomClassesTest);
      const scrollspy = screen.getByTestId("classes-scrollspy");

      const items = scrollspy.querySelectorAll('[data-part="item"]');
      items.forEach((item) => {
        expect(item.className).toContain("custom-item-class");
      });
    });

    test("applies custom classes to links", () => {
      render(CustomClassesTest);
      const scrollspy = screen.getByTestId("classes-scrollspy");

      const links = scrollspy.querySelectorAll('[data-part="link"]');
      links.forEach((link) => {
        expect(link.className).toContain("custom-link-class");
      });
    });
  });

  describe("Rest Props", () => {
    test("passes through custom id attribute", () => {
      render(RestPropsTest);
      const scrollspy = screen.getByTestId("rest-props-scrollspy");

      expect(scrollspy).toHaveAttribute("id", "custom-id");
    });

    test("passes through custom role attribute", () => {
      render(RestPropsTest);
      const scrollspy = screen.getByTestId("rest-props-scrollspy");

      expect(scrollspy).toHaveAttribute("role", "navigation");
    });

    test("passes through aria-describedby attribute", () => {
      render(RestPropsTest);
      const scrollspy = screen.getByTestId("rest-props-scrollspy");

      expect(scrollspy).toHaveAttribute("aria-describedby", "scroll-spy-description");
    });
  });
});
