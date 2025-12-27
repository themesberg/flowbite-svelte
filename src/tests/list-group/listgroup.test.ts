import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import { userEvent } from "@testing-library/user-event";

import BasicListgroup from "./basic-listgroup.test.svelte";
import ActiveListgroup from "./active-listgroup.test.svelte";
import HorizontalListgroup from "./horizontal-listgroup.test.svelte";
import RoundedListgroup from "./rounded-listgroup.test.svelte";
import BorderListgroup from "./border-listgroup.test.svelte";
import LinkListgroup from "./link-listgroup.test.svelte";
import DisabledListgroup from "./disabled-listgroup.test.svelte";
import CustomListgroup from "./custom-listgroup.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Listgroup - Basic", () => {
  test("renders list group", () => {
    render(BasicListgroup);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });

  test("renders as ul element by default", () => {
    render(BasicListgroup);
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
    expect(list.tagName).toBe("UL");
  });

  test("list items are li elements", () => {
    render(BasicListgroup);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(3);
  });
});

describe("Listgroup - Active", () => {
  test("renders as div when active is true", () => {
    render(ActiveListgroup);
    const container = screen.getByTestId("active-listgroup");
    expect(container.tagName).toBe("DIV");
  });

  test("active items render as buttons", () => {
    render(ActiveListgroup);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThan(0);
  });

  test("active buttons are clickable", async () => {
    const user = userEvent.setup();
    render(ActiveListgroup);
    const button = screen.getByText("Clickable Item");
    await user.click(button);
    expect(button).toBeInTheDocument();
  });
});

describe("Listgroup - Horizontal", () => {
  test("applies horizontal class", () => {
    render(HorizontalListgroup);
    const list = screen.getByRole("list");
    expect(list).toHaveClass("flex-row");
  });
});

describe("Listgroup - Rounded", () => {
  test("applies rounded class", () => {
    render(RoundedListgroup);
    const list = screen.getByRole("list");
    expect(list).toHaveClass("rounded-lg");
  });
});

describe("Listgroup - Border", () => {
  test("applies border class", () => {
    render(BorderListgroup);
    const list = screen.getByRole("list");
    expect(list).toHaveClass("border");
  });
});

describe("Listgroup - Links", () => {
  test("renders items as links", () => {
    render(LinkListgroup);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);
  });

  test("links have correct href attributes", () => {
    render(LinkListgroup);
    const link1 = screen.getByText("Link 1").closest("a");
    expect(link1).not.toBeNull();
    expect(link1).toHaveAttribute("href", "/link1");
  });
});

describe("Listgroup - Disabled", () => {
  test("renders disabled item", () => {
    render(DisabledListgroup);
    const disabledButton = screen.getByText("Disabled Item");
    expect(disabledButton).toBeDisabled();
  });

  test("disabled item has correct styling", () => {
    render(DisabledListgroup);
    const disabledButton = screen.getByText("Disabled Item");
    expect(disabledButton).toHaveClass("cursor-not-allowed");
    expect(disabledButton).toHaveClass("opacity-50");
  });
});

describe("Listgroup - Custom", () => {
  test("applies custom class", () => {
    render(CustomListgroup);
    const list = screen.getByRole("list");
    expect(list).toHaveClass("custom-list-class");
  });

  test("renders custom snippet content", () => {
    render(CustomListgroup);
    expect(screen.getByTestId("custom-item-1")).toBeInTheDocument();
  });
});
