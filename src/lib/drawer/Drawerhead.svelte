<script lang="ts">
  import clsx from "clsx";
  import { drawerhead } from ".";
  import type { DrawerheadProps } from "$lib/types";

  let { closeIcon, children, buttonClass, svgClass, class: className, ...restProps }: DrawerheadProps = $props();

  const { base, button, svg } = $derived(drawerhead());
</script>

<div class={base({ class: clsx(className) })}>
  {#if children}
    {@render children()}
  {/if}
  {#if closeIcon}
    {@render closeIcon()}
  {:else}
    <button type="button" {...restProps} class={button({ class: buttonClass })}>
      <svg class={svg({ class: svgClass })} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
      </svg>
      <span class="sr-only">Close drawer</span>
    </button>
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DrawerheadProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L556)
## Props
@prop closeIcon
@prop children
@prop buttonClass
@prop svgClass
@prop class: className
@prop ...restProps
-->
