import A from "./A.svelte";
import type { Snippet } from "svelte";
import type { HTMLAnchorAttributes } from "svelte/elements";
import { anchor } from "./theme";
import { type VariantProps } from "tailwind-variants";

type AnchorColorType = VariantProps<typeof anchor>["color"];

interface AnchorProps extends HTMLAnchorAttributes {
  children: Snippet;
  color?: AnchorColorType;
  class?: string;
}

export { A, anchor, type AnchorProps, type AnchorColorType };
