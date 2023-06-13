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
  ## Feature
  [Go to Footer](https://flowbite-svelte.com/docs/components/footer)
  ## Props
  @prop href: string = '';
  @prop ariaLabel: string = '';
  @prop aClass: string = 'text-gray-500 hover:text-gray-900 dark:hover:text-white';
  @prop target: string | undefined = undefined;
-->
