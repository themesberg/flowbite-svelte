import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicPaginationNavTest from "./basic-pagination-nav.test.svelte";
import TablePaginationNavTest from "./table-pagination-nav.test.svelte";
import CustomPaginationNavTest from "./custom-pagination-nav.test.svelte";

afterEach(() => {
  cleanup();
});

describe("PaginationNav Component", () => {
  describe("Basic Functionality", () => {
    test("renders pagination navigation", () => {
      render(BasicPaginationNavTest);
      const nav = screen.getByRole("navigation");

      expect(nav).toBeInTheDocument();
    });

    test("renders Previous and Next buttons", () => {
      render(BasicPaginationNavTest);

      expect(screen.getByText("Previous")).toBeInTheDocument();
      expect(screen.getByText("Next")).toBeInTheDocument();
    });

    test("renders page number buttons", () => {
      render(BasicPaginationNavTest);
      const buttons = screen.getAllByRole("button");

      // Should have Previous, page numbers (up to visiblePages), and Next
      expect(buttons.length).toBeGreaterThan(2);
    });

    test("displays current page correctly", () => {
      render(BasicPaginationNavTest);

      expect(screen.getByTestId("current-page")).toHaveTextContent("1");
    });
  });

  describe("Table Layout", () => {
    test("renders with table layout", () => {
      render(TablePaginationNavTest);
      const nav = screen.getByRole("navigation");

      expect(nav).toBeInTheDocument();
    });

    test("displays page count information in table layout", () => {
      render(TablePaginationNavTest);

      expect(screen.getByText(/Showing/i)).toBeInTheDocument();
      expect(screen.getByText(/Entries/i)).toBeInTheDocument();
    });

    test("shows current page and total pages", () => {
      render(TablePaginationNavTest);

      expect(screen.getByText("1")).toBeInTheDocument();
      expect(screen.getByText("10")).toBeInTheDocument();
    });
  });

  describe("Custom Content", () => {
    test("renders custom previous content", () => {
      render(CustomPaginationNavTest);

      expect(screen.getByText("←")).toBeInTheDocument();
    });

    test("renders custom next content", () => {
      render(CustomPaginationNavTest);

      expect(screen.getByText("→")).toBeInTheDocument();
    });
  });

  describe("Navigation", () => {
    test("disables Previous button on first page", () => {
      render(BasicPaginationNavTest);
      const prevButton = screen.getByText("Previous");

      expect(prevButton).toBeDisabled();
    });

    test("Next button is clickable and changes page", async () => {
      const user = userEvent.setup();
      render(BasicPaginationNavTest);

      const nextButton = screen.getByText("Next");
      await user.click(nextButton);

      // Current page should be updated
      expect(screen.getByTestId("current-page")).toHaveTextContent("2");
    });

    test("page number buttons are clickable", async () => {
      const user = userEvent.setup();
      render(BasicPaginationNavTest);

      const pageButton = screen.getByText("3");
      await user.click(pageButton);

      // Current page should be updated to 3
      expect(screen.getByTestId("current-page")).toHaveTextContent("3");
    });

    test("Previous button becomes enabled after navigating", async () => {
      const user = userEvent.setup();
      render(BasicPaginationNavTest);

      const nextButton = screen.getByText("Next");
      await user.click(nextButton);

      const prevButton = screen.getByText("Previous");
      expect(prevButton).not.toBeDisabled();
    });
  });

  describe("Boundary Conditions", () => {
    test("stays on first page when clicking Previous on page 1", async () => {
      render(BasicPaginationNavTest);

      const prevButton = screen.getByText("Previous");
      expect(prevButton).toBeDisabled();

      expect(screen.getByTestId("current-page")).toHaveTextContent("1");
    });
  });
});
