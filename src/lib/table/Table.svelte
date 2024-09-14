<script lang="ts">
  import { setContext } from 'svelte';
  import { type TableProps as Props, table as tableCls, type TableCtxType, TableHead, TableBody } from '.';

  let { children, footerSlot, captionSlot, tableItems, divClass = 'relative overflow-x-auto', striped, hoverable, noborder, shadow, color = 'default', customeColor, class: className, ...restProps }: Props = $props();

  const { base, table } = $derived(tableCls({ color, shadow }));

  let tableCtx: TableCtxType = {
    get striped() {
      return striped;
    },
    get hoverable() {
      return hoverable;
    },
    get noborder() {
      return noborder;
    },
    get color() {
      return color;
    }
  };

  setContext('tableCtx', tableCtx);
  let headItems: string[] = $state([]);
  let bodyItems: string[][] = $state([]);
  if (tableItems) {
    headItems = Object.keys(tableItems[0]).map((key) => key.charAt(0).toUpperCase() + key.slice(1));
    bodyItems = tableItems.map((item) => Object.values(item));
  }
</script>

<div class={base({ class: divClass })}>
  <table {...restProps} class={table({ className })}>
    {#if captionSlot}
      {@render captionSlot()}
    {/if}
    {#if tableItems}
      <TableHead {headItems} />
      <TableBody {bodyItems} />
    {:else if children}
      {@render children()}
    {/if}
    {#if footerSlot}
      {@render footerSlot()}
    {/if}
  </table>
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop footerSlot
@prop captionSlot
@prop tableItems
@prop divClass = 'relative overflow-x-auto'
@prop striped
@prop hoverable
@prop noborder
@prop shadow
@prop color = 'default'
@prop customeColor
@prop class: className
@prop ...restProps
-->
