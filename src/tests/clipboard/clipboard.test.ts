import { render, screen, within } from "@testing-library/svelte";
import { userEvent } from "@testing-library/user-event";
import { expect, test, vi, beforeEach, afterEach } from "vitest";

// Import test components
import ClipboardTest from "./basic-clipboard.test.svelte";
import ClipboardCopyTest from "./clipboard-copy.test.svelte";

// Mock the clipboard API
const mockWriteText = vi.fn();
Object.defineProperty(navigator, "clipboard", {
  value: {
    writeText: mockWriteText
  },
  writable: true,
  configurable: true
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
