<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { page } from '$app/stores';
  interface Props {
    children: Snippet;
    aclass?: string;
    href?: string;
    target?: string;
    activeclass?: string;
    liClass?: string;
  }

  let { aclass, children, href, target, activeclass, liClass, ...attributes }: Props = $props();

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

<li class={liClass}>
  {#if href}
    <a {href} class={currentUrl === href ? activeCls : aCls} {target} {...attributes}>
      {@render children()}
    </a>
  {:else}
    {@render children()}
  {/if}
</li>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop aclass
@prop children
@prop href
@prop target
@prop activeclass
@prop liClass
@prop ...attributes
-->
