import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicSidebarCtaTest from "./basic-sidebar-cta.test.svelte";

afterEach(() => {
  cleanup();
});

describe("SidebarCta Component", () => {
  describe("Basic Functionality", () => {
    test("renders CTA with label", () => {
      render(BasicSidebarCtaTest);

      expect(screen.getByText("Beta")).toBeInTheDocument();
    });

    test("renders CTA content", () => {
      render(BasicSidebarCtaTest);

      expect(screen.getByText(/Preview our new dashboard design/i)).toBeInTheDocument();
    });

    test("has alert role", () => {
      const { container } = render(BasicSidebarCtaTest);
      const cta = container.querySelector('[role="alert"]');

      expect(cta).toBeInTheDocument();
      expect(cta).toHaveAttribute("id", "dropdown-cta");
    });
  });

  describe("Structure", () => {
    test("applies base styling classes", () => {
      const { container } = render(BasicSidebarCtaTest);
      const cta = container.querySelector('[role="alert"]');

      expect(cta).toHaveClass("p-4", "mt-6", "rounded-lg");
    });

    test("label has badge styling", () => {
      render(BasicSidebarCtaTest);
      const label = screen.getByText("Beta");

      expect(label).toHaveClass("text-sm", "font-semibold");
    });
  });

  describe("Content Rendering", () => {
    test("renders children content", () => {
      render(BasicSidebarCtaTest);
      const content = screen.getByText(/Preview our new dashboard design/i);

      expect(content).toBeInTheDocument();
      expect(content.tagName).toBe("P");
    });
  });
});
