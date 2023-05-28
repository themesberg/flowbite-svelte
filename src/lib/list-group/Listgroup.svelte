<script lang="ts">
  import { setContext, type ComponentProps } from 'svelte';
  import classNames from 'classnames';
  import type { ListGroupItemType } from '../types';
  import ListgroupItem from './ListgroupItem.svelte';
  import Frame from '../utils/Frame.svelte';

  // propagate props type from underlying Frame
  interface $$Props extends ComponentProps<Frame> {
    items?: ListGroupItemType[];
    active?: boolean;
  }

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

<!--
  @component
  ## Features
  [Go to List Group](https://flowbite-svelte.com/docs/components/list-group)
  ## Props
  @prop items: ListGroupItemType[] = [];
  @prop active: boolean = false;
  @prop defaultClass: string = 'divide-y divide-gray-200 dark:divide-gray-600';
  ## Example
  ```
  <script>
    import { Listgroup } from 'flowbite-svelte'
    let simpleList = ["Profile", "Settings", "Messages", "Download"]
  </script>

  <Listgroup items={simpleList} let:item class="w-48">
    {item}
  </Listgroup>
  ```
-->
