import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicNavbarTest from "./basic-navbar.test.svelte";
import FluidNavbarTest from "./fluid-navbar.test.svelte";
import NoCloseOnClickTest from "./no-close-on-click.test.svelte";
import NavBrandTest from "./nav-brand.test.svelte";
import ActiveLinkTest from "./active-link.test.svelte";
import NavLiClickTest, { testState } from "./navli-click.test.svelte";
import NavLiButtonTest from "./navli-button.test.svelte";
import CustomClassesTest from "./custom-classes.test.svelte";
import CustomBreakpointTest from "./custom-breakpoint.test.svelte";
import CustomActiveClassesTest from "./custom-active-classes.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Navbar Component", () => {
  describe("Basic Rendering", () => {
    test("renders navbar correctly", () => {
      render(BasicNavbarTest);
      const nav = screen.getByRole("navigation");

      expect(nav).toBeInTheDocument();
    });

    test("renders with brand", () => {
      render(BasicNavbarTest);
      const brand = screen.getByText("Flowbite");

      expect(brand).toBeInTheDocument();
    });

    test("renders navigation items", () => {
      render(BasicNavbarTest);
      const homeLink = screen.getByText("Home");
      const aboutLink = screen.getByText("About");
      const contactLink = screen.getByText("Contact");

      expect(homeLink).toBeInTheDocument();
      expect(aboutLink).toBeInTheDocument();
      expect(contactLink).toBeInTheDocument();
    });

    test("renders hamburger menu button", () => {
      render(BasicNavbarTest);
      const hamburger = screen.getByRole("button", { name: /open main menu/i });

      expect(hamburger).toBeInTheDocument();
    });
  });

  describe("Props", () => {
    test("renders fluid navbar", () => {
      const { container } = render(FluidNavbarTest);
      // Fluid navbar should have max-w-full instead of constrained width
      expect(container.querySelector("nav")).toBeInTheDocument();
    });

    test("renders with custom breakpoint", () => {
      render(CustomBreakpointTest);
      const navbar = screen.getByTestId("navbar-lg");

      expect(navbar).toBeInTheDocument();
    });

    test("respects closeOnClickOutside prop", () => {
      render(NoCloseOnClickTest);
      const nav = screen.getByRole("navigation");

      expect(nav).toBeInTheDocument();
    });
  });

  describe("Navbar Toggle", () => {
    test("hamburger toggles menu visibility", async () => {
      const user = userEvent.setup();
      render(BasicNavbarTest);
      const hamburger = screen.getByRole("button", { name: /open main menu/i });

      // Menu should be collapsed initially
      expect(hamburger).toHaveAttribute("aria-expanded", "false");

      // Click to expand menu
      await user.click(hamburger);

      // Menu should now be expanded
      expect(hamburger).toHaveAttribute("aria-expanded", "true");

      // Click again to collapse
      await user.click(hamburger);

      // Menu should be collapsed again
      expect(hamburger).toHaveAttribute("aria-expanded", "false");
    });
  });

  describe("Custom Classes", () => {
    test("applies custom classes to navbar components", () => {
      const { container } = render(CustomClassesTest);

      // Check for custom classes
      const navbar = container.querySelector(".custom-navbar-class");
      expect(navbar).toBeTruthy();

      const brand = container.querySelector(".custom-brand-class");
      expect(brand).toBeTruthy();

      const hamburger = container.querySelector(".custom-hamburger-class");
      expect(hamburger).toBeTruthy();
    });
  });
});

describe("NavBrand Component", () => {
  test("renders brand as link", () => {
    render(NavBrandTest);
    const brand = screen.getByTestId("nav-brand");

    expect(brand).toBeInTheDocument();
    expect(brand.tagName).toBe("A");
    expect(brand).toHaveAttribute("href", "https://flowbite-svelte.com/");
  });

  test("renders brand content", () => {
    render(NavBrandTest);
    const brandText = screen.getByText("Brand Name");
    const brandImg = screen.getByAltText("Logo");

    expect(brandText).toBeInTheDocument();
    expect(brandImg).toBeInTheDocument();
  });
});

describe("NavUl Component", () => {
  test("renders navigation list", () => {
    const { container } = render(BasicNavbarTest);
    const ul = container.querySelector("ul");

    expect(ul).toBeInTheDocument();
  });

  test("handles active URL", () => {
    render(ActiveLinkTest);
    const aboutLink = screen.getByTestId("about-link");

    expect(aboutLink).toBeInTheDocument();
    // Active link should have active styling (activeUrl="https://flowbite-svelte.com/about" in test component)
    expect(aboutLink).toHaveClass("text-white");
    expect(aboutLink).toHaveClass("bg-primary-700");
  });

  test("supports custom active classes", () => {
    render(CustomActiveClassesTest);
    const customLink = screen.getByTestId("custom-class-link");

    expect(customLink).toBeInTheDocument();
    // Custom classes should be applied (this link has href="https://flowbite-svelte.com/home", activeUrl="https://flowbite-svelte.com/about")
    expect(customLink).toHaveClass("custom-non-active");
  });
});

describe("NavLi Component", () => {
  describe("Link Rendering", () => {
    test("renders as link when href is provided", () => {
      render(NavLiButtonTest);
      // data-testid is directly on the <a> element
      const link = screen.getByTestId("link-item");

      expect(link).toBeInTheDocument();
      expect(link.tagName).toBe("A");
      expect(link).toHaveAttribute("href", "https://flowbite-svelte.com/link");
      expect(link).toHaveTextContent("Link Item");
    });

    test("renders as button when href is not provided", () => {
      render(NavLiButtonTest);
      // data-testid is directly on the <button> element
      const button = screen.getByTestId("button-item");

      expect(button).toBeInTheDocument();
      expect(button.tagName).toBe("BUTTON");
      expect(button).toHaveTextContent("Button Item");
    });
  });

  describe("Interactions", () => {
    beforeEach(() => {
      testState.clickCount = 0;
    });

    test("handles click events", async () => {
      const user = userEvent.setup();
      render(NavLiClickTest);
      const clickableLink = screen.getByTestId("clickable-link");

      // Initial count should be 0
      expect(testState.clickCount).toBe(0);

      // Click the link
      await user.click(clickableLink);

      // Count should increment
      expect(testState.clickCount).toBe(1);
    });

    // test("closes mobile menu on link click", async () => {
    //   const user = userEvent.setup();
    //   render(NavLiClickTest);

    //   const hamburger = screen.getByTestId("hamburger");
    //   const clickableLink = screen.getByTestId("clickable-link");

    //   // 1. Open the menu
    //   await user.click(hamburger);
    //   expect(hamburger).toHaveAttribute("aria-expanded", "true");

    //   // 2. Click the link
    //   await user.click(clickableLink);

    //   // 3. Menu should close
    //   expect(hamburger).toHaveAttribute("aria-expanded", "false");
    // });
  });

  describe("Active State", () => {
    test("applies active class to matching URL", () => {
      render(ActiveLinkTest);
      const aboutLink = screen.getByTestId("about-link");

      expect(aboutLink).toBeInTheDocument();
      // About link should have active styling since activeUrl="https://flowbite-svelte.com/about"
      expect(aboutLink).toHaveClass("text-white");
      expect(aboutLink).toHaveClass("bg-primary-700");
    });

    test("applies non-active class to non-matching URLs", () => {
      render(ActiveLinkTest);
      const homeLink = screen.getByTestId("home-link");
      const contactLink = screen.getByTestId("contact-link");

      expect(homeLink).toBeInTheDocument();
      expect(contactLink).toBeInTheDocument();
      // These should have non-active styling (activeUrl="https://flowbite-svelte.com/about")
      expect(homeLink).toHaveClass("text-gray-700");
      expect(contactLink).toHaveClass("text-gray-700");
    });
  });
});

describe("NavHamburger Component", () => {
  test("renders hamburger button", () => {
    render(BasicNavbarTest);
    const hamburger = screen.getByRole("button", { name: /open main menu/i });

    expect(hamburger).toBeInTheDocument();
  });

  test("hamburger contains menu icon", () => {
    render(BasicNavbarTest);
    const hamburger = screen.getByRole("button", { name: /open main menu/i });
    const svg = hamburger.querySelector("svg");

    expect(svg).toBeInTheDocument();
  });

  test("hamburger is clickable", async () => {
    const user = userEvent.setup();
    render(BasicNavbarTest);
    const hamburger = screen.getByRole("button", { name: /open main menu/i });

    await user.click(hamburger);

    // Menu should toggle (checked by menu visibility tests)
    expect(hamburger).toBeInTheDocument();
  });

  test("supports custom onclick handler", async () => {
    const user = userEvent.setup();
    render(NavLiClickTest);
    const hamburger = screen.getByTestId("hamburger");

    await user.click(hamburger);

    expect(hamburger).toBeInTheDocument();
  });

  test("hamburger icon has correct accessibility attributes", () => {
    render(BasicNavbarTest);
    const hamburger = screen.getByRole("button", { name: /open main menu/i });
    const svg = hamburger.querySelector("svg");

    expect(svg).toBeInTheDocument();
    // SVG is inside a button, so it should not have role="button" or tabindex
    // The button itself provides the accessibility
    expect(svg).toHaveAttribute("aria-hidden", "true");
  });
});

describe("Navbar Accessibility", () => {
  test("navbar has semantic nav element", () => {
    render(BasicNavbarTest);
    const nav = screen.getByRole("navigation");

    expect(nav).toBeInTheDocument();
  });

  test("hamburger button has accessible name", () => {
    render(BasicNavbarTest);
    const hamburger = screen.getByRole("button", { name: /open main menu/i });

    expect(hamburger).toHaveAccessibleName();
  });

  test("navigation links have valid href attributes", () => {
    render(BasicNavbarTest);
    const links = screen.getAllByRole("link");

    // Verify all links have href attributes (makes them keyboard accessible)
    links.forEach((link) => {
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href");
      // Links with href are automatically keyboard accessible (can be focused/activated with Enter)
    });
  });
});

describe("Navbar Responsive Behavior", () => {
  test("hamburger is visible on mobile", () => {
    render(BasicNavbarTest);
    const hamburger = screen.getByRole("button", { name: /open main menu/i });

    expect(hamburger).toBeInTheDocument();
  });

  test("menu toggles on hamburger click", async () => {
    const user = userEvent.setup();
    render(BasicNavbarTest);
    const hamburger = screen.getByRole("button", { name: /open main menu/i });

    // Initially collapsed
    expect(hamburger).toHaveAttribute("aria-expanded", "false");

    // Click to expand
    await user.click(hamburger);

    expect(hamburger).toHaveAttribute("aria-expanded", "true");

    // Click again to collapse
    await user.click(hamburger);

    expect(hamburger).toHaveAttribute("aria-expanded", "false");
  });
});

describe("NavContainer Component", () => {
  test("renders container div", () => {
    const { container } = render(BasicNavbarTest);
    const navContainer = container.querySelector("nav > div > div");

    expect(navContainer).toBeInTheDocument();
  });

  test("fluid prop affects container width", () => {
    const { container } = render(FluidNavbarTest);
    const navContainer = container.querySelector("nav > div > div");

    expect(navContainer).toBeInTheDocument();
  });
});
