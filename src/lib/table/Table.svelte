<script lang="ts">
  import { twMerge, twJoin } from 'tailwind-merge';
  import { setContext } from 'svelte';
  import { type TableProps as Props, table as tableCls, type TableColrType, type TableCtxType, TableHead, TableBody } from '.';

  
  let { children, footerSlot, captionSlot, tableItems, divClass = 'relative overflow-x-auto', striped = $bindable(), hoverable= $bindable(), noborder= $bindable(), shadow, color = 'default', customeColor, class: className, ...restProps }: Props = $props();

  const { base, table} = $derived(tableCls({ color, shadow }))
  // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
  // const colors = {
  //   default: 'text-gray-500 dark:text-gray-400',
  //   primary: 'text-primary-100 dark:text-primary-100',
  //   secondary: 'text-secondary-100 dark:text-secondary-100',
  //   gray: 'text-gray-100 dark:text-gray-100',
  //   red: 'text-red-100 dark:text-red-100',
  //   orange: 'text-orange-100 dark:text-orange-100',
  //   amber: 'text-amber-100 dark:text-amber-100',
  //   yellow: 'text-yellow-100 dark:text-yellow-100',
  //   lime: 'text-lime-100 dark:text-lime-100',
  //   green: 'text-green-100 dark:text-green-100',
  //   emerald: 'text-emerald-100 dark:text-emerald-100',
  //   teal: 'text-teal-100 dark:text-teal-100',
  //   cyan: 'text-cyan-100 dark:text-cyan-100',
  //   sky: 'text-sky-100 dark:text-sky-100',
  //   blue: 'text-blue-100 dark:text-blue-100',
  //   indigo: 'text-indigo-100 dark:text-indigo-100',
  //   violet: 'text-violet-100 dark:text-violet-100',
  //   purple: 'text-purple-100 dark:text-purple-100',
  //   fuchsia: 'text-fuchsia-100 dark:text-fuchsia-100',
  //   pink: 'text-pink-100 dark:text-pink-100',
  //   rose: 'text-rose-100 dark:text-rose-100'
  // };

  let tableCtx: TableCtxType = {
    get striped() { return striped; },
    get hoverable() { return hoverable; },
    get noborder() { return noborder; }, 
    get color() { return color; },
  };

  setContext('tableCtx', tableCtx);
  let headItems: string[] = $state([]);
  let bodyItems: string[][] = $state([]);
  if(tableItems) {
    headItems = Object.keys(tableItems[0]).map(key => key.charAt(0).toUpperCase() + key.slice(1));
    bodyItems = tableItems.map(item => Object.values(item));
  }
  // $effect(() => {
  //   tableCtx.color = color;
  //   tableCtx.hoverable = hoverable;
  //   tableCtx.striped = striped;
  //   tableCtx.noborder = noborder;
  // })
  // $inspect('hoverable', hoverable);
</script>

<div class={base({ class: divClass})}>
  <table {...restProps} class={table({ className })}>
    {#if captionSlot}
      {@render captionSlot()}
    {/if}
    {#if tableItems}
      <TableHead {headItems} />
      <TableBody {bodyItems} />
    {:else}
      {#if children}
        {@render children()}
      {/if}
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
@prop divClass = 'relative overflow-x-auto'
@prop striped
@prop hoverable
@prop noborder
@prop shadow
@prop color = 'default'
@prop customeColor
@prop ...restProps
-->
