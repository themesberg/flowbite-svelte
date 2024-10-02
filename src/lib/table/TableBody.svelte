<script lang="ts">
  import { TableBodyRow, TableBodyCell, type TableBodyProps as Props } from '.';

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
  {:else if children}
    {@render children()}
  {/if}
</tbody>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: any;
@props:bodyItems: any;
@props:class: any;
-->
