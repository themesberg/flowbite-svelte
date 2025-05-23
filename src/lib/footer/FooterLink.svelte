<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import { footerLink } from ".";
  import type { FooterLinkProps } from "$lib/types";

  let { children, liClass, aClass, href, ...restProps }: FooterLinkProps = $props();
  const { base, link } = footerLink();
</script>

<li class={twMerge(base(), clsx(liClass))}>
  <a {...restProps} {href} class={twMerge(link(), clsx(aClass))}>
    {@render children()}
  </a>
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterLinkProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L674)
## Props
@prop children
@prop liClass
@prop aClass
@prop href
@prop ...restProps
-->
