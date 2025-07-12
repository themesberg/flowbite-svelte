<script lang="ts">
  import { footerCopyright, type FooterCopyrightTheme } from ".";
  import { type FooterCopyrightProps, cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { spanClass, aClass, href, by, copyrightMessage = "All Rights Reserved.", year, bySpanClass, ...restProps }: FooterCopyrightProps = $props();

  const theme = getTheme("footerCopyright");

  if (!year) year = new Date().getFullYear();

  const { base, link, bySpan } = footerCopyright();
</script>

<span class={cn(base(), spanClass, (theme as FooterCopyrightTheme)?.base)}>
  &copy; {year}
  {#if href}
    <a {...restProps} {href} class={cn(link(), aClass, (theme as FooterCopyrightTheme)?.link)}>
      {by}
    </a>
  {:else}
    <span class={cn(bySpan(), bySpanClass, (theme as FooterCopyrightTheme)?.bySpan)}>{by}</span>
  {/if}
  {copyrightMessage}
</span>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterCopyrightProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L649)
## Props
@prop spanClass
@prop aClass
@prop href
@prop by
@prop copyrightMessage = "All Rights Reserved."
@prop year
@prop bySpanClass
@prop ...restProps
-->
