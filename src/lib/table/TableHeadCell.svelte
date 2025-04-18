<script lang="ts">
  import clsx from "clsx";
  import { type TableHeadCellProps as Props, tableheadcell } from "./";

  let { children, class: className, ...restProps }: Props = $props();
  const base = $derived(tableheadcell({ class: clsx(className) }));
</script>

<th {...restProps} class={base}>
  {#if children}
    {@render children()}
  {/if}
</th>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Type
Props
## Props
@prop children
@prop class: className
@prop ...restProps
-->
