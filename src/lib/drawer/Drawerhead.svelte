<script lang="ts">
  import { drawerhead } from "./theme";
  import clsx from "clsx";
  import type { DrawerheadProps } from "$lib";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { closeIcon: closeIconSnippet, children, class: className, classes, ...restProps }: DrawerheadProps = $props();

  const styling = $derived(classes);
  const theme = $derived(getTheme("drawerhead"));

  const { base, closeButton, closeIcon } = $derived(drawerhead());
</script>

<div data-scope="drawer-head" data-part="base" class={base({ class: clsx(theme?.base, className) })}>
  {#if children}
    {@render children()}
  {/if}
  {#if closeIconSnippet}
    {@render closeIconSnippet()}
  {:else}
    <button type="button" data-part="close-button" {...restProps} class={closeButton({ class: clsx(theme?.closeButton, styling?.closeButton) })}>
      <svg data-part="close-icon" class={closeIcon({ class: clsx(theme?.closeIcon, styling?.closeIcon) })} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
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
[DrawerheadProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L651)
## Props
@prop closeIcon: closeIconSnippet
@prop children
@prop class: className
@prop classes
@prop ...restProps
-->
