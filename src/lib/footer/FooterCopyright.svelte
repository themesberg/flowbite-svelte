<script lang="ts">
  import { footerCopyright } from ".";
  import clsx from "clsx";
  import { type FooterCopyrightProps } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { spanClass, aClass, href, by, copyrightMessage = "All Rights Reserved.", year, bySpanClass, classes, class: className, ...restProps }: FooterCopyrightProps = $props();

  warnThemeDeprecation("FooterCopyright", { aClass, spanClass, bySpanClass }, { aClass: "link", spanClass: "class", bySpanClass: "bySpan" });
  // link, bySpan
  const styling = $derived(classes ?? { bySpan: bySpanClass, link: aClass });

  const theme = getTheme("footerCopyright");

  if (!year) year = new Date().getFullYear();

  const { base, link, bySpan } = footerCopyright();
</script>

<span class={base({ class: clsx(theme?.base, className ?? spanClass) })}>
  &copy; {year}
  {#if href}
    <a {...restProps} {href} class={link({ class: clsx(theme?.link, styling.link) })}>
      {by}
    </a>
  {:else}
    <span class={bySpan({ class: clsx(theme?.bySpan, styling.bySpan) })}>{by}</span>
  {/if}
  {copyrightMessage}
</span>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterCopyrightProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L629)
## Props
@prop spanClass
@prop aClass
@prop href
@prop by
@prop copyrightMessage = "All Rights Reserved."
@prop year
@prop bySpanClass
@prop classes
@prop class: className
@prop ...restProps
-->
