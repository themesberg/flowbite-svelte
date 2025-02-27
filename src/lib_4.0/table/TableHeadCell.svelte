<script lang="ts" generics="T">
  import type { HTMLThAttributes } from 'svelte/elements';
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import { twMerge } from 'tailwind-merge';

  interface $$Props extends HTMLThAttributes {
    padding?: string;
    sort?: ((a: T, b: T) => number) | null;
    defaultDirection?: 'asc' | 'desc';
    defaultSort?: boolean;
    direction?: 'asc' | 'desc' | null;
  }

  export let padding: $$Props['padding'] = 'px-6 py-3';
  export let sort: $$Props['sort'] = null;
  export let defaultDirection: $$Props['defaultDirection'] = 'asc';
  export let defaultSort: $$Props['defaultSort'] = false;
  export let direction: $$Props['direction'] = defaultSort ? defaultDirection : null;
  
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
@prop export let padding: $$Props['padding'] = 'px-6 py-3';
@prop export let sort: $$Props['sort'] = null;
@prop export let defaultDirection: $$Props['defaultDirection'] = 'asc';
@prop export let defaultSort: $$Props['defaultSort'] = false;
@prop export let direction: $$Props['direction'] = defaultSort ? defaultDirection : null;
-->
