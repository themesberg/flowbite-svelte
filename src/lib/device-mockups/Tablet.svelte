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
    'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]';
  const slot: string =
    'rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800';
  const leftTop: string =
    'h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
  const leftMid: string =
    'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
  const leftBot: string =
    'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
  const right: string =
    'h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';
</script>

<div class={twMerge(div, divClass)} {...attributes}>
  <div class={twMerge(leftTop, div2Class)}></div>
  <div class={twMerge(leftMid, div3Class)}></div>
  <div class={twMerge(leftBot, div4Class)}></div>
  <div class={twMerge(right, div5Class)}></div>
  <div class={twMerge(slot, div6Class)}>
    {#if children}
      {@render children()}
    {/if}
  </div>
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
