import type { Snippet } from "svelte";
import type { ParamsType, TransitionFunc } from "../types";
import type { HTMLAttributes, HTMLAnchorAttributes } from "svelte/elements";
import type { BadgeVariants } from "./theme";

interface BadgeProps extends BadgeVariants, Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  children: Snippet;
  icon?: Snippet;
  badgeStatus?: boolean;
  large?: boolean;
  dismissable?: boolean;
  href?: HTMLAnchorAttributes["href"];
  target?: HTMLAnchorAttributes["target"];
  transition?: TransitionFunc;
  params?: ParamsType;
  onclose?: (ev: Event) => void;
  aClass?: string;
}

export { type BadgeProps };
