<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  interface $$Props extends HTMLAnchorAttributes {
    href?: string;
    ariaLabel?: string;
    aClass?: string;
    target?: string;
  }

  export let href: $$Props['href'] = '';
  export let ariaLabel: $$Props['ariaLabel'] = '';
  export let aClass: $$Props['aClass'] = 'text-gray-500 hover:text-gray-900 dark:hover:text-white';
  export let target: $$Props['target'] = undefined;
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
@prop export let href: $$Props['href'] = '';
@prop export let ariaLabel: $$Props['ariaLabel'] = '';
@prop export let aClass: $$Props['aClass'] = 'text-gray-500 hover:text-gray-900 dark:hover:text-white';
@prop export let target: $$Props['target'] = undefined;
-->
