import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { SpanVariants } from "./theme";

interface SpanProps extends HTMLAttributes<HTMLSpanElement> {
  children?: Snippet;
  italic?: boolean;
  underline?: boolean;
  linethrough?: boolean;
  uppercase?: boolean;
  gradient?: SpanVariants["gradient"];
  highlight?: SpanVariants["highlight"];
  decoration?: SpanVariants["decoration"];
  decorationThickness?: SpanVariants["decorationThickness"];
  decorationColor?: SpanVariants["decorationColor"];
}

export { type SpanProps };
