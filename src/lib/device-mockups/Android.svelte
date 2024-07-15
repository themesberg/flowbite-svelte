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
    div7Class?: string | undefined | null;
  }

  let {
    children,
    divClass,
    div2Class,
    div3Class,
    div4Class,
    div5Class,
    div6Class,
    div7Class,
    ...attributes
  }: Props = $props();

  const div: string =
    'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[600px] w-[300px] shadow-xl';
  const slot: string =
    'rounded-xl overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';
  const top: string =
    'w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute';
  const leftTop: string =
    'h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
  const leftMid: string =
    'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
  const leftBot: string =
    'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
  const right: string =
    'h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';
</script>

<div class={twMerge(div, divClass)} {...attributes}>
  <div class={twMerge(top, div2Class)}></div>
  <div class={twMerge(leftTop, div3Class)}></div>
  <div class={twMerge(leftMid, div4Class)}></div>
  <div class={twMerge(leftBot, div5Class)}></div>
  <div class={twMerge(right, div6Class)}></div>
  <div class={twMerge(slot, div7Class)}>
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
@prop div7Class
@prop ...attributes
-->
