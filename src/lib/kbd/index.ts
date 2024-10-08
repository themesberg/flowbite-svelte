import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import Kbd from "./Kbd.svelte";
import { kbd } from "./theme";

interface KbdProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  class: string | undefined | null;
}

export { Kbd, kbd, type KbdProps };
