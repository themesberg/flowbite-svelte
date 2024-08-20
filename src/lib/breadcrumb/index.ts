import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { HTMLLiAttributes } from 'svelte/elements';
import Breadcrumb from './Breadcrumb.svelte';
import BreadcrumbItem from './BreadcrumbItem.svelte';
import { breadcrumb } from './theme';

interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  solid?: boolean;
  navClass?: string | undefined | null;
  olClass?: string | undefined | null;
  ariaLabel?: string | undefined | null;
  class?: string | undefined | null;
}

interface BreadcrumbItemProps extends HTMLLiAttributes {
  children: Snippet;
  icon?: Snippet;
  home?: boolean;
  href?: string | undefined;
  linkClass?: string | undefined | null;
  spanClass?: string | undefined;
  homeClass?: string | undefined;
  class?: string | undefined;
}

export { Breadcrumb, BreadcrumbItem, breadcrumb, type BreadcrumbProps, type BreadcrumbItemProps };
