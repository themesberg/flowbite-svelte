<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import { tablebodycell } from ".";
  import type { TableBodyCellProps } from "$lib/types";

  let { children, class: className, colspan, onclick, ...restProps }: TableBodyCellProps = $props();
</script>

<td {...restProps} class={twMerge(tablebodycell(), clsx(className))} colspan={colspan ?? 1}>
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
[TableBodyCellProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1545)
## Props
@prop children
@prop class: className
@prop colspan
@prop onclick
@prop ...restProps
-->
