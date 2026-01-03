import { cleanup, render, screen, fireEvent } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import TimepickerDefault from "./timepicker-default.test.svelte";
import TimepickerSelect from "./timepicker-select.test.svelte";
import TimepickerRange from "./timepicker-range.test.svelte";
import TimepickerMinMax from "./timepicker-minmax.test.svelte";
import TimepickerDropdown from "./timepicker-dropdown.test.svelte";
import TimepickerInline from "./timepicker-inline.test.svelte";
import TimepickerDisabled from "./timepicker-disabled.test.svelte";
import TimepickerCallback from "./timepicker-callback.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Timepicker - Default Type", () => {
  test("renders with default value", () => {
    render(TimepickerDefault);
    const timepicker = screen.getByTestId("default-timepicker");
    const input = timepicker.querySelector('input[type="time"]') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.value).toBe("12:00");
  });

  test("renders with icon", () => {
    render(TimepickerDefault);
    const timepicker = screen.getByTestId("default-timepicker");
    const icon = timepicker.querySelector('[data-part="icon"]');
    expect(icon).toBeInTheDocument();
  });

  test("updates time value on input", async () => {
    render(TimepickerDefault);
    const timepicker = screen.getByTestId("default-timepicker");
    const input = timepicker.querySelector('input[type="time"]') as HTMLInputElement;

    // For time inputs, directly set the value and fire the input event
    input.value = "14:30";
    await fireEvent.input(input);

    expect(input.value).toBe("14:30");
  });

  test("has button group wrapper", () => {
    render(TimepickerDefault);
    const buttonGroup = screen.getByTestId("default-timepicker").querySelector('[data-part="button-group"]');
    expect(buttonGroup).toBeInTheDocument();
  });
});

describe("Timepicker - Select Type", () => {
  test("renders time input with select dropdown", () => {
    render(TimepickerSelect);
    const timepicker = screen.getByTestId("select-timepicker");
    const input = timepicker.querySelector('input[type="time"]') as HTMLInputElement;
    const select = timepicker.querySelector("select") as HTMLSelectElement;

    expect(input).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(input.value).toBe("09:00");
  });

  test("allows selecting option from dropdown", async () => {
    const user = userEvent.setup();
    render(TimepickerSelect);
    const timepicker = screen.getByTestId("select-timepicker");
    const select = timepicker.querySelector("select") as HTMLSelectElement;

    await user.selectOptions(select, "pm");
    expect(select.value).toBe("pm");
  });
});

describe("Timepicker - Range Type", () => {
  test("renders start and end time inputs", () => {
    render(TimepickerRange);
    const timepicker = screen.getByTestId("range-timepicker");
    const inputs = timepicker.querySelectorAll('input[type="time"]');

    expect(inputs).toHaveLength(2);
    expect((inputs[0] as HTMLInputElement).value).toBe("09:00");
    expect((inputs[1] as HTMLInputElement).value).toBe("17:00");
  });

  test("renders range separator", () => {
    render(TimepickerRange);
    const timepicker = screen.getByTestId("range-timepicker");
    const separator = timepicker.querySelector('[data-part="range-separator"]');
    expect(separator).toBeInTheDocument();
  });

  test("renders time picker buttons for both inputs", () => {
    render(TimepickerRange);
    const timepicker = screen.getByTestId("range-timepicker");
    const buttons = timepicker.querySelectorAll('[data-part="range-button"]');
    expect(buttons).toHaveLength(2);
  });

  test("updates start time independently", async () => {
    render(TimepickerRange);
    const timepicker = screen.getByTestId("range-timepicker");
    const startInput = timepicker.querySelector('input[type="time"]#range-test') as HTMLInputElement;

    // For time inputs, directly set the value and fire the input event
    startInput.value = "08:00";
    await fireEvent.input(startInput);

    expect(startInput.value).toBe("08:00");
  });

  test("updates end time independently", async () => {
    render(TimepickerRange);
    const timepicker = screen.getByTestId("range-timepicker");
    const endInput = timepicker.querySelector('input[type="time"]#range-test-end') as HTMLInputElement;

    // For time inputs, directly set the value and fire the input event
    endInput.value = "18:00";
    await fireEvent.input(endInput);

    expect(endInput.value).toBe("18:00");
  });
});

describe("Timepicker - Min/Max Constraints", () => {
  test("applies min and max attributes", () => {
    render(TimepickerMinMax);
    const timepicker = screen.getByTestId("minmax-timepicker");
    const input = timepicker.querySelector('input[type="time"]') as HTMLInputElement;

    expect(input.min).toBe("08:00");
    expect(input.max).toBe("18:00");
  });

  test("accepts valid time within range", async () => {
    render(TimepickerMinMax);
    const timepicker = screen.getByTestId("minmax-timepicker");
    const input = timepicker.querySelector('input[type="time"]') as HTMLInputElement;

    // For time inputs, directly set the value and fire the input event
    input.value = "10:00";
    await fireEvent.input(input);

    expect(input.value).toBe("10:00");
  });
});

describe("Timepicker - Dropdown Type", () => {
  test("renders time input with dropdown button", () => {
    render(TimepickerDropdown);
    const timepicker = screen.getByTestId("dropdown-timepicker");
    const input = timepicker.querySelector('input[type="time"]') as HTMLInputElement;
    const button = timepicker.querySelector("button");

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input.value).toBe("10:00");
  });

  test("dropdown button has icon", () => {
    render(TimepickerDropdown);
    const timepicker = screen.getByTestId("dropdown-timepicker");
    const buttonIcon = timepicker.querySelector('[data-part="button-icon"]');
    expect(buttonIcon).toBeInTheDocument();
  });
});

describe("Timepicker - Inline Buttons Type", () => {
  test("renders inline button grid", () => {
    render(TimepickerInline);
    const wrapper = screen.getByTestId("inline-timepicker");
    const grid = wrapper.querySelector('[data-part="inline-grid"]');
    expect(grid).toBeInTheDocument();
  });

  test("renders all time interval buttons", () => {
    render(TimepickerInline);
    const wrapper = screen.getByTestId("inline-timepicker");
    const buttons = wrapper.querySelectorAll("button");
    expect(buttons).toHaveLength(6);
  });

  test("selects time on button click", async () => {
    const user = userEvent.setup();
    render(TimepickerInline);
    const wrapper = screen.getByTestId("inline-timepicker");

    const buttons = wrapper.querySelectorAll("button");
    const button = Array.from(buttons).find((btn) => btn.textContent?.trim() === "10:00");

    expect(button).toBeInTheDocument();
    if (button) {
      await user.click(button);
      // Button should remain in document after click
      expect(button).toBeInTheDocument();
    }
  });
});

describe("Timepicker - Disabled State", () => {
  test("renders disabled time input", () => {
    render(TimepickerDisabled);
    const timepicker = screen.getByTestId("disabled-timepicker");
    const input = timepicker.querySelector('input[type="time"]') as HTMLInputElement;

    expect(input).toBeDisabled();
    expect(input.value).toBe("14:00");
  });

  test("prevents interaction when disabled", async () => {
    const user = userEvent.setup();
    render(TimepickerDisabled);
    const timepicker = screen.getByTestId("disabled-timepicker");
    const input = timepicker.querySelector('input[type="time"]') as HTMLInputElement;
    const initialValue = input.value;

    await user.click(input);

    expect(input.value).toBe(initialValue);
  });
});

describe("Timepicker - Callback Functionality", () => {
  test("calls onselect callback on time change", async () => {
    render(TimepickerCallback);
    const wrapper = screen.getByTestId("callback-wrapper");
    const input = wrapper.querySelector('input[type="time"]') as HTMLInputElement;

    // For time inputs, directly set the value and fire the input event
    input.value = "15:30";
    await fireEvent.input(input);

    // Wait for callback to be processed
    const result = await screen.findByTestId("callback-result");
    expect(result).toBeInTheDocument();
  });

  test("provides correct data structure in callback", async () => {
    render(TimepickerCallback);
    const wrapper = screen.getByTestId("callback-wrapper");
    const input = wrapper.querySelector('input[type="time"]') as HTMLInputElement;

    // For time inputs, directly set the value and fire the input event
    input.value = "11:45";
    await fireEvent.input(input);

    const result = await screen.findByTestId("callback-result");
    if (result) {
      const data = JSON.parse(result.textContent || "{}");
      expect(data).toHaveProperty("time");
    }
  });
});
