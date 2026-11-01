import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import ToggleShare from "./ToggleShare.svelte";

describe("ToggleShare", () => {
  it("shows and hides the share button", async () => {
    const user = userEvent.setup();

    render(ToggleShare);

    // Initially hidden
    expect(screen.queryByRole("button", { name: /^share$/i })).not.toBeInTheDocument();

    // Click to show
    await user.click(screen.getByRole("button", { name: /toggle/i }));

    expect(screen.getByRole("button", { name: /^share$/i })).toBeInTheDocument();

    // Click again to hide
    await user.click(screen.getByRole("button", { name: /toggle/i }));

    expect(screen.queryByRole("button", { name: /^share$/i })).not.toBeInTheDocument();
  });
});
