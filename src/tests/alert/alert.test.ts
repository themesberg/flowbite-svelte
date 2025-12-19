import { cleanup, render, screen, waitForElementToBeRemoved } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicAlertTest from "./basic-alert.test.svelte";
import ColoredAlertTest from "./colored-alert.test.svelte";
import DismissableAlertTest from "./dismissable-alert.test.svelte";
import IconAlertTest from "./icon-alert.test.svelte";
import BorderedAlertTest from "./bordered-alert.test.svelte";
import HiddenAlertTest from "./hidden-alert.test.svelte";
import CustomCloseIconAlertTest from "./custom-close-icon-alert.test.svelte";
import BorderAccentAlertTest from "./border-accent-alert.test.svelte";
import CustomColorAlertTest from "./custom-color-alert.test.svelte";
import CloseEventAlertTest from "./close-event-alert.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Alert Component", () => {
  describe("Basic Functionality", () => {
    test("renders basic alert with correct role", () => {
      render(BasicAlertTest);
      const alert = screen.getByRole("alert");

      expect(alert).toBeInTheDocument();
      expect(alert).toHaveTextContent("Basic alert message");
    });

    test("renders with default brand color classes", () => {
      render(BasicAlertTest);
      const alert = screen.getByRole("alert");

      expect(alert).toHaveClass("text-fg-brand-strong");
      expect(alert).toHaveClass("bg-brand-softer");
    });

    test("renders with rounded corners by default", () => {
      render(BasicAlertTest);
      const alert = screen.getByRole("alert");

      expect(alert).toHaveClass("rounded-base");
    });
  });

  describe("Color Variants", () => {
    test("renders danger alert with correct color classes", () => {
      render(ColoredAlertTest);
      const alert = screen.getByRole("alert");

      expect(alert).toHaveTextContent("Danger alert");
      expect(alert).toHaveClass("text-fg-danger-strong");
      expect(alert).toHaveClass("bg-danger-soft");
    });
  });

  describe("Dismissable Functionality", () => {
    test("renders dismissable alert with close button", () => {
      render(DismissableAlertTest);
      const alert = screen.getByRole("alert");
      const closeButton = screen.getByRole("button");

      expect(alert).toBeInTheDocument();
      expect(closeButton).toBeInTheDocument();
      expect(closeButton).toHaveAttribute("aria-label", "Remove alert");
    });

    test("dismisses alert when close button is clicked", async () => {
      const user = userEvent.setup();
      render(DismissableAlertTest);

      const alert = screen.getByRole("alert");
      const closeButton = screen.getByRole("button");

      expect(alert).toBeInTheDocument();

      await user.click(closeButton);

      // Wait for the transition to complete and the alert to be removed
      await waitForElementToBeRemoved(() => screen.queryByRole("alert"));

      // After transition completes, alert should not be in the document
      expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    });
  });

  describe("Icon Functionality", () => {
    test("renders alert with icon snippet", () => {
      render(IconAlertTest);
      const alert = screen.getByRole("alert");

      expect(alert).toBeInTheDocument();
      expect(alert).toHaveTextContent("Alert with icon");

      // Check that icon is rendered (svg element)
      const svg = alert.querySelector("svg");
      expect(svg).toBeInTheDocument();
    });
  });

  describe("Border Variant", () => {
    test("renders alert with border", () => {
      render(BorderedAlertTest);
      const alert = screen.getByRole("alert");

      expect(alert).toHaveTextContent("Bordered alert");
      expect(alert).toHaveClass("border");
    });
  });

  describe("Visibility Control", () => {
    test("does not render alert when alertStatus is false", () => {
      render(HiddenAlertTest);

      // Alert should not be in the document when alertStatus is false
      expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    });
  });

  describe("Custom Close Icon", () => {
    test("renders alert with custom close icon", () => {
      render(CustomCloseIconAlertTest);
      const alert = screen.getByRole("alert");
      const closeButton = screen.getByRole("button");

      expect(alert).toBeInTheDocument();
      expect(closeButton).toBeInTheDocument();
      expect(alert).toHaveTextContent("Alert with custom close icon");

      // Check that custom icon (svg) is rendered in the button
      const svg = closeButton.querySelector("svg");
      expect(svg).toBeInTheDocument();
    });
  });

  describe("Border Accent", () => {
    test("renders alert with border accent styling", () => {
      render(BorderAccentAlertTest);
      const alert = screen.getByRole("alert");

      expect(alert).toHaveTextContent("Border accent alert");
      expect(alert).toHaveClass("border");
      expect(alert).toHaveClass("border-t-4");
      expect(alert).toHaveClass("text-fg-success-strong");
    });
  });

  describe("Custom Colors", () => {
    test("renders alert with custom color classes when color is none", () => {
      render(CustomColorAlertTest);
      const alert = screen.getByRole("alert");

      expect(alert).toHaveTextContent("Custom color alert");
      expect(alert).toHaveClass("bg-indigo-100");
      expect(alert).toHaveClass("text-indigo-900");
    });
  });

  describe("Close Event", () => {
    test("triggers close event when alert is dismissed", async () => {
      const user = userEvent.setup();
      render(CloseEventAlertTest);

      const alert = screen.getByRole("alert");
      const closeButton = screen.getByRole("button");

      expect(alert).toBeInTheDocument();
      expect(screen.queryByTestId("close-indicator")).not.toBeInTheDocument();

      await user.click(closeButton);

      // Close event should have fired
      expect(screen.getByTestId("close-indicator")).toBeInTheDocument();
      expect(screen.getByTestId("close-indicator")).toHaveTextContent("Close event fired");
    });
  });
});
