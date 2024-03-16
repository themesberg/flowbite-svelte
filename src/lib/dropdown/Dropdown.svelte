<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  interface Props {
    children: Snippet;
    divclass?: string | undefined;
    header?: Snippet;
    headerclass?: string | undefined;
    isOpen: boolean;
    footer?: Snippet;
    footerclass?: string | undefined;
    ulclass?: string | undefined;
  }

  let {
    children,
    header,
    isOpen,
    footer,
    footerclass,
    divclass,
    headerclass,
    ulclass,
    ...attributes
  }: Props = $props();

  let hidden = $state('hidden');

  $effect(() => {
    hidden = isOpen ? '' : 'hidden';
  });

  const divCls = $derived(
    twMerge(
      'z-10 w-44 mt-2 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700',
      hidden,
      divclass
    )
  );
  const headerCls = twMerge(
    'px-4 py-3 text-sm text-gray-900 dark:text-white',
    headerclass
  );
  const ulCls = twMerge(
    'py-2 text-sm text-gray-700 dark:text-gray-200',
    ulclass
  );
  const footerCls = twMerge('overflow-hidden rounded-b-lg py-1', footerclass);
  //   $inspect('Dropdown isOpen: ', isOpen, 'hidden: ', hidden)
</script>

<!-- Dropdown menu -->
<div {...attributes} class={divCls}>
  {#if header}
    <div class={headerCls}>
      {@render header()}
    </div>
  {/if}
  
    <ul class={ulCls}>
      {@render children()}
    </ul>
  
  {#if footer}
    <div class={footerCls}>
      {@render footer()}
    </div>
  {/if}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: Snippet;
@props:divclass?: string | undefined;
@props:header?: Snippet;
@props:headerclass?: string | undefined;
@props:isOpen: boolean;
@props:footer?: Snippet;
@props:footerclass?: string | undefined;
@props:ulclass?: string | undefined;
-->
