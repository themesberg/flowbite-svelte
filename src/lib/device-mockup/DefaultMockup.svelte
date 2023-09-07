<script lang="ts">
    import { twMerge } from "tailwind-merge";

// default
export let defaultDiv: string = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]';
  export let defaultSlot: string = 'rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';
  export let defaultTop: string = 'h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
  export let defaultLeftTop: string = 'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
  export let defaultLeftBot: string = 'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
  export let defaultRight: string = 'h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';

  //default
  let defaultDivCls: string = twMerge(defaultDiv, $$props.classDefaultDiv);
  let defaultSlotCls: string = twMerge(defaultSlot, $$props.classDefaultSlot);
  let defaultTopCls: string = twMerge(defaultTop, $$props.classDefaultTop);
  let defaultLeftTopCls: string = twMerge(defaultLeftTop, $$props.classDefaultLeftTop);
  let defaultLeftBotCls: string = twMerge(defaultLeftBot, $$props.classDefaultLeftBot);
  let defaultRightCls: string = twMerge(defaultRight, $$props.classDefaultRight);

</script>

<div class={defaultDiv}>
  <div class={defaultTop} />
  <div class={defaultLeftTop} />
  <div class={defaultLeftBot} />
  <div class={defaultRight} />
  <div class={defaultSlot}>
  <slot/>
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let defaultTop: string;
@prop export let defaultLeftTop: string;
@prop export let defaultLeftBot: string;
@prop export let defaultRight: string;
-->
