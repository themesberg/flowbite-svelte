import type { Snippet } from "svelte";
import type { HTMLSelectAttributes, HTMLAttributes } from "svelte/elements";
import type { SelectVariants } from "./theme";


type SelectOptionType<T> = {
  name: string | number;
  value: T;
};

interface SelectProps<T> extends SelectVariants, Omit<HTMLSelectAttributes, "size"> {
  children?: Snippet;
  items?: SelectOptionType<T>[];
  placeholder?: string;
}

interface MultiSelectProps<T> extends HTMLAttributes<HTMLDivElement> {
  children?: Snippet;
  items?: SelectOptionType<T>[];
  value?: T[];
  size?: SelectVariants["size"];
  dropdownClass?: string;
  placeholder?: string;
  change?: (event: Event) => void;
}

export { type SelectProps, type SelectOptionType, type MultiSelectProps };
