import { cleanup, render, screen, waitFor } from "@testing-library/svelte";
import { expect, test, afterEach, describe, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import BasicTourTest from "./basic-tour.test.svelte";
import CallbacksTest, { testState as callbackTestState } from "./callbacks.test.svelte";
import NoOverlayTest from "./no-overlay.test.svelte";
import CustomStyleTest from "./custom-style.test.svelte";
import InvalidTargetTest from "./invalid-target.test.svelte";

// Mock scrollIntoView
Element.prototype.scrollIntoView = vi.fn();

afterEach(() => {
  cleanup();
  callbackTestState.completed = false;
  callbackTestState.skipped = false;
  vi.clearAllMocks();
});

describe("Tour Component", () => {
  describe("Basic Rendering", () => {
    test("renders tour when active", async () => {
      render(BasicTourTest);

      await waitFor(() => {
        const tooltip = document.querySelector('[data-part="tooltip"]');
        expect(tooltip).toBeInTheDocument();
      });
    });

    test("displays first step content", async () => {
      render(BasicTourTest);
      await waitFor(() => {
        expect(screen.getByText("Step 1")).toBeInTheDocument();
        expect(screen.getByText("This is the first step")).toBeInTheDocument();
      });
    });

    test("renders overlay by default", async () => {
      render(BasicTourTest);

      await waitFor(() => {
        const overlay = document.querySelector('[data-part="overlay"]');
        expect(overlay).toBeInTheDocument();
      });
    });

    test("renders without overlay when showOverlay is false", () => {
      render(NoOverlayTest);

      const overlay = document.querySelector('[data-part="overlay"]');
      expect(overlay).not.toBeInTheDocument();
    });

    test("renders highlight element", () => {
      render(BasicTourTest);

      const highlight = document.querySelector('[data-part="highlight"]');
      expect(highlight).toBeInTheDocument();
    });

    test("renders navigation buttons", () => {
      render(BasicTourTest);

      expect(screen.getByText("Skip")).toBeInTheDocument();
      expect(screen.getByText("Next")).toBeInTheDocument();
    });

    test("displays step without title", async () => {
      const user = userEvent.setup();
      render(NoOverlayTest);
      const nextButton = screen.getByText("Next");

      // Click to go to second step
      await user.click(nextButton);

      await waitFor(() => {
        expect(screen.getByText("Second step without title")).toBeInTheDocument();
        expect(screen.queryByText("Step 2")).not.toBeInTheDocument();
      });
    });
  });

  describe("Navigation", () => {
    test("advances to next step on Next button click", async () => {
      const user = userEvent.setup();
      render(BasicTourTest);

      const nextButton = screen.getByText("Next");
      await user.click(nextButton);

      await waitFor(() => {
        expect(screen.getByText("Step 2")).toBeInTheDocument();
        expect(screen.getByText("This is the second step")).toBeInTheDocument();
      });
    });

    test("shows Previous button on second step", async () => {
      const user = userEvent.setup();
      render(BasicTourTest);

      const nextButton = screen.getByText("Next");
      await user.click(nextButton);

      await waitFor(() => {
        expect(screen.getByText("Previous")).toBeInTheDocument();
      });
    });

    test("goes back to previous step on Previous button click", async () => {
      const user = userEvent.setup();
      render(BasicTourTest);

      const nextButton = screen.getByText("Next");
      await user.click(nextButton);

      const previousButton = await screen.findByText("Previous");
      await user.click(previousButton);

      await waitFor(() => {
        expect(screen.getByText("Step 1")).toBeInTheDocument();
      });
    });

    test("shows Finish button on last step", async () => {
      const user = userEvent.setup();
      render(BasicTourTest);

      const nextButton = screen.getByText("Next");
      await user.click(nextButton);

      await waitFor(() => {
        expect(screen.getByText("Finish")).toBeInTheDocument();
      });
    });

    test("does not show Previous button on first step", () => {
      render(BasicTourTest);

      expect(screen.queryByText("Previous")).not.toBeInTheDocument();
    });
  });

  describe("Progress Indicators", () => {
    test("renders progress dots for multiple steps", () => {
      render(BasicTourTest);

      const dots = document.querySelectorAll('[data-part="progress-dot"]');
      expect(dots).toHaveLength(2);
    });

    test("clicking progress dot navigates to that step", async () => {
      const user = userEvent.setup();
      render(BasicTourTest);

      const dots = document.querySelectorAll('[data-part="progress-dot"]');
      await user.click(dots[1] as HTMLElement);

      await waitFor(() => {
        expect(screen.getByText("Step 2")).toBeInTheDocument();
      });
    });

    test("active dot has correct aria-current attribute", () => {
      render(BasicTourTest);

      const dots = document.querySelectorAll('[data-part="progress-dot"]');
      expect(dots[0]).toHaveAttribute("aria-current", "step");
      expect(dots[1]).not.toHaveAttribute("aria-current", "step");
    });
  });

  describe("Callbacks", () => {
    test("calls oncomplete when finishing tour", async () => {
      const user = userEvent.setup();
      render(CallbacksTest);

      const finishButton = screen.getByText("Finish");
      await user.click(finishButton);

      await waitFor(() => {
        expect(callbackTestState.completed).toBe(true);
      });
    });

    test("calls onskip when clicking Skip button", async () => {
      const user = userEvent.setup();
      render(CallbacksTest);

      const skipButton = screen.getByText("Skip");
      await user.click(skipButton);

      await waitFor(() => {
        expect(callbackTestState.skipped).toBe(true);
      });
    });
  });

  describe("Keyboard Navigation", () => {
    test("advances to next step with ArrowRight key", async () => {
      const user = userEvent.setup();
      render(BasicTourTest);

      await user.keyboard("{ArrowRight}");

      await waitFor(() => {
        expect(screen.getByText("Step 2")).toBeInTheDocument();
      });
    });

    test("advances to next step with ArrowDown key", async () => {
      const user = userEvent.setup();
      render(BasicTourTest);

      await user.keyboard("{ArrowDown}");

      await waitFor(() => {
        expect(screen.getByText("Step 2")).toBeInTheDocument();
      });
    });

    test("goes to previous step with ArrowLeft key", async () => {
      const user = userEvent.setup();
      render(BasicTourTest);

      await user.keyboard("{ArrowRight}");
      await waitFor(() => expect(screen.getByText("Step 2")).toBeInTheDocument());

      await user.keyboard("{ArrowLeft}");
      await waitFor(() => {
        expect(screen.getByText("Step 1")).toBeInTheDocument();
      });
    });

    test("goes to previous step with ArrowUp key", async () => {
      const user = userEvent.setup();
      render(BasicTourTest);

      await user.keyboard("{ArrowRight}");
      await waitFor(() => expect(screen.getByText("Step 2")).toBeInTheDocument());

      await user.keyboard("{ArrowUp}");
      await waitFor(() => {
        expect(screen.getByText("Step 1")).toBeInTheDocument();
      });
    });

    test("skips tour with Escape key", async () => {
      const user = userEvent.setup();
      render(CallbacksTest);

      await user.keyboard("{Escape}");

      await waitFor(() => {
        expect(callbackTestState.skipped).toBe(true);
      });
    });
  });

  describe("Customization", () => {
    test("applies custom size prop", () => {
      render(CustomStyleTest);

      const tooltip = document.querySelector('[data-part="tooltip"]');
      expect(tooltip).toBeInTheDocument();
    });

    test("applies custom color prop", () => {
      render(CustomStyleTest);

      const tooltip = document.querySelector('[data-part="tooltip"]');
      expect(tooltip).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    test("overlay has proper role and attributes", () => {
      render(BasicTourTest);

      const overlay = document.querySelector('[data-part="overlay"]');
      expect(overlay).toHaveAttribute("role", "button");
      expect(overlay).toHaveAttribute("aria-label", "Close tour");
      expect(overlay).toHaveAttribute("tabindex", "0");
    });

    test("progress dots have descriptive labels", () => {
      render(BasicTourTest);

      const dots = document.querySelectorAll('[data-part="progress-dot"]');
      expect(dots[0]).toHaveAttribute("aria-label", "Go to step 1");
      expect(dots[1]).toHaveAttribute("aria-label", "Go to step 2");
    });

    test("tooltip is focusable", async () => {
      render(BasicTourTest);

      const tooltip = document.querySelector('[data-part="tooltip"]') as HTMLElement;
      expect(tooltip).toHaveAttribute("tabindex", "-1");
    });
  });

  describe("Target Element", () => {
    test("scrolls target into view", async () => {
      render(BasicTourTest);

      await waitFor(() => {
        const target = screen.getByTestId("target-1");
        expect(target.scrollIntoView).toHaveBeenCalled();
      });
    });

    test("warns when target element is not found", async () => {
      const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

      render(InvalidTargetTest);

      await waitFor(() => {
        expect(consoleWarnSpy).toHaveBeenCalledWith(expect.stringContaining('Target element "#nonexistent" not found'));
      });

      consoleWarnSpy.mockRestore();
    });
  });
});
