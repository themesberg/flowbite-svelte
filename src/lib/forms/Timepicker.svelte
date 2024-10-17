<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { ButtonColorType } from '$lib/types';
  import type { ComponentType } from 'svelte';
  import { Dropdown, DropdownItem, Button, Input, ButtonGroup } from '$lib';
  import InputAddon from './InputAddon.svelte';

  export let id: string = 'time';
  export let value: string = '00:00';
  export let min: string = '';
  export let max: string = '';
  export let required: boolean = true;
  export let disabled: boolean = false;
  export let color: 'base' | 'red' | 'green' | undefined = 'base';
  export let buttonColor: ButtonColorType = 'primary';
  export let icon: ComponentType | string = `<svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg>`;
  export let dropdown: boolean = false;
  export let dropdownLabel: string = '';
  export let dropdownOptions: Array<{ value: string; label: string }> = [];

  let dropdownOpen = false;

  const dispatch = createEventDispatcher();

  let selectedOption = dropdownOptions[0];

  function handleChange(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    dispatch('change', dropdown ? { time: newValue, [dropdownLabel.toLowerCase()]: selectedOption.value } : newValue);
  }

  function handleOptionChange(option: { value: string; label: string }) {
    selectedOption = option;
    dispatch('change', { time: value, [dropdownLabel.toLowerCase()]: option.value });
    dropdownOpen = false;
  }
</script>

{#if dropdown}
  <ButtonGroup>
    <Input {id} type="time" {color} class="focus:ring-0 focus:outline-none block w-full p-2.5 border-r-0" {min} {max} bind:value {required} {disabled} on:change={handleChange} />
    <Button color={buttonColor} class="rounded-r-lg">
      {dropdownLabel}
      <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </Button>
    <Dropdown bind:open={dropdownOpen}>
      {#each dropdownOptions as option}
        <DropdownItem on:click={() => handleOptionChange(option)}>
          {option.label}
        </DropdownItem>
      {/each}
    </Dropdown>
  </ButtonGroup>
{:else}
  <ButtonGroup>
    <Input {id} type="time" class="focus:ring-0 focus:outline-none block w-full p-2.5 border-r-0" {min} {max} bind:value {required} {disabled} on:change={handleChange} />
    <InputAddon>
      {#if typeof icon === 'string'}
        {@html icon}
      {:else if icon}
        <svelte:component this={icon} class="w-4 h-4 text-gray-500 dark:text-gray-400" />
      {/if}
    </InputAddon>
  </ButtonGroup>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let id: string = 'time';
@prop export let value: string = '00:00';
@prop export let min: string = '';
@prop export let max: string = '';
@prop export let required: boolean = true;
@prop export let disabled: boolean = false;
@prop export let color: 'base' | 'red' | 'green' | undefined = 'base';
@prop export let buttonColor: ButtonColorType = 'primary';
@prop export let icon: ComponentType | string = `<svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/> </svg>`;
@prop export let dropdown: boolean = false;
@prop export let dropdownLabel: string = '';
@prop export let dropdownOptions: Array<{ value: string; label: string }> = [];
-->
