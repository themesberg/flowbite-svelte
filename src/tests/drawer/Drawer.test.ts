import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicDrawerTest from "./basic-drawer.test.svelte";
import RightDrawerTest from "./right-drawer.test.svelte";
import DrawerWithHeaderTest from "./drawer-with-header.test.svelte";
import DrawerWithHandleTest from "./drawer-with-handle.test.svelte";
import ModalDrawerTest from "./modal-drawer.test.svelte";
import DrawerCloseTest, { testState } from "./drawer-close.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Drawer Component", () => {
  describe("Basic Rendering", () => {
    test("basic drawer renders correctly", () => {
      render(BasicDrawerTest);
      const button = screen.getByText("Open Drawer");

      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute("type", "button");
    });

    test("drawer opens when open prop is true", () => {
      render(RightDrawerTest);
      const dialog = screen.getByRole("dialog");

      expect(dialog).toBeInTheDocument();
      expect(dialog).toHaveAttribute("open");
    });

    test("drawer with header renders correctly", () => {
      render(DrawerWithHeaderTest);
      const heading = screen.getByText("Drawer with header");
      const closeButton = screen.getByText("Close drawer");

      expect(heading).toBeInTheDocument();
      expect(closeButton).toBeInTheDocument();
    });

    test("drawer with handle renders correctly", () => {
      render(DrawerWithHandleTest);
      const handleButton = screen.getByLabelText("Toggle drawer");

      expect(handleButton).toBeInTheDocument();
      expect(handleButton).toHaveAttribute("type", "button");
    });
  });

  describe("Props", () => {
    test("drawer placement right applies correct styles", () => {
      render(RightDrawerTest);
      const dialog = screen.getByRole("dialog");

      expect(dialog).toBeInTheDocument();
    });

    test("modal drawer renders with modal behavior", () => {
      render(ModalDrawerTest);
      const dialog = screen.getByRole("dialog");

      expect(dialog).toBeInTheDocument();
    });
  });

  describe("Interactions", () => {
    test("clicking open button triggers drawer", async () => {
      const user = userEvent.setup();
      render(BasicDrawerTest);
      const button = screen.getByText("Open Drawer");

      await user.click(button);

      // Check if dialog appears after click
      const dialog = await screen.findByRole("dialog");
      expect(dialog).toBeInTheDocument();
    });

    test("drawer close button works", async () => {
      const user = userEvent.setup();
      testState.closeCount = 0;

      render(DrawerCloseTest);
      // Find the button within the Drawerhead component by its sr-only text
      const closeButton = screen.getByText("Close drawer").closest("button");

      expect(testState.closeCount).toBe(0);
      expect(closeButton).toBeInTheDocument();

      if (closeButton) {
        await user.click(closeButton);
        expect(testState.closeCount).toBe(1);
      }
    });
  });

  describe("Accessibility", () => {
    test("drawer has correct role", () => {
      render(RightDrawerTest);
      const dialog = screen.getByRole("dialog");

      expect(dialog).toBeInTheDocument();
    });

    test("drawer handle has aria-label", () => {
      render(DrawerWithHandleTest);
      const handle = screen.getByLabelText("Toggle drawer");

      expect(handle).toBeInTheDocument();
    });

    test("close button has accessible name", () => {
      render(DrawerWithHeaderTest);
      const srOnly = screen.getByText("Close drawer");

      expect(srOnly).toHaveClass("sr-only");
    });
  });
});
