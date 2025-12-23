<script lang="ts">
  import { SvelteDate } from "svelte/reactivity";
  import { footerCopyright } from "./theme";
  import clsx from "clsx";
  import type { FooterCopyrightProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { href, by, copyrightMessage = "All Rights Reserved.", year, classes, class: className, ...restProps }: FooterCopyrightProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("footerCopyright"));

  const effectiveYear = $derived(year ?? new SvelteDate().getFullYear());

  const { base, link, bySpan } = footerCopyright();
</script>

<span class={base({ class: clsx(theme?.base, className) })}>
  &copy; {effectiveYear}
  {#if href}
    <a {...restProps} {href} class={link({ class: clsx(theme?.link, styling?.link) })}>
      {by}
    </a>
  {:else}
    <span class={bySpan({ class: clsx(theme?.bySpan, styling?.bySpan) })}>{by}</span>
  {/if}
  {copyrightMessage}
</span>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterCopyrightProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L744)
## Props
@prop href
@prop by
@prop copyrightMessage = "All Rights Reserved."
@prop year
@prop classes
@prop class: className
@prop ...restProps
-->
