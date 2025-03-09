import type { ButtonProps } from "$lib/buttons";
import type { HTMLInputAttributes } from "svelte/elements";

interface RadioButtonProps<T> extends Omit<HTMLInputAttributes, "size"> {
  group?: T;
  value?: T;
  inline?: boolean;
  pill?: boolean;
  outline?: boolean;
  size?: ButtonProps["size"];
  color?: ButtonProps["color"];
  shadow?: boolean;
}

export { type RadioButtonProps };
