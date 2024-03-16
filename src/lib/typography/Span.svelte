<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  interface Props {
    children?: Snippet;
    italic?: boolean;
    underline?: boolean;
    linethrough?: boolean;
    uppercase?: boolean;
    gradient?: boolean;
    highlight?: boolean;
    highlightClass?: string | undefined;
    class?: string | undefined;
    decorationClass?: string | undefined;
    gradientClass?: string | undefined;
  }

  let {
    children,
    class: classname,
    italic,
    underline,
    linethrough,
    uppercase,
    gradient,
    highlight,
    highlightClass = 'text-blue-600 dark:text-blue-500',
    decorationClass = 'decoration-2 decoration-blue-400 dark:decoration-blue-600',
    gradientClass = 'text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400',
    ...attributes
  }: Props = $props();

  let underlineClass = twMerge('underline', decorationClass);
  let classSpan: string = twMerge(
    italic && 'italic',
    underline && underlineClass,
    linethrough && 'line-through',
    uppercase && 'uppercase',
    gradient ? gradientClass : 'font-semibold text-gray-900 dark:text-white',
    highlight && highlightClass,
    classname
  );
</script>

<span {...attributes} class={classSpan}>
  {#if children}
    {@render children()}
  {/if}
</span>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: Snippet;
@props:italic?: boolean;
@props:underline?: boolean;
@props:linethrough?: boolean;
@props:uppercase?: boolean;
@props:gradient?: boolean;
@props:highlight?: boolean;
@props:highlightClass?:  string | undefined; = 'text-blue-600 dark:text-blue-500';
@props:class?: string | undefined;
@props:decorationClass?:  string | undefined; = 'decoration-2 decoration-blue-400 dark:decoration-blue-600';
@props:gradientClass?:  string | undefined; = 'text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400';
-->
