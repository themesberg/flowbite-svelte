import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import DropdownSidebarTest from "./dropdown-sidebar.test.svelte";

afterEach(() => {
  cleanup();
});

describe("SidebarDropdownWrapper Component", () => {
  describe("Basic Functionality", () => {
    test("renders dropdown button with label", () => {
      render(DropdownSidebarTest);
      const button = screen.getByRole("button", { name: /products/i });

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("Products");
    });

    test("renders dropdown items", () => {
      render(DropdownSidebarTest);

      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.getByText("Product 2")).toBeInTheDocument();
    });

    test("dropdown button has proper type", () => {
      render(DropdownSidebarTest);
      const button = screen.getByRole("button", { name: /products/i });

      expect(button).toHaveAttribute("type", "button");
    });
  });

  describe("Arrow Icons", () => {
    test("contains arrow SVG icon", () => {
      const { container } = render(DropdownSidebarTest);
      const svgs = container.querySelectorAll("svg");

      expect(svgs.length).toBeGreaterThan(0);
    });

    test("arrow icon has proper attributes", () => {
      const { container } = render(DropdownSidebarTest);
      const svg = container.querySelector("svg");

      expect(svg).toHaveAttribute("aria-hidden", "true");
    });
  });

  describe("Interaction", () => {
    test("dropdown button is clickable", async () => {
      const user = userEvent.setup();
      render(DropdownSidebarTest);
      const button = screen.getByRole("button", { name: /products/i });

      await user.click(button);
      expect(button).toBeInTheDocument();
    });

    test("dropdown items are in a list", () => {
      const { container } = render(DropdownSidebarTest);
      const lists = container.querySelectorAll("ul");

      expect(lists.length).toBeGreaterThan(0);
    });
  });

  describe("Styling", () => {
    test("dropdown button has proper styling", () => {
      render(DropdownSidebarTest);
      const button = screen.getByRole("button", { name: /products/i });

      expect(button).toHaveClass("flex", "items-center", "w-full");
    });

    test("dropdown wrapper is in list item", () => {
      render(DropdownSidebarTest);
      const button = screen.getByRole("button", { name: /products/i });
      const li = button.closest("li");

      expect(li).toBeInTheDocument();
    });
  });

  describe("Nested Items", () => {
    test("dropdown contains nested sidebar items", () => {
      render(DropdownSidebarTest);
      const product1Link = screen.getByRole("link", { name: /product 1/i });
      const product2Link = screen.getByRole("link", { name: /product 2/i });

      expect(product1Link).toHaveAttribute("href", "/products/1");
      expect(product2Link).toHaveAttribute("href", "/products/2");
    });
  });
});
