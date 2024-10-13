import Radio from "./Radio.svelte";
import type { Snippet } from "svelte";
import type { HTMLInputAttributes } from "svelte/elements";
import { radio } from "./theme";

type RadioColorType = "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | undefined;

interface RadioProps<T> extends HTMLInputAttributes {
  children: Snippet;
  aria_describedby?: string;
  color?: RadioColorType;
  group?: T;
  value?: T;
  inputClass?: string;
  labelClass?: string;
}

export { Radio, radio, type RadioProps, type RadioColorType };
