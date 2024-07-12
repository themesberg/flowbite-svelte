<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLElement>{
    children?: Snippet;
    icon?: boolean;
    divClass?: string | undefined;
    hrClass?: string | undefined;
    iconDivClass?: string | undefined;
    textSpanClass?: string | undefined;
    innerDivClass?: string | undefined;
  }

  let { children, icon, divClass, hrClass, innerDivClass, ...attributes }: Props = $props();

  let horizontalCls: string = twMerge(
    'h-px my-8 bg-gray-200 border-0 dark:bg-gray-700',
    hrClass
  );
  let divCls = twMerge(
    'inline-flex items-center justify-center w-full',
    divClass,
    children && 'relative'
  );
  let innerDivCls = twMerge(
    'absolute px-4 -translate-x-1/2 rtl:translate-x-1/2 bg-white start-1/2 dark:bg-gray-900',
    icon
      ? 'absolute start-1/2 px-4 bg-white -translate-x-1/2 rtl:translate-x-1/2'
      : 'absolute px-3 font-medium text-gray-900 -translate-x-1/2 rtl:translate-x-1/2 bg-white start-1/2 dark:text-white dark:bg-gray-900 ',
    innerDivClass
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
  <hr class={horizontalCls} {...attributes} />
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop icon
@prop divClass
@prop hrClass
@prop innerDivClass
@prop ...attributes
-->
