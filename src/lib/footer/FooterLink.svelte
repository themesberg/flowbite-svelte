<script lang="ts">
  import { footerLink } from "./theme";
  import clsx from "clsx";
  import type { FooterLinkProps } from "$lib";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, href, classes, class: className, ...restProps }: FooterLinkProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("footerLink"));

  const { base, link } = footerLink();
</script>

<li data-scope="footer-link" data-part="base" class={base({ class: clsx(theme?.base, className) })}>
  <a data-part="link" {...restProps} {href} class={link({ class: clsx(theme?.link, styling?.link) })}>
    {@render children()}
  </a>
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterLinkProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L717)
## Props
@prop children
@prop href
@prop classes
@prop class: className
@prop ...restProps
-->
