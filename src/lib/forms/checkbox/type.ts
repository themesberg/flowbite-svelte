import type { Snippet } from "svelte";
import type { HTMLInputAttributes } from "svelte/elements";
import type { CheckboxVariants } from "./theme";

type CheckboxItem = {
  value: string;
  checkboxLabel?: string;
  isChecked?: boolean;
};

interface CheckboxProps extends HTMLInputAttributes {
  children?: Snippet;
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
