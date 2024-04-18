<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  interface Props {
    children?: Snippet;
    divclass?: string;
    div2class?: string;
    div3class?: string;
    div4class?: string;
    div5class?: string;
    div6class?: string;
    div7class?: string;
  }
  let {
    children,
    divclass,
    div2class,
    div3class,
    div4class,
    div5class,
    div6class,
    div7class
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

<div class={twMerge(div, divclass)}>
  <div class={twMerge(top, div2class)}></div>
  <div class={twMerge(leftTop, div3class)}></div>
  <div class={twMerge(leftMid, div4class)}></div>
  <div class={twMerge(leftBot, div5class)}></div>
  <div class={twMerge(right, div6class)} ></div>
  <div class={twMerge(slot, div7class)}>
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: Snippet;
@props:divclass?: string;
@props:div2class?: string;
@props:div3class?: string;
@props:div4class?: string;
@props:div5class?: string;
@props:div6class?: string;
@props:div7class?: string;
-->
