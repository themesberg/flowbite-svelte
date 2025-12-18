import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicAccordionTest from "./basic-accordion.test.svelte";
import FlushAccordionTest from "./flush-accordion.test.svelte";
import MultipleAccordionTest from "./multiple-accordion.test.svelte";
import OpenAccordionTest from "./open-accordion.test.svelte";
import ClassesAccordionTest from "./classes-accordion.test.svelte";
import NoTransitionAccordionTest from "./no-transition-accordion.test.svelte";
import CustomArrowsAccordionTest from "./custom-arrows-accordion.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Accordion - Basic Functionality", () => {
  test("renders accordion with items", () => {
    render(BasicAccordionTest);
    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveTextContent("Header 1");
    expect(buttons[1]).toHaveTextContent("Header 2");
  });

  test("accordion items are collapsed by default", () => {
    render(BasicAccordionTest);
    const buttons = screen.getAllByRole("button");

    expect(buttons[0]).toHaveAttribute("aria-expanded", "false");
    expect(buttons[1]).toHaveAttribute("aria-expanded", "false");
  });

  test("clicking accordion item toggles content", async () => {
    const user = userEvent.setup();
    render(BasicAccordionTest);
    const buttons = screen.getAllByRole("button");

    // Initially closed
    expect(buttons[0]).toHaveAttribute("aria-expanded", "false");

    // Click to open
    await user.click(buttons[0]);
    expect(buttons[0]).toHaveAttribute("aria-expanded", "true");

    // Click to close
    await user.click(buttons[0]);
    expect(buttons[0]).toHaveAttribute("aria-expanded", "false");
  });

  test("opening one item closes others (single mode)", async () => {
    const user = userEvent.setup();
    render(BasicAccordionTest);
    const buttons = screen.getAllByRole("button");

    // Open first item
    await user.click(buttons[0]);
    expect(buttons[0]).toHaveAttribute("aria-expanded", "true");
    expect(buttons[1]).toHaveAttribute("aria-expanded", "false");

    // Open second item - first should close
    await user.click(buttons[1]);
    expect(buttons[0]).toHaveAttribute("aria-expanded", "false");
    expect(buttons[1]).toHaveAttribute("aria-expanded", "true");
  });
});

describe("Accordion - Open State", () => {
  test("renders with item open by default", () => {
    render(OpenAccordionTest);
    const buttons = screen.getAllByRole("button");

    expect(buttons[0]).toHaveAttribute("aria-expanded", "true");
    expect(buttons[1]).toHaveAttribute("aria-expanded", "false");
  });

  test("open item displays content", () => {
    render(OpenAccordionTest);

    expect(screen.getByText("Open Content")).toBeInTheDocument();
  });
});

describe("Accordion - Multiple Mode", () => {
  test("multiple items can be open simultaneously", async () => {
    const user = userEvent.setup();
    render(MultipleAccordionTest);
    const buttons = screen.getAllByRole("button");

    // Both items start open
    expect(buttons[0]).toHaveAttribute("aria-expanded", "true");
    expect(buttons[1]).toHaveAttribute("aria-expanded", "true");

    // Clicking one doesn't close the other
    await user.click(buttons[0]);
    expect(buttons[0]).toHaveAttribute("aria-expanded", "false");
    expect(buttons[1]).toHaveAttribute("aria-expanded", "true");
  });

  test("can toggle multiple items independently", async () => {
    const user = userEvent.setup();
    render(MultipleAccordionTest);
    const buttons = screen.getAllByRole("button");

    // Close both
    await user.click(buttons[0]);
    await user.click(buttons[1]);
    expect(buttons[0]).toHaveAttribute("aria-expanded", "false");
    expect(buttons[1]).toHaveAttribute("aria-expanded", "false");

    // Open both again
    await user.click(buttons[0]);
    await user.click(buttons[1]);
    expect(buttons[0]).toHaveAttribute("aria-expanded", "true");
    expect(buttons[1]).toHaveAttribute("aria-expanded", "true");
  });
});

describe("Accordion - Flush Variant", () => {
  test("renders flush accordion", () => {
    render(FlushAccordionTest);
    const accordion = screen.getByTestId("accordion-flush");

    expect(accordion).toBeInTheDocument();
  });

  test("flush accordion has correct styling", () => {
    render(FlushAccordionTest);
    const accordion = screen.getByTestId("accordion-flush");

    // Flush should not have shadow or rounded borders
    expect(accordion).toHaveClass("border-0");
  });
});

describe("Accordion - Custom Classes", () => {
  test("applies custom classes from Accordion", () => {
    render(ClassesAccordionTest);
    const button = screen.getByRole("button");

    // Open state should have active class
    expect(button).toHaveClass("bg-blue-100");
  });

  test("custom classes affect visual state", async () => {
    const user = userEvent.setup();
    render(ClassesAccordionTest);
    const button = screen.getByRole("button");

    // Initially open with active class
    expect(button).toHaveClass("bg-blue-100");

    // Close it to get inactive class
    await user.click(button);
    expect(button).toHaveClass("bg-gray-50");
  });
});

describe("Accordion - Transitions", () => {
  test("renders without transition when transitionType is none", () => {
    render(NoTransitionAccordionTest);
    const accordion = screen.getByTestId("no-transition-accordion");

    expect(accordion).toBeInTheDocument();
  });

  test("content is immediately visible without transition", async () => {
    const user = userEvent.setup();
    render(NoTransitionAccordionTest);
    const button = screen.getByRole("button");

    // Open
    await user.click(button);

    // Content should be immediately visible without animation delay
    const content = screen.getByText("Content without transition");
    expect(content).toBeInTheDocument();
  });
});

describe("Accordion - Custom Arrows", () => {
  test("renders custom arrow icons", () => {
    render(CustomArrowsAccordionTest);

    // Should show down arrow when closed
    expect(screen.getByTestId("custom-arrow-down")).toBeInTheDocument();
  });

  test("toggles between custom arrow icons", async () => {
    const user = userEvent.setup();
    render(CustomArrowsAccordionTest);
    const button = screen.getByRole("button");

    // Initially closed - down arrow
    expect(screen.getByTestId("custom-arrow-down")).toBeInTheDocument();

    // Open - up arrow
    await user.click(button);
    expect(screen.getByTestId("custom-arrow-up")).toBeInTheDocument();
  });
});

describe("Accordion - Accessibility", () => {
  test("all accordion items have proper button roles", () => {
    render(BasicAccordionTest);
    const buttons = screen.getAllByRole("button");

    buttons.forEach((button) => {
      expect(button).toHaveAttribute("type", "button");
      expect(button).toHaveAttribute("aria-expanded");
    });
  });

  test("keyboard navigation works", async () => {
    const user = userEvent.setup();
    render(BasicAccordionTest);
    const buttons = screen.getAllByRole("button");

    // Tab to first button
    await user.tab();
    expect(buttons[0]).toHaveFocus();

    // Press Enter to toggle
    await user.keyboard("{Enter}");
    expect(buttons[0]).toHaveAttribute("aria-expanded", "true");

    // Press Space to toggle back
    await user.keyboard(" ");
    expect(buttons[0]).toHaveAttribute("aria-expanded", "false");
  });

  test("aria-expanded reflects accordion state", async () => {
    const user = userEvent.setup();
    render(BasicAccordionTest);
    const button = screen.getAllByRole("button")[0];

    // Closed
    expect(button).toHaveAttribute("aria-expanded", "false");

    // Open
    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
  });
});

describe("Accordion - Edge Cases", () => {
  test("handles rapid clicking", async () => {
    const user = userEvent.setup();
    render(BasicAccordionTest);
    const button = screen.getAllByRole("button")[0];

    // Click multiple times rapidly
    await user.click(button);
    await user.click(button);
    await user.click(button);

    // Should end up open (odd number of clicks from closed state)
    expect(button).toHaveAttribute("aria-expanded", "true");
  });

  test("renders accordion container", () => {
    const { container } = render(BasicAccordionTest);
    expect(container.firstChild).toBeInTheDocument();
  });
});
