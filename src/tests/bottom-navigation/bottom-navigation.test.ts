import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicBottomNavTest from "./basic-bottom-nav.test.svelte";
import BottomNavWithHeaderTest from "./bottom-nav-with-header.test.svelte";
import BottomNavStaticTest from "./bottom-nav-static.test.svelte";
import BottomNavItemButtonTest from "./bottom-nav-item-button.test.svelte";
import BottomNavItemLinkTest from "./bottom-nav-item-link.test.svelte";
import BottomNavItemActiveTest from "./bottom-nav-item-active.test.svelte";
import BottomNavHeaderTest from "./bottom-nav-header.test.svelte";
import BottomNavHeaderItemClickableTest from "./bottom-nav-header-item-clickable.test.svelte";
import BottomNavAppTypeTest from "./bottom-nav-app-type.test.svelte";

afterEach(() => {
  cleanup();
});

describe("BottomNav Component", () => {
  test("renders basic bottom navigation correctly", () => {
    render(BasicBottomNavTest);

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);

    expect(screen.getByLabelText("Home")).toBeInTheDocument();
    expect(screen.getByLabelText("Wallet")).toBeInTheDocument();
    expect(screen.getByLabelText("Profile")).toBeInTheDocument();
  });

  test("renders with header correctly", () => {
    render(BottomNavWithHeaderTest);

    // Check header items exist
    const headerButtons = screen.getAllByRole("button");
    expect(headerButtons.length).toBeGreaterThanOrEqual(3);

    expect(screen.getByText("Recent")).toBeInTheDocument();
    expect(screen.getByText("Popular")).toBeInTheDocument();
    expect(screen.getByText("Featured")).toBeInTheDocument();

    // Check navigation items exist
    expect(screen.getByLabelText("Home")).toBeInTheDocument();
    expect(screen.getByLabelText("Wallet")).toBeInTheDocument();
    expect(screen.getByLabelText("Profile")).toBeInTheDocument();
  });

  test("renders with static position", () => {
    render(BottomNavStaticTest);

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);

    expect(screen.getByLabelText("Home")).toBeInTheDocument();
  });

  test("renders application nav type correctly", () => {
    render(BottomNavAppTypeTest);

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(5);

    expect(screen.getByLabelText("Home")).toBeInTheDocument();
    expect(screen.getByLabelText("Wallet")).toBeInTheDocument();
    expect(screen.getByLabelText("New")).toBeInTheDocument();
    expect(screen.getByLabelText("Search")).toBeInTheDocument();
    expect(screen.getByLabelText("Profile")).toBeInTheDocument();
  });
});

describe("BottomNavItem Component", () => {
  test("renders as button by default", () => {
    render(BottomNavItemButtonTest);

    const button = screen.getByLabelText("Home");
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe("BUTTON");
    expect(button).toHaveAttribute("type", "button");
  });

  test("handles button click events", async () => {
    const user = userEvent.setup();
    render(BottomNavItemButtonTest);

    const button = screen.getByLabelText("Home");
    const clickedState = screen.getByTestId("clicked-state");

    expect(clickedState).toHaveTextContent("not-clicked");

    await user.click(button);

    expect(clickedState).toHaveTextContent("clicked");
  });

  test("renders as link when href is provided", () => {
    render(BottomNavItemLinkTest);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);

    const homeLink = screen.getByLabelText("Home");
    expect(homeLink.tagName).toBe("A");
    expect(homeLink).toHaveAttribute("href", "/");

    const walletLink = screen.getByLabelText("Wallet");
    expect(walletLink).toHaveAttribute("href", "/wallet");
  });

  test("displays button name correctly", () => {
    render(BasicBottomNavTest);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Wallet")).toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
  });

  test("renders buttons when active state is set", () => {
    render(BottomNavItemActiveTest);

    const homeButton = screen.getByLabelText("Home");
    const walletButton = screen.getByLabelText("Wallet");

    expect(homeButton).toBeInTheDocument();
    expect(walletButton).toBeInTheDocument();
    expect(homeButton.tagName).toBe("BUTTON");
    expect(walletButton.tagName).toBe("BUTTON");
    // Note: Active state styling is controlled by parent component
    // and would need integration testing to verify visual changes
  });

  test("has proper accessibility attributes", () => {
    render(BasicBottomNavTest);

    const homeButton = screen.getByLabelText("Home");
    expect(homeButton).toHaveAttribute("aria-label", "Home");

    const walletButton = screen.getByLabelText("Wallet");
    expect(walletButton).toHaveAttribute("aria-label", "Wallet");
  });
});

describe("BottomNavHeader Component", () => {
  test("renders header items correctly", () => {
    render(BottomNavHeaderTest);

    const headerItems = screen.getAllByRole("button");
    expect(headerItems).toHaveLength(3);

    expect(screen.getByText("Recent")).toBeInTheDocument();
    expect(screen.getByText("Popular")).toBeInTheDocument();
    expect(screen.getByText("Featured")).toBeInTheDocument();
  });

  test("contains a role group", () => {
    const { container } = render(BottomNavHeaderTest);

    const group = container.querySelector('[role="group"]');
    expect(group).toBeInTheDocument();
  });
});

describe("BottomNavHeaderItem Component", () => {
  test("renders header item as button", () => {
    render(BottomNavHeaderItemClickableTest);

    const button = screen.getByText("Recent");
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe("BUTTON");
  });

  test("handles click events", async () => {
    const user = userEvent.setup();
    render(BottomNavHeaderItemClickableTest);

    const button = screen.getByText("Recent");
    const clickedState = screen.getByTestId("clicked-state");

    expect(clickedState).toHaveTextContent("not-clicked");

    await user.click(button);

    expect(clickedState).toHaveTextContent("clicked");
  });

  test("displays item name correctly", () => {
    render(BottomNavHeaderTest);

    expect(screen.getByText("Recent")).toBeInTheDocument();
    expect(screen.getByText("Popular")).toBeInTheDocument();
    expect(screen.getByText("Featured")).toBeInTheDocument();
  });
});

describe("BottomNav Integration", () => {
  test("header and navigation items work together", () => {
    render(BottomNavWithHeaderTest);

    // Check that both header and nav items are present
    const allButtons = screen.getAllByRole("button");
    expect(allButtons.length).toBeGreaterThanOrEqual(6); // 3 header + 3 nav items

    // Header items
    expect(screen.getByText("Recent")).toBeInTheDocument();
    expect(screen.getByText("Popular")).toBeInTheDocument();
    expect(screen.getByText("Featured")).toBeInTheDocument();

    // Nav items
    expect(screen.getByLabelText("Home")).toBeInTheDocument();
    expect(screen.getByLabelText("Wallet")).toBeInTheDocument();
    expect(screen.getByLabelText("Profile")).toBeInTheDocument();
  });

  test("renders links with correct href attributes", () => {
    render(BottomNavItemLinkTest);

    const homeLink = screen.getByLabelText("Home");
    const walletLink = screen.getByLabelText("Wallet");

    expect(homeLink).toHaveAttribute("href", "/");
    expect(walletLink).toHaveAttribute("href", "/wallet");
  });
});
