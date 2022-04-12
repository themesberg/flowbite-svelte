<script lang="ts">
  import TableDefaultRow from './TableDefaultRow.svelte';
  export let inputValue = '';
  export let menuItems: Array<Array<string>>;
  export let filteredItems = [];
  const handleInput = () => {
    console.log('inputValue', inputValue);
    let result = (filteredItems = menuItems.filter((item) => item[0].toLowerCase().match(inputValue.toLowerCase())));
    console.log('result', result);
    return result;
  };
  export let header: Array<string>;
  export let divClass: string = 'relative overflow-x-auto shadow-md sm:rounded-lg';
  export let tableClass: string = 'w-full text-sm text-left text-gray-500 dark:text-gray-400';
  export let theadClass: string = 'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400';
</script>

<div class={divClass}>
  <div class="p-4">
    <label for="table-search" class="sr-only">Search</label>
    <div class="relative mt-1">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" /></svg>
      </div>
      <input bind:value={inputValue} on:input={handleInput} type="text" id="table-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
    </div>
  </div>

  <table class={tableClass}>
    <thead class={theadClass}>
      <tr>
        {#each header as column}
          <th scope="col" class="px-6 py-3">
            {column}
          </th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#if filteredItems.length > 0}
        <TableDefaultRow items={filteredItems} html />
      {:else}
        <TableDefaultRow items={menuItems} html />
      {/if}
    </tbody>
  </table>
</div>
