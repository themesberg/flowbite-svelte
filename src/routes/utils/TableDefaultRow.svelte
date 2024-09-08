<script lang="ts">
  import { getContext } from 'svelte';

  interface Props {
    items: Array<Array<string>>;
    html?: boolean;
    rowState?: 'striped' | 'hover' | undefined;
  }

  let { items, html, rowState }: Props = $props();

  const category = getContext('category');
  // console.log('category: ', category)
  let trClass = $state('');
  let trLastClass = $state('');
  if (rowState === 'striped') {
    trClass = 'border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700';
    trLastClass = 'odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700';
  } else if (rowState === 'hover') {
    trClass = 'bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600';
    trLastClass = 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600';
  } else {
    trClass = 'bg-white border-b dark:bg-gray-800 dark:border-gray-700';
    trLastClass = 'bg-white dark:bg-gray-800';
  }
</script>

{#if category === 'props'}
  {#each items as item, i}
    {#if i === items.length - 1}
      <tr class={trLastClass}>
        {#each item as cell, j}
          {#if j === 0}
            <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
              {#if html}
                {@html cell}
              {:else}
                {cell}
              {/if}
            </th>
          {:else}
            <td class="px-6 py-4">
              {#if html}
                {@html cell}
              {:else}
                {cell}
              {/if}
            </td>
          {/if}
        {/each}
      </tr>
    {:else}
      <tr class={trClass}>
        {#each item as cell, j}
          {#if j === 0}
            <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
              {#if html}
                {@html cell}
              {:else}
                {cell}
              {/if}
            </th>
          {:else}
            <td class="px-6 py-4">
              {#if html}
                {@html cell}
              {:else}
                {cell}
              {/if}
            </td>
          {/if}
        {/each}
      </tr>
    {/if}
  {/each}
{:else}
  {#each items as tagName}
    <tr class={trClass}>
      <td class="px-6 py-4">
        {tagName}
      </td>
    </tr>
  {/each}
{/if}
