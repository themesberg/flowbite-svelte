import type { Snippet } from "svelte";
import type { LinkType } from "../types";
import type { HTMLAttributes } from "svelte/elements";

interface MegaMenuProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  children: Snippet<[{ item: LinkType; index: number }]>;
  footer?: Snippet;
  items?: LinkType[];
  full?: boolean;
  ulClass?: string;
  dropdownStatus: boolean;
  divClass?: string;
  footerClass?: string;
  headerClass?: string;
  class?: string;
}

export { type MegaMenuProps };
