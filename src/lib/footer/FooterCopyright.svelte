<script lang="ts">
  import { footerCopyright } from ".";
  import { type FooterCopyrightProps, cn } from "$lib";

  let { spanClass, aClass, href, by, copyrightMessage = "All Rights Reserved.", year, bySpanClass, ...restProps }: FooterCopyrightProps = $props();

  if (!year) year = new Date().getFullYear();

  const { base, link, bySpan } = footerCopyright();
</script>

<span class={cn(base(), spanClass)}>
  &copy; {year}
  {#if href}
    <a {...restProps} {href} class={cn(link(), aClass)}>
      {by}
    </a>
  {:else}
    <span class={cn(bySpan(), bySpanClass)}>{by}</span>
  {/if}
  {copyrightMessage}
</span>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterCopyrightProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L636)
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
