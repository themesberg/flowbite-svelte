import type { PopperProps } from "$lib/utils/Popper.svelte";
import type { Snippet } from "svelte";
import type { LinkType } from "../types";

interface MegaMenuProps extends Omit<PopperProps, "children"> {
  children: Snippet<[{ item: LinkType; index: number }]>;
  extra?: Snippet;
  items?: LinkType[];
  full?: boolean;
  ulClass?: string;
}

export { type MegaMenuProps };
