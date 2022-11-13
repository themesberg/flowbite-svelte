<script lang="ts">
  import classNames from 'classnames';
  import type { drawerTransitionParamTypes, drawerTransitionTypes } from '../types';
  import { fly, slide, blur, fade } from 'svelte/transition';
  import { clickOutside } from '../utils/clickOutside';
  export let activateClickOutside: boolean = true;
  export let hidden: boolean = true;
  export let position: 'fixed' | 'absolute' = 'fixed';
  export let leftOffset: string = 'inset-y-0 left-0';
  export let rightOffset: string = 'inset-y-0 right-0';
  export let topOffset: string = 'inset-x-0 top-0';
  export let bottomOffset: string = 'inset-x-0 bottom-0';
  export let width: string = 'w-80';
  export let backdrop: boolean = true;
  export let bgColor: string = 'bg-gray-900';
  export let bgOpacity: string = 'bg-opacity-75';
  export let placement: 'left' | 'right' | 'top' | 'bottom' = 'left';
  export let id: string = 'drawer-example';
  export let divClass: string = 'overflow-y-auto z-50 p-4 bg-white dark:bg-gray-800';

  export let transitionParams: drawerTransitionParamTypes = {};
  export let transitionType: drawerTransitionTypes = 'fly';

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

  const handleDrawer = () => {
    hidden = !hidden;
  };

  let backdropDivClass = classNames(
    'fixed top-0 left-0 z-50 w-full h-full',
    backdrop && bgColor,
    backdrop && bgOpacity
  );
</script>

{#if !hidden}
  {#if backdrop && activateClickOutside}
    <div role="presentation" class={backdropDivClass} on:click={() => !hidden && handleDrawer()} />
  {:else if backdrop && !activateClickOutside}
    <div role="presentation" class={backdropDivClass} />
  {/if}
  {#if activateClickOutside}
    <div
      use:clickOutside={() => !hidden && handleDrawer()}
      {id}
      {...$$restProps}
      class={classNames(divClass, width, position, placements[placement], $$props.class)}
      transition:multiple={transitionParams}
      tabindex="-1"
      aria-controls={id}
      aria-labelledby={id}>
      <slot {hidden} />
    </div>
  {:else}
    <div
      {id}
      {...$$restProps}
      class={classNames(divClass, width, position, placements[placement], $$props.class)}
      transition:multiple={transitionParams}
      tabindex="-1"
      aria-controls={id}
      aria-labelledby={id}>
      <slot {hidden} />
    </div>
  {/if}
{/if}
