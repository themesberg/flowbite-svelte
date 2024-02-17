<script lang="ts">
  import { getContext } from 'svelte';
  import type { navbarType } from '$lib/types';
  import { twMerge } from 'tailwind-merge';
  
  interface Props {
    children?: any;
    siteName: string;
    closeNav?: () => void;
    aclass?: string | undefined;
    spanclass?: string | undefined;
  }

  let { children, siteName, closeNav, aclass, spanclass } = $props<Props>();

  const context = getContext<navbarType>('navbarContext');
  closeNav = context.closeNav ?? closeNav;
  
  let aCls = twMerge('flex items-center space-x-3 rtl:space-x-reverse', aclass);
  let spanCls = twMerge(
    'self-center whitespace-nowrap text-2xl font-semibold text-primary-900 dark:text-white sm:text-3xl',
    spanclass
  );
</script>

<a href="/" onclick={closeNav} class={aCls}>
  {#if children}
    {@render children()}
  {/if}
  <span class={spanCls}>{siteName}</span>
</a>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.vercel.app/)
## Props
@prop children,
@prop siteName,
@prop closeNav,
@prop aclass,
@prop spanclass
-->
