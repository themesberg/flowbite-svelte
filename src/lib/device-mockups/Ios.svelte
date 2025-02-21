<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  interface $$Props {
    div?: string;
    slot?: string;
    top?: string;
    leftTop?: string;
    leftBot?: string;
    right?: string;
    classTop?: string;
    classLeftTop?: string;
    classLeftBot?: string;
    classRight?: string;
    classSlot?: string;
    class?: string;
  }

  export let div: $$Props['div'] = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl';
  export let slot: $$Props['slot'] = 'rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';
  export let top: $$Props['top'] = 'w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute';
  export let leftTop: $$Props['leftTop'] = 'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
  export let leftBot: $$Props['leftBot'] = 'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
  export let right: $$Props['right'] = 'h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';
  export let classTop: $$Props['classTop'] = '';
  export let classLeftTop: $$Props['classLeftTop'] = '';
  export let classLeftBot: $$Props['classLeftBot'] = '';
  export let classRight: $$Props['classRight'] = '';
  export let classSlot: $$Props['classSlot'] = '';
</script>

<div class={twMerge(div, $$props.class)}>
  <div class={twMerge(top, classTop)}></div>
  <div class={twMerge(leftTop, classLeftTop)}></div>
  <div class={twMerge(leftBot, classLeftBot)}></div>
  <div class={twMerge(right, classRight)}></div>
  <div class={twMerge(slot, classSlot)}>
    <slot></slot>
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let div: $$Props['div'] = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl';
@prop export let slot: $$Props['slot'] = 'rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';
@prop export let top: $$Props['top'] = 'w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute';
@prop export let leftTop: $$Props['leftTop'] = 'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
@prop export let leftBot: $$Props['leftBot'] = 'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
@prop export let right: $$Props['right'] = 'h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';
@prop export let classTop: $$Props['classTop'] = '';
@prop export let classLeftTop: $$Props['classLeftTop'] = '';
@prop export let classLeftBot: $$Props['classLeftBot'] = '';
@prop export let classRight: $$Props['classRight'] = '';
@prop export let classSlot: $$Props['classSlot'] = '';
-->
