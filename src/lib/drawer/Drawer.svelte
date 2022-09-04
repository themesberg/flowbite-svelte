<script lang="ts">
  import classNames from 'classnames';
  import type { drawerTransitionParamTypes, drawerTransitionTypes } from '../types';
  import { fly, slide, blur, fade } from 'svelte/transition';
  import { clickOutside } from '$lib/utils/clickOutside';

  export let hidden: boolean = true;
  export let id: string = 'drawer-example';
  export let divClass: string =
    'overflow-y-auto fixed left-0 top-0 z-50 p-4 w-80 h-full bg-white dark:bg-gray-800';

  export let transitionParams: drawerTransitionParamTypes = {};
  export let transitionType: drawerTransitionTypes = 'fly';

  function multiple(node: HTMLElement, params: any) {
    switch (transitionType) {
      case 'slide':
        return slide(node, params);
      case 'blur':
        return blur(node, params);
      case 'fly':
        return fly(node, params);
      case 'fade':
        return fade(node, params);
    }
  }

  const handleDrawer = () => {
    hidden = !hidden;
    console.log('clicked');
  };
</script>

{#if !hidden}
  <div
    class="fixed top-0 left-0 z-50 w-full h-full bg-gray-900/70"
    on:click={() => !hidden && handleDrawer()} />
  <div
    use:clickOutside={() => !hidden && handleDrawer()}
    {id}
    {...$$restProps}
    class={classNames(divClass, $$props.class)}
    transition:multiple={transitionParams}
    tabindex="-1"
    aria-controls={id}
    aria-labelledby={id}>
    <slot {hidden} />
  </div>
{/if}
