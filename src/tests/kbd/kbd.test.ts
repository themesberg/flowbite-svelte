import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach, describe } from "vitest";

import BasicKbd from "./basic-kbd.test.svelte";
import MultipleKbd from "./multiple-kbd.test.svelte";
import CustomClassKbd from "./custom-class-kbd.test.svelte";

afterEach(() => {
  cleanup();
});

describe("Kbd - Basic", () => {
  test("renders kbd element", () => {
    render(BasicKbd);
    const kbd = screen.getByText("Ctrl");
    expect(kbd).toBeInTheDocument();
    expect(kbd.tagName).toBe("KBD");
  });

  test("has correct default styling", () => {
    render(BasicKbd);
    const kbd = screen.getByText("Ctrl");
    expect(kbd).toHaveClass("text-xs");
    expect(kbd).toHaveClass("font-semibold");
  });
});

describe("Kbd - Multiple Keys", () => {
  test("renders multiple kbd elements", () => {
    render(MultipleKbd);
    expect(screen.getByText("Ctrl")).toBeInTheDocument();
    expect(screen.getByText("Shift")).toBeInTheDocument();
    expect(screen.getByText("S")).toBeInTheDocument();
  });

  test("all kbd elements have correct tag", () => {
    render(MultipleKbd);
    const ctrlKbd = screen.getByText("Ctrl");
    const shiftKbd = screen.getByText("Shift");
    const sKbd = screen.getByText("S");
    expect(ctrlKbd.tagName).toBe("KBD");
    expect(shiftKbd.tagName).toBe("KBD");
    expect(sKbd.tagName).toBe("KBD");
  });
});

describe("Kbd - Custom Class", () => {
  test("applies custom class", () => {
    render(CustomClassKbd);
    const kbd = screen.getByText("Enter");
    expect(kbd).toHaveClass("custom-kbd-class");
  });

  test("maintains base styling with custom class", () => {
    render(CustomClassKbd);
    const kbd = screen.getByText("Enter");
    expect(kbd).toHaveClass("text-xs");
  });
});
