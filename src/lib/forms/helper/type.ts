import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { type ColorName } from "$lib/types";

interface HelperProps extends HTMLAttributes<HTMLParagraphElement> {
  children: Snippet;
  class?: string;
  color?: ColorName | "disabled";
}

export { type HelperProps };
