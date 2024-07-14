<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  interface Props extends HTMLAnchorAttributes {
    children: Snippet;
    href?: string | undefined;
    ariaLabel?: string | undefined;
    class?: string | undefined;
  }

  let { children, href, ariaLabel, class: aClass, ...attributes }: Props =
    $props();
  const aCls: string = twMerge(
    'text-gray-500 hover:text-gray-900 dark:hover:text-white',
    aClass
  );
</script>

  {#if href}
    <a {...attributes} {href} aria-label={ariaLabel} class={aCls}>
      {@render children()}
    </a>
  {:else}
    {@render children()}
  {/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop href
@prop ariaLabel
@prop class: aClass
@prop ...attributes
-->
