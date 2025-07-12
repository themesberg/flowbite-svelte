<script lang="ts">
  import { drawerhead, type DrawerHeadTheme } from ".";
  import { type DrawerheadProps, cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { closeIcon, children, buttonClass, svgClass, class: className, ...restProps }: DrawerheadProps = $props();

  const theme = getTheme("drawer");

  const { base, button, svg } = $derived(drawerhead());
</script>

<div class={cn(base(), className, (theme as DrawerHeadTheme)?.base)}>
  {#if children}
    {@render children()}
  {/if}
  {#if closeIcon}
    {@render closeIcon()}
  {:else}
    <button type="button" {...restProps} class={cn(button(), buttonClass, (theme as DrawerHeadTheme)?.button)}>
      <svg class={cn(svg(), svgClass, (theme as DrawerHeadTheme)?.svg)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
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
[DrawerheadProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L596)
## Props
@prop closeIcon
@prop children
@prop buttonClass
@prop svgClass
@prop class: className
@prop ...restProps
-->
