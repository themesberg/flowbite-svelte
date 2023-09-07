<script lang="ts">
    import { twMerge } from "tailwind-merge";


  // android
  export let div: string = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[600px] w-[300px] shadow-xl';
  export let slot: string = 'rounded-xl overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';
  export let top: string = 'w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute';
  export let leftTop: string = 'h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
  export let leftMid: string = 'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
  export let leftBot: string = 'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
  export let right: string = 'h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';

  // android
  let divCls: string = twMerge(div, $$props.classdiv);
  let slotCls: string = twMerge(slot, $$props.classslot);
  let topCls: string = twMerge(top, $$props.classtop);
  let leftTopCls: string = twMerge(leftTop, $$props.classleftTop);
  let leftMidCls: string = twMerge(leftMid, $$props.classleftMid);
  let leftBotCls: string = twMerge(leftBot, $$props.classleftBot);
  let rightCls: string = twMerge(right, $$props.classright);

</script>

<div class={div}>
  <div class={top} />
  <div class={leftTop} />
  <div class={leftMid} />
  <div class={leftBot} />
  <div class={right} />
  <div class={slot}>
    <slot />
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let top: string;
@prop export let leftTop: string;
@prop export let leftMid: string;
@prop export let leftBot: string;
@prop export let right: string;
-->
