import Search from "./Search.svelte";
import type { Snippet } from "svelte";
import { search } from "./theme";
import type { HTMLInputAttributes } from "svelte/elements";

interface SearchProps<T> extends Omit<HTMLInputAttributes, "size"> {
  children?: Snippet;
  inputClass?: string;
  size?: "sm" | "md" | "lg";
  placeholder?: string;
  value?: T;
}

export { Search, search, type SearchProps };
