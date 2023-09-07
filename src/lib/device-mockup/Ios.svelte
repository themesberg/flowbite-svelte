<script lang="ts">
    import { twMerge } from "tailwind-merge";


// ios
export let iosDiv: string = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl';
  export let iosSlot: string = 'rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';
  export let iosTop: string = 'w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute';
  export let iosLeftTop: string = 'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
  export let iosLeftBot: string = 'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
  export let iosRight: string = 'h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';

// ios
let iosDivCls: string = twMerge(iosDiv, $$props.classIosDiv);
  let iosSlotCls: string = twMerge(iosSlot, $$props.classIosSlot);
  let iosTopCls: string = twMerge(iosTop, $$props.classIosTop);
  let iosLeftTopCls: string = twMerge(iosLeftTop, $$props.classIosLeftTop);
  let iosLeftBotCls: string = twMerge(iosLeftBot, $$props.classIosLeftBot);
  let iosRightCls: string = twMerge(iosRight, $$props.classIosRight);

</script>

<div class={iosDiv}>
  <div class={iosTop} />
  <div class={iosLeftTop} />
  <div class={iosLeftBot} />
  <div class={iosRight} />
  <div class={iosSlot}>
    <slot/>
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let iosTop: string;
@prop export let iosLeftTop: string;
@prop export let iosLeftBot: string;
@prop export let iosRight: string;
-->
