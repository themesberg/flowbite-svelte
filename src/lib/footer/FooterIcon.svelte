<script lang="ts">
  import { footerIcon } from "./theme";
  import clsx from "clsx";
  import type { FooterIconProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, href, ariaLabel, class: className, ...restProps }: FooterIconProps = $props();
</script>

{#if href}
  <a {...restProps} {href} aria-label={ariaLabel} class={footerIcon({ class: clsx(getTheme("footerIcon"), className) })}>
    {@render children()}
  </a>
{:else}
  {@render children()}
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterIconProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L754)
## Props
@prop children
@prop href
@prop ariaLabel
@prop class: className
@prop ...restProps
-->
