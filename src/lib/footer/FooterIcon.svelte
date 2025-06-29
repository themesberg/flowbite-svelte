<script lang="ts">
  import { footerIcon } from ".";
  import { type FooterIconProps, cn } from "$lib";

  let { children, href, ariaLabel, class: className, ...restProps }: FooterIconProps = $props();
</script>

{#if href}
  <a {...restProps} {href} aria-label={ariaLabel} class={cn(footerIcon(), className)}>
    {@render children()}
  </a>
{:else}
  {@render children()}
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[FooterIconProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L657)
## Props
@prop children
@prop href
@prop ariaLabel
@prop class: className
@prop ...restProps
-->
