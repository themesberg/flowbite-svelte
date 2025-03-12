import type { HTMLInputAttributes } from "svelte/elements";
import type { RadioVariants } from "./theme";

interface RadioProps<T> extends RadioVariants, Omit<HTMLInputAttributes, "color"> {
  group?: T;
  value?: T;
  inputClass?: string;
  labelClass?: string;
}

export { type RadioProps };
