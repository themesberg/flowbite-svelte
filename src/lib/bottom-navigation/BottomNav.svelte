<script lang="ts" context="module">
  export type BottomNavType = {
    activeClass: string | undefined | null;
  };
</script>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import { setContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { BottomNavVariantType } from '../types';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    children: Snippet;
    header?: Snippet;
    activeUrl?: string | undefined | null;
    position?: 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky';
    navType?: BottomNavVariantType;
    outerClass?: string | undefined | null;
    innerClass?: string | undefined | null;
    activeClass?: string | undefined | null;
  }

  let {
    children,
    header,
    position = 'fixed',
    navType = 'default',
    outerClass,
    innerClass,
    activeClass,
    ...attributes
  }: Props = $props();

  const activeCls = twMerge(
    'text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900',
    activeClass
  );

  setContext('navType', navType);
  setContext<BottomNavType>('bottomNavType', { activeClass: activeCls });

  const outerDivClasses = {
    default: 'bottom-0 start-0 h-16 bg-white border-t',
    border: 'bottom-0 start-0 h-16 bg-white border-t',
    application:
      'h-16 max-w-lg -translate-x-1/2 rtl:translate-x-1/2 bg-white border rounded-full bottom-4 start-1/2',
    pagination:
      'bottom-0 h-16 -translate-x-1/2 rtl:translate-x-1/2 bg-white border-t start-1/2',
    group:
      'bottom-0 -translate-x-1/2 rtl:translate-x-1/2 bg-white border-t start-1/2',
    card: 'bottom-0 start-0 h-16 bg-white border-t',
    meeting:
      'bottom-0 start-0 grid h-16 grid-cols-1 px-8 bg-white border-t md:grid-cols-3',
    video:
      'bottom-0 start-0 grid h-24 grid-cols-1 px-8 bg-white border-t md:grid-cols-3'
  };

  const innerDivClasses = {
    default: '',
    border: '',
    application: '',
    pagination: '',
    group: '',
    card: '',
    meeting: 'flex items-center justify-center mx-auto',
    video: 'flex items-center w-full'
  };

  const outerCls = twMerge(
    position,
    'w-full z-30 border-gray-200 dark:bg-gray-700 dark:border-gray-600',
    outerDivClasses[navType],
    outerClass
  );
  const innerCls = twMerge(
    'grid h-full max-w-lg mx-auto',
    innerDivClasses[navType],
    innerClass
  );
</script>

<div {...attributes} class={outerCls}>
  {#if header}
    {@render header()}
  {/if}
  
  <div class={innerCls}>
    {@render children()}
  </div>
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop header
@prop position = 'fixed'
@prop navType = 'default'
@prop outerClass
@prop innerClass
@prop activeClass
@prop ...attributes
-->
