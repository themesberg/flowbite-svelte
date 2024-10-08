import Toggle from "./Toggle.svelte";
import type { Snippet } from "svelte";
import type { HTMLInputAttributes } from "svelte/elements";
import { toggle } from "./theme";
import { type VariantProps } from "tailwind-variants";

type SizeType = VariantProps<typeof toggle>["size"];
type ToggleColor = VariantProps<typeof toggle>["color"];

interface ToggleProps extends HTMLInputAttributes {
  children: Snippet;
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

export { Toggle, toggle, type ToggleProps, type ToggleColor };
