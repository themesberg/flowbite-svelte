import type { Snippet } from "svelte";
import type { HTMLInputAttributes } from "svelte/elements";
import type { SearchVariants } from "./theme";

interface SearchProps<T> extends SearchVariants, Omit<HTMLInputAttributes, "size"> {
  children?: Snippet;
  value?: T;
}

export { type SearchProps };
