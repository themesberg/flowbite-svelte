import type { Snippet } from "svelte";
import type { HTMLInputAttributes } from "svelte/elements";
import type { CheckboxVariants } from "./theme";

interface CheckboxItem {
  value: string;
  label?: string;
  checked?: boolean | null;
  [key: string]: any;
}

interface CheckboxProps extends Omit<HTMLInputAttributes, "children"> {
  children?: Snippet<[CheckboxItem]>;
  color?: CheckboxVariants["color"];
  custom?: boolean;
  inline?: boolean;
  tinted?: boolean;
  rounded?: boolean;
  group?: (string | number)[];
  choices?: CheckboxItem[];
  indeterminate?: boolean;
}

export { type CheckboxProps, type CheckboxItem };
