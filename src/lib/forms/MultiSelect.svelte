<script lang="ts">
  import Badge from '$lib/badge/Badge.svelte';
  import CloseButton from '$lib/utils/CloseButton.svelte';
  import { twMerge } from 'tailwind-merge';
  import type { FormSizeType, SelectOptionType } from '../types';
  import { createEventDispatcher } from 'svelte';

  const dispatcher = createEventDispatcher();
  export let items: SelectOptionType<any>[] = [];
  export let value: (string | number)[] = [];
  export let size: FormSizeType = 'md';
  export let dropdownClass: string = '';
  export let placeholder: string = '';
  $: selectItems = items.filter((x) => value.includes(x.value));
  let show: boolean = false;

  const sizes = {
    sm: 'px-2 py-1 min-h-[2.4rem]',
    md: 'px-3 py-1 min-h-[2.7rem]',
    lg: 'px-4 py-2 min-h-[3.2rem]'
  };

  // Container
  const multiSelectClass: string = 'relative border border-gray-300 flex items-center rounded-lg gap-2 dark:border-gray-600 focus-within:ring-1 focus-within:border-primary-500 ring-primary-500 dark:focus-within:border-primary-500 dark:ring-primary-500 focus-visible:outline-none';

  // Dropdown
  let multiSelectDropdown: string;
  $: multiSelectDropdown = twMerge('absolute z-50 p-3 flex flex-col gap-1 max-h-64 bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-600 start-0 top-[calc(100%+1rem)] rounded-lg cursor-pointer overflow-y-scroll w-full', dropdownClass);

  // Items
  const itemsClass: string = 'py-2 px-3 rounded-lg text-gray-600 hover:text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:text-gray-300 dark:hover:bg-gray-600';
  // Selected items
  const itemsSelectClass: string = 'bg-gray-100 text-black font-semibold hover:text-black dark:text-white dark:bg-gray-600 dark:hover:text-white';
  // Active item
  let activeIndex: number | null = null;
  $: activeItem = activeIndex !== null? items[((activeIndex % items.length) + items.length) % items.length] : null;

  const activeItemClass: string = 'bg-primary-100 text-primary-500 dark:bg-primary-500 dark:text-primary-100 hover:bg-primary-100 dark:hover:bg-primary-500 hover:text-primary-600 dark:hover:text-primary-100';

  const selectOption = (select: SelectOptionType<any>) => {
    if (value.includes(select.value)) {
      clearThisOption(select);
    } else if (!value.includes(select.value)) {
      value = [...value, select.value];
      dispatcher('change');
    }
  };

  const clearAll = (e: MouseEvent) => {
    e.stopPropagation();
    value = [];
    dispatcher('change');
  };

  const clearThisOption = (select: SelectOptionType<any>) => {
    if (value.includes(select.value)) {
      value = value.filter((o) => o !== select.value);
      dispatcher('change');
    }
  };

  // Keyboard navigation
  function handleEscape() {
    if (show) {
      show = false;
    }
  }
  function handleToggleActiveItem() {
    if (!show) {
      show = true;
      activeIndex = 0;
    }
    else {
      if (activeItem !== null) selectOption(activeItem);
    }
  }
  function handleArrowUpDown(offset: number) {
    if (!show) {
      show = true;
      activeIndex = 0;
    }
    else {
      if (activeIndex !== null) {
        activeIndex += offset;
      }
      else {
        activeIndex = 0;
      }
    }
  }
  function handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'Escape':
        handleEscape();
        break;
      case 'Enter':
      case ' ':
        handleToggleActiveItem();
        break;
      case 'ArrowDown':
        handleArrowUpDown(1);
        break;
      case 'ArrowUp':
        handleArrowUpDown(-1);
        break;
      default:
        return;
    }
    event.stopPropagation();
    event.preventDefault();
  }

</script>

<!-- Hidden select for form submission -->
<select {...$$restProps} {value} hidden multiple on:input>
  {#each items as { value, name }}
    <option {value}>{name}</option>
  {/each}
</select>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={() => (show = !show)} on:focusout={() => (show = false)} on:keydown={handleKeyDown} tabindex="0" role="listbox" class={twMerge(multiSelectClass, sizes[size], $$props.class)}>
  {#if !selectItems.length}
    <span class="text-gray-400">{placeholder}</span>
  {/if}
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
  <div class="flex ms-auto gap-2 items-center">
    {#if selectItems.length}
      <CloseButton {size} on:click={clearAll} color="none" class="p-0 focus:ring-gray-400 dark:text-white" />
    {/if}
    <div class="w-[1px] bg-gray-300 dark:bg-gray-600"></div>
    <svg class="cursor-pointer h-3 w-3 ms-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={show ? 'm1 5 4-4 4 4' : 'm9 1-4 4-4-4'} />
    </svg>
  </div>

  {#if show}
    <div on:click|stopPropagation role="presentation" class={multiSelectDropdown}>
      {#each items as item (item.name)}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={() => selectOption(item)} role="presentation" class={twMerge(itemsClass, selectItems.includes(item) && itemsSelectClass, activeItem === item && activeItemClass)}>
          {item.name}
        </div>
      {/each}
    </div>
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let items: SelectOptionType<any>[] = [];
@prop export let value: (string | number)[] = [];
@prop export let size: FormSizeType = 'md';
@prop export let dropdownClass: string = '';
@prop export let placeholder: string = '';
-->
