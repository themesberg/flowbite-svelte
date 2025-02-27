<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import type { FormSizeType } from '$lib/types';
  import Wrapper from '$lib/utils/Wrapper.svelte';
  import Input from './Input.svelte';

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  interface $$Props extends ComponentProps<Input> {
    size?: FormSizeType;
    placeholder?: string;
    value?: any;
  }

  export let size: NonNullable<$$Props['size']> = 'lg';
  export let placeholder: $$Props['placeholder'] = 'Search';
  export let value: $$Props['value'] = undefined;

  const sizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };
</script>

<Wrapper class="relative w-full" show={$$slots.default}>
  <Input bind:value on:blur on:change on:input on:click on:focus on:keydown on:keypress on:keyup on:mouseenter on:mouseleave on:mouseover on:paste type="search" {placeholder} {size} {...$$restProps} class={$$props.class}>
    <svg slot="left" class={sizes[size]} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
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
    <div class="flex absolute inset-y-0 end-0 items-center text-gray-500 dark:text-gray-400">
      <slot />
    </div>
  {/if}
</Wrapper>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let size: NonNullable<$$Props['size']> = 'lg';
@prop export let placeholder: $$Props['placeholder'] = 'Search';
@prop export let value: $$Props['value'] = undefined;
-->
