import { cleanup, render, screen, waitFor } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import { userEvent } from "@testing-library/user-event";

import PhoneInputBasicTest from "./phoneinput-basic.test.svelte";
import PhoneInputNoIconTest from "./phoneinput-no-icon.test.svelte";
import PhoneInputFloatingTest from "./phoneinput-floating.test.svelte";
import PhoneInputFloatingNoIconTest from "./phoneinput-floating-no-icon.test.svelte";
import PhoneInputCountryCodeTest from "./phoneinput-country-code.test.svelte";
import PhoneInputDisabledTest from "./phoneinput-disabled.test.svelte";
import PhoneInputValueBindingTest from "./phoneinput-value-binding.test.svelte";
import PhoneInputCustomPatternTest from "./phoneinput-custom-pattern.test.svelte";
import PhoneInputRequiredTest from "./phoneinput-required.test.svelte";

afterEach(() => {
  cleanup();
});

describe("PhoneInput Component", () => {
  describe("Basic Rendering", () => {
    test("renders phone input element", () => {
      render(PhoneInputBasicTest);
      const input = screen.getByPlaceholderText("123-456-7890");

      expect(input).toBeInTheDocument();
      expect(input.tagName).toBe("INPUT");
    });

    test("renders as tel input type", () => {
      render(PhoneInputBasicTest);
      const input = screen.getByPlaceholderText("123-456-7890");

      expect(input).toHaveAttribute("type", "tel");
    });

    test("has default pattern attribute", () => {
      render(PhoneInputBasicTest);
      const input = screen.getByPlaceholderText("123-456-7890");

      expect(input).toHaveAttribute("pattern", "[0-9]{3}-[0-9]{3}-[0-9]{4}");
    });

    test("renders with id attribute", () => {
      render(PhoneInputBasicTest);
      const input = screen.getByPlaceholderText("123-456-7890");

      expect(input).toHaveAttribute("id", "basic-phone");
    });

    test("renders with name attribute", () => {
      render(PhoneInputBasicTest);
      const input = screen.getByPlaceholderText("123-456-7890");

      expect(input).toHaveAttribute("name", "phone");
    });
  });

  describe("Phone Icon", () => {
    test("renders with phone icon by default", () => {
      const { container } = render(PhoneInputBasicTest);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    test("does not render phone icon when phoneIcon is false", () => {
      const { container } = render(PhoneInputNoIconTest);
      const svg = container.querySelector("svg");

      expect(svg).not.toBeInTheDocument();
    });

    test("phone icon has correct viewBox", () => {
      const { container } = render(PhoneInputBasicTest);
      const svg = container.querySelector("svg");

      expect(svg).toHaveAttribute("viewBox", "0 0 19 18");
    });
  });

  describe("Phone Type Variants", () => {
    test("renders default type correctly", () => {
      render(PhoneInputBasicTest);
      const input = screen.getByPlaceholderText("123-456-7890");

      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute("type", "tel");
    });

    test("renders countryCode type correctly", () => {
      render(PhoneInputCountryCodeTest);
      const input = screen.getByPlaceholderText("+1 (123) 456-7890");

      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute("type", "tel");
    });

    test("renders floating type with label", () => {
      render(PhoneInputFloatingTest);
      const input = screen.getByLabelText("Your Phone Number");
      const label = screen.getByText("Your Phone Number");

      expect(input).toBeInTheDocument();
      expect(label).toBeInTheDocument();
      expect(label.tagName).toBe("LABEL");
    });

    test("floating label has correct for attribute", () => {
      render(PhoneInputFloatingTest);
      const label = screen.getByText("Your Phone Number");

      expect(label).toHaveAttribute("for", "floating-phone");
    });

    test("floating type input has correct id", () => {
      render(PhoneInputFloatingTest);
      const input = screen.getByLabelText("Your Phone Number");

      expect(input).toHaveAttribute("id", "floating-phone");
    });
  });

  describe("Icon in Different Types", () => {
    test("floating type renders with icon by default", () => {
      const { container } = render(PhoneInputFloatingTest);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
    });

    test("floating type can hide icon", () => {
      const { container } = render(PhoneInputFloatingNoIconTest);
      const svg = container.querySelector("svg");

      expect(svg).not.toBeInTheDocument();
    });

    test("countryCode type renders with icon by default", () => {
      const { container } = render(PhoneInputCountryCodeTest);
      const svg = container.querySelector("svg");

      expect(svg).toBeInTheDocument();
    });
  });

  describe("User Input", () => {
    test("accepts user input", async () => {
      const user = userEvent.setup();
      render(PhoneInputBasicTest);
      const input = screen.getByPlaceholderText("123-456-7890") as HTMLInputElement;

      await user.type(input, "555-123-4567");

      expect(input.value).toBe("555-123-4567");
    });

    test("can be focused", async () => {
      const user = userEvent.setup();
      render(PhoneInputBasicTest);
      const input = screen.getByPlaceholderText("123-456-7890");

      await user.click(input);

      expect(input).toHaveFocus();
    });

    test("can be cleared and retyped", async () => {
      const user = userEvent.setup();
      render(PhoneInputBasicTest);
      const input = screen.getByPlaceholderText("123-456-7890") as HTMLInputElement;

      await user.type(input, "111-222-3333");
      expect(input.value).toBe("111-222-3333");

      await user.clear(input);
      expect(input.value).toBe("");

      await user.type(input, "444-555-6666");
      expect(input.value).toBe("444-555-6666");
    });
  });

  describe("Value Binding", () => {
    test("displays bound value", async () => {
      const user = userEvent.setup();
      render(PhoneInputValueBindingTest);

      const input = screen.getByTestId("bound-input") as HTMLInputElement;
      const display = screen.getByTestId("display-value");

      // Initially empty
      expect(input.value).toBe("");
      expect(display).toHaveTextContent("");

      // Type in input
      await user.type(input, "555-123-4567");

      // Value should update - wait for reactive updates
      expect(input.value).toBe("555-123-4567");
      await waitFor(() => {
        expect(display).toHaveTextContent("555-123-4567");
      });
    });

    test("input is editable", async () => {
      const user = userEvent.setup();
      render(PhoneInputValueBindingTest);

      const input = screen.getByTestId("bound-input") as HTMLInputElement;
      const display = screen.getByTestId("display-value");

      await user.type(input, "123");
      expect(input.value).toBe("123");

      await user.type(input, "-456-7890");
      expect(input.value).toBe("123-456-7890");

      // Verify binding works
      await waitFor(() => {
        expect(display).toHaveTextContent("123-456-7890");
      });
    });
  });

  describe("Disabled State", () => {
    test("disabled input is disabled", () => {
      render(PhoneInputDisabledTest);
      const input = screen.getByPlaceholderText("Disabled input");

      expect(input).toBeDisabled();
    });

    test("disabled input shows value but is not editable", async () => {
      const user = userEvent.setup();
      render(PhoneInputDisabledTest);
      const input = screen.getByPlaceholderText("Disabled input") as HTMLInputElement;

      expect(input.value).toBe("555-123-4567");
      expect(input).toBeDisabled();

      // Attempt to type should not change value
      await user.type(input, "999");
      expect(input.value).toBe("555-123-4567");
    });
  });

  describe("Custom Pattern", () => {
    test("accepts custom pattern attribute", () => {
      render(PhoneInputCustomPatternTest);
      const input = screen.getByPlaceholderText("1234567890");

      expect(input).toHaveAttribute("pattern", "[0-9]{10}");
    });

    test("has title attribute for pattern hint", () => {
      render(PhoneInputCustomPatternTest);
      const input = screen.getByPlaceholderText("1234567890");

      expect(input).toHaveAttribute("title", "Enter 10 digits");
    });
  });

  describe("Required Attribute", () => {
    test("input can be required", () => {
      render(PhoneInputRequiredTest);
      const input = screen.getByPlaceholderText("Required field");

      expect(input).toHaveAttribute("required");
      expect(input).toBeRequired();
    });
  });

  describe("Accessibility", () => {
    test("input is accessible by placeholder", () => {
      render(PhoneInputBasicTest);
      const input = screen.getByPlaceholderText("123-456-7890");

      expect(input).toBeInTheDocument();
    });

    test("floating input is accessible by label", () => {
      render(PhoneInputFloatingTest);
      const input = screen.getByLabelText("Your Phone Number");

      expect(input).toBeInTheDocument();
    });

    test("phone icon has aria-hidden attribute", () => {
      const { container } = render(PhoneInputBasicTest);
      const svg = container.querySelector("svg");

      expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    test("label and input are properly associated in floating variant", () => {
      render(PhoneInputFloatingTest);
      const label = screen.getByText("Your Phone Number");
      const input = screen.getByLabelText("Your Phone Number");

      expect(label).toHaveAttribute("for", "floating-phone");
      expect(input).toHaveAttribute("id", "floating-phone");
    });
  });

  describe("DOM Structure", () => {
    test("input is wrapped in a div with relative positioning", () => {
      const { container } = render(PhoneInputBasicTest);
      const wrapper = container.querySelector("div.relative");

      expect(wrapper).toBeInTheDocument();
    });

    test("icon and input are siblings in default type", () => {
      const { container } = render(PhoneInputBasicTest);
      const wrapper = container.querySelector("div.relative");
      const input = wrapper?.querySelector("input");
      const iconWrapper = wrapper?.querySelector("div");

      expect(wrapper).toBeInTheDocument();
      expect(input).toBeInTheDocument();
      expect(iconWrapper).toBeInTheDocument();
    });

    test("floating type has correct structure", () => {
      const { container } = render(PhoneInputFloatingTest);
      const wrapper = container.querySelector("div.relative");
      const input = wrapper?.querySelector("input");
      const label = wrapper?.querySelector("label");
      const iconWrapper = wrapper?.querySelector("span");

      expect(wrapper).toBeInTheDocument();
      expect(input).toBeInTheDocument();
      expect(label).toBeInTheDocument();
      expect(iconWrapper).toBeInTheDocument();
    });
  });

  describe("Placeholder", () => {
    test("displays placeholder text", () => {
      render(PhoneInputBasicTest);
      const input = screen.getByPlaceholderText("123-456-7890");

      expect(input).toHaveAttribute("placeholder", "123-456-7890");
    });

    test("different types can have different placeholders", () => {
      render(PhoneInputCountryCodeTest);
      const input = screen.getByPlaceholderText("+1 (123) 456-7890");

      expect(input).toHaveAttribute("placeholder", "+1 (123) 456-7890");
    });
  });
});
