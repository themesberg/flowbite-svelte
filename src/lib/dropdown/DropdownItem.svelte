<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { page } from '$app/stores';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  interface Props extends HTMLAnchorAttributes{
    children: Snippet;
    aClass?: string | undefined | null;
    href?: string | undefined | null;
    activeClass?: string | undefined | null;
    liClass?: string | undefined | null;
  }

  let { aClass, children, href, activeClass, liClass, ...attributes }: Props = $props();

  let currentUrl = $state();
  $effect(() => {
    currentUrl = $page.url.pathname;
  });
  const aCls = twMerge(
    'block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white',
    aClass
  );
  const activeCls = twMerge(
    'block px-4 py-2 text-primary-700 dark:text-primary-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white',
    activeClass
  );
</script>

<li class={liClass}>
  {#if href}
    <a {href} class={currentUrl === href ? activeCls : aCls} {...attributes}>
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
