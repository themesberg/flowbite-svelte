<script lang="ts">
  interface Props {
    spanclass?: string | undefined;
    aclass?: string | undefined;
    href?: string | undefined;
    by?: string | undefined;
    target?: string | undefined;
    copyrightMessage?: string | undefined;
    year?: number | undefined;
  }

  import { twMerge } from 'tailwind-merge';
  let {
    spanclass,
    aclass,
    href,
    by,
    target,
    copyrightMessage = 'All Rights Reserved.',
    year,
    ...attributes
  } = $props<Props>();

  if (!year) year = new Date().getFullYear();

  let spanCls: string = twMerge(
    'block text-sm text-gray-500 sm:text-center dark:text-gray-400',
    spanclass
  );
  let aCls: string = twMerge('hover:underline', aclass);
</script>

<span class={spanCls}>
  &copy; {year}
  {#if href}
    <a {...attributes} {href} {target} class={aCls}>
      {by}
    </a>
  {:else}
    <span class="ms-1">{by}</span>
  {/if}
  {copyrightMessage}
</span>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.vercel.app/)
## Props
@prop spanclass,
@prop aclass,
@prop href,
@prop by,
@prop target,
@prop copyrightMessage = 'All Rights Reserved.',
@prop year,
@prop ...attributes
-->
