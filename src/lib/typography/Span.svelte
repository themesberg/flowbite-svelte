<script lang="ts">
  interface Props {
    children: any;
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
  import { twMerge } from 'tailwind-merge';

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
  } = $props<Props>();

  // const highlightClass: string = 'text-blue-600 dark:text-blue-500';
  // export let decorationClass: string = 'decoration-2 decoration-blue-400 dark:decoration-blue-600';
  // export let gradientClass: string = 'text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400';

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
  {@render children()}
</span>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.vercel.app/)
## Props
@props: children: any;
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
