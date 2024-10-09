import Input from "./Input.svelte";
import type { HTMLInputAttributes } from "svelte/elements";
import type { FormSizeType, ColorName, SizeType } from "$lib/types";
import type { Snippet } from "svelte";
import { input } from "./theme";

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
}

function clampSize(s: SizeType) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}

export { Input, input, type InputProps, type InputValue, clampSize };
