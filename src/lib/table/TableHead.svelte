<script lang="ts">
  import { getContext } from 'svelte';
  import type TableCtxType from './Table.svelte';
  import { TableHeadCell, type TableHeadProps as Props, tablehead} from '.'

  let { children, headerSlot, class: className, headItems, defaultRow = true, ...restProps }: Props = $props();

  const tableCtx: TableCtxType = getContext('tableCtx');
  const color = tableCtx.color;
  // const headColor = $derived(color ? color : tableCtx.color || 'default');
  $inspect('color in TableHead', color);
  const noborder: boolean = tableCtx.noborder;
  const striped: boolean = tableCtx.striped;

  const base = $derived(tablehead({ color, noborder, striped, className }));

  // const defaultBgColor = noborder || striped ? '' : 'bg-gray-50 dark:bg-gray-700';
  // const bgColors: { [key: string]: string } = {
  //   default: defaultBgColor,
  //   blue: 'bg-blue-600',
  //   green: 'bg-green-600',
  //   red: 'bg-red-600',
  //   yellow: 'bg-yellow-600',
  //   purple: 'bg-purple-600',
  //   indigo: 'bg-indigo-600',
  //   pink: 'bg-pink-600',
  //   custom: ''
  // };

  // let textColor = color === 'default' ? 'text-gray-700 dark:text-gray-400' : color === 'custom' ? '' : 'text-white  dark:text-white';
  // let borderColors = striped ? '' : color === 'default' ? 'border-gray-700' : color === 'custom' ? '' : `border-${color}-400`;

  // let theadCls = twMerge('text-xs uppercase', textColor, striped && borderColors, bgColors[color], className);
</script>

<thead {...restProps} class={base}>
  {#if headItems}
    {#if headerSlot}
      {@render headerSlot()}
    {/if}
    {#each headItems as item}
      <TableHeadCell>{item}</TableHeadCell>
    {/each}
  {:else}
    {#if children}
      {#if defaultRow}
        <tr>
          {@render children()}
        </tr>
      {:else}
        {@render children()}
      {/if}
    {/if}
  {/if}
</thead>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className
@prop defaultRow = true
@prop ...restProps
-->
