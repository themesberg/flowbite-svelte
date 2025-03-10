import type { Snippet } from "svelte";
import type { LinkType } from "../types";
import type { HTMLAttributes } from "svelte/elements";

interface MegaMenuProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  children: Snippet<[{ item: LinkType; index: number }]>;
  footer?: Snippet;
  items?: LinkType[];
  full?: boolean;
  ulClass?: string;
  open: boolean;
  divClass?: string;
  footerClass?: string;
  headerClass?: string;
}

export { type MegaMenuProps };
