import type { Snippet } from "svelte";
import type { HTMLButtonAttributes } from "svelte/elements";

interface DarkmodeProps extends HTMLButtonAttributes {
  class?: string;
  lightIcon?: Snippet;
  darkIcon?: Snippet;
  size?: "sm" | "md" | "lg";
  ariaLabel?: string;
}

export { type DarkmodeProps };
