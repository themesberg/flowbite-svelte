<script lang="ts">
  import clsx from "clsx";
  import { tableheadcell } from ".";
  import type { TableHeadCellProps } from "$lib/types";

  let { children, class: className, ...restProps }: TableHeadCellProps = $props();
  const base = $derived(tableheadcell({ class: clsx(className) }));
</script>

<th {...restProps} class={base}>
  {#if children}
    {@render children()}
  {/if}
</th>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TableHeadCellProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1519)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
