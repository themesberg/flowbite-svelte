<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { LinkType } from '../types';
  import Popper from '../utils/Popper.svelte';
  import type { ComponentProps } from 'svelte';

  interface $$Props extends ComponentProps<Popper> {
    items?: LinkTypeLike[];
    full?: boolean;
    ulClass?: string;
  }

  export let items: LinkTypeLike[] = [];
  export let full: boolean = false;
  export let open: boolean = false;
  export let ulClass: string = 'grid grid-flow-row gap-y-4 md:gap-x-0 auto-col-max auto-row-max';

  interface LinkTypeLike extends LinkType {
    [propName: string]: any;
  }

  let wrapperClass: string;
  $: wrapperClass = twMerge(full && 'border-y w-full', $$props.class);

  let ulCls: string;
  $: ulCls = twMerge(ulClass, full && $$slots.extra ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3', 'text-sm font-medium', full && $$slots.extra && 'md:w-2/3', $$props.classUl);
</script>

<Popper color={full ? 'default' : 'dropdown'} border={!full} rounded={!full} activeContent arrow={false} trigger="click" placement="bottom" yOnly={full} {...$$restProps} class={wrapperClass} on:show bind:open>
  <div class="flex flex-col md:flex-row p-4 max-w-screen-md justify-center mx-auto mt-2">
    <ul class={ulCls}>
      {#each items as item, index}
        <li>
          <slot {item} {index} />
        </li>
      {:else}
        <slot item={items[0]} index={0} />
      {/each}
    </ul>
    {#if full && $$slots.extra}<div class="md:w-1/3 mt-4 md:mt-0"><slot name="extra" /></div>{/if}
  </div>
</Popper>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let items: LinkTypeLike[] = [];
@prop export let full: boolean = false;
@prop export let open: boolean = false;
@prop export let ulClass: string = 'grid grid-flow-row gap-y-4 md:gap-x-0 auto-col-max auto-row-max';
-->
