<script lang="ts">
  interface Props {
    children?: any;
    asideclass?: string | undefined;
    ariaLabel?: string | undefined;
    divclass?: string | undefined;
    nonActiveClass?: string | undefined;
    activeClass?: string | undefined;
    aclass?: string | undefined;
  }
  import { setContext } from 'svelte';
  import type { SidebarType } from '$lib/types';
  import { twMerge } from 'tailwind-merge';

  let {
    children,
    divclass,
    asideclass,
    ariaLabel,
    nonActiveClass = 'flex items-center text-base font-normal text-gray-900 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
    activeClass = 'flex items-center text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
    aclass,
    ...attributes
  } = $props<Props>();

  let divCls = twMerge(
    'overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800',
    divclass
  );
  // let activeCls = twMerge(activeClass, aclass)
  // let nonActiveCls = twMerge(nonActiveClass, aclass)
  let asideCls = twMerge('w-64', asideclass);
  // activeCls = twMerge(activeClass, aclass);
  // nonActiveClass = twMerge(nonActiveClass, aclass);
  // $inspect('aclass: ', aclass)
  setContext<SidebarType>('sidebarContext', {
    activeClass: twMerge(activeClass, aclass),
    nonActiveClass: twMerge(nonActiveClass, aclass)
  });
  // $inspect('activeClass: ', activeClass)
</script>

<aside {...attributes} class={asideCls} aria-label={ariaLabel}>
  <div class={twMerge(divCls)}>
    {@render children()}
  </div>
</aside>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: any;
@props:asideclass?: string | undefined;
@props:ariaLabel?: string | undefined;
@props:divclass?: string | undefined;
@props:nonActiveClass?:  string | undefined; = 'flex items-center text-base font-normal text-gray-900 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700';
@props:activeClass?:  string | undefined; = 'flex items-center text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700';
@props:aclass?: string | undefined;
-->
