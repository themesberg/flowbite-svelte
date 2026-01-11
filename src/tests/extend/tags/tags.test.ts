import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicTagsTest from "./basic-tags.test.svelte";
import PresetTagsTest from "./preset-tags.test.svelte";
import UniqueTagsTest from "./unique-tags.test.svelte";
import AvailableTagsTest from "./available-tags.test.svelte";
import AvailableTagsUniqueTest from "./available-tags-unique.test.svelte";
import ShowHelperTest from "./show-helper.test.svelte";
import ShowAvailableTest from "./show-available.test.svelte";
import NoNewTagsTest from "./no-new-tags.test.svelte";
import DisabledTagsTest from "./disabled-tags.test.svelte";
import CustomPlaceholderTest from "./custom-placeholder.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Tags Component", () => {
  describe("Basic Rendering", () => {
    test("renders tags component correctly", () => {
      render(BasicTagsTest);
      const tags = screen.getByTestId("basic-tags");

      expect(tags).toBeInTheDocument();
      expect(tags).toHaveAttribute("data-scope", "tags");
      expect(tags).toHaveAttribute("data-part", "base");
    });

    test("renders input field", () => {
      render(BasicTagsTest);
      const tags = screen.getByTestId("basic-tags");

      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;
      expect(input).toBeInTheDocument();
      expect(input?.tagName).toBe("INPUT");
      expect(input?.type).toBe("text");
    });

    test("renders with placeholder", () => {
      render(BasicTagsTest);
      const tags = screen.getByTestId("basic-tags");

      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;
      expect(input?.placeholder).toBe("Enter tags");
    });

    test("renders with custom placeholder", () => {
      render(CustomPlaceholderTest);
      const tags = screen.getByTestId("custom-placeholder");

      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;
      expect(input?.placeholder).toBe("Add a tag...");
    });

    test("renders with preset tags", () => {
      render(PresetTagsTest);
      const tags = screen.getByTestId("preset-tags");

      const tagItems = tags.querySelectorAll('[data-part="item"]');
      expect(tagItems.length).toBe(2);

      const labels = tags.querySelectorAll('[data-part="label"]');
      expect(labels[0]?.textContent).toBe("Tag1");
      expect(labels[1]?.textContent).toBe("Tag2");
    });

    test("hides placeholder when tags exist", () => {
      render(PresetTagsTest);
      const tags = screen.getByTestId("preset-tags");

      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;
      expect(input?.placeholder).toBe("");
    });
  });

  describe("Adding Tags", () => {
    test("adds tag on Enter key", async () => {
      const user = userEvent.setup();
      render(BasicTagsTest);
      const tags = screen.getByTestId("basic-tags");

      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;

      await user.type(input, "NewTag{Enter}");

      const tagItems = tags.querySelectorAll('[data-part="item"]');
      expect(tagItems.length).toBe(1);

      const label = tags.querySelector('[data-part="label"]');
      expect(label?.textContent).toBe("NewTag");
    });

    test("clears input after adding tag", async () => {
      const user = userEvent.setup();
      render(BasicTagsTest);
      const tags = screen.getByTestId("basic-tags");

      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;

      await user.type(input, "NewTag{Enter}");

      expect(input.value).toBe("");
    });

    test("trims whitespace from tags", async () => {
      const user = userEvent.setup();
      render(BasicTagsTest);
      const tags = screen.getByTestId("basic-tags");

      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;

      await user.type(input, "  SpacedTag  {Enter}");

      const label = tags.querySelector('[data-part="label"]');
      expect(label?.textContent).toBe("SpacedTag");
    });

    test("does not add empty tags", async () => {
      const user = userEvent.setup();
      render(BasicTagsTest);
      const tags = screen.getByTestId("basic-tags");

      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;

      await user.type(input, "{Enter}");
      await user.type(input, "   {Enter}");

      const tagItems = tags.querySelectorAll('[data-part="item"]');
      expect(tagItems.length).toBe(0);
    });

    test("adds multiple tags sequentially", async () => {
      const user = userEvent.setup();
      render(BasicTagsTest);
      const tags = screen.getByTestId("basic-tags");

      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;

      await user.type(input, "Tag1{Enter}");
      await user.type(input, "Tag2{Enter}");
      await user.type(input, "Tag3{Enter}");

      const tagItems = tags.querySelectorAll('[data-part="item"]');
      expect(tagItems.length).toBe(3);

      const labels = tags.querySelectorAll('[data-part="label"]');
      expect(labels[0]?.textContent).toBe("Tag1");
      expect(labels[1]?.textContent).toBe("Tag2");
      expect(labels[2]?.textContent).toBe("Tag3");
    });
  });

  describe("Removing Tags", () => {
    test("removes tag on close button click", async () => {
      const user = userEvent.setup();
      render(PresetTagsTest);
      const tags = screen.getByTestId("preset-tags");

      let tagItems = tags.querySelectorAll('[data-part="item"]');
      expect(tagItems.length).toBe(2);

      const closeButton = tags.querySelector('[data-part="close-button"]') as HTMLElement;
      await user.click(closeButton);

      tagItems = tags.querySelectorAll('[data-part="item"]');
      expect(tagItems.length).toBe(1);
    });

    test("removes last tag on Backspace when input is empty", async () => {
      const user = userEvent.setup();
      render(PresetTagsTest);
      const tags = screen.getByTestId("preset-tags");

      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;

      let tagItems = tags.querySelectorAll('[data-part="item"]');
      expect(tagItems.length).toBe(2);

      await user.type(input, "{Backspace}");

      tagItems = tags.querySelectorAll('[data-part="item"]');
      expect(tagItems.length).toBe(1);
    });

    test("moves last tag to input on Backspace", async () => {
      const user = userEvent.setup();
      render(PresetTagsTest);
      const tags = screen.getByTestId("preset-tags");

      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;

      await user.type(input, "{Backspace}");

      expect(input.value).toBe("Tag2");

      const tagItems = tags.querySelectorAll('[data-part="item"]');
      expect(tagItems.length).toBe(1);
    });

    test("does not remove tag on Backspace when input has content", async () => {
      const user = userEvent.setup();
      render(PresetTagsTest);
      const tags = screen.getByTestId("preset-tags");

      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;

      await user.type(input, "test");

      const tagItemsBefore = tags.querySelectorAll('[data-part="item"]');
      expect(tagItemsBefore.length).toBe(2);

      await user.type(input, "{Backspace}");

      const tagItemsAfter = tags.querySelectorAll('[data-part="item"]');
      expect(tagItemsAfter.length).toBe(2);
      expect(input.value).toBe("tes");
    });
  });

  describe("Unique Tags", () => {
    test("prevents duplicate tags when unique is true", async () => {
      const user = userEvent.setup();
      render(UniqueTagsTest);
      const tags = screen.getByTestId("unique-tags");

      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;

      await user.type(input, "Tag1{Enter}");
      await user.type(input, "Tag1{Enter}");

      const tagItems = tags.querySelectorAll('[data-part="item"]');
      expect(tagItems.length).toBe(1);

      const error = tags.parentElement?.querySelector('[data-part="error"]');
      expect(error).toBeInTheDocument();
      expect(error?.textContent).toContain("already added");
    });

    test("allows duplicate tags when unique is false", async () => {
      const user = userEvent.setup();
      render(BasicTagsTest);
      const tags = screen.getByTestId("basic-tags");

      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;

      await user.type(input, "Tag1{Enter}");
      await user.type(input, "Tag1{Enter}");

      const tagItems = tags.querySelectorAll('[data-part="item"]');
      expect(tagItems.length).toBe(2);
    });

    test("unique check is case insensitive", async () => {
      const user = userEvent.setup();
      render(UniqueTagsTest);
      const tags = screen.getByTestId("unique-tags");

      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;

      await user.type(input, "Tag1{Enter}");
      await user.type(input, "tag1{Enter}");

      const tagItems = tags.querySelectorAll('[data-part="item"]');
      expect(tagItems.length).toBe(1);
    });
  });

  describe("Available Tags", () => {
    test("restricts to available tags when allowNewTags is false", async () => {
      const user = userEvent.setup();
      render(NoNewTagsTest);
      const tags = screen.getByTestId("no-new-tags");

      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;

      await user.type(input, "InvalidTag{Enter}");

      const tagItems = tags.querySelectorAll('[data-part="item"]');
      expect(tagItems.length).toBe(0);

      const error = tags.parentElement?.querySelector('[data-part="error"]');
      expect(error).toBeInTheDocument();
      expect(error?.textContent).toContain("not in the available tags");
    });

    test("allows available tags when allowNewTags is false", async () => {
      const user = userEvent.setup();
      render(NoNewTagsTest);
      const tags = screen.getByTestId("no-new-tags");

      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;

      await user.type(input, "JavaScript{Enter}");

      const tagItems = tags.querySelectorAll('[data-part="item"]');
      expect(tagItems.length).toBe(1);
    });

    test("shows available tags list when showAvailableTags is true", () => {
      render(ShowAvailableTest);
      const container = screen.getByTestId("show-available").parentElement;

      const info = container?.querySelector('[data-part="info"]');
      expect(info).toBeInTheDocument();
      expect(info?.textContent).toContain("Available tags:");
      expect(info?.textContent).toContain("JavaScript");
      expect(info?.textContent).toContain("TypeScript");
    });

    test("available tags check is case insensitive", async () => {
      const user = userEvent.setup();
      render(NoNewTagsTest);
      const tags = screen.getByTestId("no-new-tags");

      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;

      await user.type(input, "javascript{Enter}");
      await user.type(input, "TYPESCRIPT{Enter}");

      const tagItems = tags.querySelectorAll('[data-part="item"]');
      expect(tagItems.length).toBe(2);
    });
  });

  describe("Helper Text", () => {
    test("shows helper warning for duplicate when showHelper is true", async () => {
      const user = userEvent.setup();
      render(ShowHelperTest);
      const container = screen.getByTestId("show-helper").parentElement;

      const tags = screen.getByTestId("show-helper");
      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;

      await user.type(input, "Tag1{Enter}");
      await user.type(input, "Tag1");

      const warning = container?.querySelector('[data-part="warning"]');
      expect(warning).toBeInTheDocument();
      expect(warning?.textContent).toContain("already added");
    });

    test("does not show helper by default", async () => {
      const user = userEvent.setup();
      render(BasicTagsTest);
      const container = screen.getByTestId("basic-tags").parentElement;

      const tags = screen.getByTestId("basic-tags");
      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;

      await user.type(input, "Tag1{Enter}");
      await user.type(input, "Tag1");

      const warning = container?.querySelector('[data-part="warning"]');
      expect(warning).not.toBeInTheDocument();
    });
  });

  describe("Suggestions Dropdown", () => {
    test("shows suggestions when typing and availableTags exist", async () => {
      const user = userEvent.setup();
      render(AvailableTagsTest);
      const tags = screen.getByTestId("available-tags");

      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;

      await user.type(input, "java");

      const list = tags.querySelector('[data-part="list"]');
      expect(list).toBeInTheDocument();

      const options = tags.querySelectorAll('[data-part="option"]');
      expect(options.length).toBeGreaterThan(0);
    });

    test("filters suggestions based on input", async () => {
      const user = userEvent.setup();
      render(AvailableTagsTest);
      const tags = screen.getByTestId("available-tags");

      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;

      await user.type(input, "type");

      const options = tags.querySelectorAll('[data-part="option"]');
      expect(options.length).toBe(1);
      expect(options[0]?.textContent).toBe("TypeScript");
    });

    test("adds tag when clicking suggestion", async () => {
      const user = userEvent.setup();
      render(AvailableTagsTest);
      const tags = screen.getByTestId("available-tags");

      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;

      await user.type(input, "java");

      const option = tags.querySelector('[data-part="option"]') as HTMLElement;
      await user.click(option);

      const tagItems = tags.querySelectorAll('[data-part="item"]');
      expect(tagItems.length).toBe(1);
      expect(tagItems[0]?.textContent).toContain("JavaScript");
    });

    test("clears input after selecting suggestion", async () => {
      const user = userEvent.setup();
      render(AvailableTagsTest);
      const tags = screen.getByTestId("available-tags");

      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;

      await user.type(input, "java");

      const option = tags.querySelector('[data-part="option"]') as HTMLElement;
      await user.click(option);

      expect(input.value).toBe("");
    });

    test("does not show already selected tags in suggestions when unique is true", async () => {
      const user = userEvent.setup();
      render(AvailableTagsUniqueTest);
      const tags = screen.getByTestId("available-tags-unique");

      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;

      await user.type(input, "JavaScript{Enter}");
      await user.type(input, "java");

      const list = tags.querySelector('[data-part="list"]');
      expect(list).not.toBeInTheDocument();
    });
  });

  describe("Disabled State", () => {
    test("disables input when disabled prop is true", () => {
      render(DisabledTagsTest);
      const tags = screen.getByTestId("disabled-tags");

      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;
      expect(input?.disabled).toBe(true);
    });

    test("disables close buttons when disabled", () => {
      render(DisabledTagsTest);
      const tags = screen.getByTestId("disabled-tags");

      const closeButtons = tags.querySelectorAll('[data-part="close-button"]');
      closeButtons.forEach((button) => {
        expect(button).toHaveAttribute("disabled");
      });
    });

    test("preset tags are shown when disabled", () => {
      render(DisabledTagsTest);
      const tags = screen.getByTestId("disabled-tags");

      const tagItems = tags.querySelectorAll('[data-part="item"]');
      expect(tagItems.length).toBe(2);
    });
  });

  describe("Accessibility", () => {
    test("input has autocomplete off", () => {
      render(BasicTagsTest);
      const tags = screen.getByTestId("basic-tags");

      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;
      expect(input?.autocomplete).toBe("off");
    });

    test("close buttons have aria-label", () => {
      render(PresetTagsTest);
      const tags = screen.getByTestId("preset-tags");

      const closeButtons = tags.querySelectorAll('[data-part="close-button"]');
      closeButtons.forEach((button) => {
        expect(button).toHaveAttribute("aria-label");
      });
    });

    test("suggestions have proper button role", async () => {
      const user = userEvent.setup();
      render(AvailableTagsTest);
      const tags = screen.getByTestId("available-tags");

      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;
      await user.type(input, "java");

      const options = tags.querySelectorAll('[data-part="option"]');
      options.forEach((option) => {
        expect(option.tagName).toBe("BUTTON");
        expect(option).toHaveAttribute("type", "button");
      });
    });
  });

  describe("Error Handling", () => {
    test("shows error when trying to add unavailable tag", async () => {
      const user = userEvent.setup();
      render(NoNewTagsTest);
      const container = screen.getByTestId("no-new-tags").parentElement;

      const tags = screen.getByTestId("no-new-tags");
      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;

      await user.type(input, "InvalidTag{Enter}");

      const error = container?.querySelector('[data-part="error"]');
      expect(error).toBeInTheDocument();
    });

    test("clears error after successful tag addition", async () => {
      const user = userEvent.setup();
      render(UniqueTagsTest);
      const container = screen.getByTestId("unique-tags").parentElement;

      const tags = screen.getByTestId("unique-tags");
      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;

      // Add duplicate to trigger error
      await user.type(input, "Tag1{Enter}");
      await user.type(input, "Tag1{Enter}");

      let error = container?.querySelector('[data-part="error"]');
      expect(error).toBeInTheDocument();

      // Add valid tag
      await user.clear(input);
      await user.type(input, "Tag2{Enter}");

      error = container?.querySelector('[data-part="error"]');
      expect(error).not.toBeInTheDocument();
    });

    test("error message persists until valid action", async () => {
      const user = userEvent.setup();
      render(UniqueTagsTest);
      const container = screen.getByTestId("unique-tags").parentElement;

      const tags = screen.getByTestId("unique-tags");
      const input = tags.querySelector('[data-part="input"]') as HTMLInputElement;

      // Add duplicate to trigger error
      await user.type(input, "Tag1{Enter}");
      await user.type(input, "Tag1{Enter}");

      let error = container?.querySelector('[data-part="error"]');
      expect(error).toBeInTheDocument();
      expect(error?.textContent).toContain("already added");

      // Clear input - error should still be there
      await user.clear(input);

      error = container?.querySelector('[data-part="error"]');
      expect(error).toBeInTheDocument();
      expect(error?.textContent).toContain("already added");
    });
  });
});
