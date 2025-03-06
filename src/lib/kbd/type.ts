import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

interface KbdProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
}

export { type KbdProps };
