<script lang="ts">
  import clsx from "clsx";
  import { tableHeadCell } from ".";
  import type { TableHeadCellProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, class: className, ...restProps }: TableHeadCellProps = $props();

  const theme = getTheme("tableHeadCell");
</script>

<th {...restProps} class={tableHeadCell({ class: clsx(theme, className) })}>
  {#if children}
    {@render children()}
  {/if}
</th>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TableHeadCellProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1658)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
