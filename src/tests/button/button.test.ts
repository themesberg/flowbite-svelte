import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach } from "vitest";

import BasicButtonTest from "./basic-button.test.svelte";
import SubmitButtonTest from "./submit-button.test.svelte";
import LinkButtonTest from "./link-button.test.svelte";
import LabelButtonTest from "./label-button.test.svelte";

afterEach(() => {
  cleanup();
});

test("basic button renders correctly", () => {
  render(BasicButtonTest);
  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("Test");
  expect(button).toHaveAttribute("type", "button");
});

test("submit button renders correctly", () => {
  render(SubmitButtonTest);
  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("Save");
  expect(button).toHaveAttribute("type", "submit");
});

test("link button renders correctly", () => {
  render(LinkButtonTest);
  const link = screen.getByRole("link");

  expect(link).toHaveTextContent("Flowbite Svelte");
  expect(link).not.toHaveAttribute("type");
});

test("renders button as label element correctly", () => {
  render(LabelButtonTest);
  const label = screen.getByTestId("label");

  expect(label).toBeInTheDocument();
  expect(label).not.toHaveAttribute("type");
  expect(label).not.toHaveAttribute("role");
});
