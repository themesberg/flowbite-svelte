import type { Snippet } from "svelte";
import type { HTMLInputAttributes } from "svelte/elements";
import type { InputVariants } from "./theme";

type InputValue = string | number | string[] | undefined;

interface InputProps<T extends InputValue = string> extends Omit<HTMLInputAttributes, "size" | "children" | "value"> {
  children?: Snippet<[{ class: string } & Omit<InputProps<T>, "children" | "left" | "right" | "size">]>;
  left?: Snippet;
  right?: Snippet;
  size?: InputVariants["size"];
  value?: T;
  clearable?: boolean;
  color?: InputVariants["color"];
  classLeft?: string;
  classRight?: string;
  divClass?: string;
}

export { type InputProps, type InputValue };
