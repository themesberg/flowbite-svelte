import type { Snippet } from "svelte";
import type { HTMLInputAttributes } from "svelte/elements";

interface DropzoneProps extends HTMLInputAttributes {
  children: Snippet;
  files?: FileList | null;
  class?: string;
}

export { type DropzoneProps };
