<script lang="ts">
  import type { SelectOptionType } from '../types';

  export let items: SelectOptionType[] = [];
  export let highlighted: boolean = false;
  export let defaultClass: string = '';
  export let value: (string | number)[] = [];

  let selectItems: SelectOptionType[] = [];
  let show: boolean = false;

  // Container
  const multiSelectClass: string =
    'relative !min-h-[55px] p-2 text-gray-900 bg-gray-50 border border-gray-300 flex items-center rounded-lg gap-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:border-2 dark:focus:border-2 focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500';
  // Pills Button
  const multiSelectBtn: string =
    'flex items-center gap-1 rounded-lg border overflow-hidden border-gray-300 dark:border-gray-500';
  // Dropdown
  const multiSelectDropdown: string =
    'absolute h-32 border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white left-0 top-[calc(100%+1rem)] rounded-lg bg-gray-50 cursor-pointer overflow-y-scroll w-full';
  // Items
  const itemsClass: string = 'p-1 pl-2 pr-2 hover:bg-gray-100 dark:hover:bg-gray-600';
  // Selected items
  const itemsSelectClass: string = 'bg-primary-500 text-white hover:bg-primary-600';

  const selectOption = (select: SelectOptionType) => {
    if (selectItems.includes(select)) {
      // todo
    } else {
      selectItems.push(select);
      value.push(select.value);
      selectItems = selectItems;
      value = value;
    }
  };

  const clearAll = () => {
    selectItems = [];
    value = [];
  };

  const clearThisOption = (select: SelectOptionType) => {
    if (selectItems.includes(select)) {
      selectItems = selectItems.filter((o) => o !== select);
    }
    if (value.includes(select.value)) {
      value = value.filter((o) => o !== select.value);
    }
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click={() => (show = !show)}
  on:blur={() => (show = !show)}
  role="listbox"
  tabindex="-1"
  class="{multiSelectClass} {defaultClass}">
  <span class="flex gap-2 flex-wrap">
    {#if selectItems.length}
      {#each selectItems as select, index}
        <button class={multiSelectBtn}>
          <span class="p-[1px] ml-[1.5px]">{select.name}</span>
          <svg
            on:click={(e) => {
              e.stopPropagation();
              clearThisOption(select);
            }}
            class="w-4 h-full pr-[1.5px] hover:bg-primary-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            role="button"
            tabindex="-1"
            ><path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd" /></svg>
        </button>
      {/each}
    {/if}
  </span>
  <div class="flex ml-auto gap-2">
    <button
      on:click={(e) => {
        e.stopPropagation();
        clearAll();
      }}>
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd" /></svg>
    </button>
    <div class="w-[1px] bg-gray-300" />
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        class="h-4 w-4 mb-1 mr-1 cursor-pointer"
        aria-label="chevron down"
        fill="none"
        viewBox="0 0 20 20"
        role="img"
        stroke-width="2"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19 9l-7 7-7-7"
          stroke="currentColor" /></svg>
    </button>
  </div>

  {#if show}
    <div class={multiSelectDropdown}>
      {#each items as item, index}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          role="presentation"
          on:click={(e) => {
            e.stopPropagation();
            selectOption(item);
          }}
          class="{itemsClass} {selectItems.includes(item) && highlighted ? itemsSelectClass : ''}">
          {item.name}
        </div>
      {/each}
    </div>
  {/if}
</div>

<!--
  @component
  ## Example
  ```
  <script>
    import MultiSelect from '../../../lib/forms/MultiSelect.svelte';

    let selected = [];
    let countries = [
      {value:"us", name: "United States"},
      {value:"ca", name: "Canada"},
      {value:"fr", name: "France"},
      {value:"jp", name: "Japan"},
      {value:"en", name: "England"},
    ]
  </script>

  <MultiSelect items={countries} bind:value={selected} />
  ```
-->
