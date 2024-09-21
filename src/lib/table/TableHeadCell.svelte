<script lang="ts" generics="T">
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import { twMerge } from 'tailwind-merge';

  export let padding: string = 'px-6 py-3';
  export let sort: ((a: T, b: T) => number) | null = null;
  export let defaultDirection: 'asc' | 'desc' = 'asc';
  export let defaultSort: boolean = false;
  export let direction: 'asc' | 'desc' | null = defaultSort ? defaultDirection : null;
  
  let sorter = getContext('sorter') as Writable<{id: string, sort: (a: T, b: T) => number, sortDirection: -1 | 1} | null>;
  let sortId = Math.random().toString(36).substring(2);
  $: direction = $sorter?.id === sortId ? $sorter.sortDirection === 1 ? 'asc' : 'desc' : null;
  
  if(defaultSort) {
    sortItems();
  }
  
  function sortItems() {
    if(!sort || !sorter) return;
    sorter.update(sorter => {
      return {
        id: sortId,
        sort,
        sortDirection: (sorter?.id === sortId ? -sorter.sortDirection : defaultDirection === 'asc' ? 1 : -1) as -1 | 1
      };
    });
  }
</script>

{#if sort && sorter}
<th {...$$restProps} class={$$props.class} on:click on:focus on:keydown on:keypress on:keyup on:mouseenter on:mouseleave on:mouseover aria-sort={direction ? `${direction}ending` : undefined}>
  <button class={twMerge('w-full text-left', 'after:absolute after:pl-3', direction === 'asc' && 'after:content-["▲"]', direction === 'desc' && 'after:content-["▼"]', padding)} on:click={sortItems}>
    <slot />
  </button>
</th>
{:else}
<th {...$$restProps} class={twMerge(padding, $$props.class)} on:click on:focus on:keydown on:keypress on:keyup on:mouseenter on:mouseleave on:mouseover>
  <slot />
</th>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let padding: string = 'px-6 py-3';
@prop export let sort: ((a: T, b: T) => number) | null = null;
@prop export let defaultDirection: 'asc' | 'desc' = 'asc';
@prop export let defaultSort: boolean = false;
@prop export let direction: 'asc' | 'desc' | null = defaultSort ? defaultDirection : null;
-->
