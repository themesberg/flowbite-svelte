import { cleanup, render, screen } from "@testing-library/svelte";
import { userEvent } from "@testing-library/user-event";
import { afterEach, expect, test } from "vitest";
import DisabledDatepicker from "./disabled-datepicker.test.svelte";

afterEach(cleanup);

test("an open calendar cannot select a day after the datepicker becomes disabled", async () => {
  const user = userEvent.setup();
  const { rerender } = render(DisabledDatepicker);
  await user.click(screen.getByRole("button", { name: "Open date picker" }));
  const day = screen.getByRole("gridcell", { name: "Saturday, January 11, 2025" });

  await rerender({ disabled: true });

  // Click what a pointer actually hits at the day button's position.
  const { x, y, width, height } = day.getBoundingClientRect();
  const target = document.elementFromPoint(x + width / 2, y + height / 2);
  expect(target).not.toBeNull();
  await user.click(target!);

  expect(screen.getByText("Selected day: 10. Selection events: 0.")).toBeInTheDocument();
});
