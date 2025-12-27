import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicPaginationButtonTest from "./basic-pagination-button.test.svelte";
import ActivePaginationButtonTest from "./active-pagination-button.test.svelte";
import LinkPaginationButtonTest from "./link-pagination-button.test.svelte";
import DisabledPaginationButtonTest from "./disabled-pagination-button.test.svelte";

afterEach(() => {
  cleanup();
});

describe("PaginationButton Component", () => {
  describe("Basic Functionality", () => {
    test("renders as button by default", () => {
      render(BasicPaginationButtonTest);
      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("Page 1");
    });

    test("applies default pagination button classes", () => {
      render(BasicPaginationButtonTest);
      const button = screen.getByRole("button");

      expect(button).toHaveClass("text-gray-500");
      expect(button).toHaveClass("hover:bg-gray-100");
    });
  });

  describe("Active State", () => {
    test("renders active pagination button", () => {
      render(ActivePaginationButtonTest);
      const button = screen.getByRole("button");

      expect(button).toHaveTextContent("Active Page");
    });

    test("applies active state classes", () => {
      render(ActivePaginationButtonTest);
      const button = screen.getByRole("button");

      expect(button).toHaveClass("text-primary-600");
      expect(button).toHaveClass("bg-primary-50");
    });
  });

  describe("Link Variant", () => {
    test("renders as link when href is provided", () => {
      render(LinkPaginationButtonTest);
      const link = screen.getByRole("link");

      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent("Link Button");
      expect(link).toHaveAttribute("href", "/page/1");
    });

    test("applies pagination button classes to link", () => {
      render(LinkPaginationButtonTest);
      const link = screen.getByRole("link");

      expect(link).toHaveClass("text-gray-500");
    });
  });

  describe("Disabled State", () => {
    test("renders disabled button", () => {
      render(DisabledPaginationButtonTest);
      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
      expect(button).toHaveTextContent("Disabled Button");
    });

    test("applies disabled state classes", () => {
      render(DisabledPaginationButtonTest);
      const button = screen.getByRole("button");

      expect(button).toHaveClass("cursor-not-allowed");
      expect(button).toHaveClass("opacity-50");
    });

    test("does not trigger onclick when disabled", async () => {
      const user = userEvent.setup();
      render(DisabledPaginationButtonTest);

      const button = screen.getByRole("button");
      await user.click(button);

      // Click indicator should not appear
      expect(screen.queryByTestId("click-indicator")).not.toBeInTheDocument();
    });
  });

  describe("Interaction", () => {
    test("button is clickable when not disabled", async () => {
      const user = userEvent.setup();
      render(BasicPaginationButtonTest);

      const button = screen.getByRole("button");
      await user.click(button);

      expect(button).toBeInTheDocument();
    });
  });
});
