<script lang="ts" context="module">
  export type DropdownType = {
    activeClass: string;
  };
</script>

<script lang="ts">
  import type { Placement } from '@floating-ui/dom';
  import type { ComponentProps } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import Popper from '$lib/utils/Popper.svelte';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import type { FrameColor } from '$lib/utils/Frame.svelte';

  interface $$Props extends ComponentProps<Popper> {
    activeUrl?: string;
    open?: boolean;
    containerClass?: string;
    classContainer?: string;
    headerClass?: string;
    classHeader?: string;
    footerClass?: string;
    classFooter?: string;
    activeClass?: string;
    classActive?: string;
    arrow?: boolean;
    trigger?: 'hover' | 'click' | 'focus';
    placement?: Placement;
    color?: FrameColor;
    shadow?: boolean;
    rounded?: boolean;
  }

  export let activeUrl: $$Props['activeUrl'] = undefined;
  export let open: $$Props['open'] = false;
  export let containerClass: $$Props['containerClass'] = 'divide-y z-50';
  export let classContainer: $$Props['classContainer'] = undefined;
  export let headerClass: $$Props['headerClass'] = 'py-1 overflow-hidden rounded-t-lg';
  export let classHeader: $$Props['classHeader'] = undefined;
  export let footerClass: $$Props['footerClass'] = 'py-1 overflow-hidden rounded-b-lg';
  export let classFooter: $$Props['classFooter'] = undefined;
  export let activeClass: $$Props['activeClass'] = 'text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900';
  export let classActive: $$Props['classActive'] = undefined;
  export let arrow: $$Props['arrow'] = false;
  export let trigger: $$Props['trigger'] = 'click';
  export let placement: $$Props['placement'] = 'bottom';
  export let color: $$Props['color'] = 'dropdown';
  export let shadow: $$Props['shadow'] = true;
  export let rounded: $$Props['rounded'] = true;

  const activeUrlStore = writable('');
  let activeCls = twMerge(activeClass, classActive);

  setContext<DropdownType>('DropdownType', { activeClass: activeCls });

  $: activeUrlStore.set(activeUrl ?? '');

  setContext('activeUrl', activeUrlStore);

  $: containerCls = twMerge(containerClass, classContainer);
  $: headerCls = twMerge(headerClass, classHeader);
  $: ulCls = twMerge('py-1', $$props.class);
  $: footerCls = twMerge(footerClass, classFooter);
  // let arrow, trigger, placement, color, shadow, rounded;
</script>

<Popper activeContent {...$$restProps} {trigger} {arrow} {placement} {shadow} {rounded} {color} class={containerCls} on:show bind:open>
  {#if $$slots.header}
    <div class={headerCls}>
      <slot name="header" />
    </div>
  {/if}
  <ul class={ulCls}>
    <slot />
  </ul>
  {#if $$slots.footer}
    <div class={footerCls}>
      <slot name="footer" />
    </div>
  {/if}
</Popper>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let activeUrl: $$Props['activeUrl'] = undefined;
@prop export let open: $$Props['open'] = false;
@prop export let containerClass: $$Props['containerClass'] = 'divide-y z-50';
@prop export let classContainer: $$Props['classContainer'] = undefined;
@prop export let headerClass: $$Props['headerClass'] = 'py-1 overflow-hidden rounded-t-lg';
@prop export let classHeader: $$Props['classHeader'] = undefined;
@prop export let footerClass: $$Props['footerClass'] = 'py-1 overflow-hidden rounded-b-lg';
@prop export let classFooter: $$Props['classFooter'] = undefined;
@prop export let activeClass: $$Props['activeClass'] = 'text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900';
@prop export let classActive: $$Props['classActive'] = undefined;
@prop export let arrow: $$Props['arrow'] = false;
@prop export let trigger: $$Props['trigger'] = 'click';
@prop export let placement: $$Props['placement'] = 'bottom';
@prop export let color: $$Props['color'] = 'dropdown';
@prop export let shadow: $$Props['shadow'] = true;
@prop export let rounded: $$Props['rounded'] = true;
-->
