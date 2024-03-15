<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  
  interface Props {
    children?: Snippet;
    icon?: boolean;
    divclass?: string | undefined;
    hrclass?: string | undefined;
    div2class?: string | undefined;
  }

  let { children, icon, divclass, hrclass, div2class, ...attributes }: Props = $props();
  let horizontalCls: string = twMerge('h-px my-8 bg-gray-200 border-0 dark:bg-gray-700', hrclass);
  let divCls = twMerge('inline-flex items-center justify-center w-full', divclass, children && 'relative');
  let innerDivCls = twMerge(
    'absolute px-4 -translate-x-1/2 rtl:translate-x-1/2 bg-white start-1/2 dark:bg-gray-900',
    icon
      ? 'absolute start-1/2 px-4 bg-white -translate-x-1/2 rtl:translate-x-1/2'
      : 'absolute px-3 font-medium text-gray-900 -translate-x-1/2 rtl:translate-x-1/2 bg-white start-1/2 dark:text-white dark:bg-gray-900 ',
    div2class
  );
</script>

{#if children}
  <div {...attributes} class={divCls}>
    <hr class={horizontalCls} />
    <div class={innerDivCls}>
      {@render children()}
    </div>
  </div>
{:else}
  <hr class={horizontalCls} />
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: Snippet;
@props:icon?: boolean;
@props:divclass?: string | undefined;
@props:hrclass?: string | undefined;
@props:div2class?: string | undefined;
-->
