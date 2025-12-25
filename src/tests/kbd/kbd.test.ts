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
    const kbds = document.querySelectorAll("kbd");
    expect(kbds.length).toBeGreaterThanOrEqual(3);
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
