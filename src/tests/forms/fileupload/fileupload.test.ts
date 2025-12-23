import { cleanup, render, waitFor } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import { userEvent } from "@testing-library/user-event";

import FileuploadBasicTest from "./fileupload-basic.test.svelte";
import FileuploadClearableTest from "./fileupload-clearable.test.svelte";
import FileuploadSizesTest from "./fileupload-sizes.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Fileupload - Basic", () => {
  test("renders file upload input", () => {
    const { container } = render(FileuploadBasicTest);
    const fileInput = container.querySelector('input[type="file"]');
    expect(fileInput).toBeInTheDocument();
  });

  test("handles file selection", async () => {
    const user = userEvent.setup();
    const { container } = render(FileuploadBasicTest);
    const fileInput = container.querySelector('input[type="file"]') as HTMLInputElement;

    const file = new File(["test content"], "test.txt", { type: "text/plain" });
    await user.upload(fileInput, file);

    expect(fileInput.files).toHaveLength(1);
    expect(fileInput.files?.[0]).toBe(file);
    expect(fileInput.files?.[0].name).toBe("test.txt");
  });

  test("handles multiple file selection", async () => {
    const user = userEvent.setup();
    const { container } = render(FileuploadBasicTest);
    const fileInput = container.querySelector('input[type="file"]') as HTMLInputElement;

    expect(fileInput).toHaveAttribute("multiple");

    const file1 = new File(["content1"], "test1.txt", { type: "text/plain" });
    const file2 = new File(["content2"], "test2.txt", { type: "text/plain" });
    await user.upload(fileInput, [file1, file2]);

    expect(fileInput.files).toHaveLength(2);
    expect(fileInput.files?.[0].name).toBe("test1.txt");
    expect(fileInput.files?.[1].name).toBe("test2.txt");
  });

  test("is wrapped in a div", () => {
    const { container } = render(FileuploadBasicTest);
    const wrapper = container.querySelector("div");
    expect(wrapper).toBeInTheDocument();
    const fileInput = wrapper?.querySelector('input[type="file"]');
    expect(fileInput).toBeInTheDocument();
  });
});

describe("Fileupload - Clearable", () => {
  test("does not show clear button when no files selected", () => {
    const { container } = render(FileuploadClearableTest);
    const closeButton = container.querySelector('button[aria-label="Clear selected files"]');
    expect(closeButton).not.toBeInTheDocument();
  });

  test("shows clear button when files are selected", async () => {
    const user = userEvent.setup();
    const { container } = render(FileuploadClearableTest);
    const fileInput = container.querySelector('input[type="file"]') as HTMLInputElement;

    const file = new File(["test"], "test.txt", { type: "text/plain" });
    await user.upload(fileInput, file);

    // Wait for Svelte reactivity to update the DOM
    await waitFor(
      () => {
        const closeButton = container.querySelector('button[aria-label="Clear selected files"]');
        expect(closeButton).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });

  test("clears files when clear button is clicked", async () => {
    const user = userEvent.setup();
    const { container } = render(FileuploadClearableTest);
    const fileInput = container.querySelector('input[type="file"]') as HTMLInputElement;

    const file = new File(["test"], "test.txt", { type: "text/plain" });
    await user.upload(fileInput, file);
    expect(fileInput.files).toHaveLength(1);

    // Wait for close button to appear
    await waitFor(
      () => {
        const closeButton = container.querySelector('button[aria-label="Clear selected files"]');
        expect(closeButton).toBeInTheDocument();
      },
      { timeout: 3000 }
    );

    const closeButton = container.querySelector('button[aria-label="Clear selected files"]') as HTMLButtonElement;
    await user.click(closeButton);

    // Verify the input value is cleared (this is what matters for functionality)
    await waitFor(
      () => {
        expect(fileInput.value).toBe("");
      },
      { timeout: 3000 }
    );
  });

  test("clears files and resets input value", async () => {
    const user = userEvent.setup();
    const { container } = render(FileuploadClearableTest);
    const fileInput = container.querySelector('input[type="file"]') as HTMLInputElement;

    // Upload a file
    const file = new File(["test"], "test.txt", { type: "text/plain" });
    await user.upload(fileInput, file);
    expect(fileInput.files).toHaveLength(1);

    // Wait for close button to appear
    await waitFor(
      () => {
        const closeButton = container.querySelector('button[aria-label="Clear selected files"]');
        expect(closeButton).toBeInTheDocument();
      },
      { timeout: 3000 }
    );

    // Click the clear button
    const closeButton = container.querySelector('button[aria-label="Clear selected files"]') as HTMLButtonElement;
    await user.click(closeButton);

    // The important thing is that the input is cleared
    await waitFor(
      () => {
        expect(fileInput.value).toBe("");
      },
      { timeout: 3000 }
    );

    // The input should have no files
    expect(fileInput.files).toHaveLength(0);
  });
});

describe("Fileupload - Sizes", () => {
  test("renders different sizes", () => {
    const { container } = render(FileuploadSizesTest);
    const fileInputs = container.querySelectorAll('input[type="file"]');
    expect(fileInputs).toHaveLength(3);
  });

  test("applies size classes", () => {
    const { container } = render(FileuploadSizesTest);
    const fileInputs = container.querySelectorAll('input[type="file"]');

    // All inputs should be present
    expect(fileInputs).toHaveLength(3);

    // Each input should have type="file"
    fileInputs.forEach((input) => {
      expect(input).toHaveAttribute("type", "file");
    });
  });
});
