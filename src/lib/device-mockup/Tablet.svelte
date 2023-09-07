<script lang="ts">
    import { twMerge } from "tailwind-merge";

// tablet
export let div: string = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]';
  export let slot: string = 'rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800';
  export let leftTop: string = 'h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
  export let leftMid: string = 'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
  export let leftBot: string = 'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
  export let right: string = 'h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';

// tablet

let divCls: string = twMerge(div, $$props.classdiv);
  let slotCls: string = twMerge(slot, $$props.classslot);
  let leftTopCls: string = twMerge(leftTop, $$props.classleftTop);
  let leftMidCls: string = twMerge(leftMid, $$props.classleftMid);
  let leftBotCls: string = twMerge(leftBot, $$props.classleftBot);
  let rightCls: string = twMerge(right, $$props.classright);

</script>

<div class={div}>
  <div class={leftTop} />
  <div class={leftMid} />
  <div class={leftBot} />
  <div class={right} />
  <div class={slot}>
    <slot/>
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let leftTop: string;
@prop export let leftMid: string;
@prop export let leftBot: string;
@prop export let right: string;
-->
