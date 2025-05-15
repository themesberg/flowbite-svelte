<script lang="ts">
  import { TableBodyRow, TableBodyCell } from ".";
  import type { TableBodyProps, CellValue, BodyRow } from "$lib/types";

  let { children, bodyItems, class: className, ...restProps }: TableBodyProps = $props();

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
[Go to docs](https://flowbite-svelte.com/)
## Type
[TableBodyProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1514)
## Props
@prop children
@prop bodyItems
@prop class: className
@prop ...restProps
-->
