<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import { footerCopyright } from ".";
  import type { FooterCopyrightProps } from "$lib/types";

  let { spanClass, aClass, href, by, copyrightMessage = "All Rights Reserved.", year, bySpanClass, ...restProps }: FooterCopyrightProps = $props();

  if (!year) year = new Date().getFullYear();

  const { base, link, bySpan } = footerCopyright();
</script>

<span class={twMerge(base(), clsx(spanClass))}>
  &copy; {year}
  {#if href}
    <a {...restProps} {href} class={twMerge(link(), clsx(aClass))}>
      {by}
    </a>
  {:else}
    <span class={twMerge(bySpan(), clsx(bySpanClass))}>{by}</span>
  {/if}
  {copyrightMessage}
</span>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterCopyrightProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L653)
## Props
@prop spanClass
@prop aClass
@prop href
@prop by
@prop copyrightMessage = "All Rights Reserved."
@prop year
@prop ...restProps
-->
