<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  interface Props {
    children: Snippet;
    color?: 'gray' | 'green' | 'red' | 'disabled';
    show?: boolean;
    class?: string | undefined;
    forId?: string | undefined;
  }

  let {
    children,
    color = 'gray',
    show = true,
    class: className,
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
    className
  );
</script>


  {#if show}
    <label {...attributes} class={labelCls} for={forId}>
      {@render children()}
    </label>
  {:else}
    {@render children()}
  {/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop color = 'gray'
@prop show = true
@prop class
@prop forId
@prop ...attributes
-->
