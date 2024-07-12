<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  interface Props {
    children?: Snippet;
    divClass?: string | undefined | null;
    div2class?: string | undefined | null;
    div3class?: string | undefined | null;
    div4class?: string | undefined | null;
    div5class?: string | undefined | null;
    div6class?: string | undefined | null;
  }
  let {
    children,
    divClass,
    div2class,
    div3class,
    div4class,
    div5class,
    div6class
  }: Props = $props();
  const div: string =
    'relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-t-[2.5rem] h-[63px] max-w-[133px]';
  const slot: string = 'rounded-[2rem] overflow-hidden h-[193px] w-[188px]';
  const rightTop: string =
    'h-[41px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[40px] rounded-r-lg';
  const rightBot: string =
    'h-[32px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[88px] rounded-r-lg';
  const top: string =
    'relative mx-auto border-gray-900 dark:bg-gray-800 dark:border-gray-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]';
  const bot: string =
    'relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-b-[2.5rem] h-[63px] max-w-[133px]';
</script>

<div class={twMerge(div, divClass)}></div>
<div class={twMerge(top, div2class)}>
  <div class={twMerge(rightTop, div3class)}></div>
  <div class={twMerge(rightBot, div4class)}></div>
  <div class={twMerge(slot, div5class)}>
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>
<div class={twMerge(bot, div6class)}></div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop divClass
@prop div2class
@prop div3class
@prop div4class
@prop div5class
@prop div6class
-->
