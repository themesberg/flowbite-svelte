<script lang="ts" context="module">
  export type DropdownType = {
    activeClass: string;
  };
</script>

<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import Popper from '$lib/utils/Popper.svelte';
  import type { ComponentProps } from 'svelte';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

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

  let activeCls = twMerge(activeClass, classActive);

  setContext<DropdownType>('DropdownType', { activeClass: activeCls });

  $: activeUrlStore.set(activeUrl);

  setContext('activeUrl', activeUrlStore);
  // propagate props type from underlying Frame
  interface $$Props extends ComponentProps<Popper> {
    activeUrl?: string;
    containerClass?: string;
    classContainer?: string;
    headerClass?: string;
    classHeader?: string;
    footerClass?: string;
    classFooter?: string;
    activeClass?: string;
    classActive?: string;
  }

  $: containerCls = twMerge(containerClass, classContainer);
  $: headerCls = twMerge(headerClass, classHeader);
  $: ulCls = twMerge('py-1', $$props.class);
  $: footerCls = twMerge(footerClass, classFooter);

  $: {
    // set default values
    $$restProps.arrow = $$restProps.arrow ?? false;
    $$restProps.trigger = $$restProps.trigger ?? 'click';
    $$restProps.placement = $$restProps.placement ?? 'bottom';
    $$restProps.color = $$restProps.color ?? 'dropdown';
    $$restProps.shadow = $$restProps.shadow ?? true;
    $$restProps.rounded = $$restProps.rounded ?? true;
  }
</script>

<Popper activeContent {...$$restProps} class={containerCls} on:show bind:open>
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
@prop export let headerClass: string = 'py-1 overflow-hidden rounded-t-lg';
@prop export let footerClass: string = 'py-1 overflow-hidden rounded-b-lg';
@prop export let activeClass: string = 'text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900';
-->
