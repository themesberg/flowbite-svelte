<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  interface Props {
    children?: Snippet;
    color?: 'gray' | 'green' | 'red' | 'disabled';
    show?: boolean;
    labelclass?: string | undefined;
    forId?: string | undefined;
  }

  let {
    children,
    color = 'gray',
    show = true,
    labelclass,
    forId,
    ...attributes
  }: Props = $props();

  const colorClasses = {
    gray: 'text-gray-900 dark:text-gray-300',
    green: 'text-green-700 dark:text-green-500',
    red: 'text-red-700 dark:text-red-500',
    disabled: 'text-gray-400 dark:text-gray-500'
  };

  let labelCls = twMerge(
    'text-sm rtl:text-right font-medium block',
    colorClasses[color],
    labelclass
  );
</script>

{#if children}
  {#if show}
    <label {...attributes} class={labelCls} for={forId}>
      {@render children()}
    </label>
  {:else}
    {@render children()}
  {/if}
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: Snippet;
@props:color?:  'gray' | 'green' | 'red' | 'disabled'; = 'gray';
@props:show?:  boolean; = true;
@props:labelclass?: string | undefined;
@props:forId?: string | undefined;
-->
