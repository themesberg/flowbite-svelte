<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let href: string = '';
  export let ariaLabel: string = '';
  export let aClass: string = 'text-gray-500 hover:text-gray-900 dark:hover:text-white';
  export let target: string | undefined = undefined;
</script>

{#if href}
  <a {...$$restProps} {href} {target} aria-label={ariaLabel} class={twMerge(aClass, $$props.class)}>
    <slot />
  </a>
{:else}
  <slot />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let href: string = '';
@prop export let ariaLabel: string = '';
@prop export let aClass: string = 'text-gray-500 hover:text-gray-900 dark:hover:text-white';
@prop export let target: string | undefined = undefined;
-->
