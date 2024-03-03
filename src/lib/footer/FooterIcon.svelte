<script lang="ts">
  interface Props {
    children?: any;
    href?: string | undefined;
    ariaLabel?: string | undefined;
    aclass?: string | undefined;
    target?: string | undefined;
  }
  import { twMerge } from 'tailwind-merge';
  let { children, href, ariaLabel, aclass, target, ...attributes } = $props<Props>();
  const aCls: string = twMerge('text-gray-500 hover:text-gray-900 dark:hover:text-white', aclass);
</script>

{#if href}
  <a {...attributes} {href} {target} aria-label={ariaLabel} class={aCls}>
    {@render children()}
  </a>
{:else}
  {@render children()}
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: any;
@props:href?: string | undefined;
@props:ariaLabel?: string | undefined;
@props:aclass?: string | undefined;
@props:target?: string | undefined;
-->
