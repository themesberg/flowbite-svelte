import type { Snippet } from "svelte";
import type { SizeType, ColorName } from "$lib/types";
import type { HTMLInputAttributes } from "svelte/elements";

interface RadioButtonProps<T> extends HTMLInputAttributes {
  children: Snippet;
  group?: T;
  value?: T;
  inline?: boolean;
  pill?: boolean;
  outline?: boolean;
  buttonSize?: SizeType | undefined;
  color?: ColorName | "alternative" | "dark" | "light";
  shadow?: boolean;
}
export { type RadioButtonProps };
