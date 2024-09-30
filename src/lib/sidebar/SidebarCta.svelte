<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  interface $$Props extends HTMLAttributes<HTMLDivElement> {
    divWrapperClass?: string;
    divClass?: string;
    spanClass?: string;
    label?: string;
  }

  export let divWrapperClass: $$Props['divWrapperClass'] = 'p-4 mt-6 bg-primary-50 rounded-lg dark:bg-primary-900';
  export let divClass: $$Props['divClass'] = 'flex items-center mb-3';
  export let spanClass: $$Props['spanClass'] = 'bg-primary-100 text-primary-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-900';
  export let label: $$Props['label'] = '';
</script>

<div {...$$restProps} id="dropdown-cta" class={twMerge(divWrapperClass, $$props.class)} role="alert">
  <div class={divClass}>
    <span class={spanClass}>{label}</span>
    {#if $$slots.icon}
      <slot name="icon" />
    {/if}
  </div>
  <slot />
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let divWrapperClass: $$Props['divWrapperClass'] = 'p-4 mt-6 bg-primary-50 rounded-lg dark:bg-primary-900';
@prop export let divClass: $$Props['divClass'] = 'flex items-center mb-3';
@prop export let spanClass: $$Props['spanClass'] = 'bg-primary-100 text-primary-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-900';
@prop export let label: $$Props['label'] = '';
-->
