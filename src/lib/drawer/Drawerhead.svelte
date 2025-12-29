<script lang="ts">
  import { drawerhead } from "./theme";
  import clsx from "clsx";
  import type { DrawerheadProps } from "$lib";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { closeIcon, children, class: className, classes, ...restProps }: DrawerheadProps = $props();

  const styling = $derived(classes);
  const theme = $derived(getTheme("drawerhead"));

  const { base, button, svg } = $derived(drawerhead());
</script>

<div class={base({ class: clsx(theme?.base, className) })}>
  {#if children}
    {@render children()}
  {/if}
  {#if closeIcon}
    {@render closeIcon()}
  {:else}
    <button type="button" {...restProps} class={button({ class: clsx(theme?.button, styling?.button) })}>
      <svg class={svg({ class: clsx(theme?.svg, styling?.svg) })} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
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
[DrawerheadProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L641)
## Props
@prop closeIcon
@prop children
@prop class: className
@prop classes
@prop ...restProps
-->
