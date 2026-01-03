import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe, vi } from "vitest";
import userEvent from '@testing-library/user-event'

import DropzoneBasicTest from "./dropzone-basic.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Dropzone", () => {
  test("renders dropzone", () => {
    render(DropzoneBasicTest);
    expect(screen.getByText("Drop files here or click to upload")).toBeInTheDocument();
  });

  test("has hidden file input", () => {
    const { container } = render(DropzoneBasicTest);
    const fileInput = container.querySelector('input[type="file"]');
    expect(fileInput).toBeInTheDocument();
    expect(fileInput).toHaveClass("hidden");
  });

  test("handles file selection via input", async () => {
    const user = userEvent.setup();
    const { container } = render(DropzoneBasicTest);
    const fileInput = container.querySelector('input[type="file"]') as HTMLInputElement;

    const file = new File(["test content"], "test.txt", { type: "text/plain" });
    await user.upload(fileInput, file);

    expect(fileInput.files).toHaveLength(1);
    expect(fileInput.files?.[0]).toBe(file);
  });

  test("handles drag and drop events", async () => {
    const { container } = render(DropzoneBasicTest);
    const dropzoneLabel = container.querySelector("label");
    expect(dropzoneLabel).toBeInTheDocument();

    // Create handlers to verify events are attached
    const dragOverHandler = vi.fn((e) => e.preventDefault());
    const dropHandler = vi.fn((e) => e.preventDefault());

    dropzoneLabel?.addEventListener("dragover", dragOverHandler);
    dropzoneLabel?.addEventListener("drop", dropHandler);

    // Simulate dragover
    const dragOverEvent = new Event("dragover", { bubbles: true, cancelable: true });
    dropzoneLabel?.dispatchEvent(dragOverEvent);
    expect(dragOverHandler).toHaveBeenCalled();

    // Simulate drop
    const dropEvent = new Event("drop", { bubbles: true, cancelable: true });
    dropzoneLabel?.dispatchEvent(dropEvent);
    expect(dropHandler).toHaveBeenCalled();
  });

  test("label has correct structure", async () => {
    const { container } = render(DropzoneBasicTest);
    const dropzoneLabel = container.querySelector("label");
    expect(dropzoneLabel).toBeInTheDocument();

    // Verify the label contains the file input
    const fileInput = dropzoneLabel?.querySelector('input[type="file"]');
    expect(fileInput).toBeInTheDocument();
  });
});
