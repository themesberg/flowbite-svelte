<script lang="ts">
  import { footerLink, type FooterLinkTheme } from ".";
  import clsx from "clsx";
  import { type FooterLinkProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, liClass, aClass, href, ...restProps }: FooterLinkProps = $props();

  const theme = getTheme("footerLink");

  const { base, link } = footerLink();
</script>

<li class={base({ class: clsx((theme as FooterLinkTheme)?.base, liClass) })}>
  <a {...restProps} {href} class={link({ class: clsx((theme as FooterLinkTheme)?.link, aClass) })}>
    {@render children()}
  </a>
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterLinkProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L632)
## Props
@prop children
@prop liClass
@prop aClass
@prop href
@prop ...restProps
-->
