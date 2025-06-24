import { cleanup, render, screen } from "@testing-library/svelte";
import { expect, test, afterEach } from "vitest";
import { userEvent } from "@testing-library/user-event";

import CheckRadioButtonTest from "./check-radio-button.test.svelte";

afterEach(() => {
  cleanup();
});

test("checking a radio button", async () => {
  const user = userEvent.setup();
  render(CheckRadioButtonTest);
  const inputA = screen.getByLabelText("A");
  const inputB = screen.getByLabelText("B");

  expect(inputA).not.toBeChecked();
  expect(inputB).not.toBeChecked();
  await user.click(inputB.parentElement!);
  expect(inputA).not.toBeChecked();
  expect(inputB).toBeChecked();
});
