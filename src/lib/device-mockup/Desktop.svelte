<script lang="ts">
    import { twMerge } from "tailwind-merge";

 
  // desktop
  export let desktopInner: string = 'rounded-xl overflow-hidden h-[140px] md:h-[262px]';
  export let desktopBot: string = 'relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]';
  export let desktopBotUnder: string = 'relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]';
  export let destopDiv: string = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]';
  export let desktopSlot: string = 'rounded-xl overflow-hidden h-[140px] md:h-[262px]';

  
  
  // desktop
  let desktopInnerCls: string = twMerge(desktopInner, $$props.classDesktopInner);
  let desktopBotCls: string = twMerge(desktopBot, $$props.classDesktopBot);
  let desktopBotUnderCls: string = twMerge(desktopBotUnder, $$props.classDesktopBotUnder);
  let destopDivCls: string = twMerge(destopDiv, $$props.classDestopDiv);
  let desktopSlotCls: string = twMerge(desktopSlot, $$props.classDesktopSlot);

</script>

<div class={destopDiv}>
    <div class={desktopInner}>
        <slot />
      </div>

</div>
<div class={desktopBot} />
<div class={desktopBotUnder} />
