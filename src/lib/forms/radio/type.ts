import type { Snippet } from "svelte";
import type { HTMLInputAttributes } from "svelte/elements";

type RadioColorType = "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | undefined;

interface RadioProps<T> extends HTMLInputAttributes {
  children: Snippet;
  aria_describedby?: string;
  color?: RadioColorType;
  group?: T;
  value?: T;
  inputClass?: string;
  labelClass?: string;
  hidden?: boolean;
}

export { type RadioProps, type RadioColorType };
