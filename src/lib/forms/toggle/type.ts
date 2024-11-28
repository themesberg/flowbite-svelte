import type { Snippet } from "svelte";
import type { HTMLInputAttributes } from "svelte/elements";

type SizeType = "default" | "small" | "large" | undefined;
type ToggleColor = "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | undefined;

interface ToggleProps extends HTMLInputAttributes {
  children?: Snippet;
  leftLabel?: Snippet;
  toggleSize?: SizeType;
  value?: string | number;
  checked?: boolean | undefined;
  disabled?: boolean;
  spanClass?: string;
  color?: ToggleColor;
  labelClass?: string;
  aria_describedby?: string;
  inputClass?: string;
}

export { type ToggleProps, type ToggleColor };
