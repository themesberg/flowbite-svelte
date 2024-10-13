import Drawer from "./Drawer.svelte";
import Drawerhead from "./Drawerhead.svelte";
import type { Snippet } from "svelte";
import type { HTMLAttributes, HTMLButtonAttributes } from "svelte/elements";
import type { TransitionFunc, ParamsType } from "../types";
import { drawer, drawerhead } from "./theme";

type WidthType = "default" | "full" | "half" | undefined;
type PlacementType = "left" | "right" | "top" | "bottom" | undefined;
type PosisionType = "fixed" | "absolute" | undefined;

interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  drawerStatus: boolean;
  closeDrawer?: () => void;
  activateClickOutside?: boolean;
  position?: PosisionType;
  width?: WidthType;
  backdrop?: boolean;
  backdropClass?: string;
  placement?: PlacementType;
  class?: string;
  params?: ParamsType;
  transition?: TransitionFunc;
}

interface DrawerheadProps extends HTMLButtonAttributes {
  closeIcon?: Snippet;
  children?: Snippet;
  tag?: string;
  headClass?: string;
  buttonClass?: string;
  svgClass?: string;
}

export { Drawer, drawer, Drawerhead, drawerhead, type DrawerProps, type DrawerheadProps };
