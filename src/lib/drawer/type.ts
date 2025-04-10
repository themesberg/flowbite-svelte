import type { Snippet } from "svelte";
import type { HTMLAttributes, HTMLButtonAttributes } from "svelte/elements";
import type { TransitionFunc, ParamsType } from "../types";
import type { DrawerVariants } from "./theme";

interface DrawerProps extends DrawerVariants, HTMLAttributes<HTMLDivElement> {
  hidden: boolean;
  closeDrawer?: () => void;
  activateClickOutside?: boolean;
  backdrop?: boolean;
  backdropClass?: string;
  transitionParams?: ParamsType;
  transitionType?: TransitionFunc;
}

interface DrawerheadProps extends HTMLButtonAttributes {
  closeIcon?: Snippet;
  buttonClass?: string;
  svgClass?: string;
}

export { type DrawerProps, type DrawerheadProps };
