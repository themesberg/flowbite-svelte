import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicStepIndicatorTest from "./basic-step-indicator.test.svelte";
import CustomCurrentStepTest from "./custom-current-step.test.svelte";
import CustomStepsTest from "./custom-steps.test.svelte";
import SizeLgTest from "./size-lg.test.svelte";
import ColorSecondaryTest from "./color-secondary.test.svelte";
import WithGlowTest from "./with-glow.test.svelte";
import HideLabelTest from "./hide-label.test.svelte";
import NotClickableTest from "./not-clickable.test.svelte";
import WithCallbackTest, { testState as callbackTestState } from "./with-callback.test.svelte";
import CustomColorsTest from "./custom-colors.test.svelte";

afterEach(() => {
  cleanup();
  // Reset test states
  callbackTestState.current = 0;
  callbackTestState.last = 0;
  callbackTestState.callCount = 0;
});

describe("StepIndicator Component", () => {
  describe("Basic Rendering", () => {
    test("renders step indicator correctly", () => {
      render(BasicStepIndicatorTest);
      const stepIndicator = screen.getByTestId("basic-step-indicator");

      expect(stepIndicator).toBeInTheDocument();
      expect(stepIndicator).toHaveAttribute("data-scope", "step-indicator");
      expect(stepIndicator).toHaveAttribute("data-part", "base");
    });

    test("renders with default steps", () => {
      render(BasicStepIndicatorTest);
      const stepIndicator = screen.getByTestId("basic-step-indicator");

      // Check label shows first step
      const label = stepIndicator.querySelector('[data-part="label"]');
      expect(label).toBeInTheDocument();
      expect(label?.textContent).toBe("Step 1");

      // Check all 5 steps are rendered
      const steps = stepIndicator.querySelectorAll('[data-part="step"], [data-part="incomplete-step"]');
      expect(steps.length).toBe(5);
    });

    test("renders with custom steps", () => {
      render(CustomStepsTest);
      const stepIndicator = screen.getByTestId("custom-steps");

      const label = stepIndicator.querySelector('[data-part="label"]');
      expect(label?.textContent).toBe("First");

      const steps = stepIndicator.querySelectorAll('[data-part="step"], [data-part="incomplete-step"]');
      expect(steps.length).toBe(3);
    });

    test("renders with custom current step", () => {
      render(CustomCurrentStepTest);
      const stepIndicator = screen.getByTestId("custom-current-step");

      const label = stepIndicator.querySelector('[data-part="label"]');
      expect(label?.textContent).toBe("Step 3");

      // First two steps should be completed
      const completedSteps = stepIndicator.querySelectorAll('[data-state="completed"]');
      expect(completedSteps.length).toBe(2);

      // One current step
      const currentSteps = stepIndicator.querySelectorAll('[data-state="current"]');
      expect(currentSteps.length).toBe(1);

      // Two incomplete steps
      const incompleteSteps = stepIndicator.querySelectorAll('[data-state="incomplete"]');
      expect(incompleteSteps.length).toBe(2);
    });
  });

  describe("Step States", () => {
    test("marks completed steps correctly", () => {
      render(CustomCurrentStepTest);
      const stepIndicator = screen.getByTestId("custom-current-step");

      const completedSteps = stepIndicator.querySelectorAll('[data-state="completed"]');
      expect(completedSteps.length).toBe(2);
    });

    test("marks current step correctly", () => {
      render(CustomCurrentStepTest);
      const stepIndicator = screen.getByTestId("custom-current-step");

      const currentSteps = stepIndicator.querySelectorAll('[data-state="current"]');
      expect(currentSteps.length).toBe(1);

      const currentWrapper = stepIndicator.querySelector('[data-part="wrapper"]');
      expect(currentWrapper).toBeInTheDocument();
      expect(currentWrapper?.querySelector('[data-state="current"]')).toBeInTheDocument();
    });

    test("marks incomplete steps correctly", () => {
      render(CustomCurrentStepTest);
      const stepIndicator = screen.getByTestId("custom-current-step");

      const incompleteSteps = stepIndicator.querySelectorAll('[data-state="incomplete"]');
      expect(incompleteSteps.length).toBe(2);
    });
  });

  describe("Styling Props", () => {
    test("applies large size", () => {
      render(SizeLgTest);
      const stepIndicator = screen.getByTestId("size-lg");
      expect(stepIndicator).toBeInTheDocument();
      // Verify size-specific attribute or class if available
      const steps = stepIndicator.querySelectorAll('[data-part="step"], [data-part="incomplete-step"]');
      expect(steps.length).toBeGreaterThan(0);
    });

    test("applies secondary color", () => {
      render(ColorSecondaryTest);
      const stepIndicator = screen.getByTestId("color-secondary");
      expect(stepIndicator).toBeInTheDocument();
    });

    test("renders glow effect when enabled", () => {
      render(WithGlowTest);
      const stepIndicator = screen.getByTestId("with-glow");

      const glowElement = stepIndicator.querySelector('[data-part="glow"]');
      expect(glowElement).toBeInTheDocument();
    });

    test("does not render glow effect by default", () => {
      render(BasicStepIndicatorTest);
      const stepIndicator = screen.getByTestId("basic-step-indicator");

      const glowElement = stepIndicator.querySelector('[data-part="glow"]');
      expect(glowElement).not.toBeInTheDocument();
    });

    test("applies custom colors", () => {
      render(CustomColorsTest);
      const stepIndicator = screen.getByTestId("custom-colors");

      expect(stepIndicator).toBeInTheDocument();

      const currentStep = stepIndicator.querySelector('[data-state="current"]');
      expect(currentStep).toBeInTheDocument();
      expect(currentStep?.className).toContain("bg-blue-500");
    });
  });

  describe("Label Visibility", () => {
    test("shows label by default", () => {
      render(BasicStepIndicatorTest);
      const stepIndicator = screen.getByTestId("basic-step-indicator");

      const label = stepIndicator.querySelector('[data-part="label"]');
      expect(label).toBeInTheDocument();
      expect(label?.textContent).toBe("Step 1");
    });

    test("hides label when hideLabel is true", () => {
      render(HideLabelTest);
      const stepIndicator = screen.getByTestId("hide-label");

      const label = stepIndicator.querySelector('[data-part="label"]');
      expect(label).not.toBeInTheDocument();
    });
  });

  describe("Clickable Behavior", () => {
    test("steps are clickable by default", async () => {
      const user = userEvent.setup();
      render(BasicStepIndicatorTest);
      const stepIndicator = screen.getByTestId("basic-step-indicator");

      const allButtons = stepIndicator.querySelectorAll("button");
      expect(allButtons.length).toBeGreaterThan(0);

      // Find the button for step 2 (index 1) - it should be an incomplete step button
      const incompleteButtons = Array.from(stepIndicator.querySelectorAll('button[data-state="incomplete"]'));
      expect(incompleteButtons.length).toBeGreaterThan(0);

      // Click on the first incomplete step (step 2)
      await user.click(incompleteButtons[0] as HTMLElement);

      // Check label updated
      const label = stepIndicator.querySelector('[data-part="label"]');
      expect(label?.textContent).toBe("Step 2");
    });

    test("steps are not clickable when clickable is false", () => {
      render(NotClickableTest);
      const stepIndicator = screen.getByTestId("not-clickable");

      const buttons = stepIndicator.querySelectorAll("button");
      expect(buttons.length).toBe(0);

      // Should have div elements instead
      const steps = stepIndicator.querySelectorAll('[data-part="step"], [data-part="incomplete-step"]');
      expect(steps.length).toBeGreaterThan(0);
      steps.forEach((step) => {
        expect(step.tagName).toBe("DIV");
      });
    });

    test("clicking same step does not change state", async () => {
      const user = userEvent.setup();
      render(BasicStepIndicatorTest);
      const stepIndicator = screen.getByTestId("basic-step-indicator");

      const currentStep = stepIndicator.querySelector('[data-state="current"]')?.closest("button");
      expect(currentStep).toBeInTheDocument();

      const labelBefore = stepIndicator.querySelector('[data-part="label"]')?.textContent;

      if (currentStep) {
        await user.click(currentStep);
      }

      const labelAfter = stepIndicator.querySelector('[data-part="label"]')?.textContent;
      expect(labelAfter).toBe(labelBefore);
    });
  });

  describe("Callbacks", () => {
    test("calls onStepClick when step is clicked", async () => {
      const user = userEvent.setup();
      render(WithCallbackTest);
      const stepIndicator = screen.getByTestId("with-callback");

      expect(callbackTestState.callCount).toBe(0);

      // Click on an incomplete step (step 2)
      const incompleteButtons = Array.from(stepIndicator.querySelectorAll('button[data-state="incomplete"]'));
      await user.click(incompleteButtons[0] as HTMLElement);

      expect(callbackTestState.callCount).toBe(1);
      expect(callbackTestState.current).toBe(2);
      expect(callbackTestState.last).toBe(1);
    });

    test("onStepClick receives correct values on navigation", async () => {
      const user = userEvent.setup();
      render(WithCallbackTest);
      const stepIndicator = screen.getByTestId("with-callback");

      // Get all incomplete step buttons
      const incompleteButtons = Array.from(stepIndicator.querySelectorAll('button[data-state="incomplete"]'));

      // Move to step 3 (click second incomplete button)
      await user.click(incompleteButtons[1] as HTMLElement);
      expect(callbackTestState.current).toBe(3);
      expect(callbackTestState.last).toBe(1);

      // After clicking, step 1 and 2 become completed buttons, so we can click them
      const completedButtons = Array.from(stepIndicator.querySelectorAll('button[data-state="completed"]'));

      // Move back to step 1
      await user.click(completedButtons[0] as HTMLElement);
      expect(callbackTestState.current).toBe(1);
      expect(callbackTestState.last).toBe(3);
    });

    test("does not call onStepClick when clicking current step", async () => {
      const user = userEvent.setup();
      render(WithCallbackTest);
      const stepIndicator = screen.getByTestId("with-callback");

      const currentButton = stepIndicator.querySelector('[data-state="current"]')?.closest("button");
      expect(currentButton).toBeInTheDocument();

      if (currentButton) {
        await user.click(currentButton);
      }

      expect(callbackTestState.callCount).toBe(0);
    });
  });

  describe("Accessibility", () => {
    test("current step has proper aria attributes", () => {
      render(BasicStepIndicatorTest);
      const stepIndicator = screen.getByTestId("basic-step-indicator");

      const currentButton = stepIndicator.querySelector('[data-state="current"]')?.closest("button");
      expect(currentButton).toHaveAttribute("aria-current", "step");
      expect(currentButton).toHaveAttribute("aria-label");
    });

    test("completed steps have proper aria labels", () => {
      render(CustomCurrentStepTest);
      const stepIndicator = screen.getByTestId("custom-current-step");

      const completedButtons = stepIndicator.querySelectorAll('button[data-state="completed"]');
      completedButtons.forEach((button) => {
        expect(button).toHaveAttribute("aria-label");
        expect(button.getAttribute("aria-label")).toContain("completed");
      });
    });

    test("incomplete steps have proper aria labels", () => {
      render(BasicStepIndicatorTest);
      const stepIndicator = screen.getByTestId("basic-step-indicator");

      const incompleteButtons = stepIndicator.querySelectorAll('button[data-state="incomplete"]');
      incompleteButtons.forEach((button) => {
        expect(button).toHaveAttribute("aria-label");
      });
    });
  });

  describe("Navigation", () => {
    test("can navigate forward through steps", async () => {
      const user = userEvent.setup();
      render(BasicStepIndicatorTest);
      const stepIndicator = screen.getByTestId("basic-step-indicator");

      let label = stepIndicator.querySelector('[data-part="label"]');
      expect(label?.textContent).toBe("Step 1");

      // Get incomplete step buttons and click the first one (step 2)
      let incompleteButtons = Array.from(stepIndicator.querySelectorAll('button[data-state="incomplete"]'));

      await user.click(incompleteButtons[0] as HTMLElement);
      label = stepIndicator.querySelector('[data-part="label"]');
      expect(label?.textContent).toBe("Step 2");

      // Get updated incomplete buttons and click the first one (step 3)
      incompleteButtons = Array.from(stepIndicator.querySelectorAll('button[data-state="incomplete"]'));
      await user.click(incompleteButtons[0] as HTMLElement);
      label = stepIndicator.querySelector('[data-part="label"]');
      expect(label?.textContent).toBe("Step 3");
    });

    test("can navigate backward through steps", async () => {
      const user = userEvent.setup();
      render(CustomCurrentStepTest);
      const stepIndicator = screen.getByTestId("custom-current-step");

      let label = stepIndicator.querySelector('[data-part="label"]');
      expect(label?.textContent).toBe("Step 3");

      // Get completed step buttons (steps 1 and 2)
      const completedButtons = Array.from(stepIndicator.querySelectorAll('button[data-state="completed"]'));

      // Click on step 2 (second completed button)
      await user.click(completedButtons[1] as HTMLElement);
      label = stepIndicator.querySelector('[data-part="label"]');
      expect(label?.textContent).toBe("Step 2");

      // Click on step 1 (first in the updated completed buttons list)
      const updatedCompletedButtons = Array.from(stepIndicator.querySelectorAll('button[data-state="completed"]'));
      await user.click(updatedCompletedButtons[0] as HTMLElement);
      label = stepIndicator.querySelector('[data-part="label"]');
      expect(label?.textContent).toBe("Step 1");
    });

    test("can jump to any step", async () => {
      const user = userEvent.setup();
      render(BasicStepIndicatorTest);
      const stepIndicator = screen.getByTestId("basic-step-indicator");

      // Jump to step 5 (last step)
      const incompleteButtons = Array.from(stepIndicator.querySelectorAll('button[data-state="incomplete"]'));
      await user.click(incompleteButtons[3] as HTMLElement); // 4th incomplete button = step 5

      let label = stepIndicator.querySelector('[data-part="label"]');
      expect(label?.textContent).toBe("Step 5");

      // Now we can click on completed steps - jump back to step 2
      const completedButtons = Array.from(stepIndicator.querySelectorAll('button[data-state="completed"]'));
      await user.click(completedButtons[1] as HTMLElement); // 2nd completed button = step 2

      label = stepIndicator.querySelector('[data-part="label"]');
      expect(label?.textContent).toBe("Step 2");
    });
  });
});
