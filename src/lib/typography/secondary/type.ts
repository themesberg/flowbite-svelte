import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

interface SecondaryProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
}

export { type SecondaryProps };
