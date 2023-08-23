<script lang="ts">
  import Badge from '$lib/badges/Badge.svelte';
  import { twMerge } from 'tailwind-merge';
  import type { FormSizeType, SelectOptionType } from '../types';
  import CloseButton from '$lib/utils/CloseButton.svelte';
  import { createEventDispatcher } from 'svelte';
  import { onMount } from 'svelte';

  const dispatch = createEventDispatcher();

  export let items: SelectOptionType[] = [];
  export let value: (string | number)[] = [];
  export let size: FormSizeType = 'md';
  export let dropdownClass: string = '';

  let selectItems: SelectOptionType[] = [];
  let show: boolean = false;

  const sizes = {
    sm: 'px-2 py-1',
    md: 'px-3 py-2',
    lg: 'px-4 py-3'
  };

  // Container
  const multiSelectClass: string = 'relative border border-gray-300 flex items-center rounded-lg gap-2 dark:border-gray-600 focus-within:ring-1 focus-within:border-primary-500 ring-primary-500 dark:focus-within:border-primary-500 dark:ring-primary-500';

  // Dropdown
  let multiSelectDropdown: string;
  $: multiSelectDropdown = twMerge('absolute z-50 p-3 flex flex-col gap-1 max-h-64 bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-600 left-0 top-[calc(100%+1rem)] rounded-lg cursor-pointer overflow-y-scroll w-full', dropdownClass);

  // Items
  const itemsClass: string = 'py-2 px-3 rounded-lg text-gray-600 hover:text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:text-gray-300 dark:hover:bg-gray-600';
  // Selected items
  const itemsSelectClass: string = 'bg-gray-100 text-black hover:text-black dark:text-white dark:bg-gray-600 dark:hover:text-white';

  onMount(() => {
    if (value.length) {
      items.map((item) => {
        if (value.includes(item.value)) {
          selectItems.push(item);
        }
      });
    }
  });

  const selectOption = (select: SelectOptionType) => {
    if (selectItems.includes(select)) {
      clearThisOption(select);
    } else {
      selectItems.push(select);
      value.push(select.value);
      selectItems = selectItems;
      value = value;
      dispatch('selected', selectItems);
    }
  };

  const clearAll = (e: MouseEvent) => {
    e.stopPropagation();
    selectItems = [];
    value = [];
    dispatch('selected', selectItems);
  };

  const clearThisOption = (select: SelectOptionType) => {
    if (selectItems.includes(select)) {
      selectItems = selectItems.filter((o) => o !== select);
      dispatch('selected', selectItems);
    }
    if (value.includes(select.value)) {
      value = value.filter((o) => o !== select.value);
    }
  };
</script>

<!-- Hidden select for form submission -->
<select {...$$restProps} bind:value hidden multiple>
  {#each items as { value, name }}
    <option {value}>{name}</option>
  {/each}
</select>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={() => (show = !show)} on:focusout={() => (show = false)} tabindex="-1" role="listbox" class={twMerge(multiSelectClass, sizes[size], $$props.class)}>
  <span class="flex gap-2 flex-wrap">
    {#if selectItems.length}
      {#each selectItems as item (item.name)}
        <slot {item} clear={() => clearThisOption(item)}>
          <Badge color="dark" large={size === 'lg'} dismissable params={{ duration: 100 }} on:close={() => clearThisOption(item)}>
            {item.name}
          </Badge>
        </slot>
      {/each}
    {/if}
  </span>
  <div class="flex ml-auto gap-2 items-center">
    {#if selectItems.length}
      <CloseButton on:click={clearAll} color="none" class="p-0 focus:ring-gray-400" />
    {/if}
    <div class="w-[1px] bg-gray-300 dark:bg-gray-600" />
    <svg class="cursor-pointer h-3 w-3 ml-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={show ? 'm1 5 4-4 4 4' : 'm9 1-4 4-4-4'} />
    </svg>
  </div>

  {#if show}
    <div on:click|stopPropagation role="presentation" class={multiSelectDropdown}>
      {#each items as item (item.name)}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={() => selectOption(item)} role="presentation" class={twMerge(itemsClass, selectItems.includes(item) && itemsSelectClass)}>
          {item.name}
        </div>
      {/each}
    </div>
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let items: SelectOptionType[] = [];
@prop export let value: (string | number)[] = [];
@prop export let size: FormSizeType = 'md';
@prop export let dropdownClass: string = '';
-->
