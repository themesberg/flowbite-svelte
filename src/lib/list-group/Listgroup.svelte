<script lang="ts">
  import { setContext } from 'svelte';
  import classNames from 'classnames';
  import type { ListGroupItemType } from '../types';
  import ListgroupItem from './ListgroupItem.svelte';
  import Frame from '../utils/Frame.svelte';

  export let items: ListGroupItemType[] = [];
  export let active: boolean = false;
  export let defaultClass: string = 'divide-y divide-gray-200 dark:divide-gray-600';

  $: setContext('active', active);

  let groupClass: string;
  $: groupClass = classNames(defaultClass, $$props.class);
</script>

<Frame tag={active ? 'div' : 'ul'} {...$$restProps} rounded border class={groupClass}>
  {#each items as item, index}
    <ListgroupItem {active} {...item} {index} on:click><slot {item} {index} /></ListgroupItem>
  {:else}
    <slot />
  {/each}
</Frame>
