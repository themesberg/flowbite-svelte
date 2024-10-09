<script lang="ts" generics="T">
  import type { HTMLAttributes } from 'svelte/elements';
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';

  interface $$Props extends HTMLAttributes<HTMLTableSectionElement> {
    tableBodyClass?: string;
  }
  
  export let tableBodyClass: $$Props['tableBodyClass'] = undefined;

  $: items = getContext('items') as T[] || [];
  let filter = getContext('filter') as Writable<((t: T, term: string) => boolean) | null>;
  let searchTerm = getContext('searchTerm') as Writable<string>;
  $: filtered = $filter ? items.filter(item => $filter(item, $searchTerm)) : items;
  let sorter = getContext('sorter') as Writable<{id: string, sort: (a: T, b: T) => number, sortDirection: -1 | 1} | null>;
  $: sorted = $sorter ? filtered.toSorted((a, b) => $sorter.sortDirection * $sorter.sort(a, b)) : filtered;
</script>

<tbody {...$$restProps} class={tableBodyClass}>
  <slot />
  {#each sorted as item}
    <slot name="row" {item} />
  {/each}
</tbody>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let tableBodyClass: $$Props['tableBodyClass'] = undefined;
-->
