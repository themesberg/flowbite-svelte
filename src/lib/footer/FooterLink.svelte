<script lang="ts">
  import { footerLink } from "./theme";
  import clsx from "clsx";
  import type { FooterLinkProps } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import { untrack } from "svelte";

  let { children, liClass, aClass, href, classes, class: className, ...restProps }: FooterLinkProps = $props();

  warnThemeDeprecation(
    "FooterLink",
    untrack(() => ({ liClass, aClass })),
    { liClass: "class", aClass: "link" }
  );

  // link, bySpan
  const styling = $derived(classes ?? { link: aClass });

  const { base, link } = footerLink();

  const baseCls = $derived(base({ class: clsx(getTheme("footerLink")?.base, className ?? liClass) }));
  const linkCls = $derived(link({ class: clsx(getTheme("footerLink")?.link, styling.link) }));
</script>

<li class={baseCls}>
  <a {...restProps} {href} class={linkCls}>
    {@render children()}
  </a>
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterLinkProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L764)
## Props
@prop children
@prop liClass
@prop aClass
@prop href
@prop classes
@prop class: className
@prop ...restProps
-->
