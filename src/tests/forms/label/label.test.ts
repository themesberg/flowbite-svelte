import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import LabelBasicTest from "./label-basic.test.svelte";
import LabelColorsTest from "./label-colors.test.svelte";
import LabelShowTest from "./label-show.test.svelte";
import LabelCustomPropsTest from "./label-custom-props.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Label - Basic", () => {
  test("renders label text", () => {
    render(LabelBasicTest);
    expect(screen.getByText("Basic Label")).toBeInTheDocument();
  });

  test("renders as label element", () => {
    render(LabelBasicTest);
    const label = screen.getByText("Basic Label");
    expect(label.tagName).toBe("LABEL");
  });
});

describe("Label - Colors", () => {
  test("renders label with different colors", () => {
    render(LabelColorsTest);
    expect(screen.getByText("Gray Label")).toBeInTheDocument();
    expect(screen.getByText("Green Label")).toBeInTheDocument();
    expect(screen.getByText("Red Label")).toBeInTheDocument();
    expect(screen.getByText("Disabled Label")).toBeInTheDocument();
  });

  test("all color variants render as label elements", () => {
    render(LabelColorsTest);
    expect(screen.getByText("Gray Label").tagName).toBe("LABEL");
    expect(screen.getByText("Green Label").tagName).toBe("LABEL");
    expect(screen.getByText("Red Label").tagName).toBe("LABEL");
    expect(screen.getByText("Disabled Label").tagName).toBe("LABEL");
  });
});

describe("Label - Show/Hide", () => {
  test("renders label when show is true", () => {
    render(LabelShowTest);
    const visibleLabel = screen.getByTestId("visible-label");
    expect(visibleLabel).toBeInTheDocument();
    expect(visibleLabel.tagName).toBe("LABEL");
  });

  test("renders content without label element when show is false", () => {
    render(LabelShowTest);
    // Content should still be present
    expect(screen.getByText("Hidden Label Content")).toBeInTheDocument();
    
    // But the label element should not exist
    const hiddenLabel = screen.queryByTestId("hidden-label");
    expect(hiddenLabel).not.toBeInTheDocument();
  });

  test("content is rendered in both show states", () => {
    render(LabelShowTest);
    expect(screen.getByText("Visible Label")).toBeInTheDocument();
    expect(screen.getByText("Hidden Label Content")).toBeInTheDocument();
  });
});

describe("Label - Custom Props", () => {
  test("renders with custom class", () => {
    render(LabelCustomPropsTest);
    const label = screen.getByText("Email Address");
    expect(label).toHaveClass("custom-label");
  });

  test("passes through data attributes", () => {
    render(LabelCustomPropsTest);
    const label = screen.getByTestId("custom-label");
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent("Email Address");
  });

  test("passes through id attribute", () => {
    render(LabelCustomPropsTest);
    const label = document.getElementById("label-1");
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent("Email Address");
  });

  test("supports for attribute to associate with input", () => {
    render(LabelCustomPropsTest);
    const label = screen.getByText("Email Address");
    const input = document.getElementById("email-input");
    
    expect(label).toHaveAttribute("for", "email-input");
    expect(input).toBeInTheDocument();
  });

  test("label is associated with input via htmlFor", () => {
    render(LabelCustomPropsTest);
    const label = screen.getByText("Email Address") as HTMLLabelElement;
    const input = document.getElementById("email-input") as HTMLInputElement;
    
    expect(label.htmlFor).toBe("email-input");
    expect(input.id).toBe("email-input");
  });
});
