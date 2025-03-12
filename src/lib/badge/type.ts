import type { Snippet } from "svelte";
import type { ParamsType, TransitionFunc } from "../types";
import type { HTMLAttributes, HTMLAnchorAttributes } from "svelte/elements";

type BadgeColorType = "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  icon?: Snippet;
  badgeStatus?: boolean;
  color?: BadgeColorType;
  large?: boolean;
  dismissable?: boolean;
  border?: boolean;
  href?: HTMLAnchorAttributes["href"];
  target?: HTMLAnchorAttributes["target"];
  rounded?: boolean;
  transition?: TransitionFunc;
  params?: ParamsType;
  onclick?: () => void;
  aClass?: string;
  class?: string;
}

export { type BadgeProps, type BadgeColorType };
