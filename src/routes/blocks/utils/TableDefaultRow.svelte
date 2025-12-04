<script lang="ts">
  import { getContext } from "svelte";
  type Props = {
    items: Array<Array<string>>;
    html?: boolean;
    rowState: "striped" | "hover" | undefined;
  };

  let { items, html, rowState }: Props = $props();

  // export let items: Array<Array<string>>;
  // export let html: boolean = false;
  // export let rowState: "striped" | "hover" | undefined = undefined;

  const category = getContext("category");
  // console.log('category: ', category)
  
  let trClass = $derived<string>(
    rowState === "striped"
      ? "border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-700"
      : rowState === "hover"
        ? "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        : "bg-white border-b dark:bg-gray-800 dark:border-gray-700"
  );
  
  let trLastClass = $derived<string>(
    rowState === "striped"
      ? "odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-700"
      : rowState === "hover"
        ? "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
        : "bg-white dark:bg-gray-800"
  );
</script>

{#if category === "props"}
  {#each items as item, i}
    {#if i === items.length - 1}
      <tr class={trLastClass}>
        {#each item as cell, j}
          {#if j === 0}
            <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">
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
            <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">
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
