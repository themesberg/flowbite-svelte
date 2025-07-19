<script lang="ts">
  import { footerLink, type FooterLinkTheme } from ".";
  import clsx from "clsx";
  import { type FooterLinkProps } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { children, liClass, aClass, href, classes, class: className, ...restProps }: FooterLinkProps = $props();

  warnThemeDeprecation("FooterLink", { liClass, aClass }, { liClass: "class", aClass: "link" });
  // link, bySpan
  let styling = $derived(classes ?? { link: aClass });

  const theme = getTheme("footerLink");

  const { base, link } = footerLink();
</script>

<li class={base({ class: clsx((theme as FooterLinkTheme)?.base, className ?? liClass) })}>
  <a {...restProps} {href} class={link({ class: clsx((theme as FooterLinkTheme)?.link, styling.link) })}>
    {@render children()}
  </a>
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterLinkProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L634)
## Props
@prop children
@prop liClass
@prop aClass
@prop href
@prop classes
@prop class:className
@prop ...restProps
-->
