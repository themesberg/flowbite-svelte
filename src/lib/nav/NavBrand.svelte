<script lang="ts">
  import type { Snippet } from 'svelte';
  import { getContext } from 'svelte';
  import type { navbarType } from '$lib/types';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  interface Props extends HTMLAnchorAttributes{
    children?: Snippet;
    siteName: string | undefined | null;
    closeNav?: () => void;
    aClass?: string | undefined;
    spanClass?: string | undefined;
  }

  let { children, siteName, closeNav, aClass, spanClass, ...attributes }: Props = $props();

  const context = getContext<navbarType>('navbarContext');
  closeNav = context.closeNav ?? closeNav;

  let aCls = twMerge('flex items-center space-x-3 rtl:space-x-reverse', aClass);
  let spanCls = twMerge(
    'self-center whitespace-nowrap text-2xl font-semibold text-primary-900 dark:text-white sm:text-3xl',
    spanClass
  );
</script>

<a href="/" onclick={closeNav} class={aCls} {...attributes}>
  {#if children}
    {@render children()}
  {/if}
  <span class={spanCls}>{siteName}</span>
</a>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop siteName
@prop closeNav
@prop aClass
@prop spanClass
@prop ...attributes
-->
