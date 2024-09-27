<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  interface $$Props {
    div?: string;
    slot?: string;
    leftTop?: string;
    leftMid?: string;
    leftBot?: string;
    right?: string;
  }
  export let div: $$Props['div'] = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]';
  export let slot: $$Props['slot'] = 'rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800';
  export let leftTop: $$Props['leftTop'] = 'h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
  export let leftMid: $$Props['leftMid'] = 'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
  export let leftBot: $$Props['leftBot'] = 'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
  export let right: $$Props['right'] = 'h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';
</script>

<div class={twMerge(div, $$props.class)}>
  <div class={twMerge(leftTop, $$props.classLeftTop)}></div>
  <div class={twMerge(leftMid, $$props.classLeftMid)}></div>
  <div class={twMerge(leftBot, $$props.classLeftBot)}></div>
  <div class={twMerge(right, $$props.classRight)}></div>
  <div class={twMerge(slot, $$props.classSlot)}>
    <slot></slot>
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let div: $$Props['div'] = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]';
@prop export let slot: $$Props['slot'] = 'rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800';
@prop export let leftTop: $$Props['leftTop'] = 'h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
@prop export let leftMid: $$Props['leftMid'] = 'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
@prop export let leftBot: $$Props['leftBot'] = 'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
@prop export let right: $$Props['right'] = 'h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';
-->
