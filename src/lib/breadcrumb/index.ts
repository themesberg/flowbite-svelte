import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { HTMLLiAttributes } from 'svelte/elements';
import Breadcrumb from './Breadcrumb.svelte';
import BreadcrumbItem from './BreadcrumbItem.svelte';
import { breadcrumb } from './theme';

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

export { Breadcrumb, BreadcrumbItem, breadcrumb, type BreadcrumbProps, type BreadcrumbItemProps };
