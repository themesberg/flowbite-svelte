import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicToastTest from "./basic-toast.test.svelte";
import DismissableToastTest from "./dismissable-toast.test.svelte";
import PositionToastTest from "./position-toast.test.svelte";
import IconToastTest from "./icon-toast.test.svelte";
import CloseToastTest, { testState } from "./close-toast.test.svelte";
import CustomClassToastTest from "./custom-class-toast.test.svelte";
import ToastContainerTest from "./toast-container.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Toast Component", () => {
  describe("Basic Rendering", () => {
    test("toast renders correctly with role alert", () => {
      render(BasicToastTest);
      const toast = screen.getByRole("alert");

      expect(toast).toBeInTheDocument();
      expect(toast).toHaveAttribute("data-scope", "toast");
      expect(toast).toHaveAttribute("data-part", "base");
    });

    test("toast renders content correctly", () => {
      render(BasicToastTest);
      const toast = screen.getByRole("alert");

      expect(toast).toHaveTextContent("Toast content");
    });
  });

  describe("Dismissable Prop", () => {
    test("dismissable toast shows close button", () => {
      render(DismissableToastTest);
      const dismissableToast = screen.getByTestId("dismissable-toast");
      const closeButton = dismissableToast.querySelector('button[aria-label="Remove toast"]');

      expect(closeButton).toBeInTheDocument();
    });

    test("non-dismissable toast does not show close button", () => {
      render(DismissableToastTest);
      const nonDismissableToast = screen.getByTestId("non-dismissable-toast");
      const closeButton = nonDismissableToast.querySelector('button[aria-label="Remove toast"]');

      expect(closeButton).not.toBeInTheDocument();
    });
  });

  describe("Color Variants", () => {
    test("renders toast with different position variants", () => {
      render(PositionToastTest);

      expect(screen.getByTestId("position-top-left")).toHaveAttribute("role", "alert");

      expect(screen.getByTestId("position-top-right")).toHaveAttribute("role", "alert");

      expect(screen.getByTestId("position-bottom-left")).toHaveAttribute("role", "alert");

      expect(screen.getByTestId("position-bottom-right")).toHaveAttribute("role", "alert");
    });
  });

  describe("Position Variants", () => {
    test("renders toast with different position variants", () => {
      render(PositionToastTest);
      const topLeft = screen.getByTestId("position-top-left");
      const topRight = screen.getByTestId("position-top-right");
      const bottomLeft = screen.getByTestId("position-bottom-left");
      const bottomRight = screen.getByTestId("position-bottom-right");

      expect(topLeft).toBeInTheDocument();
      expect(topRight).toBeInTheDocument();
      expect(bottomLeft).toBeInTheDocument();
      expect(bottomRight).toBeInTheDocument();
    });
  });

  describe("Icon Rendering", () => {
    test("toast with icon renders icon element", () => {
      render(IconToastTest);
      const toastWithIcon = screen.getByTestId("icon-toast");
      const icon = toastWithIcon.querySelector('[data-part="icon"]');

      expect(icon).toBeInTheDocument();
    });

    test("toast without icon does not render icon element", () => {
      render(IconToastTest);
      const toastWithoutIcon = screen.getByTestId("no-icon-toast");
      const icon = toastWithoutIcon.querySelector('[data-part="icon"]');

      expect(icon).not.toBeInTheDocument();
    });

    test("toast icon contains rendered icon content", () => {
      render(IconToastTest);
      const checkIcon = screen.getByTestId("check-icon");

      expect(checkIcon).toBeInTheDocument();
    });
  });

  describe("Close Functionality", () => {
    test("clicking close button hides toast", async () => {
      const user = userEvent.setup();
      testState.toastVisible = true;
      testState.closeEventFired = false;

      render(CloseToastTest);
      const toast = screen.getByTestId("closeable-toast");
      const closeButton = toast.querySelector('button[aria-label="Remove toast"]') as HTMLButtonElement;

      expect(closeButton).toBeInTheDocument();
      expect(testState.toastVisible).toBe(true);

      await user.click(closeButton);

      // Wait for state update
      await new Promise((resolve) => setTimeout(resolve, 50));

      expect(testState.toastVisible).toBe(false);
    });
  });

  describe("Custom Classes", () => {
    test("custom class is applied to toast", () => {
      render(CustomClassToastTest);
      const toast = screen.getByTestId("custom-class-toast");

      expect(toast).toHaveClass("custom-toast-class");
    });
  });

  describe("Data Attributes", () => {
    test("toast has correct data attributes", () => {
      render(BasicToastTest);
      const toast = screen.getByRole("alert");

      expect(toast).toHaveAttribute("data-scope", "toast");
      expect(toast).toHaveAttribute("data-part", "base");
    });

    test("toast content has correct data attribute", () => {
      render(BasicToastTest);
      const toast = screen.getByRole("alert");
      const content = toast.querySelector('[data-part="content"]');

      expect(content).toBeInTheDocument();
      expect(content).toHaveAttribute("data-part", "content");
    });
  });
});

describe("ToastContainer Component", () => {
  describe("Position Variants", () => {
    test("renders container with top-left position", () => {
      render(ToastContainerTest);
      const container = screen.getByTestId("container-top-left");

      expect(container).toBeInTheDocument();
      expect(container).toHaveAttribute("data-scope", "toast-container");
      expect(container).toHaveAttribute("data-part", "base");
    });

    test("renders container with top-right position", () => {
      render(ToastContainerTest);
      const container = screen.getByTestId("container-top-right");

      expect(container).toBeInTheDocument();
    });

    test("renders container with bottom-left position", () => {
      render(ToastContainerTest);
      const container = screen.getByTestId("container-bottom-left");

      expect(container).toBeInTheDocument();
    });

    test("renders container with bottom-right position", () => {
      render(ToastContainerTest);
      const container = screen.getByTestId("container-bottom-right");

      expect(container).toBeInTheDocument();
    });
  });

  describe("Data Attributes", () => {
    test("container has correct data attributes", () => {
      render(ToastContainerTest);
      const container = screen.getByTestId("container-top-left");

      expect(container).toHaveAttribute("data-scope", "toast-container");
      expect(container).toHaveAttribute("data-part", "base");
    });
  });
});
