<script lang="ts">
  import clsx from "clsx";
  import { tableBodyCell } from ".";
  import type { TableBodyCellProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, class: className, colspan, onclick, ...restProps }: TableBodyCellProps = $props();

  const theme = getTheme("tableBodyCell");
</script>

<td {...restProps} class={tableBodyCell({ class: clsx(theme, className) })} colspan={colspan ?? 1}>
  {#if onclick}
    <button {onclick}>
      {#if children}
        {@render children()}
      {/if}
    </button>
  {:else if children}
    {@render children()}
  {/if}
</td>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TableBodyCellProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1670)
## Props
@prop children
@prop class: className
@prop colspan
@prop onclick
@prop ...restProps
-->
