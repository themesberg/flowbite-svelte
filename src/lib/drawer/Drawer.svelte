<script lang="ts">
  import type { Snippet } from 'svelte';
  import type {
    drawerTransitionParamTypes,
    drawerTransitionTypes
  } from '../types';
  import { twMerge } from 'tailwind-merge';
  import { fly, slide, blur, fade } from 'svelte/transition';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    children: Snippet;
    drawerStatus: boolean;
    toggleDrawer?: () => void;
    closeDrawer?: () => void;
    activateClickOutside?: boolean;
    position?: 'fixed' | 'absolute';
    leftOffset?: string | undefined;
    rightOffset?: string | undefined;
    topOffset?: string | undefined;
    bottomOffset?: string | undefined;
    width?: string | undefined | null;
    backdrop?: boolean;
    bgColor?: string | undefined;
    bgOpacity?: string | undefined;
    placement?: 'left' | 'right' | 'top' | 'bottom';
    class?: string | undefined;
    transitionParams: drawerTransitionParamTypes;
    transitionType?: drawerTransitionTypes;
  }

  let {
    children,
    drawerStatus,
    toggleDrawer,
    closeDrawer,
    activateClickOutside = true,
    position = 'fixed',
    leftOffset = 'inset-y-0 start-0',
    rightOffset = 'inset-y-0 end-0',
    topOffset = 'inset-x-0 top-0',
    bottomOffset = 'inset-x-0 bottom-0',
    width = 'w-80',
    backdrop = true,
    bgColor = 'bg-gray-900',
    bgOpacity = 'bg-opacity-75',
    placement = 'left',
    class: className = '',
    transitionParams,
    transitionType = 'fly',
    ...attributes
  }: Props = $props();

  function multiple(node: HTMLElement, params: any) {
    switch (transitionType) {
      case 'slide':
        return slide(node, params);
      case 'blur':
        return blur(node, params);
      case 'fade':
        return fade(node, params);
      default:
        return fly(node, params);
    }
  }

  const placements = {
    left: leftOffset,
    right: rightOffset,
    top: topOffset,
    bottom: bottomOffset
  };

  let backdropDivClass = twMerge(
    'fixed top-0 start-0 z-50 w-full h-full',
    backdrop && bgColor,
    backdrop && bgOpacity
  );
  let divCls = twMerge(
    'overflow-y-auto z-50 p-4 bg-white dark:bg-gray-800',
    width,
    position,
    placements[placement],
    className
  );
</script>

{#if drawerStatus}
  {#if backdrop && activateClickOutside}
    <div
      role="presentation"
      class={backdropDivClass}
      onclick={closeDrawer}
    ></div>
  {:else if backdrop && !activateClickOutside}
    <div role="presentation" class={backdropDivClass}></div>
  {:else if !backdrop && activateClickOutside}
    <div
      role="presentation"
      class="fixed start-0 top-0 z-50 h-full w-full"
      onclick={closeDrawer}
    ></div>
  {:else if !backdrop && !activateClickOutside}
    <div
      role="presentation"
      class="fixed start-0 top-0 z-50 h-full w-full"
    ></div>
  {/if}
  <div
    {...attributes}
    class={divCls}
    transition:multiple={transitionParams}
    tabindex="-1"
  >
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
@prop position = 'fixed'
@prop leftOffset = 'inset-y-0 start-0'
@prop rightOffset = 'inset-y-0 end-0'
@prop topOffset = 'inset-x-0 top-0'
@prop bottomOffset = 'inset-x-0 bottom-0'
@prop width = 'w-80'
@prop backdrop = true
@prop bgColor = 'bg-gray-900'
@prop bgOpacity = 'bg-opacity-75'
@prop placement = 'left'
@prop class: className = ''
@prop transitionParams
@prop transitionType = 'fly'
@prop ...attributes
-->
