import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicTableTest from "./basic-table.test.svelte";
import TableWithItemsTest from "./table-with-items.test.svelte";
import StripedTableTest from "./striped-table.test.svelte";
import HoverableTableTest from "./hoverable-table.test.svelte";
import BorderlessTableTest from "./borderless-table.test.svelte";
import ShadowTableTest from "./shadow-table.test.svelte";
import ColoredTableTest from "./colored-table.test.svelte";
import ColspanTableTest from "./colspan-table.test.svelte";
import ClickableCellTest, { testState } from "./clickable-cell.test.svelte";
import TableWithSlotsTest from "./table-with-slots.test.svelte";
import TableSearchTest from "./table-search.test.svelte";
import TableSearchStyledTest from "./table-search-styled.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Table Component", () => {
  describe("Basic Rendering", () => {
    test("renders basic table structure", () => {
      render(BasicTableTest);
      const table = screen.getByTestId("basic-table");
      const headerCells = screen.getAllByRole("columnheader");
      const bodyCells = screen.getAllByRole("cell");

      expect(table).toBeInTheDocument();
      expect(headerCells).toHaveLength(2);
      expect(bodyCells).toHaveLength(2);
    });

    test("renders table with items prop", () => {
      render(TableWithItemsTest);
      const table = screen.getByTestId("table-with-items");

      expect(table).toBeInTheDocument();

      // Should have 3 header cells (Name, Category, Price)
      const headerCells = screen.getAllByRole("columnheader");
      expect(headerCells).toHaveLength(3);

      // Should have 3 rows with 3 cells each = 9 cells total
      const bodyCells = screen.getAllByRole("cell");
      expect(bodyCells).toHaveLength(9);
    });

    test("renders table head and body sections", () => {
      render(BasicTableTest);
      const table = screen.getByTestId("basic-table");
      const thead = table.querySelector("thead");
      const tbody = table.querySelector("tbody");

      expect(thead).toBeInTheDocument();
      expect(tbody).toBeInTheDocument();
    });
  });

  describe("Table Props and Variants", () => {
    test("renders striped table", () => {
      render(StripedTableTest);
      const table = screen.getByTestId("striped-table");
      const rows = screen.getAllByRole("row").slice(1); // Skip header row

      expect(table).toBeInTheDocument();
      expect(rows).toHaveLength(3);
    });

    test("renders hoverable table", () => {
      render(HoverableTableTest);
      const table = screen.getByTestId("hoverable-table");
      const row = screen.getByTestId("hoverable-row");

      expect(table).toBeInTheDocument();
      expect(row).toBeInTheDocument();
    });

    test("renders borderless table", () => {
      render(BorderlessTableTest);
      const table = screen.getByTestId("borderless-table");
      const row = screen.getByTestId("borderless-row");

      expect(table).toBeInTheDocument();
      expect(row).toBeInTheDocument();
    });

    test("renders shadow table", () => {
      render(ShadowTableTest);
      const table = screen.getByTestId("shadow-table");

      expect(table).toBeInTheDocument();
    });

    test("renders tables with different colors", () => {
      render(ColoredTableTest);
      const blueTable = screen.getByTestId("colored-table-blue");
      const greenTable = screen.getByTestId("colored-table-green");
      const redTable = screen.getByTestId("colored-table-red");

      expect(blueTable).toBeInTheDocument();
      expect(greenTable).toBeInTheDocument();
      expect(redTable).toBeInTheDocument();
    });
  });

  describe("TableBodyCell Features", () => {
    test("renders cell with colspan", () => {
      render(ColspanTableTest);
      const colspanCell = screen.getByTestId("colspan-cell");
      const colspan2Cell = screen.getByTestId("colspan-cell-2");

      expect(colspanCell).toBeInTheDocument();
      expect(colspanCell).toHaveAttribute("colspan", "3");
      expect(colspan2Cell).toHaveAttribute("colspan", "2");
    });

    test("handles cell click events", async () => {
      const user = userEvent.setup();
      testState.clickCount = 0;
      testState.lastClickedCell = "";

      render(ClickableCellTest);
      const cell1 = screen.getByTestId("clickable-cell-1");
      const cell2 = screen.getByTestId("clickable-cell-2");

      // TableBodyCell wraps content in a button when onclick is provided
      const button1 = cell1.querySelector("button");
      const button2 = cell2.querySelector("button");

      expect(button1).toBeInTheDocument();
      expect(button2).toBeInTheDocument();
      expect(testState.clickCount).toBe(0);

      if (button1) {
        await user.click(button1);
        expect(testState.clickCount).toBe(1);
        expect(testState.lastClickedCell).toBe("cell1");
      }

      if (button2) {
        await user.click(button2);
        expect(testState.clickCount).toBe(2);
        expect(testState.lastClickedCell).toBe("cell2");
      }

      if (button1) {
        await user.click(button1);
        expect(testState.clickCount).toBe(3);
        expect(testState.lastClickedCell).toBe("cell1");
      }
    });
  });

  describe("Table Slots", () => {
    test("renders table with caption slot", () => {
      render(TableWithSlotsTest);
      const caption = screen.getByTestId("table-caption");

      expect(caption).toBeInTheDocument();
      expect(caption.tagName.toLowerCase()).toBe("caption");
    });

    test("renders table with footer slot", () => {
      render(TableWithSlotsTest);
      const footer = screen.getByTestId("table-footer");

      expect(footer).toBeInTheDocument();
      expect(footer.tagName.toLowerCase()).toBe("tfoot");
    });
  });

  describe("TableSearch Component", () => {
    test("renders table search with input", () => {
      render(TableSearchTest);
      const searchWrapper = screen.getByTestId("table-search-wrapper");
      const searchInput = screen.getByRole("textbox");

      expect(searchWrapper).toBeInTheDocument();
      expect(searchInput).toBeInTheDocument();
      expect(searchInput).toHaveAttribute("type", "text");
      expect(searchInput).toHaveAttribute("id", "table-search");
    });

    test("search input accepts user input", async () => {
      const user = userEvent.setup();
      render(TableSearchTest);
      const searchInput = screen.getByRole("textbox") as HTMLInputElement;

      await user.type(searchInput, "Product");
      expect(searchInput.value).toBe("Product");

      await user.clear(searchInput);
      expect(searchInput.value).toBe("");
    });

    test("renders table search with custom placeholder", () => {
      render(TableSearchStyledTest);
      const searchInput = screen.getByRole("textbox");

      expect(searchInput).toHaveAttribute("placeholder", "Find items...");
    });

    test("renders table search with striped and hoverable props", () => {
      render(TableSearchStyledTest);
      const searchWrapper = screen.getByTestId("styled-table-search-wrapper");
      const row = screen.getByTestId("styled-row");

      expect(searchWrapper).toBeInTheDocument();
      expect(row).toBeInTheDocument();
    });

    test("table search includes search icon", () => {
      render(TableSearchTest);
      const searchWrapper = screen.getByTestId("table-search-wrapper");
      // Find the TableSearch root div within the wrapper
      const searchRoot = searchWrapper.querySelector('[data-scope="table-search"]');
      expect(searchRoot).toBeInTheDocument();

      // The icon is inside the search root with data-part="icon"
      const icon = searchRoot?.querySelector('[data-part="icon"]');

      expect(icon).toBeInTheDocument();
      expect(icon?.tagName.toLowerCase()).toBe("svg");
    });
  });

  describe("Data Attributes", () => {
    test("table has correct data attributes", () => {
      render(BasicTableTest);
      const wrapper = screen.getByTestId("basic-table").closest('[data-scope="table"]');

      expect(wrapper).toBeInTheDocument();
      expect(wrapper).toHaveAttribute("data-part", "wrapper");
    });

    test("table search has correct data attributes", () => {
      render(TableSearchTest);
      const searchWrapper = screen.getByTestId("table-search-wrapper");
      const searchRoot = searchWrapper.querySelector('[data-scope="table-search"]');

      expect(searchRoot).toBeInTheDocument();
      expect(searchRoot).toHaveAttribute("data-part", "root");
    });
  });

  describe("Accessibility", () => {
    test("table has proper semantic structure", () => {
      render(BasicTableTest);
      const table = screen.getByRole("table");

      expect(table).toBeInTheDocument();
    });

    test("search input has accessible label", () => {
      render(TableSearchTest);
      const label = document.querySelector('label[for="table-search"]');

      expect(label).toBeInTheDocument();
      expect(label).toHaveClass("sr-only");
    });

    test("table headers are properly marked", () => {
      render(BasicTableTest);
      const headers = screen.getAllByRole("columnheader");

      expect(headers).toHaveLength(2);
      headers.forEach((header) => {
        expect(header.tagName.toLowerCase()).toBe("th");
      });
    });

    test("table cells are properly marked", () => {
      render(BasicTableTest);
      const cells = screen.getAllByRole("cell");

      expect(cells).toHaveLength(2);
      cells.forEach((cell) => {
        expect(cell.tagName.toLowerCase()).toBe("td");
      });
    });
  });
});
