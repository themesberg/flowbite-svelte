import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

type PsizeType = "sm" | "lg" | "xl" | "2xl" | "xs" | "base" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
type PweightType = "normal" | "thin" | "extralight" | "light" | "medium" | "semibold" | "bold" | "extrabold" | "black" | undefined;
type SpaceType = "normal" | "tighter" | "tight" | "wide" | "wider" | "widest" | undefined;
type HeightType = "normal" | "tight" | "none" | "snug" | "relaxed" | "loose" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | undefined;
type AlignType = "left" | "center" | "right" | undefined;
type WhitespaceType = "normal" | "nowrap" | "pre" | "preline" | "prewrap" | undefined;

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children: Snippet;
  italic?: boolean;
  firstUpper?: boolean;
  whitespace?: WhitespaceType;
  size?: PsizeType;
  weight?: PweightType;
  space?: SpaceType;
  height?: HeightType;
  align?: AlignType;
  justify?: boolean;
  class?: string;
}

export { type ParagraphProps };
