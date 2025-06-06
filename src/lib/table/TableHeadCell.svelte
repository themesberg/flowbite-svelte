<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import { tableheadcell } from ".";
  import type { TableHeadCellProps } from "$lib/types";

  let { children, class: className, ...restProps }: TableHeadCellProps = $props();
</script>

<th {...restProps} class={twMerge(tableheadcell(), clsx(className))}>
  {#if children}
    {@render children()}
  {/if}
</th>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TableHeadCellProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1569)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
