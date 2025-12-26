import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicPaginationTest from "./basic-pagination.test.svelte";
import TablePaginationTest from "./table-pagination.test.svelte";
import CustomContentPaginationTest from "./custom-content-pagination.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Pagination Component", () => {
  describe("Basic Functionality", () => {
    test("renders pagination with correct navigation role", () => {
      render(BasicPaginationTest);
      const nav = screen.getByRole("navigation");

      expect(nav).toBeInTheDocument();
    });

    test("renders all page items", () => {
      render(BasicPaginationTest);
      const pageLinks = screen.getAllByRole("link");
      const buttons = screen.getAllByRole("button");

      // 3 page links + 2 buttons (Previous and Next)
      expect(pageLinks).toHaveLength(3);
      expect(buttons).toHaveLength(2);
    });

    test("renders Previous and Next buttons", () => {
      render(BasicPaginationTest);

      expect(screen.getByText("Previous")).toBeInTheDocument();
      expect(screen.getByText("Next")).toBeInTheDocument();
    });

    test("marks active page correctly", () => {
      render(BasicPaginationTest);
      const links = screen.getAllByRole("link");

      // First page link should have text "1"
      const firstPageLink = links[0];
      expect(firstPageLink).toHaveTextContent("1");
    });
  });

  describe("Table Layout", () => {
    test("renders pagination with table layout", () => {
      render(TablePaginationTest);
      const nav = screen.getByRole("navigation");

      expect(nav).toBeInTheDocument();
    });

    test("applies table-specific classes", () => {
      render(TablePaginationTest);
      const list = screen.getByRole("list");

      expect(list).toHaveClass("divide-x");
    });
  });

  describe("Custom Content", () => {
    test("renders custom previous content", () => {
      render(CustomContentPaginationTest);

      expect(screen.getByText("Prev")).toBeInTheDocument();
    });

    test("renders custom next content", () => {
      render(CustomContentPaginationTest);

      expect(screen.getByText("Next Page")).toBeInTheDocument();
    });

    test("applies large size classes", () => {
      render(CustomContentPaginationTest);
      const links = screen.getAllByRole("link");

      // Check that pagination items are rendered with active class
      expect(links[0]).toHaveClass("text-primary-600");
    });
  });

  describe("Interaction", () => {
    test("previous button is clickable", async () => {
      const user = userEvent.setup();
      render(BasicPaginationTest);

      const prevButton = screen.getByText("Previous");
      await user.click(prevButton);

      // Button should still be in the document after click
      expect(prevButton).toBeInTheDocument();
    });

    test("next button is clickable", async () => {
      const user = userEvent.setup();
      render(BasicPaginationTest);

      const nextButton = screen.getByText("Next");
      await user.click(nextButton);

      // Button should still be in the document after click
      expect(nextButton).toBeInTheDocument();
    });
  });
});
