<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let inner: string = 'rounded-xl overflow-hidden h-[140px] md:h-[262px]';
  export let bot: string = 'relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]';
  export let botUnder: string = 'relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]';
  export let div: string = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]';
</script>

<div class={twMerge(div, $$props.class)}>
  <div class={twMerge(inner, $$props.classInner)}>
    <slot></slot>
  </div>
</div>
<div class={twMerge(bot, $$props.classBot)}></div>
<div class={twMerge(botUnder, $$props.classBotUnder)}></div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let inner: string = 'rounded-xl overflow-hidden h-[140px] md:h-[262px]';
@prop export let bot: string = 'relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]';
@prop export let botUnder: string = 'relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]';
@prop export let div: string = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]';
-->
