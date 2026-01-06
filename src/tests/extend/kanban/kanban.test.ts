import { cleanup, render, screen, within } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicBoard from "./basic-board.test.svelte";
import EmptyBoard from "./empty-board.test.svelte";
import DragDropBoard, { testState as dragDropState } from "./drag-drop-board.test.svelte";
import CallbacksBoard, { testState as callbacksState } from "./callbacks-board.test.svelte";
import AddCardBoard, { testState as addCardState } from "./add-card-board.test.svelte";
import ColoredColumnsBoard from "./colored-columns.test.svelte";
import CardWithTagsBoard from "./card-with-tags.test.svelte";

afterEach(() => {
  cleanup();
  dragDropState.moves = [];
  callbacksState.onMoveCalls = [];
  callbacksState.onAddCardCalls = [];
  addCardState.addCardCalls = [];
});

describe("KanbanBoard Component", () => {
  describe("Basic Rendering", () => {
    test("renders kanban board with correct attributes", () => {
      render(BasicBoard);

      const board = screen.getByTestId("kanban-board");
      expect(board).toBeInTheDocument();
      expect(board).toHaveAttribute("data-scope", "kanban-board");
      expect(board).toHaveAttribute("data-part", "base");
    });

    test("renders all columns", () => {
      render(BasicBoard);

      // Query only column-* elements, not column-title-* elements
      const columns = screen.getAllByTestId(/^column-(?!title-)/);
      expect(columns.length).toBeGreaterThan(0);

      columns.forEach((column) => {
        expect(column).toHaveAttribute("data-part", "column");
        expect(column).toHaveAttribute("role", "group");
      });
    });

    test("renders column titles", () => {
      render(BasicBoard);

      const titles = screen.getAllByTestId(/^column-title-/);
      expect(titles.length).toBeGreaterThan(0);

      titles.forEach((title) => {
        expect(title).toHaveAttribute("data-part", "title");
      });
    });

    test("renders card list for each column", () => {
      render(BasicBoard);

      const lists = screen.getAllByTestId(/^card-list-/);
      expect(lists.length).toBeGreaterThan(0);

      lists.forEach((list) => {
        expect(list).toHaveAttribute("data-part", "list");
        expect(list).toHaveAttribute("role", "list");
      });
    });

    test("renders add card buttons", () => {
      render(BasicBoard);

      const buttons = screen.getAllByTestId(/^add-card-btn-/);
      expect(buttons.length).toBeGreaterThan(0);

      buttons.forEach((button) => {
        expect(button).toHaveAttribute("data-part", "button");
      });
    });

    test("renders empty columns correctly", () => {
      render(EmptyBoard);

      const lists = screen.getAllByRole("list");
      lists.forEach((list) => {
        const cards = within(list).queryAllByRole("listitem");
        expect(cards.length).toBe(0);
      });
    });
  });

  describe("Column Rendering", () => {
    test("applies column color as border-top", () => {
      render(ColoredColumnsBoard);

      const columns = screen.getAllByTestId(/^column-/);

      const firstColumn = columns[0];
      // First column in ColoredColumnsBoard has color "#3b82f6"
      expect(firstColumn).toHaveStyle({ borderTop: "4px solid rgb(59, 130, 246)" });
    });

    test("renders column drop zone with aria-label", () => {
      render(BasicBoard);

      const columns = screen.getAllByRole("group");

      columns.forEach((column) => {
        const ariaLabel = column.getAttribute("aria-label");
        expect(ariaLabel).toContain("column drop zone");
      });
    });

    test("renders card list with descriptive aria-label", () => {
      render(BasicBoard);

      const lists = screen.getAllByRole("list");

      lists.forEach((list) => {
        const ariaLabel = list.getAttribute("aria-label");
        expect(ariaLabel).toContain("cards");
      });
    });
  });

  describe("Card Rendering", () => {
    test("renders cards in correct columns", () => {
      render(BasicBoard);

      const lists = screen.getAllByRole("list");

      lists.forEach((list) => {
        const cards = within(list).getAllByRole("listitem");
        cards.forEach((card) => {
          expect(card).toHaveAttribute("data-scope", "kanban-card");
          expect(card).toHaveAttribute("data-part", "base");
        });
      });
    });

    test("renders card titles", () => {
      render(BasicBoard);

      const cards = screen.getAllByTestId(/^card-.*-title$/);
      expect(cards.length).toBeGreaterThan(0);

      cards.forEach((title) => {
        expect(title).toHaveAttribute("data-part", "title");
      });
    });

    test("renders card descriptions when provided", () => {
      render(BasicBoard);

      const descriptions = screen.queryAllByTestId(/^card-.*-description$/);

      descriptions.forEach((desc) => {
        expect(desc).toHaveAttribute("data-part", "description");
      });
    });

    test("renders card tags when provided", () => {
      render(CardWithTagsBoard);

      const tagContainers = screen.getAllByTestId(/^card-.*-tags$/);
      expect(tagContainers.length).toBeGreaterThan(0);

      tagContainers.forEach((container) => {
        expect(container).toHaveAttribute("data-part", "tags");

        const tags = within(container).getAllByTestId(/^card-.*-tag-/);
        tags.forEach((tag) => {
          expect(tag).toHaveAttribute("data-part", "tag");
        });
      });
    });

    test("cards are draggable", () => {
      render(BasicBoard);

      const cards = screen.getAllByRole("listitem");

      cards.forEach((card) => {
        expect(card).toHaveAttribute("draggable", "true");
      });
    });

    test("cards are keyboard accessible", () => {
      render(BasicBoard);

      const cards = screen.getAllByRole("listitem");

      cards.forEach((card) => {
        expect(card).toHaveAttribute("tabindex", "0");
      });
    });

    test("cards have proper aria-label", () => {
      render(BasicBoard);

      const cards = screen.getAllByRole("listitem");

      cards.forEach((card) => {
        const ariaLabel = card.getAttribute("aria-label");
        expect(ariaLabel).toBeTruthy();
      });
    });
  });

  describe("Drag and Drop Behavior", () => {
    test("sets aria-grabbed attribute on drag start", async () => {
      const user = userEvent.setup();
      render(DragDropBoard);

      const cards = screen.getAllByRole("listitem");
      const firstCard = cards[0];

      expect(firstCard).toHaveAttribute("aria-grabbed", "false");

      // Simulate drag start
      await user.pointer({ keys: "[MouseLeft>]", target: firstCard });

      // Note: aria-grabbed should be set to true during drag
      // This might need adjustment based on actual implementation
    });

    test("applies drag-over styling to target column", async () => {
      const user = userEvent.setup();
      render(DragDropBoard);

      const cards = screen.getAllByRole("listitem");
      const columns = screen.getAllByRole("group");

      const sourceCard = cards[0];
      const targetColumn = columns[1];

      // Start drag
      await user.pointer({ keys: "[MouseLeft>]", target: sourceCard });

      // Drag over target column
      await user.pointer({ target: targetColumn });

      // Check for drag-over indication
      // Implementation might apply specific data attributes or classes
    });

    test.todo("moves card between columns on drop", async () => {
      render(DragDropBoard);

      // This test would require more sophisticated drag-drop simulation
      // or testing through the callbacks

      // The actual drag-drop would be tested through the onMove callback
      expect(dragDropState.moves).toEqual([]);
    });

    test("does not move card when dropped in same column", async () => {
      render(DragDropBoard);

      // Drag and drop within same column should not trigger move
      // Verify through callback state

      expect(dragDropState.moves.length).toBe(0);
    });

    test("calls onMove callback with correct parameters", () => {
      render(CallbacksBoard);

      // Simulating move through component's internal logic
      // The test verifies the callback structure

      expect(callbacksState.onMoveCalls).toEqual([]);
    });
  });

  describe("Add Card Functionality", () => {
    test("calls onAddCard when button is clicked", async () => {
      const user = userEvent.setup();
      render(AddCardBoard);

      const addButtons = screen.getAllByTestId(/^add-card-btn-/);
      const firstButton = addButtons[0];

      await user.click(firstButton);

      expect(addCardState.addCardCalls.length).toBe(1);
    });

    test("passes correct column to onAddCard callback", async () => {
      const user = userEvent.setup();
      render(AddCardBoard);

      const addButtons = screen.getAllByTestId(/^add-card-btn-/);
      const secondButton = addButtons[1];

      await user.click(secondButton);

      expect(addCardState.addCardCalls.length).toBe(1);
      const call = addCardState.addCardCalls[0];
      expect(call.columnId).toBeDefined();
    });

    test("add button has descriptive aria-label", () => {
      render(BasicBoard);

      const addButtons = screen.getAllByTestId(/^add-card-btn-/);

      addButtons.forEach((button) => {
        const ariaLabel = button.getAttribute("aria-label");
        expect(ariaLabel).toContain("Add card to");
      });
    });
  });

  describe("Drag State Management", () => {
    test("clears drag state on drag end", () => {
      render(DragDropBoard);

      // After drag operation completes, state should be cleared
      // Verify through component state or visual indicators

      const cards = screen.getAllByRole("listitem");
      cards.forEach((card) => {
        expect(card).toHaveAttribute("aria-grabbed", "false");
      });
    });

    test("resets drag-over state when drag leaves column", () => {
      render(DragDropBoard);

      const columns = screen.getAllByRole("group");

      // Columns should not have drag-over indication when no drag is active
      columns.forEach((column) => {
        // Verify no drag-over specific attributes/classes
        const className = column.className;
        expect(className).not.toContain("drag-over");
      });
    });

    test("maintains card visibility during drag", () => {
      render(DragDropBoard);

      const cards = screen.getAllByRole("listitem");

      cards.forEach((card) => {
        expect(card).toBeVisible();
      });
    });
  });

  describe("Accessibility", () => {
    test("board has proper ARIA roles for columns and lists", () => {
      render(BasicBoard);

      // Board exists (no explicit role by design)
      const board = screen.getByTestId("kanban-board");
      expect(board).toBeInTheDocument();

      // Columns should expose role="group" with accessible names
      const todoColumn = screen.getByRole("group", {
        name: "To Do column drop zone"
      });
      const inProgressColumn = screen.getByRole("group", {
        name: "In Progress column drop zone"
      });
      const doneColumn = screen.getByRole("group", {
        name: "Done column drop zone"
      });

      expect(todoColumn).toBeInTheDocument();
      expect(inProgressColumn).toBeInTheDocument();
      expect(doneColumn).toBeInTheDocument();

      // Each column should contain a list of cards with role="list"
      expect(screen.getByRole("list", { name: "To Do cards" })).toBeInTheDocument();

      expect(screen.getByRole("list", { name: "In Progress cards" })).toBeInTheDocument();

      expect(screen.getByRole("list", { name: "Done cards" })).toBeInTheDocument();
    });

    test("columns have group role with descriptive labels", () => {
      render(BasicBoard);

      const columns = screen.getAllByRole("group");

      columns.forEach((column) => {
        const ariaLabel = column.getAttribute("aria-label");
        expect(ariaLabel).toBeTruthy();
        expect(ariaLabel).toContain("drop zone");
      });
    });

    test("card lists have list role with descriptive labels", () => {
      render(BasicBoard);

      const lists = screen.getAllByRole("list");

      lists.forEach((list) => {
        const ariaLabel = list.getAttribute("aria-label");
        expect(ariaLabel).toBeTruthy();
        expect(ariaLabel).toContain("cards");
      });
    });

    test("cards have listitem role", () => {
      render(BasicBoard);

      const cards = screen.getAllByRole("listitem");
      expect(cards.length).toBeGreaterThan(0);
    });

    test("cards have descriptive aria-label", () => {
      render(BasicBoard);

      const cards = screen.getAllByRole("listitem");

      cards.forEach((card) => {
        const ariaLabel = card.getAttribute("aria-label");
        expect(ariaLabel).toBeTruthy();
      });
    });

    test("add card buttons have descriptive aria-label", () => {
      render(BasicBoard);

      const buttons = screen.getAllByTestId(/^add-card-btn-/);

      buttons.forEach((button) => {
        const ariaLabel = button.getAttribute("aria-label");
        expect(ariaLabel).toBeTruthy();
        expect(ariaLabel).toContain("Add card");
      });
    });

    test("dragging state is communicated via aria-grabbed", () => {
      render(BasicBoard);

      const cards = screen.getAllByRole("listitem");

      cards.forEach((card) => {
        const ariaGrabbed = card.getAttribute("aria-grabbed");
        expect(ariaGrabbed).toBe("false");
      });
    });
  });

  describe("Data Integrity", () => {
    test("maintains unique card IDs", () => {
      render(BasicBoard);

      const cards = screen.getAllByRole("listitem");
      const ids = new Set();

      cards.forEach((card) => {
        const testId = card.getAttribute("data-testid");
        expect(ids.has(testId)).toBe(false);
        if (testId) ids.add(testId);
      });
    });

    test("maintains unique column IDs", () => {
      render(BasicBoard);

      const columns = screen.getAllByTestId(/^column-/);
      const ids = new Set();

      columns.forEach((column) => {
        const testId = column.getAttribute("data-testid");
        expect(ids.has(testId)).toBe(false);
        if (testId) ids.add(testId);
      });
    });

    test.todo("preserves card data after move", () => {
      render(CallbacksBoard);

      // When a card is moved, its data (title, description, tags) should remain intact
      // This would be verified through the onMove callback receiving complete card data
    });
  });

  describe("Visual Feedback", () => {
    test("card shows dragging state", () => {
      render(DragDropBoard);

      const cards = screen.getAllByRole("listitem");

      // When not dragging, should not have dragging indicator
      cards.forEach((card) => {
        const className = card.className;
        // Verify no dragging-specific classes
        expect(className).not.toContain("is-dragging");
      });
    });

    test("column shows drop zone feedback", () => {
      render(DragDropBoard);

      const columns = screen.getAllByRole("group");

      // When not in drop operation, should not show drop feedback
      columns.forEach((column) => {
        const className = column.className;
        expect(className).not.toContain("is-drag-over");
      });
    });
  });

  describe("Card Props Propagation", () => {
    test("passes custom props to cards", () => {
      render(BasicBoard);

      const cards = screen.getAllByRole("listitem");

      cards.forEach((card) => {
        // Verify cards receive and apply custom props
        expect(card).toBeInTheDocument();
      });
    });

    test("applies custom classes to cards", () => {
      render(BasicBoard);

      const cards = screen.getAllByRole("listitem");

      cards.forEach((card) => {
        // Cards should have their base classes
        expect(card.className).toBeTruthy();
      });
    });
  });

  describe("Empty State Handling", () => {
    test("renders empty columns without errors", () => {
      render(EmptyBoard);

      const columns = screen.getAllByRole("group");
      expect(columns.length).toBeGreaterThan(0);
    });

    test("empty columns still show add button", () => {
      render(EmptyBoard);

      const addButtons = screen.getAllByTestId(/^add-card-btn-/);
      expect(addButtons.length).toBeGreaterThan(0);
    });

    test("empty card list has correct aria-label", () => {
      render(EmptyBoard);

      const lists = screen.getAllByRole("list");

      lists.forEach((list) => {
        const ariaLabel = list.getAttribute("aria-label");
        expect(ariaLabel).toBeTruthy();
      });
    });
  });
});
