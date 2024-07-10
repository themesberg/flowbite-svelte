<script lang="ts">
  import type { Snippet } from 'svelte';
  import { setContext } from 'svelte';
  import type { SidebarType } from '$lib/types';
  import { twMerge } from 'tailwind-merge';
  interface Props {
    children: Snippet;
    asideClass?: string | undefined;
    ariaLabel?: string | undefined;
    divClass?: string | undefined;
    nonActiveClass?: string | undefined;
    activeClass?: string | undefined;
    class?: string | undefined;
  }
  let {
    children,
    divClass,
    asideClass,
    ariaLabel,
    nonActiveClass = '',
    activeClass = '',
    class: className,
    ...attributes
  }: Props = $props();
  
  const activeCls = 'flex items-center text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
  const nonActiveCls = 'flex items-center text-base font-normal text-gray-900 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
  let divCls = twMerge(
    'overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800',
    divClass
  );

  let asideCls = twMerge('w-64', asideClass);
  
  setContext<SidebarType>('sidebarContext', {
    activeClass: twMerge(activeCls, activeClass, className),
    nonActiveClass: twMerge(nonActiveCls, nonActiveClass, className)
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
@prop children
@prop divClass
@prop asideClass
@prop ariaLabel
@prop nonActiveClass = ''
@prop activeClass = ''
@prop class: className
@prop ...attributes
-->
