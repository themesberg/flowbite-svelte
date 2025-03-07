import type { Snippet } from "svelte";
import type { HTMLInputAttributes } from "svelte/elements";
import type { RadioVariants } from "./theme";


interface RadioProps<T> extends Omit<HTMLInputAttributes, "color">, RadioVariants {
  children: Snippet;
  // color?: RadioVariants["color"];
  group?: T;
  value?: T;
  inputClass?: string;
  labelClass?: string;
  // hidden?: boolean;
  // inline?: boolean;
  // custom?: boolean;
}

export { type RadioProps };
