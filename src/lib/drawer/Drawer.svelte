<script lang="ts">
  import { fly, slide, blur, fade } from 'svelte/transition';
  import { type DrawerProps as Props, drawer } from '.';

  let {
    children,
    drawerStatus,
    toggleDrawer,
    closeDrawer,
    activateClickOutside = true,
    position,
    width,
    backdrop = true,
    backdropClass,
    placement = 'left',
    class: divClass,
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
  const { base, backdrop: backdropCls } = drawer({
    position,
    placement,
    width,
    backdrop    
  });
</script>

{#if drawerStatus}
  {#if backdrop && activateClickOutside}
    <div
      role="presentation"
      class={backdropCls({class: backdropClass})}
      onclick={closeDrawer}
    ></div>
  {:else if backdrop && !activateClickOutside}
    <div role="presentation" class={backdropCls({class: backdropClass})}></div>
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
    class={base({class: divClass})}
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
