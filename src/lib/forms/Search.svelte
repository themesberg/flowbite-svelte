<script lang="ts">
  import type { FormSizeType } from '$lib/types';
  import Wrapper from '$lib/utils/Wrapper.svelte';
  import Input from './Input.svelte';
  export let size: FormSizeType = 'lg';
  export let placeholder: string = 'Search';
  export let value: string | number = '';

  const sizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };
</script>

<Wrapper class="relative w-full" show={$$slots.default}>
  <Input
    bind:value
    on:blur
    on:change
    on:input
    on:click
    on:focus
    on:keydown
    on:keypress
    on:keyup
    on:mouseenter
    on:mouseleave
    on:mouseover
    on:paste
    type="search"
    {placeholder}
    {size}
    {...$$restProps}
    class={$$props.class}>
    <svg
      slot="left"
      class={sizes[size]}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clip-rule="evenodd" />
    </svg>
    <!-- We can use it here. See below. This will trigger right padding
      <slot slot="right" />
    -->
  </Input>
  <!-- This slot should be within Input as a slot='right'
    Svelete has an issue with forwarded slots and even empty slot here will appear as existing slot in Input.
    Due to that we need the below slot and Wrapper around
  -->
  {#if $$slots.default}
    <div class="flex absolute inset-y-0 right-0 items-center pr-3 text-gray-500 dark:text-gray-400">
      <slot />
    </div>
  {/if}
</Wrapper>
