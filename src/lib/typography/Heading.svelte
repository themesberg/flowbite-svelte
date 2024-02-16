<script lang="ts">
  interface Props {
    children: any;
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    class?: string | undefined;
  }
  import { twMerge } from 'tailwind-merge';
  let { children, tag = 'h1', class: classname, ...attributes } = $props<Props>();

  const textSizes = {
    h1: 'text-5xl font-extrabold',
    h2: 'text-4xl font-bold',
    h3: 'text-3xl font-bold',
    h4: 'text-2xl font-bold',
    h5: 'text-xl font-bold',
    h6: 'text-lg font-bold'
  };
</script>

<svelte:element
  this={tag}
  {...attributes}
  class={twMerge(textSizes[tag], 'w-full text-gray-900 dark:text-white', classname)}
>
  {@render children()}
</svelte:element>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.vercel.app/)
## Props
@prop children,
@prop tag = 'h1',
@prop class: classname,
@prop ...attributes
-->
