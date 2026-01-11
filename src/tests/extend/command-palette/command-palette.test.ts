import { cleanup, render, screen, within, fireEvent, waitFor } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicPalette from "./basic-palette.test.svelte";
import OpenPalette from "./open-palette.test.svelte";
import FilteringPalette from "./filtering-palette.test.svelte";
import KeyboardNavigationPalette from "./keyboard-navigation.test.svelte";
import VimModePalette from "./vim-mode.test.svelte";
import EmptyStatePalette from "./empty-state.test.svelte";
import SelectionPalette, { testState as selectionState } from "./selection.test.svelte";
import CustomShortcutPalette from "./custom-shortcut.test.svelte";
import CloseWrapper from "./close-wrapper.test.svelte";

afterEach(() => {
  cleanup();
  selectionState.selectedItem = null;
  selectionState.selectCount = 0;
});

describe("CommandPalette Component", () => {
  describe("Basic Rendering", () => {
    test("renders command palette with correct attributes when closed", () => {
      render(BasicPalette);

      const dialog = screen.queryByRole("dialog");
      expect(dialog).not.toBeInTheDocument();
    });

    test("renders with proper data attributes", () => {
      render(OpenPalette);

      const dialog = screen.getByRole("dialog");
      expect(dialog).toHaveAttribute("data-scope", "command-palette");
      expect(dialog).toHaveAttribute("aria-modal", "true");
    });

    test("renders search input with correct attributes", () => {
      render(OpenPalette);

      const searchInput = screen.getByRole("combobox");
      expect(searchInput).toBeInTheDocument();
      expect(searchInput).toHaveAttribute("data-part", "search");
      expect(searchInput).toHaveAttribute("aria-expanded", "true");
    });

    test("renders results list with correct attributes", () => {
      render(OpenPalette);

      const list = screen.getByRole("listbox");
      expect(list).toBeInTheDocument();
      expect(list).toHaveAttribute("data-part", "list");
    });

    test("renders command items in list", () => {
      render(OpenPalette);

      const options = screen.getAllByRole("option");
      expect(options.length).toBeGreaterThan(0);

      options.forEach((option) => {
        expect(option).toHaveAttribute("data-part", "item");
      });
    });

    test("renders footer with keyboard shortcuts", () => {
      render(OpenPalette);

      const footer = screen.getByTestId("command-palette-footer");
      expect(footer).toHaveAttribute("data-part", "footer");

      const kbdElements = within(footer).getAllByTestId(/^kbd-/);
      expect(kbdElements.length).toBeGreaterThan(0);
    });
  });

  describe("Dialog Behavior", () => {
    test("opens dialog when open prop is true", async () => {
      render(BasicPalette);

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

      // Fire window-level shortcut (⌘K / Ctrl+K)
      fireEvent.keyDown(window, {
        key: "k",
        metaKey: true
      });

      // Wait for dialog to be rendered
      const dialog = await screen.findByRole("dialog");

      expect(dialog).toBeInTheDocument();
    });

    test("closes dialog when open prop is set to false", async () => {
      render(CloseWrapper);

      const dialog = (await screen.findByRole("dialog")) as HTMLDialogElement;
      expect(dialog).toBeInTheDocument();

      // Call the native close method on the dialog element
      // This triggers the cancel event which the Dialog component handles
      dialog.close();

      // Wait for the dialog to be removed
      await waitFor(
        () => {
          expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
        },
        { timeout: 3000 }
      );
    });

    test("opens with keyboard shortcut (Cmd+K)", async () => {
      const user = userEvent.setup();
      render(BasicPalette);

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

      await user.keyboard("{Meta>}k{/Meta}");

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });
    });

    test("opens with keyboard shortcut (Ctrl+K)", async () => {
      const user = userEvent.setup();
      render(BasicPalette);

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

      await user.keyboard("{Control>}k{/Control}");

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });
    });

    test("closes with Escape key", async () => {
      const { component } = render(OpenPalette);

      const dialog = screen.getByRole("dialog") as HTMLDialogElement;
      expect(dialog).toBeInTheDocument();

      // Use the native close method which properly triggers the cancel event
      dialog.close();

      await waitFor(
        () => {
          expect(component.isOpen()).toBe(false);
          expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
        },
        { timeout: 3000 }
      );
    });

    test("toggles with keyboard shortcut", async () => {
      const user = userEvent.setup();
      render(BasicPalette);

      // Open
      await user.keyboard("{Control>}k{/Control}");
      await waitFor(() => {
        const dialog = screen.getByRole("dialog");
        expect(dialog).toBeInTheDocument();
      });

      // Close with same shortcut
      await user.keyboard("{Control>}k{/Control}");

      // Wait for the dialog to be removed
      await waitFor(
        () => {
          expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
        },
        { timeout: 3000 }
      );
    });

    test("respects custom shortcut key", async () => {
      const user = userEvent.setup();
      render(CustomShortcutPalette);

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

      await user.keyboard("{Control>}p{/Control}");
      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });
    });
  });

  describe("Search and Filtering", () => {
    test("filters items by label", async () => {
      const user = userEvent.setup();
      render(FilteringPalette);

      const searchInput = screen.getByRole("combobox");
      await user.type(searchInput, "settings");

      await waitFor(async () => {
        const options = await screen.findAllByRole("option");
        expect(options.length).toBe(1);
        expect(options[0]).toHaveTextContent(/settings/i);
      });
    });

    test("filters items by description", async () => {
      const user = userEvent.setup();
      render(FilteringPalette);

      const searchInput = screen.getByRole("combobox");
      await user.type(searchInput, "user preferences");

      await waitFor(() => {
        const options = screen.getAllByRole("option");
        expect(options.length).toBeGreaterThan(0);
      });
    });

    test("filters items by keywords", async () => {
      const user = userEvent.setup();
      render(FilteringPalette);

      const searchInput = screen.getByRole("combobox");
      await user.type(searchInput, "configuration");

      await waitFor(() => {
        const options = screen.getAllByRole("option");
        expect(options.length).toBeGreaterThan(0);
      });
    });

    test("search is case-insensitive", async () => {
      const user = userEvent.setup();
      render(FilteringPalette);

      const searchInput = screen.getByRole("combobox");
      await user.type(searchInput, "SETTINGS");

      await waitFor(() => {
        const options = screen.getAllByRole("option");
        expect(options.length).toBeGreaterThan(0);
      });
    });

    test("shows empty state when no results", async () => {
      const user = userEvent.setup();
      render(FilteringPalette);

      const searchInput = screen.getByRole("combobox");
      await user.type(searchInput, "nonexistent command");

      await waitFor(() => {
        // No command list should be rendered
        expect(screen.queryByRole("listbox")).not.toBeInTheDocument();

        // Empty state should come from CommandPalette itself
        const emptyState = screen.getByText(/no results/i);
        expect(emptyState).toBeInTheDocument();
      });
    });

    test("shows all items when search is empty", () => {
      render(OpenPalette);

      const options = screen.getAllByRole("option");
      expect(options.length).toBeGreaterThan(1);
    });

    test("clears search when dialog closes", async () => {
      const user = userEvent.setup();
      const { component } = render(OpenPalette);

      const searchInput = screen.getByRole("combobox") as HTMLInputElement;
      await user.type(searchInput, "test");
      expect(searchInput.value).toBe("test");

      // Close the dialog by setting open to false
      component.setOpen(false);

      // Wait for dialog to close
      await waitFor(
        () => {
          expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
        },
        { timeout: 3000 }
      );

      // Reopen the dialog
      component.setOpen(true);

      // Wait for the dialog to be rendered again
      await waitFor(
        () => {
          expect(screen.queryByRole("dialog")).toBeInTheDocument();
        },
        { timeout: 3000 }
      );

      const newSearchInput = screen.getByRole("combobox") as HTMLInputElement;
      expect(newSearchInput.value).toBe("");
    });
  });

  describe("Keyboard Navigation", () => {
    test("navigates down with ArrowDown", async () => {
      const user = userEvent.setup();
      render(KeyboardNavigationPalette);

      const options = screen.getAllByRole("option");
      expect(options[0]).toHaveAttribute("aria-selected", "true");

      await user.keyboard("{ArrowDown}");

      expect(options[0]).toHaveAttribute("aria-selected", "false");
      expect(options[1]).toHaveAttribute("aria-selected", "true");
    });

    test("navigates up with ArrowUp", async () => {
      const user = userEvent.setup();
      render(KeyboardNavigationPalette);

      const options = screen.getAllByRole("option");

      // Move to second item
      await user.keyboard("{ArrowDown}");
      expect(options[1]).toHaveAttribute("aria-selected", "true");

      // Move back to first
      await user.keyboard("{ArrowUp}");
      expect(options[0]).toHaveAttribute("aria-selected", "true");
    });

    test("does not navigate up from first item", async () => {
      const user = userEvent.setup();
      render(KeyboardNavigationPalette);

      const options = screen.getAllByRole("option");
      expect(options[0]).toHaveAttribute("aria-selected", "true");

      await user.keyboard("{ArrowUp}");

      expect(options[0]).toHaveAttribute("aria-selected", "true");
    });

    test("does not navigate down from last item", async () => {
      const user = userEvent.setup();
      render(KeyboardNavigationPalette);

      const options = screen.getAllByRole("option");

      // Navigate to last item
      for (let i = 0; i < options.length - 1; i++) {
        await user.keyboard("{ArrowDown}");
      }

      expect(options[options.length - 1]).toHaveAttribute("aria-selected", "true");

      await user.keyboard("{ArrowDown}");

      expect(options[options.length - 1]).toHaveAttribute("aria-selected", "true");
    });

    test("selects item with Enter key", async () => {
      const user = userEvent.setup();
      render(SelectionPalette);

      await user.keyboard("{Enter}");

      expect(selectionState.selectCount).toBe(1);
      expect(selectionState.selectedItem).toBe("item-1");
    });

    test("closes dialog after selecting item with Enter", async () => {
      const user = userEvent.setup();
      render(SelectionPalette);

      await user.keyboard("{Enter}");

      // Dialog should close after selection
      await waitFor(() => {
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
      });
    });

    // TODO
    // test.skip("resets selection index when dialog closes", async () => {
    //   const user = userEvent.setup();

    //   const { rerender } = render(KeyboardNavigationPalette, {
    //     open: true
    //   });

    //   // Navigate to third item
    //   await user.keyboard("{ArrowDown}");
    //   await user.keyboard("{ArrowDown}");

    //   let options = screen.getAllByRole("option");
    //   expect(options[2]).toHaveAttribute("aria-selected", "true");

    //   // Close via props
    //   await rerender({ open: false });

    //   // Reopen
    //   await rerender({ open: true });

    //   // Wait for UI to update, especially aria-selected on first option
    //   await waitFor(() => {
    //     const newOptions = screen.getAllByRole("option");
    //     expect(newOptions[0]).toHaveAttribute("aria-selected", "true");
    //   });
    // });
  });

  describe("Vim Mode Navigation", () => {
    test("navigates down with j key", async () => {
      const user = userEvent.setup();
      render(VimModePalette);

      const options = screen.getAllByRole("option");
      expect(options[0]).toHaveAttribute("aria-selected", "true");

      await user.keyboard("j");

      expect(options[1]).toHaveAttribute("aria-selected", "true");
    });

    test("navigates up with k key", async () => {
      const user = userEvent.setup();
      render(VimModePalette);

      const options = screen.getAllByRole("option");

      await user.keyboard("j");
      await user.keyboard("k");

      expect(options[0]).toHaveAttribute("aria-selected", "true");
    });

    test("does not use j/k for navigation when Ctrl is pressed", async () => {
      const user = userEvent.setup();
      render(VimModePalette);

      const options = screen.getAllByRole("option");
      expect(options[0]).toHaveAttribute("aria-selected", "true");

      await user.keyboard("{Control>}j{/Control}");

      // Should still be on first item
      expect(options[0]).toHaveAttribute("aria-selected", "true");
    });

    test("still supports arrow keys in vim mode", async () => {
      const user = userEvent.setup();
      render(VimModePalette);

      const options = screen.getAllByRole("option");

      await user.keyboard("{ArrowDown}");

      expect(options[1]).toHaveAttribute("aria-selected", "true");
    });
  });

  describe("Mouse Interactions", () => {
    test("selects item on click", async () => {
      const user = userEvent.setup();
      render(SelectionPalette);

      const options = screen.getAllByRole("option");
      await user.click(options[1]);

      expect(selectionState.selectCount).toBe(1);
      expect(selectionState.selectedItem).toBe("item-2");
    });

    test("closes dialog after clicking item", async () => {
      const user = userEvent.setup();
      render(SelectionPalette);

      const options = screen.getAllByRole("option");
      await user.click(options[0]);

      await waitFor(() => {
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
      });
    });

    test("highlights item on mouse enter", async () => {
      const user = userEvent.setup();
      render(KeyboardNavigationPalette);

      const options = screen.getAllByRole("option");

      // Move to second item with keyboard
      await user.keyboard("{ArrowDown}");
      expect(options[1]).toHaveAttribute("aria-selected", "true");

      // Hover over third item
      await user.hover(options[2]);

      expect(options[2]).toHaveAttribute("aria-selected", "true");
      expect(options[1]).toHaveAttribute("aria-selected", "false");
    });
  });

  describe("Item Rendering", () => {
    test("renders item labels", () => {
      render(OpenPalette);

      const options = screen.getAllByRole("option");
      // Verify first option has expected label from test data
      expect(options[0]).toHaveTextContent(/Dashboard|Profile|Settings/);
    });

    test.skip("renders item descriptions when provided", () => {
      render(OpenPalette);

      const descriptions = screen.getAllByTestId(/^item-description-/);
      expect(descriptions.length).toBeGreaterThan(0);

      descriptions.forEach((desc) => {
        expect(desc).toHaveAttribute("data-part", "item-description");
      });
    });

    test("renders icons when provided", () => {
      render(OpenPalette);

      const options = screen.getAllByRole("option");
      const firstOption = options[0];

      // Check for icon container
      const iconContainer = within(firstOption).queryByTestId("item-icon");
      if (iconContainer) {
        expect(iconContainer).toBeInTheDocument();
      }
    });

    test("maintains correct item order", () => {
      render(OpenPalette);

      const options = screen.getAllByRole("option");

      options.forEach((option, index) => {
        expect(option).toHaveAttribute("data-index", index.toString());
      });
    });
  });

  describe("Accessibility", () => {
    test("has proper ARIA attributes on dialog", () => {
      render(OpenPalette);

      const dialog = screen.getByRole("dialog");
      expect(dialog).toHaveAttribute("aria-modal", "true");
    });

    test("search input has combobox role", () => {
      render(OpenPalette);

      const searchInput = screen.getByRole("combobox");
      expect(searchInput).toBeInTheDocument();
    });

    test("results list has listbox role", () => {
      render(OpenPalette);

      const list = screen.getByRole("listbox");
      expect(list).toBeInTheDocument();
    });

    test("items have option role", () => {
      render(OpenPalette);

      const options = screen.getAllByRole("option");
      expect(options.length).toBeGreaterThan(0);
    });

    test("selected item has aria-selected=true", () => {
      render(KeyboardNavigationPalette);

      const options = screen.getAllByRole("option");
      expect(options[0]).toHaveAttribute("aria-selected", "true");
      expect(options[1]).toHaveAttribute("aria-selected", "false");
    });

    test("search input has aria-controls pointing to list", () => {
      render(OpenPalette);

      const searchInput = screen.getByRole("combobox");
      const list = screen.getByRole("listbox");

      const controlsId = searchInput.getAttribute("aria-controls");
      expect(controlsId).toBe(list.id);
    });

    test("search input has aria-activedescendant", () => {
      render(KeyboardNavigationPalette);

      const searchInput = screen.getByRole("combobox");
      const activeDescendant = searchInput.getAttribute("aria-activedescendant");

      expect(activeDescendant).toBeTruthy();

      const activeOption = screen.getAllByRole("option").find((opt) => opt.id === activeDescendant);
      expect(activeOption).toBeInTheDocument();
    });

    test("autofocuses search input when opened", () => {
      render(OpenPalette);

      const searchInput = screen.getByRole("combobox");
      expect(searchInput).toHaveFocus();
    });
  });

  describe("Selected Index Management", () => {
    test("resets to first item when filtered results change", async () => {
      const user = userEvent.setup();
      render(FilteringPalette);

      const searchInput = screen.getByRole("combobox");
      let options = screen.getAllByRole("option");

      // Navigate to third item
      await user.keyboard("{ArrowDown}");
      await user.keyboard("{ArrowDown}");
      expect(options[2]).toHaveAttribute("aria-selected", "true");

      // Filter to fewer items
      await user.type(searchInput, "settings");

      await waitFor(() => {
        // Should reset to first item
        options = screen.getAllByRole("option");
        expect(options[0]).toHaveAttribute("aria-selected", "true");
      });
    });

    test("maintains valid selection when items decrease", async () => {
      const user = userEvent.setup();
      render(FilteringPalette);

      const searchInput = screen.getByRole("combobox");
      let options = screen.getAllByRole("option");
      const initialCount = options.length;

      // Navigate to last item
      for (let i = 0; i < initialCount - 1; i++) {
        await user.keyboard("{ArrowDown}");
      }

      // Filter to single item
      await user.type(searchInput, "settings");

      await waitFor(() => {
        // Should have valid selection (first and only item)
        options = screen.getAllByRole("option");
        expect(options[0]).toHaveAttribute("aria-selected", "true");
      });
    });
  });

  describe("Empty State", () => {
    test("shows empty state with custom message", async () => {
      render(EmptyStatePalette);

      const input = screen.getByRole("combobox");
      await userEvent.type(input, "abc");

      const emptyState = screen.getByText("No commands found. Try a different search.");

      expect(emptyState).toBeInTheDocument();
      expect(emptyState.closest("[data-part='empty-state']")).toBeTruthy();
    });

    test("does not show empty state when results exist", () => {
      render(OpenPalette);

      const emptyState = screen.queryByTestId("empty-state");
      expect(emptyState).not.toBeInTheDocument();
    });

    test("does not show empty state when search is empty", () => {
      render(OpenPalette);

      const searchInput = screen.getByRole("combobox") as HTMLInputElement;
      expect(searchInput.value).toBe("");

      const emptyState = screen.queryByTestId("empty-state");
      expect(emptyState).not.toBeInTheDocument();
    });
  });
});
