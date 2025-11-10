import { cleanup, render, screen, waitFor } from "@testing-library/svelte";
import { expect, test, afterEach, beforeEach, vi, describe } from "vitest";
import { userEvent } from "@testing-library/user-event";

import ClipboardManagerTest from "./clipboard-manager.test.svelte";

// Mock clipboard API
const mockClipboard = {
  writeText: vi.fn(() => Promise.resolve()),
  readText: vi.fn(() => Promise.resolve(""))
};

Object.defineProperty(navigator, "clipboard", {
  value: mockClipboard,
  writable: true,
  configurable: true
});

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    }
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
  writable: true,
  configurable: true
});

beforeEach(() => {
  localStorageMock.clear();
  vi.clearAllMocks();
});

afterEach(() => {
  cleanup();
});

describe("ClipboardManager Basic Functionality", () => {
  test("renders with placeholder text", () => {
    render(ClipboardManagerTest);
    const input = screen.getByPlaceholderText("Type and save to clipboard");
    expect(input).toBeInTheDocument();
  });

  test("shows empty state when no items", () => {
    render(ClipboardManagerTest);
    expect(screen.getByText("No clipboard items yet.")).toBeInTheDocument();
  });

  test("adds item to clipboard", async () => {
    const user = userEvent.setup();
    render(ClipboardManagerTest);

    const input = screen.getByPlaceholderText("Type and save to clipboard");
    const saveButton = screen.getByText("Save");

    await user.type(input, "Test clipboard item");
    await user.click(saveButton);

    await waitFor(() => {
      expect(screen.getByText("Test clipboard item")).toBeInTheDocument();
    });
  });

  test("adds item on Enter key", async () => {
    const user = userEvent.setup();
    render(ClipboardManagerTest);

    const input = screen.getByPlaceholderText("Type and save to clipboard");

    await user.type(input, "Test with Enter{Enter}");

    await waitFor(() => {
      expect(screen.getByText("Test with Enter")).toBeInTheDocument();
    });
  });

  test("clears input after adding item", async () => {
    const user = userEvent.setup();
    render(ClipboardManagerTest);

    const input = screen.getByPlaceholderText("Type and save to clipboard") as HTMLInputElement;
    const saveButton = screen.getByText("Save");

    await user.type(input, "Test item");
    await user.click(saveButton);

    await waitFor(() => {
      expect(input.value).toBe("");
    });
  });

  test("does not add empty items", async () => {
    const user = userEvent.setup();
    render(ClipboardManagerTest);

    const saveButton = screen.getByText("Save");
    await user.click(saveButton);

    expect(screen.getByText("No clipboard items yet.")).toBeInTheDocument();
  });

  test("does not add duplicate items", async () => {
    const user = userEvent.setup();
    render(ClipboardManagerTest);

    const input = screen.getByPlaceholderText("Type and save to clipboard");
    const saveButton = screen.getByText("Save");

    await user.type(input, "Duplicate test");
    await user.click(saveButton);

    await waitFor(() => {
      expect(screen.getByText("Duplicate test")).toBeInTheDocument();
    });

    await user.type(input, "Duplicate test");
    await user.click(saveButton);

    await waitFor(() => {
      expect(screen.getByText(/already in your clipboard/i)).toBeInTheDocument();
    });
  });
});

describe("ClipboardManager Item Actions", () => {
  // test("copies item to clipboard", async () => {
  //   const user = userEvent.setup();
  //   render(ClipboardManagerTest);

  //   const input = screen.getByPlaceholderText("Type and save to clipboard");
  //   const saveButton = screen.getByText("Save");

  //   await user.type(input, "Copy test");
  //   await user.click(saveButton);

  //   await waitFor(() => {
  //     expect(screen.getByText("Copy test")).toBeInTheDocument();
  //   });

  //   const copyButton = screen.getByLabelText("Copy");
  //   await user.click(copyButton);

  //   await waitFor(() => {
  //     expect(mockClipboard.writeText).toHaveBeenCalledWith("Copy test");
  //   });
  // });

  test("deletes item", async () => {
    const user = userEvent.setup();
    render(ClipboardManagerTest);

    const input = screen.getByPlaceholderText("Type and save to clipboard");
    const saveButton = screen.getByText("Save");

    await user.type(input, "Delete test");
    await user.click(saveButton);

    await waitFor(() => {
      expect(screen.getByText("Delete test")).toBeInTheDocument();
    });

    const deleteButton = screen.getByLabelText("Delete");
    await user.click(deleteButton);

    await waitFor(() => {
      expect(screen.queryByText("Delete test")).not.toBeInTheDocument();
    });
  });

  test("pins and unpins item", async () => {
    const user = userEvent.setup();
    render(ClipboardManagerTest);

    const input = screen.getByPlaceholderText("Type and save to clipboard");
    const saveButton = screen.getByText("Save");

    await user.type(input, "Pin test");
    await user.click(saveButton);

    await waitFor(() => {
      expect(screen.getByText("Pin test")).toBeInTheDocument();
    });

    const pinButton = screen.getByLabelText("Pin");
    await user.click(pinButton);

    await waitFor(() => {
      expect(screen.getByText("Pinned")).toBeInTheDocument();
    });

    const unpinButton = screen.getByLabelText("Unpin");
    await user.click(unpinButton);

    await waitFor(() => {
      expect(screen.queryByText("Pinned")).not.toBeInTheDocument();
    });
  });

  test("clears all items with confirmation", async () => {
    const user = userEvent.setup();

    // Mock window.confirm
    const confirmSpy = vi.spyOn(window, "confirm").mockReturnValue(true);

    render(ClipboardManagerTest);

    const input = screen.getByPlaceholderText("Type and save to clipboard");
    const saveButton = screen.getByText("Save");

    // Add multiple items
    await user.type(input, "Item 1");
    await user.click(saveButton);
    await user.type(input, "Item 2");
    await user.click(saveButton);

    await waitFor(() => {
      expect(screen.getByText("Item 1")).toBeInTheDocument();
      expect(screen.getByText("Item 2")).toBeInTheDocument();
    });

    const clearButton = screen.getByText("Clear All");
    await user.click(clearButton);

    await waitFor(() => {
      expect(screen.getByText("No clipboard items yet.")).toBeInTheDocument();
    });

    confirmSpy.mockRestore();
  });

  test("does not clear items when confirmation is cancelled", async () => {
    const user = userEvent.setup();

    const confirmSpy = vi.spyOn(window, "confirm").mockReturnValue(false);

    render(ClipboardManagerTest);

    const input = screen.getByPlaceholderText("Type and save to clipboard");
    const saveButton = screen.getByText("Save");

    await user.type(input, "Item 1");
    await user.click(saveButton);

    await waitFor(() => {
      expect(screen.getByText("Item 1")).toBeInTheDocument();
    });

    const clearButton = screen.getByText("Clear All");
    await user.click(clearButton);

    expect(screen.getByText("Item 1")).toBeInTheDocument();

    confirmSpy.mockRestore();
  });
});

describe("ClipboardManager Search", () => {
  test("filters items by search query", async () => {
    const user = userEvent.setup();
    render(ClipboardManagerTest);

    const input = screen.getByPlaceholderText("Type and save to clipboard");
    const saveButton = screen.getByText("Save");

    // Add multiple items
    await user.type(input, "Apple");
    await user.click(saveButton);
    await user.type(input, "Banana");
    await user.click(saveButton);
    await user.type(input, "Cherry");
    await user.click(saveButton);

    await waitFor(() => {
      expect(screen.getByText("Apple")).toBeInTheDocument();
      expect(screen.getByText("Banana")).toBeInTheDocument();
      expect(screen.getByText("Cherry")).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText("Search clipboard...");
    await user.type(searchInput, "ban");

    await waitFor(() => {
      expect(screen.getByText("Banana")).toBeInTheDocument();
      expect(screen.queryByText("Apple")).not.toBeInTheDocument();
      expect(screen.queryByText("Cherry")).not.toBeInTheDocument();
    });
  });

  test("shows no results message for search with no matches", async () => {
    const user = userEvent.setup();
    render(ClipboardManagerTest);

    const input = screen.getByPlaceholderText("Type and save to clipboard");
    const saveButton = screen.getByText("Save");

    await user.type(input, "Test item");
    await user.click(saveButton);

    await waitFor(() => {
      expect(screen.getByText("Test item")).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText("Search clipboard...");
    await user.type(searchInput, "nomatch");

    await waitFor(() => {
      expect(screen.getByText(/No items match "nomatch"/i)).toBeInTheDocument();
    });
  });
});

describe("ClipboardManager Storage", () => {
  // test("saves items to localStorage", async () => {
  //   const user = userEvent.setup();
  //   render(ClipboardManagerTest);

  //   const input = screen.getByPlaceholderText("Type and save to clipboard");
  //   const saveButton = screen.getByText("Save");

  //   await user.type(input, "Storage test");
  //   await user.click(saveButton);

  //   // First wait for the item to appear in the UI
  //   await waitFor(() => {
  //     expect(screen.getByText("Storage test")).toBeInTheDocument();
  //   });

  //   // Then wait a bit longer for the $effect to save to localStorage
  //   await waitFor(() => {
  //     const stored = localStorage.getItem("flowbite-clipboard-manager");
  //     expect(stored).toBeTruthy();
  //   }, { timeout: 3000 });

  //   const stored = localStorage.getItem("flowbite-clipboard-manager");
  //   const items = JSON.parse(stored!);
  //   expect(items).toHaveLength(1);
  //   expect(items[0].text).toBe("Storage test");
  // });

  test("loads items from localStorage on mount", async () => {
    // Pre-populate localStorage
    const testItems = [
      { id: 1, text: "Stored item 1", timestamp: Date.now() },
      { id: 2, text: "Stored item 2", timestamp: Date.now() - 1000 }
    ];
    localStorage.setItem("flowbite-clipboard-manager", JSON.stringify(testItems));

    render(ClipboardManagerTest);

    await waitFor(() => {
      expect(screen.getByText("Stored item 1")).toBeInTheDocument();
      expect(screen.getByText("Stored item 2")).toBeInTheDocument();
    });
  });
});
