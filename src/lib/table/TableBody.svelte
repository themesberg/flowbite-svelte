<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { TableBodyRow, TableBodyCell } from '.';

  interface Props extends HTMLAttributes<HTMLTableSectionElement> {
    children?: Snippet;
    class?: string;
    bodyItems?: any[];
  }

  let { children, bodyItems, class: className, ...restProps }: Props = $props();
</script>

<tbody class={className} {...restProps}>
  {#if bodyItems}
    {#each bodyItems as items}
      <TableBodyRow>
        {#each items as item}
        <TableBodyCell>{item}</TableBodyCell>
        {/each}
      </TableBodyRow>
    {/each}
    {:else}
    {#if children}
      {@render children()}
    {/if}
  {/if}
</tbody>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
