<script lang="ts">
  import type { ParamsType } from '$lib/types';
  import { type DrawerProps as Props, drawer } from '.';
  import { fly } from 'svelte/transition';

  let { children, drawerStatus, closeDrawer, activateClickOutside = true, position, width, backdrop = true, backdropClass, placement = 'left', class: divClass, params, transition = fly, ...restProps }: Props = $props();

  const { base, backdrop: backdropCls } = drawer({
    position,
    placement,
    width,
    backdrop
  });
</script>

{#if drawerStatus}
  {#if backdrop && activateClickOutside}
    <div role="presentation" class={backdropCls({ class: backdropClass })} onclick={closeDrawer}></div>
  {:else if backdrop && !activateClickOutside}
    <div role="presentation" class={backdropCls({ class: backdropClass })}></div>
  {:else if !backdrop && activateClickOutside}
    <div role="presentation" class="fixed start-0 top-0 z-50 h-full w-full" onclick={closeDrawer}></div>
  {:else if !backdrop && !activateClickOutside}
    <div role="presentation" class="fixed start-0 top-0 z-50 h-full w-full"></div>
  {/if}
  <div {...restProps} class={base({ class: divClass })} transition:transition={params as ParamsType} tabindex="-1">
    {@render children()}
  </div>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop drawerStatus
@prop toggleDrawer
@prop closeDrawer
@prop activateClickOutside = true
@prop position
@prop width
@prop backdrop = true
@prop backdropClass
@prop placement = 'left'
@prop class: divClass
@prop transitionParams
@prop transitionType = 'fly'
@prop ...restProps
-->
