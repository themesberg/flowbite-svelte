import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

interface MarkProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
}

export { type MarkProps };
