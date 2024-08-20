<script lang="ts">
  import type { Snippet } from 'svelte';
  import { getContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { navbarType } from '$lib/types';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLUListElement> {
    children: Snippet;
    class?: string | undefined;
  }
  let { children, class: ulclass, ...restProps }: Props = $props();

  let breakPoint: navbarType['breakPoint'];
  // let navStatus: navbarType['navStatus'];
  const context = getContext<navbarType>('navbarContext');
  breakPoint = context.breakPoint ?? 'md';
  // navStatus = context.navStatus;

  const ulBreaks = {
    md: 'md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 md:dark:bg-gray-900',
    lg: 'lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:p-0 lg:dark:bg-gray-900',
    xl: 'xl:mt-0 xl:flex-row xl:space-x-8 xl:border-0 lg:p-0 xl:dark:bg-gray-900',
    xxl: '2xl:mt-0 2xl:flex-row 2xl:space-x-8 2xl:border-0 2xl:p-0 2xl:dark:bg-gray-900'
  };

  let ulCls = twMerge('font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-transparent rtl:space-x-reverse dark:bg-gray-800 dark:border-gray-700', ulBreaks[breakPoint], ulclass);
  // $inspect('context.breakPoint: ',ulBreak[breakPoint])
</script>

<ul class={ulCls} {...restProps}>
  {@render children()}
</ul>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: ulclass
@prop ...restProps
-->
