import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicStepperTest from "./basic-stepper.test.svelte";
import ClickableStepperTest, { stepperState } from "./clickable-stepper.test.svelte";
import StepperCurrentTest from "./stepper-current.test.svelte";
import StepperDescriptionTest from "./stepper-description.test.svelte";
import NonClickableStepperTest from "./non-clickable-stepper.test.svelte";
import ProgressStepperTest from "./progress-stepper.test.svelte";
import BreadcrumbStepperTest from "./breadcrumb-stepper.test.svelte";
import TimelineStepperTest from "./timeline-stepper.test.svelte";
import DetailedStepperTest from "./detailed-stepper.test.svelte";
import VerticalStepperTest from "./vertical-stepper.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Stepper Component", () => {
  describe("Basic Rendering", () => {
    test("basic stepper renders correctly", () => {
      render(BasicStepperTest);
      const stepper = screen.getByTestId("basic-stepper");

      expect(stepper).toBeInTheDocument();
      expect(stepper).toHaveAttribute("data-scope", "stepper");
      expect(stepper).toHaveAttribute("data-part", "base");
    });

    test("renders all step items", () => {
      render(BasicStepperTest);

      const items = document.querySelectorAll('[data-part="item"]');
      expect(items).toHaveLength(3);
    });

    test("renders step content", () => {
      render(BasicStepperTest);

      const contents = document.querySelectorAll('[data-part="content"]');
      expect(contents).toHaveLength(3);
    });
  });

  describe("Current Step States", () => {
    test("renders stepper with current=0 (all pending)", () => {
      render(StepperCurrentTest);
      const stepper = screen.getByTestId("stepper-current-0");

      expect(stepper).toBeInTheDocument();

      // When current=0, no steps should have aria-current="step"
      const currentSteps = stepper.querySelectorAll('[aria-current="step"]');
      expect(currentSteps).toHaveLength(0);
    });

    test("renders stepper with current=1 (first step active)", () => {
      render(StepperCurrentTest);
      const stepper = screen.getByTestId("stepper-current-1");

      expect(stepper).toBeInTheDocument();

      // Should have exactly one current step
      const currentSteps = stepper.querySelectorAll('[aria-current="step"]');
      expect(currentSteps).toHaveLength(1);
    });

    test("renders stepper with current=2", () => {
      render(StepperCurrentTest);
      const stepper = screen.getByTestId("stepper-current-2");

      expect(stepper).toBeInTheDocument();

      const currentSteps = stepper.querySelectorAll('[aria-current="step"]');
      expect(currentSteps).toHaveLength(1);
    });

    test("renders stepper with current=3", () => {
      render(StepperCurrentTest);
      const stepper = screen.getByTestId("stepper-current-3");

      expect(stepper).toBeInTheDocument();

      const currentSteps = stepper.querySelectorAll('[aria-current="step"]');
      expect(currentSteps).toHaveLength(1);
    });

    test("renders stepper with current=4 (all completed)", () => {
      render(StepperCurrentTest);
      const stepper = screen.getByTestId("stepper-current-4");

      expect(stepper).toBeInTheDocument();

      // When current equals step count, all steps are completed
      const currentSteps = stepper.querySelectorAll('[aria-current="step"]');
      expect(currentSteps).toHaveLength(1);
    });
  });

  describe("Step Descriptions", () => {
    test("renders stepper with descriptions", () => {
      render(StepperDescriptionTest);
      const stepper = screen.getByTestId("stepper-description");

      expect(stepper).toBeInTheDocument();
    });
  });

  describe("Clickable Behavior", () => {
    beforeEach(() => {
      stepperState.currentStep = 1;
      stepperState.lastStep = 0;
      stepperState.clickedStep = 0;
    });
    test("clickable stepper allows step navigation", async () => {
      const user = userEvent.setup();

      render(ClickableStepperTest);
      const stepper = screen.getByTestId("clickable-stepper");

      expect(stepper).toBeInTheDocument();

      const buttons = stepper.querySelectorAll('button[data-part="content"]');
      expect(buttons).toHaveLength(3);

      // Click second step
      await user.click(buttons[1] as HTMLElement);

      expect(stepperState.clickedStep).toBe(2);
      expect(stepperState.lastStep).toBe(1);
      expect(stepperState.currentStep).toBe(2);
    });

    test("non-clickable stepper does not have buttons", () => {
      render(NonClickableStepperTest);
      const stepper = screen.getByTestId("non-clickable-stepper");

      expect(stepper).toBeInTheDocument();

      const buttons = stepper.querySelectorAll('button[data-part="content"]');
      expect(buttons).toHaveLength(0);

      const spans = stepper.querySelectorAll('span[data-part="content"]');
      expect(spans).toHaveLength(3);
    });
  });
});

describe("ProgressStepper Component", () => {
  test("renders progress stepper correctly", () => {
    render(ProgressStepperTest);
    const stepper = screen.getByTestId("progress-stepper");

    expect(stepper).toBeInTheDocument();
    expect(stepper).toHaveAttribute("data-scope", "progress-stepper");
    expect(stepper).toHaveAttribute("data-part", "base");
  });

  test("renders progress line elements", () => {
    render(ProgressStepperTest);

    const line = document.querySelector('[data-part="line"]');
    const progressLine = document.querySelector('[data-part="progress-line"]');

    expect(line).toBeInTheDocument();
    expect(progressLine).toBeInTheDocument();
  });

  test("renders step circles", () => {
    render(ProgressStepperTest);

    const circles = document.querySelectorAll('[data-part="circle"]');
    expect(circles).toHaveLength(4);
  });

  test("renders items with correct data attributes", () => {
    render(ProgressStepperTest);

    const items = document.querySelectorAll('[data-part="item"]');
    expect(items).toHaveLength(4);
  });
});

describe("BreadcrumbStepper Component", () => {
  test("renders breadcrumb stepper correctly", () => {
    render(BreadcrumbStepperTest);
    const stepper = screen.getByTestId("breadcrumb-stepper");

    expect(stepper).toBeInTheDocument();
    expect(stepper).toHaveAttribute("data-scope", "breadcrumb-stepper");
    expect(stepper).toHaveAttribute("data-part", "base");
  });

  test("renders step indicators", () => {
    render(BreadcrumbStepperTest);

    const indicators = document.querySelectorAll('[data-part="indicator"]');
    expect(indicators).toHaveLength(3);
  });

  test("renders step items", () => {
    render(BreadcrumbStepperTest);

    const items = document.querySelectorAll('[data-part="item"]');
    expect(items).toHaveLength(3);
  });
});

describe("TimelineStepper Component", () => {
  test("renders timeline stepper correctly", () => {
    render(TimelineStepperTest);
    const stepper = screen.getByTestId("timeline-stepper");

    expect(stepper).toBeInTheDocument();
    expect(stepper).toHaveAttribute("data-scope", "timeline-stepper");
    expect(stepper).toHaveAttribute("data-part", "base");
  });

  test("renders step circles", () => {
    render(TimelineStepperTest);

    const circles = document.querySelectorAll('[data-part="circle"]');
    expect(circles).toHaveLength(3);
  });
});

describe("DetailedStepper Component", () => {
  test("renders detailed stepper correctly", () => {
    render(DetailedStepperTest);
    const stepper = screen.getByTestId("detailed-stepper");

    expect(stepper).toBeInTheDocument();
    expect(stepper).toHaveAttribute("data-scope", "detailed-stepper");
    expect(stepper).toHaveAttribute("data-part", "base");
  });

  test("renders step indicators", () => {
    render(DetailedStepperTest);

    const indicators = document.querySelectorAll('[data-part="indicator"]');
    expect(indicators).toHaveLength(3);
  });
});

describe("VerticalStepper Component", () => {
  test("renders vertical stepper correctly", () => {
    render(VerticalStepperTest);
    const stepper = screen.getByTestId("vertical-stepper");

    expect(stepper).toBeInTheDocument();
    expect(stepper).toHaveAttribute("data-scope", "vertical-stepper");
    expect(stepper).toHaveAttribute("data-part", "base");
  });

  test("renders step cards", () => {
    render(VerticalStepperTest);

    const cards = document.querySelectorAll('[data-part="card"]');
    expect(cards).toHaveLength(3);
  });

  test("renders step content", () => {
    render(VerticalStepperTest);

    const contents = document.querySelectorAll('[data-part="content"]');
    expect(contents).toHaveLength(3);
  });
});
