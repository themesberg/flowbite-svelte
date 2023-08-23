<script lang="ts">
  import { setContext } from 'svelte';
  export let category: 'props' | 'events' | 'slots'= 'props';
  export let tableClass: string = 'w-full text-sm text-left text-gray-500 dark:text-gray-400';
  export let theadClass: string = 'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400';
  export let thClass: string = 'px-6 py-3';
  export let divClass: string = 'w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4';

  setContext('category', category);

  const headerNames = {
    props: ['Name', 'Type', 'Default'],
    events: ['Names'],
    slots: ['Names']
  }
  let header = headerNames[category]

</script>

<div class={divClass}>
  <table class={tableClass}>
    <thead class={theadClass}>
      <tr>
        {#if category === 'props'}
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
      <slot />
    </tbody>
  </table>
</div>
