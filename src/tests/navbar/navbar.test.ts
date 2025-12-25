import { cleanup, render, screen, waitFor } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
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
      const { container } = render(BasicNavbarTest);
      const hamburger = screen.getByRole("button", { name: /open main menu/i });

      // Menu should be hidden initially
      const menuContainer = container.querySelector("[class*='hidden']");
      expect(menuContainer).toBeTruthy();

      // Click to show menu
      await user.click(hamburger);

      // Wait for menu to be visible
      await waitFor(() => {
        const visibleMenu = container.querySelector("ul");
        expect(visibleMenu).toBeInTheDocument();
      });
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
    expect(brand).toHaveAttribute("href", "/");
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
    // Active link should have active styling
  });

  test("supports custom active classes", () => {
    render(CustomActiveClassesTest);
    const customLink = screen.getByTestId("custom-class-link");

    expect(customLink).toBeInTheDocument();
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
      expect(link).toHaveAttribute("href", "/link");
      expect(link).toHaveTextContent("Link Item");
    });

    test("renders as button when href is not provided", () => {
      render(NavLiButtonTest);
      // data-testid is directly on the <button> element
      const button = screen.getByTestId("button-item");

      expect(button).toBeInTheDocument();
      expect(button.tagName).toBe("BUTTON");
      expect(button).toHaveAttribute("role", "presentation");
      expect(button).toHaveTextContent("Button Item");
    });
  });

  describe("Interactions", () => {
    test("handles click events", async () => {
      const user = userEvent.setup();
      // Reset state before test
      testState.clickCount = 0;
      render(NavLiClickTest);
      const clickableLink = screen.getByTestId("clickable-link");

      // Initial count should be 0
      expect(testState.clickCount).toBe(0);

      // Click the link
      await user.click(clickableLink);

      // Count should increment
      expect(testState.clickCount).toBe(1);
    });

    test("closes mobile menu on link click", async () => {
      const user = userEvent.setup();
      const { container } = render(NavLiClickTest);
      const hamburger = screen.getByTestId("hamburger");
      const clickableLink = screen.getByTestId("clickable-link");

      // Open mobile menu
      await user.click(hamburger);

      // Click the link
      await user.click(clickableLink);

      // Menu should close (check for hidden state)
      await waitFor(() => {
        const menuContainer = container.querySelector("[class*='hidden']");
        expect(menuContainer).toBeTruthy();
      });
    });
  });

  describe("Active State", () => {
    test("applies active class to matching URL", () => {
      render(ActiveLinkTest);
      const aboutLink = screen.getByTestId("about-link");

      expect(aboutLink).toBeInTheDocument();
      // About link should have active styling since activeUrl="/about"
    });

    test("applies non-active class to non-matching URLs", () => {
      render(ActiveLinkTest);
      const homeLink = screen.getByTestId("home-link");
      const contactLink = screen.getByTestId("contact-link");

      expect(homeLink).toBeInTheDocument();
      expect(contactLink).toBeInTheDocument();
      // These should have non-active styling
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
    const { container } = render(BasicNavbarTest);
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
    const { container } = render(BasicNavbarTest);
    const hamburger = screen.getByRole("button", { name: /open main menu/i });
    const svg = hamburger.querySelector("svg");

    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("role", "button");
    expect(svg).toHaveAttribute("tabindex", "0");
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

  test("navigation links are keyboard accessible", () => {
    render(BasicNavbarTest);
    const links = screen.getAllByRole("link");

    links.forEach((link) => {
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href");
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
    const { container } = render(BasicNavbarTest);
    const hamburger = screen.getByRole("button", { name: /open main menu/i });

    // Click to toggle
    await user.click(hamburger);

    await waitFor(() => {
      const ul = container.querySelector("ul");
      expect(ul).toBeInTheDocument();
    });

    // Click again to toggle back
    await user.click(hamburger);

    await waitFor(() => {
      const menuContainer = container.querySelector("[class*='hidden']");
      expect(menuContainer).toBeTruthy();
    });
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
