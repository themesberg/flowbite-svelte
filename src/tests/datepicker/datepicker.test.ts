import { cleanup, render, screen, waitFor } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicDatepickerTest from "./basic-datepicker.test.svelte";
import InlineDatepickerTest from "./inline-datepicker.test.svelte";
import DisabledDatepickerTest from "./disabled-datepicker.test.svelte";
import RangeDatepickerTest from "./range-datepicker.test.svelte";
import ActionButtonsDatepickerTest from "./action-buttons-datepicker.test.svelte";
import TitleDatepickerTest from "./title-datepicker.test.svelte";
import ColorDatepickerTest from "./color-datepicker.test.svelte";
import CustomClassDatepickerTest from "./custom-class-datepicker.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Datepicker Component", () => {
  describe("Basic Rendering", () => {
    test("renders datepicker input correctly", () => {
      render(BasicDatepickerTest);
      const input = screen.getByPlaceholderText("Select a date");

      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute("type", "text");
      expect(input).toHaveAttribute("aria-haspopup", "dialog");
    });

    test("renders calendar button", () => {
      render(BasicDatepickerTest);
      const button = screen.getByRole("button", { name: /date picker/i });

      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute("type", "button");
    });

    test("calendar is not visible by default", () => {
      render(BasicDatepickerTest);
      const calendar = screen.queryByRole("dialog");

      expect(calendar).not.toBeInTheDocument();
    });

    test("disabled prop disables input and button", () => {
      render(DisabledDatepickerTest);
      const input = screen.getByPlaceholderText("Select a date");
      const button = screen.getByRole("button");

      expect(input).toBeDisabled();
      expect(button).toBeDisabled();
    });

    test("custom class is applied", async () => {
      render(CustomClassDatepickerTest);
      const input = screen.getByPlaceholderText("Select a date");

      // Focus to open the calendar
      input.focus();

      // Wait for calendar to appear (transition takes time)
      await waitFor(() => {
        const calendar = screen.getByRole("dialog");
        expect(calendar).toHaveClass("custom-datepicker-class");
      });
    });
  });

  describe("Inline Mode", () => {
    test("inline datepicker shows calendar immediately", () => {
      render(InlineDatepickerTest);
      const calendar = screen.getByRole("dialog");

      expect(calendar).toBeInTheDocument();
      expect(calendar).toBeVisible();
    });

    test("inline datepicker does not render input field", () => {
      render(InlineDatepickerTest);
      const input = screen.queryByPlaceholderText("Select a date");

      expect(input).not.toBeInTheDocument();
    });
  });

  describe("Calendar Opening", () => {
    test("clicking button opens calendar", async () => {
      const user = userEvent.setup();
      render(BasicDatepickerTest);
      const button = screen.getByRole("button", { name: /open date picker/i });

      await user.click(button);

      await waitFor(() => {
        const calendar = screen.getByRole("dialog");
        expect(calendar).toBeInTheDocument();
      });
    });

    test("focusing input opens calendar", async () => {
      render(BasicDatepickerTest);
      const input = screen.getByPlaceholderText("Select a date");

      input.focus();

      await waitFor(() => {
        const calendar = screen.getByRole("dialog");
        expect(calendar).toBeInTheDocument();
      });
    });

    test("button aria-label changes when calendar opens", async () => {
      const user = userEvent.setup();
      render(BasicDatepickerTest);
      const button = screen.getByRole("button", { name: /open date picker/i });

      await user.click(button);

      await waitFor(() => {
        expect(button).toHaveAttribute("aria-label", "Close date picker");
      });
    });
  });

  describe("Calendar Navigation", () => {
    test("renders navigation buttons", async () => {
      render(BasicDatepickerTest);
      const input = screen.getByPlaceholderText("Select a date");
      input.focus();

      await waitFor(() => {
        const prevButton = screen.getByRole("button", { name: "Previous month" });
        const nextButton = screen.getByRole("button", { name: "Next month" });

        expect(prevButton).toBeInTheDocument();
        expect(nextButton).toBeInTheDocument();
      });
    });

    test("displays current month and year", async () => {
      render(BasicDatepickerTest);
      const input = screen.getByPlaceholderText("Select a date");
      input.focus();

      await waitFor(() => {
        const calendar = screen.getByRole("dialog");
        const currentDate = new Date();
        const monthYear = currentDate.toLocaleString("default", { month: "long", year: "numeric" });

        expect(calendar).toHaveTextContent(monthYear);
      });
    });

    test("renders weekday headers", async () => {
      render(BasicDatepickerTest);
      const input = screen.getByPlaceholderText("Select a date");
      input.focus();

      await waitFor(() => {
        const calendar = screen.getByRole("dialog");
        const grid = calendar.querySelector('[role="grid"]');
        const headers = grid?.querySelectorAll('[role="columnheader"]');

        expect(headers?.length).toBe(7); // 7 days of the week
      });
    });

    test("renders day cells", async () => {
      render(BasicDatepickerTest);
      const input = screen.getByPlaceholderText("Select a date");
      input.focus();

      await waitFor(() => {
        const calendar = screen.getByRole("dialog");
        const grid = calendar.querySelector('[role="grid"]');
        const cells = grid?.querySelectorAll('[role="gridcell"]');

        // Should have 35 or 42 cells depending on month
        expect(cells?.length).toBeGreaterThanOrEqual(35);
      });
    });
  });

  describe("Title Prop", () => {
    test("renders title when provided", async () => {
      render(TitleDatepickerTest);
      const input = screen.getByPlaceholderText("Select a date");
      input.focus();

      await waitFor(() => {
        const title = screen.getByText("Choose a date");
        expect(title).toBeInTheDocument();
      });
    });
  });

  describe("Action Buttons", () => {
    test("action buttons are not visible by default", async () => {
      render(BasicDatepickerTest);
      const input = screen.getByPlaceholderText("Select a date");
      input.focus();

      await waitFor(() => {
        const todayButton = screen.queryByRole("button", { name: "Today" });
        expect(todayButton).not.toBeInTheDocument();
      });
    });

    test("action buttons are visible when showActionButtons is true", async () => {
      render(ActionButtonsDatepickerTest);
      const input = screen.getByPlaceholderText("Select a date");
      input.focus();

      await waitFor(() => {
        const todayButton = screen.getByRole("button", { name: "Today" });
        const clearButton = screen.getByRole("button", { name: "Clear" });
        const applyButton = screen.getByRole("button", { name: "Apply" });

        expect(todayButton).toBeInTheDocument();
        expect(clearButton).toBeInTheDocument();
        expect(applyButton).toBeInTheDocument();
      });
    });
  });

  describe("Range Mode", () => {
    test("placeholder shows range format", () => {
      render(RangeDatepickerTest);
      const input = screen.getByPlaceholderText("Select date range");

      expect(input).toBeInTheDocument();
    });

    test("input shows range format with dash separator", () => {
      render(RangeDatepickerTest);
      const input = screen.getByPlaceholderText("Select date range") as HTMLInputElement;

      // The input value format should include " - " for range
      expect(input.value).toBe(" - "); // Empty range shows just the separator
    });
  });

  describe("Color Variants", () => {
    test("renders datepickers with different colors", () => {
      render(ColorDatepickerTest);

      const primaryInput = screen.getByPlaceholderText("Primary");
      const redInput = screen.getByPlaceholderText("Red");
      const greenInput = screen.getByPlaceholderText("Green");

      expect(primaryInput).toBeInTheDocument();
      expect(redInput).toBeInTheDocument();
      expect(greenInput).toBeInTheDocument();

      // Verify color-specific classes are applied
      expect(primaryInput).toHaveClass("focus:ring-primary-500");
      expect(redInput).toHaveClass("focus:ring-red-500");
      expect(greenInput).toHaveClass("focus:ring-green-500");
    });
  });

  describe("Accessibility", () => {
    test("input has proper aria attributes", () => {
      render(BasicDatepickerTest);
      const input = screen.getByPlaceholderText("Select a date");

      expect(input).toHaveAttribute("aria-haspopup", "dialog");
    });

    test("calendar has dialog role", async () => {
      render(BasicDatepickerTest);
      const input = screen.getByPlaceholderText("Select a date");
      input.focus();

      await waitFor(() => {
        const calendar = screen.getByRole("dialog");
        expect(calendar).toHaveAttribute("role", "dialog");
        expect(calendar).toHaveAttribute("aria-label", "Calendar");
      });
    });

    test("day buttons have aria-label", async () => {
      render(BasicDatepickerTest);
      const input = screen.getByPlaceholderText("Select a date");
      input.focus();

      await waitFor(() => {
        const calendar = screen.getByRole("dialog");
        const grid = calendar.querySelector('[role="grid"]');
        const dayCells = grid?.querySelectorAll('[role="gridcell"]');
        const firstDay = dayCells?.[0];

        expect(firstDay).toHaveAttribute("aria-label");
      });
    });

    test("navigation buttons have descriptive labels", async () => {
      render(BasicDatepickerTest);
      const input = screen.getByPlaceholderText("Select a date");
      input.focus();

      await waitFor(() => {
        const prevButton = screen.getByRole("button", { name: "Previous month" });
        const nextButton = screen.getByRole("button", { name: "Next month" });

        expect(prevButton).toHaveAttribute("aria-label", "Previous month");
        expect(nextButton).toHaveAttribute("aria-label", "Next month");
      });
    });
  });

  describe("Input Styling", () => {
    test("input has default styling classes", () => {
      render(BasicDatepickerTest);
      const input = screen.getByPlaceholderText("Select a date");

      expect(input).toHaveClass("w-full", "rounded-md", "border", "px-4", "py-2", "text-sm");
    });

    test("disabled input has disabled styling", () => {
      render(DisabledDatepickerTest);
      const input = screen.getByPlaceholderText("Select a date");

      expect(input).toHaveClass("disabled:cursor-not-allowed", "disabled:opacity-50");
    });
  });

  describe("Grid Structure", () => {
    test("calendar grid has correct structure", async () => {
      render(BasicDatepickerTest);
      const input = screen.getByPlaceholderText("Select a date");
      input.focus();

      await waitFor(() => {
        const calendar = screen.getByRole("dialog");
        const grid = calendar.querySelector('[role="grid"]');

        expect(grid).toBeInTheDocument();
        expect(grid).toHaveClass("grid", "grid-cols-7");
      });
    });
  });

  describe("Button Icon", () => {
    test("calendar button contains SVG icon", () => {
      render(BasicDatepickerTest);
      const button = screen.getByRole("button", { name: /date picker/i });
      const svg = button.querySelector("svg");

      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
    });
  });
});
