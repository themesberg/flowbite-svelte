<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLElement> {
    children: Snippet;
    solid?: boolean;
    navClass?: string | undefined | null;
    solidClass?: string | undefined | null;
    olClass?: string | undefined | null;
    ariaLabel?: string | undefined | null;
    class?: string | undefined | null;
  }

  let {
    children,
    solid = false,
    navClass,
    solidClass,
    olClass,
    ariaLabel = 'Breadcrumb',
    class: classname,
    ...attributes
  }: Props = $props();

  let navCls: string = twMerge('flex', navClass);
  let solidCls: string = twMerge(
    'flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700',
    solidClass
  );
  let olCls: string = twMerge(
    'inline-flex items-center space-x-1 rtl:space-x-reverse md:space-x-3 rtl:space-x-reverse',
    olClass
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
@prop navClass
@prop solidClass
@prop olClass
@prop ariaLabel = 'Breadcrumb'
@prop class: classname
@prop ...attributes
-->
