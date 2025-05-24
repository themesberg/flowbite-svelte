<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import { footerIcon } from ".";
  import type { FooterIconProps } from "$lib/types";

  let { children, href, ariaLabel, class: className, ...restProps }: FooterIconProps = $props();

</script>

{#if href}
  <a {...restProps} {href} aria-label={ariaLabel} class={twMerge(footerIcon(), clsx(className))}>
    {@render children()}
  </a>
{:else}
  {@render children()}
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterIconProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L662)
## Props
@prop children
@prop href
@prop ariaLabel
@prop class: aClass
@prop ...restProps
-->
