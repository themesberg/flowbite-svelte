<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    children?: Snippet;
    divClass?: string | undefined | null;
    div2Class?: string | undefined | null;
    div3Class?: string | undefined | null;
    div4Class?: string | undefined | null;
    div5Class?: string | undefined | null;
    div6Class?: string | undefined | null;
  }
  let {
    children,
    divClass,
    div2Class,
    div3Class,
    div4Class,
    div5Class,
    div6Class,
    ...attributes
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

<div {...attributes}>
<div class={twMerge(div, divClass)}></div>
<div class={twMerge(top, div2Class)}>
  <div class={twMerge(rightTop, div3Class)}></div>
  <div class={twMerge(rightBot, div4Class)}></div>
  <div class={twMerge(slot, div5Class)}>
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>
<div class={twMerge(bot, div6Class)}></div>
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop divClass
@prop div2Class
@prop div3Class
@prop div4Class
@prop div5Class
@prop div6Class
@prop ...attributes
-->
