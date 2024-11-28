import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

interface KbdProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  class: string | undefined | null;
}

export { type KbdProps };
