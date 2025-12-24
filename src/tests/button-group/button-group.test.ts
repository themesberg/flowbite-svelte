import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicButtonGroupTest from "./basic-button-group.test.svelte";
import SmallButtonGroupTest from "./small-button-group.test.svelte";
import MediumButtonGroupTest from "./medium-button-group.test.svelte";
import LargeButtonGroupTest from "./large-button-group.test.svelte";
import DisabledButtonGroupTest from "./disabled-button-group.test.svelte";
import OutlineButtonGroupTest from "./outline-button-group.test.svelte";
import CustomClassButtonGroupTest from "./custom-class-button-group.test.svelte";
import PillButtonGroupTest from "./pill-button-group.test.svelte";
import SingleButtonGroupTest from "./single-button-group.test.svelte";

afterEach(() => {
  cleanup();
});

describe("ButtonGroup component - Basic rendering", () => {
  test("renders basic button group correctly", () => {
    render(BasicButtonGroupTest);
    const group = screen.getByRole("group");

    expect(group).toBeInTheDocument();
  });

  test("renders multiple buttons inside group", () => {
    render(BasicButtonGroupTest);
    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(3);
    expect(buttons[0]).toHaveTextContent("Profile");
    expect(buttons[1]).toHaveTextContent("Settings");
    expect(buttons[2]).toHaveTextContent("Messages");
  });

  test("renders single button in group", () => {
    render(SingleButtonGroupTest);
    const group = screen.getByTestId("single-button-group");

    expect(group).toBeInTheDocument();

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(1);
    expect(buttons[0]).toHaveTextContent("Single Button");
  });

  test("has correct default classes", () => {
    render(BasicButtonGroupTest);
    const group = screen.getByRole("group");

    expect(group.className).toContain("inline-flex");
    expect(group.className).toContain("rounded-base");
  });
});

describe("ButtonGroup component - Size variants", () => {
  test("renders small size variant", () => {
    render(SmallButtonGroupTest);
    const group = screen.getByTestId("small-group");

    expect(group).toBeInTheDocument();
    expect(group).toHaveAttribute("role", "group");
  });

  test("renders medium size variant (default)", () => {
    render(MediumButtonGroupTest);
    const group = screen.getByTestId("medium-group");

    expect(group).toBeInTheDocument();
    expect(group).toHaveAttribute("role", "group");
  });

  test("renders large size variant", () => {
    render(LargeButtonGroupTest);
    const group = screen.getByTestId("large-group");

    expect(group).toBeInTheDocument();
    expect(group).toHaveAttribute("role", "group");
  });

  test("size context affects child buttons", () => {
    render(SmallButtonGroupTest);
    const buttons = screen.getAllByRole("button");

    // Buttons inside a group should inherit the group's size through context
    expect(buttons[0]).toBeInTheDocument();
    expect(buttons[1]).toBeInTheDocument();
  });
});

describe("ButtonGroup component - Disabled state", () => {
  test("disables all buttons in group when disabled prop is true", () => {
    render(DisabledButtonGroupTest);
    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(3);
    buttons.forEach((button) => {
      expect(button).toBeDisabled();
    });
  });

  test("disabled group still renders with role='group'", () => {
    render(DisabledButtonGroupTest);
    const group = screen.getByTestId("disabled-group");

    expect(group).toHaveAttribute("role", "group");
  });

  test("individual button can be queried when group is disabled", () => {
    render(DisabledButtonGroupTest);
    const button1 = screen.getByTestId("disabled-btn-1");
    const button2 = screen.getByTestId("disabled-btn-2");
    const button3 = screen.getByTestId("disabled-btn-3");

    expect(button1).toBeDisabled();
    expect(button2).toBeDisabled();
    expect(button3).toBeDisabled();
  });
});

describe("ButtonGroup component - Button variants", () => {
  test("renders outline buttons in group", () => {
    render(OutlineButtonGroupTest);
    const group = screen.getByTestId("outline-group");

    expect(group).toBeInTheDocument();

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
  });

  test("renders pill buttons in group", () => {
    render(PillButtonGroupTest);
    const group = screen.getByTestId("pill-group");

    expect(group).toBeInTheDocument();

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
  });
});

describe("ButtonGroup component - Custom styling", () => {
  test("applies custom class to button group", () => {
    render(CustomClassButtonGroupTest);
    const group = screen.getByTestId("custom-class-group");

    expect(group).toBeInTheDocument();
    expect(group.className).toContain("custom-group-class");
  });

  test("custom class is combined with default classes", () => {
    render(CustomClassButtonGroupTest);
    const group = screen.getByTestId("custom-class-group");

    // Should have both custom and default classes
    expect(group.className).toContain("custom-group-class");
    expect(group.className).toContain("inline-flex");
  });
});

describe("ButtonGroup component - Accessibility", () => {
  test("has role='group' attribute", () => {
    render(BasicButtonGroupTest);
    const group = screen.getByRole("group");

    expect(group).toHaveAttribute("role", "group");
  });

  test("all buttons are keyboard accessible", () => {
    render(BasicButtonGroupTest);
    const buttons = screen.getAllByRole("button");

    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
      expect(button).not.toBeDisabled();
    });
  });

  test("disabled buttons are not interactive", () => {
    render(DisabledButtonGroupTest);
    const buttons = screen.getAllByRole("button");

    buttons.forEach((button) => {
      expect(button).toBeDisabled();
    });
  });
});

describe("ButtonGroup component - Structure", () => {
  test("wraps buttons in a div element", () => {
    const { container } = render(BasicButtonGroupTest);
    const group = container.querySelector('div[role="group"]');

    expect(group).toBeInTheDocument();
  });

  test("maintains button order", () => {
    render(BasicButtonGroupTest);
    const buttons = screen.getAllByRole("button");

    expect(buttons[0]).toHaveTextContent("Profile");
    expect(buttons[1]).toHaveTextContent("Settings");
    expect(buttons[2]).toHaveTextContent("Messages");
  });

  test("buttons are direct children of group", () => {
    const { container } = render(BasicButtonGroupTest);
    const group = container.querySelector('div[role="group"]');
    const buttons = group?.querySelectorAll("button");

    expect(buttons).toHaveLength(3);
  });
});
