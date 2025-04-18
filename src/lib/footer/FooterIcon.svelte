<script lang="ts">
  import { footerIcon } from ".";
  import type { FooterIconProps } from "$lib/types";

  let { children, href, ariaLabel, class: aClass, ...restProps }: FooterIconProps = $props();

  const aCls = $derived(footerIcon({ class: aClass }));
</script>

{#if href}
  <a {...restProps} {href} aria-label={ariaLabel} class={aCls}>
    {@render children()}
  </a>
{:else}
  {@render children()}
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Type
[FooterIconProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L612)
## Props
@prop children
@prop href
@prop ariaLabel
@prop class: aClass
@prop ...restProps
-->
