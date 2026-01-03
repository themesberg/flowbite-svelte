import { cleanup, render, screen, waitFor, within } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import { userEvent } from "@testing-library/user-event";

import MultiSelectBasicTest from "./multiselect-basic.test.svelte";
import MultiSelectPreselectedTest from "./multiselect-preselected.test.svelte";
import MultiSelectDisabledTest from "./multiselect-disabled.test.svelte";
import MultiSelectDisabledOptionsTest from "./multiselect-disabled-options.test.svelte";

afterEach(() => {
  cleanup();
});

const getDropdown = (container: HTMLElement) => {
  return container.querySelector('[data-part="dropdown"]') as HTMLElement;
};

const getDropdownItem = (container: HTMLElement, text: string) => {
  const dropdown = getDropdown(container);
  if (!dropdown) return null;
  const items = Array.from(dropdown.querySelectorAll('[data-part="item"]'));
  return items.find(item => item.textContent?.includes(text)) as HTMLElement | null;
};

const isDropdownVisible = (container: HTMLElement) => {
  const dropdown = getDropdown(container);
  return dropdown !== null && dropdown.offsetParent !== null;
};

describe("MultiSelect - Basic", () => {
  test("renders multiselect with placeholder", () => {
    render(MultiSelectBasicTest);
    expect(screen.getByText("Select fruits")).toBeInTheDocument();
  });

  test("shows dropdown when clicked", async () => {
    const user = userEvent.setup();
    const { container } = render(MultiSelectBasicTest);
    const multiselect = screen.getByRole("listbox");

    expect(isDropdownVisible(container)).toBe(false);
    await user.click(multiselect);

    await waitFor(() => {
      expect(isDropdownVisible(container)).toBe(true);
    });

    const appleItem = getDropdownItem(container, "Apple");
    expect(appleItem).toBeInTheDocument();
  });

  test("selects an option when clicked", async () => {
    const user = userEvent.setup();
    const { container } = render(MultiSelectBasicTest);
    const multiselect = screen.getByRole("listbox");

    await user.click(multiselect);
    await waitFor(() => {
      expect(isDropdownVisible(container)).toBe(true);
    });

    const appleItem = getDropdownItem(container, "Apple");
    await user.click(appleItem!);

    await waitFor(() => {
      const selectedBadges = container.querySelectorAll('[data-part="select"] [class*="badge"]');
      expect(selectedBadges.length).toBeGreaterThan(0);
    });
  });

  test("selects multiple options", async () => {
    const user = userEvent.setup();
    const { container } = render(MultiSelectBasicTest);
    const multiselect = screen.getByRole("listbox");

    await user.click(multiselect);
    await waitFor(() => {
      expect(isDropdownVisible(container)).toBe(true);
    });

    const appleItem = getDropdownItem(container, "Apple");
    const orangeItem = getDropdownItem(container, "Orange");

    await user.click(appleItem!);
    await user.click(orangeItem!);

    await waitFor(() => {
      const selectedBadges = container.querySelectorAll('[data-part="select"] [class*="badge"]');
      expect(selectedBadges.length).toBeGreaterThanOrEqual(2);
    });
  });

  test("deselects an option when clicked again", async () => {
    const user = userEvent.setup();
    const { container } = render(MultiSelectBasicTest);
    const multiselect = screen.getByRole("listbox");

    await user.click(multiselect);
    await waitFor(() => {
      expect(isDropdownVisible(container)).toBe(true);
    });

    const appleItem = getDropdownItem(container, "Apple");
    await user.click(appleItem!);

    await waitFor(() => {
      const appleInDropdown = getDropdownItem(container, "Apple");
      expect(appleInDropdown?.getAttribute("data-selected")).toBe("true");
    });

    // Click again to deselect
    await user.click(appleItem!);

    await waitFor(() => {
      const appleInDropdown = getDropdownItem(container, "Apple");
      expect(appleInDropdown?.getAttribute("data-selected")).not.toBe("true");
    });
  });

  test("closes dropdown when clicking outside", async () => {
    const user = userEvent.setup();
    const { container } = render(MultiSelectBasicTest);
    const multiselect = screen.getByRole("listbox");

    await user.click(multiselect);
    await waitFor(() => {
      expect(isDropdownVisible(container)).toBe(true);
    });

    // Click outside
    await user.click(document.body);

    await waitFor(() => {
      expect(isDropdownVisible(container)).toBe(false);
    });
  });
});

describe("MultiSelect - Preselected", () => {
  test("renders with preselected values", () => {
    const { container } = render(MultiSelectPreselectedTest);
    const selectedBadges = container.querySelectorAll('[data-part="select"] [class*="badge"]');
    expect(selectedBadges.length).toBeGreaterThanOrEqual(2);
  });

  test("shows selected items as badges", () => {
    const { container } = render(MultiSelectPreselectedTest);
    const selectSection = container.querySelector('[data-part="select"]');
    expect(selectSection?.textContent).toContain("Apple");
    expect(selectSection?.textContent).toContain("Orange");
  });

  test("can remove preselected item via badge close", async () => {
    const user = userEvent.setup();
    const { container } = render(MultiSelectPreselectedTest);

    const selectSection = container.querySelector('[data-part="select"]');
    const initialBadges = selectSection?.querySelectorAll('[class*="badge"]').length || 0;

    // Find a badge close button
    const badges = container.querySelectorAll('[data-part="select"] [class*="badge"]');
    const firstBadge = badges[0] as HTMLElement;
    const closeButton = firstBadge.querySelector('button');

    expect(closeButton).toBeInTheDocument();
    await user.click(closeButton!);

    await waitFor(() => {
      const remainingBadges = selectSection?.querySelectorAll('[class*="badge"]').length || 0;
      expect(remainingBadges).toBeLessThan(initialBadges);
    });
  });
});

describe("MultiSelect - Disabled", () => {
  test("renders disabled multiselect", () => {
    render(MultiSelectDisabledTest);
    const multiselect = screen.getByRole("listbox");
    expect(multiselect).toBeInTheDocument();
  });

  test("does not open dropdown when disabled", async () => {
    const user = userEvent.setup();
    const { container } = render(MultiSelectDisabledTest);
    const multiselect = screen.getByRole("listbox");

    await user.click(multiselect);

    // Wait a bit to ensure dropdown doesn't appear
    await new Promise(resolve => setTimeout(resolve, 200));
    expect(isDropdownVisible(container)).toBe(false);
  });
});

describe("MultiSelect - Disabled Options", () => {
  test("renders multiselect with disabled option", async () => {
    const user = userEvent.setup();
    const { container } = render(MultiSelectDisabledOptionsTest);
    const multiselect = screen.getByRole("listbox");

    await user.click(multiselect);
    await waitFor(() => {
      expect(isDropdownVisible(container)).toBe(true);
    });

    const bananaItem = getDropdownItem(container, "Banana");
    expect(bananaItem).toBeInTheDocument();
  });

  test("cannot select disabled option", async () => {
    const user = userEvent.setup();
    const { container } = render(MultiSelectDisabledOptionsTest);
    const multiselect = screen.getByRole("listbox");

    await user.click(multiselect);
    await waitFor(() => {
      expect(isDropdownVisible(container)).toBe(true);
    });

    const bananaItem = getDropdownItem(container, "Banana");
    await user.click(bananaItem!);

    // Wait a bit and check that Banana is not selected
    await new Promise(resolve => setTimeout(resolve, 200));

    const selectSection = container.querySelector('[data-part="select"]');
    expect(selectSection?.textContent).not.toContain("Banana");
  });

  test("can select non-disabled options", async () => {
    const user = userEvent.setup();
    const { container } = render(MultiSelectDisabledOptionsTest);
    const multiselect = screen.getByRole("listbox");

    await user.click(multiselect);
    await waitFor(() => {
      expect(isDropdownVisible(container)).toBe(true);
    });

    const appleItem = getDropdownItem(container, "Apple");
    await user.click(appleItem!);

    await waitFor(() => {
      const selectSection = container.querySelector('[data-part="select"]');
      expect(selectSection?.textContent).toContain("Apple");
    });
  });
});

describe("MultiSelect - Keyboard Navigation", () => {
  test("opens dropdown with Enter key", async () => {
    const user = userEvent.setup();
    const { container } = render(MultiSelectBasicTest);
    const multiselect = screen.getByRole("listbox");

    multiselect.focus();
    await user.keyboard("{Enter}");

    await waitFor(() => {
      expect(isDropdownVisible(container)).toBe(true);
    });
  });

  test("opens dropdown with Space key", async () => {
    const user = userEvent.setup();
    const { container } = render(MultiSelectBasicTest);
    const multiselect = screen.getByRole("listbox");

    multiselect.focus();
    await user.keyboard(" ");

    await waitFor(() => {
      expect(isDropdownVisible(container)).toBe(true);
    });
  });

  test("closes dropdown with Escape key", async () => {
    const user = userEvent.setup();
    const { container } = render(MultiSelectBasicTest);
    const multiselect = screen.getByRole("listbox");

    await user.click(multiselect);
    await waitFor(() => {
      expect(isDropdownVisible(container)).toBe(true);
    });

    await user.keyboard("{Escape}");

    await waitFor(() => {
      expect(isDropdownVisible(container)).toBe(false);
    });
  });

  test("navigates options with arrow keys", async () => {
    const user = userEvent.setup();
    const { container } = render(MultiSelectBasicTest);
    const multiselect = screen.getByRole("listbox");

    multiselect.focus();
    await user.keyboard("{Enter}");

    await waitFor(() => {
      expect(isDropdownVisible(container)).toBe(true);
    });

    // Navigate down
    await user.keyboard("{ArrowDown}");

    // Check that an item has the active attribute
    await waitFor(() => {
      const activeItem = container.querySelector('[data-part="item"][data-active="true"]');
      expect(activeItem).toBeInTheDocument();
    });
  });

  test("selects active item with Enter key", async () => {
    const user = userEvent.setup();
    const { container } = render(MultiSelectBasicTest);
    const multiselect = screen.getByRole("listbox");

    multiselect.focus();

    // Open dropdown AND activate first item
    await user.keyboard("{ArrowDown}");

    await waitFor(() => {
      expect(isDropdownVisible(container)).toBe(true);
    });

    // Select active item
    await user.keyboard("{Enter}");

    await waitFor(() => {
      const selectSection = container.querySelector('[data-part="select"]');
      const badges = selectSection?.querySelectorAll('[class*="badge"]');
      expect(badges?.length).toBeGreaterThan(0);
    });
  });
});

describe("MultiSelect - Clear All", () => {
  test("shows clear button when items are selected", async () => {
    const user = userEvent.setup();
    const { container } = render(MultiSelectBasicTest);
    const multiselect = screen.getByRole("listbox");

    await user.click(multiselect);
    await waitFor(() => {
      expect(isDropdownVisible(container)).toBe(true);
    });

    const appleItem = getDropdownItem(container, "Apple");
    await user.click(appleItem!);

    await waitFor(() => {
      const clearButton = container.querySelector('[data-part="close"]');
      expect(clearButton).toBeInTheDocument();
    });
  });

  test("clears all selections when clear button clicked", async () => {
    const user = userEvent.setup();
    const { container } = render(MultiSelectPreselectedTest);

    // Find the main clear button (not badge close buttons)
    const clearButton = container.querySelector('[data-part="close"]') as HTMLElement;

    expect(clearButton).toBeInTheDocument();
    await user.click(clearButton);

    await waitFor(() => {
      expect(screen.getByText("Select fruits")).toBeInTheDocument();
      const selectSection = container.querySelector('[data-part="select"]');
      const badges = selectSection?.querySelectorAll('[class*="badge"]');
      expect(badges?.length || 0).toBe(0);
    });
  });
});
