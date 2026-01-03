import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from '@testing-library/user-event'

import SearchBasicTest from "./search-basic.test.svelte";
import SearchValueBindingTest from "./search-value-binding.test.svelte";
import SearchClearableTest from "./search-clearable.test.svelte";
import SearchSizesTest from "./search-sizes.test.svelte";
import SearchCustomPropsTest from "./search-custom-props.test.svelte";
import SearchCallbackTest from "./search-callback.test.svelte";
import SearchWithContentTest from "./search-with-content.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Search - Basic", () => {
  test("renders search component", () => {
    render(SearchBasicTest);
    const input = screen.getByTestId("basic-search");
    expect(input).toBeInTheDocument();
  });

  test("input element has type search", () => {
    render(SearchBasicTest);
    const input = screen.getByTestId("basic-search");
    expect(input.tagName).toBe("INPUT");
    expect(input).toHaveAttribute("type", "search");
  });

  test("input has data-part attribute", () => {
    render(SearchBasicTest);
    const input = screen.getByTestId("basic-search");
    expect(input).toHaveAttribute("data-part", "input");
  });

  test("contains search input element", () => {
    render(SearchBasicTest);
    const input = screen.getByPlaceholderText("Search");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "search");
  });

  test("contains search icon", () => {
    render(SearchBasicTest);
    const input = screen.getByTestId("basic-search");
    const wrapper = input.parentElement;
    const icon = wrapper?.querySelector('[data-part="icon"]');
    expect(icon).toBeInTheDocument();
    expect(icon?.tagName).toBe("svg");
  });

  test("icon wrapper is present", () => {
    render(SearchBasicTest);
    const input = screen.getByTestId("basic-search");
    const wrapper = input.parentElement;
    const iconWrapper = wrapper?.querySelector('[data-part="icon-wrapper"]');
    expect(iconWrapper).toBeInTheDocument();
  });

  test("wrapper has data-scope attribute", () => {
    render(SearchBasicTest);
    const input = screen.getByTestId("basic-search");
    const wrapper = input.parentElement;
    expect(wrapper).toHaveAttribute("data-scope", "search");
    expect(wrapper).toHaveAttribute("data-part", "base");
  });

  test("input has required attribute", () => {
    render(SearchBasicTest);
    const input = screen.getByPlaceholderText("Search");
    expect(input).toHaveAttribute("required");
  });
});

describe("Search - Value Binding", () => {
  test("displays initial bound value", () => {
    render(SearchValueBindingTest);
    const input = screen.getByTestId("bound-search") as HTMLInputElement;
    const display = screen.getByTestId("display-value");

    expect(input.value).toBe("");
    expect(display).toHaveTextContent("empty");
  });

  test("updates display when search value changes", async () => {
    const user = userEvent.setup();
    render(SearchValueBindingTest);

    const input = screen.getByTestId("bound-search") as HTMLInputElement;
    const display = screen.getByTestId("display-value");

    await user.type(input, "Test search");

    expect(input.value).toBe("Test search");
    expect(display).toHaveTextContent("Test search");
  });

  test("search input is editable", async () => {
    const user = userEvent.setup();
    render(SearchValueBindingTest);

    const input = screen.getByTestId("bound-search") as HTMLInputElement;

    await user.type(input, "New search");
    expect(input.value).toBe("New search");

    await user.clear(input);
    expect(input.value).toBe("");
  });
});

describe("Search - Clearable", () => {
  test("renders clearable search with value", () => {
    render(SearchClearableTest);
    const input = screen.getByTestId("clearable-search") as HTMLInputElement;
    expect(input.value).toBe("Test search");
  });

  test("shows close button when clearable search has value", () => {
    render(SearchClearableTest);
    const input = screen.getByTestId("clearable-search") as HTMLInputElement;

    expect(input.value).toBe("Test search");
    const closeButton = screen.getByRole("button", { name: /clear/i });
    expect(closeButton).toBeInTheDocument();
  });

  test("does not show close button when clearable search is empty", () => {
    render(SearchClearableTest);
    const emptyInput = screen.getByTestId("empty-clearable-search") as HTMLInputElement;
    expect(emptyInput.value).toBe("");

    // There should be only one close button (from the search with value)
    const closeButtons = screen.queryAllByRole("button", {name: /clear/i });
    expect(closeButtons).toHaveLength(1);
  });

  test("close button clears search value", async () => {
    const user = userEvent.setup();
    render(SearchClearableTest);

    const input = screen.getByTestId("clearable-search") as HTMLInputElement;
    expect(input.value).toBe("Test search");

    const closeButton = screen.getByRole("button", { name: /clear/i });
    await user.click(closeButton);

    expect(input.value).toBe("");
  });

  test("close button disappears after clearing", async () => {
    const user = userEvent.setup();
    render(SearchClearableTest);

    const closeButton = screen.getByRole("button", { name: /clear/i });
    await user.click(closeButton);

    // Close button should no longer be present
    expect(
    screen.queryByRole("button", { name: /clear/i })).not.toBeInTheDocument();
  });
});

describe("Search - Sizes", () => {
  test("renders search with different sizes", () => {
    render(SearchSizesTest);
    expect(screen.getByTestId("small-search")).toBeInTheDocument();
    expect(screen.getByTestId("medium-search")).toBeInTheDocument();
    expect(screen.getByTestId("large-search")).toBeInTheDocument();
  });

  test("all size variants are search inputs", () => {
    render(SearchSizesTest);
    const smallInput = screen.getByTestId("small-search") as HTMLInputElement;
    const mediumInput = screen.getByTestId("medium-search") as HTMLInputElement;
    const largeInput = screen.getByTestId("large-search") as HTMLInputElement;

    expect(smallInput).toHaveAttribute("type", "search");
    expect(mediumInput).toHaveAttribute("type", "search");
    expect(largeInput).toHaveAttribute("type", "search");
  });
});

describe("Search - Custom Props", () => {
  test("renders with custom placeholder", () => {
    render(SearchCustomPropsTest);
    const input = screen.getByPlaceholderText("Custom placeholder");
    expect(input).toBeInTheDocument();
  });

  test("renders with custom class on wrapper", () => {
    render(SearchCustomPropsTest);
    const input = screen.getByTestId("custom-class-search");
    const wrapper = input.parentElement;
    expect(wrapper).toHaveClass("custom-search-class");
  });

  test("renders with custom input class via classes prop", () => {
    render(SearchCustomPropsTest);
    const input = screen.getByTestId("custom-input-class-search");
    expect(input).toHaveClass("custom-input-class");
  });

  test("passes through custom id to input", () => {
    render(SearchCustomPropsTest);
    const input = screen.getByTestId("custom-class-search");
    expect(input).toHaveAttribute("id", "custom-search-id");
  });

  test("custom id is accessible", () => {
    render(SearchCustomPropsTest);
    const input = document.getElementById("custom-search-id");
    expect(input).toBeInTheDocument();
    expect(input?.tagName).toBe("INPUT");
  });

  test("passes through name attribute to input", () => {
    render(SearchCustomPropsTest);
    const input = screen.getByTestId("named-search");
    expect(input).toHaveAttribute("name", "search-field");
  });
});

describe("Search - Callback", () => {
  test("triggers callback when clear button is clicked", async () => {
    const user = userEvent.setup();
    render(SearchCallbackTest);

    const status = screen.getByTestId("callback-status");
    expect(status).toHaveTextContent("not-triggered");

    const closeButton = screen.getByRole("button", { name: /clear/i });
    expect(closeButton).toBeInTheDocument();

    await user.click(closeButton);

    expect(status).toHaveTextContent("triggered");
  });

  test("clears value and triggers callback", async () => {
    const user = userEvent.setup();
    render(SearchCallbackTest);

    const input = screen.getByTestId("callback-search") as HTMLInputElement;
    const status = screen.getByTestId("callback-status");

    expect(input.value).toBe("Test value");
    expect(status).toHaveTextContent("not-triggered");

    const closeButton = screen.getByRole("button", { name: /clear/i });
    await user.click(closeButton);

    expect(input.value).toBe("");
    expect(status).toHaveTextContent("triggered");
  });
});

describe("Search - With Content", () => {
  test("renders with right content slot", () => {
    render(SearchWithContentTest);
    const button = screen.getByTestId("search-button");
    expect(button).toBeInTheDocument();
  });

  test("right content is in correct wrapper", () => {
    render(SearchWithContentTest);
    const input = screen.getByTestId("search-with-icon");
    const wrapper = input.parentElement;
    const rightContent = wrapper?.querySelector('[data-part="right-content"]');
    expect(rightContent).toBeInTheDocument();
  });

  test("content slot button is clickable", async () => {
    const user = userEvent.setup();
    render(SearchWithContentTest);
    
    const button = screen.getByTestId("search-button");
    await user.click(button);
    
    // Button should be functional
    expect(button).toBeInTheDocument();
  });
});

describe("Search - User Interaction", () => {
  test("accepts user input", async () => {
    const user = userEvent.setup();
    render(SearchBasicTest);

    const input = screen.getByPlaceholderText("Search") as HTMLInputElement;

    await user.type(input, "Test query");
    expect(input.value).toBe("Test query");
  });

  test("can be focused", async () => {
    const user = userEvent.setup();
    render(SearchBasicTest);

    const input = screen.getByPlaceholderText("Search") as HTMLInputElement;

    await user.click(input);
    expect(input).toHaveFocus();
  });

  test("can be cleared and retyped", async () => {
    const user = userEvent.setup();
    render(SearchBasicTest);

    const input = screen.getByPlaceholderText("Search") as HTMLInputElement;

    await user.type(input, "First query");
    expect(input.value).toBe("First query");

    await user.clear(input);
    expect(input.value).toBe("");

    await user.type(input, "Second query");
    expect(input.value).toBe("Second query");
  });

  test("input maintains focus after typing", async () => {
    const user = userEvent.setup();
    render(SearchBasicTest);

    const input = screen.getByPlaceholderText("Search") as HTMLInputElement;

    await user.click(input);
    await user.type(input, "Test");

    expect(input).toHaveFocus();
    expect(input.value).toBe("Test");
  });
});
