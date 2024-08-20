<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';
  import type TableCtxType from './Table.svelte';
  import type { HTMLTdAttributes } from 'svelte/elements';

  interface Props extends HTMLTdAttributes {
    children?: Snippet;
    class?: string | undefined | null;
    colspan?: number;
    onclick?: () => void;
  }

  let { children, class: className, colspan, onclick, ...restProps }: Props = $props();

  const tableCtx: TableCtxType = getContext('tableCtx');

  let color = $state(tableCtx.color ? tableCtx.color : 'default');

  let tdCls: string = $state(twMerge('px-6 py-4 whitespace-nowrap font-medium', color === 'default' ? 'text-gray-900 dark:text-white' : 'text-blue-50 whitespace-nowrap dark:text-blue-100', className));
</script>

<td {...restProps} class={tdCls} colspan={colspan ?? 1}>
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
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className
@prop colspan
@prop onclick
@prop ...restProps
-->
