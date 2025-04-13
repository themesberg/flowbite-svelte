import type { Snippet } from "svelte";
import type { TransitionFunc } from "../types";
import type { HTMLAttributes } from "svelte/elements";
import type { BannerVariants } from "./theme";

interface BannerProps extends BannerVariants, HTMLAttributes<HTMLDivElement> {
  header?: Snippet;
  open?: boolean;
  dismissable?: boolean;
  color?: BannerVariants["color"];
  innerClass?: string;
  transition?: TransitionFunc;
  params?: object;
}

export { type BannerProps };
