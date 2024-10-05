<script lang="ts">
  import { setContext } from 'svelte';
  import { type TableProps as Props, table as tableCls, type TableCtxType, TableHead, TableBody, type TableItemType } from '.';

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
  let bodyItems: (string | number | boolean)[][] = $state([]);
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
@props: children: Snippet;
@props:footerSlot: Snippet;
@props:captionSlot: Snippet;
@props:tableItems: Record<string, string | number | boolean>[];
@props:divClass: string = 'relative overflow-x-auto';
@props:striped: boolean;
@props:hoverable: boolean;
@props:noborder: boolean;
@props:shadow: boolean;
@props:color: VariantProps<typeof table>['color'] = 'default';
@props:customeColor: string;
@props:class: string;
-->
