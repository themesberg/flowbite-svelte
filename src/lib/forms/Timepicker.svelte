<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { ButtonColorType } from '$lib/types';
  import type { ComponentType } from 'svelte';
  import { Dropdown, DropdownItem, Button, Input, ButtonGroup, Select, InputAddon } from '$lib';

  export let id = 'time';
  export let endId = 'end-time';
  export let value = '00:00';
  export let endValue = '00:00';
  export let min = '';
  export let max = '';
  export let required = true;
  export let disabled = false;
  export let color: 'base' | 'red' | 'green' | undefined = 'base';
  export let buttonColor: ButtonColorType = 'primary';
  export let icon: ComponentType | string = `<svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg>`;
  export let type: 'default' | 'dropdown' | 'select' | 'range' = 'default';
  export let optionLabel = '';
  export let options: { value: string; name: string }[] = [];
  export let selectedOption = '';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let divClass = 'inline-flex rounded-lg shadow-sm';
  export let inputClass = 'block disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right focus:ring-0 focus:outline-none p-2.5 border-r-0';
  export let selectClass = 'text-gray-900 disabled:text-gray-400 bg-gray-50 border border-gray-300 rounded-r-lg focus:ring-0 focus:outline-none block w-full p-2.5 border-l-1 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:disabled:text-gray-500 dark:focus:ring-primary-500 dark:focus:border-primary-500';

  let dropdownOpen = false;
  const dispatch = createEventDispatcher<{
    select: { time: string; endTime?: string; [key: string]: string };
  }>();

  function handleTimeChange(event: Event, isEndTime = false) {
    const newValue = (event.target as HTMLInputElement).value;
    if (isEndTime) {
      if (newValue < value) {
        // Swap times
        const temp = value;
        value = newValue;
        endValue = temp;
      } else {
        endValue = newValue;
      }
    } else {
      if (newValue > endValue) {
        // Swap times
        const temp = endValue;
        endValue = newValue;
        value = temp;
      } else {
        value = newValue;
      }
    }
    dispatchChange(value, endValue, selectedOption);
  }

  function handleOptionSelect(event: Event) {
    const newSelectedOption = (event.target as HTMLSelectElement).value;
    dispatchChange(value, endValue, newSelectedOption);
  }

  function handleDropdownSelect(option: { value: string; name: string }) {
    dropdownOpen = false;
    dispatchChange(value, endValue, option.value);
  }

  function dispatchChange(time: string, endTime: string, optionValue: string) {
    dispatch('select', {
      time,
      endTime,
      [optionLabel.toLowerCase()]: optionValue || options[0]?.value || ''
    });
  }
</script>

<ButtonGroup {size} {divClass}>
  <Input {id} {color} type="time" defaultClass="{inputClass} rounded-l-lg" {min} {max} bind:value on:change={(e) => handleTimeChange(e)} {required} {disabled} />
  {#if type === 'default'}
    <InputAddon class="rounded-r-lg">
      {#if typeof icon === 'string'}
        {@html icon}
      {:else if icon}
        <svelte:component this={icon} class="w-4 h-4 text-gray-500 dark:text-gray-400" />
      {/if}
    </InputAddon>
  {:else if type === 'select'}
    <Select defaultClass={selectClass} on:change={handleOptionSelect} items={options} value={selectedOption} />
  {:else if type === 'dropdown'}
    <Button color={buttonColor} class="rounded-r-lg">
      {optionLabel}
      <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </Button>
    <Dropdown bind:open={dropdownOpen}>
      {#each options as option}
        <DropdownItem on:click={() => handleDropdownSelect(option)}>
          {option.name}
        </DropdownItem>
      {/each}
    </Dropdown>
  {:else if type === 'range'}
    <InputAddon class="rounded-r-lg">
      {#if typeof icon === 'string'}
        {@html icon}
      {:else if icon}
        <svelte:component this={icon} class="w-4 h-4 text-gray-500 dark:text-gray-400" />
      {/if}
    </InputAddon>
    <span class="flex items-center justify-center text-gray-500 dark:text-gray-400 px-2">-</span>
    <Input id={endId} {color} type="time" defaultClass="{inputClass} rounded-l-lg" {min} {max} bind:value={endValue} on:change={(e) => handleTimeChange(e, true)} {required} {disabled} />
    <InputAddon>
      {#if typeof icon === 'string'}
        {@html icon}
      {:else if icon}
        <svelte:component this={icon} class="w-4 h-4 text-gray-500 dark:text-gray-400" />
      {/if}
    </InputAddon>
  {/if}
</ButtonGroup>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let id: string = 'time';
@prop export let endId: string = 'end-time';
@prop export let value: string = '00:00';
@prop export let endValue: string = '00:00';
@prop export let min: string = '';
@prop export let max: string = '';
@prop export let required: boolean = true;
@prop export let disabled: boolean = false;
@prop export let color: 'base' | 'red' | 'green' | undefined = 'base';
@prop export let buttonColor: ButtonColorType = 'primary';
@prop export let icon: ComponentType | string = `<svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/> </svg>`;
@prop export let type: 'default' | 'dropdown' | 'select' | 'range' = 'default';
@prop export let optionLabel: string = '';
@prop export let options: { value: string; name: string }[] = [];
@prop export let selectedOption: string = '';
@prop export let size: 'sm' | 'md' | 'lg' = 'md';
@prop export let divClass: string = 'inline-flex rounded-lg shadow-sm';
@prop export let inputClass: string = 'block disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right focus:ring-0 focus:outline-none p-2.5 border-r-0';
@prop export let selectClass: string = 'text-gray-900 disabled:text-gray-400 bg-gray-50 border border-gray-300 rounded-r-lg focus:ring-0 focus:outline-none block w-full p-2.5 border-l-1 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:disabled:text-gray-500 dark:focus:ring-primary-500 dark:focus:border-primary-500';
-->
