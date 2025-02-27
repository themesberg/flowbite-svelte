<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  interface $$Props {
    div?: string;
    slot?: string;
    rightTop?: string;
    rightBot?: string;
    top?: string;
    bot?: string;
    classTop?: string;
    classRightTop?: string;
    classRightBot?: string;
    classSlot?: string;
    classBot?: string;
    class?: string;
  }

  export let div: $$Props['div'] = 'relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-t-[2.5rem] h-[63px] max-w-[133px]';
  export let slot: $$Props['slot'] = 'rounded-[2rem] overflow-hidden h-[193px] w-[188px]';
  export let rightTop: $$Props['rightTop'] = 'h-[41px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[40px] rounded-r-lg';
  export let rightBot: $$Props['rightBot'] = 'h-[32px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[88px] rounded-r-lg';
  export let top: $$Props['top'] = 'relative mx-auto border-gray-900 dark:bg-gray-800 dark:border-gray-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]';
  export let bot: $$Props['bot'] = 'relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-b-[2.5rem] h-[63px] max-w-[133px]';
  export let classTop: $$Props['classTop'] = '';
  export let classRightTop: $$Props['classRightTop'] = '';
  export let classRightBot: $$Props['classRightBot'] = '';
  export let classSlot: $$Props['classSlot'] = '';
  export let classBot: $$Props['classBot'] = '';
</script>

<div class={twMerge(div, $$props.class)}></div>
<div class={twMerge(top, classTop)}>
  <div class={twMerge(rightTop, classRightTop)}></div>
  <div class={twMerge(rightBot, classRightBot)}></div>
  <div class={twMerge(slot, classSlot)}>
    <slot></slot>
  </div>
</div>
<div class={twMerge(bot, classBot)}></div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let div: $$Props['div'] = 'relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-t-[2.5rem] h-[63px] max-w-[133px]';
@prop export let slot: $$Props['slot'] = 'rounded-[2rem] overflow-hidden h-[193px] w-[188px]';
@prop export let rightTop: $$Props['rightTop'] = 'h-[41px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[40px] rounded-r-lg';
@prop export let rightBot: $$Props['rightBot'] = 'h-[32px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[88px] rounded-r-lg';
@prop export let top: $$Props['top'] = 'relative mx-auto border-gray-900 dark:bg-gray-800 dark:border-gray-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]';
@prop export let bot: $$Props['bot'] = 'relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-b-[2.5rem] h-[63px] max-w-[133px]';
@prop export let classTop: $$Props['classTop'] = '';
@prop export let classRightTop: $$Props['classRightTop'] = '';
@prop export let classRightBot: $$Props['classRightBot'] = '';
@prop export let classSlot: $$Props['classSlot'] = '';
@prop export let classBot: $$Props['classBot'] = '';
-->
