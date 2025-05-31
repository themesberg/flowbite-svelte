import { render, screen, within } from "@testing-library/svelte";
import { userEvent } from "@testing-library/user-event";
import { expect, test, vi, beforeEach, afterEach } from "vitest";

// Import test components
import ClipboardTest from "./basic-clipboard.test.svelte";
import ClipboardCopyTest from "./clipboard-copy.test.svelte";
import ClipboardHexTest from "./clipboard-hex.test.svelte";
import ClipboardEmptyTest from "./clipboard-empty.test.svelte";
import ClipboardEmbeddedTest from "./clipboard-embedded.test.svelte";
import ClipboardCustomHandlerTest from "./clipboard-custom-handler.test.svelte";

// Mock the clipboard API
const mockWriteText = vi.fn();
Object.assign(navigator, {
  clipboard: {
    writeText: mockWriteText
  }
});

beforeEach(() => {
  vi.clearAllMocks();
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

test("basic snippet renders correctly", () => {
  render(ClipboardTest);

  const button = screen.getByRole("button");
  const child = within(button).getByTestId("child");

  expect(child).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("copies text to clipboard when clicked", async () => {
  const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

  render(ClipboardCopyTest);

  const button = screen.getByTestId("copy-button");
  await user.click(button);
  vi.advanceTimersByTime(100);

  expect(button).toHaveTextContent("Copied!");
});
