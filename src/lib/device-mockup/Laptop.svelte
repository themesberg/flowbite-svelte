<script lang="ts">
    import { twMerge } from "tailwind-merge";

    // laptop
  export let laptopDiv: string = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]';
  export let laptopSlot: string = 'rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800';
  export let laptopInner: string = 'rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800';
  export let laptopBot: string = 'relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]';
  export let laptopBotCen: string = 'absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800';

// laptop
let laptopDivCls: string = twMerge(laptopDiv, $$props.classLaptopDiv);
  let laptopSlotCls: string = twMerge(laptopSlot, $$props.classLaptopSlot);
  let laptopInnerCls: string = twMerge(laptopInner, $$props.classLaptopInner);
  let laptopBotCls: string = twMerge(laptopBot, $$props.classLaptopBot);
  let laptopBotCenCls: string = twMerge(laptopBotCen, $$props.classLaptopBotCen);

</script>

<div class={laptopDiv}>
    <div class={laptopInner}>
        <slot />
      </div>
</div>

<div class={laptopBot}>
    <div class={laptopBotCen} />
  </div>