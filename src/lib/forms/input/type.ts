import type { HTMLInputAttributes } from "svelte/elements";
import type { FormSizeType, ColorName } from "$lib/types";
import type { Snippet } from "svelte";

type InputValue = string | number | string[] | undefined;
interface InputProps<T extends InputValue = string> extends Omit<HTMLInputAttributes, "size" | "children" | "value"> {
  children?: Snippet<[{ class: string } & Omit<InputProps<T>, "children" | "left" | "right" | "size">]>;
  left?: Snippet;
  right?: Snippet;
  size?: FormSizeType;
  value?: T;
  clearable?: boolean;
  color?: ColorName | "default" | "tinted";
  classLeft?: string;
  classRight?: string;
  class?: string;
  divClass?: string;
}

export { type InputProps, type InputValue };
