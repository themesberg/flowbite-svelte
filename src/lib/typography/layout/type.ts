import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

interface LayoutProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  class?: string;
}

export { type LayoutProps };
