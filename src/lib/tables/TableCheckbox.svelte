<script lang="ts">
  export let header: Array<string>;
  export let divClass: string = 'relative overflow-x-auto shadow-md sm:rounded-lg';
  export let tableClass: string = 'w-full text-sm text-left text-gray-500 dark:text-gray-400';
  export let theadClass: string = 'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400';
</script>

<div class={divClass}>
  <table class={tableClass}>
    <thead class={theadClass}>
      <tr>
        <th scope="col" class="p-4">
          <div class="flex items-center">
            <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="checkbox-all" class="sr-only">checkbox</label>
          </div>
        </th>
        {#each header as column}
          <th scope="col" class="px-6 py-3">
            {column}
          </th>
        {/each}
      </tr>
    </thead>
    <tbody>
      <slot />
    </tbody>
  </table>
</div>
