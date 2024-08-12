<script lang="ts">
    import { setContext } from 'svelte';
  import { type PaginationProps as Props, pagination, PaginationItem } from '.';

  let {
    pages = [],
    previous,
    next,
    prevContent,
    nextContent,
    activeClass,
    normalClass,
    ulClass,
    table,
    size,
    ariaLabel,
    ...attributes
  }: Props = $props()

  setContext('group', true);
  setContext('table', table);
  setContext('size', size);
  
  const paginationClass = $derived(pagination({ table, size }));
</script>

<nav aria-label={ariaLabel}>
  <ul class={paginationClass}>
    {#if typeof previous === 'function'}
    <li>
      <PaginationItem {size} onclick={()=>previous()} class={table ? 'rounded-l' : 'rounded-s-lg'}>
        {#if prevContent}
          {@render prevContent()}
        {:else}
          Previous
        {/if}
      </PaginationItem>
    </li>
    {/if}
    {#each pages as { name, href, active }}
      <li>
        <PaginationItem {size} {active} {href} {...attributes}>
          {name}
        </PaginationItem>
      </li>
    {/each}
    {#if typeof next === 'function'}
    <li>
      <PaginationItem size={size} onclick={()=>next()} class={table ? 'rounded-r' : 'rounded-e-lg'}>
        {#if nextContent}
          {@render nextContent()}
        {:else}
          Next
        {/if}
      </PaginationItem>
    </li>
    {/if}
  </ul>
</nav>