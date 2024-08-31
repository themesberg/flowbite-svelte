<script lang="ts" generics="T">
  import type { Writable } from 'svelte/store';
  import { getContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  export let padding: string = 'px-6 py-3';
  export let sort: ((a: T, b: T) => number) | undefined = undefined;
  export let defaultDirection: 'asc' | 'desc' = 'asc';
  export let defaultSort: boolean = false;
  export let direction: 'asc' | 'desc' | null = defaultSort ? defaultDirection : null;

  const sorting = getContext('sorting') as Writable<{ items: T[]; direction: -1 | 1; sorter: string }>;
  const sortId = Math.random().toString(36).substring(2);
  if(defaultSort) {
    sortItems();
  }
  $: direction = $sorting?.sorter === sortId ? $sorting.direction === 1 ? 'asc' : 'desc' : null;

  function sortItems() {
    sorting.update(({ items, direction, sorter }) => {
      if(!sort) return { items, direction, sorter };
      if(sorter === sortId) {
        direction = -direction;
      } else {
        direction = defaultDirection === 'asc' ? 1 : -1;
      }
      return {
        items: items.sort((a, b) => direction * sort(a, b)),
        direction,
        sorter: sortId
      };
    });
  }
</script>

{#if sort && sorting}
<th {...$$restProps} class={twMerge($$props.class, direction)} on:click on:focus on:keydown on:keypress on:keyup on:mouseenter on:mouseleave on:mouseover aria-sort={direction ? `${direction}ending` : undefined}>
  <button class={twMerge('w-full text-left', padding)} on:click={sortItems}>
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
@prop export let sort: ((a: T, b: T) => number) | undefined = undefined;
@prop export let defaultDirection: 'asc' | 'desc' = 'asc';
@prop export let defaultSort: boolean = false;
@prop export let direction: 'asc' | 'desc' | null = defaultSort ? defaultDirection : null;
-->
