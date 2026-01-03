import { cleanup, render } from "@testing-library/svelte";
import { expect, test, afterEach, describe, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import SelectBasicTest from "./select-basic.test.svelte";
import SelectClearableTest from "./select-clearable.test.svelte";
import SelectDisabledTest from "./select-disabled.test.svelte";
import SelectDisabledOptionsTest from "./select-disabled-options.test.svelte";
import SelectChildrenTest from "./select-children.test.svelte";

afterEach(() => {
  cleanup();
});

const getSelectElement = (container: HTMLElement): HTMLSelectElement => {
  return container.querySelector('select[data-part="select"]') as HTMLSelectElement;
};

describe("Select - Basic", () => {
  test("renders select with placeholder", () => {
    const { container } = render(SelectBasicTest);
    const select = getSelectElement(container);
    expect(select).toBeInTheDocument();

    const placeholderOption = Array.from(select.options).find((opt) => opt.textContent === "Choose a country");
    expect(placeholderOption).toBeInTheDocument();
  });

  test("renders all options from items", () => {
    const { container } = render(SelectBasicTest);
    const select = getSelectElement(container);

    const optionTexts = Array.from(select.options).map((opt) => opt.textContent);
    expect(optionTexts).toContain("United States");
    expect(optionTexts).toContain("Canada");
    expect(optionTexts).toContain("Mexico");
  });

  test("selects an option when changed", async () => {
    const user = userEvent.setup();
    const { container } = render(SelectBasicTest);
    const select = getSelectElement(container);

    expect(select.value).toBe("");
    await user.selectOptions(select, "us");
    expect(select.value).toBe("us");
  });

  test("changes value when different option selected", async () => {
    const user = userEvent.setup();
    const { container } = render(SelectBasicTest);
    const select = getSelectElement(container);

    await user.selectOptions(select, "us");
    expect(select.value).toBe("us");

    await user.selectOptions(select, "mx");
    expect(select.value).toBe("mx");
  });
});

describe("Select - Clearable", () => {
  test("does not show clear button when no value selected", () => {
    const { container } = render(SelectClearableTest);
    const closeButton = container.querySelector('[data-part="close"]');
    expect(closeButton).not.toBeInTheDocument();
  });

  test("shows clear button when value is selected", async () => {
    const user = userEvent.setup();
    const { container } = render(SelectClearableTest);
    const select = getSelectElement(container);

    await user.selectOptions(select, "us");
    const closeButton = container.querySelector('[data-part="close"]');
    expect(closeButton).toBeInTheDocument();
  });

  test("clears selection when clear button clicked", async () => {
    const user = userEvent.setup();
    const { container } = render(SelectClearableTest);
    const select = getSelectElement(container);

    await user.selectOptions(select, "ca");
    expect(select.value).toBe("ca");

    const closeButton = container.querySelector('[data-part="close"]') as HTMLElement;
    await user.click(closeButton);

    expect(select.value).toBe("");
  });

  test("triggers change event when cleared", async () => {
    const user = userEvent.setup();
    const { container } = render(SelectClearableTest);
    const select = getSelectElement(container);

    const changeHandler = vi.fn();
    select.addEventListener("change", changeHandler);

    await user.selectOptions(select, "mx");
    expect(changeHandler).toHaveBeenCalledTimes(1);

    const closeButton = container.querySelector('[data-part="close"]') as HTMLElement;
    await user.click(closeButton);
    expect(changeHandler).toHaveBeenCalledTimes(2);
  });

  test("hides clear button after clearing", async () => {
    const user = userEvent.setup();
    const { container } = render(SelectClearableTest);
    const select = getSelectElement(container);

    await user.selectOptions(select, "us");
    let closeButton = container.querySelector('[data-part="close"]') as HTMLElement;
    await user.click(closeButton);

    closeButton = container.querySelector('[data-part="close"]') as HTMLElement;
    expect(closeButton).not.toBeInTheDocument();
  });
});

describe("Select - Disabled", () => {
  test("renders disabled select", () => {
    const { container } = render(SelectDisabledTest);
    const select = getSelectElement(container);
    expect(select).toBeDisabled();
  });

  test("cannot change value when disabled", async () => {
    const user = userEvent.setup();
    const { container } = render(SelectDisabledTest);
    const select = getSelectElement(container);

    expect(select.value).toBe("");
    await user.selectOptions(select, "us");
    // Disabled selects won't change value
    expect(select.value).toBe("");
  });
});

describe("Select - Disabled Options", () => {
  test("renders select with disabled option", () => {
    const { container } = render(SelectDisabledOptionsTest);
    const select = getSelectElement(container);
    const canadaOption = Array.from(select.options).find((opt) => opt.value === "ca");
    expect(canadaOption).toBeDisabled();
  });

  test("can select non-disabled options", async () => {
    const user = userEvent.setup();
    const { container } = render(SelectDisabledOptionsTest);
    const select = getSelectElement(container);

    await user.selectOptions(select, "us");
    expect(select.value).toBe("us");

    await user.selectOptions(select, "mx");
    expect(select.value).toBe("mx");
  });
});

describe("Select - Children", () => {
  test("renders select with children slot", () => {
    const { container } = render(SelectChildrenTest);
    const select = getSelectElement(container);
    expect(select).toBeInTheDocument();

    const optionTexts = Array.from(select.options).map((opt) => opt.textContent);
    expect(optionTexts).toContain("United States");
    expect(optionTexts).toContain("Canada");
    expect(optionTexts).toContain("Mexico");
  });

  test("selects option from children slot", async () => {
    const user = userEvent.setup();
    const { container } = render(SelectChildrenTest);
    const select = getSelectElement(container);

    await user.selectOptions(select, "ca");
    expect(select.value).toBe("ca");
  });
});
