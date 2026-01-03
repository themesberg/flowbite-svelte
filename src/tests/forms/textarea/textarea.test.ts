import { cleanup, render, waitFor } from "@testing-library/svelte";
import { expect, test, afterEach, describe, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import TextareaBasicTest from "./textarea-basic.test.svelte";
import TextareaClearableTest from "./textarea-clearable.test.svelte";
import TextareaDisabledTest from "./textarea-disabled.test.svelte";
import TextareaHeaderFooterTest from "./textarea-header-footer.test.svelte";
import TextareaAddonTest from "./textarea-addon.test.svelte";
import TextareaAttributesTest from "./textarea-attributes.test.svelte";

afterEach(() => {
  cleanup();
});

const getTextareaElement = (container: HTMLElement): HTMLTextAreaElement => {
  const base = container.querySelector('textarea[data-part="base"]');
  const wrapper = container.querySelector('textarea[data-part="wrapper"]');
  return (base || wrapper) as HTMLTextAreaElement;
};

describe("Textarea - Basic", () => {
  test("renders textarea with placeholder", () => {
    const { container } = render(TextareaBasicTest);
    const textarea = getTextareaElement(container);
    expect(textarea).toBeInTheDocument();
    expect(textarea.placeholder).toBe("Enter text here");
  });

  test("accepts text input", async () => {
    const user = userEvent.setup();
    const { container } = render(TextareaBasicTest);
    const textarea = getTextareaElement(container);

    await user.type(textarea, "Hello, World!");
    expect(textarea.value).toBe("Hello, World!");
  });

  test("updates value on input", async () => {
    const user = userEvent.setup();
    const { container } = render(TextareaBasicTest);
    const textarea = getTextareaElement(container);

    await user.type(textarea, "Test");
    expect(textarea.value).toBe("Test");

    await user.clear(textarea);
    await user.type(textarea, "New text");
    expect(textarea.value).toBe("New text");
  });

  test("handles multiline text", async () => {
    const user = userEvent.setup();
    const { container } = render(TextareaBasicTest);
    const textarea = getTextareaElement(container);

    await user.type(textarea, "Line 1{Enter}Line 2{Enter}Line 3");
    expect(textarea.value).toBe("Line 1\nLine 2\nLine 3");
  });

  test("can be cleared", async () => {
    const user = userEvent.setup();
    const { container } = render(TextareaBasicTest);
    const textarea = getTextareaElement(container);

    await user.type(textarea, "Some text");
    expect(textarea.value).toBe("Some text");

    await user.clear(textarea);
    expect(textarea.value).toBe("");
  });
});

describe("Textarea - Clearable", () => {
  test("does not show clear button when empty", () => {
    const { container } = render(TextareaClearableTest);
    const clearButton = container.querySelector('[data-part="close"]');
    expect(clearButton).not.toBeInTheDocument();
  });

  test("shows clear button when text is entered", async () => {
    const user = userEvent.setup();
    const { container } = render(TextareaClearableTest);
    const textarea = getTextareaElement(container);

    await user.type(textarea, "Some text");

    const clearButton = container.querySelector('[data-part="close"]');
    expect(clearButton).toBeInTheDocument();
  });

  test("clears text when clear button is clicked", async () => {
    const user = userEvent.setup();
    const { container } = render(TextareaClearableTest);
    const textarea = getTextareaElement(container);

    await user.type(textarea, "Text to clear");
    expect(textarea.value).toBe("Text to clear");

    const clearButton = container.querySelector('[data-part="close"]') as HTMLElement;
    await user.click(clearButton);

    expect(textarea.value).toBe("");
  });

  test("hides clear button after clearing", async () => {
    const user = userEvent.setup();
    const { container } = render(TextareaClearableTest);
    const textarea = getTextareaElement(container);

    await user.type(textarea, "Text");
    let clearButton = container.querySelector('[data-part="close"]') as HTMLElement;
    await user.click(clearButton);

    await waitFor(() => {
      clearButton = container.querySelector('[data-part="close"]') as HTMLElement;
      expect(clearButton).not.toBeInTheDocument();
    });
  });

  test("clear button appears again after typing", async () => {
    const user = userEvent.setup();
    const { container } = render(TextareaClearableTest);
    const textarea = getTextareaElement(container);

    await user.type(textarea, "First");
    let clearButton = container.querySelector('[data-part="close"]') as HTMLElement;
    await user.click(clearButton);

    await user.type(textarea, "Second");
    clearButton = container.querySelector('[data-part="close"]') as HTMLElement;
    expect(clearButton).toBeInTheDocument();
  });
});

describe("Textarea - Disabled", () => {
  test("renders disabled textarea", () => {
    const { container } = render(TextareaDisabledTest);
    const textarea = getTextareaElement(container);
    expect(textarea).toBeDisabled();
  });

  test("cannot accept input when disabled", async () => {
    const user = userEvent.setup();
    const { container } = render(TextareaDisabledTest);
    const textarea = getTextareaElement(container);

    await user.type(textarea, "Should not work");
    expect(textarea.value).toBe("");
  });

  test("cannot be focused when disabled", () => {
    const { container } = render(TextareaDisabledTest);
    const textarea = getTextareaElement(container);

    textarea.focus();
    expect(document.activeElement).not.toBe(textarea);
  });
});

describe("Textarea - Header and Footer", () => {
  test("renders textarea with header", () => {
    const { container } = render(TextareaHeaderFooterTest);
    const header = container.querySelector('[data-part="header"]');
    expect(header).toBeInTheDocument();
    expect(header?.textContent).toContain("Header Text");
  });

  test("renders textarea with footer", () => {
    const { container } = render(TextareaHeaderFooterTest);
    const footer = container.querySelector('[data-part="footer"]');
    expect(footer).toBeInTheDocument();
    expect(footer?.textContent).toContain("Footer Text");
  });

  test("textarea is still functional with header and footer", async () => {
    const user = userEvent.setup();
    const { container } = render(TextareaHeaderFooterTest);
    const textarea = getTextareaElement(container);

    await user.type(textarea, "Test content");
    expect(textarea.value).toBe("Test content");
  });

  test("header appears before textarea", () => {
    const { container } = render(TextareaHeaderFooterTest);
    const header = container.querySelector('[data-part="header"]') as HTMLElement;
    const textarea = getTextareaElement(container);

    const headerPosition = header.compareDocumentPosition(textarea);
    expect(headerPosition & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  test("footer appears after textarea", () => {
    const { container } = render(TextareaHeaderFooterTest);
    const footer = container.querySelector('[data-part="footer"]') as HTMLElement;
    const textarea = getTextareaElement(container);

    const footerPosition = footer.compareDocumentPosition(textarea);
    expect(footerPosition & Node.DOCUMENT_POSITION_PRECEDING).toBeTruthy();
  });
});

describe("Textarea - Addon", () => {
  test("renders textarea with addon", () => {
    const { container } = render(TextareaAddonTest);
    const addon = container.querySelector('[data-part="addon"]');
    expect(addon).toBeInTheDocument();
    expect(addon?.textContent).toContain("Addon");
  });

  test("textarea is functional with addon", async () => {
    const user = userEvent.setup();
    const { container } = render(TextareaAddonTest);
    const textarea = getTextareaElement(container);

    await user.type(textarea, "Content with addon");
    expect(textarea.value).toBe("Content with addon");
  });

  test("addon is rendered in wrapper", () => {
    const { container } = render(TextareaAddonTest);
    const addon = container.querySelector('[data-part="addon"]');
    const inner = addon?.closest('[data-part="inner"]');
    expect(inner).toBeInTheDocument();
  });
});

describe("Textarea - Attributes", () => {
  test("supports rows attribute", () => {
    const { container } = render(TextareaAttributesTest);
    const textarea = getTextareaElement(container);
    expect(textarea.rows).toBe(5);
  });

  test("supports maxlength attribute", () => {
    const { container } = render(TextareaAttributesTest);
    const textarea = getTextareaElement(container);
    expect(textarea.maxLength).toBe(10);
  });
});

describe("Textarea - Events", () => {
  test("triggers input event", async () => {
    const user = userEvent.setup();
    const { container } = render(TextareaBasicTest);
    const textarea = getTextareaElement(container);

    const inputHandler = vi.fn();
    textarea.addEventListener("input", inputHandler);

    await user.type(textarea, "a");
    expect(inputHandler).toHaveBeenCalled();
  });

  test("triggers change event", async () => {
    const user = userEvent.setup();
    const { container } = render(TextareaBasicTest);
    const textarea = getTextareaElement(container);

    const changeHandler = vi.fn();
    textarea.addEventListener("change", changeHandler);

    await user.type(textarea, "test");
    textarea.blur();

    expect(changeHandler).toHaveBeenCalled();
  });

  test("triggers focus and blur events", async () => {
    const user = userEvent.setup();
    const { container } = render(TextareaBasicTest);
    const textarea = getTextareaElement(container);

    const focusHandler = vi.fn();
    const blurHandler = vi.fn();
    textarea.addEventListener("focus", focusHandler);
    textarea.addEventListener("blur", blurHandler);

    await user.click(textarea);
    expect(focusHandler).toHaveBeenCalled();

    textarea.blur();
    expect(blurHandler).toHaveBeenCalled();
  });
});
