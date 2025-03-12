import type { Snippet } from "svelte";
import type { TransitionFunc } from "../types";
import type { HTMLAttributes } from "svelte/elements";

type ColorVariants = "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose";
type TypeVariants = "default" | "bottom" | "cta" | "signup" | "info";
type PositionVariants = "static" | "fixed" | "absolute" | "relative" | "sticky";

interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  header?: Snippet;
  bannerStatus?: boolean;
  position?: PositionVariants;
  dismissable?: boolean;
  color?: ColorVariants;
  bannerType?: TypeVariants;
  divClass?: string;
  innerClass?: string;
  transition?: TransitionFunc;
  params?: object;
  class?: string;
}

export { type BannerProps };
