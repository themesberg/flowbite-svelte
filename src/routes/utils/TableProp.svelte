<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import { setContext, type Snippet } from "svelte";

  let {
    children,
    category = "props",
    tableClass = "w-full text-sm text-left text-gray-500 dark:text-gray-400",
    theadClass = "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",
    thClass = "px-6 py-3",
    divClass = "w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4",
    class: className
  }: { children: Snippet; category?: "props" | "events" | "slots"; tableClass?: string; theadClass?: string; thClass?: string; divClass?: string; class?: string } = $props();

  setContext("category", category);

  const headerNames = {
    props: ["Name", "Default"],
    events: ["Names"],
    slots: ["Names"]
  };
  let header = headerNames[category];
</script>

<div class={divClass}>
  <table class={tableClass}>
    <thead class={twMerge(theadClass, className)}>
      <tr>
        {#if category === "props"}
          {#each header as column}
            <th scope="col" class={thClass}>
              {column}
            </th>
          {/each}
        {:else}
          <th scope="col" class={thClass}>
            {header}
          </th>
        {/if}
      </tr>
    </thead>
    <tbody>
      {@render children()}
    </tbody>
  </table>
</div>
