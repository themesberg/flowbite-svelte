<script lang="ts" context="module">
  export type DropdownType = {
    activeClass: string;
  };
</script>

<script lang="ts">
  import type { Placement } from '@floating-ui/dom';
  import { twMerge } from 'tailwind-merge';
  import Popper from '$lib/utils/Popper.svelte';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import type {FrameColor} from '$lib/utils/Frame.svelte';

  const activeUrlStore = writable('');

  export let activeUrl: string = '';
  export let open: boolean = false;
  export let containerClass: string = 'divide-y z-50';
  export let classContainer: string | undefined = undefined;
  export let headerClass: string = 'py-1 overflow-hidden rounded-t-lg';
  export let classHeader: string | undefined = undefined;
  export let footerClass: string = 'py-1 overflow-hidden rounded-b-lg';
  export let classFooter: string | undefined = undefined;
  export let activeClass: string = 'text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900';
  export let classActive: string | undefined = undefined;
  export let arrow: boolean = false;
  export let trigger: 'hover' | 'click' | 'focus' = 'click';
  export let placement: Placement = 'bottom';
  export let color: FrameColor = 'dropdown';
  export let shadow: boolean = true;
  export let rounded: boolean = true;

  let activeCls = twMerge(activeClass, classActive);

  setContext<DropdownType>('DropdownType', { activeClass: activeCls });

  $: activeUrlStore.set(activeUrl);

  setContext('activeUrl', activeUrlStore);
  // propagate props type from underlying Frame
 

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
@prop export let activeUrl: string = '';
@prop export let open: boolean = false;
@prop export let containerClass: string = 'divide-y z-50';
@prop export let classContainer: string | undefined = undefined;
@prop export let headerClass: string = 'py-1 overflow-hidden rounded-t-lg';
@prop export let classHeader: string | undefined = undefined;
@prop export let footerClass: string = 'py-1 overflow-hidden rounded-b-lg';
@prop export let classFooter: string | undefined = undefined;
@prop export let activeClass: string = 'text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900';
@prop export let classActive: string | undefined = undefined;
@prop export let arrow: boolean = false;
@prop export let trigger: 'hover' | 'click' | 'focus' = 'click';
@prop export let placement: Placement = 'bottom';
@prop export let color: FrameColor = 'dropdown';
@prop export let shadow: boolean = true;
@prop export let rounded: boolean = true;
-->
