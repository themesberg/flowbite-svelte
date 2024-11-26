import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { HTMLLiAttributes } from "svelte/elements";

interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  solid?: boolean;
  navClass?: string;
  olClass?: string;
  ariaLabel?: string;
  class?: string;
}

interface BreadcrumbItemProps extends HTMLLiAttributes {
  children: Snippet;
  icon?: Snippet;
  home?: boolean;
  href?: string;
  linkClass?: string;
  spanClass?: string;
  homeClass?: string;
  class?: string;
}

export { type BreadcrumbProps, type BreadcrumbItemProps };
