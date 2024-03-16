<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { page } from '$app/stores';
  interface Props {
    children?: Snippet;
    aclass?: string | undefined;
    href?: string | undefined;
    activeclass?: string | undefined;
  }

  let { aclass, children, href, activeclass, ...attributes }: Props = $props();

  let currentUrl = $state();
  $effect(() => {
    currentUrl = $page.url.pathname;
  });
  const aCls = twMerge(
    'block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white',
    aclass
  );
  const activeCls = twMerge(
    'block px-4 py-2 text-primary-700 dark:text-primary-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white',
    activeclass
  );
</script>

<li>
  {#if children}
    {#if href}
      <a {href} class={currentUrl === href ? activeCls : aCls} {...attributes}>
        {@render children()}
      </a>
    {:else}
      {@render children()}
    {/if}
  {/if}
</li>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: Snippet;
@props:aclass?: string | undefined;
@props:href?: string | undefined;
@props:activeclass?: string | undefined;
-->
