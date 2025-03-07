import type { Snippet } from "svelte";
import type { HTMLInputAttributes } from "svelte/elements";
import type { ToggleVariants } from "./theme";

interface ToggleProps extends ToggleVariants, Omit<HTMLInputAttributes, "size" | "color"> {
  children?: Snippet;
  offLabel?: Snippet;
  value?: string | number;
  checked?: boolean | undefined;
  disabled?: boolean;
  spanClass?: string;
  inputClass?: string;
}

export { type ToggleProps };
