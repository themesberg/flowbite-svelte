<script lang="ts">
  import { footerIcon } from ".";
  import clsx from "clsx";
  import { type FooterIconProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, href, ariaLabel, class: className, ...restProps }: FooterIconProps = $props();

  const theme = getTheme("footerIcon");
</script>

{#if href}
  <a {...restProps} {href} aria-label={ariaLabel} class={footerIcon({ class: clsx(theme, className) })}>
    {@render children()}
  </a>
{:else}
  {@render children()}
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterIconProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L635)
## Props
@prop children
@prop href
@prop ariaLabel
@prop class: className
@prop ...restProps
-->
