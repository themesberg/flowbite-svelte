<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  interface Props {
    children?: Snippet;
    divClass?: string | undefined | null;
    div2class?: string | undefined | null;
    div3class?: string | undefined | null;
    div4class?: string | undefined | null;
  }
  let { children, divClass, div2class, div3class, div4class }: Props = $props();
  const div: string =
    'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]';
  const inner: string =
    'rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800';
  const bot: string =
    'relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]';
  const botCen: string =
    'absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800';
</script>

<div class={twMerge(div, divClass)}>
  <div class={twMerge(inner, div2class)}>
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>

<div class={twMerge(bot, div3class)}>
  <div class={twMerge(botCen, div4class)} ></div>
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop divClass
@prop div2class
@prop div3class
@prop div4class
-->
