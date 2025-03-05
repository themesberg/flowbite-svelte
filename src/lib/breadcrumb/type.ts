import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { HTMLLiAttributes } from "svelte/elements";

interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  solid?: boolean;
  olClass?: string;
  ariaLabel?: string;
}

interface BreadcrumbItemProps extends HTMLLiAttributes {
  children: Snippet;
  icon?: Snippet;
  home?: boolean;
  href?: string;
  linkClass?: string;
  spanClass?: string;
  homeClass?: string;
}

export { type BreadcrumbProps, type BreadcrumbItemProps };
