<script lang="ts">
  import classNames from 'classnames';
  import type { drawerTransitionParamTypes, drawerTransitionTypes } from '../types';
  import { fly, slide, blur, fade } from 'svelte/transition';
  import { clickOutside } from '$lib/utils/clickOutside';

  export let hidden: boolean = true;
  export let id: string = 'drawer-example';
  export let divClass: string =
    'overflow-y-auto absolute top-0 z-40 p-4 w-80 h-screen bg-white dark:bg-gray-800';

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
    use:clickOutside={() => !hidden && handleDrawer()}
    {id}
    {...$$restProps}
    class={classNames(divClass, $$props.class)}
    transition:multiple={transitionParams}
    tabindex="-1"
    aria-labelledby="drawer-label">
    <slot {hidden} />
  </div>
{/if}
