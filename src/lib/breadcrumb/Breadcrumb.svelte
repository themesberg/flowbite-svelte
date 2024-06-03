<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  interface Props {
    children: Snippet;
    solid?: boolean;
    navclass?: string | undefined;
    solidclass?: string | undefined;
    olclass?: string | undefined;
    ariaLabel?: string | undefined;
    class?: string | undefined;
  }

  let {
    children,
    solid = false,
    navclass,
    solidclass,
    olclass,
    ariaLabel = 'Breadcrumb',
    class: classname,
    ...attributes
  }: Props = $props();

  let navCls: string = twMerge('flex', navclass);
  let solidCls: string = twMerge(
    'flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700',
    solidclass
  );
  let olCls: string = twMerge(
    'inline-flex items-center space-x-1 rtl:space-x-reverse md:space-x-3 rtl:space-x-reverse',
    olclass
  );
  let classNav: string = solid ? solidCls : navCls;
</script>

<nav
  aria-label={ariaLabel}
  {...attributes}
  class={twMerge(classNav, classname)}
>
  
  <ol class={olCls}>
    {@render children()}
  </ol>
  
</nav>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop solid = false
@prop navclass
@prop solidclass
@prop olclass
@prop ariaLabel = 'Breadcrumb'
@prop class: classname
@prop ...attributes
-->
