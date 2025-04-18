<script lang="ts">
  import { TableBodyRow, TableBodyCell, type TableBodyProps as Props, type CellValue, type BodyRow } from ".";

  let { children, bodyItems, class: className, ...restProps }: Props = $props();

  function getCellValues(row: BodyRow): CellValue[] {
    if (Array.isArray(row)) {
      return row;
    } else {
      return Object.values(row);
    }
  }
</script>

<tbody {...restProps} class={className}>
  {#if bodyItems}
    {#each bodyItems as row}
      <TableBodyRow>
        {#each getCellValues(row) as cellValue}
          <TableBodyCell>{cellValue ?? ""}</TableBodyCell>
        {/each}
      </TableBodyRow>
    {/each}
  {:else if children}
    {@render children()}
  {/if}
</tbody>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Type
Props
## Props
@prop children
@prop bodyItems
@prop class: className
@prop ...restProps
-->
