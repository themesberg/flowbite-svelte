<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  interface Props {
    children?: any;
    divclass?: string;
    div2class?: string;
    div3class?: string;
    div4class?: string;
  }
  let { children, divclass, div2class, div3class, div4class } = $props<Props>();
  const div: string = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]';
  const inner: string = 'rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800';
  const bot: string = 'relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]';
  const botCen: string = 'absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800';
</script>

<div class={twMerge(div, divclass)}>
  <div class={twMerge(inner, div2class)}>
    {@render children()}
  </div>
</div>

<div class={twMerge(bot, div3class)}>
  <div class={twMerge(botCen, div4class)} />
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: any;
@props:divclass?: string;
@props:div2class?: string;
@props:div3class?: string;
@props:div4class?: string;
-->
