<script lang="ts">
  import { createEventDispatcher, setContext, type ComponentProps } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { ListGroupItemType } from '../types';
  import Frame from '../utils/Frame.svelte';
  import ListgroupItem from './ListgroupItem.svelte';

  const dispatch = createEventDispatcher();

  // propagate props type from underlying Frame
  interface $$Props extends ComponentProps<Frame> {
    items?: ListGroupItemType[] | string[];
    active?: boolean;
  }

  export let items: ListGroupItemType[] | string[] = [];
  export let active: boolean = false;
  export let defaultClass: string = 'divide-y divide-gray-200 dark:divide-gray-600';

  $: setContext('active', active);

  let groupClass: string;
  $: groupClass = twMerge(defaultClass, $$props.class);
</script>

<Frame tag={active ? 'div' : 'ul'} {...$$restProps} rounded border class={groupClass}>
  {#each items as item, index}
    {#if typeof item === 'string'}
      <ListgroupItem {active} {index} on:click={() => dispatch('click', item)}><slot {item} {index} /></ListgroupItem>
    {:else}
      <ListgroupItem {active} {...item} {index} on:click={() => dispatch('click', item)}><slot {item} {index} /></ListgroupItem>
    {/if}
  {:else}
    {@const item = items[0]}
    <slot {item} index={0} />
  {/each}
</Frame>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let items: ListGroupItemType[] | string[] = [];
@prop export let active: boolean = false;
@prop export let defaultClass: string = 'divide-y divide-gray-200 dark:divide-gray-600';
-->
