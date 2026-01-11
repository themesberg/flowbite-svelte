import { cleanup, render, screen, waitFor } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicMegaMenu from "./basic-mega-menu.test.svelte";
import FullMegaMenu from "./full-mega-menu.test.svelte";
import CustomMegaMenu from "./custom-mega-menu.test.svelte";

afterEach(() => {
  cleanup();
});

describe("MegaMenu - Basic", () => {
  test("renders mega menu container", () => {
    render(BasicMegaMenu);
    expect(screen.getByTestId("mega-menu-trigger")).toBeInTheDocument();
  });

  test("menu is initially closed", () => {
    render(BasicMegaMenu);
    const menuItems = screen.queryByText("Menu Item 1");
    expect(menuItems).not.toBeInTheDocument();
  });

  test("opens menu on trigger click", async () => {
    const user = userEvent.setup();
    render(BasicMegaMenu);

    const trigger = await screen.findByTestId("mega-menu-trigger");
    await user.click(trigger);

    // Wait for the menu to open
    await waitFor(
      () => {
        expect(screen.getByText("Menu Item 1")).toBeInTheDocument();
      },
      { timeout: 1000 }
    );
  });
});

describe("MegaMenu - Full Width", () => {
  test("renders full width mega menu", () => {
    render(FullMegaMenu);
    expect(screen.getByTestId("full-mega-menu-trigger")).toBeInTheDocument();
  });

  test("opens full width menu", async () => {
    const user = userEvent.setup();
    render(FullMegaMenu);

    // Wait until the trigger is actually available
    const trigger = await screen.findByTestId("full-mega-menu-trigger");

    await user.click(trigger);

    // Wait for menu content to appear
    expect(await screen.findByText("Full Width Item")).toBeInTheDocument();
  });

  test("renders extra content in full width mode", async () => {
    const user = userEvent.setup();
    render(FullMegaMenu);

    const trigger = await screen.findByTestId("full-mega-menu-trigger");
    await user.click(trigger);

    expect(await screen.findByText("Extra Content")).toBeInTheDocument();
  });
});

describe("MegaMenu - Custom Content", () => {
  test("renders custom item content", async () => {
    const user = userEvent.setup();
    render(CustomMegaMenu);

    const trigger = await screen.findByTestId("custom-mega-menu-trigger");
    await user.click(trigger);

    // Wait for menu content to appear - use testId instead of text
    expect(await screen.findByTestId("custom-menu-item-0")).toBeInTheDocument();

    // Verify the actual content
    expect(await screen.findByText("Custom 1 (ID: 1)")).toBeInTheDocument();
  });
});
