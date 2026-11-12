import { cleanup, render, screen } from "@testing-library/svelte";
import { userEvent } from "@testing-library/user-event";
import { tick } from "svelte";
import { afterEach, expect, test } from "vitest";
import DisabledOpen from "./disabled-open.test.svelte";

afterEach(cleanup);

test.each([
  ["dropdown", "Options", "Orange"],
  ["timerange-dropdown", "Choose time range", "Save time"]
] as const)("disabling an open %s prevents its popup action", async (type, trigger, action) => {
  const user = userEvent.setup();
  render(DisabledOpen, { type });

  const triggerButton = screen.getByRole("button", { name: trigger });
  await user.click(triggerButton);
  const actionButton = await screen.findByRole("button", { name: action });
  await user.keyboard("{F8}");
  await tick();

  actionButton.click();
  await tick();
  expect(screen.getByRole("status")).toHaveTextContent("0");
  expect(triggerButton).toBeDisabled();
  expect(actionButton.closest("[inert]")).not.toBeNull();
});
