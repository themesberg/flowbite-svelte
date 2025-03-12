import type { Snippet } from "svelte";
import type { HTMLInputAttributes } from "svelte/elements";
import type { ToggleVariants } from "./theme";

interface ToggleProps extends Omit<ToggleVariants, "off_state_label">, Omit<HTMLInputAttributes, "size" | "color"> {
  offLabel?: Snippet;
  value?: string | number;
  checked?: boolean;
  disabled?: boolean;
  spanClass?: string;
  inputClass?: string;
}

export { type ToggleProps };
