<script lang="ts">
  import { twJoin, twMerge } from 'tailwind-merge';
  import DefaultMockup from './DefaultMockup.svelte';
  import Ios from './Ios.svelte';
  import Android from './Android.svelte';
  import Tablet from './Tablet.svelte';
  import Smartwatch from './Smartwatch.svelte';

  export let device: 'default' | 'ios' | 'android' | 'tablet' | 'laptop' | 'desktop' | 'smartwatch' = 'default';

  // android
  export let androidDiv: string = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[600px] w-[300px] shadow-xl';
  export let androidSlot: string = 'rounded-xl overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';
  export let androidTop: string = 'w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute';
  export let androidLeftTop: string = 'h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
  export let androidLeftMid: string = 'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
  export let androidLeftBot: string = 'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
  export let androidRight: string = 'h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';

  // default
  export let defaultDiv: string = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]';
  export let defaultSlot: string = 'rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';
  export let defaultTop: string = 'h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
  export let defaultLeftTop: string = 'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
  export let defaultLeftBot: string = 'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
  export let defaultRight: string = 'h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';

  // desktop
  export let desktopInner: string = 'rounded-xl overflow-hidden h-[140px] md:h-[262px]';
  export let desktopBot: string = 'relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]';
  export let desktopBotUnder: string = 'relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]';
  export let destopDiv: string = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]';
  export let desktopSlot: string = 'rounded-xl overflow-hidden h-[140px] md:h-[262px]';

  // ios
  export let iosDiv: string = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl';
  export let iosSlot: string = 'rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';
  export let iosTop: string = 'w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute';
  export let iosLeftTop: string = 'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
  export let iosLeftBot: string = 'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
  export let iosRight: string = 'h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';

  // laptop
  export let laptopDiv: string = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]';
  export let laptopSlot: string = 'rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800';
  export let laptopInner: string = 'rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800';
  export let laptopBot: string = 'relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]';
  export let laptopBotCen: string = 'absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800';

  // smartwatch
  export let smartwatchDiv: string = 'relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-t-[2.5rem] h-[63px] max-w-[133px]';
  export let smartwatchSlot: string = 'rounded-[2rem] overflow-hidden h-[193px] w-[188px]';
  export let smartRightTop: string = 'h-[41px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[40px] rounded-r-lg';
  export let smartRightBot: string = 'h-[32px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[88px] rounded-r-lg';
  export let smartTop: string = 'relative mx-auto border-gray-900 dark:bg-gray-800 dark:border-gray-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]';
  export let smartBot: string = 'relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-b-[2.5rem] h-[63px] max-w-[133px]';
  export let smartwatchInner: string = 'rounded-[2rem] overflow-hidden h-[193px] w-[188px]';

  // tablet
  export let tabletDiv: string = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]';
  export let tabletSlot: string = 'rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800';
  export let tabletLeftTop: string = 'h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
  export let tabletLeftMid: string = 'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
  export let tabletLeftBot: string = 'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
  export let tabletRight: string = 'h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';

  // android
  let androidDivCls: string = twMerge(androidDiv, $$props.classAndroidDiv);
  let androidSlotCls: string = twMerge(androidSlot, $$props.classAndroidSlot);
  let androidTopCls: string = twMerge(androidTop, $$props.classAndroidTop);
  let androidLeftTopCls: string = twMerge(androidLeftTop, $$props.classAndroidLeftTop);
  let androidLeftMidCls: string = twMerge(androidLeftMid, $$props.classAndroidLeftMid);
  let androidLeftBotCls: string = twMerge(androidLeftBot, $$props.classAndroidLeftBot);
  let androidRightCls: string = twMerge(androidRight, $$props.classAndroidRight);

  //default
  let defaultDivCls: string = twMerge(defaultDiv, $$props.classDefaultDiv);
  let defaultSlotCls: string = twMerge(defaultSlot, $$props.classDefaultSlot);
  let defaultTopCls: string = twMerge(defaultTop, $$props.classDefaultTop);
  let defaultLeftTopCls: string = twMerge(defaultLeftTop, $$props.classDefaultLeftTop);
  let defaultLeftBotCls: string = twMerge(defaultLeftBot, $$props.classDefaultLeftBot);
  let defaultRightCls: string = twMerge(defaultRight, $$props.classDefaultRight);

  // desktop
  let desktopInnerCls: string = twMerge(desktopInner, $$props.classDesktopInner);
  let desktopBotCls: string = twMerge(desktopBot, $$props.classDesktopBot);
  let desktopBotUnderCls: string = twMerge(desktopBotUnder, $$props.classDesktopBotUnder);
  let destopDivCls: string = twMerge(destopDiv, $$props.classDestopDiv);
  let desktopSlotCls: string = twMerge(desktopSlot, $$props.classDesktopSlot);

  // ios
  let iosDivCls: string = twMerge(iosDiv, $$props.classIosDiv);
  let iosSlotCls: string = twMerge(iosSlot, $$props.classIosSlot);
  let iosTopCls: string = twMerge(iosTop, $$props.classIosTop);
  let iosLeftTopCls: string = twMerge(iosLeftTop, $$props.classIosLeftTop);
  let iosLeftBotCls: string = twMerge(iosLeftBot, $$props.classIosLeftBot);
  let iosRightCls: string = twMerge(iosRight, $$props.classIosRight);

  // laptop
  let laptopDivCls: string = twMerge(laptopDiv, $$props.classLaptopDiv);
  let laptopSlotCls: string = twMerge(laptopSlot, $$props.classLaptopSlot);
  let laptopInnerCls: string = twMerge(laptopInner, $$props.classLaptopInner);
  let laptopBotCls: string = twMerge(laptopBot, $$props.classLaptopBot);
  let laptopBotCenCls: string = twMerge(laptopBotCen, $$props.classLaptopBotCen);

  // smartwatch
  let smartwatchDivCls: string = twMerge(smartwatchDiv, $$props.classSmartwatchDiv);
  let smartwatchSlotCls: string = twMerge(smartwatchSlot, $$props.classSmartwatchSlot);
  let smartRightTopCls: string = twMerge(smartRightTop, $$props.classSmartRightTop);
  let smartRightBotCls: string = twMerge(smartRightBot, $$props.classSmartRightBot);
  let smartTopCls: string = twMerge(smartTop, $$props.classSmartTop);
  let smartBotCls: string = twMerge(smartBot, $$props.classSmartBot);
  let smartwatchInnerCls: string = twMerge(smartwatchInner, $$props.classSmartwatchInner);

  // tablet

  let tabletDivCls: string = twMerge(tabletDiv, $$props.classTabletDiv);
  let tabletSlotCls: string = twMerge(tabletSlot, $$props.classTabletSlot);
  let tabletLeftTopCls: string = twMerge(tabletLeftTop, $$props.classTabletLeftTop);
  let tabletLeftMidCls: string = twMerge(tabletLeftMid, $$props.classTabletLeftMid);
  let tabletLeftBotCls: string = twMerge(tabletLeftBot, $$props.classTabletLeftBot);
  let tabletRightCls: string = twMerge(tabletRight, $$props.classTabletRight);

  const divClasses = {
    default: defaultDivCls,
    ios: iosDivCls,
    android: androidDivCls,
    tablet: tabletDivCls,
    laptop: laptopDivCls,
    desktop: destopDivCls,
    smartwatch: smartwatchDivCls
  };

  const slotClasses = {
    default: defaultSlotCls,
    ios: iosSlotCls,
    android: androidSlotCls,
    tablet: tabletSlotCls,
    laptop: laptopSlotCls,
    desktop: desktopSlotCls,
    smartwatch: smartwatchSlotCls
  };
</script>

<div class={twMerge(divClasses[device], $$props.class)}>
  {#if device === 'default'}
    <DefaultMockup defaultTop={defaultTopCls} defaultLeftTop={defaultLeftTopCls} defaultLeftBot={defaultLeftBotCls} defaultRight={defaultRightCls} />
  {:else if device === 'ios'}
    <Ios iosTop={iosTopCls} iosLeftTop={iosLeftTopCls} iosLeftBot={iosLeftBotCls} iosRight={iosRightCls} />
  {:else if device === 'android'}
    <Android androidTop={androidTopCls} androidLeftTop={androidLeftTopCls} androidLeftMid={androidLeftMidCls} androidLeftBot={androidLeftBotCls} androidRight={androidRightCls} />
  {:else if device === 'tablet'}
    <Tablet tabletLeftTop={tabletLeftTopCls} tabletLeftMid={tabletLeftMidCls} tabletLeftBot={tabletLeftBotCls} tabletRight={tabletRightCls} />
  {/if}
  {#if device === 'laptop'}
    <div class={laptopInnerCls}>
      <slot />
    </div>
  {:else if device === 'desktop'}
    <div class={desktopInnerCls}>
      <slot />
    </div>
  {:else if device === 'smartwatch'}
    <!-- No code -->
  {:else}
    <div class={slotClasses[device]}>
      <slot />
    </div>
  {/if}
</div>
{#if device === 'laptop'}
  <div class={laptopBotCls}>
    <div class={laptopBotCenCls} />
  </div>
{:else if device === 'desktop'}
  <div class={desktopBotCls} />
  <div class={desktopBotUnderCls} />
{:else if device === 'smartwatch'}
  <div class={smartTopCls}>
    <Smartwatch smartRightTop={smartRightTopCls} smartRightBot={smartRightBotCls} />
    <div class={smartwatchInnerCls}>
      <slot />
    </div>
  </div>
  <div class={smartBotCls} />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let device: 'default' | 'ios' | 'android' | 'tablet' | 'laptop' | 'desktop' | 'smartwatch' = 'default';
@prop export let androidDiv: string = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[600px] w-[300px] shadow-xl';
@prop export let androidSlot: string = 'rounded-xl overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';
@prop export let androidTop: string = 'w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute';
@prop export let androidLeftTop: string = 'h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
@prop export let androidLeftMid: string = 'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
@prop export let androidLeftBot: string = 'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
@prop export let androidRight: string = 'h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';
@prop export let defaultDiv: string = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]';
@prop export let defaultSlot: string = 'rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';
@prop export let defaultTop: string = 'h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
@prop export let defaultLeftTop: string = 'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
@prop export let defaultLeftBot: string = 'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
@prop export let defaultRight: string = 'h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';
@prop export let desktopInner: string = 'rounded-xl overflow-hidden h-[140px] md:h-[262px]';
@prop export let desktopBot: string = 'relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]';
@prop export let desktopBotUnder: string = 'relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]';
@prop export let destopDiv: string = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]';
@prop export let desktopSlot: string = 'rounded-xl overflow-hidden h-[140px] md:h-[262px]';
@prop export let iosDiv: string = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl';
@prop export let iosSlot: string = 'rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';
@prop export let iosTop: string = 'w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute';
@prop export let iosLeftTop: string = 'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
@prop export let iosLeftBot: string = 'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
@prop export let iosRight: string = 'h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';
@prop export let laptopDiv: string = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]';
@prop export let laptopSlot: string = 'rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800';
@prop export let laptopInner: string = 'rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800';
@prop export let laptopBot: string = 'relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]';
@prop export let laptopBotCen: string = 'absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800';
@prop export let smartwatchDiv: string = 'relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-t-[2.5rem] h-[63px] max-w-[133px]';
@prop export let smartwatchSlot: string = 'rounded-[2rem] overflow-hidden h-[193px] w-[188px]';
@prop export let smartRightTop: string = 'h-[41px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[40px] rounded-r-lg';
@prop export let smartRightBot: string = 'h-[32px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[88px] rounded-r-lg';
@prop export let smartTop: string = 'relative mx-auto border-gray-900 dark:bg-gray-800 dark:border-gray-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]';
@prop export let smartBot: string = 'relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-b-[2.5rem] h-[63px] max-w-[133px]';
@prop export let smartwatchInner: string = 'rounded-[2rem] overflow-hidden h-[193px] w-[188px]';
@prop export let tabletDiv: string = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]';
@prop export let tabletSlot: string = 'rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800';
@prop export let tabletLeftTop: string = 'h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
@prop export let tabletLeftMid: string = 'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
@prop export let tabletLeftBot: string = 'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
@prop export let tabletRight: string = 'h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';
-->
