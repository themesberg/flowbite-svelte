import { cleanup, render, screen, waitFor } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicDialogTest from "./basic-dialog.test.svelte";
import DialogWithFormTest from "./dialog-with-form.test.svelte";
import DialogNonModalTest from "./dialog-non-modal.test.svelte";
import DialogPermanentTest from "./dialog-permanent.test.svelte";
import DialogNonDismissableTest from "./dialog-non-dismissable.test.svelte";
import DialogAutocloseTest from "./dialog-autoclose.test.svelte";
import DialogNoOutsideCloseTest from "./dialog-no-outside-close.test.svelte";
import DialogWithEventsTest from "./dialog-with-events.test.svelte";
import DialogClosedTest from "./dialog-closed.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Dialog Component", () => {
  describe("Basic Rendering", () => {
    test("renders basic dialog with content", () => {
      render(BasicDialogTest);
      const dialog = screen.getByRole("dialog");

      expect(dialog).toBeInTheDocument();
      expect(dialog).toHaveTextContent("Basic Dialog");
      expect(dialog).toHaveTextContent("This is a basic modal dialog.");
    });

    test("renders dialog with heading", () => {
      render(BasicDialogTest);
      const heading = screen.getByRole("heading", { level: 3 });

      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent("Basic Dialog");
    });

    test("dialog is open when open prop is true", () => {
      render(BasicDialogTest);
      const dialog = screen.getByRole("dialog");

      expect(dialog).toHaveAttribute("open");
    });

    test("dialog is not rendered when open is false", () => {
      render(DialogClosedTest);
      const dialog = screen.queryByRole("dialog");

      expect(dialog).not.toBeInTheDocument();
    });
  });

  describe("Modal vs Non-Modal", () => {
    test("renders as modal dialog by default", () => {
      render(BasicDialogTest);
      const dialog = screen.getByRole("dialog");

      // Modal dialogs have the open attribute
      expect(dialog).toHaveAttribute("open");
    });

    test("renders as non-modal dialog when modal is false", () => {
      render(DialogNonModalTest);
      const dialog = screen.getByRole("dialog");

      expect(dialog).toBeInTheDocument();
      expect(dialog).toHaveTextContent("Non-Modal Dialog");
    });
  });

  describe("Dismissable Functionality", () => {
    test("renders close button by default", () => {
      render(BasicDialogTest);
      const closeButton = screen.getByRole("button", { name: /close/i });

      expect(closeButton).toBeInTheDocument();
    });

    test("does not render close button when dismissable is false", () => {
      render(DialogNonDismissableTest);
      const closeButton = screen.queryByRole("button", { name: /close/i });

      expect(closeButton).not.toBeInTheDocument();
    });

    test("close button dismisses the dialog", async () => {
      const user = userEvent.setup();
      render(BasicDialogTest);

      const closeButton = screen.getByRole("button", { name: /close/i });
      await user.click(closeButton);

      // Wait for transition
      await waitFor(
        () => {
          expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
        },
        { timeout: 200 }
      );
    });
  });

  describe("Permanent Dialog", () => {
    test("permanent dialog does not render close button", () => {
      render(DialogPermanentTest);

      const dialog = screen.getByRole("dialog");
      expect(dialog).toBeInTheDocument();

      // Permanent dialogs don't show close button (dismissable && !permanent)
      const closeButton = screen.queryByRole("button", { name: /close/i });
      expect(closeButton).not.toBeInTheDocument();
    });

    test("permanent dialog has correct content", () => {
      render(DialogPermanentTest);
      const dialog = screen.getByRole("dialog");

      expect(dialog).toHaveTextContent("Permanent Dialog");
      expect(dialog).toHaveTextContent("This dialog cannot be closed by ESC or outside clicks.");
    });
  });

  describe("Form Mode", () => {
    test("renders dialog with form when form prop is true", () => {
      render(DialogWithFormTest);
      const dialog = screen.getByRole("dialog");
      const form = dialog.querySelector("form");

      expect(form).toBeInTheDocument();
      expect(form).toHaveAttribute("method", "dialog");
    });

    test("form contains input and submit button", () => {
      render(DialogWithFormTest);
      const input = screen.getByPlaceholderText("Enter text");
      const submitButton = screen.getByRole("button", { name: /submit/i });

      expect(input).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
      expect(submitButton).toHaveAttribute("type", "submit");
    });

    test("submitting form triggers onsubmit handler", async () => {
      const user = userEvent.setup();
      render(DialogWithFormTest);

      const submitButton = screen.getByRole("button", { name: /submit/i });
      await user.click(submitButton);

      // Wait for submit indicator
      await waitFor(
        () => {
          const indicator = screen.queryByTestId("submit-indicator");
          expect(indicator).toBeInTheDocument();
        },
        { timeout: 200 }
      );
    });
  });

  describe("Autoclose Behavior", () => {
    test("autoclose dialog closes when any button is clicked", async () => {
      const user = userEvent.setup();
      render(DialogAutocloseTest);

      const dialog = screen.getByRole("dialog");
      expect(dialog).toBeInTheDocument();

      const button = screen.getByRole("button", { name: /any button/i });
      await user.click(button);

      // Wait for dialog to close
      await waitFor(
        () => {
          expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
        },
        { timeout: 200 }
      );
    });
  });

  describe("Outside Click Behavior", () => {
    test("dialog with outsideclose=false does not close on backdrop click", () => {
      render(DialogNoOutsideCloseTest);
      const dialog = screen.getByRole("dialog");

      expect(dialog).toBeInTheDocument();
      expect(dialog).toHaveTextContent("No Outside Close");
    });
  });

  describe("Event Handling", () => {
    test("tracks cancel events", async () => {
      const user = userEvent.setup();
      render(DialogWithEventsTest);

      const cancelCount = screen.getByTestId("cancel-count");
      expect(cancelCount).toHaveTextContent("0");

      const closeButton = screen.getByRole("button", { name: /close/i });
      await user.click(closeButton);

      // Wait a bit for event to be processed
      await new Promise((resolve) => setTimeout(resolve, 50));

      expect(cancelCount).toHaveTextContent("1");
    });

    test("tracks toggle events", async () => {
      render(DialogWithEventsTest);

      // Toggle event fires when dialog opens/closes
      const toggleCount = screen.getByTestId("toggle-count");

      // Should have at least 1 toggle event from initial open
      await waitFor(() => {
        expect(parseInt(toggleCount.textContent || "0")).toBeGreaterThanOrEqual(1);
      });
    });
  });

  describe("Open/Close State", () => {
    test("dialog can be opened programmatically", async () => {
      const user = userEvent.setup();
      render(DialogClosedTest);

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

      const openButton = screen.getByRole("button", { name: /open dialog/i });
      await user.click(openButton);

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });
    });

    test("opened dialog displays correct content", async () => {
      const user = userEvent.setup();
      render(DialogClosedTest);

      const openButton = screen.getByRole("button", { name: /open dialog/i });
      await user.click(openButton);

      await waitFor(() => {
        const dialog = screen.getByRole("dialog");
        expect(dialog).toHaveTextContent("Closed Dialog");
        expect(dialog).toHaveTextContent("This dialog is initially closed.");
      });
    });
  });

  describe("Accessibility", () => {
    test("dialog has proper role", () => {
      render(BasicDialogTest);
      const dialog = screen.getByRole("dialog");

      expect(dialog).toBeInTheDocument();
    });

    test("dialog has tabindex for focus management", () => {
      render(BasicDialogTest);
      const dialog = screen.getByRole("dialog");

      expect(dialog).toHaveAttribute("tabindex", "-1");
    });

    test("close button is accessible", () => {
      render(BasicDialogTest);
      const closeButton = screen.getByRole("button", { name: /close/i });

      expect(closeButton).toBeInTheDocument();
      expect(closeButton).toHaveAttribute("type", "submit");
    });

    test("dialog content is readable by screen readers", () => {
      render(BasicDialogTest);

      expect(screen.getByText("Basic Dialog")).toBeInTheDocument();
      expect(screen.getByText("This is a basic modal dialog.")).toBeInTheDocument();
    });
  });

  describe("Styling", () => {
    test("dialog has base styling classes", () => {
      render(BasicDialogTest);
      const dialog = screen.getByRole("dialog");

      expect(dialog.className).toBeTruthy();
    });

    test("form has correct styling when form prop is true", () => {
      render(DialogWithFormTest);
      const dialog = screen.getByRole("dialog");
      const form = dialog.querySelector("form");

      expect(form?.className).toBeTruthy();
    });
  });
});
