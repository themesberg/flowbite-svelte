<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  interface Props extends HTMLAnchorAttributes {
    spanClass?: string | undefined;
    aClass?: string | undefined;
    href?: string | undefined;
    by?: string | undefined;
    copyrightMessage?: string | undefined;
    year?: number | undefined;
  }

  import { twMerge } from 'tailwind-merge';
  let {
    spanClass,
    aClass,
    href,
    by,
    copyrightMessage = 'All Rights Reserved.',
    year,
    ...attributes
  }: Props = $props();

  if (!year) year = new Date().getFullYear();

  let spanCls: string = twMerge(
    'block text-sm text-gray-500 sm:text-center dark:text-gray-400',
    spanClass
  );
  let aCls: string = twMerge('hover:underline', aClass);
</script>

<span class={spanCls}>
  &copy; {year}
  {#if href}
    <a {...attributes} {href} class={aCls}>
      {by}
    </a>
  {:else}
    <span class="ms-1">{by}</span>
  {/if}
  {copyrightMessage}
</span>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop spanClass
@prop aClass
@prop href
@prop by
@prop copyrightMessage = 'All Rights Reserved.'
@prop year
@prop ...attributes
-->
