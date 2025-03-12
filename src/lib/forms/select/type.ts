import type { Snippet } from "svelte";
import type { HTMLSelectAttributes, HTMLAttributes } from "svelte/elements";
import type { MultiSelectVariants, SelectVariants } from "./theme";

type SelectOptionType<T> = {
  name: string | number;
  value: T;
  disabled?: boolean;
};

interface SelectProps<T> extends SelectVariants, Omit<HTMLSelectAttributes, "size"> {
  children?: Snippet;
  items?: SelectOptionType<T>[];
  placeholder?: string;
}

interface MultiSelectProps<T> extends MultiSelectVariants, Omit<HTMLSelectAttributes, "size" | "children"> {
  children?: Snippet<[{ item: SelectOptionType<T>; clear: () => void }]>;
  items?: SelectOptionType<T>[];
  // value?: (string | number)[];
  dropdownClass?: string;
  placeholder?: string;
  disabled?: boolean;
}

export { type SelectProps, type SelectOptionType, type MultiSelectProps };
