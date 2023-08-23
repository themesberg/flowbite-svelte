<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let divWrapperClass: string = 'p-4 mt-6 bg-primary-50 rounded-lg dark:bg-primary-900';
  export let divClass: string = 'flex items-center mb-3';
  export let spanClass: string = 'bg-primary-100 text-primary-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-900';
  export let label: string = '';
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
## Component data
@prop export let divWrapperClass: string = 'p-4 mt-6 bg-primary-50 rounded-lg dark:bg-primary-900';
@prop export let divClass: string = 'flex items-center mb-3';
@prop export let spanClass: string = 'bg-primary-100 text-primary-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-900';
@prop export let label: string = '';
-->
